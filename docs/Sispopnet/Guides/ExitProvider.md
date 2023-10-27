title: Sispop Documentation | Sispopnet Exit Provider Guide | Linux
description: This guide walks you through the steps to set up a sispopnet exit provider with authentication support

# Sispopnet Exit Provider Guide
**Author**: Jeff (majestrate)

## Introduction

This document will guide you in the process of setting up an authenticated exit provider on sispopnet.
This document is written for the target audience of people who know how to run a commercial VPN.


## Architectual overview

The high level "bird's eye view" of the architecture of an exit provider is hub and spoke.
Multiple Sispopnet clients provide exit connectivity and all phone home to an auth server over a ZMQ socket.
The auth server will tell a sispopnet exit provider if a sispop address + auth code pair is valid at the current time.
This pair is sent when a sispopnet exit user establishes a new flow (convtag) with the exit, this happens on a regular interval.


## Auth Server Setup

Requirements for the auth server:

- cmake 
- python3
- c++17 compiler
- sispopmq

## Guide

First off, if you haven't already, add the sispopnet apt repository:

```
    sudo curl -so /etc/apt/trusted.gpg.d/sispop.gpg https://deb.sispop.site/pub.gpg
    echo "deb https://deb.sispop.site $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/sispop.list
    sudo apt update
```

On ubuntu you can install the dependencies via:

```
    sudo apt install python3-dev cmake git build-essential libsispopmq-dev
```

Clone the repository for the auth server and build it.

```
    git clone --recursive https://github.com/sispop-dev/sispop-pysispopmq -b stable pysispopmq
    cd pysispopmq
    python3 setup.py build
```

Install the built python module:

```
    sudo python3 setup.py install
```

You can run a test version of the auth server using:

```
    python3 -m sispopnet.auth --bind tcp://127.0.0.1:5555 --cmd /bin/true 
```

The `--bind` flag tells where to bind the zmq socket, it also takes `ipc:///path/to/auth.socket` to bind to a unix socket.

The `--cmd` flag is a path to a script or executable that is used for the actual logic of the authentication, the script is passed two arguments: `clientaddress.sispop` and `base64_encoded_auth_code`, the script should return exit code 0 on auth success or non-zero on auth failure.

An example implementation of this script could be the following shell script:

```bash
#!/usr/bin/env bash
grep $(sha256sum <<<"$2" | cut -d' ' -f1) /etc/sispop/auth-codes.txt
```

with this example script an auth code can be generated and added via:
```
    sha256sum <<<"$(base64 -e 'code goes here')" | cut -d' ' -f1 >> /etc/sispop/auth-codes.txt
```

NOTE: operators are advised to **not** use this example implementation.


## Sispopnet Configuration

The suggested configuration for sispopnet exits are as such:
```
    [router]
    min-connections=8
    max-connections=10
    
    [network]
    exit=true
    hops=2
    paths=8
    reachable=1
    ifaddr=10.0.0.1/16
    keyfile=/var/lib/sispopnet/exit.private
    auth=lmq
    auth-lmq=tcp://auth.server.goes.here:5555
```                 
post setup for exit (as root) given eth0 is used to get to the internet:
```
    echo 1 > /proc/sys/net/ipv4/ip_forward
    iptables -t nat -A POSTROUTING -s 10.0.0.0/16 -o eth0 -j MASQUERADE
```