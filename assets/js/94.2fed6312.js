(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{679:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("In this section we will explain how to join testnets, where to find testnet configurations and some scripts to make the process faster.")]),t._v(" "),a("h2",{attrs:{id:"select-your-network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#select-your-network"}},[t._v("#")]),t._v(" Select Your Network")]),t._v(" "),a("p",[t._v("You can find active and in-active testnet information such as configs and endpoints on "),a("a",{attrs:{href:"https://github.com/CosmWasm/testnets",target:"_blank",rel:"noopener noreferrer"}},[t._v("CosmWasm/testnets"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),a("p",[t._v("Let's start rolling your node and start producing blocks in testnet environment.")]),t._v(" "),a("p",[a("strong",[t._v("Before starting")]),t._v(", you can use "),a("a",{attrs:{href:"https://github.com/CosmWasm/testnets/tree/master/devops",target:"_blank",rel:"noopener noreferrer"}},[t._v("CosmWasm/tesnets/devops"),a("OutboundLink")],1),t._v(" that contains easy setup scripts for wasmd\nnode, faucet, "),a("a",{attrs:{href:"https://github.com/CosmWasm/big-dipper",target:"_blank",rel:"noopener noreferrer"}},[t._v("block explorer"),a("OutboundLink")],1),t._v(", lcd, nginx etc. Scripts\nbelow does the some thing as "),a("strong",[t._v("devops repo")]),t._v(" in essence, just more manual and excludes nginx and system supervisor. Feel free\nto use them.")]),t._v(" "),a("p",[t._v("First of all make sure you followed the installation steps in "),a("RouterLink",{attrs:{to:"/testnets/build-requirements.html"}},[t._v("build requirements section")]),t._v(". You should have the required binaries. If you just want to copy and execute the scripts below, make sure to set up environment variables:")],1),t._v(" "),a("p",[t._v("Below is the "),a("a",{attrs:{href:"https://github.com/CosmWasm/testnets/tree/master/heldernet",target:"_blank",rel:"noopener noreferrer"}},[t._v("heldernet configuration"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"ZXhwb3J0IENIQUlOX0lEPSZxdW90O2hhY2thdG9tLXdhc20mcXVvdDsKZXhwb3J0IFRFU1RORVRfTkFNRT0mcXVvdDtoZWxkZXJuZXQmcXVvdDsKZXhwb3J0IFdBU01EX1ZFUlNJT049JnF1b3Q7djAuMTEuMSZxdW90OwpleHBvcnQgQ09ORklHX0RJUj0mcXVvdDsud2FzbWQmcXVvdDsKZXhwb3J0IEJJTkFSWT0mcXVvdDt3YXNtZCZxdW90OwpleHBvcnQgQ0xJX0JJTkFSWT0mcXVvdDt3YXNtY2xpJnF1b3Q7CgpleHBvcnQgQ09TTUpTX1ZFUlNJT049JnF1b3Q7djAuMjMuMCZxdW90OwpleHBvcnQgR0VORVNJU19VUkw9JnF1b3Q7aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0Nvc21XYXNtL3Rlc3RuZXRzL21hc3Rlci9oZWxkZXJuZXQvY29uZmlnL2dlbmVzaXMuanNvbiZxdW90OwpleHBvcnQgQVBQX0NPTkZJR19VUkw9JnF1b3Q7aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0Nvc21XYXNtL3Rlc3RuZXRzL21hc3Rlci9oZWxkZXJuZXQvY29uZmlnL2FwcC50b21sJnF1b3Q7CmV4cG9ydCBDT05GSUdfVVJMPSZxdW90O2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Db3NtV2FzbS90ZXN0bmV0cy9tYXN0ZXIvaGVsZGVybmV0L2NvbmZpZy9jb25maWcudG9tbCZxdW90OwoKZXhwb3J0IFJQQz0mcXVvdDtodHRwczovL3JwYy5oZWxkZXJuZXQuY29zbXdhc20uY29tOjQ0MyZxdW90OwpleHBvcnQgTENEPSZxdW90O2h0dHBzOi8vbGNkLmhlbGRlcm5ldC5jb3Ntd2FzbS5jb20mcXVvdDsKZXhwb3J0IEZBVUNFVD0mcXVvdDtodHRwczovL2ZhdWNldC5oZWxkZXJuZXQuY29zbXdhc20uY29tJnF1b3Q7CmV4cG9ydCBTRUVEX05PREU9JnF1b3Q7NDU2YWM4YWUwZjRhMWIxMWU2ZWIyZGRkMGFjOTc4NTdlNzhlNDM1M0A3OC40Ny45Ny4xNjk6MjY2NTYmcXVvdDsK"}}),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("We have setup different executables for each testnet names after network names like: "),a("code",[t._v("corald/coral")]),t._v(", "),a("code",[t._v("gaiaflexd/gaiaflex")])])]),t._v(" "),a("p",[t._v("For running these scripts seamlessly, We recommend you to create a directory for CosmWasm tooling:\n"),a("code",[t._v("mkdir CosmWasm && cd CosmWasm && export CW_DIR=$(pwd)")])]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"Y2QgJENXX0RJUgpnaXQgY2xvbmUgaHR0cHM6Ly9naXRodWIuY29tL0Nvc21XYXNtL3dhc21kCmNkIHdhc21kCiMgQ2hlY2sgd2hpY2ggdmVyc2lvbiB0byB1c2Ugb24gdGVzdG5ldHMgcmVwbwpnaXQgY2hlY2tvdXQgJFdBU01EX1ZFUlNJT04KIyBnZW5lcmF0ZSBjb3JhbCBleGVjdXRhYmxlcwptYWtlIGJ1aWxkICMgbWFrZSBidWlsZC1nYWlhZmxleCwgbWFrZSBidWlsZCBldGMuLi4KIyBhZGQgdGhlIGV4ZWN1dGFibGVzIHRvIHBhdGgKZXhwb3J0IFBBVEg9JnF1b3Q7JHtQQVRIfTokKHB3ZCkvYnVpbGQmcXVvdDsK"}}),t._v(" "),a("h2",{attrs:{id:"initialize-your-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initialize-your-wallet"}},[t._v("#")]),t._v(" Initialize Your Wallet")]),t._v(" "),a("p",[t._v("Initialize "),a("code",[t._v("coral")]),t._v(" and generate validator account:")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"d2FzbWNsaSBjb25maWcgY2hhaW4taWQgJENIQUlOX0lECndhc21jbGkgY29uZmlnIHRydXN0LW5vZGUgdHJ1ZQp3YXNtY2xpIGNvbmZpZyBub2RlICRSUEMKd2FzbWNsaSBjb25maWcgb3V0cHV0IGpzb24Kd2FzbWNsaSBjb25maWcgaW5kZW50IHRydWUKIyB0aGlzIGlzIGltcG9ydGFudCwgc28gdGhlIGNsaSByZXR1cm5zIGFmdGVyIHRoZSB0eCBpcyBpbiBhIGJsb2NrLAojIGFuZCBzdWJzZXF1ZW50IHF1ZXJpZXMgcmV0dXJuIHRoZSBwcm9wZXIgcmVzdWx0cwp3YXNtY2xpIGNvbmZpZyBicm9hZGNhc3QtbW9kZSBibG9jawoKIyBjaGVjayB5b3UgY2FuIGNvbm5lY3QKd2FzbWNsaSBxdWVyeSBzdXBwbHkgdG90YWwKd2FzbWNsaSBxdWVyeSBzdGFraW5nIHZhbGlkYXRvcnMKd2FzbWNsaSBxdWVyeSB3YXNtIGxpc3QtY29kZQoKIyBjcmVhdGUgd2FsbGV0Cndhc21jbGkga2V5cyBhZGQgbXl3YWxsZXQK"}}),t._v(" "),a("h2",{attrs:{id:"joining-live-testnets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#joining-live-testnets"}},[t._v("#")]),t._v(" Joining Live Testnets")]),t._v(" "),a("h3",{attrs:{id:"run-wasmd-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-wasmd-node"}},[t._v("#")]),t._v(" Run wasmd Node")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"ZXhwb3J0IE1PTklLRVI9bmV3X3ZhbGlkYXRvcgojIGluaXRpYWxpemUgd2FzbWQgY29uZmlndXJhdGlvbgp3YXNtZCBpbml0ICRNT05JS0VSCgojIGdldCB0aGUgdGVzdG5ldHMgZ2VuZXNpcyBmaWxlCmN1cmwgLXNTTCAkR0VORVNJU19VUkwgJmd0OyB+Ly53YXNtZC9jb25maWcvZ2VuZXNpcy5qc29uCgojIGdldCBhcHAudG9tbC4gTWluaW11bSBnYXMgcHJpY2VzIG11c3QgYmUgMC4wMjV1Y29zbQpjdXJsIC1zU0wgJEFQUF9DT05GSUdfVVJMICZndDsgfi8ud2FzbWQvY29uZmlnL2FwcC50b21sCgojIFlvdSBuZWVkIHRvIGNvbmZpZ3VyZSBwMnAgc2VlZHMKIyBFaXRoZXIgeW91IGNhbiBpbnNlcnQgdGhlIHNlZWQgYWRkcmVzc2VzIGluICRIT01FLy53YXNtZC9jb25maWcvY29uZmlnLnRvbWwgdG8gJnF1b3Q7c2VlZHMmcXVvdDsKIyBGb3Igc2ltcGxpY2l0eSB3ZSB3aWxsIHBhc3MgdGhlIHNlZWQgSUQgYW5kIGRvbWFpbiBhcyBhcmd1bWVudAojIFlvdSBjYW4gZ2V0IHRoZSBzZWVkIGl0IHVzaW5nIGNvbW1hbmQ6CiMjIFN0YXJ0IHdhc21kCndhc21kIHN0YXJ0IC0tcDJwLnNlZWRzICRTRUVEX05PREUK"}}),t._v(" "),a("p",[t._v("Now you should be seeing blocks being replayed and your node is catching up with the testnet. This could take a while.")]),t._v(" "),a("h3",{attrs:{id:"become-an-active-validator-optional"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#become-an-active-validator-optional"}},[t._v("#")]),t._v(" Become An Active Validator(optional)")]),t._v(" "),a("p",[t._v("In order to join the network as validator, you need some staking tokens.\nPlease ask some in "),a("a",{attrs:{href:"https://docs.cosmwasm.com/chat",target:"_blank",rel:"noopener noreferrer"}},[t._v("discord testnets channel"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("If you want to participate in active block building, you need some coins staked to your validators address.")]),t._v(" "),a("p",[t._v("For those interested in validator stack, here is a good reading source on validator architectures: "),a("a",{attrs:{href:"https://kb.certus.one/",target:"_blank",rel:"noopener noreferrer"}},[t._v("certus one blog"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("Note")]),t._v(": make sure your validator is synced before upgrading to validator")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"d2FzbWNsaSB0eCBzdGFraW5nIGNyZWF0ZS12YWxpZGF0b3IgXAogIC0tYW1vdW50PTEwMDAwMDAwMHN0YWtlIFwKICAtLXB1YmtleT0kKHdhc21kIHRlbmRlcm1pbnQgc2hvdy12YWxpZGF0b3IpIFwKICAtLW1vbmlrZXI9JE1PTklLRVIgXAogIC0tY2hhaW4taWQ9aGFja2F0b20td2FzbSBcCiAgLS1jb21taXNzaW9uLXJhdGU9JnF1b3Q7MC4xMCZxdW90OyBcCiAgLS1jb21taXNzaW9uLW1heC1yYXRlPSZxdW90OzAuMjAmcXVvdDsgXAogIC0tY29tbWlzc2lvbi1tYXgtY2hhbmdlLXJhdGU9JnF1b3Q7MC4wMSZxdW90OyBcCiAgLS1taW4tc2VsZi1kZWxlZ2F0aW9uPSZxdW90OzEmcXVvdDsgXAogIC0tZmVlcz01MDAwdWNvc20KICAtLWZyb209bXl3YWxsZXQK"}}),t._v(" "),a("h3",{attrs:{id:"run-the-light-client-daemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-the-light-client-daemon"}},[t._v("#")]),t._v(" Run the Light Client Daemon")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"d2FzbWNsaSByZXN0LXNlcnZlcgojIGlmIHRoZSBub2RlIGlzIHJ1bm5pbmcgb24gYW5vdGhlciBtYWNoaW5lIHVzZToKd2FzbWNsaSByZXN0LXNlcnZlciAtLW5vZGUgdGNwOi8vJmx0O2hvc3QmZ3Q7OiZsdDtwb3J0Jmd0Owo="}}),t._v(" "),a("h2",{attrs:{id:"joining-to-be-launched-testnets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#joining-to-be-launched-testnets"}},[t._v("#")]),t._v(" Joining To Be Launched Testnets")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("You need to have your address and informations defined in networks genesis file to join not yet launched testnets.\nHere is the script you can run to take care of it automatically. It uses "),a("code",[t._v("wasmd")]),t._v(" "),a("a",{attrs:{href:"https://github.com/CosmWasm/testnets/tree/master/wasmnet",target:"_blank",rel:"noopener noreferrer"}},[t._v("network specific executables"),a("OutboundLink")],1),t._v(":")])]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"Y2QgJENXX0RJUgojIyBGb3JrIGdpdGh1Yi5jb206Q29zbVdhc20vdGVzdG5ldHMgdG8geW91ciBhY2NvdW50IGFuZCBjbG9uZS4KIyMgWW91IGNhbm5vdCBwdXNoIGRpcmVjdGx5IHRvIENvc21XYXNtL3Rlc3RuZXRzIHJlcG8KZ2l0IGNsb25lIGdpdEBnaXRodWIuY29tOiZsdDt5b3VyLW5hbWUmZ3Q7L3Rlc3RuZXRzCmNkIHRlc3RuZXRzCmdpdCBjaGVja291dCAtYiBhZGQtZ2VuLWFjYy0mbHQ7dmFsaWRhdG9yLW5hbWUmZ3Q7CmNkICRURVNUTkVUX05BTUUKCndhc21jbGkga2V5cyBhZGQgdmFsaWRhdG9yCndhc21kIGFkZC1nZW5lc2lzLWFjY291bnQgLS1ob21lIC4gJCh3YXNtY2xpIGtleXMgc2hvdyAtYSB2YWxpZGF0b3IpIDEwMDAwMDAwMHVjb3NtLDEwMDAwMDAwMHN0YWtlCiMgcGxlYXNlIHNvcnQgdGhlIGdlbmVzaXMgZmlsZSwgc28gdGhlIGRpZmYgbWFrZXMgc2Vuc2UKU09SVEVEPSQoanEgLVMgLiAmbHQ7IC4vY29uZmlnL2dlbmVzaXMuanNvbikgJmFtcDsmYW1wOyBlY2hvICZxdW90OyRTT1JURUQmcXVvdDsgJmd0OyAuL2NvbmZpZy9nZW5lc2lzLmpzb24KCmdpdCBhZGQgLi9jb25maWcvZ2VuZXNpcy5qc29uCmdpdCBjb21taXQgLW0gJnF1b3Q7QWRkICZsdDtteXZhbGlkYXRvciZndDsgYWNjb3VudCB0byBuZXR3b3JrIGdlbmVzaXMmcXVvdDsKZ2l0IHB1c2gKCiMgT3BlbiBQUiB0byBDb3NtV2FzbS90ZXN0bmV0czptYXN0ZXIgKGh0dHBzOi8vZ2l0aHViLmNvbS9Db3NtV2FzbS90ZXN0bmV0cykK"}}),t._v(" "),a("p",[t._v("After the network is launched you can follow "),a("a",{attrs:{href:"#joining-live-testnets"}},[t._v("Joining Live Testnets")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"deploying-contracts-to-testnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploying-contracts-to-testnet"}},[t._v("#")]),t._v(" Deploying Contracts to Testnet")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/getting-started/intro.html"}},[t._v("Getting Started section")]),t._v(" is the best reading source that teaches you the process of compiling and deploying contracts using a basic smart contract. If you are interested in developing your own contracts, after reading getting started tutorials head to "),a("RouterLink",{attrs:{to:"/learn/hijack-escrow/intro.html"}},[t._v("Hijacking Escrow")]),t._v(" where you play around with the example escrow contract.")],1)],1)}),[],!1,null,null,null);e.default=n.exports}}]);