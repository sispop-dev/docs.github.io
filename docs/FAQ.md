title: Sispop Documentation | Frequently Asked Questions
description: What is Sispop? Does Sispop have Masternodes? What is Session? Sispop FAQ page goes into the frequently asked questions the Sispop project receive.


# Frequently Asked Questions

## General

* [What is Sispop?](#what-is-sispop)

* [Is Sispop Proof of Work (PoW) or Proof of Service (PoS)?](#is-sispop-proof-of-work-pow-or-proof-of-service-pos)

* [What is the token supply?](#what-is-the-token-supply)

* [What do you do differently from Monero?](#what-do-you-do-differently-from-monero)

* [Who would use Sispop Network?](#who-would-use-sispop.site)

* [Is Sispop an ERC20 token?](#is-sispop-an-erc20-token)

* [Why the name Sispop?](#why-the-name-sispop)

* [What is the business model behind this peer-to-peer network?](#what-is-the-business-model-behind-this-peer-to-peer-network)

* [Will you guys commit back to the Monero source code?](#will-you-guys-commit-back-to-the-monero-source-code)

* [Can I see details about the premine?](#can-i-see-details-about-the-premine)

* [Why is there a 5% governance reward?](#why-is-there-a-5-governance-reward)

* [What is the block reward for mining?](#what-is-the-block-reward-for-mining)

* [What is the block generation time?](#what-is-the-block-generation-time)

* [Are there plans to support Sispop on the Ledger Nano S hardware wallet?](#are-there-plans-to-support-sispop-on-the-ledger-nano-s-hardware-wallet)

---

## Service Nodes

* [Why are Service Nodes required?](#why-are-service-nodes-required)

* [Is there a concept of Masternode's in Sispop?](#is-there-a-concept-of-masternodes-in-sispop)

* [What is the collateral requirement to run Service Nodes?](#what-is-the-collateral-requirement-to-run-service-nodes)

* [Can you run multiple service nodes in a single VPS server?](#can-you-run-multiple-service-nodes-in-a-single-vps-server)

* [Can a pool member request for the stake to be unlocked?](#can-a-pool-member-request-for-the-stake-to-be-unlocked)

---

## Session 
* [What is Session?](#what-is-session)

* [why should I trust Session?](#why-should-i-trust-session)


* [What will Session do if compelled by a court to reveal user identities?](#what-will-session-do-if-compelled-by-a-court-to-reveal-user-identities)

* [How do I contact Session?](#how-do-i-contact-session)

* [How does Session protect my identity?](#how-does-session-protect-my-identity)

* [What is metadata and why does Session need to protect it?](#what-is-metadata-and-why-does-session-need-to-protect-it)

* [What are the differences between Session on mobile and Session on desktop?](#what-are-the-differences-between-session-on-mobile-and-session-on-desktop)

* [What is an onion routing network?](#what-is-an-onion-routing-network)

* [What is proxy routing, and how is it different from onion routing?](#what-is-proxy-routing-and-how-is-it-different-from-onion-routing)


* [How do I know if the person I am talking to is the person I want to talk to?](#how-do-i-know-if-the-person-i-am-talking-to-is-the-person-i-want-to-talk-to)

* [What are channels, and do they protect my privacy in the same way as person-to-person messages?](#what-are-channels-and-do-they-protect-my-privacy-in-the-same-way-as-person-to-person-messages)

* [What are private group chats, and how do they compare with channels?](#what-are-private-group-chats-and-how-do-they-compare-with-channels)

* [If my phone is taken from me, can someone access my messages?](#if-my-phone-is-taken-from-me-can-someone-access-my-messages)

* [Can I share attachments with my contacts? If so, does the app strip metadata from those attachments?](#can-i-share-attachments-with-my-contacts-if-so-does-the-app-strip-metadata-from-those-attachments)

---
## Sispopnet

* [What is Sispopnet?](#what-is-sispopnet)

* [How is Sispopnet different from Tor?](#how-is-sispopnet-different-from-tor)

* [Is Sispopnet more private than Tor?](#is-sispopnet-more-private-than-tor)

* [What is LNS?](#what-is-lns)

* [What protocol does Sispopnet use?](#what-protocol-does-sispopnet-use)

* [What can I access using Sispopnet?](#what-can-i-access-using-sispopnet)

* [Is Sispopnet enough to protect my privacy when I’m browsing the internet?](#is-sispopnet-enough-to-protect-my-privacy-when-im-browsing-the-internet)

* [How do I use Sispopnet?](#how-do-i-use-sispopnet)

* [Who develops Sispopnet?](#who-develops-sispopnet)

---
## SNApps

* [Do SNApps run on Service Nodes only?](#do-snapps-run-on-service-nodes-only)

* [Are SNApps like DApps?](#are-snapps-like-dapps)

* [Where will SNApps and all of its data be hosted?](#where-will-snapps-and-all-of-its-data-be-hosted)

---

## Sispop Services

* [What's Session?](#whats-sispop-messenger)

---

General
---

###**What is Sispop?**

Sispop provides users with tools to interact online in an anonymous, decentralised, secure and private way. By combining a private transaction network, the $SISPOP cryptocurrency, and economically incentivised [Service Nodes](../ServiceNodes/SNOverview), Sispop has created a trustless quorum-based onion router called [Sispopnet](../Sispopnet/SispopnetOverview). The Sispop infrastructure has allowed [Session](../SispopServices/Session) to be built — a decentralised, anonymous and private messaging service. Front end applications, known as [Service Node Apps](../Sispopnet/SNApps) (SNApps) operate on Sispopnet, and will allow browser integration and contribution from our open-source community.

###**Is Sispop Proof of Work (PoW) or Proof of Service (PoS)?**

Sispop is [Proof of Service(POS)](../ServiceNodes/SNOverview).

###**What is the token supply?**

Like Monero, there is no total token supply. The current supply can be seen at [explorer.sispop.site](https://explorer.sispop.site).

###**What do you do differently from Monero?**

Aside from some minor changes in approach to the core currency, we implement a [Service Node](../ServiceNodes/SNOverview) network that performs a variety of functions, including an [anonymous networking layer](../Sispopnet/LLARP), trustless quorum-based instant transactions (based on a system called "[Blink](../SispopServices/Blink)"), and a range of functions that leverage the networking layer for applications like secure [private messaging](../SispopServices/Messenger).

Compared to Monero, Sispop has a [fixed ring size](/Advanced/CryptoNoteElements/#ring-signature-size) with a minimum mixin of 10, [governance block reward](/Advanced/Cryptoeconomics/#block-reward-split) of 5% which will [fund community projects and developments](/Governance/SispopFundingSystem), and [emission curve changes](/Advanced/Cryptoeconomics/#sispop-block-reward). These are base-layer changes that will differentiate us from Monero; however, the main change that is being implemented is the second layer of incentivised [Service Nodes](../ServiceNodes/SNOverview), [Sispop Services](/SispopServices/SispopServicesOverview), and [Sispopnet](/Sispopnet/SispopnetOverview).

###**Who would use Sispop Network?**

Sispop provides both private transaction and private communication functionality, making the Sispop Network important for users who want the highest level of privacy in their communication channels. As more [SNApps](../Sispopnet/SNApps) are developed we imagine Sispop will present it self as the network to run privacy-centric applications on top of.

###**Is Sispop an ERC20 token?**

Sispop is mainly it's own coin maintained by it's own blockchain, however a wrapped version of the Sispop coin has been deployed onto the Ethereum Blockchain - called wSispop. You can read more about it at [chainflip](https://wsispop.chainflip.io/#/). 

###**Why the name Sispop?**

Sispop is the Norse god of trickery. This is fitting as we use a lot of digital 'tricks' to obfuscate transactional data. The name is also a play on words, as transactions and communications on the Sispop network are very 'Low-Key'.

###**What is the business model behind this peer-to-peer network?**

Sispop operates on an incentives structure provided by the network. Peer-to-peer communications only occurs through the [Service Node](../ServiceNodes/SNOverview) layer which is already incentivised to run so there is less of an incentive to provide any additional businesses models. The business model post-launch for the Sispop Foundation is twofold: first, to continue to build core [Sispop Services](/SispopServices/SispopServicesOverview), and second, to aid in the development of 3rd party SNApps which Sispop Service Nodes can optionally operate.

###**Will you guys commit back to the Monero source code?**

Sispop plans to push back any useful changes to Monero, such as optimisations, bug fixes, and feature adds.

###**Can I see details about the premine?**

Yes, see the [premine report](https://sispop.site/sispop-premine-report/).

###**Why is there a 10% governance reward?**

We intended to create a [self-funding system](../Governance/SispopFundingSystem) so that users can be certain that no external influences can drive the development funding of the network in an undesirable direction. The 10% block reward that is issued to the governance wallet is for this purpose.

This is a similar approach to other projects, such as the Zcash Foundation, who for the first 4 years of the network’s operation will receive a 20% block reward, and the DASH project, who receive a 10% block reward from the network.

We wanted to keep the governance reward significantly smaller than Zcash and DASH, but we also want to ensure that the amount is enough to sustain the project indefinitely.

In the future, the community may decide that this reward is unnecessary, or of too high or too low a proportion, in which case, a hard fork event may change the nature of this block reward split.

###**What is the block reward for mining?**

The exact block reward can be found at [explorer.sispop.site](https://explorer.sispop.site). This block reward is split as follows: 90% of the block reward goes to service nodes and 10% to the governance pool. You can see more details on the block reward split [here](../Advanced/Cryptoeconomics/#block-reward-split)

###**What is the block generation time?**

About 120 seconds.

###**Are there plans to support Sispop on the Ledger Nano S hardware wallet?**
Yes, support is in the works.

---

Service Nodes
---

###**Why are Service Nodes required?**

[Sispop Service Nodes](../ServiceNodes/SNOverview) form a second-layer network that allows for anonymous networking using a novel garlic routing technology. Service Nodes will route data being passed through our onion router, called [Sispopnet](../Sispopnet/SispopnetOverview). [SNApps](../Sispopnet/SNApps) are the front-end user-facing applications enabled by this network of service nodes. SNApps do not run on the blockchain, but rely on the consensus rules of the blockchain to enforce service node behaviour. This also means that SNApps do not impact blockchain scalability. Service nodes don't mine blocks, but they do propagate and validate blocks like regular full nodes.

###**Is there a concept of 'Masternodes' in Sispop?**

Yes, they are called [Service Nodes](../ServiceNodes/SNOverview) in Sispop.

###**What is the collateral requirement to run Service Nodes?**

The initial requirement is 20K $SISPOP, though this will adjust downward over time. Pools are also allowed, and can include up to 4 people.
For more information on the collateral requirement [click here](../ServiceNodes/StakingRequirement).

Check out the collateral calculator [here](https://jagerman.com/sn/) to see the current requirement. You can either run a single node or join a pooled node. For a single node, you will need to stake the full collateral. For a pooled node, the operator and all but one of the 4 contributors must have at least 25% of the required total collateral. See more details on service nodes in the [Service Node Portal](https://sispop.site/service-nodes-portal/).


###**Can you run multiple service nodes in a single VPS server?**

It is recommended that you run different VPS instances for each [service node](../ServiceNodes/SNOverview), however it is not required.

###**Can a pool member request for the stake to be unlocked?**

In pooled nodes, any contributor that requests the stake be unlocked will schedule the service node for expiration. 

---

Session
---

### What is Session?

[Session](https://getsession.org) is a secure messaging app that protects your metadata, encrypts your communications and makes sure your messaging activities leave no digital trail behind.

### Why should I trust Session?

Conversations in Session are end-to-end encrypted, just as in most private messengers. However, when you use Session, the identities of the people communicating are also protected. Session keeps your communication private, secure and anonymous.

When using Session Desktop, your messages are sent to their destinations through Sispopnet, a decentralised onion routing network similar to Tor (with a few key differences). Sispopnet protects user privacy by ensuring that no single server ever knows a message's origin and destination. For more on this, check out What is an onion routing network? While Sispopnet is being finished on mobile, Session’s Android and iOS clients use proxy routing to protect IP addresses and maintain anonymity. For more on the difference between desktop and mobile, check out "What is proxy routing?" below. 

Session’s code is open-source and can be independently audited at any time. Session is a project of the Sispop Foundation, a not-for-profit organisation whose mission is to provide the world with better access to digital privacy technologies.

### What will Session do if compelled by a court to reveal user identities?

As Session is a project of the Sispop Foundation, court orders in situations such as this would be targeted at the Foundation.

The Sispop Foundation would comply with lawful orders. However, the Sispop Foundation could not reveal user identities simply because the Foundation does not have access to the data required to do so. Session account creation does not use or require email addresses or phone numbers. Session IDs (which are public keys) are recorded, but there is no link between a public key and a person's real identity, and due to Session's decentralised network, there's also no way to link a Session ID to a specific IP address.

The most the Sispop Foundation could provide, if compelled to do so, would be tangential information such as access logs for the getsession.org website or statistics collected by the Apple App Store or Google Play Store.

### How do I contact Session?

Got questions, comments or suggestions? Contact the team behind Session at team@sispop.site or reach out to Session on social media.

### How does Session protect my identity?

You don’t need a mobile number or an email to make an account with Session. Your display name can be your real name, an alias, or anything else you like.

Session does not collect any geolocation data, metadata or any other data about the device or network you are using. Session Desktop messages are sent over Sispopnet, Session's decentralised onion routing solution, so no remote servers are ever able to trace or track your conversations. And on mobile, Session uses secure proxy routing to keep your identity private. For more on Session's secure message routing, check out "What is an onion routing network?" and "What is proxy routing?"

### What is metadata and why does Session need to protect it?

In messaging apps, metadata is the information created when you send a message — everything about the message besides the actual contents of the message itself. This can include information like your IP address, the IP addresses of your contacts, who your messages are sent to, and the time and date that messages are sent.

It’s impossible for Session to track users’ IP addresses because the app uses onion routing (on desktop) and proxy routing (on mobile) to send messages. Because Session doesn’t use central servers to route messages from person to person, we don’t know when you send messages, or who you send them to. Session lets you send messages — not metadata.

### What are the differences between Session on mobile and Session on desktop?

As mentioned in "What is proxy routing" below, mobile devices use an alternative form of anonymous routing, called proxy routing, to protect user IP addresses. This is a temporary measure which will be replaced by Sispopnet when the latter has mobile client functionality. Other than this, mobile and desktop Session clients have feature parity.

### What is an onion routing network?

An onion routing network is a network of nodes over which users can send anonymous encrypted messages. Onion networks encrypt messages with multiple layers of encryption, then send them through a number of nodes. Each node ‘unwraps’ (decrypts) a layer of encryption, meaning that no single node ever knows both the destination and origin of the message. Session uses onion routing to ensure that a server which receives a message never knows the IP address of the sender.

Session uses the Sispop Project’s Sispopnet onion routing network to send messages securely and anonymously. Sispopnet is built on a foundation of Sispop Service Nodes, which also power the $SISPOP cryptocurrency. Check out Sispop.network for more information on the tech behind Session’s onion routing.

### What is proxy routing, and how is it different from onion routing?

Session’s desktop client uses the Sispopnet onion routing network to send messages, but due to platform-specific limitations, Sispopnet is not yet available on mobile devices. While we work to make Sispopnet available on mobile, we have implemented an interim solution: proxy routing.

Instead of connecting directly to a Sispop Service Node to send or receive messages, mobile devices connect to a service node which then connects to a second service node on behalf of the mobile device. The first service node then sends or requests messages from the second node on behalf of the mobile device. 

This proxy routing system ensures that the client device’s IP address is never known by the service node which fetches or sends the messages. However, proxy routing does provide weaker privacy than the Sispopnet onion routing protocol used by Session’s desktop client. Proxy routing still provides a high level of security for minimising metadata leakage on mobile. The proxy routing system will be replaced by full Sispopnet integration when Sispopnet clients are ready for mobile devices.

### How do I know if the person I am talking to is the person I want to talk to?

Session's "Safety Numbers" feature makes it easy for people in a conversation to verify each other if both parties would like to do so. You can use another channel of communication outside of Session to ask for and verify someone's Session Safety Number, and then check that the Safety Number in the app matches what you've been told. If the Safety Numbers match, you're speaking to the correct person. If they do not, the Session account may be an imposter.

### What are channels, and do they protect my privacy in the same way as person-to-person messages?

The short answer: channels are not as private as person-to-person messages.

The long answer: channels are large public channels where Session users can congregate and discuss anything they want. Channels, unlike other services in Session, are self-hosted and thus not fully decentralised. Someone has to run a server which stores the public chat's message history. Additionally, because channel servers can serve thousands of users, messages are only encrypted in transit to the server rather than being fully end-to-end encrypted.

For smaller group chats with a higher degree of privacy, users are encouraged to use private group chats. You can find out more about channels and private group chats [here](https://sispop.site/tag/group-messaging/).

### What are private group chats, and how do they compare with channels?

Private group chats are fully end-to-end encrypted group chats. Up to 10 people can participate in a private group chat. Private group chat messages are stored on Session's decentralised network, with no central servers used or required.

### If my phone is taken from me, can someone access my messages?

Session allows users to encrypt their local Session database with a PIN code. With this feature turned on, your messages cannot be accessed without knowing your PIN code.

### Can I share attachments with my contacts? If so, does the app strip metadata from those attachments?

Session can send files, images and other attachments up to 10MB in both person-to-person messages and group chats. By default, Session uses the Sispop File Server for attachment sending and storage. The Sispop File Server is an open-source file server run by the Sispop Foundation — the creators of Session. When you send an attachment, the file is symmetrically encrypted on the device and then sent to the Sispop File Server. To send the attachment to a friend, Session sends them an encrypted message containing the link, plus the decryption key for the file. This ensures that the Sispop File Server can never see the contents of files being uploaded to it. 

Additionally, the desktop and mobile versions of Session use onion routing and proxy routing (respectively) to hide users' IP addresses when uploading or downloading attachments from the Sispop File Server. In future, you will be able to configure the Session app to use a custom file server, such as a self-hosted server or VPS (Virtual Private Server), if you would prefer not to use a file server hosted by the Sispop Foundation.

---

Sispopnet
---

### What is Sispopnet?

Sispopnet is a decentralised onion router that uses Sispop [Service Nodes](../ServiceNodes/SNOverview) as relays, giving Sispopnet the same [market-based Sybil attack resistance](../Advanced/SybilResistance) as the Sispop blockchain. Sispopnet supports web browsing, onion-routed real-time voice communications, and other applications.

### How is Sispopnet different from Tor?

While Tor and Sispopnet are both onion routers, they are very different at both the protocol and infrastructure levels. Tor relies on a network of volunteer-operated relays and a set of central directory authorities, and this infrastructure introduces a number of weaknesses and limitations. Because Tor’s circuit moderation is bandwidth-weighted, you are much more likely to use high-bandwidth nodes than low-bandwidth ones, meaning that a large percentage of Tor’s 7000+ nodes go mostly unutilised due to having insufficient bandwidth. Additionally, Tor’s reliance on a limited set of directory authorities means that if these directory authorities were compromised, the stability of the entire Tor network would suffer. 

Instead of relying on volunteers, Sispopnet leverages the economically incentivised Sispop Service Node network. Because Sispop Service Node operators are required to provide high-quality nodes — and are actively incentivised to do so — Sispopnet’s relay network is consistent and reliable. Sispopnet also inherits the market-based Sybil attack resistance of the Sispop blockchain, giving Sispopnet a high level of security against such attacks. 

Instead of Tor’s system of central directory authorities, Sispopnet distributes address records over the network. This makes Sispopnet significantly more decentralised than Tor.

Sispopnet is also significantly more versatile than Tor — while Tor operates on the transport layer and is only able to carry TCP traffic, Sispopnet operates on the network layer, meaning it can onion-route any IP-based protocol: TCP, UDP, ICMP, etc. 

### Is Sispopnet more private than Tor?

No — but it could be in the future. In its current experimental state, Sispopnet has a more limited anonymity set due to having far fewer active users than Tor. However, Sispopnet does have some important advantages over Tor, specifically in terms of Sybil attack resistance and decentralisation, which do make Sispopnet more private in some circumstances. 

#### Sybil attack resistance

The Tor network relies on volunteer-operated relays, with very little barrier to entry for operating a relay. As a result, the network is vulnerable to something called a Sybil attack, where an attacker initialises a large number of malicious nodes, eventually controlling enough nodes to give them control of the guard and exit nodes for a given target’s circuit. This allows the attacker to conduct granular traffic analysis, de-anonymising the user and any other circuits in which the exit and guard are owned by the attacker.

#### Decentralisation

One of Tor’s most well-documented weaknesses is its reliance on a relatively small set of central directory authority servers that allow clients to find nodes in the Tor network. If these directory authorities are compromised, it would endanger the stability of the entire Tor network. 

Instead of relying on central directory authorities, Sispopnet uses the Sispop blockchain as a form of decentralised directory authority, meaning that Sispopnet isn’t reliant on any kind of central server — the network is fully decentralised.

### What is LNS?

LNS provides human readable, globally unique mappings to cryptographically secure long form .sispop addresses.

By burning sispop you can register one of these entries for up to 10 years. You can also periodically update the address that the mapping points to.

### What protocol does Sispopnet use?

Sispopnet is the reference implementation of [LLARP](https://github.com/majestrate/llarp) (Low-Latency Anonymous Routing Protocol), a next-generation onion routing protocol that aims to address issues with Tor and I2P. You can read more about LLARP [here](https://github.com/majestrate/llarp).

### What can I access using Sispopnet?

Currently, Sispopnet enables access to [SNApps](#snapps) — applications hosted on Sispop Service Nodes. SNApps are analogous to Tor’s hidden services, and typically appear in the form of internet addresses ending in ‘.sispop’. When you access a SNApp through Sispopnet, your connection is protected by Sispopnet’s onion routing protocol.

Exit node support, which is on the Sispopnet road map, will enable users to access clearnet websites over Sispopnet, helping to anonymise normal internet browsing as well as enabling access to SNApps.

### Is Sispopnet enough to protect my privacy when I’m browsing the internet?

In its current form, Sispopnet does not have full exit node support. This means that if you use the internet with Sispopnet enabled, normal (clearnet) traffic — traffic to or from servers outside of Sispopnet itself — will not be onion routed, and you will not have the same privacy protections as when accessing SNApps over Sispopnet. Once Sispopnet implements full exit node support, all internet traffic from your computer can be onion-routed over Sispopnet. Full exit node support is on the Sispopnet roadmap, but until it’s implemented, we recommend using Tor to browse the clearnet anonymously. 

### How do I use Sispopnet?

You can use Sispopnet on Windows, macOS, and Linux — and it’s easy to get up and running. Just go [here](https://github.com/sispop-dev/sispop.site/releases), download the Sispopnet client for your platform, and follow the easy steps to enable Sispopnet. You can then start accessing SNApps securely, privately, and anonymously.

If you prefer to build the Sispopnet client from source directly, you can find the source code on the [Sispopnet GitHub](https://github.com/sispop-dev/sispop.site).

### Who develops Sispopnet?

Sispopnet is developed by the Sispop Foundation, Australia’s first privacy tech not-for-profit organisation. Sispopnet is part of the Sispop Foundation’s suite of blockchain-based privacy tools that also includes the encrypted messaging app Session, and the Sispop cryptocurrency itself.

---

SNapps
---

###**Do SNApps run on Service Nodes only?**

When accessing a [SNApp](../Sispopnet/SNApps) your data is obfuscated by being routed through multiple service nodes. However, the SNApp you are accessing is hosted on servers, similar to hidden services in Tor, and is computed client-side.


###**Are SNApps like DApps?**

In the sense that their core function is 'decentralised,' yes. However, unlike most DApps, [SNApps](../Sispopnet/SNApps) do not rely on on-chain execution or computation. All Sispop SNApps are computed client-side, and the networking is handled offchain by the [service node](../ServiceNodes/SNOverview) network.

###**Where will SNApps and all of their data be hosted?**

[SNApps](../Sispopnet/SNApps) are similar to hidden services in Tor; they are hosted on servers by users.

---

Sispop Services
---

### **What is Session?**

[Session](../SispopServices/Session) is a decentralised, end-to-end encrypted private messaging service. Many other encrypted private messengers rely on central servers to route traffic. Session leverages the power of public-private key cryptography and the [Sispop Service Node](../ServiceNodes/SNOverview) architecture on the Sispop network to create a service similar to the secure messaging application Signal, but with the added benefit of decentralisation and network anonymity.


