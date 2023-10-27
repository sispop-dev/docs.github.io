title: Sispop Documentation | Service Node upgrade from Legacy to Launcher
description: This document is for Service Node Operators who have used the previous Service Node Full Guide and wish to update to the Sispop-launcher.

# Update Guide
This document is for Service Node Operators who have used the previous Service Node Full Guide and wish to update to the Sispop-launcher.

> Note: This Guide is to help update a running sispopd 3.0.6 Service Node to the sispop-launcher.

> If you are using any screen's you will need kill the screens and go back to the Service Node Full Guide and follow it once more.

## Step 1: Load and Update your VPS.

If you are updating your Service Node you would by now have a good understanding of how to log in to your server. If you don't check out how you prepared your server in this guide [here](../SNFullGuide/#step-2-prepare-your-server).

Once we have logged in to our VPS we should update our package lists, the below command downloads the package lists from the repositories and "updates" them to get information on the newest versions of packages and their dependencies. It will do this for all repositories and PPAs.

```
sudo apt update
```

You will notice a bunch of package lists were downloaded, once this is complete run the below command to fetch new versions of any packages we currently have installed on the system.

```
sudo apt upgrade
```

You will be prompted to authorise the use of disk space, type `y` and enter to authorise.

If you are prompted during the upgrade that a new version of any file is available then click the up and down arrows until you are hovering over `install the package maintainer’s version` and click enter.

<center>![Terminal window](../assets/snode2.JPG)</center>

Alright, good to go. Our server is now up to date. On to the fun part!

## Step 2: Install Node JS

In order to use the Sispop Launcher we first need to install NodeJS.

Run the following command:
```
curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
```
then
```
sudo apt-get install -y nodejs
```
## Step 3: Sispop Launcher
### 3.1 Install
Run the following command to install sispop-launcher
```
sudo npm install -g sispop-launcher
```
### 3.2 Download sispopd binaries

Now sispop-launcher is installed we should download the sispopd binary:
```
sudo sispop-launcher download-binaries
```

### 3.3 Fix sispop-launcher permissions
Let's change to root to make these changes:
```
su - root
```

Now while in root let's give our user `snode` the required permissions to run the sispop-launcher.

```
sudo sispop-launcher fix-perms snode
```

Now let's change back to user snode.

```
su - snode
```

## Step 4: sispopd.service file
Next we're going to have to stop our sispopd.service file and update it to launch the launcher instead of sispopd.

### 4.1: Stop existing sispopd.service file

Stop your existing service node:
```
sudo systemctl stop sispopd.service
```
#### 4.2 - Setting up your sispop-launcher for Service Node
We now need to prequalify our server to be ready to run as a service node.

To do so run the following command:
```
sispop-launcher prequal
```

In most cases this will let us know we are good to deploy our Service Node. Troubleshooting will be required at this point if an error message pops up.

### 4.3: Check-systemd

Run the check-systemd to make systemd now launch the launcher instead of sispopd:
```
sudo sispop-launcher check-systemd
```

### 4.4 Update Service file

Make sure the service is up to date:
```
sudo systemctl daemon-reload
```

### 4.5 Start the new sispopd.service file

```
sudo systemctl start sispopd.service
```

At this point it is wise to restart your system with the following command:

```
sudo reboot
```

Once the system has restarted it will reboot the new version of `sispopd.service`.

Log back in to your VPS and double check the new version of `sispopd.service` is running smoothly by running the following command:
```
sudo journalctl -u sispopd.service -af
```

You can now access your `sispopd` daemon by running the following command:
```
sispop-launcher client
```
This will allow you to parse commands into your daemon, for example: `print_sn_key` e.t.c.

> *NOTE: If you’re nervous about trusting the binaries or the download link, you should build it from source yourself. Instructions for that can be found in the README of [https://github.com/sispop-dev/sispop](https://github.com/sispop-dev/sispop)*

Excellent! You have now updated your Service Node.

## Additional Information

### Default Directories for Sispop Files

|         Name         |            Directory            |
|:--------------------:|:-------------------------------:|
|    Blockchain Data   |       `/home/<user>/.sispop/`       |
|    Sispopd Binaries    |      `/opt/sispop-launcher/bin`     |
| Launcher Config File | `/etc/sispop-launcher/launcher.ini` |
| Sispopd Logs           | `/home/<user>/.sispop/`             |