# Using SispopNET

// TODO: overview for sispopnet cli guide

* `--no-igd` on the command line or `no-igd=1` in sispopd.conf to disable IGD
  (UPnP port forwarding negotiation).
  
* `--p2p-bind-ifname=sispoptun0` to bind to just the sispopnet tun interface 


// TODO: note which version of sispopd has `--p2p-bind-ifname` option
  
Example command line to start sispopd for JUST sispopnet traffic

    sispopd --no-igd --p2p-bind-ifname=sispoptun0
