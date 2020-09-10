(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{100:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},116:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},117:function(e,t,n){"use strict";var a=n(0),r=n(116);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},197:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(117),i=n(100),c=n(49),s=n.n(c),l=37,p=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,b=e.values,d=e.groupId,u=Object(o.a)(),h=u.tabGroupChoices,m=u.setTabGroupChoices,g=Object(a.useState)(c),f=g[0],O=g[1],j=Object(a.useState)(!1),y=j[0],v=j[1];if(null!=d){var w=h[d];null!=w&&w!==f&&b.some((function(e){return e.value===w}))&&O(w)}var N=function(e){O(e),null!=d&&m(d,e)},T=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||v(!0)},C=function(){v(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",x),window.addEventListener("mousedown",C)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":f===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e),x(e)},onFocus:function(){return N(t)},onClick:function(){N(t),v(!1)},onPointerDown:function(){return v(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===f}))[0]))}},198:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),o=(n(0),n(91)),i=n(197),c=n(198),s={title:"Ledger signer",author:"Roxane Letourneau"},l={unversionedId:"ledger_signer",id:"ledger_signer",isDocsHomePage:!1,title:"Ledger signer",description:"The Ledger Signer implements the Signer interface of Taquito, allowing you to sign operation from a Ledger Nano device.",source:"@site/../docs/ledger_signer.md",slug:"/ledger_signer",permalink:"/docs/ledger_signer",version:"current",sidebar:"docs",previous:{title:"TezBridge Signer",permalink:"/docs/tezbridge_signer"},next:{title:"Working with contracts having complex storage/parameters",permalink:"/docs/complex_parameters"}},p=[{value:"Usage",id:"usage",children:[]},{value:"Derivation paths, HD wallet &amp; BIP Standards",id:"derivation-paths-hd-wallet--bip-standards",children:[]},{value:"Paths scanning",id:"paths-scanning",children:[]}],b={rightToc:p};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Ledger Signer implements the Signer interface of Taquito, allowing you to sign operation from a Ledger Nano device. "),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You need to have the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://support.ledger.com/hc/en-us/articles/360016057774-Tezos-XTZ-"}),"Tezos Wallet app")," installed and opened on your Ledger device when using the Ledger Signer. "))),Object(o.b)("p",null,"You first need to import the desired transport from the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/LedgerHQ/ledgerjs"}),"LedgerJs library"),". The Ledger Signer has currently been tested with ",Object(o.b)("inlineCode",{parentName:"p"},"@ledgerhq/hw-transport-node-hid")," for Node based application and with ",Object(o.b)("inlineCode",{parentName:"p"},"@ledgerhq/hw-transport-u2f")," for web applications.\nYou will need to pass an instance of the transport of your choice to your Ledger Signer as follows:"),Object(o.b)(i.a,{defaultValue:"webApp",values:[{label:"Web application",value:"webApp"},{label:"Node application",value:"nodeApp"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"webApp",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import TransportU2F from \"@ledgerhq/hw-transport-u2f\";\nimport { LedgerSigner } from '@taquito/ledger-signer';\n\nconst transport = await TransportU2F.create();\nconst ledgerSigner = new LedgerSigner(transport);\n"))),Object(o.b)(c.a,{value:"nodeApp",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import TransportNodeHid from \"@ledgerhq/hw-transport-node-hid\";\nimport { LedgerSigner } from '@taquito/ledger-signer';\n\nconst transport = await TransportNodeHid.create();\nconst ledgerSigner = new LedgerSigner(transport);\n")))),Object(o.b)("p",null,"The constructor of the ",Object(o.b)("inlineCode",{parentName:"p"},"LedgerSigner")," class can take three other parameters. If none are specified, the default values are used."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"path: ",Object(o.b)("strong",{parentName:"li"},"default value is \"44'/1729'/0'/0'\""),Object(o.b)("br",{parentName:"li"}),"You can use as a parameter the ",Object(o.b)("inlineCode",{parentName:"li"},"HDPathTemplate")," which refers to ",Object(o.b)("inlineCode",{parentName:"li"},"44'/1729'/${account}'/0'"),". You will only have to specify what is the index of the account you want to use. Or you can also use a complete path as a parameter.",Object(o.b)("br",{parentName:"li"}),Object(o.b)("em",{parentName:"li"},"More details about paths below")),Object(o.b)("li",{parentName:"ul"},"prompt: ",Object(o.b)("strong",{parentName:"li"},"default is true"),Object(o.b)("br",{parentName:"li"}),"If true, you will be asked, on your Ledger device, for validation to send your public key. ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Note that confirmation is required when using ",Object(o.b)("inlineCode",{parentName:"em"},"@ledgerhq/hw-transport-u2f"),", so you should not set this parameter to false if you are using this transport."))),Object(o.b)("li",{parentName:"ul"},"derivationType: ",Object(o.b)("strong",{parentName:"li"},"default is DerivationType.tz1"),Object(o.b)("br",{parentName:"li"}),"It can be DerivationType.tz1, DerivationType.tz2 or DerivationType.tz3.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { LedgerSigner, DerivationType, HDPathTemplate } from '@taquito/ledger-signer';\nimport { Tezos } from '@taquito/taquito';\n\nconst ledgerSigner = new LedgerSigner(\n    transport, //required\n    HDPathTemplate(1), // path optional (equivalent to \"44'/1729'/1'/0'\")\n    true, // prompt optional\n    DerivationType.tz1 // derivationType optional\n    );\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { LedgerSigner } from '@taquito/ledger-signer';\nimport { Tezos } from '@taquito/taquito';\nimport TransportNodeHid from \"@ledgerhq/hw-transport-node-hid\";\n\nconst transport = await TransportNodeHid.create();\nconst ledgerSigner = new LedgerSigner(transport);\n\nTezos.setProvider({ signer: ledgerSigner });\n\n//Get the public key and the public key hash from the Ledger\nconst publicKey = await Tezos.signer.publicKey();\nconst publicKeyHash = await Tezos.signer.publicKeyHash();\n")),Object(o.b)("p",null,"You are all set to sign operation with your Ledger device. You can use your configured ledger signer with both the Contract API or the Wallet API as usual. If you try the following example, you will be asked on your Ledger device to confirm the transaction before sending it."),Object(o.b)(i.a,{defaultValue:"contractAPI",values:[{label:"Contract API",value:"contractAPI"},{label:"Wallet API",value:"walletAPI"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"contractAPI",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const amount = 0.5;\nconst address = 'tz1h3rQ8wBxFd8L9B3d7Jhaawu6Z568XU3xY';\n\nconsole.log(`Transfering ${amount} \ua729 to ${address}...`);\nTezos.contract.transfer({ to: address, amount: amount })\n.then(op => {\n    console.log(`Waiting for ${op.hash} to be confirmed...`);\n    return op.confirmation(1).then(() => op.hash);\n})\n.then(hash => console.log(`Operation injected: https://carthagenet.tzstats.com/${hash}`))\n.catch(error => console.log(`Error: ${error} ${JSON.stringify(error, null, 2)}`));  \n"))),Object(o.b)(c.a,{value:"walletAPI",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const amount = 0.5;\nconst address = 'tz1h3rQ8wBxFd8L9B3d7Jhaawu6Z568XU3xY';\n\nconsole.log(`Transfering ${amount} \ua729 to ${address}...`);\nTezos.wallet.transfer({ to: address, amount: amount }).send()\n.then(op => {\n    console.log(`Waiting for ${op.opHash} to be confirmed...`);\n    return op.confirmation(1).then(() => op.opHash);\n})\n.then(hash => console.log(`Operation injected: https://carthagenet.tzstats.com/${hash}`))\n.catch(error => console.log(`Error: ${error} ${JSON.stringify(error, null, 2)}`));     \n")))),Object(o.b)("h2",{id:"derivation-paths-hd-wallet--bip-standards"},"Derivation paths, HD wallet & BIP Standards"),Object(o.b)("p",null,"Derivation paths are related to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.bitcoinwiki.org/wiki/Deterministic_wallet"}),"Hierarchical Deterministic Wallet (HD wallet)"),". ",Object(o.b)("inlineCode",{parentName:"p"},"HD wallet")," is a system allowing to derive addresses from a mnemonic phrase combined with a derivation path. Changing one index of the path will allow accessing a different ",Object(o.b)("inlineCode",{parentName:"p"},"account"),". We can access an unlimited number of addresses with ",Object(o.b)("inlineCode",{parentName:"p"},"HD wallet"),". "),Object(o.b)("p",null,"Here is the technical specification for the most commonly used HD wallets :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki"}),"BIP-32"),": HD wallet"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki"}),"BIP-39"),": Mnemonic phrase"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki"}),"BIP-44"),": Derivation path")),Object(o.b)("p",null,"According to BIP44, path is described as follow:\n",Object(o.b)("inlineCode",{parentName:"p"},"purpose' / coin_type' / account' / change / address_index"),".\nWhere ",Object(o.b)("inlineCode",{parentName:"p"},"purpose")," is a constant set to ",Object(o.b)("inlineCode",{parentName:"p"},"44'")," and ",Object(o.b)("inlineCode",{parentName:"p"},"coin_type")," is set to ",Object(o.b)("inlineCode",{parentName:"p"},"1729'")," for Tezos."),Object(o.b)("h4",{id:"different-tezos-hd-paths"},"Different Tezos HD Paths"),Object(o.b)("p",null,"The path always begins with ",Object(o.b)("inlineCode",{parentName:"p"},"44'/1729'")," and we see some difference for the three other indexes across the Tezos ecosystem. We can notice that changing any number for the three last indexes of the path (",Object(o.b)("inlineCode",{parentName:"p"},"account' / change / address_index"),") will lead to different accounts. ",Object(o.b)("strong",{parentName:"p"},"But, to ensure consistency, it is important trying to follow the same convention regarding the structure of the path and which index to increase to access the next address.")),Object(o.b)("p",null,"In Tezos, we generally see a slight difference in the path compared to the BIP44 specification. It is common to see path made of 4 indexes instead of 5 (default path being ",Object(o.b)("inlineCode",{parentName:"p"},"44'/1729'/0'/0'")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"44'/1729'/0'/0'/0'"),"). For example, the default path used by tezos-client is ",Object(o.b)("inlineCode",{parentName:"p"},"44'/1729'/0'/0'"),".\nBased on what is done by the Tezos-client, the default path used by Taquito in the ",Object(o.b)("inlineCode",{parentName:"p"},"LedgerSigner")," is also ",Object(o.b)("inlineCode",{parentName:"p"},"44'/1729'/0'/0'"),". Taquito offers a template for the path called ",Object(o.b)("inlineCode",{parentName:"p"},"HDPathTemplate"),". This template uses four indexes and suggests doing the iteration on the ",Object(o.b)("inlineCode",{parentName:"p"},"account")," index.",Object(o.b)("br",{parentName:"p"}),"\n","For example, you can use HDPathTemplate(0) (equivalent to ",Object(o.b)("inlineCode",{parentName:"p"},"44'/1729'/0'/0'"),") to access the first address, HDPathTemplate(1) equivalent to ",Object(o.b)("inlineCode",{parentName:"p"},"44'/1729'/1'/0'"),") to access the second address, HDPathTemplate(2) (equivalent to ",Object(o.b)("inlineCode",{parentName:"p"},"44'/1729'/2'/0'"),") to access the third address... ",Object(o.b)("em",{parentName:"p"},"In order to meet the needs of each user, this template is not imposed by Taquito"),"."),Object(o.b)("p",null,"We can see other implementations that adhere to BIP44 and use ",Object(o.b)("inlineCode",{parentName:"p"},"44'/1729'/0'/0'/0'"),", where the next address is accessed by incrementing ",Object(o.b)("inlineCode",{parentName:"p"},"account")," or ",Object(o.b)("inlineCode",{parentName:"p"},"address_index"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Quick summary of ",Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://github.com/LedgerHQ/ledger-live-common/blob/master/src/derivation.js"}),"different default paths used"),":")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Wallet"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Path"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Tezbox"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\"44'/1729'/{account}'/0'\" or \"44'/1729'/0'/{account}'\"")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Galleon"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\"44'/1729'/{account}'/0'/0'\" or \"44'/1729'/0'/0'/{account}'\"")))),Object(o.b)("h4",{id:"some-considerations-about-paths"},"Some considerations about paths"),Object(o.b)("p",null,'According to BIP44, "Software should prevent a creation of an account if a previous account does not have a transaction history (meaning none of its addresses have been used before)." When building an app using the ',Object(o.b)("inlineCode",{parentName:"p"},"LedgerSigner"),", you must be careful not to allow users to access an account with a path structure that does not follow any convention. Otherwise, users could have difficulties using their accounts with other wallets that are not compatible with their paths. As stated before, HD wallets allow you to get an infinity of address. According to BIP44, wallets should follow an ",Object(o.b)("inlineCode",{parentName:"p"},"Account discovery")," algorithm meaning that it is possible that the wallet won't found an account created with an unconventional path. We can think about how hard it would be for a user who had created an account with a no common path and forgot it to find it back. "),Object(o.b)("h4",{id:"more-about-derivation-path-here"},"More about derivation path here"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://ethereum.stackexchange.com/questions/70017/can-someone-explain-the-meaning-of-derivation-path-in-wallet-in-plain-english-s"}),"https://ethereum.stackexchange.com/questions/70017/can-someone-explain-the-meaning-of-derivation-path-in-wallet-in-plain-english-s")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/LedgerHQ/ledger-live-desktop/issues/2559"}),"https://github.com/LedgerHQ/ledger-live-desktop/issues/2559")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/obsidiansystems/ledger-app-tezos/#importing-the-key-from-the-ledger-device"}),"https://github.com/obsidiansystems/ledger-app-tezos/#importing-the-key-from-the-ledger-device")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/MyCryptoHQ/MyCrypto/issues/2070"}),"https://github.com/MyCryptoHQ/MyCrypto/issues/2070")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://medium.com/mycrypto/wtf-is-a-derivation-path-c3493ca2eb52"}),"https://medium.com/mycrypto/wtf-is-a-derivation-path-c3493ca2eb52")),Object(o.b)("h2",{id:"paths-scanning"},"Paths scanning"),Object(o.b)("p",null,"Having your Ledger device connected to your computer and the ",Object(o.b)("inlineCode",{parentName:"p"},"Tezos Wallet App")," opened, you can run the following code example. It will scan your Ledger from path ",Object(o.b)("inlineCode",{parentName:"p"},"44'/1729'/0'/0'")," to ",Object(o.b)("inlineCode",{parentName:"p"},"44'/1729'/9'/0'")," to get public key hashes and the balance for revealed accounts. Confirmations will be asked on your Ledger to send the public keys.\n",Object(o.b)("em",{parentName:"p"},"This example is not intended to be a complete example of paths scanning but only a rough outline of what is possible to do.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline",live:!0,noInline:!0}),"//import { LedgerSigner, DerivationType, HDPathTemplate } from '@taquito/ledger-signer';\n//import { Tezos } from '@taquito/taquito';\n//import TransportU2F from \"@ledgerhq/hw-transport-u2f\";\n\nTransportU2F.create()\n.then(transport => {\n  for (let index = 0, p = Promise.resolve(); index < 10; index++){\n    p = p.then(_ => new Promise(resolve =>\n      setTimeout(function () {\n        getAddressInfo(transport, index);\n        resolve();\n      }, 2000)))\n    }\n})\n\nfunction getAddressInfo(transport, index) {\n  const ledgerSigner = new LedgerSigner(transport, `44'/1729'/${index}'/0'`, true, DerivationType.tz1);\n  Tezos.setProvider({ rpc: 'https://api.tez.ie/rpc/carthagenet', signer: ledgerSigner });\n  return Tezos.signer.publicKeyHash()\n.then ( pkh => {\n Tezos.tz.getBalance(pkh)\n.then ( balance => {\n  Tezos.rpc.getManagerKey(pkh)\n.then( getPublicKey => {\n  println(`The public key hash related to the derivation path having the index ${index} is ${pkh}.`);\n  if ( getPublicKey ) {\n    println(`The balance is ${balance.toNumber() / 1000000} \ua729.\\n`)\n  } else {\n    println('This account is not revealed.\\n')\n  }\n})})})}\n")),Object(o.b)("p",null,"An example of path scanning using ",Object(o.b)("inlineCode",{parentName:"p"},"@ledgerhq/hw-transport-node-hid")," can be found ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ecadlabs/taquito/tree/master/example/scan-path-ledger.ts"}),"here"),". This example directly retrieves the public keys from the Ledger without asking for confirmation on the device."))}d.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,h=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return n?r.a.createElement(h,c(c({ref:t},l),{},{components:n})):r.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);