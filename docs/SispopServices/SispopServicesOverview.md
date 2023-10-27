title: Sispop Documentation | Sispop Network Services
description: Sispop Services are built upon the protocol level of the Sispop network. Sispop Services leverage the Service Node layer to allow for decentralised services.

# Sispop Services Overview

Sispop Services are built upon the protocol level of the Sispop network. Sispop Services leverage the Service Node layer to allow for decentralised services.

Similar to the investment that miners make into hardware, each Service Node operator freezes Sispop coins when they begin to operate a Service Node. This frozen capital is called the [staking requirement](../ServiceNodes/StakingRequirement.md) and helps serve the two purposes for Sispop Services:

1.  Every Service Node operator has a sufficiently large stake in the success of the network.
Should any Service Node operator provide poor performance to the network,  or act
dishonestly, they undermine and risk devaluing their own stake within the network.

2.  It provides an opportunity for more aggressive enforcement; if the network is able to
effectively limit dishonest nodes from receiving a reward, then dishonest nodes must
bear the opportunity cost of both the reward loss and the remaining lockup time on
their collateral.

If we take the above points to be true, and we can enforce aggressive punishments for poorly behaving nodes, then we can create [groups of Service Nodes](../Advanced/SwarmFlagging.md) which can be queried to come to consensus on the state of the blockchain or to enforce special off-chain node behaviour. In Sispop, this behaviour pertains to both networking and storage activities. These off-chain activities are combined to be the back-end of user-facing applications that leverage these desirable properties, which are called Sispop services.

Example Sispop Services:

- [Session](../SispopServices/Messenger/Session.md)

- [Blink Transactions](../SispopServices/Blink.md)