webpackJsonp([1],{"+Yfh":function(t,n,e){t.exports=e.p+"img/13.0135f2e1.jpg"},0:function(t,n,e){t.exports=e("NHnr")},"0U3y":function(t,n,e){t.exports=e.p+"img/1.b6c68db2.jpg"},"4Ygy":function(t,n,e){t.exports=e.p+"img/15.ee1e0541.jpg"},"8q/o":function(t,n,e){t.exports=e.p+"img/nyr-logo.9dbece67.png"},A6Lo:function(t,n,e){t.exports=e.p+"img/4.4ae29ee6.jpg"},HpAM:function(t,n,e){t.exports=e.p+"img/11.04a41c70.jpg"},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("/5sW"),o=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{attrs:{id:"logo"}},[i("img",{attrs:{src:e("8q/o")}})])}],s=e("XyMi");function c(t){e("mOmv")}var a=null,u=!1,p=c,f="data-v-33f93549",l=null,d=Object(s["a"])(a,o,r,u,p,f,l),h=d.exports,g=(e("gbyG"),e("Gh7F"),{props:["num"],data:function(){return{src:""}},computed:{webPackPath:function(){return e("WODi")("./"+this.num+".jpg")}}}),v=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"cartoon-container"},[e("img",{attrs:{src:t.webPackPath}})])},m=[];function j(t){e("zfVG")}var x=!1,b=j,k="data-v-7293a0db",_=null,C=Object(s["a"])(g,v,m,x,b,k,_),O=C.exports,y=e("U0v6"),w=e.n(y),U=e("hx7t"),E=e.n(U),I={data:function(){return{current:"",next:[],previous:[],fadeIn:!1,fadeOut:!1,hide:!1,flip:!1}},components:{Cartoon:O,FontAwesomeIcon:w.a},methods:{checkUnique:function(t){var n;return n=this.current!==t&&!this.previous.includes(t)&&!this.next.includes(t),n},handleFlip:function(){this.flip=!this.flip},handleNext:function(){var t=this;if(1===this.next.length){var n=this.randomCartoon(),e=0;this.fadeOut=!0,setTimeout(function(){t.fadeOut=!1;while(!t.checkUnique(n)){if(e++,n=t.randomCartoon(),e>=15)throw"Error: No more cartoons";if(t.checkUnique(n))break}t.previous.push(t.current),t.current=t.next.shift(),t.next.push(n)},250)}this.next.length>1&&(this.previous.push(this.current),this.current=this.next.shift()),this.fadeIn=!0,setTimeout(function(){t.fadeIn=!1},250)},handlePrev:function(){if(this.previous.length>=1){this.next.unshift(this.current),this.fadeIn=!1,this.fadeOut=!0;var t=this;setTimeout(function(){t.fadeOut=!1,t.current=t.previous.pop(),t.fadeIn=!0},250),setTimeout(function(){t.fadeIn=!1},250)}},randomCartoon:function(){var t=Math.floor(Math.random()*Math.floor(14)+1).toString();return t}},created:function(){var t=this.randomCartoon(),n=this.randomCartoon();this.current=t,this.next.push(n)},computed:{cartoons:function(){var t=this.previous.slice(0,this.previous.length);if(t.push(this.current),t.concat(this.next),t.length>=5){t.length;var n=t.length-10;t.splice(0,n)}return console.log(t),t},icon:function(){return E.a}}},T=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"outer",class:{flip:t.flip}},[e("div",{attrs:{id:"carousel"}},[e("div",{staticClass:"front"},[e("div",{staticClass:"prev"},t._l(t.previous,function(t,n){return e("cartoon",{key:n,attrs:{num:t}})})),e("div",{staticClass:"current",class:{fadeIn:t.fadeIn,fadeOut:t.fadeOut,hide:t.hide}},[e("cartoon",{attrs:{id:"current",num:t.current}})],1),e("div",{staticClass:"next"},t._l(t.next,function(t,n){return e("cartoon",{key:n,attrs:{num:t}})})),e("button",{attrs:{id:"back"},on:{click:t.handlePrev}},[t._v("<")]),e("button",{attrs:{id:"next"},on:{click:t.handleNext}},[t._v(">")])]),e("div",{staticClass:"back"},[e("div",{staticClass:"back-text"},[t._v("\n        Your last 5 viewed\n      ")]),e("div",{staticClass:"grid"},t._l(t.cartoons,function(t,n){return e("cartoon",{key:n,attrs:{num:t}})}))])]),e("div",{attrs:{id:"flip"}},[e("font-awesome-icon",{attrs:{icon:t.icon},on:{click:t.handleFlip}})],1)])},Y=[];function q(t){e("eiA2")}var A=!1,M=q,N=null,P=null,F=Object(s["a"])(I,T,Y,A,M,N,P),H=F.exports,V={name:"app",components:{Logo:h,Carousel:H}},$=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("Logo"),e("Carousel")],1)},D=[];function B(t){e("aT6q")}var G=!1,L=B,Q=null,W=null,S=Object(s["a"])(V,$,D,G,L,Q,W),z=S.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(z)}}).$mount("#app")},TDR7:function(t,n,e){t.exports=e.p+"img/6.76409c32.jpg"},Ukfo:function(t,n,e){t.exports=e.p+"img/9.46e87d51.jpg"},VEQj:function(t,n,e){t.exports=e.p+"img/7.4debb7d1.jpg"},WODi:function(t,n,e){var i={"./1.jpg":"0U3y","./10.jpg":"uYll","./11.jpg":"HpAM","./12.jpg":"rr43","./13.jpg":"+Yfh","./14.jpg":"eQSo","./15.jpg":"4Ygy","./2.jpg":"ejN9","./3.jpg":"o+YF","./4.jpg":"A6Lo","./5.jpg":"bBUu","./6.jpg":"TDR7","./7.jpg":"VEQj","./8.jpg":"sVHB","./9.jpg":"Ukfo"};function o(t){return e(r(t))}function r(t){var n=i[t];if(!(n+1))throw new Error("Cannot find module '"+t+"'.");return n}o.keys=function(){return Object.keys(i)},o.resolve=r,t.exports=o,o.id="WODi"},aT6q:function(t,n){},bBUu:function(t,n,e){t.exports=e.p+"img/5.1c4f49fa.jpg"},eQSo:function(t,n,e){t.exports=e.p+"img/14.56d0a8d6.jpg"},eiA2:function(t,n){},ejN9:function(t,n,e){t.exports=e.p+"img/2.53b078f9.jpg"},mOmv:function(t,n){},"o+YF":function(t,n,e){t.exports=e.p+"img/3.6e296656.jpg"},rr43:function(t,n,e){t.exports=e.p+"img/12.809166c5.jpg"},sVHB:function(t,n,e){t.exports=e.p+"img/8.1fb0a278.jpg"},uYll:function(t,n,e){t.exports=e.p+"img/10.8e21685a.jpg"},zfVG:function(t,n){}},[0]);
//# sourceMappingURL=app.2ab16970.js.map