(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5052],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8111:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),s=["components"],i={sidebar_position:3},l="Environment Setup",p={unversionedId:"lesson-1/environment",id:"lesson-1/environment",isDocsHomePage:!1,title:"Environment Setup",description:"You need an environment to run contracts. You can either run your node locally or connect to an existing network. For",source:"@site/dev-academy/lesson-1/04-environment.md",sourceDirName:"lesson-1",slug:"/lesson-1/environment",permalink:"/dev-academy/lesson-1/environment",editUrl:"https://github.com/CosmWasm/docs/edit/main/dev-academy/lesson-1/04-environment.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"devAcademy",previous:{title:"Basics of Cosmos SDK and CosmWasm",permalink:"/dev-academy/lesson-1/cosmos-sdk-cw"},next:{title:"Challenge",permalink:"/dev-academy/lesson-1/challenge"}},u=[{value:"Gitpod",id:"gitpod",children:[]},{value:"Go",id:"go",children:[]},{value:"Rust",id:"rust",children:[{value:"Installing Rust in Linux and Mac",id:"installing-rust-in-linux-and-mac",children:[]}]},{value:"wasmd",id:"wasmd",children:[]},{value:"Setup wasmd and Wallet",id:"setup-wasmd-and-wallet",children:[]},{value:"Export wasmd Parameters",id:"export-wasmd-parameters",children:[]},{value:"Setup linux tools",id:"setup-linux-tools",children:[]},{value:"Setup JS CLI client",id:"setup-js-cli-client",children:[]},{value:"Setting up your IDE",id:"setting-up-your-ide",children:[]}],d={toc:u};function c(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"environment-setup"},"Environment Setup"),(0,r.kt)("p",null,"You need an environment to run contracts. You can either run your node locally or connect to an existing network. For\neasy testing, oysternet network is online, you can use it to deploy and run your contracts."),(0,r.kt)("p",null,"When interacting with network, you can either use ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmd")," which is a Go client or Node REPL. Although Node REPL is\nrecommended for contract operations, since JSON manipulation is not intuitive with the Shell/Go client."),(0,r.kt)("p",null,"For the whole course, we will be using a public testnet to make things simpler."),(0,r.kt)("h2",{id:"gitpod"},"Gitpod"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.gitpod.io/"},"Gitpod")," is an online development environment. We have a gitpod image that you can base your\nprojects on that contains all the requirements below. Gitpod is recommended if you have stable internet connection.\nAdd ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-template/blob/master/.gitpod.yml"},".gitpod.yml")," file to your project's root\nthen push it to GitHub. After installing ",(0,r.kt)("a",{parentName:"p",href:"https://www.gitpod.io/extension-activation/"},"gitpod extension"),", on github\nproject repo, there will be ",(0,r.kt)("inlineCode",{parentName:"p"},"Gitpod")," button which will create a workspace for you to work on."),(0,r.kt)("h2",{id:"go"},"Go"),(0,r.kt)("p",null,"You can setup golang following ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/golang/go/wiki#working-with-go"},"official documentation"),". The latest\nversions of ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmd"),"\nrequire go version ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.15"),"."),(0,r.kt)("h2",{id:"rust"},"Rust"),(0,r.kt)("p",null,"Assuming you have never worked with rust, you will first need to install some tooling. The standard approach is to\nuse ",(0,r.kt)("inlineCode",{parentName:"p"},"rustup")," to wallettain dependencies and handle updating multiple versions of\n",(0,r.kt)("inlineCode",{parentName:"p"},"cargo")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"rustc"),", which you will be using."),(0,r.kt)("h3",{id:"installing-rust-in-linux-and-mac"},"Installing Rust in Linux and Mac"),(0,r.kt)("p",null,"First, ",(0,r.kt)("a",{parentName:"p",href:"https://rustup.rs/"},"install rustup"),". Once installed, make sure you have the wasm32 target:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"rustup default stable\ncargo version\n# If this is lower than 1.50.0+, update\nrustup update stable\n\nrustup target list --installed\nrustup target add wasm32-unknown-unknown\n")),(0,r.kt)("h2",{id:"wasmd"},"wasmd"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wasmd")," is the backbone of CosmWasm platform. It is the implementation of a Cosmoszone with wasm smart contracts\nenabled."),(0,r.kt)("p",null,"This code was forked from the ",(0,r.kt)("inlineCode",{parentName:"p"},"cosmos/gaia")," repository as a basis and then added x/wasm and cleaned up many\ngaia-specific files. However, the wasmd binary should function just like gaiad except for the addition of the x/wasm\nmodule."),(0,r.kt)("p",null,"If you intend to develop or edit a contract, you need wasmd."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/CosmWasm/wasmd.git\ncd wasmd\n# replace the v0.18.0 with the most stable version on https://github.com/CosmWasm/wasmd/releases\ngit checkout v0.18.0\nmake install\n\n# verify the installation\nwasmd version\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you have any problems here, check your ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"make install")," will copy ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmd")," to\n",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/go/bin")," by default, please make sure that is set up in your ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," as well, which should be the case in general\nfor building Go code from source."))),(0,r.kt)("h2",{id:"setup-wasmd-and-wallet"},"Setup wasmd and Wallet"),(0,r.kt)("p",null,"Let's configure ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmd")," exec, point it to testnets, create wallet and ask tokens from faucet:"),(0,r.kt)("p",null,"First source the oysternet cosmwasm public network configurations to the shell:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"source <(curl -sSL https://raw.githubusercontent.com/CosmWasm/testnets/master/oysternet-1/defaults.env)\n")),(0,r.kt)("p",null,"Setup the client:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# add wallets for testing\nwasmd keys add wallet\n>\n{\n  "name": "wallet",\n  "type": "local",\n  "address": "wasm13nt9rxj7v2ly096hm8qsyfjzg5pr7vn5saqd50",\n  "pubkey": "wasmpub1addwnpepqf4n9afaefugnfztg7udk50duwr4n8p7pwcjlm9tuumtlux5vud6qvfgp9g",\n  "mnemonic": "hobby bunker rotate piano satoshi planet network verify else market spring toward pledge turkey tip slim word jaguar congress thumb flag project chalk inspire"\n}\n\n')),(0,r.kt)("p",null,"You need some tokens in your address to interact. If you are using local node you can skip this step. Requesting tokens\nfrom faucet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'JSON=$(jq -n --arg addr $(wasmd keys show -a wallet) \'{"denom":"usponge","address":$addr}\') && curl -X POST --header\n"Content-Type: application/json" --data "$JSON" https://faucet.oysternet.cosmwasm.com/credit\n')),(0,r.kt)("h2",{id:"export-wasmd-parameters"},"Export wasmd Parameters"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wasmd")," client requries setup for interacting with different testnets.\nEach testnet has its own endpoints and system parameters."),(0,r.kt)("p",null,"Best way to configure ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmd")," is by setting up environment variables below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# bash\nexport NODE="--node $RPC"\nexport TXFLAG="${NODE} --chain-id ${CHAIN_ID} --gas-prices 0.001usponge --gas auto --gas-adjustment 1.3"\n\n# zsh\nexport NODE=(--node $RPC)\nexport TXFLAG=($NODE --chain-id $CHAIN_ID --gas-prices 0.001usponge --gas auto --gas-adjustment 1.3)\n')),(0,r.kt)("p",null,"If command above throws error, this means your shell is different. If no errors, try running this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wasmd query bank total $NODE\n")),(0,r.kt)("h2",{id:"setup-linux-tools"},"Setup linux tools"),(0,r.kt)("p",null,"We will be using few linux tools extensively:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"apt install jq curl\n")),(0,r.kt)("h2",{id:"setup-js-cli-client"},"Setup JS CLI client"),(0,r.kt)("p",null,"Other way to use and interact with on-chain contracts is CosmJS interactive client\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmjs/tree/main/packages/cli"},"@cosmjs/cli")),(0,r.kt)("p",null,"To use it, install ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"node.js 12+")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx @cosmjs/cli@^0.25 --init https://raw.githubusercontent.com/CosmWasm/cosmwasm-plus/master/contracts/cw20-base/helpers.ts\n")),(0,r.kt)("p",null,"Now you will see an interactive shell popped up."),(0,r.kt)("p",null,'Code below setups a client that speaks to pebblenet, generates and address and then requests tokens from faucet.\n"password" is the password of the key file.\nThis key is different from wasmd key generated above'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const [addr, client] = await useOptions(pebblenetOptions).setup("password");\nclient.getAccount(addr);\n')),(0,r.kt)("p",null,"You should see something similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"{\n  address: 'wasm1kfaqnxcsz6pwxyv0h468594g6g2drwxfrrwslv',\n  pubkey: null,\n  accountNumber: 326,\n  sequence: 0\n}\n")),(0,r.kt)("h2",{id:"setting-up-your-ide"},"Setting up your IDE"),(0,r.kt)("p",null,"We need a good IDE for developing rust smart contracts. We recommend Intellij with Rust Plugin."))}c.isMDXComponent=!0}}]);