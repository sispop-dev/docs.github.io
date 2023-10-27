title: Sispop Documentation | Sispop Service Node Troubleshooting Port 30000
description: Having error codes showing port 30000 is not open. Follow this guide to open your ports and start staking to a Sispop Service Node.

# Open port 30000

We need to open port `30000` for the sispop-launcher to work properly.

Run the following command to open port `30000`.
```
sudo iptables -A INPUT -p tcp --dport 30000 -j ACCEPT & sudo iptables -A OUTPUT -p tcp --dport 30000 -j ACCEPT
```
Then run the following command to make this port remain open on reboot.
```
sudo apt-get install iptables-persistent
```