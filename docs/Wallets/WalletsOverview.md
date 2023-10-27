title: Sispop Documentation | Sispop Wallets Overview.
description: The Sispop wallets are a gateway into private decentralised transactions and communications. They allow you to hold private keys, secure or mine Sispop, and trade cryptocurrency peer-to-peer. 

# Sispop Wallets
The Sispop wallets are a gateway into private decentralised transactions and communications. They allow you to hold private keys, secure or mine Sispop, and trade peer-to-peer. 

Sispop wallets store a collection of public and private keys which can be used to receive, view, or spend Sispop. 

The wallet uses the private keys through a daemon which synchronises with the Sispop Network to scan for incoming transactions and to send outgoing transactions.

## Graphical User Interface Wallet (GUI)
The Gui Wallet is the easiest wallets to use. It has a graphical user friendly interface which is perfect for beginners. 

- The Sispop Electron wallet: [Download here](https://github.com/sispop-dev/sispop-electron-gui-wallet/releases).

### GUI Guides
| Guide                                                	| Description                                          	|
|------------------------------------------------------	|------------------------------------------------------	|
| [GUI Setup](../Wallets/GuiWallet/sispop-gui-guide.md)  	| How to set up the GUI wallet for the first time.     	|
| [GUI Staking](../ServiceNodes/GUIStakingGuide.md) 	| How to stake to a Service Node from your GUI Wallet. 	|

## Command Line Interface Wallet (CLI)
The Cli Wallet is for more advanced users and offers the most tools when interacting with the Sispop Blockchain.

- [Download Sispop CLI Wallet](https://github.com/sispop-dev/sispop/releases)

- [Github Link](https://github.com/sispop-dev/sispop/)

### CLI Guides

| Guide                                                                     	| Description                                                                                                                                                                                    	|
|---------------------------------------------------------------------------	|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| [Restore CLI Wallet from Keys](../Wallets/CliWallet/WalletRestoreKeys.md) 	| How to restore your wallet with spend and view keys.                                                                                                                                           	|
| [Restore CLI Wallet from Seed](../Wallets/CliWallet/WalletRestoreSeed.md) 	| How to restore your wallet with a seed phrase (25 word mnemonic seed).                                                                                                                         	|
| [CLI Commands](../Wallets/CliWallet/WalletCommands.md)                    	| Details on different commands within the `sispop-wallet-cli`.                                                                                                                                    	|
| [2 of 2 - Multisignature Setup](../Wallets/CliWallet/2of2Multisig.md)     	| [Multisig](../Wallets/Multisignature.md) feature allows you to sign a transaction with more than one private key. Funds protected with multisig can only be spent by signing with 2-of-2 keys. 	|
| [2 of 3 - Multisignature Setup](../Wallets/CliWallet/2of3Multisig.md)     	| [Multisig](../Wallets/Multisignature.md) feature allows you to sign a transaction with more than one private key. Funds protected with multisig can only be spent by signing with 2-of-3 keys. 	|
| [M of N - Multisignature Setup](../Wallets/CliWallet/MofNMultisig.md)     	| [Multisig](../Wallets/Multisignature.md) feature allows you to sign a transaction with more than one private key. Funds protected with multisig can only be spent by signing with M-of-N keys. 	|
| [CLI Setup - Mac](../Wallets/CliWallet/sispop-wallet-cliMacSetup.md)        	| How to setup the `sispop-wallet-cli` for the first time on Mac OS.                                                                                                                               	|