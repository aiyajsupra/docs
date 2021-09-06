(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2282],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,p(p({ref:t},l),{},{components:n})):r.createElement(f,p({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9083:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),p=["components"],c={sidebar_position:4},i="Bootstrap dApp",s={unversionedId:"smart-contracts/frontend_app/bootstrap-dapp",id:"smart-contracts/frontend_app/bootstrap-dapp",isDocsHomePage:!1,title:"Bootstrap dApp",description:"There are two approaches to bootstrap a new dApp: as a Lerna package in the monorepo or as a standalone app.",source:"@site/docs/04-smart-contracts/10-frontend_app/04-bootstrap-dapp.md",sourceDirName:"04-smart-contracts/10-frontend_app",slug:"/smart-contracts/frontend_app/bootstrap-dapp",permalink:"/fr/docs/1.0/smart-contracts/frontend_app/bootstrap-dapp",editUrl:"https://github.com/CosmWasm/docs/edit/main/docs/04-smart-contracts/10-frontend_app/04-bootstrap-dapp.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Cosmic dApp design",permalink:"/fr/docs/1.0/smart-contracts/frontend_app/cosmicdapp-design"},next:{title:"Develop dApp",permalink:"/fr/docs/1.0/smart-contracts/frontend_app/dapp-development"}},l=[{value:"Monorepo template",id:"monorepo-template",children:[]},{value:"Standalone template",id:"standalone-template",children:[]}],d={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bootstrap-dapp"},"Bootstrap dApp"),(0,o.kt)("p",null,"There are two approaches to bootstrap a new dApp: as a ",(0,o.kt)("a",{parentName:"p",href:"https://lerna.js.org/"},"Lerna")," package in the monorepo or as a standalone app."),(0,o.kt)("h2",{id:"monorepo-template"},"Monorepo template"),(0,o.kt)("p",null,"With this approach, we'll create another lerna package in the ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/")," directory that will use the local ",(0,o.kt)("inlineCode",{parentName:"p"},"logic"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"design")," packages as dependencies."),(0,o.kt)("p",null,"For that, you only need to copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"_template")," directory into ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/")," and rename it to ",(0,o.kt)("inlineCode",{parentName:"p"},"balance-checker"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/CosmWasm/dApps.git\ncd dApps\ncp -r _template packages/balance-checker\n")),(0,o.kt)("p",null,"In the next section we'll start by customizing it to our needs."),(0,o.kt)("h2",{id:"standalone-template"},"Standalone template"),(0,o.kt)("p",null,"\ud83d\udc77 Coming soon!"))}u.isMDXComponent=!0}}]);