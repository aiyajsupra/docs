(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6468],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9627:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i=["components"],s={sidebar_position:2},l="Result and Option",p={unversionedId:"smart-contracts/components/result-option",id:"smart-contracts/components/result-option",isDocsHomePage:!1,title:"Result and Option",description:"In Rust, using Result and Option types is very common. If you've used fp-ts in Typescript, functional features in",source:"@site/docs/04-smart-contracts/02-components/02-result-option.md",sourceDirName:"04-smart-contracts/02-components",slug:"/smart-contracts/components/result-option",permalink:"/fr/docs/1.0/smart-contracts/components/result-option",editUrl:"https://github.com/InterWasm/docs/edit/main/docs/04-smart-contracts/02-components/02-result-option.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Messages",permalink:"/fr/docs/1.0/smart-contracts/components/message"},next:{title:"Simple State",permalink:"/fr/docs/1.0/smart-contracts/components/state/simple-state"}},c=[{value:"Result",id:"result",children:[{value:"StdResult",id:"stdresult",children:[]}]},{value:"Option",id:"option",children:[]}],u={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"result-and-option"},"Result and Option"),(0,o.kt)("p",null,"In Rust, using ",(0,o.kt)("inlineCode",{parentName:"p"},"Result")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Option")," types is very common. If you've used ",(0,o.kt)("inlineCode",{parentName:"p"},"fp-ts")," in Typescript, functional features in\na language like Scala, or a strongly-typed functional language like Haskell, these should be familiar to you."),(0,o.kt)("p",null,"Both of these types are containers, or enum types. That is, they contain other values within variants."),(0,o.kt)("p",null,"If you're familiar with Algebraic Data types, it might be enough to say that these are effectively:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"\nenum Option<T> {\n    Some(T), // existence\n    None, // non-existence\n}\n\nenum Result<T, E> {\n    Ok(T), // success\n    Err(E), // failure\n}\n")),(0,o.kt)("h2",{id:"result"},"Result"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Result")," is an enum type, ",(0,o.kt)("inlineCode",{parentName:"p"},"Result<T, E>"),", where both ",(0,o.kt)("inlineCode",{parentName:"p"},"T")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"E")," are generics, representing success and failure. These\nare called like so:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Ok(T)")," - a ",(0,o.kt)("inlineCode",{parentName:"li"},"Result")," container which has succeeded, containing ",(0,o.kt)("inlineCode",{parentName:"li"},"T")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Err(E)")," - a ",(0,o.kt)("inlineCode",{parentName:"li"},"Result")," container which has failed, containing ",(0,o.kt)("inlineCode",{parentName:"li"},"E"))),(0,o.kt)("p",null,"A result type is conceptually similar to an ",(0,o.kt)("inlineCode",{parentName:"p"},"Either")," in other functional languages. Many contract entry points are typed\n",(0,o.kt)("inlineCode",{parentName:"p"},"Result<Response, ContractError>"),". In this case, ",(0,o.kt)("inlineCode",{parentName:"p"},"Response")," is the ",(0,o.kt)("inlineCode",{parentName:"p"},"Right")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Success")," branch, while ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractError")," is\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"Left")," or failure case."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Result")," types are not just used in entry points and handlers, however."),(0,o.kt)("p",null,"They are often used in functions used to match enums, for example in ",(0,o.kt)("inlineCode",{parentName:"p"},"execute")," entry points."),(0,o.kt)("p",null,"We can see in CW20-base that ",(0,o.kt)("inlineCode",{parentName:"p"},"execute")," is typed ",(0,o.kt)("inlineCode",{parentName:"p"},"Result<Response, ContractError>"),". Let's look at the function call in\nthe first branch, which matches ",(0,o.kt)("inlineCode",{parentName:"p"},"ExecuteMsg::Transfer"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"execute_transfer(deps, env, info, recipient, amount)\n")),(0,o.kt)("p",null,"We might expect the match branches to call functions that are typed the same as the entry point. And ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/blob/main/contracts/cw20-base/src/contract.rs#L173"},"they\nare"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn execute_transfer(\n    deps: DepsMut,\n    _env: Env,\n    info: MessageInfo,\n    recipient: String,\n    amount: Uint128,\n) -> Result<Response, ContractError> {\n    if amount == Uint128::zero() {\n        return Err(ContractError::InvalidZeroAmount {});\n    }\n\n    let rcpt_addr = deps.api.addr_validate(&recipient)?;\n\n    BALANCES.update(\n        deps.storage,\n        &info.sender,\n        |balance: Option<Uint128>| -> StdResult<_> {\n            Ok(balance.unwrap_or_default().checked_sub(amount)?)\n        },\n    )?;\n    BALANCES.update(\n        deps.storage,\n        &rcpt_addr,\n        |balance: Option<Uint128>| -> StdResult<_> { Ok(balance.unwrap_or_default() + amount) },\n    )?;\n\n    let res = Response::new()\n        .add_attribute("action", "transfer")\n        .add_attribute("from", info.sender)\n        .add_attribute("to", recipient)\n        .add_attribute("amount", amount);\n    Ok(res)\n}\n')),(0,o.kt)("h3",{id:"stdresult"},"StdResult"),(0,o.kt)("p",null,"It's also worth being aware of ",(0,o.kt)("inlineCode",{parentName:"p"},"StdResult"),". This is used often in ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," handlers and functions that are called from\nthem."),(0,o.kt)("p",null,"For example, in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-examples/blob/main/contracts/nameservice/src/contract.rs#L95"},"nameservice\ncontract")," you can see the\n",(0,o.kt)("inlineCode",{parentName:"p"},"StdResult"),", which is like ",(0,o.kt)("inlineCode",{parentName:"p"},"Result"),", except without a defined error branch:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[cfg_attr(not(feature = "library"), entry_point)]\npub fn query(deps: Deps, env: Env, msg: QueryMsg) -> StdResult<Binary> {\n    match msg {\n        QueryMsg::ResolveRecord { name } => query_resolver(deps, env, name),\n        QueryMsg::Config {} => to_binary(&config_read(deps.storage).load()?),\n    }\n}\n')),(0,o.kt)("p",null,"Let's see the implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"query_resolver"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"fn query_resolver(deps: Deps, _env: Env, name: String) -> StdResult<Binary> {\n    let key = name.as_bytes();\n\n    let address = match resolver_read(deps.storage).may_load(key)? {\n        Some(record) => Some(String::from(&record.owner)),\n        None => None,\n    };\n    let resp = ResolveRecordResponse { address };\n\n    to_binary(&resp)\n}\n")),(0,o.kt)("p",null,"The key takeaway here is that generally you can ignore container types, so long as they all line up. Once all your types\nare correct, your code will compile. Then you simply need to match or unwrap your container types correctly to work with\nthe values contained within."),(0,o.kt)("h2",{id:"option"},"Option"),(0,o.kt)("p",null,"In Rust, there is no concept of ",(0,o.kt)("inlineCode",{parentName:"p"},"nil")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", unlike most other mainstream programming languages. Instead, you have\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"Option")," type, which encodes the idea of existence or non-existence into a container type."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Option<T>")," is an enum type, with two variants:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Some(<wrapped-value>)")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"Some")," wraps an inner value, which can be accessed via ",(0,o.kt)("inlineCode",{parentName:"li"},".unwrap()"),". You will see this, as\nwell as matching, all over rust code."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"None")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"None"))),(0,o.kt)("p",null,"It's useful for doing things like expressing that a value might not exist for a key in a struct:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\npub struct Config {\n    pub purchase_price: Option<Coin>,\n    pub transfer_price: Option<Coin>,\n}\n")),(0,o.kt)("p",null,"The source is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-examples/blob/main/contracts/nameservice/src/state.rs#L13"},"here"),". We can\nsee why this might be - these values come from\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-examples/blob/main/contracts/nameservice/src/msg.rs#L6"},"instantiation"),", where the values\nare also ",(0,o.kt)("inlineCode",{parentName:"p"},"Option"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\npub struct InstantiateMsg {\n    pub purchase_price: Option<Coin>,\n    pub transfer_price: Option<Coin>,\n}\n")),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"Result")," examples above, we saw an example of ",(0,o.kt)("inlineCode",{parentName:"p"},"Option")," usage. When we try and read the storage, there will either\nbe a result, or nothing. To handle situations like this, it's common to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"match")," operator to pattern match the\ntwo cases:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"let address = match resolver_read(deps.storage).may_load(key)? {\n    Some(record) => Some(String::from(&record.owner)),\n    None => None,\n};\n")),(0,o.kt)("p",null,"In cases where ",(0,o.kt)("inlineCode",{parentName:"p"},"None")," being returned would be an error state, convention dictates you should consider throwing an error\ninstead of handling the ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),"."))}m.isMDXComponent=!0}}]);