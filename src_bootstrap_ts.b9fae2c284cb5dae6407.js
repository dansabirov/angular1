(self.webpackChunkangular1=self.webpackChunkangular1||[]).push([["src_bootstrap_ts"],{9867:(e,t,n)=>{"use strict";n.d(t,{d:()=>s});var r=n(6673);class s extends r.L{constructor(e,t,n){super(),this.parent=e,this.outerValue=t,this.outerIndex=n,this.index=0}_next(e){this.parent.notifyNext(this.outerValue,e,this.outerIndex,this.index++,this)}_error(e){this.parent.notifyError(e,this),this.unsubscribe()}_complete(){this.parent.notifyComplete(this),this.unsubscribe()}}},9129:(e,t,n)=>{"use strict";n.d(t,{y:()=>l});var r=n(3678),s=n(6673),o=n(5331),i=n(7498),c=n(6197),u=n(6541),a=n(1484);let l=(()=>{class e{constructor(e){this._isScalar=!1,e&&(this._subscribe=e)}lift(t){const n=new e;return n.source=this,n.operator=t,n}subscribe(e,t,n){const{operator:r}=this,c=function(e,t,n){if(e){if(e instanceof s.L)return e;if(e[o.b])return e[o.b]()}return e||t||n?new s.L(e,t,n):new s.L(i.c)}(e,t,n);if(c.add(r?r.call(c,this.source):this.source||a.v.useDeprecatedSynchronousErrorHandling&&!c.syncErrorThrowable?this._subscribe(c):this._trySubscribe(c)),a.v.useDeprecatedSynchronousErrorHandling&&c.syncErrorThrowable&&(c.syncErrorThrowable=!1,c.syncErrorThrown))throw c.syncErrorValue;return c}_trySubscribe(e){try{return this._subscribe(e)}catch(t){a.v.useDeprecatedSynchronousErrorHandling&&(e.syncErrorThrown=!0,e.syncErrorValue=t),(0,r._)(e)?e.error(t):console.warn(t)}}forEach(e,t){return new(t=h(t))((t,n)=>{let r;r=this.subscribe(t=>{try{e(t)}catch(s){n(s),r&&r.unsubscribe()}},n,t)})}_subscribe(e){const{source:t}=this;return t&&t.subscribe(e)}[c.L](){return this}pipe(...e){return 0===e.length?this:(0,u.U)(e)(this)}toPromise(e){return new(e=h(e))((e,t)=>{let n;this.subscribe(e=>n=e,e=>t(e),()=>e(n))})}}return e.create=t=>new e(t),e})();function h(e){if(e||(e=a.v.Promise||Promise),!e)throw new Error("no Promise impl found");return e}},7498:(e,t,n)=>{"use strict";n.d(t,{c:()=>o});var r=n(1484),s=n(4294);const o={closed:!0,next(e){},error(e){if(r.v.useDeprecatedSynchronousErrorHandling)throw e;(0,s.z)(e)},complete(){}}},9829:(e,t,n)=>{"use strict";n.d(t,{L:()=>s});var r=n(6673);class s extends r.L{notifyNext(e,t,n,r,s){this.destination.next(t)}notifyError(e,t){this.destination.error(e)}notifyComplete(e){this.destination.complete()}}},6673:(e,t,n)=>{"use strict";n.d(t,{L:()=>a});var r=n(5024),s=n(7498),o=n(9258),i=n(5331),c=n(1484),u=n(4294);class a extends o.w{constructor(e,t,n){switch(super(),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=s.c;break;case 1:if(!e){this.destination=s.c;break}if("object"==typeof e){e instanceof a?(this.syncErrorThrowable=e.syncErrorThrowable,this.destination=e,e.add(this)):(this.syncErrorThrowable=!0,this.destination=new l(this,e));break}default:this.syncErrorThrowable=!0,this.destination=new l(this,e,t,n)}}[i.b](){return this}static create(e,t,n){const r=new a(e,t,n);return r.syncErrorThrowable=!1,r}next(e){this.isStopped||this._next(e)}error(e){this.isStopped||(this.isStopped=!0,this._error(e))}complete(){this.isStopped||(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe())}_next(e){this.destination.next(e)}_error(e){this.destination.error(e),this.unsubscribe()}_complete(){this.destination.complete(),this.unsubscribe()}_unsubscribeAndRecycle(){const{_parentOrParents:e}=this;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=e,this}}class l extends a{constructor(e,t,n,o){let i;super(),this._parentSubscriber=e;let c=this;(0,r.m)(t)?i=t:t&&(i=t.next,n=t.error,o=t.complete,t!==s.c&&(c=Object.create(t),(0,r.m)(c.unsubscribe)&&this.add(c.unsubscribe.bind(c)),c.unsubscribe=this.unsubscribe.bind(this))),this._context=c,this._next=i,this._error=n,this._complete=o}next(e){if(!this.isStopped&&this._next){const{_parentSubscriber:t}=this;c.v.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,e)&&this.unsubscribe():this.__tryOrUnsub(this._next,e)}}error(e){if(!this.isStopped){const{_parentSubscriber:t}=this,{useDeprecatedSynchronousErrorHandling:n}=c.v;if(this._error)n&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,e),this.unsubscribe()):(this.__tryOrUnsub(this._error,e),this.unsubscribe());else if(t.syncErrorThrowable)n?(t.syncErrorValue=e,t.syncErrorThrown=!0):(0,u.z)(e),this.unsubscribe();else{if(this.unsubscribe(),n)throw e;(0,u.z)(e)}}}complete(){if(!this.isStopped){const{_parentSubscriber:e}=this;if(this._complete){const t=()=>this._complete.call(this._context);c.v.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,t),this.unsubscribe()):(this.__tryOrUnsub(t),this.unsubscribe())}else this.unsubscribe()}}__tryOrUnsub(e,t){try{e.call(this._context,t)}catch(n){if(this.unsubscribe(),c.v.useDeprecatedSynchronousErrorHandling)throw n;(0,u.z)(n)}}__tryOrSetError(e,t,n){if(!c.v.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,n)}catch(r){return c.v.useDeprecatedSynchronousErrorHandling?(e.syncErrorValue=r,e.syncErrorThrown=!0,!0):((0,u.z)(r),!0)}return!1}_unsubscribe(){const{_parentSubscriber:e}=this;this._context=null,this._parentSubscriber=null,e.unsubscribe()}}},9258:(e,t,n)=>{"use strict";n.d(t,{w:()=>c});var r=n(8470),s=n(2056),o=n(5024),i=n(8459);let c=(()=>{class e{constructor(e){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,e&&(this._unsubscribe=e)}unsubscribe(){let t;if(this.closed)return;let{_parentOrParents:n,_unsubscribe:c,_subscriptions:a}=this;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof e)n.remove(this);else if(null!==n)for(let e=0;e<n.length;++e)n[e].remove(this);if((0,o.m)(c))try{c.call(this)}catch(l){t=l instanceof i.B?u(l.errors):[l]}if((0,r.k)(a)){let e=-1,n=a.length;for(;++e<n;){const n=a[e];if((0,s.K)(n))try{n.unsubscribe()}catch(l){t=t||[],l instanceof i.B?t=t.concat(u(l.errors)):t.push(l)}}}if(t)throw new i.B(t)}add(t){let n=t;if(!t)return e.EMPTY;switch(typeof t){case"function":n=new e(t);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof e)){const t=n;n=new e,n._subscriptions=[t]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}let{_parentOrParents:r}=n;if(null===r)n._parentOrParents=this;else if(r instanceof e){if(r===this)return n;n._parentOrParents=[r,this]}else{if(-1!==r.indexOf(this))return n;r.push(this)}const s=this._subscriptions;return null===s?this._subscriptions=[n]:s.push(n),n}remove(e){const t=this._subscriptions;if(t){const n=t.indexOf(e);-1!==n&&t.splice(n,1)}}}var t;return e.EMPTY=((t=new e).closed=!0,t),e})();function u(e){return e.reduce((e,t)=>e.concat(t instanceof i.B?t.errors:t),[])}},1484:(e,t,n)=>{"use strict";n.d(t,{v:()=>s});let r=!1;const s={Promise:void 0,set useDeprecatedSynchronousErrorHandling(e){if(e){const e=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+e.stack)}else r&&console.log("RxJS: Back to a better error behavior. Thank you. <3");r=e},get useDeprecatedSynchronousErrorHandling(){return r}}},3163:(e,t,n)=>{"use strict";n.d(t,{D:()=>i});var r=n(9129),s=n(6015),o=n(1277);function i(e,t){return t?(0,o.x)(e,t):e instanceof r.y?e:new r.y((0,s.s)(e))}},9996:(e,t,n)=>{"use strict";n.d(t,{U:()=>s});var r=n(6673);function s(e,t){return function(n){if("function"!=typeof e)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new o(e,t))}}class o{constructor(e,t){this.project=e,this.thisArg=t}call(e,t){return t.subscribe(new i(e,this.project,this.thisArg))}}class i extends r.L{constructor(e,t,n){super(e),this.project=t,this.count=0,this.thisArg=n||this}_next(e){let t;try{t=this.project.call(this.thisArg,e,this.count++)}catch(n){return void this.destination.error(n)}this.destination.next(t)}}},4689:(e,t,n)=>{"use strict";n.d(t,{w:()=>u});var r=n(9829),s=n(9867),o=n(6268),i=n(9996),c=n(3163);function u(e,t){return"function"==typeof t?n=>n.pipe(u((n,r)=>(0,c.D)(e(n,r)).pipe((0,i.U)((e,s)=>t(n,e,r,s))))):t=>t.lift(new a(e))}class a{constructor(e){this.project=e}call(e,t){return t.subscribe(new l(e,this.project))}}class l extends r.L{constructor(e,t){super(e),this.project=t,this.index=0}_next(e){let t;const n=this.index++;try{t=this.project(e,n)}catch(r){return void this.destination.error(r)}this._innerSub(t,e,n)}_innerSub(e,t,n){const r=this.innerSubscription;r&&r.unsubscribe();const i=new s.d(this,t,n),c=this.destination;c.add(i),this.innerSubscription=(0,o.D)(this,e,void 0,void 0,i),this.innerSubscription!==i&&c.add(this.innerSubscription)}_complete(){const{innerSubscription:e}=this;e&&!e.closed||super._complete(),this.unsubscribe()}_unsubscribe(){this.innerSubscription=null}notifyComplete(e){this.destination.remove(e),this.innerSubscription=null,this.isStopped&&super._complete()}notifyNext(e,t,n,r,s){this.destination.next(t)}}},2570:(e,t,n)=>{"use strict";n.d(t,{r:()=>o});var r=n(9129),s=n(9258);function o(e,t){return new r.y(n=>{const r=new s.w;let o=0;return r.add(t.schedule(function(){o!==e.length?(n.next(e[o++]),n.closed||r.add(this.schedule())):n.complete()})),r})}},1277:(e,t,n)=>{"use strict";n.d(t,{x:()=>l});var r=n(9129),s=n(9258),o=n(6197),i=n(2570),c=n(5686),u=n(5168),a=n(9653);function l(e,t){if(null!=e){if(function(e){return e&&"function"==typeof e[o.L]}(e))return function(e,t){return new r.y(n=>{const r=new s.w;return r.add(t.schedule(()=>{const s=e[o.L]();r.add(s.subscribe({next(e){r.add(t.schedule(()=>n.next(e)))},error(e){r.add(t.schedule(()=>n.error(e)))},complete(){r.add(t.schedule(()=>n.complete()))}}))})),r})}(e,t);if((0,u.t)(e))return function(e,t){return new r.y(n=>{const r=new s.w;return r.add(t.schedule(()=>e.then(e=>{r.add(t.schedule(()=>{n.next(e),r.add(t.schedule(()=>n.complete()))}))},e=>{r.add(t.schedule(()=>n.error(e)))}))),r})}(e,t);if((0,a.z)(e))return(0,i.r)(e,t);if(function(e){return e&&"function"==typeof e[c.hZ]}(e)||"string"==typeof e)return function(e,t){if(!e)throw new Error("Iterable cannot be null");return new r.y(n=>{const r=new s.w;let o;return r.add(()=>{o&&"function"==typeof o.return&&o.return()}),r.add(t.schedule(()=>{o=e[c.hZ](),r.add(t.schedule(function(){if(n.closed)return;let e,t;try{const n=o.next();e=n.value,t=n.done}catch(r){return void n.error(r)}t?n.complete():(n.next(e),this.schedule())}))})),r})}(e,t)}throw new TypeError((null!==e&&typeof e||e)+" is not observable")}},5686:(e,t,n)=>{"use strict";function r(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}n.d(t,{hZ:()=>s});const s=r()},6197:(e,t,n)=>{"use strict";n.d(t,{L:()=>r});const r=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")()},5331:(e,t,n)=>{"use strict";n.d(t,{b:()=>r});const r=(()=>"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random())()},8459:(e,t,n)=>{"use strict";n.d(t,{B:()=>r});const r=(()=>{function e(e){return Error.call(this),this.message=e?`${e.length} errors occurred during unsubscription:\n${e.map((e,t)=>`${t+1}) ${e.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=e,this}return e.prototype=Object.create(Error.prototype),e})()},3678:(e,t,n)=>{"use strict";n.d(t,{_:()=>s});var r=n(6673);function s(e){for(;e;){const{closed:t,destination:n,isStopped:s}=e;if(t||s)return!1;e=n&&n instanceof r.L?n:null}return!0}},4294:(e,t,n)=>{"use strict";function r(e){setTimeout(()=>{throw e},0)}n.d(t,{z:()=>r})},3392:(e,t,n)=>{"use strict";function r(e){return e}n.d(t,{y:()=>r})},8470:(e,t,n)=>{"use strict";n.d(t,{k:()=>r});const r=(()=>Array.isArray||(e=>e&&"number"==typeof e.length))()},9653:(e,t,n)=>{"use strict";n.d(t,{z:()=>r});const r=e=>e&&"number"==typeof e.length&&"function"!=typeof e},5024:(e,t,n)=>{"use strict";function r(e){return"function"==typeof e}n.d(t,{m:()=>r})},2056:(e,t,n)=>{"use strict";function r(e){return null!==e&&"object"==typeof e}n.d(t,{K:()=>r})},5168:(e,t,n)=>{"use strict";function r(e){return!!e&&"function"!=typeof e.subscribe&&"function"==typeof e.then}n.d(t,{t:()=>r})},6541:(e,t,n)=>{"use strict";n.d(t,{z:()=>s,U:()=>o});var r=n(3392);function s(...e){return o(e)}function o(e){return 0===e.length?r.y:1===e.length?e[0]:function(t){return e.reduce((e,t)=>t(e),t)}}},6015:(e,t,n)=>{"use strict";n.d(t,{s:()=>l});var r=n(625),s=n(4294),o=n(5686),i=n(6197),c=n(9653),u=n(5168),a=n(2056);const l=e=>{if(e&&"function"==typeof e[i.L])return l=e,e=>{const t=l[i.L]();if("function"!=typeof t.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return t.subscribe(e)};if((0,c.z)(e))return(0,r.V)(e);if((0,u.t)(e))return n=e,e=>(n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,s.z),e);if(e&&"function"==typeof e[o.hZ])return t=e,e=>{const n=t[o.hZ]();for(;;){let t;try{t=n.next()}catch(r){return e.error(r),e}if(t.done){e.complete();break}if(e.next(t.value),e.closed)break}return"function"==typeof n.return&&e.add(()=>{n.return&&n.return()}),e};{const t=(0,a.K)(e)?"an invalid object":`'${e}'`;throw new TypeError(`You provided ${t} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`)}var t,n,l}},625:(e,t,n)=>{"use strict";n.d(t,{V:()=>r});const r=e=>t=>{for(let n=0,r=e.length;n<r&&!t.closed;n++)t.next(e[n]);t.complete()}},6268:(e,t,n)=>{"use strict";n.d(t,{D:()=>i});var r=n(9867),s=n(6015),o=n(9129);function i(e,t,n,i,c=new r.d(e,n,i)){if(!c.closed)return t instanceof o.y?t.subscribe(c):(0,s.s)(t)(c)}},2553:(e,t,n)=>{"use strict";n.r(t);var r=n(9095),s=n(7511);n(7135);class o extends s["\u0275DomAdapter"]{constructor(){super(...arguments),this.supportsDOMEvents=!0}}class i extends o{static makeCurrent(){(0,s["\u0275setRootDomAdapter"])(new i)}onAndCancel(e,t,n){return e.addEventListener(t,n,!1),()=>{e.removeEventListener(t,n,!1)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,t){return(t=t||this.getDefaultDocument()).createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return"window"===t?window:"document"===t?e:"body"===t?e.body:null}getBaseHref(e){const t=(u=u||document.querySelector("base"),u?u.getAttribute("href"):null);return null==t?null:function(e){c=c||document.createElement("a"),c.setAttribute("href",e);const t=c.pathname;return"/"===t.charAt(0)?t:`/${t}`}(t)}resetBaseElement(){u=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return(0,s["\u0275parseCookieValue"])(document.cookie,e)}}let c,u=null;const a=new r.InjectionToken("TRANSITION_ID"),l=[{provide:r.APP_INITIALIZER,useFactory:function(e,t,n){return()=>{n.get(r.ApplicationInitStatus).donePromise.then(()=>{const n=(0,s["\u0275getDOM"])();Array.prototype.slice.apply(t.querySelectorAll("style[ng-transition]")).filter(t=>t.getAttribute("ng-transition")===e).forEach(e=>n.remove(e))})}},deps:[a,s.DOCUMENT,r.Injector],multi:!0}];class h{static init(){(0,r.setTestabilityGetter)(new h)}addToWindow(e){r["\u0275global"].getAngularTestability=(t,n=!0)=>{const r=e.findTestabilityInTree(t,n);if(null==r)throw new Error("Could not find testability for element.");return r},r["\u0275global"].getAllAngularTestabilities=()=>e.getAllTestabilities(),r["\u0275global"].getAllAngularRootElements=()=>e.getAllRootElements(),r["\u0275global"].frameworkStabilizers||(r["\u0275global"].frameworkStabilizers=[]),r["\u0275global"].frameworkStabilizers.push(e=>{const t=r["\u0275global"].getAllAngularTestabilities();let n=t.length,s=!1;const o=function(t){s=s||t,n--,0==n&&e(s)};t.forEach(function(e){e.whenStable(o)})})}findTestabilityInTree(e,t,n){if(null==t)return null;const r=e.getTestability(t);return null!=r?r:n?(0,s["\u0275getDOM"])().isShadowRoot(t)?this.findTestabilityInTree(e,t.host,!0):this.findTestabilityInTree(e,t.parentElement,!0):null}}let d=(()=>{class e{build(){return new XMLHttpRequest}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();const p=new r.InjectionToken("EventManagerPlugins");let f=(()=>{class e{constructor(e,t){this._zone=t,this._eventNameToPlugin=new Map,e.forEach(e=>e.manager=this),this._plugins=e.slice().reverse()}addEventListener(e,t,n){return this._findPluginFor(t).addEventListener(e,t,n)}addGlobalEventListener(e,t,n){return this._findPluginFor(t).addGlobalEventListener(e,t,n)}getZone(){return this._zone}_findPluginFor(e){const t=this._eventNameToPlugin.get(e);if(t)return t;const n=this._plugins;for(let r=0;r<n.length;r++){const t=n[r];if(t.supports(e))return this._eventNameToPlugin.set(e,t),t}throw new Error(`No event manager plugin found for event ${e}`)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](p),r["\u0275\u0275inject"](r.NgZone))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();class m{constructor(e){this._doc=e}addGlobalEventListener(e,t,n){const r=(0,s["\u0275getDOM"])().getGlobalEventTarget(this._doc,e);if(!r)throw new Error(`Unsupported event target ${r} for event ${t}`);return this.addEventListener(r,t,n)}}let b=(()=>{class e{constructor(){this._stylesSet=new Set}addStyles(e){const t=new Set;e.forEach(e=>{this._stylesSet.has(e)||(this._stylesSet.add(e),t.add(e))}),this.onStylesAdded(t)}onStylesAdded(e){}getAllStyles(){return Array.from(this._stylesSet)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})(),g=(()=>{class e extends b{constructor(e){super(),this._doc=e,this._hostNodes=new Map,this._hostNodes.set(e.head,[])}_addStylesToHost(e,t,n){e.forEach(e=>{const r=this._doc.createElement("style");r.textContent=e,n.push(t.appendChild(r))})}addHost(e){const t=[];this._addStylesToHost(this._stylesSet,e,t),this._hostNodes.set(e,t)}removeHost(e){const t=this._hostNodes.get(e);t&&t.forEach(y),this._hostNodes.delete(e)}onStylesAdded(e){this._hostNodes.forEach((t,n)=>{this._addStylesToHost(e,n,t)})}ngOnDestroy(){this._hostNodes.forEach(e=>e.forEach(y))}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](s.DOCUMENT))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();function y(e){(0,s["\u0275getDOM"])().remove(e)}const w={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},E=/%COMP%/g;function v(e,t,n){for(let r=0;r<t.length;r++){let s=t[r];Array.isArray(s)?v(e,s,n):(s=s.replace(E,e),n.push(s))}return n}function S(e){return t=>{if("__ngUnwrap__"===t)return e;!1===e(t)&&(t.preventDefault(),t.returnValue=!1)}}let _=(()=>{class e{constructor(e,t,n){this.eventManager=e,this.sharedStylesHost=t,this.appId=n,this.rendererByCompId=new Map,this.defaultRenderer=new C(e)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;switch(t.encapsulation){case r.ViewEncapsulation.Emulated:{let n=this.rendererByCompId.get(t.id);return n||(n=new I(this.eventManager,this.sharedStylesHost,t,this.appId),this.rendererByCompId.set(t.id,n)),n.applyToHost(e),n}case 1:case r.ViewEncapsulation.ShadowDom:return new x(this.eventManager,this.sharedStylesHost,e,t);default:if(!this.rendererByCompId.has(t.id)){const e=v(t.id,t.styles,[]);this.sharedStylesHost.addStyles(e),this.rendererByCompId.set(t.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](f),r["\u0275\u0275inject"](g),r["\u0275\u0275inject"](r.APP_ID))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();class C{constructor(e){this.eventManager=e,this.data=Object.create(null)}destroy(){}createElement(e,t){return t?document.createElementNS(w[t]||t,e):document.createElement(e)}createComment(e){return document.createComment(e)}createText(e){return document.createTextNode(e)}appendChild(e,t){e.appendChild(t)}insertBefore(e,t,n){e&&e.insertBefore(t,n)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let n="string"==typeof e?document.querySelector(e):e;if(!n)throw new Error(`The selector "${e}" did not match any elements`);return t||(n.textContent=""),n}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,n,r){if(r){t=r+":"+t;const s=w[r];s?e.setAttributeNS(s,t,n):e.setAttribute(t,n)}else e.setAttribute(t,n)}removeAttribute(e,t,n){if(n){const r=w[n];r?e.removeAttributeNS(r,t):e.removeAttribute(`${n}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,n,s){s&(r.RendererStyleFlags2.DashCase|r.RendererStyleFlags2.Important)?e.style.setProperty(t,n,s&r.RendererStyleFlags2.Important?"important":""):e.style[t]=n}removeStyle(e,t,n){n&r.RendererStyleFlags2.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,n){e[t]=n}setValue(e,t){e.nodeValue=t}listen(e,t,n){return"string"==typeof e?this.eventManager.addGlobalEventListener(e,t,S(n)):this.eventManager.addEventListener(e,t,S(n))}}class I extends C{constructor(e,t,n,r){super(e),this.component=n;const s=v(r+"-"+n.id,n.styles,[]);t.addStyles(s),this.contentAttr="_ngcontent-%COMP%".replace(E,r+"-"+n.id),this.hostAttr="_nghost-%COMP%".replace(E,r+"-"+n.id)}applyToHost(e){super.setAttribute(e,this.hostAttr,"")}createElement(e,t){const n=super.createElement(e,t);return super.setAttribute(n,this.contentAttr,""),n}}class x extends C{constructor(e,t,n,r){super(e),this.sharedStylesHost=t,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const s=v(r.id,r.styles,[]);for(let o=0;o<s.length;o++){const e=document.createElement("style");e.textContent=s[o],this.shadowRoot.appendChild(e)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,n){return super.insertBefore(this.nodeOrShadowRoot(e),t,n)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}}let T=(()=>{class e extends m{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,n){return e.addEventListener(t,n,!1),()=>this.removeEventListener(e,t,n)}removeEventListener(e,t,n){return e.removeEventListener(t,n)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](s.DOCUMENT))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();const D=["alt","control","meta","shift"],O={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},A={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},N={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey};let R=(()=>{class e extends m{constructor(e){super(e)}supports(t){return null!=e.parseEventName(t)}addEventListener(t,n,r){const o=e.parseEventName(n),i=e.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,s["\u0275getDOM"])().onAndCancel(t,o.domEventName,i))}static parseEventName(t){const n=t.toLowerCase().split("."),r=n.shift();if(0===n.length||"keydown"!==r&&"keyup"!==r)return null;const s=e._normalizeKey(n.pop());let o="";if(D.forEach(e=>{const t=n.indexOf(e);t>-1&&(n.splice(t,1),o+=e+".")}),o+=s,0!=n.length||0===s.length)return null;const i={};return i.domEventName=r,i.fullKey=o,i}static getEventFullKey(e){let t="",n=function(e){let t=e.key;if(null==t){if(t=e.keyIdentifier,null==t)return"Unidentified";t.startsWith("U+")&&(t=String.fromCharCode(parseInt(t.substring(2),16)),3===e.location&&A.hasOwnProperty(t)&&(t=A[t]))}return O[t]||t}(e);return n=n.toLowerCase()," "===n?n="space":"."===n&&(n="dot"),D.forEach(r=>{r!=n&&(0,N[r])(e)&&(t+=r+".")}),t+=n,t}static eventCallback(t,n,r){return s=>{e.getEventFullKey(s)===t&&r.runGuarded(()=>n(s))}}static _normalizeKey(e){switch(e){case"esc":return"escape";default:return e}}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](s.DOCUMENT))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();const k=(0,r.createPlatformFactory)(r.platformCore,"browser",[{provide:r.PLATFORM_ID,useValue:s["\u0275PLATFORM_BROWSER_ID"]},{provide:r.PLATFORM_INITIALIZER,useValue:function(){i.makeCurrent(),h.init()},multi:!0},{provide:s.DOCUMENT,useFactory:function(){return(0,r["\u0275setDocument"])(document),document},deps:[]}]),j=[[],{provide:r["\u0275INJECTOR_SCOPE"],useValue:"root"},{provide:r.ErrorHandler,useFactory:function(){return new r.ErrorHandler},deps:[]},{provide:p,useClass:T,multi:!0,deps:[s.DOCUMENT,r.NgZone,r.PLATFORM_ID]},{provide:p,useClass:R,multi:!0,deps:[s.DOCUMENT]},[],{provide:_,useClass:_,deps:[f,g,r.APP_ID]},{provide:r.RendererFactory2,useExisting:_},{provide:b,useExisting:g},{provide:g,useClass:g,deps:[s.DOCUMENT]},{provide:r.Testability,useClass:r.Testability,deps:[r.NgZone]},{provide:f,useClass:f,deps:[p,r.NgZone]},{provide:s.XhrFactory,useClass:d,deps:[]},[]];let M=(()=>{class e{constructor(e){if(e)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(t){return{ngModule:e,providers:[{provide:r.APP_ID,useValue:t.appId},{provide:a,useExisting:r.APP_ID},l]}}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](e,12))},e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({providers:j,imports:[s.CommonModule,r.ApplicationModule]}),e})();"undefined"!=typeof window&&window;var F=n(9777),L=n(4689),P=n(9996);const V={schedule(e,t){const n=setTimeout(e,t);return()=>clearTimeout(n)},scheduleBeforeRender(e){if("undefined"==typeof window)return V.schedule(e,0);if(void 0===window.requestAnimationFrame)return V.schedule(e,16);const t=window.requestAnimationFrame(e);return()=>window.cancelAnimationFrame(t)}};let H;function Z(e,t,n){let r=n;return function(e){return!!e&&e.nodeType===Node.ELEMENT_NODE}(e)&&t.some((t,n)=>!("*"===t||!function(e,t){if(!H){const e=Element.prototype;H=e.matches||e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}return e.nodeType===Node.ELEMENT_NODE&&H.call(e,t)}(e,t)||(r=n,0))),r}class z{constructor(e,t){this.componentFactory=t.get(r.ComponentFactoryResolver).resolveComponentFactory(e)}create(e){return new U(this.componentFactory,e)}}class U{constructor(e,t){this.componentFactory=e,this.injector=t,this.eventEmitters=new F.ReplaySubject(1),this.events=this.eventEmitters.pipe((0,L.w)(e=>(0,F.merge)(...e))),this.componentRef=null,this.viewChangeDetectorRef=null,this.inputChanges=null,this.hasInputChanges=!1,this.implementsOnChanges=!1,this.scheduledChangeDetectionFn=null,this.scheduledDestroyFn=null,this.initialInputValues=new Map,this.unchangedInputs=new Set(this.componentFactory.inputs.map(({propName:e})=>e)),this.ngZone=this.injector.get(r.NgZone),this.elementZone="undefined"==typeof Zone?null:this.ngZone.run(()=>Zone.current)}connect(e){this.runInZone(()=>{if(null!==this.scheduledDestroyFn)return this.scheduledDestroyFn(),void(this.scheduledDestroyFn=null);null===this.componentRef&&this.initializeComponent(e)})}disconnect(){this.runInZone(()=>{null!==this.componentRef&&null===this.scheduledDestroyFn&&(this.scheduledDestroyFn=V.schedule(()=>{null!==this.componentRef&&(this.componentRef.destroy(),this.componentRef=null,this.viewChangeDetectorRef=null)},10))})}getInputValue(e){return this.runInZone(()=>null===this.componentRef?this.initialInputValues.get(e):this.componentRef.instance[e])}setInputValue(e,t){this.runInZone(()=>{var n,r;null!==this.componentRef?((n=t)!==(r=this.getInputValue(e))&&(n==n||r==r)||void 0===t&&this.unchangedInputs.has(e))&&(this.recordInputChange(e,t),this.unchangedInputs.delete(e),this.hasInputChanges=!0,this.componentRef.instance[e]=t,this.scheduleDetectChanges()):this.initialInputValues.set(e,t)})}initializeComponent(e){const t=r.Injector.create({providers:[],parent:this.injector}),n=function(e,t){const n=e.childNodes,r=t.map(()=>[]);let s=-1;t.some((e,t)=>"*"===e&&(s=t,!0));for(let o=0,i=n.length;o<i;++o){const e=n[o],i=Z(e,t,s);-1!==i&&r[i].push(e)}return r}(e,this.componentFactory.ngContentSelectors);this.componentRef=this.componentFactory.create(t,n,e),this.viewChangeDetectorRef=this.componentRef.injector.get(r.ChangeDetectorRef),this.implementsOnChanges="function"==typeof this.componentRef.instance.ngOnChanges,this.initializeInputs(),this.initializeOutputs(this.componentRef),this.detectChanges(),this.injector.get(r.ApplicationRef).attachView(this.componentRef.hostView)}initializeInputs(){this.componentFactory.inputs.forEach(({propName:e})=>{this.initialInputValues.has(e)&&this.setInputValue(e,this.initialInputValues.get(e))}),this.initialInputValues.clear()}initializeOutputs(e){const t=this.componentFactory.outputs.map(({propName:t,templateName:n})=>e.instance[t].pipe((0,P.U)(e=>({name:n,value:e}))));this.eventEmitters.next(t)}callNgOnChanges(e){if(!this.implementsOnChanges||null===this.inputChanges)return;const t=this.inputChanges;this.inputChanges=null,e.instance.ngOnChanges(t)}markViewForCheck(e){this.hasInputChanges&&(this.hasInputChanges=!1,e.markForCheck())}scheduleDetectChanges(){this.scheduledChangeDetectionFn||(this.scheduledChangeDetectionFn=V.scheduleBeforeRender(()=>{this.scheduledChangeDetectionFn=null,this.detectChanges()}))}recordInputChange(e,t){if(!this.implementsOnChanges)return;null===this.inputChanges&&(this.inputChanges={});const n=this.inputChanges[e];if(n)return void(n.currentValue=t);const s=this.unchangedInputs.has(e),o=s?void 0:this.getInputValue(e);this.inputChanges[e]=new r.SimpleChange(o,t,s)}detectChanges(){null!==this.componentRef&&(this.callNgOnChanges(this.componentRef),this.markViewForCheck(this.viewChangeDetectorRef),this.componentRef.changeDetectorRef.detectChanges())}runInZone(e){return this.elementZone&&Zone.current!==this.elementZone?this.ngZone.run(e):e()}}class B extends HTMLElement{constructor(){super(...arguments),this.ngElementEventsSubscription=null}}function K(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"p"),r["\u0275\u0275elementStart"](1,"a",2),r["\u0275\u0275listener"]("click",function(){r["\u0275\u0275restoreView"](e);const t=r["\u0275\u0275nextContext"]();return t.clicked.emit(t.message)}),r["\u0275\u0275text"](2),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](e.message)}}new r.Version("12.0.3");let $=(()=>{class e{constructor(){this.clicked=new r.EventEmitter,this.ngVersion=r.VERSION.full}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-root"]],inputs:{message:"message"},outputs:{clicked:"clicked"},decls:6,vars:2,consts:[["src","https://angular.io/assets/images/logos/angular/angular.svg","width","30"],[4,"ngIf"],[3,"click"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"h1"),r["\u0275\u0275text"](1," Angular A "),r["\u0275\u0275element"](2,"img",0),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"p"),r["\u0275\u0275text"](4),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](5,K,3,1,"p",1)),2&e&&(r["\u0275\u0275advance"](4),r["\u0275\u0275textInterpolate1"](" Angular Version: ",t.ngVersion,"\n"),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.message))},directives:[s.NgIf],styles:[""]}),e})();!function(e,t){var n;t.platformFactory||(t.platformFactory=()=>k()),(null===(n=t.compilerOptions)||void 0===n?void 0:n.ngZone)||(t.compilerOptions=t.compilerOptions||{},t.compilerOptions.ngZone=window.ngZone),t.version||(t.version=()=>r.VERSION.full);const s=t.version(),o=function(){const e=window;return e.platform=e.platform||{},e}();let i=o.platform[s];i||(i=t.platformFactory(),o.platform[s]=i,t.production&&(0,r.enableProdMode)()),i.bootstrapModule(e,t.compilerOptions)}((()=>{class e{constructor(e){this.injector=e}ngDoBootstrap(){const e=function(e,t){const n=function(e,t){return t.get(r.ComponentFactoryResolver).resolveComponentFactory(e).inputs}(e,t.injector),s=t.strategyFactory||new z(e,t.injector),o=function(e){const t={};return e.forEach(({propName:e,templateName:n})=>{var r;t[(r=n,r.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`))]=e}),t}(n);class i extends B{constructor(e){super(),this.injector=e}get ngElementStrategy(){if(!this._ngElementStrategy){const e=this._ngElementStrategy=s.create(this.injector||t.injector);n.forEach(({propName:t})=>{if(!this.hasOwnProperty(t))return;const n=this[t];delete this[t],e.setInputValue(t,n)})}return this._ngElementStrategy}attributeChangedCallback(e,t,n,r){this.ngElementStrategy.setInputValue(o[e],n)}connectedCallback(){let e=!1;this.ngElementStrategy.events&&(this.subscribeToEvents(),e=!0),this.ngElementStrategy.connect(this),e||this.subscribeToEvents()}disconnectedCallback(){this._ngElementStrategy&&this._ngElementStrategy.disconnect(),this.ngElementEventsSubscription&&(this.ngElementEventsSubscription.unsubscribe(),this.ngElementEventsSubscription=null)}subscribeToEvents(){this.ngElementEventsSubscription=this.ngElementStrategy.events.subscribe(e=>{const t=function(e,t,n){if("function"!=typeof CustomEvent){const r=e.createEvent("CustomEvent");return r.initCustomEvent(t,!1,!1,n),r}return new CustomEvent(t,{bubbles:!1,cancelable:!1,detail:n})}(this.ownerDocument,e.name,e.value);this.dispatchEvent(t)})}}return i.observedAttributes=Object.keys(o),n.forEach(({propName:e})=>{Object.defineProperty(i.prototype,e,{get(){return this.ngElementStrategy.getInputValue(e)},set(t){this.ngElementStrategy.setInputValue(e,t)},configurable:!0,enumerable:!0})}),i}($,{injector:this.injector});customElements.define("angular1-element",e)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](r.Injector))},e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({providers:[],imports:[[M]]}),e})(),{production:!0})}}]);