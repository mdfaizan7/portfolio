(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{DW2E:function(e,t,n){var r=n("0/R4"),a=n("Z6vF").onFreeze;n("Xtr8")("freeze",(function(e){return function(t){return e&&r(t)?e(a(t)):t}}))},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("Wbzz"),o=n("pLtG"),c=n.n(o),s=n("Bl7J"),l=n("vrFN"),u=(n("V+eJ"),n("dZ+Y"),n("LK8F"),n("2Spj"),n("VRzm"),n("Btvt"),n("91GP"),n("DW2E"),n("f3/d"),n("8o2o")),d=n("k1TG"),f=n("uRdJ"),p=n("9Hrx"),m=n("2mql"),g=n.n(m);function h(e,t){if(!e){var n=new Error("loadable: "+t);throw n.framesToPop=1,n.name="Invariant Violation",n}}var x=a.a.createContext();var v=function(e){return e};function y(e){var t=e.resolve,n=void 0===t?v:t,r=e.render,i=e.onLoad;function o(e,t){void 0===t&&(t={});var o=function(e){return"function"==typeof e?{requireAsync:e}:e}(e),c={};function s(e){return t.cacheKey?t.cacheKey(e):o.resolve?o.resolve(e):null}var l,m=function(e){function a(n){var r;return(r=e.call(this,n)||this).state={result:null,error:null,loading:!0,cacheKey:s(n)},r.promise=null,h(!n.__chunkExtractor||o.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),n.__chunkExtractor?(!1===t.ssr||(o.requireAsync(n).catch((function(){})),r.loadSync(),n.__chunkExtractor.addChunk(o.chunkName(n))),Object(f.a)(r)):(!1!==t.ssr&&o.isReady&&o.isReady(n)&&r.loadSync(),r)}Object(p.a)(a,e),a.getDerivedStateFromProps=function(e,t){var n=s(e);return Object(d.a)({},t,{cacheKey:n,loading:t.loading||t.cacheKey!==n})};var l=a.prototype;return l.componentDidMount=function(){this.mounted=!0,this.state.loading?this.loadAsync():this.state.error||this.triggerOnLoad()},l.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&(this.promise=null,this.loadAsync())},l.componentWillUnmount=function(){this.mounted=!1},l.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},l.triggerOnLoad=function(){var e=this;i&&setTimeout((function(){i(e.state.result,e.props)}))},l.loadSync=function(){if(this.state.loading)try{var e=o.requireSync(this.props),t=n(e,{Loadable:v});this.state.result=t,this.state.loading=!1}catch(r){this.state.error=r}},l.getCacheKey=function(){return s(this.props)||JSON.stringify(this.props)},l.getCache=function(){return c[this.getCacheKey()]},l.setCache=function(e){c[this.getCacheKey()]=e},l.loadAsync=function(){var e=this;if(!this.promise){var r=this.props,a=(r.__chunkExtractor,r.forwardedRef,Object(u.a)(r,["__chunkExtractor","forwardedRef"]));this.promise=o.requireAsync(a).then((function(r){var a=n(r,{Loadable:v});t.suspense&&e.setCache(a),e.safeSetState({result:n(r,{Loadable:v}),loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){e.safeSetState({error:t,loading:!1})}))}return this.promise},l.render=function(){var e=this.props,n=e.forwardedRef,a=e.fallback,i=(e.__chunkExtractor,Object(u.a)(e,["forwardedRef","fallback","__chunkExtractor"])),o=this.state,c=o.error,s=o.loading,l=o.result;if(t.suspense){var f=this.getCache();if(!f)throw this.loadAsync();return r({loading:!1,fallback:null,result:f,options:t,props:Object(d.a)({},i,{ref:n})})}if(c)throw c;var p=a||t.fallback||null;return s?p:r({loading:s,fallback:p,result:l,options:t,props:Object(d.a)({},i,{ref:n})})},a}(a.a.Component),g=(l=m,function(e){return a.a.createElement(x.Consumer,null,(function(t){return a.a.createElement(l,Object.assign({__chunkExtractor:t},e))}))}),v=a.a.forwardRef((function(e,t){return a.a.createElement(g,Object.assign({forwardedRef:t},e))}));return v.preload=function(e){o.requireAsync(e)},v.load=function(e){return o.requireAsync(e)},v}return{loadable:o,lazy:function(e,t){return o(e,Object(d.a)({},t,{suspense:!0}))}}}var b=y({resolve:function(e,t){var n=t.Loadable,r=e.__esModule?e.default:e.default||e;return g()(n,r,{preload:!0}),r},render:function(e){var t=e.result,n=e.props;return a.a.createElement(t,n)}}),w=b.loadable,j=b.lazy,S=y({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,n=e.loading,r=e.props;return!n&&r.children?r.children(t):null}}),E=S.loadable,k=S.lazy;var C=w;C.lib=E,j.lib=k;var O=["I'm a Student 🎓","I'm a Programmer 💻","Coding is my passion 🔥","I'm a ☕ lover","I'm a Thinker 💡","I love challenges","I'm a Developer ♨️","I'm a Rapper (wannabe)"],R=C((function(){return n.e(10).then(n.t.bind(null,"UmPT",7))})),I=function(){return a.a.createElement(R,{text:O,eraseDelay:1200,speed:60,typingDelay:500})},_=n("tRbT");n("16zm"),t.default=function(){return a.a.createElement(s.a,null,a.a.createElement(l.a,{title:"Home"}),a.a.createElement(_.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:"landing-content",spacing:5},a.a.createElement(_.a,{item:!0},a.a.createElement("img",{src:c.a,alt:"profile",className:"image"})),a.a.createElement(_.a,{item:!0},a.a.createElement("h1",{className:"header"},a.a.createElement("div",{className:"first"},"Hi!"),a.a.createElement("div",{className:"second"},"I am Faizan")),a.a.createElement(I,null))),a.a.createElement(i.Link,{to:"/projects",style:{color:"transparent",fontSize:"0rem"}},"a"))}},pLtG:function(e,t,n){e.exports=n.p+"static/my-img-35141ad9cef4570ca0f38529672593ae.jpg"},tRbT:function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("DNiP"),n("pIFo"),n("8+KV");var r=n("aXB2"),a=n("k1TG"),i=n("q1tI"),o=n("iuhU"),c=n("H2TA"),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var d=i.forwardRef((function(e,t){var n=e.alignContent,c=void 0===n?"stretch":n,s=e.alignItems,l=void 0===s?"stretch":s,u=e.classes,d=e.className,f=e.component,p=void 0===f?"div":f,m=e.container,g=void 0!==m&&m,h=e.direction,x=void 0===h?"row":h,v=e.item,y=void 0!==v&&v,b=e.justify,w=void 0===b?"flex-start":b,j=e.lg,S=void 0!==j&&j,E=e.md,k=void 0!==E&&E,C=e.sm,O=void 0!==C&&C,R=e.spacing,I=void 0===R?0:R,_=e.wrap,z=void 0===_?"wrap":_,W=e.xl,L=void 0!==W&&W,q=e.xs,D=void 0!==q&&q,K=e.zeroMinWidth,N=void 0!==K&&K,A=Object(r.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),G=Object(o.a)(u.root,d,g&&[u.container,0!==I&&u["spacing-xs-".concat(String(I))]],y&&u.item,N&&u.zeroMinWidth,"row"!==x&&u["direction-xs-".concat(String(x))],"wrap"!==z&&u["wrap-xs-".concat(String(z))],"stretch"!==l&&u["align-items-xs-".concat(String(l))],"stretch"!==c&&u["align-content-xs-".concat(String(c))],"flex-start"!==w&&u["justify-xs-".concat(String(w))],!1!==D&&u["grid-xs-".concat(String(D))],!1!==O&&u["grid-sm-".concat(String(O))],!1!==k&&u["grid-md-".concat(String(k))],!1!==S&&u["grid-lg-".concat(String(S))],!1!==L&&u["grid-xl-".concat(String(L))]);return i.createElement(p,Object(a.a)({className:G,ref:t},A))})),f=Object(c.a)((function(e){return Object(a.a)(Object(a.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(r){var a=e.spacing(r);0!==a&&(n["spacing-".concat(t,"-").concat(r)]={margin:"-".concat(u(a,2)),width:"calc(100% + ".concat(u(a),")"),"& > $item":{padding:u(a,2)}})})),n}(e,"xs")),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var r={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var a="".concat(Math.round(e/12*1e8)/1e6,"%");r[t]={flexBasis:a,flexGrow:0,maxWidth:a}}else r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(a.a)(e,r):e[t.breakpoints.up(n)]=r}(t,e,n),t}),{}))}),{name:"MuiGrid"})(d);t.a=f}}]);
//# sourceMappingURL=component---src-pages-index-js-3aee11ad8d9f3bf84f6d.js.map