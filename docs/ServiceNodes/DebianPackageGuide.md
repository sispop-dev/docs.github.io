title: Sispop Documentation | Service Node Debian Package Guide
description: This guide shows how to set up a Sispop Service Node with Debian packages. The guide goes through how to setup the initial repository, installing the packeges for sispopd and sispop storage server. The guide is great for a technical person looking into setting up a Masternode or Service Node.

# Debian Package Guide
Author: Jason (jagerman) 

Source: [https://deb.sispop.site/](https://deb.sispop.site/)

This repository contains debian/ubuntu builds of the core sispop tools (sispopd, cli/rpc wallets,
blockchain tools) for Debian and Ubuntu.

## Requirements

One of:

- Debian 9 ("stretch")
- Debian 10 ("buster")
- Debian unstable ("sid")
- Ubuntu 16.04 ("xenial")
- Ubuntu 18.04 ("bionic")
- Ubuntu 19.10 ("eoan")
- Ubuntu 20.04 ("focal")

> Note: Debian 9 and Ubuntu 16.04 are not recommended for new installations as support for them is likely to be deprecated soon.

## Express Guide

Start a new service node by running these four commands:

```
sudo curl -s https://deb.sispop.site/public.gpg | sudo apt-key add -

echo "deb https://deb.sispop.site $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/sispop.list

sudo apt update

sudo apt install sispop-service-node
```

The services will run via systemd as `sispop-node.service`, `sispop-storage-server.service`, and
`sispopnet-router.service`.

## Full Guide

### 1: Initial Repository Setup

You only need to do this step the first time you want to set up the repository; when you've done it
once, the repository will automatically update whenever you fetch new system updates.

To add the apt repository run the following command, replacing `<DISTRO>` in the second line with the
appropriate value (see below).

The following command installed Jagermans public key used to sign the Binaries.
```
sudo curl -s https://deb.sispop.site/public.gpg | sudo apt-key add -
```

The second command tells `apt` where to find the packages and needs you to replace `<DISTRO>` with your distro.

To find your `<Distro>` run the following command: `lsb_release -sc`

Alternatively your `<Distro>` can be found by using the following list:

- sid      (Debian testing/unstable)
- stretch  (Debian 9)
- buster   (Debian 10)
- xenial   (Ubuntu 16.04)
- bionic   (Ubuntu 18.04)
- eoan     (Ubuntu 19.10)
- focal    (Ubuntu 20.04)

```
echo "deb https://deb.sispop.site <DISTRO> main" | sudo tee /etc/apt/sources.list.d/sispop.list
```

Then resync your package repositories with:
```
sudo apt update
```

Now you can install one or more of the following packages as desired:

| **Package**                 | **Description**                                                                                            |
|-------------------------|--------------------------------------------------------------------------------------------------------|
| `sispop-service-node`     | Metapackage that does everything you need for a running service node.                                  |
| `sispopd`                 | The sispop daemon (automatically pulled in by `sispop-service-node`).                                      |
| `sispop-storage-server`   | The sispop storage server, required for a service node (automatically pulled in by `sispop-service-node`). |
| `sispopnet-router`        | The sispopnet package configured to run as a router (automatically pulled in by `sispop-service-node`).    |
| `sispop-wallet-cli`       | The command-line wallet.                                                                               |
| `sispop-wallet-rpc`       | The rpc wallet (for script-based wallet interaction such as a pool would need).                        |
| `sispop-blockchain-tools` | the various sispop-blockchain-* commands for advanced blockchain management.                             |
| `sispopnet-client`        | The sispopnet package configured to run as a client to access sispopnet. (Not for service nodes).          |

There are also a few library packages such as `libsispop-core*` containing the shared library code, as
well as some backports of updated software for the older distributions; these can typically be
ignored and will be installed automatically as needed.

There is also a `libsispop-core-dev` package containing the sispop
headers, but it's highly unlikely that you will need that for common use.

#### Installing a Package

To install a package run the following command replacing <package> with one of the packages available above:

```
sudo apt install <package>
```

For example: To install `sispop-service-node` package run the following command:
```
sudo apt install sispop-service-node
```

### 2. Sispop Service Node Operation

Running a service node requires multiple packages (sispopd and sispop-storage-server) with synchronized
configuration between them.  There are two ways to approach this:

#### **Automatic**:  

Install the `sispop-service-node` package.

```
sudo apt install sispop-service-node
```
This will detect your public IP (or allow you to enter it yourself) and automatically update the sispop.conf configuration file with the necessary additional settings to run a service node.

#### **Manually**:  

Install the `sispopd`, `sispop-storage-server`, and `sispopnet-router` packages:

```
sudo apt install sispopd sispop-storage-server sispopnet-router
```

Then edit the configuration as desired in `/etc/sispop/sispop.conf`, `/etc/sispop/storage.conf`, and
`/etc/sispop/sispopnet-router.ini`.  (See the next section for details).

Restart any of these after configuration updates using one or more of:

```
systemctl restart sispop-node
systemctl restart sispop-storage-server
systemctl restart sispopnet-router
```

---

#### Adding flags to config file.

Note that you can add any of sispopd's command-line arguments as settings in this file rather than
needing to change the service file.  For example, if you wanted to run sispopd as
`sispopd --p2p-bind-ip 1.2.3.4 --p2p-bind-port=22222 --restricted-rpc` then you would add:

```
p2p-bind-ip=1.2.3.4
p2p-bind-port=22222
restricted-rpc=1
```

into `/etc/sispop/sispop.conf` and then restart sispopd using:

```
sudo systemctl restart sispop-node
```

For example, to run sispopd as a service node, the `sispop-service-node` helper package will configure sispop.conf with these options (you can add them directly if not using the `sispop-service-node` helper package):
```
service-node=1
service-node-public-ip=1.2.3.4
storage-server-port=22021
```

---

### 3. Interacting with the running sispopd

If you run the sispopd binary with a command, it forwards this command to the running sispopd. So, for example, to get the current sispopd status you can run (note that sudo is not required!):
```
sispopd status

sispopd print_sn_status
```

To prepare a service node registration run the following command:

```
sispopd prepare_registration
```

The terminal will show the next steps to conduct to have your Service Node staked and thus receiving rewards.

To see the outputs of your node you can run the following command:
```
journalctl -u sispop-node -af
```
This is useful to see if your node is syncing with the blockchain.  (Press Ctrl-C to stop watching
the log).

For a full list of supported commands run:

```
sispopd help
```

For interacting with a running testnet node, add `--testnet` into the command, such as:

```
sispopd --testnet status
sispopd --testnet print_sn_status
sispopd --testnet prepare_registration
```

You can also get basic statistics (such as uptime proof and ping times) on the running daemons from
the `systemctl status` commands:

```
systemctl status sispop-node
systemctl status sispop-storage-server
systemctl status sispopnet-router
```

## Additional/Optional: 

### Upgrading

When a new release is available upgrading it as simple as syncing with the repository:

```
sudo apt update
```

Then install any updates using:

```
sudo apt upgrade
```

> Note that this will install both updated sispopd packages *and* any available system updates (this is generally a good thing!).  

During the upgrade, sispopd (both mainnet and testnet) will be restarted if they are currently running to switch to the updated sispopd.

If for some reason you want to install *only* updated sispop package upgrades but not other system packages then instead of the `sudo apt upgrade` you can use:

```
sudo apt install sispop-storage-server sispopd sispopnet-router
```
(and change the above to whatever packages you want to install updates for).

---

### Installing a non-service-node sispopd and cli wallet.

To install a non-service-node sispopd and the cli wallet:

```
sudo apt install sispopd sispop-wallet-cli
```

Once installed the binaries will be in your path, so you can simply run `sispop-wallet-cli` as an
ordinary user to use the command-line wallet.

#### Non-service-node Sispop operation

Installing the sispopd package sets up a `sispop-node` systemd service that runs an ordinary sispop node,
but not a service node.  This node can be used, for example, for wallet synchronization.  If you
don't want the node to run you can stop it after installation using:

```
sudo systemctl stop sispop-node
```

If you want to disable it entirely (so that it doesn't start up automatically at boot) you can use:

```
sudo systemctl disable --now sispop-node
```

If you later want to re-enable it you would use:

```
sudo systemctl enable --now sispop-node
```

> Remove the `--now` if you want to reenable it but not actually try starting it.

For advanced users, sispopd creates a `_sispop` user and stores all the files (blockchain, service node
key, etc.) owned by this user in `/var/lib/sispop`.

---

### Running a Testnet Node

The sispopd package also installs a second systemd service, sispop-testnet-node, for easily running a testnet node (either at the same time or instead of the mainnet node).  To enable and start this, simply run:

```
sudo systemctl enable --now sispop-testnet-node
```

This will start it and configure systemd to automatically start it when the system boots.

The `sispop-service-node` package also updates the testnet.conf file to run as a (testnet) service
node; in order to actually run it you need to activate and start the sispop-testnet-node.service
(as above) and also the testnet storage server and sispopnet routers:

    sudo systemctl enable --now sispop-testnet-node sispop-testnet-storage-server sispopnet-testnet-router

---

## Reporting issues

Contact me via @jagerman42 (Telegram) or @jagerman#6841 (in the Sispop Discord).
