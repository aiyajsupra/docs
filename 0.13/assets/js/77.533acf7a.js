(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{672:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"atomic-swaps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#atomic-swaps"}},[e._v("#")]),e._v(" Atomic Swaps")]),e._v(" "),a("p",[e._v("cw20-atomic-swap source code: "),a("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm-plus/tree/master/contracts/cw20-atomic-swap",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/CosmWasm/cosmwasm-plus/tree/master/contracts/cw20-atomic-swap"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("This is a contract that allows users to execute atomic swaps.\nIt implements one side of an atomic swap. The other side can be realized\nby an equivalent contract in the same blockchain or, typically, on a different blockchain.")]),e._v(" "),a("p",[e._v("Each side of an atomic swap has a sender, a recipient, a hash,\nand a timeout. It also has a unique id (for future calls to reference it).\nThe hash is a sha256-encoded 32-bytes long phrase.\nThe timeout can be either time-based (seconds since midnight, January 1, 1970),\nor block height based.")]),e._v(" "),a("p",[e._v("The basic function is, the sender chooses a 32-bytes long phrase as preimage, hashes it,\nand then uses the hash to create a swap with funds.\nBefore the timeout, anybody that knows the preimage may decide to release the funds\nto the original recipient.\nAfter the timeout (and if no release has been executed), anyone can refund\nthe locked tokens to the original sender.\nOn the other side of the swap the process is similar, with sender and recipient exchanged.\nThe hash must be the same, so the first sender can claim the funds, revealing the preimage\nand triggering the swap.")]),e._v(" "),a("p",[e._v("See the "),a("a",{attrs:{href:"https://github.com/iov-one/iov-core/blob/master/docs/atomic-swap-protocol-v1.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("IOV atomic swap spec"),a("OutboundLink")],1),e._v("\nfor details.")]),e._v(" "),a("h2",{attrs:{id:"token-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#token-types"}},[e._v("#")]),e._v(" Token types")]),e._v(" "),a("p",[e._v("Currently native tokens are supported; an upcoming version will support CW20 tokens.")])])}),[],!1,null,null,null);t.default=n.exports}}]);