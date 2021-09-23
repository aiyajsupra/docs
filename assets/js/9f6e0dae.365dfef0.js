(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6372],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(a),m=o,p=u["".concat(c,".").concat(m)]||u[m]||h[m]||r;return a?n.createElement(p,s(s({ref:t},d),{},{components:a})):n.createElement(p,s({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1883:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var n=a(2122),o=a(9756),r=(a(7294),a(3905)),s=["components"],i={title:"Actor Model",sidebar_position:2},c="Actor Model for Contract Calls",l={unversionedId:"architecture/actor",id:"architecture/actor",isDocsHomePage:!1,title:"Actor Model",description:"The actor model is a design pattern, used to build reliable, distributed systems. The fundamental points are that each Actor has exclusive access to its own internal state, and that Actors cannot call each other directly. Instead, they dispatch messages over some Dispatcher (that maintains the state of the system and maps addresses to code and storage). Fundamentally the Actor pattern can be encapsulated in this interface:",source:"@site/docs/03-architecture/02-actor.md",sourceDirName:"03-architecture",slug:"/architecture/actor",permalink:"/docs/1.0/architecture/actor",editUrl:"https://github.com/InterWasm/docs/edit/main/docs/03-architecture/02-actor.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Actor Model",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"What are Multi-Chain Contracts?",permalink:"/docs/1.0/architecture/multichain"},next:{title:"Names and Addresses",permalink:"/docs/1.0/architecture/addresses"}},d=[{value:"Security Benefits",id:"security-benefits",children:[]},{value:"Atomic Execution",id:"atomic-execution",children:[]},{value:"Dynamically Linking Host Modules",id:"dynamically-linking-host-modules",children:[]},{value:"Inter Blockchain Messaging",id:"inter-blockchain-messaging",children:[]},{value:"Credits",id:"credits",children:[]}],h={toc:d};function u(e){var t=e.components,a=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"actor-model-for-contract-calls"},"Actor Model for Contract Calls"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Actor_model"},"actor model")," is a design pattern, used to build reliable, distributed systems. The fundamental points are that each ",(0,r.kt)("inlineCode",{parentName:"p"},"Actor")," has exclusive access to its own internal state, and that ",(0,r.kt)("inlineCode",{parentName:"p"},"Actors")," cannot call each other directly. Instead, they dispatch messages over some ",(0,r.kt)("inlineCode",{parentName:"p"},"Dispatcher")," (that maintains the state of the system and maps addresses to code and storage). Fundamentally the ",(0,r.kt)("inlineCode",{parentName:"p"},"Actor")," pattern can be encapsulated in this interface:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait Actor {\n  fn handle(msgPayload: &[u8]) -> Vec<Msg>;\n}\n\npub struct Msg {\n  pub destination: Vec<u8>,\n  pub payload: Vec<u8>,\n}\n")),(0,r.kt)("p",null,"This is the basic model that was used to model contracts in CosmWasm. You can see the same influence in the function ",(0,r.kt)("inlineCode",{parentName:"p"},"pub fn handle<T: Storage>(store: &mut T, params: Params, msg: Vec<u8>) -> Result<Response>"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"Response")," contains ",(0,r.kt)("inlineCode",{parentName:"p"},"Vec<Msg>")," and a little metadata. ",(0,r.kt)("inlineCode",{parentName:"p"},"store")," is access to the contract's internal state. And ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," is some global immutable context. So, just a little bit of syntax around the same design. From this basic design, a few other useful aspects can be derived:"),(0,r.kt)("p",null,"First, there is a ",(0,r.kt)("strong",{parentName:"p"},"loose coupling")," between Actors, limited to the format of the data packets (the recipient must support a superset of what you send). There is no complex API or function pointers to pass around. This is much like using REST or RPC calls as a boundary between services, which is a scalable way to compose systems from many vendors."),(0,r.kt)("p",null,"Secondly, each ",(0,r.kt)("inlineCode",{parentName:"p"},"Actor")," can effectively run on its own thread, with its own queue. This both enables concurrency (which we don't make use of in CosmWasm... yet), and ",(0,r.kt)("strong",{parentName:"p"},"serialized execution")," within each actor (which we do rely upon). This means that it is impossible for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Handle")," method above to be executed in the middle of a previously executed ",(0,r.kt)("inlineCode",{parentName:"p"},"Handle")," call. ",(0,r.kt)("inlineCode",{parentName:"p"},"Handle")," is a synchronous call and returns before the ",(0,r.kt)("inlineCode",{parentName:"p"},"Actor")," can process the next message. This feature is what ",(0,r.kt)("a",{parentName:"p",href:"./smart-contracts#avoiding-reentrancy-attacks"},"protects us from reentrancy by design"),"."),(0,r.kt)("p",null,"Another important aspect related to CosmWasm is ",(0,r.kt)("strong",{parentName:"p"},"locality"),". That is, actors can only communicate with other actors ",(0,r.kt)("strong",{parentName:"p"},"whose address they previously received"),". We will go more into depth on ",(0,r.kt)("a",{parentName:"p",href:"./addresses"},"addresses and naming")," in the next page, but the key point is that for two actors to communicate, an external message (from the contract creator, or potentially a user) must be sent to the actor. This is a flexible way to set up topologies in a distributed manner. The only thing that must be hard-coded is the data format to pass to such addresses. Once some standard interfaces are established (like ERC20, ERC721, ENS, etc), then we can support composability between large classes of contracts, with different backing code, but sharing a common API."),(0,r.kt)("h2",{id:"security-benefits"},"Security Benefits"),(0,r.kt)("p",null,"By enforcing ",(0,r.kt)("strong",{parentName:"p"},"private internal state"),", a given contract can guarantee all valid transitions in its internal state. This is in contrast to the capabilities model used in Cosmos SDK, where trusted modules are passed a ",(0,r.kt)("inlineCode",{parentName:"p"},"StoreKey")," in their constructor, which allows ",(0,r.kt)("em",{parentName:"p"},"full read and write access to the other module's storage"),". In the Cosmos SDK, we can audit the modules before calling them, and safely pass in such powerful set of rights at compile time. However, there are no compile time checks in a smart contract system and we need to produce stricter boundaries between contracts. This allows us to comprehensively reason over all possibles transitions in a contract's state (and use quick-check like methods to test it)."),(0,r.kt)("p",null,"As mentioned above, ",(0,r.kt)("strong",{parentName:"p"},"serialized execution")," prevents all concurrent execution of a contract's code. This is like an automatic mutex over the entire contract code. This is exactly the issue that one of the most common Ethereum attacks, reentrancy, makes use of. Contract A calls into contract B, which calls back into contract A. There may be local changes in memory in contract A from the first call (eg. deduct a balance), which are not yet persisted, so the second call can use the outdated state a second time (eg. authorize sending a balance twice). By enforcing serialized execution, the contract will write all changes to storage before exiting, and have a proper view when the next message is processed."),(0,r.kt)("h2",{id:"atomic-execution"},"Atomic Execution"),(0,r.kt)("p",null,'One problem with sending messages is atomically committing a state change over two contracts. There are many cases where we want to ensure that all returned messages were properly processed before committing our state. There are ideas like "three-phase-commit" used in distributed databases, but since in the normal case, all actors are living in the same binary, we can handle this in the ',(0,r.kt)("inlineCode",{parentName:"p"},"Keeper"),". Before executing a Msg that came from an external transaction, we create a SavePoint of the global data store, and pass in a subset to the first contract. We then execute all returned messages inside the same sub-transaction. If all messages succeed, then we can commit the sub-transaction. If any fails (or we run out of gas), we abort execution and rollback the state to before the first contract was executed."),(0,r.kt)("p",null,'This allows us to optimistically update code, relying on rollback for error handling. For example if an exchange matches a trade between two "ERC20" tokens, it can make the offer as fulfilled and return two messages to move token A to the buyer and token B to the seller. (ERC20 tokens use a concept of allowance, so the owner "allows" the exchange to move up to X tokens from their account). When executing the returned messages, it turns out the the buyer doesn\'t have sufficient token B (or provided an insufficient allowance). This message will fail, causing the entire sequence to be reverted. Transaction failed, the offer was not marked as fulfilled, and no tokens changed hands.'),(0,r.kt)("p",null,"While many developers may be more comfortable thinking about directly calling the other contract in their execution path and handling the errors, you can achieve almost all the same cases with such an ",(0,r.kt)("em",{parentName:"p"},"optimistic update and return")," approach. And there is no room for making mistakes in the contract's error handling code."),(0,r.kt)("h2",{id:"dynamically-linking-host-modules"},"Dynamically Linking Host Modules"),(0,r.kt)("p",null,"The aspects of ",(0,r.kt)("strong",{parentName:"p"},"locality")," and ",(0,r.kt)("strong",{parentName:"p"},"loose coupling")," mean that we don't even need to link to other CosmWasm contracts. We can send messages to anything the Dispatcher has an address for. For example, we can return a ",(0,r.kt)("inlineCode",{parentName:"p"},"SendMsg"),", which will be processed by the native ",(0,r.kt)("inlineCode",{parentName:"p"},"x/supply")," module in Cosmos SDK, moving native tokens. As we define standard interfaces for composability, we can define interfaces to call into core modules (bond and unbond your stake...), and then pass in the address to the native module in the contract constructor."),(0,r.kt)("h2",{id:"inter-blockchain-messaging"},"Inter Blockchain Messaging"),(0,r.kt)("p",null,'Since the Actor model doesn\'t attempt to make synchronous calls to another contract, but just returns a message "to be executed", it is a nice match for making cross-chain contract calls using ',(0,r.kt)("a",{parentName:"p",href:"https://cosmos.network/ibc"},"IBC"),". The only caveat here is that the ",(0,r.kt)("em",{parentName:"p"},"atomic execution")," guarantee we provided above no longer applies here. The other call will not be called by the same dispatcher, so we need to store an intermediate state in the contract itself. That means a state that cannot be changed until the result of the IBC call is known, then can be safely applied or reverted."),(0,r.kt)("p",null,"For example, if we want to move tokens from chain A to chain B, we would first prepare a send:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Contract A reduces token supply of sender"),(0,r.kt)("li",{parentName:"ol"},'Contract A creates a "escrow" of those tokens linked to IBC message id, sender and receiving chain.'),(0,r.kt)("li",{parentName:"ol"},"Contract A commits state and returns a message to initiate an IBC transaction to chain B."),(0,r.kt)("li",{parentName:"ol"},"If the IBC send part fails, then the contract is atomically reverted as above.")),(0,r.kt)("p",null,'After some time, a "success" or "error"/"timeout" message is returned from the IBC module to the token contract:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Contract A validates the message came from the IBC handler (authorization) and refers to a known IBC message ID it has in escrow."),(0,r.kt)("li",{parentName:"ol"},'If it was a success, the escrow is deleted and the escrowed tokens are placed in an account for "Chain B" (meaning that only a future IBC message from Chain B may release them).'),(0,r.kt)("li",{parentName:"ol"},"If it was an error, the escrow is deleted and the escrowed tokens are returned to the account of the original sender.")),(0,r.kt)("p",null,"You can imagine a similar scenario working for cases like moving NFT ownership, cross-chain staking, etc. We will expand on these possibilities and provide tooling to help make proper design once the IBC code in Cosmos SDK is stabilized (and included in a release), but the contract design is made with this in mind."),(0,r.kt)("h2",{id:"credits"},"Credits"),(0,r.kt)("p",null,"Much thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aaronc"},"Aaron Craelius"),", who came up with this design of using an Actor model to avoid reentrancy attacks."))}u.isMDXComponent=!0}}]);