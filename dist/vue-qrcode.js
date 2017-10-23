!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueQrcode=t():e.VueQrcode=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var s=n[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){var i=n(4)(n(1),n(5),null,null);i.options.__file="E:\\workspace\\github\\vue-qriously\\src\\v-qrcode.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] v-qrcode.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),s=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default={data:function(){return{qrious:null}},props:{background:{type:String,default:"white"},backgroundAlpha:{type:Number,default:0},foreground:{type:String,default:"black"},foregroundAlpha:{type:Number,default:1},level:{type:String,default:"L"},mime:{type:String,default:"image/png"},padding:{type:Number,default:null},size:{type:Number,default:100},value:{type:String,required:!0}},watch:{background:function(){this.qrious.background=this.background},backgroundAlpha:function(){this.qrious.backgroundAlpha=this.backgroundAlpha},foreground:function(){this.qrious.foreground=this.foreground},foregroundAlpha:function(){this.qrious.foregroundAlpha=this.foregroundAlpha},level:function(){this.qrious.level=this.level},mime:function(){this.qrious.mime=this.mime},padding:function(){this.qrious.padding=this.padding},size:function(){this.qrious.size=this.size},value:function(){this.qrious.value=this.value}},mounted:function(){var e=this.$refs.qrcode,t=this.background,n=this.backgroundAlpha,i=this.foreground,r=this.foregroundAlpha,o=this.level,a=this.mime,u=this.padding,c=this.size,f=this.value;this.qrious=new s.default({element:e,background:t,backgroundAlpha:n,foreground:i,foregroundAlpha:r,level:o,mime:a,padding:u,size:c,value:f})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={install:function(e,t){e.component("qrcode",n(0))}};t.default=i,"undefined"!=typeof window&&window.Vue&&window.Vue.use(i)},function(e,t,n){!function(t,n){e.exports=n()}(0,function(){"use strict";function e(e,t){var i;return"function"==typeof Object.create?i=Object.create(e):(s.prototype=e,i=new s,s.prototype=null),t&&n(!0,i,t),i}function t(t,i,s,r){var o=this;return"string"!=typeof t&&(r=s,s=i,i=t,t=null),"function"!=typeof i&&(r=s,s=i,i=function(){return o.apply(this,arguments)}),n(!1,i,o,r),i.prototype=e(o.prototype,s),i.prototype.constructor=i,i.class_=t||o.class_,i.super_=o,i}function n(e,t,n){n=o.call(arguments,2);for(var i,s,a=0,u=n.length;a<u;a++){s=n[a];for(i in s)e&&!r.call(s,i)||(t[i]=s[i])}}function i(){}var s=function(){},r=Object.prototype.hasOwnProperty,o=Array.prototype.slice,a=t;i.class_="Nevis",i.super_=Object,i.extend=a;var u=i,c=u,f=c.extend(function(e,t,n){this.qrious=e,this.element=t,this.element.qrious=e,this.enabled=Boolean(n)},{draw:function(e){},getElement:function(){return this.enabled||(this.enabled=!0,this.render()),this.element},getModuleSize:function(e){var t=this.qrious,n=t.padding||0,i=Math.floor((t.size-2*n)/e.width);return Math.max(1,i)},getOffset:function(e){var t=this.qrious,n=t.padding;if(null!=n)return n;var i=this.getModuleSize(e),s=Math.floor((t.size-i*e.width)/2);return Math.max(0,s)},render:function(e){this.enabled&&(this.resize(),this.reset(),this.draw(e))},reset:function(){},resize:function(){}}),h=f,l=h.extend({draw:function(e){var t,n,i=this.qrious,s=this.getModuleSize(e),r=this.getOffset(e),o=this.element.getContext("2d");for(o.fillStyle=i.foreground,o.globalAlpha=i.foregroundAlpha,t=0;t<e.width;t++)for(n=0;n<e.width;n++)e.buffer[n*e.width+t]&&o.fillRect(s*t+r,s*n+r,s,s)},reset:function(){var e=this.qrious,t=this.element.getContext("2d"),n=e.size;t.lineWidth=1,t.clearRect(0,0,n,n),t.fillStyle=e.background,t.globalAlpha=e.backgroundAlpha,t.fillRect(0,0,n,n)},resize:function(){var e=this.element;e.width=e.height=this.qrious.size}}),d=l,_=c.extend(null,{BLOCK:[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28]}),p=_,v=c.extend(null,{BLOCKS:[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30],FINAL_FORMAT:[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107],LEVELS:{L:1,M:2,Q:3,H:4}}),g=v,m=c.extend(null,{EXPONENT:[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0],LOG:[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175]}),k=m,b=c.extend(null,{BLOCK:[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177]}),w=b,M=c.extend(function(e){var t,n,i,s,r,o=e.value.length;for(this._badness=[],this._level=g.LEVELS[e.level],this._polynomial=[],this._value=e.value,this._version=0,this._stringBuffer=[];this._version<40&&(this._version++,i=4*(this._level-1)+16*(this._version-1),s=g.BLOCKS[i++],r=g.BLOCKS[i++],t=g.BLOCKS[i++],n=g.BLOCKS[i],i=t*(s+r)+r-3+(this._version<=9),!(o<=i)););this._dataBlock=t,this._eccBlock=n,this._neccBlock1=s,this._neccBlock2=r;var a=this.width=17+4*this._version;this.buffer=M._createArray(a*a),this._ecc=M._createArray(t+(t+n)*(s+r)+r),this._mask=M._createArray((a*(a+1)+1)/2),this._insertFinders(),this._insertAlignments(),this.buffer[8+a*(a-8)]=1,this._insertTimingGap(),this._reverseMask(),this._insertTimingRowAndColumn(),this._insertVersion(),this._syncMask(),this._convertBitStream(o),this._calculatePolynomial(),this._appendEccToData(),this._interleaveBlocks(),this._pack(),this._finish()},{_addAlignment:function(e,t){var n,i=this.buffer,s=this.width;for(i[e+s*t]=1,n=-2;n<2;n++)i[e+n+s*(t-2)]=1,i[e-2+s*(t+n+1)]=1,i[e+2+s*(t+n)]=1,i[e+n+1+s*(t+2)]=1;for(n=0;n<2;n++)this._setMask(e-1,t+n),this._setMask(e+1,t-n),this._setMask(e-n,t-1),this._setMask(e+n,t+1)},_appendData:function(e,t,n,i){var s,r,o,a=this._polynomial,u=this._stringBuffer;for(r=0;r<i;r++)u[n+r]=0;for(r=0;r<t;r++){if(255!==(s=k.LOG[u[e+r]^u[n]]))for(o=1;o<i;o++)u[n+o-1]=u[n+o]^k.EXPONENT[M._modN(s+a[i-o])];else for(o=n;o<n+i;o++)u[o]=u[o+1];u[n+i-1]=255===s?0:k.EXPONENT[M._modN(s+a[0])]}},_appendEccToData:function(){var e,t=0,n=this._dataBlock,i=this._calculateMaxLength(),s=this._eccBlock;for(e=0;e<this._neccBlock1;e++)this._appendData(t,n,i,s),t+=n,i+=s;for(e=0;e<this._neccBlock2;e++)this._appendData(t,n+1,i,s),t+=n+1,i+=s},_applyMask:function(e){var t,n,i,s,r=this.buffer,o=this.width;switch(e){case 0:for(s=0;s<o;s++)for(i=0;i<o;i++)i+s&1||this._isMasked(i,s)||(r[i+s*o]^=1);break;case 1:for(s=0;s<o;s++)for(i=0;i<o;i++)1&s||this._isMasked(i,s)||(r[i+s*o]^=1);break;case 2:for(s=0;s<o;s++)for(t=0,i=0;i<o;i++,t++)3===t&&(t=0),t||this._isMasked(i,s)||(r[i+s*o]^=1);break;case 3:for(n=0,s=0;s<o;s++,n++)for(3===n&&(n=0),t=n,i=0;i<o;i++,t++)3===t&&(t=0),t||this._isMasked(i,s)||(r[i+s*o]^=1);break;case 4:for(s=0;s<o;s++)for(t=0,n=s>>1&1,i=0;i<o;i++,t++)3===t&&(t=0,n=!n),n||this._isMasked(i,s)||(r[i+s*o]^=1);break;case 5:for(n=0,s=0;s<o;s++,n++)for(3===n&&(n=0),t=0,i=0;i<o;i++,t++)3===t&&(t=0),(i&s&1)+!(!t|!n)||this._isMasked(i,s)||(r[i+s*o]^=1);break;case 6:for(n=0,s=0;s<o;s++,n++)for(3===n&&(n=0),t=0,i=0;i<o;i++,t++)3===t&&(t=0),(i&s&1)+(t&&t===n)&1||this._isMasked(i,s)||(r[i+s*o]^=1);break;case 7:for(n=0,s=0;s<o;s++,n++)for(3===n&&(n=0),t=0,i=0;i<o;i++,t++)3===t&&(t=0),(t&&t===n)+(i+s&1)&1||this._isMasked(i,s)||(r[i+s*o]^=1)}},_calculateMaxLength:function(){return this._dataBlock*(this._neccBlock1+this._neccBlock2)+this._neccBlock2},_calculatePolynomial:function(){var e,t,n=this._eccBlock,i=this._polynomial;for(i[0]=1,e=0;e<n;e++){for(i[e+1]=1,t=e;t>0;t--)i[t]=i[t]?i[t-1]^k.EXPONENT[M._modN(k.LOG[i[t]]+e)]:i[t-1];i[0]=k.EXPONENT[M._modN(k.LOG[i[0]]+e)]}for(e=0;e<=n;e++)i[e]=k.LOG[i[e]]},_checkBadness:function(){var e,t,n,i,s,r=0,o=this._badness,a=this.buffer,u=this.width;for(s=0;s<u-1;s++)for(i=0;i<u-1;i++)(a[i+u*s]&&a[i+1+u*s]&&a[i+u*(s+1)]&&a[i+1+u*(s+1)]||!(a[i+u*s]||a[i+1+u*s]||a[i+u*(s+1)]||a[i+1+u*(s+1)]))&&(r+=M.N2);var c=0;for(s=0;s<u;s++){for(n=0,o[0]=0,e=0,i=0;i<u;i++)t=a[i+u*s],e===t?o[n]++:o[++n]=1,e=t,c+=e?1:-1;r+=this._getBadness(n)}c<0&&(c=-c);var f=0,h=c;for(h+=h<<2,h<<=1;h>u*u;)h-=u*u,f++;for(r+=f*M.N4,i=0;i<u;i++){for(n=0,o[0]=0,e=0,s=0;s<u;s++)t=a[i+u*s],e===t?o[n]++:o[++n]=1,e=t;r+=this._getBadness(n)}return r},_convertBitStream:function(e){var t,n,i=this._ecc,s=this._version;for(n=0;n<e;n++)i[n]=this._value.charCodeAt(n);var r=this._stringBuffer=i.slice(),o=this._calculateMaxLength();e>=o-2&&(e=o-2,s>9&&e--);var a=e;if(s>9){for(r[a+2]=0,r[a+3]=0;a--;)t=r[a],r[a+3]|=255&t<<4,r[a+2]=t>>4;r[2]|=255&e<<4,r[1]=e>>4,r[0]=64|e>>12}else{for(r[a+1]=0,r[a+2]=0;a--;)t=r[a],r[a+2]|=255&t<<4,r[a+1]=t>>4;r[1]|=255&e<<4,r[0]=64|e>>4}for(a=e+3-(s<10);a<o;)r[a++]=236,r[a++]=17},_getBadness:function(e){var t,n=0,i=this._badness;for(t=0;t<=e;t++)i[t]>=5&&(n+=M.N1+i[t]-5);for(t=3;t<e-1;t+=2)i[t-2]===i[t+2]&&i[t+2]===i[t-1]&&i[t-1]===i[t+1]&&3*i[t-1]===i[t]&&(0===i[t-3]||t+3>e||3*i[t-3]>=4*i[t]||3*i[t+3]>=4*i[t])&&(n+=M.N3);return n},_finish:function(){this._stringBuffer=this.buffer.slice();var e,t,n=0,i=3e4;for(t=0;t<8&&(this._applyMask(t),e=this._checkBadness(),e<i&&(i=e,n=t),7!==n);t++)this.buffer=this._stringBuffer.slice();n!==t&&this._applyMask(n),i=g.FINAL_FORMAT[n+(this._level-1<<3)];var s=this.buffer,r=this.width;for(t=0;t<8;t++,i>>=1)1&i&&(s[r-1-t+8*r]=1,t<6?s[8+r*t]=1:s[8+r*(t+1)]=1);for(t=0;t<7;t++,i>>=1)1&i&&(s[8+r*(r-7+t)]=1,t?s[6-t+8*r]=1:s[7+8*r]=1)},_interleaveBlocks:function(){var e,t,n=this._dataBlock,i=this._ecc,s=this._eccBlock,r=0,o=this._calculateMaxLength(),a=this._neccBlock1,u=this._neccBlock2,c=this._stringBuffer;for(e=0;e<n;e++){for(t=0;t<a;t++)i[r++]=c[e+t*n];for(t=0;t<u;t++)i[r++]=c[a*n+e+t*(n+1)]}for(t=0;t<u;t++)i[r++]=c[a*n+e+t*(n+1)];for(e=0;e<s;e++)for(t=0;t<a+u;t++)i[r++]=c[o+e+t*s];this._stringBuffer=i},_insertAlignments:function(){var e,t,n,i=this._version,s=this.width;if(i>1)for(e=p.BLOCK[i],n=s-7;;){for(t=s-7;t>e-3&&(this._addAlignment(t,n),!(t<e));)t-=e;if(n<=e+9)break;n-=e,this._addAlignment(6,n),this._addAlignment(n,6)}},_insertFinders:function(){var e,t,n,i,s=this.buffer,r=this.width;for(e=0;e<3;e++){for(t=0,i=0,1===e&&(t=r-7),2===e&&(i=r-7),s[i+3+r*(t+3)]=1,n=0;n<6;n++)s[i+n+r*t]=1,s[i+r*(t+n+1)]=1,s[i+6+r*(t+n)]=1,s[i+n+1+r*(t+6)]=1;for(n=1;n<5;n++)this._setMask(i+n,t+1),this._setMask(i+1,t+n+1),this._setMask(i+5,t+n),this._setMask(i+n+1,t+5);for(n=2;n<4;n++)s[i+n+r*(t+2)]=1,s[i+2+r*(t+n+1)]=1,s[i+4+r*(t+n)]=1,s[i+n+1+r*(t+4)]=1}},_insertTimingGap:function(){var e,t,n=this.width;for(t=0;t<7;t++)this._setMask(7,t),this._setMask(n-8,t),this._setMask(7,t+n-7);for(e=0;e<8;e++)this._setMask(e,7),this._setMask(e+n-8,7),this._setMask(e,n-8)},_insertTimingRowAndColumn:function(){var e,t=this.buffer,n=this.width;for(e=0;e<n-14;e++)1&e?(this._setMask(8+e,6),this._setMask(6,8+e)):(t[8+e+6*n]=1,t[6+n*(8+e)]=1)},_insertVersion:function(){var e,t,n,i,s=this.buffer,r=this._version,o=this.width;if(r>6)for(e=w.BLOCK[r-7],t=17,n=0;n<6;n++)for(i=0;i<3;i++,t--)1&(t>11?r>>t-12:e>>t)?(s[5-n+o*(2-i+o-11)]=1,s[2-i+o-11+o*(5-n)]=1):(this._setMask(5-n,2-i+o-11),this._setMask(2-i+o-11,5-n))},_isMasked:function(e,t){var n=M._getMaskBit(e,t);return 1===this._mask[n]},_pack:function(){var e,t,n,i=1,s=1,r=this.width,o=r-1,a=r-1,u=(this._dataBlock+this._eccBlock)*(this._neccBlock1+this._neccBlock2)+this._neccBlock2;for(t=0;t<u;t++)for(e=this._stringBuffer[t],n=0;n<8;n++,e<<=1){128&e&&(this.buffer[o+r*a]=1);do{s?o--:(o++,i?0!==a?a--:(o-=2,i=!i,6===o&&(o--,a=9)):a!==r-1?a++:(o-=2,i=!i,6===o&&(o--,a-=8))),s=!s}while(this._isMasked(o,a))}},_reverseMask:function(){var e,t,n=this.width;for(e=0;e<9;e++)this._setMask(e,8);for(e=0;e<8;e++)this._setMask(e+n-8,8),this._setMask(8,e);for(t=0;t<7;t++)this._setMask(8,t+n-7)},_setMask:function(e,t){var n=M._getMaskBit(e,t);this._mask[n]=1},_syncMask:function(){var e,t,n=this.width;for(t=0;t<n;t++)for(e=0;e<=t;e++)this.buffer[e+n*t]&&this._setMask(e,t)}},{_createArray:function(e){var t,n=[];for(t=0;t<e;t++)n[t]=0;return n},_getMaskBit:function(e,t){var n;return e>t&&(n=e,e=t,t=n),n=t,n+=t*t,n>>=1,n+=e},_modN:function(e){for(;e>=255;)e-=255,e=(e>>8)+(255&e);return e},N1:3,N2:3,N3:40,N4:10}),y=M,B=h.extend({draw:function(){this.element.src=this.qrious.toDataURL()},reset:function(){this.element.src=""},resize:function(){var e=this.element;e.width=e.height=this.qrious.size}}),A=B,O=c.extend(function(e,t,n,i){this.name=e,this.modifiable=Boolean(t),this.defaultValue=n,this._valueTransformer=i},{transform:function(e){var t=this._valueTransformer;return"function"==typeof t?t(e,this):e}}),x=O,N=c.extend(null,{abs:function(e){return null!=e?Math.abs(e):null},hasOwn:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},noop:function(){},toUpperCase:function(e){return null!=e?e.toUpperCase():null}}),L=N,E=c.extend(function(e){this.options={},e.forEach(function(e){this.options[e.name]=e},this)},{exists:function(e){return null!=this.options[e]},get:function(e,t){return E._get(this.options[e],t)},getAll:function(e){var t,n=this.options,i={};for(t in n)L.hasOwn(n,t)&&(i[t]=E._get(n[t],e));return i},init:function(e,t,n){"function"!=typeof n&&(n=L.noop);var i,s;for(i in this.options)L.hasOwn(this.options,i)&&(s=this.options[i],E._set(s,s.defaultValue,t),E._createAccessor(s,t,n));this._setAll(e,t,!0)},set:function(e,t,n){return this._set(e,t,n)},setAll:function(e,t){return this._setAll(e,t)},_set:function(e,t,n,i){var s=this.options[e];if(!s)throw new Error("Invalid option: "+e);if(!s.modifiable&&!i)throw new Error("Option cannot be modified: "+e);return E._set(s,t,n)},_setAll:function(e,t,n){if(!e)return!1;var i,s=!1;for(i in e)L.hasOwn(e,i)&&this._set(i,e[i],t,n)&&(s=!0);return s}},{_createAccessor:function(e,t,n){var i={get:function(){return E._get(e,t)}};e.modifiable&&(i.set=function(i){E._set(e,i,t)&&n(i,e)}),Object.defineProperty(t,e.name,i)},_get:function(e,t){return t["_"+e.name]},_set:function(e,t,n){var i="_"+e.name,s=n[i],r=e.transform(null!=t?t:e.defaultValue);return n[i]=r,r!==s}}),q=E,S=c.extend(function(){this._services={}},{getService:function(e){var t=this._services[e];if(!t)throw new Error("Service is not being managed with name: "+e);return t},setService:function(e,t){if(this._services[e])throw new Error("Service is already managed with name: "+e);t&&(this._services[e]=t)}}),C=S,z=new q([new x("background",!0,"white"),new x("backgroundAlpha",!0,1,L.abs),new x("element"),new x("foreground",!0,"black"),new x("foregroundAlpha",!0,1,L.abs),new x("level",!0,"L",L.toUpperCase),new x("mime",!0,"image/png"),new x("padding",!0,null,L.abs),new x("size",!0,100,L.abs),new x("value",!0,"")]),R=new C,j=c.extend(function(e){z.init(e,this,this.update.bind(this));var t=z.get("element",this),n=R.getService("element"),i=t&&n.isCanvas(t)?t:n.createCanvas(),s=t&&n.isImage(t)?t:n.createImage();this._canvasRenderer=new d(this,i,!0),this._imageRenderer=new A(this,s,s===t),this.update()},{get:function(){return z.getAll(this)},set:function(e){z.setAll(e,this)&&this.update()},toDataURL:function(e){return this.canvas.toDataURL(e||this.mime)},update:function(){var e=new y({level:this.level,value:this.value});this._canvasRenderer.render(e),this._imageRenderer.render(e)}},{use:function(e){R.setService(e.getName(),e)}});Object.defineProperties(j.prototype,{canvas:{get:function(){return this._canvasRenderer.getElement()}},image:{get:function(){return this._imageRenderer.getElement()}}});var T=j,P=T,I=c.extend({getName:function(){}}),V=I,F=V.extend({createCanvas:function(){},createImage:function(){},getName:function(){return"element"},isCanvas:function(e){},isImage:function(e){}}),K=F,D=K.extend({createCanvas:function(){return document.createElement("canvas")},createImage:function(){return document.createElement("img")},isCanvas:function(e){return e instanceof HTMLCanvasElement},isImage:function(e){return e instanceof HTMLImageElement}}),G=D;return P.use(new G),P})},function(e,t){e.exports=function(e,t,n,i){var s,r=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(s=e,r=e.default);var a="function"==typeof r?r.options:r;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),i){var u=Object.create(a.computed||null);Object.keys(i).forEach(function(e){var t=i[e];u[e]=function(){return t}}),a.computed=u}return{esModule:s,exports:r,options:a}}},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("canvas",{ref:"qrcode"})])},staticRenderFns:[]},e.exports.render._withStripped=!0}])});