> Outdated Guide - To be rewritten for RandomX algo

# How to Set Up XMR-Stak on Linux

Native binaries may be available for your distribution's package manager.

If no binaries are available, or you prefer to compile, follow these instructions:

## Ubuntu 16.04<a name="ubuntu-16-04"></a>

*Guide sponsored by Monerise & TurtleCoin*

1. If you want to use your GPU for mining, do the following:

    * For AMD GPU’s:

        * Install drivers for your card

        * download the latest APP SDK from [here](https://github.com/Microsoft/LightGBM/releases/download/v2.0.12/AMD-APP-SDKInstaller-v3.0.130.136-GA-linux64.tar.bz2). It should have the name `AMD-APP-SDKInstaller-v(version number)-GA-linux64.tar.bz2`

            * Extract it

            * Open the terminal wherever it is located

            * (optional) name it to something simpler

            * In the terminal, type `./(name).sh`

            * After installing, you should be good.

    * For nVidia GPU’s:

        * Install drivers for your card

        * Download the latest CUDA Toolkit from [here](https://developer.nvidia.com/cuda-downloads?target_os=Linux&target_arch=x86_64).

            * Download the base installer and follow the compilation instructions

            * Download every patch one-by-one in order and apply the patches

            * After that, you should be good.

2.  Open the terminal and install dependencies by running this command:

    ```
    sudo apt install libmicrohttpd-dev libssl-dev cmake build-essential libhwloc-dev
    ```

3.  Clone the package:

    `git clone https://github.com/fireice-uk/xmr-stak.git`

4.  Make a directory:

    `mkdir xmr-stak/build`

5.  Move over there: 

    `cd xmr-stak/build`

6.  Run cmake:

    `cmake ..`

    * If you don’t have nVidia GPUs, type:

    `cmake .. -DCUDA_ENABLE=OFF`

    * If you don’t have AMD GPUs, type:

    `cmake .. -DOpenCL_ENABLE=OFF`

    * If you have neither (only CPU mining) type:

    `cmake .. -DCUDA_ENABLE=OFF -DOpenCL_ENABLE=OFF`

7.  Finish building it:

    `make install`

8.  XMR-Stak will now be located in `/home/user/xmr-stak/build/bin`

9. Type:

    `./xmr-stak`

10. Check [XMR-Stak Setup and Configuration](#setup-and-config)

11. If you see something like this, that means it’s working!

<center>![workubuntu](../assets/xmrstak-ubuntuwork.png)</center>

## XMR-Stak Setup and Configuration<a name="setup-and-config"></a>

Upon first launching XMR-Stak, the software will ask you several setup and configuration questions.
<ol>
<li>`Please enter: - Do you want to use the HTTP interface? Unlike the screen display, browser interface is not affected by the GPU lag. If you don't want to use it, please enter 0, otherwise enter port number that the miner should listen on`</li>

Enter `0`, if you do not need to remotely check your hashrate.

If you do need to, then enter a port number.
Let's take the port number as `0101` and your IP address as `26.24.105.14` as an example.

To check the hashrate, enter in the address bar of your web browser, `<26.24.105.14>:<0101>`. It should show a page with your rig's hashrate.  
If you are checking from the same IP address, you can alternatively enter, `localhost:<0101>`

Make sure to enter your own IP address if you enable this feature. You can choose any port you want!

<li> </li>

```
   - Please enter the currency that you want to mine:
        - aeon7
        - bbscoin
        - bittube
        - cryptonight
        - cryptonight_bittube2
        - cryptonight_masari
        - cryptonight_haven
        - cryptonight_heavy
        - cryptonight_lite
        - cryptonight_lite_v7
        - cryptonight_lite_v7_xor
        - cryptonight_superfast
        - cryptonight_turtle
        - cryptonight_v7
        - cryptonight_v8
        - cryptonight_v7_stellite
        - freehaven
        - graft
        - haven
        - intense
        - masari
        - monero
        - qrl
        - ryo
        - stellite
        - turtlecoin
        - plenteum
```

Enter `cryptonight_turtle`

<li><code>Pool address: e.g. pool.example.com:3333</code></li>

Choose a pool from any of the [available pools](../MiningOverview/#pools) that is **closest to you** and enter its URL (you will be able to add more later).

<li><code>Username (Wallet address or pool login):</code></li>

If you have not yet downloaded and ran the Sispop core software to sync the blockchain and create a wallet, you can make a paper wallet to start mining towards now, and import the wallet later.

<li><code>Password (mostly empty or x):</code></li>

Enter `x`.

<li><code>Rig identifier for pool-side statistics (needs pool support). Can be empty:</code></li>

Leave it empty and press enter.

<li><code>Does this pool port support TLS/SSL? Use no if unknown. (y/n)</code></li>

In most cases, `N` is fine.

<li><code>Do you want to use nicehash on this pool? (y/n)</code></li>

Enter `n`(in case you do, enter `y`).

<li><code>Do you want to use multiple pools? (y/n)</code></li>

* Enter `y` if you would like to add more pools.

* Give them all a weight of `10` if you're tired of reading, or if you want the best experience, give the pools nearest to you a higher number, and the ones further from you a lower number.  

* XMR-Stak will prioritize the highest weight pool, and fall back to the others if it cannot connect.
* If they are all given the same weight, it will connect to them in order of how they are listed, form top to bottom, in the configuration file.

* If you are on Windows 7/8, it will ask for administrator permission again. Click `Yes` to grant it permission.

* If you are on Windows 10, it will not ask for it again.
</ol>

Done! The miner will now start scanning your hardware and will begin mining. Awesome!

XMR-Stak will save your configuration in `config.txt`  in the same directory from which it was first run.

Your configuration for pools(algorithm to mine, address, port etc) will be saved in `pools.txt`
The configuration of the device it mines(CPU/AMD/NVIDIA) will be saved in `cpu.txt`, `amd.txt` or `nvidia.txt`, respectively.

Run XMR-Stak again from the same directory to reuse the configuration.

## Source:
- [TurtleCoin Wiki](https://docs.turtlecoin.lol/guides/mining/xmr-stak-linux-guide/)
