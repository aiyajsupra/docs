(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4584],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2021:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:1},c="Introduction",l={unversionedId:"learn/hijack-escrow/intro",id:"learn/hijack-escrow/intro",isDocsHomePage:!1,title:"Introduction",description:"In getting started section we demonstrated the essential procedure that is required to use",source:"@site/docs/learn/hijack-escrow/intro.md",sourceDirName:"learn/hijack-escrow",slug:"/learn/hijack-escrow/intro",permalink:"/0.14/learn/hijack-escrow/intro",editUrl:"https://github.com/CosmWasm/docs/edit/main/docs/learn/hijack-escrow/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Next Steps",permalink:"/0.14/learn/simple-option/next-steps"},next:{title:"Hack the Contract",permalink:"/0.14/learn/hijack-escrow/hack-contract"}},u=[{value:"Setting up your IDE",id:"setting-up-your-ide",children:[{value:"Setting Root Directory",id:"setting-root-directory",children:[]}]}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"/0.14/getting-started/intro"},"getting started section")," we demonstrated the essential procedure that is required to use\nCosmWasm smart contracts: setup, compilation, development, and interacting. We will take it once step further and edit\nthe escrow contract in a way that enables a thief to hijack the funds saved in the contract. Before starting, make sure\nyou read and followed the steps in ",(0,i.kt)("a",{parentName:"p",href:"/0.14/getting-started/intro"},"getting started"),"."),(0,i.kt)("h2",{id:"setting-up-your-ide"},"Setting up your IDE"),(0,i.kt)("p",null,"Now that you can compile and test the code, it is time to edit it. But before that, we will need a good editor to make\nthose changes. I highly recommend plugins that help you learn syntax, especially when just starting rust. There are two\nfree editor environments I can recommend, choose the one that is more familiar to you."),(0,i.kt)("p",null,"If you use VSCode (",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"Download link"),") you just need to add the rust plugin. This\nis the best supported environment for RLS (Rust Language Server) and uses the rust compiler to type-check all your code\non save. This gives the same error messages as the actual compiler would and highlights along the line of the code, but\nit can be a bit slow to respond sometime (as it runs the compiler). It is quite good, and if you are used to VSCode, I\nhighly recommend it:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=rust-lang.rust"},"RLS for VSCode")),(0,i.kt)("p",null,"The other option I can recommend it Intellij IDEA Community\nEdition (",(0,i.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/idea/download/"},"Download link"),"), along with the Rust Plugin. This has very nice and\nquick support for many language features directly inline. In particular, it shows the inferred types along variables,\nwhich can be very helpful, especially when working with (nested) generics. It catches most syntax errors very quickly,\nbut not all of them. Which means sometimes you have to look at the compile failures to find the errors. If you are\ncoming from another Intellij product (eg. Goland), I recommend this approach:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://intellij-rust.github.io/"},"RUST for Intellij")),(0,i.kt)("p",null,"There are many more editors out there and some have varying degrees of rust support, at least syntax highlighting, but I\nwould recommend trying one of the two above, especially if you are new to rust. Once you are confident in the language,\nyou can always use another editor and customize it to your liking."),(0,i.kt)("h3",{id:"setting-root-directory"},"Setting Root Directory"),(0,i.kt)("p",null,"Both of the above extensions look for a Cargo.toml file in the root directory of your workspace, and only parse rust\ncode referenced by this Cargo.toml file (listed as a workspace, or imported by ",(0,i.kt)("inlineCode",{parentName:"p"},"src/lib.rs"),").\nThe ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-examples"},(0,i.kt)("inlineCode",{parentName:"a"},"cosmwasm-examples"))," repo does not have a ",(0,i.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file, but\nrather one in each example sub-directory. To ensure proper IDE support when working on this example, you should open\nonly the ",(0,i.kt)("inlineCode",{parentName:"p"},"escrow")," directory. And in general, have one window open for one rust projects, rooted in the same directory as\nit's ",(0,i.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file."))}d.isMDXComponent=!0}}]);