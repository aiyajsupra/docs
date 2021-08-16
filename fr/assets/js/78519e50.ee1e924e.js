(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7517],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(a,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6899:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(2122),o=n(9756),s=(n(7294),n(3905)),i=["components"],c={sidebar_position:1},a="Qu'est-ce que la blockchain ?",l={unversionedId:"lesson-1/what-is-blockchain",id:"lesson-1/what-is-blockchain",isDocsHomePage:!1,title:"Qu'est-ce que la blockchain ?",description:"La r\xe9ponse \xe0 cette question est assez longue et compliqu\xe9e, mais voici quelques points essentiels :",source:"@site/i18n/fr/docusaurus-plugin-content-docs-dev-academy/current/lesson-1/01-what-is-blockchain.md",sourceDirName:"lesson-1",slug:"/lesson-1/what-is-blockchain",permalink:"/fr/dev-academy/lesson-1/what-is-blockchain",editUrl:"https://crowdin.com/project/cosmwasm-docs/fr",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"devAcademy",previous:{title:"Introduction",permalink:"/fr/dev-academy/intro"},next:{title:"Infrastructure de la cha\xeene de blocs",permalink:"/fr/dev-academy/lesson-1/infra"}},u=[{value:"Sources",id:"sources",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"quest-ce-que-la-blockchain-"},"Qu'est-ce que la blockchain ?"),(0,s.kt)("p",null,"La r\xe9ponse \xe0 cette question est assez longue et compliqu\xe9e, mais voici quelques points essentiels :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"La blockchain est un type sp\xe9cifique de base de donn\xe9es."),(0,s.kt)("li",{parentName:"ul"},"Elle se distingue d'une base de donn\xe9es classique par la mani\xe8re dont elle stocke les informations ; les blockchains stockent les donn\xe9es dans des blocs qui sont ensuite encha\xeen\xe9s les uns aux autres."),(0,s.kt)("li",{parentName:"ul"},"Au fur et \xe0 mesure que de nouvelles donn\xe9es arrivent, elles sont introduites dans un nouveau bloc. Une fois que le bloc est rempli de donn\xe9es, il est encha\xeen\xe9 sur le bloc pr\xe9c\xe9dent, ce qui fait que les donn\xe9es sont encha\xeen\xe9es dans l'ordre chronologique."),(0,s.kt)("li",{parentName:"ul"},"Diff\xe9rents types d'informations peuvent \xeatre stock\xe9s sur une blockchain, mais l'utilisation la plus courante jusqu'\xe0 pr\xe9sent est celle d'un grand livre de transactions. Dans le cas du bitcoin, la blockchain est utilis\xe9e de mani\xe8re d\xe9centralis\xe9e, de sorte qu'aucune personne ou groupe n'en a le contr\xf4le - au contraire, tous les utilisateurs conservent collectivement le contr\xf4le."),(0,s.kt)("li",{parentName:"ul"},"Les blockchains d\xe9centralis\xe9es sont immuables, ce qui signifie que les donn\xe9es saisies sont irr\xe9versibles. Pour le bitcoin, cela signifie que les transactions sont enregistr\xe9es en permanence et consultables par tous.")),(0,s.kt)("h2",{id:"sources"},"Sources"),(0,s.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/SSo_EIwHSd4",title:"Lecteur vid\xe9o YouTube",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,mark:"crwd-mark"})," ",(0,s.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/bBC-nXj3Ng4",title:"Lecteur vid\xe9o YouTube",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,mark:"crwd-mark"}))}d.isMDXComponent=!0}}]);