/*!
* GSAP 3.6.0
* https://greensock.com
* 
* @license Copyright 2021, GreenSock. All rights reserved.
* Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*/

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t){return"string"==typeof t}function p(t){return"function"==typeof t}function q(t){return"number"==typeof t}function r(t){return void 0===t}function s(t){return"object"==typeof t}function t(t){return!1!==t}function u(){return"undefined"!=typeof window}function v(t){return p(t)||o(t)}function M(t){return(h=mt(t,ot))&&ae}function N(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function O(t,e){return!e&&console.warn(t)}function P(t,e){return t&&(ot[t]=e)&&h&&(h[t]=e)||ot}function Q(){return 0}function $(t){var e,r,i=t[0];if(s(i)||p(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(r=pt.length;r--&&!pt[r].targetTest(i););e=pt[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Lt(t[r],e)))||t.splice(r,1);return t}function _(t){return t._gsap||$(Tt(t))[0]._gsap}function aa(t,e,i){return(i=t[e])&&p(i)?t[e]():r(i)&&t.getAttribute&&t.getAttribute(e)||i}function ba(t,e){return(t=t.split(",")).forEach(e)||t}function ca(t){return Math.round(1e5*t)/1e5||0}function da(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function ea(e,r,i){var n,a=q(e[1]),s=(a?2:1)+(r<2?0:1),o=e[s];if(a&&(o.duration=e[1]),o.parent=i,r){for(n=o;i&&!("immediateRender"in n);)n=i.vars.defaults||{},i=t(i.vars.inherit)&&i.parent;o.immediateRender=t(n.immediateRender),r<2?o.runBackwards=1:o.startAt=e[s-1]}return o}function fa(){var t,e,r=ht.length,i=ht.slice(0);for(lt={},t=ht.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function ga(t,e,r,i){ht.length&&fa(),t.render(e,r,i),ht.length&&fa()}function ha(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(at).length<2?e:o(t)?t.trim():t}function ia(t){return t}function ja(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ka(t,e){for(var r in e)r in t||"duration"===r||"ease"===r||(t[r]=e[r])}function ma(t,e){for(var r in e)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(t[r]=s(e[r])?ma(t[r]||(t[r]={}),e[r]):e[r]);return t}function na(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function oa(e){var r=e.parent||F,i=e.keyframes?ka:ja;if(t(e.inherit))for(;r;)i(e,r.vars.defaults),r=r.parent||r._dp;return e}function ra(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function sa(t,e){!t.parent||e&&!t.parent.autoRemoveChildren||t.parent.remove(t),t._act=0}function ta(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t}function wa(t){return t._repeat?gt(t._tTime,t=t.duration()+t._rDelay)*t:0}function ya(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function za(t){return t._end=ca(t._start+(t._tDur/Math.abs(t._ts||t._rts||j)||0))}function Aa(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=ca(r._time-(0<t._ts?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),za(t),r._dirty||ta(r,t)),t}function Ba(t,e){var r;if((e._time||e._initted&&!e._dur)&&(r=ya(t.rawTime(),e),(!e._dur||yt(0,e.totalDuration(),r)-e._tTime>j)&&e.render(r,!0)),ta(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-j}}function Ca(t,e,r,i){return e.parent&&sa(e),e._start=ca(r+e._delay),e._end=ca(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),function _addLinkedListItem(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t}(t,e,"_first","_last",t._sort?"_start":0),t._recent=e,i||Ba(t,e),t}function Da(t,e){return(ot.ScrollTrigger||N("scrollTrigger",e))&&ot.ScrollTrigger.create(e,t)}function Ea(t,e,r,i){return Nt(t,e),t._initted?!r&&t._pt&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&f!==Pt.frame?(ht.push(t),t._lazy=[e,i],1):void 0:1}function Ia(t,e,r,i){var n=t._repeat,a=ca(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=n?n<0?1e10:ca(a*(n+1)+t._rDelay*n):a,s&&!i?Aa(t,t._tTime=t._tDur*s):t.parent&&za(t),r||ta(t.parent,t),t}function Ja(t){return t instanceof Bt?ta(t):Ia(t,t._dur)}function La(t,e){var r,i,n=t.labels,a=t._recent||vt,s=t.duration()>=U?a.endTime(!1):t._dur;return o(e)&&(isNaN(e)||e in n)?"<"===(r=e.charAt(0))||">"===r?("<"===r?a._start:a.endTime(0<=a._repeat))+(parseFloat(e.substr(1))||0):(r=e.indexOf("="))<0?(e in n||(n[e]=s),n[e]):(i=+(e.charAt(r-1)+e.substr(r+1)),1<r?La(t,e.substr(0,r-1))+i:s+i):null==e?s:+e}function Ma(t,e){return t||0===t?e(t):e}function Oa(t){if("string"!=typeof t)return"";var e=st.exec(t);return e?t.substr(e.index+e[0].length):""}function Ra(t,e){return t&&s(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&s(t[0]))&&!t.nodeType&&t!==i}function Ua(t){return t.sort(function(){return.5-Math.random()})}function Va(t){if(p(t))return t;var _=s(t)?t:{each:t},m=Et(_.ease),g=_.from||0,v=parseFloat(_.base)||0,y={},e=0<g&&g<1,b=isNaN(g)||e,T=_.axis,w=g,x=g;return o(g)?w=x={center:.5,edges:.5,end:1}[g]||0:!e&&b&&(w=g[0],x=g[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,d=(r||_).length,c=y[d];if(!c){if(!(f="auto"===_.grid?0:(_.grid||[1,U])[1])){for(h=-U;h<(h=r[f++].getBoundingClientRect().left)&&f<d;);f--}for(c=y[d]=[],i=b?Math.min(f,d)*w-.5:g%f,n=b?d*x/f-.5:g/f|0,l=U,u=h=0;u<d;u++)a=u%f-i,s=n-(u/f|0),c[u]=o=T?Math.abs("y"===T?s:a):J(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===g&&Ua(c),c.max=h-l,c.min=l,c.v=d=(parseFloat(_.amount)||parseFloat(_.each)*(d<f?d-1:T?"y"===T?d/f:f:Math.max(f,d/f))||0)*("edges"===g?-1:1),c.b=d<0?v-d:v,c.u=Oa(_.amount||_.each)||0,m=m&&d<0?It(m):m}return d=(c[t]-c.min)/c.max||0,ca(c.b+(m?m(d):d)*c.v)+c.u}}function Wa(r){var i=r<1?Math.pow(10,(r+"").length-2):1;return function(t){var e=Math.round(parseFloat(t)/r)*r*i;return(e-e%1)/i+(q(t)?0:Oa(t))}}function Xa(u,t){var h,l,e=K(u);return!e&&s(u)&&(h=e=u.radius||U,u.values?(u=Tt(u.values),(l=!q(u[0]))&&(h*=h)):u=Wa(u.increment)),Ma(t,e?p(u)?function(t){return l=u(t),Math.abs(l-t)<=h?l:t}:function(t){for(var e,r,i=parseFloat(l?t.x:t),n=parseFloat(l?t.y:0),a=U,s=0,o=u.length;o--;)(e=l?(e=u[o].x-i)*e+(r=u[o].y-n)*r:Math.abs(u[o]-i))<a&&(a=e,s=o);return s=!h||a<=h?u[s]:t,l||s===t||q(t)?s:s+Oa(t)}:Wa(u))}function Ya(t,e,r,i){return Ma(K(t)?!e:!0===r?!!(r=0):!i,function(){return K(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(e-t+.99*r))/r)*r*i)/i})}function ab(e,r,t){return Ma(t,function(t){return e[~~r(t)]})}function db(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?at:tt),s+=t.substr(a,e-a)+Ya(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function gb(t,e,r){var i,n,a,s=t.labels,o=U;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function ib(t){return sa(t),t.progress()<1&&xt(t,"onInterrupt"),t}function nb(t,e,r){return(6*(t=t<0?t+1:1<t?t-1:t)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*Ot+.5|0}function ob(t,e,r){var i,n,a,s,o,u,h,l,f,d,c=t?q(t)?[t>>16,t>>8&Ot,t&Ot]:0:Mt.black;if(!c){if(","===t.substr(-1)&&(t=t.substr(0,t.length-1)),Mt[t])c=Mt[t];else if("#"===t.charAt(0)){if(t.length<6&&(t="#"+(i=t.charAt(1))+i+(n=t.charAt(2))+n+(a=t.charAt(3))+a+(5===t.length?t.charAt(4)+t.charAt(4):"")),9===t.length)return[(c=parseInt(t.substr(1,6),16))>>16,c>>8&Ot,c&Ot,parseInt(t.substr(7),16)/255];c=[(t=parseInt(t.substr(1),16))>>16,t>>8&Ot,t&Ot]}else if("hsl"===t.substr(0,3))if(c=d=t.match(tt),e){if(~t.indexOf("="))return c=t.match(et),r&&c.length<4&&(c[3]=1),c}else s=+c[0]%360/360,o=c[1]/100,i=2*(u=c[2]/100)-(n=u<=.5?u*(o+1):u+o-u*o),3<c.length&&(c[3]*=1),c[0]=nb(s+1/3,i,n),c[1]=nb(s,i,n),c[2]=nb(s-1/3,i,n);else c=t.match(tt)||Mt.transparent;c=c.map(Number)}return e&&!d&&(i=c[0]/Ot,n=c[1]/Ot,a=c[2]/Ot,u=((h=Math.max(i,n,a))+(l=Math.min(i,n,a)))/2,h===l?s=o=0:(f=h-l,o=.5<u?f/(2-h-l):f/(h+l),s=h===i?(n-a)/f+(n<a?6:0):h===n?(a-i)/f+2:(i-n)/f+4,s*=60),c[0]=~~(s+.5),c[1]=~~(100*o+.5),c[2]=~~(100*u+.5)),r&&c.length<4&&(c[3]=1),c}function pb(t){var r=[],i=[],n=-1;return t.split(kt).forEach(function(t){var e=t.match(rt)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function qb(t,e,r){var i,n,a,s,o="",u=(t+o).match(kt),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=ob(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=pb(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(kt,"1").split(rt)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(kt)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function tb(t){var e,r=t.join(" ");if(kt.lastIndex=0,kt.test(r))return e=Ct.test(r),t[1]=qb(t[1],e),t[0]=qb(t[0],e,pb(t[1])),!0}function Cb(t){var e=(t+"").split("("),r=St[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(zt,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:function _valueInParentheses(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)}(t).split(",").map(ha)):St._CE&&Dt.test(t)?St._CE("",t):r}function Eb(t,e){for(var r,i=t._first;i;)i instanceof Bt?Eb(i,e):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===e||(i.timeline?Eb(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next}function Gb(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return ba(t,function(t){for(var e in St[t]=ot[t]=a,St[n=t.toLowerCase()]=r,a)St[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=St[t+"."+e]=a[e]}),a}function Hb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Ib(r,t,e){function Cl(t){return 1===t?1:i*Math.pow(2,-10*t)*H((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/X*(Math.asin(1/i)||0),s="out"===r?Cl:"in"===r?function(t){return 1-Cl(1-t)}:Hb(Cl);return n=X/n,s.config=function(t,e){return Ib(r,t,e)},s}function Jb(e,r){function Kl(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?Kl:"in"===e?function(t){return 1-Kl(1-t)}:Hb(Kl);return t.config=function(t){return Jb(e,t)},t}var L,F,i,n,a,h,l,f,d,c,m,g,y,b,T,w,x,k,C,A,S,D,z,I,E,R,Y={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},B={duration:.5,overwrite:!1,delay:0},U=1e8,j=1/U,X=2*Math.PI,G=X/4,V=0,J=Math.sqrt,W=Math.cos,H=Math.sin,Z="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},K=Array.isArray,tt=/(?:-?\.?\d|\.)+/gi,et=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,it=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nt=/[+-]=-?[.\d]+/,at=/[#\-+.]*\b[a-z\d-=+%.]+/gi,st=/[\d.+\-=]+(?:e[-+]\d*)*/i,ot={},ut={},ht=[],lt={},ft={},dt={},ct=30,pt=[],_t="",mt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},gt=function _animationCycle(t,e){var r=Math.floor(t/=e);return t&&r===t?r-1:r},vt={_start:0,endTime:Q},yt=function _clamp(t,e,r){return r<t?t:e<r?e:r},bt=[].slice,Tt=function toArray(t,e){return!o(t)||e||!n&&At()?K(t)?function _flatten(t,e,r){return void 0===r&&(r=[]),t.forEach(function(t){return o(t)&&!e||Ra(t,1)?r.push.apply(r,Tt(t)):r.push(t)})||r}(t,e):Ra(t)?bt.call(t,0):t?[t]:[]:bt.call(a.querySelectorAll(t),0)},wt=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Ma(n,function(t){return r+((t-e)/a*s||0)})},xt=function _callback(t,e,r){var i,n,a=t.vars,s=a[e];if(s)return i=a[e+"Params"],n=a.callbackScope||t,r&&ht.length&&fa(),i?s.apply(n,i):s.call(n)},Ot=255,Mt={aqua:[0,Ot,Ot],lime:[0,Ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ot],navy:[0,0,128],white:[Ot,Ot,Ot],olive:[128,128,0],yellow:[Ot,Ot,0],orange:[Ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ot,0,0],pink:[Ot,192,203],cyan:[0,Ot,Ot],transparent:[Ot,Ot,Ot,0]},kt=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(t in Mt)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),Ct=/hsl[a]?\(/,Pt=(x=Date.now,k=500,C=33,A=x(),S=A,z=D=1e3/240,b={time:0,frame:0,tick:function tick(){yk(!0)},deltaRatio:function deltaRatio(t){return T/(1e3/(t||60))},wake:function wake(){l&&(!n&&u()&&(i=n=window,a=i.document||{},ot.gsap=ae,(i.gsapVersions||(i.gsapVersions=[])).push(ae.version),M(h||i.GreenSockGlobals||!i.gsap&&i||{}),y=i.requestAnimationFrame),m&&b.sleep(),g=y||function(t){return setTimeout(t,z-1e3*b.time+1|0)},c=1,yk(2))},sleep:function sleep(){(y?i.cancelAnimationFrame:clearTimeout)(m),c=0,g=Q},lagSmoothing:function lagSmoothing(t,e){k=t||1e8,C=Math.min(e,k,0)},fps:function fps(t){D=1e3/(t||240),z=1e3*b.time+D},add:function add(t){I.indexOf(t)<0&&I.push(t),At()},remove:function remove(t){var e;~(e=I.indexOf(t))&&I.splice(e,1)&&e<=w&&w--},_listeners:I=[]}),At=function _wake(){return!c&&Pt.wake()},St={},Dt=/^[\d.\-M][\d.\-,\s]/,zt=/["']/g,It=function _invertEase(e){return function(t){return 1-e(1-t)}},Et=function _parseEase(t,e){return t&&(p(t)?t:St[t]||Cb(t))||e};function yk(t){var e,r,i,n,a=x()-S,s=!0===t;if(k<a&&(A+=a-C),(0<(e=(i=(S+=a)-A)-z)||s)&&(n=++b.frame,T=i-1e3*b.time,b.time=i/=1e3,z+=e+(D<=e?4:D-e),r=1),s||(m=g(yk)),r)for(w=0;w<I.length;w++)I[w](i,T,n,t)}function _l(t){return t<R?E*t*t:t<.7272727272727273?E*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?E*(t-=2.25/2.75)*t+.9375:E*Math.pow(t-2.625/2.75,2)+.984375}ba("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Gb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),St.Linear.easeNone=St.none=St.Linear.easeIn,Gb("Elastic",Ib("in"),Ib("out"),Ib()),E=7.5625,R=1/2.75,Gb("Bounce",function(t){return 1-_l(1-t)},_l),Gb("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),Gb("Circ",function(t){return-(J(1-t*t)-1)}),Gb("Sine",function(t){return 1===t?1:1-W(t*G)}),Gb("Back",Jb("in"),Jb("out"),Jb()),St.SteppedEase=St.steps=ot.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*yt(0,.99999999,t)|0)+n)*r}}},B.ease=St["quad.out"],ba("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return _t+=t+","+t+"Params,"});var Rt,Lt=function GSCache(t,e){this.id=V++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:aa,this.set=e?e.getSetter:Wt},Ft=((Rt=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},Rt.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},Rt.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Ia(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},Rt.totalTime=function totalTime(t,e){if(At(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Aa(this,t),!r._dp||r.parent||Ba(r,this);r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&t<this._tDur||this._ts<0&&0<t||!this._tDur&&!t)&&Ca(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===j||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),ga(this,t,e)),this},Rt.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+wa(this))%this._dur||(t?this._dur:0),e):this._time},Rt.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},Rt.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+wa(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},Rt.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?gt(this._tTime,r)+1:1},Rt.timeScale=function timeScale(t){if(!arguments.length)return this._rts===-j?0:this._rts;if(this._rts===t)return this;var e=this.parent&&this._ts?ya(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-j?0:this._rts,function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this.totalTime(yt(-this._delay,this._tDur,e),!0))},Rt.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(At(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&(this._tTime-=j)&&Math.abs(this._zTime)!==j))),this):this._ps},Rt.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||Ca(e,this,t-this._delay),this}return this._start},Rt.endTime=function endTime(e){return this._start+(t(e)?this.totalDuration():this.duration())/Math.abs(this._ts)},Rt.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ya(e.rawTime(t),this):this._tTime:this._tTime},Rt.globalTime=function globalTime(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(e._ts||1),e=e._dp;return r},Rt.repeat=function repeat(t){return arguments.length?(this._repeat=t===1/0?-2:t,Ja(this)):-2===this._repeat?1/0:this._repeat},Rt.repeatDelay=function repeatDelay(t){return arguments.length?(this._rDelay=t,Ja(this)):this._rDelay},Rt.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},Rt.seek=function seek(e,r){return this.totalTime(La(this,e),t(r))},Rt.restart=function restart(e,r){return this.play().totalTime(e?-this._delay:0,t(r))},Rt.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},Rt.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},Rt.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},Rt.resume=function resume(){return this.paused(!1)},Rt.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-j:0)),this):this._rts<0},Rt.invalidate=function invalidate(){return this._initted=this._act=0,this._zTime=-j,this},Rt.isActive=function isActive(){var t,e=this.parent||this._dp,r=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-j))},Rt.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},Rt.then=function then(t){var i=this;return new Promise(function(e){function rn(){var t=i.then;i.then=null,p(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=p(t)?t:ia;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?rn():i._prom=rn})},Rt.kill=function kill(){ib(this)},Animation);function Animation(t,e){var r=t.parent||F;this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ia(this,+t.duration,1,1),this.data=t.data,c||Pt.wake(),r&&Ca(r,this,e||0===e?e:r._time,1),t.reversed&&this.reverse(),t.paused&&this.paused(!0)}ja(Ft.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-j,_prom:0,_ps:!1,_rts:1});var Bt=function(n){function Timeline(e,r){var i;return void 0===e&&(e={}),(i=n.call(this,e,r)||this).labels={},i.smoothChildTiming=!!e.smoothChildTiming,i.autoRemoveChildren=!!e.autoRemoveChildren,i._sort=t(e.sortChildren),i.parent&&Ba(i.parent,_assertThisInitialized(i)),e.scrollTrigger&&Da(_assertThisInitialized(i),e.scrollTrigger),i}_inheritsLoose(Timeline,n);var e=Timeline.prototype;return e.to=function to(t,e,r,i){return new Gt(t,ea(arguments,0,this),La(this,q(e)?i:r)),this},e.from=function from(t,e,r,i){return new Gt(t,ea(arguments,1,this),La(this,q(e)?i:r)),this},e.fromTo=function fromTo(t,e,r,i,n){return new Gt(t,ea(arguments,2,this),La(this,q(e)?n:i)),this},e.set=function set(t,e,r){return e.duration=0,e.parent=this,oa(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new Gt(t,e,La(this,r),1),this},e.call=function call(t,e,r){return Ca(this,Gt.delayedCall(0,t,e),La(this,r))},e.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new Gt(t,r,La(this,n)),this},e.staggerFrom=function staggerFrom(e,r,i,n,a,s,o){return i.runBackwards=1,oa(i).immediateRender=t(i.immediateRender),this.staggerTo(e,r,i,n,a,s,o)},e.staggerFromTo=function staggerFromTo(e,r,i,n,a,s,o,u){return n.startAt=i,oa(n).immediateRender=t(n.immediateRender),this.staggerTo(e,r,n,a,s,o,u)},e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d,c,p,_=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=this!==F&&m-j<t&&0<=t?m:t<j?0:t,y=this._zTime<0!=t<0&&(this._initted||!g);if(v!==this._tTime||r||y){if(_!==this._time&&g&&(v+=this._time-_,t+=this._time-_),i=v,f=this._start,u=!(l=this._ts),y&&(g||(_=this._zTime),!t&&e||(this._zTime=t)),this._repeat){if(c=this._yoyo,o=g+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*o+t,e,r);if(i=ca(v%o),v===m?(s=this._repeat,i=g):((s=~~(v/o))&&s===v/o&&(i=g,s--),g<i&&(i=g)),d=gt(this._tTime,o),!_&&this._tTime&&d!==s&&(d=s),c&&1&s&&(i=g-i,p=1),s!==d&&!this._lock){var b=c&&1&d,T=b===(c&&1&s);if(s<d&&(b=!b),_=b?0:g,this._lock=1,this.render(_||(p?0:ca(s*o)),e,!g)._lock=0,!e&&this.parent&&xt(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1),_!==this._time||u!=!this._ts)return this;if(g=this._dur,m=this._tDur,T&&(this._lock=2,_=b?g:-1e-4,this.render(_,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;Eb(this,p)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if(!i._dur&&"isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if(!i._dur&&"isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,ca(_),ca(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,_=0),_||!(i||!g&&0<=t)||e||xt(this,"onStart"),_<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-j);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-j:j);break}}n=a}}if(h&&!e&&(this.pause(),h.render(_<=i?0:-j)._zTime=_<=i?1:-1,this._ts))return this._start=f,za(this),this.render(t,e,r);this._onUpdate&&!e&&xt(this,"onUpdate",!0),(v===m&&m>=this.totalDuration()||!v&&_)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(v===m&&0<this._ts||!v&&this._ts<0)||sa(this,1),e||t<0&&!_||!v&&!_||(xt(this,v===m?"onComplete":"onReverseComplete",!0),!this._prom||v<m&&0<this.timeScale()||this._prom())))}return this},e.add=function add(t,e){var r=this;if(q(e)||(e=La(this,e)),!(t instanceof Ft)){if(K(t))return t.forEach(function(t){return r.add(t,e)}),this;if(o(t))return this.addLabel(t,e);if(!p(t))return this;t=Gt.delayedCall(0,t)}return this!==t?Ca(this,t,e):this},e.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-U);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof Gt?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},e.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},e.remove=function remove(t){return o(t)?this.removeLabel(t):p(t)?this.killTweensOf(t):(ra(this,t),t===this._recent&&(this._recent=this._last),ta(this))},e.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ca(Pt.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),n.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},e.addLabel=function addLabel(t,e){return this.labels[t]=La(this,e),this},e.removeLabel=function removeLabel(t){return delete this.labels[t],this},e.addPause=function addPause(t,e,r){var i=Gt.delayedCall(0,e||Q,r);return i.data="isPause",this._hasPause=1,Ca(this,i,La(this,t))},e.removePause=function removePause(t){var e=this._first;for(t=La(this,t);e;)e._start===t&&"isPause"===e.data&&sa(e),e=e._next},e.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)qt!==i[n]&&i[n].kill(t,e);return this},e.getTweensOf=function getTweensOf(t,e){for(var r,i=[],n=Tt(t),a=this._first,s=q(e);a;)a instanceof Gt?da(a._targets,n)&&(s?(!qt||a._initted&&a._ts)&&a.globalTime(0)<=e&&a.globalTime(a.totalDuration())>e:!e||a.isActive())&&i.push(a):(r=a.getTweensOf(n,e)).length&&i.push.apply(i,r),a=a._next;return i},e.tweenTo=function tweenTo(t,e){e=e||{};var r=this,i=La(r,t),n=e.startAt,a=e.onStart,s=e.onStartParams,o=e.immediateRender,u=Gt.to(r,ja({ease:"none",lazy:!1,immediateRender:!1,time:i,overwrite:"auto",duration:e.duration||Math.abs((i-(n&&"time"in n?n.time:r._time))/r.timeScale())||j,onStart:function onStart(){r.pause();var t=e.duration||Math.abs((i-r._time)/r.timeScale());u._dur!==t&&Ia(u,t,0,1).render(u._time,!0,!0),a&&a.apply(u,s||[])}},e));return o?u.render(0):u},e.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,ja({startAt:{time:La(this,t)}},r))},e.recent=function recent(){return this._recent},e.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),gb(this,La(this,t))},e.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),gb(this,La(this,t),1)},e.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+j)},e.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t,n._end+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return ta(this)},e.invalidate=function invalidate(){var t=this._first;for(this._lock=0;t;)t.invalidate(),t=t._next;return n.prototype.invalidate.call(this)},e.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),ta(this)},e.totalDuration=function totalDuration(t){var e,r,i,n=0,a=this,s=a._last,o=U;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-t:t));if(a._dirty){for(i=a.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),o<(r=s._start)&&a._sort&&s._ts&&!a._lock?(a._lock=1,Ca(a,s,r-s._delay,1)._lock=0):o=r,r<0&&s._ts&&(n-=r,(!i&&!a._dp||i&&i.smoothChildTiming)&&(a._start+=r/a._ts,a._time-=r,a._tTime-=r),a.shiftChildren(-r,!1,-Infinity),o=0),s._end>n&&s._ts&&(n=s._end),s=e;Ia(a,a===F&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},Timeline.updateRoot=function updateRoot(t){if(F._ts&&(ga(F,ya(t,F)),f=Pt.frame),Pt.frame>=ct){ct+=Y.autoSleep||120;var e=F._first;if((!e||!e._ts)&&Y.autoSleep&&Pt._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||Pt.sleep()}}},Timeline}(Ft);ja(Bt.prototype,{_lock:0,_hasPause:0,_forcing:0});function Qb(t,e,r,i,n,a){var u,h,l,f;if(ft[t]&&!1!==(u=new ft[t]).init(n,u.rawVars?e[t]:function _processVars(t,e,r,i,n){if(p(t)&&(t=Ut(t,n,e,r,i)),!s(t)||t.style&&t.nodeType||K(t)||Z(t))return o(t)?Ut(t,n,e,r,i):t;var a,u={};for(a in t)u[a]=Ut(t[a],n,e,r,i);return u}(e[t],i,n,a,r),r,i,a)&&(r._pt=h=new ie(r._pt,n,t,0,1,u.render,u,0,u.priority),r!==d))for(l=r._ptLookup[r._targets.indexOf(n)],f=u._props.length;f--;)l[u._props[f]]=h;return u}var qt,Yt=function _addPropTween(t,e,r,i,n,a,s,u,h){p(i)&&(i=i(n||0,t,a));var l,f=t[e],d="get"!==r?r:p(f)?h?t[e.indexOf("set")||!p(t["get"+e.substr(3)])?e:"get"+e.substr(3)](h):t[e]():f,c=p(f)?h?Jt:Qt:Vt;if(o(i)&&(~i.indexOf("random(")&&(i=db(i)),"="===i.charAt(1)&&(i=parseFloat(d)+parseFloat(i.substr(2))*("-"===i.charAt(0)?-1:1)+(Oa(d)||0))),d!==i)return isNaN(d*i)?(f||e in t||N(e,i),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,d,c,p,_=new ie(this._pt,t,e,0,1,Zt,null,n),m=0,g=0;for(_.b=r,_.e=i,r+="",(c=~(i+="").indexOf("random("))&&(i=db(i)),a&&(a(p=[r,i],t,e),r=p[0],i=p[1]),u=r.match(it)||[];o=it.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(d=parseFloat(u[g-1])||0,_._pt={_next:_._pt,p:f||1===g?f:",",s:d,c:"="===l.charAt(1)?parseFloat(l.substr(2))*("-"===l.charAt(0)?-1:1):parseFloat(l)-d,m:h&&h<4?Math.round:0},m=it.lastIndex);return _.c=m<i.length?i.substring(m,i.length):"",_.fp=s,(nt.test(i)||c)&&(_.e=0),this._pt=_}.call(this,t,e,d,i,c,u||Y.stringFilter,h)):(l=new ie(this._pt,t,e,+d||0,i-(d||0),"boolean"==typeof f?$t:Ht,0,c),h&&(l.fp=h),s&&l.modifier(s,this,t),this._pt=l)},Nt=function _initTween(e,r){var i,n,a,s,o,u,h,l,f,d,c,p,m,g=e.vars,v=g.ease,y=g.startAt,b=g.immediateRender,T=g.lazy,w=g.onUpdate,x=g.onUpdateParams,O=g.callbackScope,M=g.runBackwards,k=g.yoyoEase,C=g.keyframes,P=g.autoRevert,A=e._dur,S=e._startAt,D=e._targets,z=e.parent,I=z&&"nested"===z.data?z.parent._targets:D,E="auto"===e._overwrite&&!L,R=e.timeline;if(!R||C&&v||(v="none"),e._ease=Et(v,B.ease),e._yEase=k?It(Et(!0===k?v:k,B.ease)):0,k&&e._yoyo&&!e._repeat&&(k=e._yEase,e._yEase=e._ease,e._ease=k),!R){if(p=(l=D[0]?_(D[0]).harness:0)&&g[l.prop],i=na(g,ut),S&&S.render(-1,!0).kill(),y){if(sa(e._startAt=Gt.set(D,ja({data:"isStart",overwrite:!1,parent:z,immediateRender:!0,lazy:t(T),startAt:null,delay:0,onUpdate:w,onUpdateParams:x,callbackScope:O,stagger:0},y))),b)if(0<r)P||(e._startAt=0);else if(A&&!(r<0&&S))return void(r&&(e._zTime=r))}else if(M&&A)if(S)P||(e._startAt=0);else if(r&&(b=!1),a=ja({overwrite:!1,data:"isFromStart",lazy:b&&t(T),immediateRender:b,stagger:0,parent:z},i),p&&(a[l.prop]=p),sa(e._startAt=Gt.set(D,a)),b){if(!r)return}else _initTween(e._startAt,j);for(e._pt=0,T=A&&t(T)||T&&!A,n=0;n<D.length;n++){if(h=(o=D[n])._gsap||$(D)[n]._gsap,e._ptLookup[n]=d={},lt[h.id]&&ht.length&&fa(),c=I===D?n:I.indexOf(o),l&&!1!==(f=new l).init(o,p||i,e,c,I)&&(e._pt=s=new ie(e._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){d[t]=s}),f.priority&&(u=1)),!l||p)for(a in i)ft[a]&&(f=Qb(a,i,e,c,o,I))?f.priority&&(u=1):d[a]=s=Yt.call(e,o,a,"get",i[a],c,I,0,g.stringFilter);e._op&&e._op[n]&&e.kill(o,e._op[n]),E&&e._pt&&(qt=e,F.killTweensOf(o,d,e.globalTime(0)),m=!e.parent,qt=0),e._pt&&T&&(lt[h.id]=1)}u&&re(e),e._onInit&&e._onInit(e)}e._from=!R&&!!g.runBackwards,e._onUpdate=w,e._initted=(!e._op||e._pt)&&!m},Ut=function _parseFuncOrString(t,e,r,i,n){return p(t)?t.call(e,r,i,n):o(t)&&~t.indexOf("random(")?db(t):t},jt=_t+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",Xt=(jt+",id,stagger,delay,duration,paused,scrollTrigger