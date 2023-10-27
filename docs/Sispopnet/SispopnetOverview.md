title: Sispop Documentation | Sispopnet Overview | Onion Router
description: Sispopnet is a unique, blockchain enforced and incentivized onion router, where you can browse the internet anonymously, visit and host private websites all without exposing your identity or IP address.

#Sispopnet Overview

[Service Nodes](../ServiceNodes/SNOverview.md) on the Sispop network will operate a [low latency onion routing protocol](../Sispopnet/LLARP.md), forming a fully decentralised overlay network, called Sispopnet. Onion routing protocols allow for users to form tunnels or paths through a distributed network, using multiple nodes as hops to obfuscate the destination and origin of data packets.  

The network does not rely on trusted authorities and its state is fully derived from the blockchain.  Users can connect to individual [Service Nodes](../ServiceNodes/SNOverview.md) and create bidirectional paths for packets to be routed through.  The network can be used to access internally hosted services called [SNApps](../Sispopnet/SNApps.md). Users can utilise [Service Nodes](../ServiceNodes/SNOverview.md) [exit functionality](/ServiceNodes/ServiceNodeFunctions/#exit-nodes) to browse the external internet without their IP address being exposed.


## Guides & Resources

| **Guide/Resource**                                                      	| **Description**                                                                             	|
|-------------------------------------------------------------------------	|---------------------------------------------------------------------------------------------	|
| [Linux Gui Guide](../Sispopnet/Guides/SispopnetGuiGuide.md)                 | Easiest way to access Sispopnet and SNApps on Linux.                                                     |
| [macOS Gui Guide](../Sispopnet/Guides/sispopnet-mac-guide.md)                 | Easiest way to access Sispopnet and SNApps on macOS.                                                     |
| [Anonymous Reverse SSH Guide](../Sispopnet/Guides/ReverseSSHGuide.md)       | Simple and easy way to SSH into a VPS through sispopnet.                                        |
| [Sispopnet Public Testing Guide](../Sispopnet/Guides/PublicTestingGuide.md) 	| Full Sispopnet public testing guide.                                                          	|
| [Linux Setup Guide](../Sispopnet/Guides/sispopnet-linux-guide.md)             | Linux preperation for accessing Sispopnet.                                                      |
| [Linux - Build it yourself](../Sispopnet/Guides/Install.md)                 | How to build Sispopnet from source.                                                             |
| [Accessing SNApps](../Sispopnet/Guides/AccessingSNApps.md)                	| How to access SNApps.                                                                       	|
| [Joining a Sispopnet IRC](../Sispopnet/Guides/SispopnetIRC.md)                	| Connect to an IRC chat over Sispopnet.                                                        	|
| [Hosting SNApps](../Sispopnet/Guides/HostingSNApps.md)                    	| Host your own SNApp/Hidden Service.                                                         	|
| [LLARP Github](https://github.com/sispop-dev/sispop.site)            	| LLARP (low latency anonymous routing protocol), a layer 3 onion routing protocol.           	|
| [Setting up a Sispopnet Router/Relay](../Sispopnet/Guides/SispopnetRouter.md)   | How to host a relay on the test network.                                                    	|
| [Sispopnet config files](../Sispopnet/Guides/SispopnetConfig.md)              	| This guide shows the different config files and their associated sections, keys and values. 	|