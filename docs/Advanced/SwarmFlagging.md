title: Sispop.network Documentation | Swarms | Swarm Flagging
description: When a swarm has been selected to participate, each node in that swarm is expected to conduct a number of tests on every other node in the swarm.

# Swarm Flagging

When nodes operate in a trustless environment without a centralised leader enforcing over arching rules, maintaining proper node behaviour on the network becomes difficult. Although [Service Nodes](../ServiceNodes/SNOverview.md) in Sispop must hold the correct [collateral requirement](../ServiceNodes/StakingRequirement.md), they may choose to not [route traffic](../Sispopnet/LLARP.md) or [store data](../SispopServices/Messenger/Session.md) in their memory pools.  Because this option is financially beneficial (using less bandwidth/CPU cycles/storage), a system of distributed flagging must be proposed to remove underperforming nodes.

For Sispop, such distributed flagging faces major implementation issues. Fundamentally, every [Service Nodes](../ServiceNodes/SNOverview.md) is financially incentivised to flag every other Service Node as a bad actor. This is because when a Service Node is flagged it will face removal from the staking pool and thereby increase the flaggers chance at winning a reward. One potential method of  distributed flagging is one in which evidence is provided when a flagging event occurs, however, this solution falls prey to nodes fabricating evidence in their favour.  Conversely, flagging without restrictions allows either single nodes or groups of collaborating nodes to intentionally flag honest nodes in order to improve their chances of winning [block  rewards](../Advanced/Cryptoeconomics.md). To circumvent these issues, Sispop proposes swarm flagging.

Swarm flagging works by using existing swarms to choose members that will participate in each testing round. Each Service Node holds a copy of the blockchain, and each block created by a miner will deterministically select a number of test swarms. Every block, 1% of the networks swarms are selected for participation in a testing swarm. To calculate participating swarms, the hash of the five previous blocks is used to seed a Mersenne Twister function which then selects swarms by order of their position in the deterministic list.

![Testing Swarm](../assets/Swarm.PNG)

When a swarm has been selected to participate, each node in that swarm is expected to conduct a number of tests on every other node in the swarm. These are not active tests; rather each node stores historical information about its interactions with every other nodenwithin its swarm. Information about bandwidth, [message storage](../SispopServices/Messenger/Session.md) and blockchain requests, functionality are collected and retained over time. New swarm entrants that have yet to gather this information can query [Service Nodes](../ServiceNodes/SNOverview.md) outside of their immediate swarm so as to gather data on each of the Service Nodes they test.

Each [Service Nodes](../ServiceNodes/SNOverview.md) decides how to vote on each of the other swarm members. Once it has made its decision based on the aforementioned tests, it collects and broadcasts its votes to the swarm. Each node in the swarm can now check the votes for all members. If any single node in the swarm has over 50% of the nodes voting against  it, any swarm member has the required information to construct a deregistration transaction. Once this transaction is validated and included in a block, all Service Nodes update their DHT, purging any nodes that were voted off.

![Dishonest Node](../assets/Swarm2.PNG)

## Testing Suite

In order to allow the network to self-enforce performance standards, [Service Nodes](../ServiceNodes/SNOverview.md) must be equipped with the required tools so as to test other Service Nodes. These tests should cover the scope of all functionality provided by Service Nodes to prevent [lazy masternode attacks](https://www.reddit.com/r/dashpay/comments/5t6kvc/lazy_masternodes_do_you_actually_have_to_do_any/). In this initial design, four fundamental tests are proposed. Further tests may be added to the test suite as the function of Services Nodes expands.

When an operator first runs the [Service Nodes](../ServiceNodes/SNOverview.md) software, an empty file with a predetermined size is allocated on disk to ensure that space is present for tasks that require storage. Next, a simple bandwidth test is conducted between the Service Node and a geographically distributed set of testing servers run by the [Sispop Foundation](../Governance/TheSispopFoundation.md). These checks are optional, and Service Nodes are allowed to skip, ignore or fail them, and join the pool of untrusted Service Nodes.  However, running and passing these tests provides a good indicator to any would-be Service Node operator as to whether they should risk [locking collateral](../ServiceNodes/StakingRequirement.md) in a node that may not meet minimum requirements. Once a Service Node joins the untrusted Service Node pool, their collateral is locked and they are tested by the next chosen swarm. Swarm tests are enforced via consensus and new entrants to the Service Node network cannot evade these tests. If a node passes all swarm tests, they are awarded the trusted node flag and can begin routing packets. Failing this, they are removed from the network and their collateral remains locked for 30 days.

### Bandwidth Test

The bandwidth test forms the backbone of the Sispop network test suite. If a node passes this test then it is assumed to be honestly routing packets above the minimum threshold.

Each time a node interacts with another Service Node, it will make and retain a record of the incoming bandwidth provided.  Over time, nodes will be included in thousands of paths and route millions of [messages](../SispopServices/Messenger/Session.md). These interactions will form the basis of each nodes bandwidth tables. From this table, a node can respond to bandwidth tests about Service Nodes inside its swarm.

All nodes are also expected to respond to queries of their own bandwidth tables from other nodes. This means that even  nodes who have recently joined the network can query the wider network for information about any specific node in their swarm.

### Message Storage Test

Message storage is essential for offline messaging functionality for users of [Session](../SispopServices/Messenger/Session.md). [Service Nodes](../ServiceNodes/SNOverview.md) must be tested for their ability to cache messages and serve them to users over the course of the message’s Time-to-live (TTL).

Users sending offline messages randomly select a Service Node within the destination users swarm. This node must distribute a copy of the message amongst the rest of the swarm. Depending on the proof-of-work attached to the header of the message, Service Nodes that receive a copy will store the data for the TTL. As the TTL on the original message reaches finality, the distributing node sends a nonce to all other members of the swarm. The swarm uses the nonce adding it to the message then  hashing  the result  and  then finally  sending it back to the distributing node. This test ensures that Service Nodes hold messages until TTL finality, and face eviction if they are unable to produce the correct message digest. As the sampling of the distributing node is random, over time each Service Node will be able to collect performance data on their swarm peers.

### Blockchain Storage Test

[Service Nodes](../ServiceNodes/SNOverview.md) are expected to hold a full copy of the Sispop blockchain. By holding a full copy of the blockchain, Service Nodes can perform a number of tasks that are essential to users of the network including acting as a [remote node](/ServiceNodes/ServiceNodeFunctions/#remote-nodes), validating transactions, and locking transactions in [Blink](../SispopServices/Blink.md).

As honest nodes also hold a copy of the blockchain, a dishonest node could avoid holding a full copy by simply requesting  blocks from an honest node when tested. To avoid this outcome, the blockchain storage test is designed so that honest nodes that hold a copy of the blockchain can pass this test, while dishonest nodes cannot.

To achieve this, the testing node requests each tested node to make a selection of ***K*** random transactions within the history of the blockchain which are then concatenated and hashed. This hash is then returned to the testing node. By measuring the latency of this request, the testing node can compare the latency with the expected return time ***T***. The exact value for ***T*** will be set to accurately differentiate expected latency between loading from disk and downloading blocks from the network. For any attacker, it should be infeasible to download and hash ***K*** blocks within ***T***, and thus piggybacking attacks become difficult. 

