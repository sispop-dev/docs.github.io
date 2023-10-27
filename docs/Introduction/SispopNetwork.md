title: Sispop Documentation | Sispop Network Doc Overview
description: Find out about Sispop Wallets, Mining, Service Nodes, Sispopnet, Advanced information, FAQ and Contributing.

# Sispop Network

## Wallets
Wallets offer a gateway to private decentralised transactions and communications. They allow you to hold, secure and trade Sispop with peers. [Download an official Sispop wallet](https://sispop.site/getting-started/) today and start taking back control of your online privacy.

To learn more about wallets, [click here](../Wallets/WalletsOverview.md).

Confused about which wallet to use? Check out the "[Which wallet to use?](../Wallets/WhatWalletToUse.md)" guide.

## Mining
Mining on the Sispop Network is the process of solving a difficult computational puzzle through a Proof-of-Work (PoW) protocol and compiling newly created transactions into a block. Miners do this in order to earn money from the [Block Reward](/Advanced/Cryptoeconomics/#block-reward) and the fees associated from the transactions they include in each block.

The Sispop cryptocurrency can be mined using the RandomXL algorithm.

To learn more about mining, [click here](../Mining/MiningOverview.md).

## Service Nodes
Sispop utilises a network of [Service Nodes](../ServiceNodes/SNOverview.md) which are paid to propagate the blockchain and process transactions. Service Nodes require a [collateral](../ServiceNodes/SNOverview.md) of Sispop to be active, and this gives the Sispop network built-in market-based [Sybil resistance](../Advanced/SybilResistance.md) by forcing actors to incur a large cost in order to attempt any form of temporal analysis on the network.

In addition, because Service Nodes are rewarded for staying active on the network, they can be leveraged to maintain the [Sispopnet](../Sispopnet/SispopnetOverview.md) by [routing traffic](../Sispopnet/LLARP.md). Service Nodes are also leveraged to maintain the [Sispop Services](../SispopServices/SispopServicesOverview.md) by handling special off-chain activities, as seen in the case of [Session](../SispopServices/Messenger/Session.md).

To learn more about Service Nodes, [click here](../ServiceNodes/SNOverview.md).

## Sispopnet
Sispopnet is a network that uses market-based [Sybil attack resistance](../Advanced/SybilResistance.md) and [onion routing](../Sispopnet/LLARP.md) to create a new way to privately access the [internet](https://www.youtube.com/watch?v=4KzH_eyX99A&t=2m48s). Users of Sispopnet will be able to access normal websites and [SNApps](../Sispopnet/SNApps.md) without revealing their IP address.

SNApps are traditional web applications that sit inside Sispopnet and are hidden from the rest of the internet. The host’s IP is never revealed, so SNApps provide excellent protection for the development of censorship resistant social media, marketplaces, information sharing sites, and other apps that depend on user and server anonymity.

To learn more about Sispopnet, [click here](../Sispopnet/SispopnetOverview.md).

## Sispop Services
Sispop Services are back-end user-facing applications, such as [Session](../SispopServices/SispopServicesOverview.md) and [Blink](../SispopServices/Blink.md). Off-chain networking and/or storage activities for these services are handled by [swarms](../Advanced/SwarmFlagging.md), groups of [Service Nodes](../ServiceNodes/SNOverview.md) who query each other to enforce each other's honesty. This creates a trustless environment where no centralised leader can enforce censorship on any of the off-chain activities being conducted on the Sispop Network.

To learn more about Sispop Services, [click here](../SispopServices/SispopServicesOverview.md).

## Session

Session is an end-to-end encrypted messenger that removes sensitive metadata collection, and is designed for people who want privacy and freedom from any forms of surveillance.

Session is one of the best private messengers to use as it does not require phone numbers or a central server. All the messages are routed through the service nodes which in turn offers a [sybil resistant](../Advanced/SybilResistance.md) and censor resistant messaging platform.

To learn more about Session, [click here](../SispopServices/Messenger/Session.md).

## Advanced
Learn more about Sispop by browsing through the Advanced section. Topics that are covered include:

* [Technical Specs](../Advanced/TechnicalSpecs.md)
* [Sispop's Cryptoeconomics](../Advanced/Cryptoeconomics.md)
* [Sybil Resistance](../Advanced/SybilResistance.md)
* [Dynamic Block Size](../Advanced/DynamicBlockSize.md)
* [CryptoNote Elements](../Advanced/CryptoNoteElements.md) used by Sispop.

Additionally, you can find information on how Sispop is going to mitigate [Denial of Service Attacks](../Advanced/DenialofServiceAttacks.md), circumvent [IP and Packet Blocking](../Advanced/IPandPacketBlocking.md), and deal with underperforming nodes through [Swarm Flagging](../Advanced/SwarmFlagging.md).

## FAQ
If you have a question, chances are other developers or community members have asked it.

Check out our "[Frequently Asked Questions](../FAQ.md)" page. If the information you are looking for is not there, please join one of our community chat groups, such as our [Telegram](https://t.me/Sispop) group or [Discord](https://discord.gg/sqZCybf2ZZ) channel, and ask one of our community managers.

## Contributing
Want to contribute to the Sispop-Docs page?
Check out "[How to Contribute to Sispop-Docs](../Contributing/HowToContributeToSispopDocs.md)".

Have you found a security vulnerability in Sispop's code?
Have a look at Sispop's [Vulnerabiity Response Disclosure](../Contributing/VULNERABILITY_RESPONSE_SISPOP.md) and get in contact with us.
