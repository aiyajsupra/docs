(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9026],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,a(a({ref:e},u),{},{components:n})):r.createElement(f,a({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6292:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:1,id:"intro"},c="Your First Contract",l={unversionedId:"getting-started/intro",id:"getting-started/intro",isDocsHomePage:!1,title:"Your First Contract",description:"Buckle up, we will now get first-hand experience with CosmWasm, by:",source:"@site/docs/02-getting-started/01-intro.md",sourceDirName:"02-getting-started",slug:"/getting-started/intro",permalink:"/fr/docs/1.0/getting-started/intro",editUrl:"https://github.com/InterWasm/docs/edit/main/docs/02-getting-started/01-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"intro"},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/fr/docs/1.0/"},next:{title:"Installation",permalink:"/fr/docs/1.0/getting-started/installation"}},u=[{value:"Sections",id:"sections",children:[]},{value:"Video Version",id:"video-version",children:[]}],d={toc:u};function p(t){var e=t.components,n=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"your-first-contract"},"Your First Contract"),(0,i.kt)("p",null,"Buckle up, we will now get first-hand experience with CosmWasm, by: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Starting up our own CosmWasm-enabled blockchain (just one node for now)"),(0,i.kt)("li",{parentName:"ul"},"Modifying an existing contract"),(0,i.kt)("li",{parentName:"ul"},"Deploying it to our system"),(0,i.kt)("li",{parentName:"ul"},"Executing it via the cli")),(0,i.kt)("p",null,"If you are more of a ",(0,i.kt)("em",{parentName:"p"},"research first, then get your hands dirty second")," person, you should go ahead to ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/1.0/architecture/multichain"},"Architecture"),". Read it first and then head back here."),(0,i.kt)("p",null,"We will not dive into smart contract development in this section. You can follow the steps here to test out smart contracts on a testnet without drowning in smart contract development details. We will demonstrate setting up environment, compiling, deploying, and interacting. Then to make things a bit more interesting, we will show modifying the example escrow contract by adding a backdoor to it in the ",(0,i.kt)("a",{parentName:"p",href:"/tutorials/hijack-escrow/intro"},"Hijack Escrow tutorial"),". It exposes an identical API to the original one, but has one hidden command added. This also shows the importance of verifying the source code behind any contract you run."),(0,i.kt)("p",null,"This is designed for programmers who are comfortable with the command-line and using Linux or MacOS. It is helpful to have a basic understanding of Rust and Go, but we will lead you through, so you need no prior knowledge.\nThe ",(0,i.kt)("a",{parentName:"p",href:"/tutorials/name-service/intro"},"next tutorial, name service")," will assume knowledge of these basics. And it will show all the development flow from zero to production."),(0,i.kt)("h2",{id:"sections"},"Sections"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/fr/docs/1.0/getting-started/installation"},"Installation")," will show you how to setup the required software tooling for CosmWasm."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/fr/docs/1.0/getting-started/setting-env"},"Setting up Environment")," will show you how to setup the client environment, and interact with the faucet."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/fr/docs/1.0/getting-started/compile-contract"},"Downloading and Compiling Contract")," will demonstrate downloading and compiling smart contract code\nto wasm byte code."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/fr/docs/1.0/getting-started/interact-with-contract"},"Interacting with Contracts")," will show deploying, initializing and executing smart contracts."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/fr/docs/1.0/getting-started/next-steps"},"Next Steps")," is the last part of the tutorial. It wraps up this section and points you in the direction of further learning."),(0,i.kt)("h2",{id:"video-version"},"Video Version"),(0,i.kt)("p",null,"The coding sections for smart contracts are also available as a ",(0,i.kt)("a",{parentName:"p",href:"https://vimeo.com/showcase/6671477"},"series of videos, leading you through the code structure"),"."))}p.isMDXComponent=!0}}]);