(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sc="180",Hr={ROTATE:0,DOLLY:1,PAN:2},Or={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Dx=0,$d=1,$x=2,vg=1,Lx=2,fi=3,Ui=0,pn=1,pi=2,$i=0,Vr=1,Ld=2,Nd=3,Ud=4,Nx=5,er=100,Ux=101,Ox=102,zx=103,kx=104,Fx=200,Bx=201,Hx=202,Vx=203,tu=204,nu=205,Gx=206,Wx=207,qx=208,Xx=209,jx=210,Kx=211,Yx=212,Zx=213,Jx=214,iu=0,ru=1,su=2,Wr=3,au=4,ou=5,lu=6,uu=7,yg=0,Qx=1,eb=2,Li=0,tb=1,nb=2,ib=3,rb=4,sb=5,ab=6,ob=7,xg=300,qr=301,Xr=302,cu=303,du=304,oo=306,hu=1e3,sr=1001,fu=1002,Wn=1003,lb=1004,na=1005,Qn=1006,Eo=1007,ar=1008,ni=1009,bg=1010,wg=1011,Ns=1012,ac=1013,ur=1014,gi=1015,Vs=1016,oc=1017,lc=1018,Us=1020,Sg=35902,Eg=35899,Tg=1021,Mg=1022,Gn=1023,Os=1026,zs=1027,Ag=1028,uc=1029,Cg=1030,cc=1031,dc=1033,Fa=33776,Ba=33777,Ha=33778,Va=33779,pu=35840,mu=35841,gu=35842,_u=35843,vu=36196,yu=37492,xu=37496,bu=37808,wu=37809,Su=37810,Eu=37811,Tu=37812,Mu=37813,Au=37814,Cu=37815,Ru=37816,Iu=37817,Pu=37818,Du=37819,$u=37820,Lu=37821,Nu=36492,Uu=36494,Ou=36495,zu=36283,ku=36284,Fu=36285,Bu=36286,ub=3200,cb=3201,Rg=0,db=1,Di="",Cn="srgb",jr="srgb-linear",ja="linear",Ct="srgb",br=7680,Od=519,hb=512,fb=513,pb=514,Ig=515,mb=516,gb=517,_b=518,vb=519,zd=35044,kd="300 es",ei=2e3,Ka=2001;class mr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fd=1234567;const Ds=Math.PI/180,ks=180/Math.PI;function Jr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function ht(t,e,n){return Math.max(e,Math.min(n,t))}function hc(t,e){return(t%e+e)%e}function yb(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function xb(t,e,n){return t!==e?(n-t)/(e-t):0}function $s(t,e,n){return(1-n)*t+n*e}function bb(t,e,n,i){return $s(t,e,1-Math.exp(-n*i))}function wb(t,e=1){return e-Math.abs(hc(t,e*2)-e)}function Sb(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Eb(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Tb(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Mb(t,e){return t+Math.random()*(e-t)}function Ab(t){return t*(.5-Math.random())}function Cb(t){t!==void 0&&(Fd=t);let e=Fd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rb(t){return t*Ds}function Ib(t){return t*ks}function Pb(t){return(t&t-1)===0&&t!==0}function Db(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function $b(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Lb(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),u=s((e+i)/2),d=a((e+i)/2),h=s((e-i)/2),f=a((e-i)/2),m=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*d,l*h,l*f,o*u);break;case"YZY":t.set(l*f,o*d,l*h,o*u);break;case"ZXZ":t.set(l*h,l*f,o*d,o*u);break;case"XZX":t.set(o*d,l*_,l*m,o*u);break;case"YXY":t.set(l*m,o*d,l*_,o*u);break;case"ZYZ":t.set(l*_,l*m,o*d,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ur(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const cn={DEG2RAD:Ds,RAD2DEG:ks,generateUUID:Jr,clamp:ht,euclideanModulo:hc,mapLinear:yb,inverseLerp:xb,lerp:$s,damp:bb,pingpong:wb,smoothstep:Sb,smootherstep:Eb,randInt:Tb,randFloat:Mb,randFloatSpread:Ab,seededRandom:Cb,degToRad:Rb,radToDeg:Ib,isPowerOfTwo:Pb,ceilPowerOfTwo:Db,floorPowerOfTwo:$b,setQuaternionFromProperEuler:Lb,normalize:ln,denormalize:Ur};class ot{constructor(e=0,n=0){ot.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=ht(this.x,e.x,n.x),this.y=ht(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=ht(this.x,e,n),this.y=ht(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],d=i[r+2],h=i[r+3];const f=s[a+0],m=s[a+1],_=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=u,e[n+2]=d,e[n+3]=h;return}if(o===1){e[n+0]=f,e[n+1]=m,e[n+2]=_,e[n+3]=y;return}if(h!==y||l!==f||u!==m||d!==_){let v=1-o;const p=l*f+u*m+d*_+h*y,b=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const T=Math.sqrt(E),R=Math.atan2(T,p*b);v=Math.sin(v*R)/T,o=Math.sin(o*R)/T}const w=o*b;if(l=l*v+f*w,u=u*v+m*w,d=d*v+_*w,h=h*v+y*w,v===1-o){const T=1/Math.sqrt(l*l+u*u+d*d+h*h);l*=T,u*=T,d*=T,h*=T}}e[n]=l,e[n+1]=u,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],d=i[r+3],h=s[a],f=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+d*h+l*m-u*f,e[n+1]=l*_+d*f+u*h-o*m,e[n+2]=u*_+d*m+o*f-l*h,e[n+3]=d*_-o*h-l*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),d=o(r/2),h=o(s/2),f=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*d*h+u*m*_,this._y=u*m*h-f*d*_,this._z=u*d*_+f*m*h,this._w=u*d*h-f*m*_;break;case"YXZ":this._x=f*d*h+u*m*_,this._y=u*m*h-f*d*_,this._z=u*d*_-f*m*h,this._w=u*d*h+f*m*_;break;case"ZXY":this._x=f*d*h-u*m*_,this._y=u*m*h+f*d*_,this._z=u*d*_+f*m*h,this._w=u*d*h-f*m*_;break;case"ZYX":this._x=f*d*h-u*m*_,this._y=u*m*h+f*d*_,this._z=u*d*_-f*m*h,this._w=u*d*h+f*m*_;break;case"YZX":this._x=f*d*h+u*m*_,this._y=u*m*h+f*d*_,this._z=u*d*_-f*m*h,this._w=u*d*h-f*m*_;break;case"XZY":this._x=f*d*h-u*m*_,this._y=u*m*h-f*d*_,this._z=u*d*_+f*m*h,this._w=u*d*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],d=n[6],h=n[10],f=i+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(d-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,d=n._w;return this._x=i*d+a*o+r*u-s*l,this._y=r*d+a*l+s*o-i*u,this._z=s*d+a*u+i*l-r*o,this._w=a*d-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),d=Math.atan2(u,o),h=Math.sin((1-n)*d)/u,f=Math.sin(n*d)/u;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Bd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Bd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),d=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*u+a*h-o*d,this.y=i+l*d+o*u-s*h,this.z=r+l*h+s*d-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=ht(this.x,e.x,n.x),this.y=ht(this.y,e.y,n.y),this.z=ht(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=ht(this.x,e,n),this.y=ht(this.y,e,n),this.z=ht(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return To.copy(this).projectOnVector(e),this.sub(To)}reflect(e){return this.sub(To.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const To=new W,Bd=new cr;class lt{constructor(e,n,i,r,s,a,o,l,u){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],d=i[4],h=i[7],f=i[2],m=i[5],_=i[8],y=r[0],v=r[3],p=r[6],b=r[1],E=r[4],w=r[7],T=r[2],R=r[5],P=r[8];return s[0]=a*y+o*b+l*T,s[3]=a*v+o*E+l*R,s[6]=a*p+o*w+l*P,s[1]=u*y+d*b+h*T,s[4]=u*v+d*E+h*R,s[7]=u*p+d*w+h*P,s[2]=f*y+m*b+_*T,s[5]=f*v+m*E+_*R,s[8]=f*p+m*w+_*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8];return n*a*d-n*o*u-i*s*d+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8],h=d*a-o*u,f=o*l-d*s,m=u*s-a*l,_=n*h+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=h*y,e[1]=(r*u-d*i)*y,e[2]=(o*i-r*a)*y,e[3]=f*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=m*y,e[7]=(i*l-u*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Mo.makeScale(e,n)),this}rotate(e){return this.premultiply(Mo.makeRotation(-e)),this}translate(e,n){return this.premultiply(Mo.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mo=new lt;function Pg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ya(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Nb(){const t=Ya("canvas");return t.style.display="block",t}const Hd={};function Fs(t){t in Hd||(Hd[t]=!0,console.warn(t))}function Ub(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Vd=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gd=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ob(){const t={enabled:!0,workingColorSpace:jr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ct&&(r.r=_i(r.r),r.g=_i(r.g),r.b=_i(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ct&&(r.r=Gr(r.r),r.g=Gr(r.g),r.b=Gr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Di?ja:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Fs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Fs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[jr]:{primaries:e,whitePoint:i,transfer:ja,toXYZ:Vd,fromXYZ:Gd,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:e,whitePoint:i,transfer:Ct,toXYZ:Vd,fromXYZ:Gd,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),t}const bt=Ob();function _i(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Gr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let wr;class zb{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{wr===void 0&&(wr=Ya("canvas")),wr.width=e.width,wr.height=e.height;const r=wr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=wr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ya("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=_i(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(_i(n[i]/255)*255):n[i]=_i(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kb=0;class fc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kb++}),this.uuid=Jr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ao(r[a].image)):s.push(Ao(r[a]))}else s=Ao(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ao(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?zb.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fb=0;const Co=new W;class mn extends mr{constructor(e=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=sr,r=sr,s=Qn,a=ar,o=Gn,l=ni,u=mn.DEFAULT_ANISOTROPY,d=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=Jr(),this.name="",this.source=new fc(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Co).x}get height(){return this.source.getSize(Co).y}get depth(){return this.source.getSize(Co).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hu:e.x=e.x-Math.floor(e.x);break;case sr:e.x=e.x<0?0:1;break;case fu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hu:e.y=e.y-Math.floor(e.y);break;case sr:e.y=e.y<0?0:1;break;case fu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=xg;mn.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,n=0,i=0,r=1){kt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],d=l[4],h=l[8],f=l[1],m=l[5],_=l[9],y=l[2],v=l[6],p=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-y)<.01&&Math.abs(_-v)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+y)<.1&&Math.abs(_+v)<.1&&Math.abs(u+m+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(u+1)/2,w=(m+1)/2,T=(p+1)/2,R=(d+f)/4,P=(h+y)/4,$=(_+v)/4;return E>w&&E>T?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=R/i,s=P/i):w>T?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=R/r,s=$/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=P/s,r=$/s),this.set(i,r,s,n),this}let b=Math.sqrt((v-_)*(v-_)+(h-y)*(h-y)+(f-d)*(f-d));return Math.abs(b)<.001&&(b=1),this.x=(v-_)/b,this.y=(h-y)/b,this.z=(f-d)/b,this.w=Math.acos((u+m+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=ht(this.x,e.x,n.x),this.y=ht(this.y,e.y,n.y),this.z=ht(this.z,e.z,n.z),this.w=ht(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=ht(this.x,e,n),this.y=ht(this.y,e,n),this.z=ht(this.z,e,n),this.w=ht(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bb extends mr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new kt(0,0,e,n),this.scissorTest=!1,this.viewport=new kt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new mn(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new fc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dr extends Bb{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Dg extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hb extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gs{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint($n.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint($n.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=$n.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$n):$n.fromBufferAttribute(s,a),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ia.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ia.copy(i.boundingBox)),ia.applyMatrix4(e.matrixWorld),this.union(ia)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ds),ra.subVectors(this.max,ds),Sr.subVectors(e.a,ds),Er.subVectors(e.b,ds),Tr.subVectors(e.c,ds),wi.subVectors(Er,Sr),Si.subVectors(Tr,Er),Vi.subVectors(Sr,Tr);let n=[0,-wi.z,wi.y,0,-Si.z,Si.y,0,-Vi.z,Vi.y,wi.z,0,-wi.x,Si.z,0,-Si.x,Vi.z,0,-Vi.x,-wi.y,wi.x,0,-Si.y,Si.x,0,-Vi.y,Vi.x,0];return!Ro(n,Sr,Er,Tr,ra)||(n=[1,0,0,0,1,0,0,0,1],!Ro(n,Sr,Er,Tr,ra))?!1:(sa.crossVectors(wi,Si),n=[sa.x,sa.y,sa.z],Ro(n,Sr,Er,Tr,ra))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const oi=[new W,new W,new W,new W,new W,new W,new W,new W],$n=new W,ia=new Gs,Sr=new W,Er=new W,Tr=new W,wi=new W,Si=new W,Vi=new W,ds=new W,ra=new W,sa=new W,Gi=new W;function Ro(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Gi.fromArray(t,s);const o=r.x*Math.abs(Gi.x)+r.y*Math.abs(Gi.y)+r.z*Math.abs(Gi.z),l=e.dot(Gi),u=n.dot(Gi),d=i.dot(Gi);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>o)return!1}return!0}const Vb=new Gs,hs=new W,Io=new W;class lo{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Vb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hs.subVectors(e,this.center);const n=hs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(hs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hs.copy(e.center).add(Io)),this.expandByPoint(hs.copy(e.center).sub(Io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const li=new W,Po=new W,aa=new W,Ei=new W,Do=new W,oa=new W,$o=new W;class pc{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,n),li.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Po.copy(e).add(n).multiplyScalar(.5),aa.copy(n).sub(e).normalize(),Ei.copy(this.origin).sub(Po);const s=e.distanceTo(n)*.5,a=-this.direction.dot(aa),o=Ei.dot(this.direction),l=-Ei.dot(aa),u=Ei.lengthSq(),d=Math.abs(1-a*a);let h,f,m,_;if(d>0)if(h=a*l-o,f=a*o-l,_=s*d,h>=0)if(f>=-_)if(f<=_){const y=1/d;h*=y,f*=y,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+u}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+u;else f<=-_?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+u):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+u):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+u);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Po).addScaledVector(aa,f),m}intersectSphere(e,n){li.subVectors(e.center,this.origin);const i=li.dot(this.direction),r=li.dot(li)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),d>=0?(s=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,n,i,r,s){Do.subVectors(n,e),oa.subVectors(i,e),$o.crossVectors(Do,oa);let a=this.direction.dot($o),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ei.subVectors(this.origin,e);const l=o*this.direction.dot(oa.crossVectors(Ei,oa));if(l<0)return null;const u=o*this.direction.dot(Do.cross(Ei));if(u<0||l+u>a)return null;const d=-o*Ei.dot($o);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(e,n,i,r,s,a,o,l,u,d,h,f,m,_,y,v){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,d,h,f,m,_,y,v)}set(e,n,i,r,s,a,o,l,u,d,h,f,m,_,y,v){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=u,p[6]=d,p[10]=h,p[14]=f,p[3]=m,p[7]=_,p[11]=y,p[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Mr.setFromMatrixColumn(e,0).length(),s=1/Mr.setFromMatrixColumn(e,1).length(),a=1/Mr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*d,m=a*h,_=o*d,y=o*h;n[0]=l*d,n[4]=-l*h,n[8]=u,n[1]=m+_*u,n[5]=f-y*u,n[9]=-o*l,n[2]=y-f*u,n[6]=_+m*u,n[10]=a*l}else if(e.order==="YXZ"){const f=l*d,m=l*h,_=u*d,y=u*h;n[0]=f+y*o,n[4]=_*o-m,n[8]=a*u,n[1]=a*h,n[5]=a*d,n[9]=-o,n[2]=m*o-_,n[6]=y+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*d,m=l*h,_=u*d,y=u*h;n[0]=f-y*o,n[4]=-a*h,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*d,n[9]=y-f*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*d,m=a*h,_=o*d,y=o*h;n[0]=l*d,n[4]=_*u-m,n[8]=f*u+y,n[1]=l*h,n[5]=y*u+f,n[9]=m*u-_,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*u,_=o*l,y=o*u;n[0]=l*d,n[4]=y-f*h,n[8]=_*h+m,n[1]=h,n[5]=a*d,n[9]=-o*d,n[2]=-u*d,n[6]=m*h+_,n[10]=f-y*h}else if(e.order==="XZY"){const f=a*l,m=a*u,_=o*l,y=o*u;n[0]=l*d,n[4]=-h,n[8]=u*d,n[1]=f*h+y,n[5]=a*d,n[9]=m*h-_,n[2]=_*h-m,n[6]=o*d,n[10]=y*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gb,e,Wb)}lookAt(e,n,i){const r=this.elements;return yn.subVectors(e,n),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ti.crossVectors(i,yn),Ti.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ti.crossVectors(i,yn)),Ti.normalize(),la.crossVectors(yn,Ti),r[0]=Ti.x,r[4]=la.x,r[8]=yn.x,r[1]=Ti.y,r[5]=la.y,r[9]=yn.y,r[2]=Ti.z,r[6]=la.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],d=i[1],h=i[5],f=i[9],m=i[13],_=i[2],y=i[6],v=i[10],p=i[14],b=i[3],E=i[7],w=i[11],T=i[15],R=r[0],P=r[4],$=r[8],A=r[12],C=r[1],U=r[5],z=r[9],V=r[13],k=r[2],K=r[6],G=r[10],Z=r[14],X=r[3],te=r[7],_e=r[11],j=r[15];return s[0]=a*R+o*C+l*k+u*X,s[4]=a*P+o*U+l*K+u*te,s[8]=a*$+o*z+l*G+u*_e,s[12]=a*A+o*V+l*Z+u*j,s[1]=d*R+h*C+f*k+m*X,s[5]=d*P+h*U+f*K+m*te,s[9]=d*$+h*z+f*G+m*_e,s[13]=d*A+h*V+f*Z+m*j,s[2]=_*R+y*C+v*k+p*X,s[6]=_*P+y*U+v*K+p*te,s[10]=_*$+y*z+v*G+p*_e,s[14]=_*A+y*V+v*Z+p*j,s[3]=b*R+E*C+w*k+T*X,s[7]=b*P+E*U+w*K+T*te,s[11]=b*$+E*z+w*G+T*_e,s[15]=b*A+E*V+w*Z+T*j,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],d=e[2],h=e[6],f=e[10],m=e[14],_=e[3],y=e[7],v=e[11],p=e[15];return _*(+s*l*h-r*u*h-s*o*f+i*u*f+r*o*m-i*l*m)+y*(+n*l*m-n*u*f+s*a*f-r*a*m+r*u*d-s*l*d)+v*(+n*u*h-n*o*m-s*a*h+i*a*m+s*o*d-i*u*d)+p*(-r*o*d-n*l*h+n*o*f+r*a*h-i*a*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8],h=e[9],f=e[10],m=e[11],_=e[12],y=e[13],v=e[14],p=e[15],b=h*v*u-y*f*u+y*l*m-o*v*m-h*l*p+o*f*p,E=_*f*u-d*v*u-_*l*m+a*v*m+d*l*p-a*f*p,w=d*y*u-_*h*u+_*o*m-a*y*m-d*o*p+a*h*p,T=_*h*l-d*y*l-_*o*f+a*y*f+d*o*v-a*h*v,R=n*b+i*E+r*w+s*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=b*P,e[1]=(y*f*s-h*v*s-y*r*m+i*v*m+h*r*p-i*f*p)*P,e[2]=(o*v*s-y*l*s+y*r*u-i*v*u-o*r*p+i*l*p)*P,e[3]=(h*l*s-o*f*s-h*r*u+i*f*u+o*r*m-i*l*m)*P,e[4]=E*P,e[5]=(d*v*s-_*f*s+_*r*m-n*v*m-d*r*p+n*f*p)*P,e[6]=(_*l*s-a*v*s-_*r*u+n*v*u+a*r*p-n*l*p)*P,e[7]=(a*f*s-d*l*s+d*r*u-n*f*u-a*r*m+n*l*m)*P,e[8]=w*P,e[9]=(_*h*s-d*y*s-_*i*m+n*y*m+d*i*p-n*h*p)*P,e[10]=(a*y*s-_*o*s+_*i*u-n*y*u-a*i*p+n*o*p)*P,e[11]=(d*o*s-a*h*s-d*i*u+n*h*u+a*i*m-n*o*m)*P,e[12]=T*P,e[13]=(d*y*r-_*h*r+_*i*f-n*y*f-d*i*v+n*h*v)*P,e[14]=(_*o*r-a*y*r-_*i*l+n*y*l+a*i*v-n*o*v)*P,e[15]=(a*h*r-d*o*r+d*i*l-n*h*l-a*i*f+n*o*f)*P,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,d=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,d*o+i,d*l-r*a,0,u*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,d=a+a,h=o+o,f=s*u,m=s*d,_=s*h,y=a*d,v=a*h,p=o*h,b=l*u,E=l*d,w=l*h,T=i.x,R=i.y,P=i.z;return r[0]=(1-(y+p))*T,r[1]=(m+w)*T,r[2]=(_-E)*T,r[3]=0,r[4]=(m-w)*R,r[5]=(1-(f+p))*R,r[6]=(v+b)*R,r[7]=0,r[8]=(_+E)*P,r[9]=(v-b)*P,r[10]=(1-(f+y))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Mr.set(r[0],r[1],r[2]).length();const a=Mr.set(r[4],r[5],r[6]).length(),o=Mr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);const u=1/s,d=1/a,h=1/o;return Ln.elements[0]*=u,Ln.elements[1]*=u,Ln.elements[2]*=u,Ln.elements[4]*=d,Ln.elements[5]*=d,Ln.elements[6]*=d,Ln.elements[8]*=h,Ln.elements[9]*=h,Ln.elements[10]*=h,n.setFromRotationMatrix(Ln),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=ei,l=!1){const u=this.elements,d=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),m=(i+r)/(i-r);let _,y;if(l)_=s/(a-s),y=a*s/(a-s);else if(o===ei)_=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===Ka)_=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=h,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ei,l=!1){const u=this.elements,d=2/(n-e),h=2/(i-r),f=-(n+e)/(n-e),m=-(i+r)/(i-r);let _,y;if(l)_=1/(a-s),y=a/(a-s);else if(o===ei)_=-2/(a-s),y=-(a+s)/(a-s);else if(o===Ka)_=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=h,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=_,u[14]=y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Mr=new W,Ln=new Ft,Gb=new W(0,0,0),Wb=new W(1,1,1),Ti=new W,la=new W,yn=new W,Wd=new Ft,qd=new cr;class ii{constructor(e=0,n=0,i=0,r=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],d=r[9],h=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Wd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return qd.setFromEuler(this),this.setFromQuaternion(qd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class $g{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qb=0;const Xd=new W,Ar=new cr,ui=new Ft,ua=new W,fs=new W,Xb=new W,jb=new cr,jd=new W(1,0,0),Kd=new W(0,1,0),Yd=new W(0,0,1),Zd={type:"added"},Kb={type:"removed"},Cr={type:"childadded",child:null},Lo={type:"childremoved",child:null};class Gt extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qb++}),this.uuid=Jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new W,n=new ii,i=new cr,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ft},normalMatrix:{value:new lt}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $g,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ar.setFromAxisAngle(e,n),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(e,n){return Ar.setFromAxisAngle(e,n),this.quaternion.premultiply(Ar),this}rotateX(e){return this.rotateOnAxis(jd,e)}rotateY(e){return this.rotateOnAxis(Kd,e)}rotateZ(e){return this.rotateOnAxis(Yd,e)}translateOnAxis(e,n){return Xd.copy(e).applyQuaternion(this.quaternion),this.position.add(Xd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(jd,e)}translateY(e){return this.translateOnAxis(Kd,e)}translateZ(e){return this.translateOnAxis(Yd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ua.copy(e):ua.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(fs,ua,this.up):ui.lookAt(ua,fs,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),Ar.setFromRotationMatrix(ui),this.quaternion.premultiply(Ar.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zd),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Kb),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zd),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,e,Xb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,jb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),d=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const u in o){const d=o[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new W(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new W,ci=new W,No=new W,di=new W,Rr=new W,Ir=new W,Jd=new W,Uo=new W,Oo=new W,zo=new W,ko=new kt,Fo=new kt,Bo=new kt;class Hn{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Nn.subVectors(e,n),r.cross(Nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Nn.subVectors(r,n),ci.subVectors(i,n),No.subVectors(e,n);const a=Nn.dot(Nn),o=Nn.dot(ci),l=Nn.dot(No),u=ci.dot(ci),d=ci.dot(No),h=a*u-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(u*l-o*d)*f,_=(a*d-o*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,di.x),l.addScaledVector(a,di.y),l.addScaledVector(o,di.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return ko.setScalar(0),Fo.setScalar(0),Bo.setScalar(0),ko.fromBufferAttribute(e,n),Fo.fromBufferAttribute(e,i),Bo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ko,s.x),a.addScaledVector(Fo,s.y),a.addScaledVector(Bo,s.z),a}static isFrontFacing(e,n,i,r){return Nn.subVectors(i,n),ci.subVectors(e,n),Nn.cross(ci).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Nn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Hn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Rr.subVectors(r,i),Ir.subVectors(s,i),Uo.subVectors(e,i);const l=Rr.dot(Uo),u=Ir.dot(Uo);if(l<=0&&u<=0)return n.copy(i);Oo.subVectors(e,r);const d=Rr.dot(Oo),h=Ir.dot(Oo);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*u;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(Rr,a);zo.subVectors(e,s);const m=Rr.dot(zo),_=Ir.dot(zo);if(_>=0&&m<=_)return n.copy(s);const y=m*u-l*_;if(y<=0&&u>=0&&_<=0)return o=u/(u-_),n.copy(i).addScaledVector(Ir,o);const v=d*_-m*h;if(v<=0&&h-d>=0&&m-_>=0)return Jd.subVectors(s,r),o=(h-d)/(h-d+(m-_)),n.copy(r).addScaledVector(Jd,o);const p=1/(v+y+f);return a=y*p,o=f*p,n.copy(i).addScaledVector(Rr,a).addScaledVector(Ir,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},ca={h:0,s:0,l:0};function Ho(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class mt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=bt.workingColorSpace){return this.r=e,this.g=n,this.b=i,bt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=bt.workingColorSpace){if(e=hc(e,1),n=ht(n,0,1),i=ht(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Ho(a,s,e+1/3),this.g=Ho(a,s,e),this.b=Ho(a,s,e-1/3)}return bt.colorSpaceToWorking(this,r),this}setStyle(e,n=Cn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Cn){const i=Lg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return bt.workingToColorSpace(nn.copy(this),e),Math.round(ht(nn.r*255,0,255))*65536+Math.round(ht(nn.g*255,0,255))*256+Math.round(ht(nn.b*255,0,255))}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=bt.workingColorSpace){bt.workingToColorSpace(nn.copy(this),n);const i=nn.r,r=nn.g,s=nn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const d=(o+a)/2;if(o===a)l=0,u=0;else{const h=a-o;switch(u=d<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,n=bt.workingColorSpace){return bt.workingToColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Cn){bt.workingToColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b;return e!==Cn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+n,Mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Mi),e.getHSL(ca);const i=$s(Mi.h,ca.h,n),r=$s(Mi.s,ca.s,n),s=$s(Mi.l,ca.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new mt;mt.NAMES=Lg;let Yb=0;class Qr extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yb++}),this.uuid=Jr(),this.name="",this.type="Material",this.blending=Vr,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tu,this.blendDst=nu,this.blendEquation=er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Od,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(i.blending=this.blending),this.side!==Ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==tu&&(i.blendSrc=this.blendSrc),this.blendDst!==nu&&(i.blendDst=this.blendDst),this.blendEquation!==er&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Od&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mc extends Qr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=yg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new W,da=new ot;let Zb=0;class ti{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=zd,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)da.fromBufferAttribute(this,n),da.applyMatrix3(e),this.setXY(n,da.x,da.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix3(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix4(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyNormalMatrix(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.transformDirection(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ur(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ur(n,this.array)),n}setX(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ur(n,this.array)),n}setY(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ur(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ur(n,this.array)),n}setW(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array),s=ln(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zd&&(e.usage=this.usage),e}}class Ng extends ti{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ug extends ti{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Sn extends ti{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Jb=0;const Mn=new Ft,Vo=new Gt,Pr=new W,xn=new Gs,ps=new Gs,Zt=new W;class Xn extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jb++}),this.uuid=Jr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pg(e)?Ug:Ng)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new lt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,n,i){return Mn.makeTranslation(e,n,i),this.applyMatrix4(Mn),this}scale(e,n,i){return Mn.makeScale(e,n,i),this.applyMatrix4(Mn),this}lookAt(e){return Vo.lookAt(e),Vo.updateMatrix(),this.applyMatrix4(Vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Sn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ps.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(xn.min,ps.min),xn.expandByPoint(Zt),Zt.addVectors(xn.max,ps.max),xn.expandByPoint(Zt)):(xn.expandByPoint(ps.min),xn.expandByPoint(ps.max))}xn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Zt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,d=o.count;u<d;u++)Zt.fromBufferAttribute(o,u),l&&(Pr.fromBufferAttribute(e,u),Zt.add(Pr)),r=Math.max(r,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let $=0;$<i.count;$++)o[$]=new W,l[$]=new W;const u=new W,d=new W,h=new W,f=new ot,m=new ot,_=new ot,y=new W,v=new W;function p($,A,C){u.fromBufferAttribute(i,$),d.fromBufferAttribute(i,A),h.fromBufferAttribute(i,C),f.fromBufferAttribute(s,$),m.fromBufferAttribute(s,A),_.fromBufferAttribute(s,C),d.sub(u),h.sub(u),m.sub(f),_.sub(f);const U=1/(m.x*_.y-_.x*m.y);isFinite(U)&&(y.copy(d).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(U),v.copy(h).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(U),o[$].add(y),o[A].add(y),o[C].add(y),l[$].add(v),l[A].add(v),l[C].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let $=0,A=b.length;$<A;++$){const C=b[$],U=C.start,z=C.count;for(let V=U,k=U+z;V<k;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const E=new W,w=new W,T=new W,R=new W;function P($){T.fromBufferAttribute(r,$),R.copy(T);const A=o[$];E.copy(A),E.sub(T.multiplyScalar(T.dot(A))).normalize(),w.crossVectors(R,A);const U=w.dot(l[$])<0?-1:1;a.setXYZW($,E.x,E.y,E.z,U)}for(let $=0,A=b.length;$<A;++$){const C=b[$],U=C.start,z=C.count;for(let V=U,k=U+z;V<k;V+=3)P(e.getX(V+0)),P(e.getX(V+1)),P(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ti(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new W,s=new W,a=new W,o=new W,l=new W,u=new W,d=new W,h=new W;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),y=e.getX(f+1),v=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,v),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,v),o.add(d),l.add(d),u.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(v,u.x,u.y,u.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Zt.fromBufferAttribute(e,n),Zt.normalize(),e.setXYZ(n,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,l){const u=o.array,d=o.itemSize,h=o.normalized,f=new u.constructor(l.length*d);let m=0,_=0;for(let y=0,v=l.length;y<v;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*d;for(let p=0;p<d;p++)f[_++]=u[m++]}return new ti(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Xn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let d=0,h=u.length;d<h;d++){const f=u[d],m=e(f,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let h=0,f=u.length;h<f;h++){const m=u[h];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const s=e.morphAttributes;for(const u in s){const d=[],h=s[u];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,d=a.length;u<d;u++){const h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qd=new Ft,Wi=new pc,ha=new lo,eh=new W,fa=new W,pa=new W,ma=new W,Go=new W,ga=new W,th=new W,_a=new W;class fn extends Gt{constructor(e=new Xn,n=new mc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ga.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const d=o[l],h=s[l];d!==0&&(Go.fromBufferAttribute(h,e),a?ga.addScaledVector(Go,d):ga.addScaledVector(Go.sub(n),d))}n.add(ga)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ha.copy(i.boundingSphere),ha.applyMatrix4(s),Wi.copy(e.ray).recast(e.near),!(ha.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(ha,eh)===null||Wi.origin.distanceToSquared(eh)>(e.far-e.near)**2))&&(Qd.copy(s).invert(),Wi.copy(e.ray).applyMatrix4(Qd),!(i.boundingBox!==null&&Wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Wi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=f.length;_<y;_++){const v=f[_],p=a[v.materialIndex],b=Math.max(v.start,m.start),E=Math.min(o.count,Math.min(v.start+v.count,m.start+m.count));for(let w=b,T=E;w<T;w+=3){const R=o.getX(w),P=o.getX(w+1),$=o.getX(w+2);r=va(this,p,e,i,u,d,h,R,P,$),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let v=_,p=y;v<p;v+=3){const b=o.getX(v),E=o.getX(v+1),w=o.getX(v+2);r=va(this,a,e,i,u,d,h,b,E,w),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=f.length;_<y;_++){const v=f[_],p=a[v.materialIndex],b=Math.max(v.start,m.start),E=Math.min(l.count,Math.min(v.start+v.count,m.start+m.count));for(let w=b,T=E;w<T;w+=3){const R=w,P=w+1,$=w+2;r=va(this,p,e,i,u,d,h,R,P,$),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let v=_,p=y;v<p;v+=3){const b=v,E=v+1,w=v+2;r=va(this,a,e,i,u,d,h,b,E,w),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function Qb(t,e,n,i,r,s,a,o){let l;if(e.side===pn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ui,o),l===null)return null;_a.copy(o),_a.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(_a);return u<n.near||u>n.far?null:{distance:u,point:_a.clone(),object:t}}function va(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,fa),t.getVertexPosition(l,pa),t.getVertexPosition(u,ma);const d=Qb(t,e,n,i,fa,pa,ma,th);if(d){const h=new W;Hn.getBarycoord(th,fa,pa,ma,h),r&&(d.uv=Hn.getInterpolatedAttribute(r,o,l,u,h,new ot)),s&&(d.uv1=Hn.getInterpolatedAttribute(s,o,l,u,h,new ot)),a&&(d.normal=Hn.getInterpolatedAttribute(a,o,l,u,h,new W),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new W,materialIndex:0};Hn.getNormal(fa,pa,ma,f.normal),d.face=f,d.barycoord=h}return d}class Ni extends Xn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],d=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Sn(u,3)),this.setAttribute("normal",new Sn(d,3)),this.setAttribute("uv",new Sn(h,2));function _(y,v,p,b,E,w,T,R,P,$,A){const C=w/P,U=T/$,z=w/2,V=T/2,k=R/2,K=P+1,G=$+1;let Z=0,X=0;const te=new W;for(let _e=0;_e<G;_e++){const j=_e*U-V;for(let le=0;le<K;le++){const Ee=le*C-z;te[y]=Ee*b,te[v]=j*E,te[p]=k,u.push(te.x,te.y,te.z),te[y]=0,te[v]=0,te[p]=R>0?1:-1,d.push(te.x,te.y,te.z),h.push(le/P),h.push(1-_e/$),Z+=1}}for(let _e=0;_e<$;_e++)for(let j=0;j<P;j++){const le=f+j+K*_e,Ee=f+j+K*(_e+1),He=f+(j+1)+K*(_e+1),J=f+(j+1)+K*_e;l.push(le,Ee,J),l.push(Ee,He,J),X+=6}o.addGroup(m,X,A),m+=X,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Kr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function un(t){const e={};for(let n=0;n<t.length;n++){const i=Kr(t[n]);for(const r in i)e[r]=i[r]}return e}function ew(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Og(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const tw={clone:Kr,merge:un};var nw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends Qr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nw,this.fragmentShader=iw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Kr(e.uniforms),this.uniformsGroups=ew(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class zg extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new W,nh=new ot,ih=new ot;class Rn extends zg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ks*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,n){return this.getViewBounds(e,nh,ih),n.subVectors(ih,nh)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ds*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Dr=-90,$r=1;class rw extends Gt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(Dr,$r,e,n);r.layers=this.layers,this.add(r);const s=new Rn(Dr,$r,e,n);s.layers=this.layers,this.add(s);const a=new Rn(Dr,$r,e,n);a.layers=this.layers,this.add(a);const o=new Rn(Dr,$r,e,n);o.layers=this.layers,this.add(o);const l=new Rn(Dr,$r,e,n);l.layers=this.layers,this.add(l);const u=new Rn(Dr,$r,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ka)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class kg extends mn{constructor(e=[],n=qr,i,r,s,a,o,l,u,d){super(e,n,i,r,s,a,o,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sw extends dr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new kg(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ni(5,5,5),s=new Oi({name:"CubemapFromEquirect",uniforms:Kr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:$i});s.uniforms.tEquirect.value=n;const a=new fn(r,s),o=n.minFilter;return n.minFilter===ar&&(n.minFilter=Qn),new rw(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}class zr extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aw={type:"move"};class Wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const y of e.hand.values()){const v=n.getJointPose(y,i),p=this._getHandJoint(u,y);v!==null&&(p.matrix.fromArray(v.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=v.radius),p.visible=v!==null}const d=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,_=.005;u.inputState.pinching&&f>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(aw)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new zr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class gc{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new mt(e),this.near=n,this.far=i}clone(){return new gc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ow extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const qo=new W,lw=new W,uw=new lt;class Pi{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=qo.subVectors(i,n).cross(lw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(qo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||uw.getNormalMatrix(e),r=this.coplanarPoint(qo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qi=new lo,cw=new ot(.5,.5),ya=new W;class _c{constructor(e=new Pi,n=new Pi,i=new Pi,r=new Pi,s=new Pi,a=new Pi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ei,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],d=s[4],h=s[5],f=s[6],m=s[7],_=s[8],y=s[9],v=s[10],p=s[11],b=s[12],E=s[13],w=s[14],T=s[15];if(r[0].setComponents(u-a,m-d,p-_,T-b).normalize(),r[1].setComponents(u+a,m+d,p+_,T+b).normalize(),r[2].setComponents(u+o,m+h,p+y,T+E).normalize(),r[3].setComponents(u-o,m-h,p-y,T-E).normalize(),i)r[4].setComponents(l,f,v,w).normalize(),r[5].setComponents(u-l,m-f,p-v,T-w).normalize();else if(r[4].setComponents(u-l,m-f,p-v,T-w).normalize(),n===ei)r[5].setComponents(u+l,m+f,p+v,T+w).normalize();else if(n===Ka)r[5].setComponents(l,f,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){qi.center.set(0,0,0);const n=cw.distanceTo(e.center);return qi.radius=.7071067811865476+n,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ya.x=r.normal.x>0?e.max.x:e.min.x,ya.y=r.normal.y>0?e.max.y:e.min.y,ya.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ya)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vc extends Qr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Za=new W,Ja=new W,rh=new Ft,ms=new pc,xa=new lo,Xo=new W,sh=new W;class Fg extends Gt{constructor(e=new Xn,n=new vc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Za.fromBufferAttribute(n,r-1),Ja.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Za.distanceTo(Ja);e.setAttribute("lineDistance",new Sn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xa.copy(i.boundingSphere),xa.applyMatrix4(r),xa.radius+=s,e.ray.intersectsSphere(xa)===!1)return;rh.copy(r).invert(),ms.copy(e.ray).applyMatrix4(rh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,d=i.index,f=i.attributes.position;if(d!==null){const m=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let y=m,v=_-1;y<v;y+=u){const p=d.getX(y),b=d.getX(y+1),E=ba(this,e,ms,l,p,b,y);E&&n.push(E)}if(this.isLineLoop){const y=d.getX(_-1),v=d.getX(m),p=ba(this,e,ms,l,y,v,_-1);p&&n.push(p)}}else{const m=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let y=m,v=_-1;y<v;y+=u){const p=ba(this,e,ms,l,y,y+1,y);p&&n.push(p)}if(this.isLineLoop){const y=ba(this,e,ms,l,_-1,m,_-1);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ba(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(Za.fromBufferAttribute(o,r),Ja.fromBufferAttribute(o,s),n.distanceSqToSegment(Za,Ja,Xo,sh)>i)return;Xo.applyMatrix4(t.matrixWorld);const u=e.ray.origin.distanceTo(Xo);if(!(u<e.near||u>e.far))return{distance:u,point:sh.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}const ah=new W,oh=new W;class dw extends Fg{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)ah.fromBufferAttribute(n,r),oh.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ah.distanceTo(oh);e.setAttribute("lineDistance",new Sn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bg extends mn{constructor(e,n,i=ur,r,s,a,o=Wn,l=Wn,u,d=Os,h=1){if(d!==Os&&d!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:h};super(f,r,s,a,o,l,d,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Hg extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yc extends Xn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const d=[],h=[],f=[],m=[];let _=0;const y=[],v=i/2;let p=0;b(),a===!1&&(e>0&&E(!0),n>0&&E(!1)),this.setIndex(d),this.setAttribute("position",new Sn(h,3)),this.setAttribute("normal",new Sn(f,3)),this.setAttribute("uv",new Sn(m,2));function b(){const w=new W,T=new W;let R=0;const P=(n-e)/i;for(let $=0;$<=s;$++){const A=[],C=$/s,U=C*(n-e)+e;for(let z=0;z<=r;z++){const V=z/r,k=V*l+o,K=Math.sin(k),G=Math.cos(k);T.x=U*K,T.y=-C*i+v,T.z=U*G,h.push(T.x,T.y,T.z),w.set(K,P,G).normalize(),f.push(w.x,w.y,w.z),m.push(V,1-C),A.push(_++)}y.push(A)}for(let $=0;$<r;$++)for(let A=0;A<s;A++){const C=y[A][$],U=y[A+1][$],z=y[A+1][$+1],V=y[A][$+1];(e>0||A!==0)&&(d.push(C,U,V),R+=3),(n>0||A!==s-1)&&(d.push(U,z,V),R+=3)}u.addGroup(p,R,0),p+=R}function E(w){const T=_,R=new ot,P=new W;let $=0;const A=w===!0?e:n,C=w===!0?1:-1;for(let z=1;z<=r;z++)h.push(0,v*C,0),f.push(0,C,0),m.push(.5,.5),_++;const U=_;for(let z=0;z<=r;z++){const k=z/r*l+o,K=Math.cos(k),G=Math.sin(k);P.x=A*G,P.y=v*C,P.z=A*K,h.push(P.x,P.y,P.z),f.push(0,C,0),R.x=K*.5+.5,R.y=G*.5*C+.5,m.push(R.x,R.y),_++}for(let z=0;z<r;z++){const V=T+z,k=U+z;w===!0?d.push(k,k+1,V):d.push(k+1,k,V),$+=3}u.addGroup(p,$,w===!0?1:2),p+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xc extends yc{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new xc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ws extends Xn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,d=l+1,h=e/o,f=n/l,m=[],_=[],y=[],v=[];for(let p=0;p<d;p++){const b=p*f-a;for(let E=0;E<u;E++){const w=E*h-s;_.push(w,-b,0),y.push(0,0,1),v.push(E/o),v.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const E=b+u*p,w=b+u*(p+1),T=b+1+u*(p+1),R=b+1+u*p;m.push(E,w,R),m.push(w,T,R)}this.setIndex(m),this.setAttribute("position",new Sn(_,3)),this.setAttribute("normal",new Sn(y,3)),this.setAttribute("uv",new Sn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ws(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ga extends Qr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rg,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hw extends Qr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ub,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fw extends Qr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Vg extends Gt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class pw extends Vg{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new mt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const jo=new Ft,lh=new W,uh=new W;class mw{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _c,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;lh.setFromMatrixPosition(e.matrixWorld),n.position.copy(lh),uh.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(uh),n.updateMatrixWorld(),jo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jo,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(jo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Gg extends zg{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class gw extends mw{constructor(){super(new Gg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _w extends Vg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new gw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class vw extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class yw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}class ch{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ht(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ht(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const dh=new W;let wa,Ko;class xw extends Gt{constructor(e=new W(0,0,1),n=new W(0,0,0),i=1,r=16776960,s=i*.2,a=s*.2){super(),this.type="ArrowHelper",wa===void 0&&(wa=new Xn,wa.setAttribute("position",new Sn([0,0,0,0,1,0],3)),Ko=new xc(.5,1,5,1),Ko.translate(0,-.5,0)),this.position.copy(n),this.line=new Fg(wa,new vc({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new fn(Ko,new mc({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{dh.set(e.z,0,-e.x).normalize();const n=Math.acos(e.y);this.quaternion.setFromAxisAngle(dh,n)}}setLength(e,n=e*.2,i=n*.2){this.line.scale.set(1,Math.max(1e-4,e-n),1),this.line.updateMatrix(),this.cone.scale.set(i,n,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class bw extends mr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function hh(t,e,n,i){const r=ww(i);switch(n){case Tg:return t*e;case Ag:return t*e/r.components*r.byteLength;case uc:return t*e/r.components*r.byteLength;case Cg:return t*e*2/r.components*r.byteLength;case cc:return t*e*2/r.components*r.byteLength;case Mg:return t*e*3/r.components*r.byteLength;case Gn:return t*e*4/r.components*r.byteLength;case dc:return t*e*4/r.components*r.byteLength;case Fa:case Ba:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ha:case Va:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case mu:case _u:return Math.max(t,16)*Math.max(e,8)/4;case pu:case gu:return Math.max(t,8)*Math.max(e,8)/2;case vu:case yu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case xu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Su:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Eu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Tu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Mu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Au:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Cu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ru:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Iu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Pu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Du:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case $u:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Lu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Nu:case Uu:case Ou:return Math.ceil(t/4)*Math.ceil(e/4)*16;case zu:case ku:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Fu:case Bu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ww(t){switch(t){case ni:case bg:return{byteLength:1,components:1};case Ns:case wg:case Vs:return{byteLength:2,components:1};case oc:case lc:return{byteLength:2,components:4};case ur:case ac:case gi:return{byteLength:4,components:1};case Sg:case Eg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wg(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Sw(t){const e=new WeakMap;function n(o,l){const u=o.array,d=o.usage,h=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,d),o.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,u){const d=l.array,h=l.updateRanges;if(t.bindBuffer(u,o),h.length===0)t.bufferSubData(u,0,d);else{h.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<h.length;m++){const _=h[f],y=h[m];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++f,h[f]=y)}h.length=f+1;for(let m=0,_=h.length;m<_;m++){const y=h[m];t.bufferSubData(u,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var Ew=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Aw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Iw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$w=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ow=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Fw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ww=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Kw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eS="gl_FragColor = linearToOutputTexel( gl_FragColor );",tS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,iS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,oS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_S=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,SS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ES=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,TS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,MS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,IS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,PS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$S=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,US=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,FS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,HS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,VS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,XS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,QS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,aE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_E=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ME=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,IE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,PE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,HE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,GE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,WE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,JE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,t1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,n1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:Ew,alphahash_pars_fragment:Tw,alphamap_fragment:Mw,alphamap_pars_fragment:Aw,alphatest_fragment:Cw,alphatest_pars_fragment:Rw,aomap_fragment:Iw,aomap_pars_fragment:Pw,batching_pars_vertex:Dw,batching_vertex:$w,begin_vertex:Lw,beginnormal_vertex:Nw,bsdfs:Uw,iridescence_fragment:Ow,bumpmap_pars_fragment:zw,clipping_planes_fragment:kw,clipping_planes_pars_fragment:Fw,clipping_planes_pars_vertex:Bw,clipping_planes_vertex:Hw,color_fragment:Vw,color_pars_fragment:Gw,color_pars_vertex:Ww,color_vertex:qw,common:Xw,cube_uv_reflection_fragment:jw,defaultnormal_vertex:Kw,displacementmap_pars_vertex:Yw,displacementmap_vertex:Zw,emissivemap_fragment:Jw,emissivemap_pars_fragment:Qw,colorspace_fragment:eS,colorspace_pars_fragment:tS,envmap_fragment:nS,envmap_common_pars_fragment:iS,envmap_pars_fragment:rS,envmap_pars_vertex:sS,envmap_physical_pars_fragment:gS,envmap_vertex:aS,fog_vertex:oS,fog_pars_vertex:lS,fog_fragment:uS,fog_pars_fragment:cS,gradientmap_pars_fragment:dS,lightmap_pars_fragment:hS,lights_lambert_fragment:fS,lights_lambert_pars_fragment:pS,lights_pars_begin:mS,lights_toon_fragment:_S,lights_toon_pars_fragment:vS,lights_phong_fragment:yS,lights_phong_pars_fragment:xS,lights_physical_fragment:bS,lights_physical_pars_fragment:wS,lights_fragment_begin:SS,lights_fragment_maps:ES,lights_fragment_end:TS,logdepthbuf_fragment:MS,logdepthbuf_pars_fragment:AS,logdepthbuf_pars_vertex:CS,logdepthbuf_vertex:RS,map_fragment:IS,map_pars_fragment:PS,map_particle_fragment:DS,map_particle_pars_fragment:$S,metalnessmap_fragment:LS,metalnessmap_pars_fragment:NS,morphinstance_vertex:US,morphcolor_vertex:OS,morphnormal_vertex:zS,morphtarget_pars_vertex:kS,morphtarget_vertex:FS,normal_fragment_begin:BS,normal_fragment_maps:HS,normal_pars_fragment:VS,normal_pars_vertex:GS,normal_vertex:WS,normalmap_pars_fragment:qS,clearcoat_normal_fragment_begin:XS,clearcoat_normal_fragment_maps:jS,clearcoat_pars_fragment:KS,iridescence_pars_fragment:YS,opaque_fragment:ZS,packing:JS,premultiplied_alpha_fragment:QS,project_vertex:eE,dithering_fragment:tE,dithering_pars_fragment:nE,roughnessmap_fragment:iE,roughnessmap_pars_fragment:rE,shadowmap_pars_fragment:sE,shadowmap_pars_vertex:aE,shadowmap_vertex:oE,shadowmask_pars_fragment:lE,skinbase_vertex:uE,skinning_pars_vertex:cE,skinning_vertex:dE,skinnormal_vertex:hE,specularmap_fragment:fE,specularmap_pars_fragment:pE,tonemapping_fragment:mE,tonemapping_pars_fragment:gE,transmission_fragment:_E,transmission_pars_fragment:vE,uv_pars_fragment:yE,uv_pars_vertex:xE,uv_vertex:bE,worldpos_vertex:wE,background_vert:SE,background_frag:EE,backgroundCube_vert:TE,backgroundCube_frag:ME,cube_vert:AE,cube_frag:CE,depth_vert:RE,depth_frag:IE,distanceRGBA_vert:PE,distanceRGBA_frag:DE,equirect_vert:$E,equirect_frag:LE,linedashed_vert:NE,linedashed_frag:UE,meshbasic_vert:OE,meshbasic_frag:zE,meshlambert_vert:kE,meshlambert_frag:FE,meshmatcap_vert:BE,meshmatcap_frag:HE,meshnormal_vert:VE,meshnormal_frag:GE,meshphong_vert:WE,meshphong_frag:qE,meshphysical_vert:XE,meshphysical_frag:jE,meshtoon_vert:KE,meshtoon_frag:YE,points_vert:ZE,points_frag:JE,shadow_vert:QE,shadow_frag:e1,sprite_vert:t1,sprite_frag:n1},Ce={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Jn={basic:{uniforms:un([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:un([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new mt(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:un([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:un([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:un([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new mt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:un([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:un([Ce.points,Ce.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:un([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:un([Ce.common,Ce.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:un([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:un([Ce.sprite,Ce.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:un([Ce.common,Ce.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:un([Ce.lights,Ce.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Jn.physical={uniforms:un([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Sa={r:0,b:0,g:0},Xi=new ii,i1=new Ft;function r1(t,e,n,i,r,s,a){const o=new mt(0);let l=s===!0?0:1,u,d,h=null,f=0,m=null;function _(E){let w=E.isScene===!0?E.background:null;return w&&w.isTexture&&(w=(E.backgroundBlurriness>0?n:e).get(w)),w}function y(E){let w=!1;const T=_(E);T===null?p(o,l):T&&T.isColor&&(p(T,1),w=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(E,w){const T=_(w);T&&(T.isCubeTexture||T.mapping===oo)?(d===void 0&&(d=new fn(new Ni(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:Kr(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,P,$){this.matrixWorld.copyPosition($.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Xi.copy(w.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),d.material.uniforms.envMap.value=T,d.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(i1.makeRotationFromEuler(Xi)),d.material.toneMapped=bt.getTransfer(T.colorSpace)!==Ct,(h!==T||f!==T.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,h=T,f=T.version,m=t.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null)):T&&T.isTexture&&(u===void 0&&(u=new fn(new Ws(2,2),new Oi({name:"BackgroundMaterial",uniforms:Kr(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=T,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.toneMapped=bt.getTransfer(T.colorSpace)!==Ct,T.matrixAutoUpdate===!0&&T.updateMatrix(),u.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||f!==T.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,h=T,f=T.version,m=t.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null))}function p(E,w){E.getRGB(Sa,Og(t)),i.buffers.color.setClear(Sa.r,Sa.g,Sa.b,w,a)}function b(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,w=1){o.set(E),l=w,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:y,addToRenderList:v,dispose:b}}function s1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(C,U,z,V,k){let K=!1;const G=h(V,z,U);s!==G&&(s=G,u(s.object)),K=m(C,V,z,k),K&&_(C,V,z,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,w(C,U,z,V),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function u(C){return t.bindVertexArray(C)}function d(C){return t.deleteVertexArray(C)}function h(C,U,z){const V=z.wireframe===!0;let k=i[C.id];k===void 0&&(k={},i[C.id]=k);let K=k[U.id];K===void 0&&(K={},k[U.id]=K);let G=K[V];return G===void 0&&(G=f(l()),K[V]=G),G}function f(C){const U=[],z=[],V=[];for(let k=0;k<n;k++)U[k]=0,z[k]=0,V[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:V,object:C,attributes:{},index:null}}function m(C,U,z,V){const k=s.attributes,K=U.attributes;let G=0;const Z=z.getAttributes();for(const X in Z)if(Z[X].location>=0){const _e=k[X];let j=K[X];if(j===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(j=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(j=C.instanceColor)),_e===void 0||_e.attribute!==j||j&&_e.data!==j.data)return!0;G++}return s.attributesNum!==G||s.index!==V}function _(C,U,z,V){const k={},K=U.attributes;let G=0;const Z=z.getAttributes();for(const X in Z)if(Z[X].location>=0){let _e=K[X];_e===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(_e=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(_e=C.instanceColor));const j={};j.attribute=_e,_e&&_e.data&&(j.data=_e.data),k[X]=j,G++}s.attributes=k,s.attributesNum=G,s.index=V}function y(){const C=s.newAttributes;for(let U=0,z=C.length;U<z;U++)C[U]=0}function v(C){p(C,0)}function p(C,U){const z=s.newAttributes,V=s.enabledAttributes,k=s.attributeDivisors;z[C]=1,V[C]===0&&(t.enableVertexAttribArray(C),V[C]=1),k[C]!==U&&(t.vertexAttribDivisor(C,U),k[C]=U)}function b(){const C=s.newAttributes,U=s.enabledAttributes;for(let z=0,V=U.length;z<V;z++)U[z]!==C[z]&&(t.disableVertexAttribArray(z),U[z]=0)}function E(C,U,z,V,k,K,G){G===!0?t.vertexAttribIPointer(C,U,z,k,K):t.vertexAttribPointer(C,U,z,V,k,K)}function w(C,U,z,V){y();const k=V.attributes,K=z.getAttributes(),G=U.defaultAttributeValues;for(const Z in K){const X=K[Z];if(X.location>=0){let te=k[Z];if(te===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(te=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(te=C.instanceColor)),te!==void 0){const _e=te.normalized,j=te.itemSize,le=e.get(te);if(le===void 0)continue;const Ee=le.buffer,He=le.type,J=le.bytesPerElement,Q=He===t.INT||He===t.UNSIGNED_INT||te.gpuType===ac;if(te.isInterleavedBufferAttribute){const fe=te.data,we=fe.stride,Ie=te.offset;if(fe.isInstancedInterleavedBuffer){for(let Te=0;Te<X.locationSize;Te++)p(X.location+Te,fe.meshPerAttribute);C.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Te=0;Te<X.locationSize;Te++)v(X.location+Te);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let Te=0;Te<X.locationSize;Te++)E(X.location+Te,j/X.locationSize,He,_e,we*J,(Ie+j/X.locationSize*Te)*J,Q)}else{if(te.isInstancedBufferAttribute){for(let fe=0;fe<X.locationSize;fe++)p(X.location+fe,te.meshPerAttribute);C.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let fe=0;fe<X.locationSize;fe++)v(X.location+fe);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let fe=0;fe<X.locationSize;fe++)E(X.location+fe,j/X.locationSize,He,_e,j*J,j/X.locationSize*fe*J,Q)}}else if(G!==void 0){const _e=G[Z];if(_e!==void 0)switch(_e.length){case 2:t.vertexAttrib2fv(X.location,_e);break;case 3:t.vertexAttrib3fv(X.location,_e);break;case 4:t.vertexAttrib4fv(X.location,_e);break;default:t.vertexAttrib1fv(X.location,_e)}}}}b()}function T(){$();for(const C in i){const U=i[C];for(const z in U){const V=U[z];for(const k in V)d(V[k].object),delete V[k];delete U[z]}delete i[C]}}function R(C){if(i[C.id]===void 0)return;const U=i[C.id];for(const z in U){const V=U[z];for(const k in V)d(V[k].object),delete V[k];delete U[z]}delete i[C.id]}function P(C){for(const U in i){const z=i[U];if(z[C.id]===void 0)continue;const V=z[C.id];for(const k in V)d(V[k].object),delete V[k];delete z[C.id]}}function $(){A(),a=!0,s!==r&&(s=r,u(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:$,resetDefaultState:A,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:v,disableUnusedAttributes:b}}function a1(t,e,n){let i;function r(u){i=u}function s(u,d){t.drawArrays(i,u,d),n.update(d,i,1)}function a(u,d,h){h!==0&&(t.drawArraysInstanced(i,u,d,h),n.update(d,i,h))}function o(u,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=d[_];n.update(m,i,1)}function l(u,d,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<u.length;_++)a(u[_],d[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,d,0,f,0,h);let _=0;for(let y=0;y<h;y++)_+=d[y]*f[y];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function o1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==Gn&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const $=P===Vs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ni&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==gi&&!$)}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const d=l(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const h=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),b=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),w=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:w,vertexTextures:T,maxSamples:R}}function l1(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Pi,o=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,y=h.clipIntersection,v=h.clipShadows,p=t.get(h);if(!r||_===null||_.length===0||s&&!v)s?d(null):u();else{const b=s?0:i,E=b*4;let w=p.clippingState||null;l.value=w,w=d(_,f,E,m);for(let T=0;T!==E;++T)w[T]=n[T];p.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,m,_){const y=h!==null?h.length:0;let v=null;if(y!==0){if(v=l.value,_!==!0||v===null){const p=m+y*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(v===null||v.length<p)&&(v=new Float32Array(p));for(let E=0,w=m;E!==y;++E,w+=4)a.copy(h[E]).applyMatrix4(b,o),a.normal.toArray(v,w),v[w+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,v}}function u1(t){let e=new WeakMap;function n(a,o){return o===cu?a.mapping=qr:o===du&&(a.mapping=Xr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===cu||o===du)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new sw(l.height);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const kr=4,fh=[.125,.215,.35,.446,.526,.582],tr=20,Yo=new Gg,ph=new mt;let Zo=null,Jo=0,Qo=0,el=!1;const Qi=(1+Math.sqrt(5))/2,Lr=1/Qi,mh=[new W(-Qi,Lr,0),new W(Qi,Lr,0),new W(-Lr,0,Qi),new W(Lr,0,Qi),new W(0,Qi,-Lr),new W(0,Qi,Lr),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],c1=new W;class gh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=c1}=s;Zo=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zo,Jo,Qo),this._renderer.xr.enabled=el,e.scissorTest=!1,Ea(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===qr||e.mapping===Xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zo=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:Vs,format:Gn,colorSpace:jr,depthBuffer:!1},r=_h(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_h(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=d1(s)),this._blurMaterial=h1(s,e,n)}return r}_compileMaterial(e){const n=new fn(this._lodPlanes[0],e);this._renderer.compile(n,Yo)}_sceneToCubeUV(e,n,i,r,s){const l=new Rn(90,1,n,i),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,m=h.toneMapping;h.getClearColor(ph),h.toneMapping=Li,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const y=new mc({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),v=new fn(new Ni,y);let p=!1;const b=e.background;b?b.isColor&&(y.color.copy(b),e.background=null,p=!0):(y.color.copy(ph),p=!0);for(let E=0;E<6;E++){const w=E%3;w===0?(l.up.set(0,u[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[E],s.y,s.z)):w===1?(l.up.set(0,0,u[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[E],s.z)):(l.up.set(0,u[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[E]));const T=this._cubeSize;Ea(r,w*T,E>2?T:0,T,T),h.setRenderTarget(r),p&&h.render(v,l),h.render(e,l)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=m,h.autoClear=f,e.background=b}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===qr||e.mapping===Xr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new fn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ea(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Yo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=mh[(r-s-1)%mh.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new fn(this._lodPlanes[r],u),f=u.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*tr-1),y=s/_,v=isFinite(s)?1+Math.floor(d*y):tr;v>tr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${tr}`);const p=[];let b=0;for(let P=0;P<tr;++P){const $=P/y,A=Math.exp(-$*$/2);p.push(A),P===0?b+=A:P<v&&(b+=2*A)}for(let P=0;P<p.length;P++)p[P]=p[P]/b;f.envMap.value=e.texture,f.samples.value=v,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=_,f.mipInt.value=E-i;const w=this._sizeLods[r],T=3*w*(r>E-kr?r-E+kr:0),R=4*(this._cubeSize-w);Ea(n,T,R,3*w,2*w),l.setRenderTarget(n),l.render(h,Yo)}}function d1(t){const e=[],n=[],i=[];let r=t;const s=t-kr+1+fh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-kr?l=fh[a-t+kr-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),d=-u,h=1+u,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,_=6,y=3,v=2,p=1,b=new Float32Array(y*_*m),E=new Float32Array(v*_*m),w=new Float32Array(p*_*m);for(let R=0;R<m;R++){const P=R%3*2/3-1,$=R>2?0:-1,A=[P,$,0,P+2/3,$,0,P+2/3,$+1,0,P,$,0,P+2/3,$+1,0,P,$+1,0];b.set(A,y*_*R),E.set(f,v*_*R);const C=[R,R,R,R,R,R];w.set(C,p*_*R)}const T=new Xn;T.setAttribute("position",new ti(b,y)),T.setAttribute("uv",new ti(E,v)),T.setAttribute("faceIndex",new ti(w,p)),e.push(T),r>kr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function _h(t,e,n){const i=new dr(t,e,n);return i.texture.mapping=oo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ea(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function h1(t,e,n){const i=new Float32Array(tr),r=new W(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function vh(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function yh(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function bc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function f1(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===cu||l===du,d=l===qr||l===Xr;if(u||d){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new gh(t)),h=u?n.fromEquirectangular(o,h):n.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return u&&m&&m.height>0||d&&m&&r(m)?(n===null&&(n=new gh(t)),h=u?n.fromEquirectangular(o):n.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const u=6;for(let d=0;d<u;d++)o[d]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function p1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Fs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function m1(t,e,n,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const m in f)e.update(f[m],t.ARRAY_BUFFER)}function u(h){const f=[],m=h.index,_=h.attributes.position;let y=0;if(m!==null){const b=m.array;y=m.version;for(let E=0,w=b.length;E<w;E+=3){const T=b[E+0],R=b[E+1],P=b[E+2];f.push(T,R,R,P,P,T)}}else if(_!==void 0){const b=_.array;y=_.version;for(let E=0,w=b.length/3-1;E<w;E+=3){const T=E+0,R=E+1,P=E+2;f.push(T,R,R,P,P,T)}}else return;const v=new(Pg(f)?Ug:Ng)(f,1);v.version=y;const p=s.get(h);p&&e.remove(p),s.set(h,v)}function d(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function g1(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,m){t.drawElements(i,m,s,f*a),n.update(m,i,1)}function u(f,m,_){_!==0&&(t.drawElementsInstanced(i,m,s,f*a,_),n.update(m,i,_))}function d(f,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,_);let v=0;for(let p=0;p<_;p++)v+=m[p];n.update(v,i,1)}function h(f,m,_,y){if(_===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let p=0;p<f.length;p++)u(f[p]/a,m[p],y[p]);else{v.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,y,0,_);let p=0;for(let b=0;b<_;b++)p+=m[b]*y[b];n.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function _1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function v1(t,e,n){const i=new WeakMap,r=new kt;function s(a,o,l){const u=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let A=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,v=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let E=0;m===!0&&(E=1),_===!0&&(E=2),y===!0&&(E=3);let w=o.attributes.position.count*E,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const R=new Float32Array(w*T*4*h),P=new Dg(R,w,T,h);P.type=gi,P.needsUpdate=!0;const $=E*4;for(let C=0;C<h;C++){const U=v[C],z=p[C],V=b[C],k=w*T*4*C;for(let K=0;K<U.count;K++){const G=K*$;m===!0&&(r.fromBufferAttribute(U,K),R[k+G+0]=r.x,R[k+G+1]=r.y,R[k+G+2]=r.z,R[k+G+3]=0),_===!0&&(r.fromBufferAttribute(z,K),R[k+G+4]=r.x,R[k+G+5]=r.y,R[k+G+6]=r.z,R[k+G+7]=0),y===!0&&(r.fromBufferAttribute(V,K),R[k+G+8]=r.x,R[k+G+9]=r.y,R[k+G+10]=r.z,R[k+G+11]=V.itemSize===4?r.w:1)}}f={count:h,texture:P,size:new ot(w,T)},i.set(o,f),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let m=0;for(let y=0;y<u.length;y++)m+=u[y];const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function y1(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}const qg=new mn,xh=new Bg(1,1),Xg=new Dg,jg=new Hb,Kg=new kg,bh=[],wh=[],Sh=new Float32Array(16),Eh=new Float32Array(9),Th=new Float32Array(4);function es(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=bh[r];if(s===void 0&&(s=new Float32Array(r),bh[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Yt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function uo(t,e){let n=wh[e];n===void 0&&(n=new Int32Array(e),wh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function x1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function b1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;t.uniform2fv(this.addr,e),Yt(n,e)}}function w1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Kt(n,e))return;t.uniform3fv(this.addr,e),Yt(n,e)}}function S1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;t.uniform4fv(this.addr,e),Yt(n,e)}}function E1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Yt(n,e)}else{if(Kt(n,i))return;Th.set(i),t.uniformMatrix2fv(this.addr,!1,Th),Yt(n,i)}}function T1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Yt(n,e)}else{if(Kt(n,i))return;Eh.set(i),t.uniformMatrix3fv(this.addr,!1,Eh),Yt(n,i)}}function M1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Yt(n,e)}else{if(Kt(n,i))return;Sh.set(i),t.uniformMatrix4fv(this.addr,!1,Sh),Yt(n,i)}}function A1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function C1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;t.uniform2iv(this.addr,e),Yt(n,e)}}function R1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;t.uniform3iv(this.addr,e),Yt(n,e)}}function I1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;t.uniform4iv(this.addr,e),Yt(n,e)}}function P1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function D1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;t.uniform2uiv(this.addr,e),Yt(n,e)}}function $1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;t.uniform3uiv(this.addr,e),Yt(n,e)}}function L1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;t.uniform4uiv(this.addr,e),Yt(n,e)}}function N1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(xh.compareFunction=Ig,s=xh):s=qg,n.setTexture2D(e||s,r)}function U1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||jg,r)}function O1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Kg,r)}function z1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Xg,r)}function k1(t){switch(t){case 5126:return x1;case 35664:return b1;case 35665:return w1;case 35666:return S1;case 35674:return E1;case 35675:return T1;case 35676:return M1;case 5124:case 35670:return A1;case 35667:case 35671:return C1;case 35668:case 35672:return R1;case 35669:case 35673:return I1;case 5125:return P1;case 36294:return D1;case 36295:return $1;case 36296:return L1;case 35678:case 36198:case 36298:case 36306:case 35682:return N1;case 35679:case 36299:case 36307:return U1;case 35680:case 36300:case 36308:case 36293:return O1;case 36289:case 36303:case 36311:case 36292:return z1}}function F1(t,e){t.uniform1fv(this.addr,e)}function B1(t,e){const n=es(e,this.size,2);t.uniform2fv(this.addr,n)}function H1(t,e){const n=es(e,this.size,3);t.uniform3fv(this.addr,n)}function V1(t,e){const n=es(e,this.size,4);t.uniform4fv(this.addr,n)}function G1(t,e){const n=es(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function W1(t,e){const n=es(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function q1(t,e){const n=es(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function X1(t,e){t.uniform1iv(this.addr,e)}function j1(t,e){t.uniform2iv(this.addr,e)}function K1(t,e){t.uniform3iv(this.addr,e)}function Y1(t,e){t.uniform4iv(this.addr,e)}function Z1(t,e){t.uniform1uiv(this.addr,e)}function J1(t,e){t.uniform2uiv(this.addr,e)}function Q1(t,e){t.uniform3uiv(this.addr,e)}function eT(t,e){t.uniform4uiv(this.addr,e)}function tT(t,e,n){const i=this.cache,r=e.length,s=uo(n,r);Kt(i,s)||(t.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||qg,s[a])}function nT(t,e,n){const i=this.cache,r=e.length,s=uo(n,r);Kt(i,s)||(t.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||jg,s[a])}function iT(t,e,n){const i=this.cache,r=e.length,s=uo(n,r);Kt(i,s)||(t.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Kg,s[a])}function rT(t,e,n){const i=this.cache,r=e.length,s=uo(n,r);Kt(i,s)||(t.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Xg,s[a])}function sT(t){switch(t){case 5126:return F1;case 35664:return B1;case 35665:return H1;case 35666:return V1;case 35674:return G1;case 35675:return W1;case 35676:return q1;case 5124:case 35670:return X1;case 35667:case 35671:return j1;case 35668:case 35672:return K1;case 35669:case 35673:return Y1;case 5125:return Z1;case 36294:return J1;case 36295:return Q1;case 36296:return eT;case 35678:case 36198:case 36298:case 36306:case 35682:return tT;case 35679:case 36299:case 36307:return nT;case 35680:case 36300:case 36308:case 36293:return iT;case 36289:case 36303:case 36311:case 36292:return rT}}class aT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=k1(n.type)}}class oT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=sT(n.type)}}class lT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const tl=/(\w+)(\])?(\[|\.)?/g;function Mh(t,e){t.seq.push(e),t.map[e.id]=e}function uT(t,e,n){const i=t.name,r=i.length;for(tl.lastIndex=0;;){const s=tl.exec(i),a=tl.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){Mh(n,u===void 0?new aT(o,t,e):new oT(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new lT(o),Mh(n,h)),n=h}}}class Wa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);uT(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Ah(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const cT=37297;let dT=0;function hT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Ch=new lt;function fT(t){bt._getMatrix(Ch,bt.workingColorSpace,t);const e=`mat3( ${Ch.elements.map(n=>n.toFixed(4))} )`;switch(bt.getTransfer(t)){case ja:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Rh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+hT(t.getShaderSource(e),o)}else return s}function pT(t,e){const n=fT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function mT(t,e){let n;switch(e){case tb:n="Linear";break;case nb:n="Reinhard";break;case ib:n="Cineon";break;case rb:n="ACESFilmic";break;case ab:n="AgX";break;case ob:n="Neutral";break;case sb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ta=new W;function gT(){bt.getLuminanceCoefficients(Ta);const t=Ta.x.toFixed(4),e=Ta.y.toFixed(4),n=Ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _T(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function vT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function yT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function As(t){return t!==""}function Ih(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ph(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hu(t){return t.replace(xT,wT)}const bT=new Map;function wT(t,e){let n=ut[e];if(n===void 0){const i=bT.get(e);if(i!==void 0)n=ut[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hu(n)}const ST=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dh(t){return t.replace(ST,ET)}function ET(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $h(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function TT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===vg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Lx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function MT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case qr:case Xr:e="ENVMAP_TYPE_CUBE";break;case oo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function AT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Xr:e="ENVMAP_MODE_REFRACTION";break}return e}function CT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case yg:e="ENVMAP_BLENDING_MULTIPLY";break;case Qx:e="ENVMAP_BLENDING_MIX";break;case eb:e="ENVMAP_BLENDING_ADD";break}return e}function RT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function IT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=TT(n),u=MT(n),d=AT(n),h=CT(n),f=RT(n),m=_T(n),_=vT(s),y=r.createProgram();let v,p,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(As).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(As).join(`
`),p.length>0&&(p+=`
`)):(v=[$h(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),p=[$h(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Li?"#define TONE_MAPPING":"",n.toneMapping!==Li?ut.tonemapping_pars_fragment:"",n.toneMapping!==Li?mT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,pT("linearToOutputTexel",n.outputColorSpace),gT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(As).join(`
`)),a=Hu(a),a=Ih(a,n),a=Ph(a,n),o=Hu(o),o=Ih(o,n),o=Ph(o,n),a=Dh(a),o=Dh(o),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,v=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",n.glslVersion===kd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===kd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=b+v+a,w=b+p+o,T=Ah(r,r.VERTEX_SHADER,E),R=Ah(r,r.FRAGMENT_SHADER,w);r.attachShader(y,T),r.attachShader(y,R),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function P(U){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(y)||"",V=r.getShaderInfoLog(T)||"",k=r.getShaderInfoLog(R)||"",K=z.trim(),G=V.trim(),Z=k.trim();let X=!0,te=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,T,R);else{const _e=Rh(r,T,"vertex"),j=Rh(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+K+`
`+_e+`
`+j)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(G===""||Z==="")&&(te=!1);te&&(U.diagnostics={runnable:X,programLog:K,vertexShader:{log:G,prefix:v},fragmentShader:{log:Z,prefix:p}})}r.deleteShader(T),r.deleteShader(R),$=new Wa(r,y),A=yT(r,y)}let $;this.getUniforms=function(){return $===void 0&&P(this),$};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(y,cT)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=dT++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=R,this}let PT=0;class DT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new $T(e),n.set(e,i)),i}}class $T{constructor(e){this.id=PT++,this.code=e,this.usedTimes=0}}function LT(t,e,n,i,r,s,a){const o=new $g,l=new DT,u=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(A){return u.add(A),A===0?"uv":`uv${A}`}function v(A,C,U,z,V){const k=z.fog,K=V.geometry,G=A.isMeshStandardMaterial?z.environment:null,Z=(A.isMeshStandardMaterial?n:e).get(A.envMap||G),X=Z&&Z.mapping===oo?Z.image.height:null,te=_[A.type];A.precision!==null&&(m=r.getMaxPrecision(A.precision),m!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",m,"instead."));const _e=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,j=_e!==void 0?_e.length:0;let le=0;K.morphAttributes.position!==void 0&&(le=1),K.morphAttributes.normal!==void 0&&(le=2),K.morphAttributes.color!==void 0&&(le=3);let Ee,He,J,Q;if(te){const vt=Jn[te];Ee=vt.vertexShader,He=vt.fragmentShader}else Ee=A.vertexShader,He=A.fragmentShader,l.update(A),J=l.getVertexShaderID(A),Q=l.getFragmentShaderID(A);const fe=t.getRenderTarget(),we=t.state.buffers.depth.getReversed(),Ie=V.isInstancedMesh===!0,Te=V.isBatchedMesh===!0,ct=!!A.map,zt=!!A.matcap,O=!!Z,St=!!A.aoMap,it=!!A.lightMap,qe=!!A.bumpMap,ke=!!A.normalMap,At=!!A.displacementMap,Fe=!!A.emissiveMap,rt=!!A.metalnessMap,Bt=!!A.roughnessMap,Et=A.anisotropy>0,L=A.clearcoat>0,I=A.dispersion>0,Y=A.iridescence>0,ue=A.sheen>0,pe=A.transmission>0,se=Et&&!!A.anisotropyMap,Ge=L&&!!A.clearcoatMap,be=L&&!!A.clearcoatNormalMap,Be=L&&!!A.clearcoatRoughnessMap,Ve=Y&&!!A.iridescenceMap,ye=Y&&!!A.iridescenceThicknessMap,Re=ue&&!!A.sheenColorMap,Je=ue&&!!A.sheenRoughnessMap,We=!!A.specularMap,Ae=!!A.specularColorMap,st=!!A.specularIntensityMap,F=pe&&!!A.transmissionMap,xe=pe&&!!A.thicknessMap,Se=!!A.gradientMap,Le=!!A.alphaMap,ce=A.alphaTest>0,he=!!A.alphaHash,Ue=!!A.extensions;let tt=Li;A.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(tt=t.toneMapping);const Mt={shaderID:te,shaderType:A.type,shaderName:A.name,vertexShader:Ee,fragmentShader:He,defines:A.defines,customVertexShaderID:J,customFragmentShaderID:Q,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:m,batching:Te,batchingColor:Te&&V._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&V.instanceColor!==null,instancingMorph:Ie&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:fe===null?t.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:jr,alphaToCoverage:!!A.alphaToCoverage,map:ct,matcap:zt,envMap:O,envMapMode:O&&Z.mapping,envMapCubeUVHeight:X,aoMap:St,lightMap:it,bumpMap:qe,normalMap:ke,displacementMap:f&&At,emissiveMap:Fe,normalMapObjectSpace:ke&&A.normalMapType===db,normalMapTangentSpace:ke&&A.normalMapType===Rg,metalnessMap:rt,roughnessMap:Bt,anisotropy:Et,anisotropyMap:se,clearcoat:L,clearcoatMap:Ge,clearcoatNormalMap:be,clearcoatRoughnessMap:Be,dispersion:I,iridescence:Y,iridescenceMap:Ve,iridescenceThicknessMap:ye,sheen:ue,sheenColorMap:Re,sheenRoughnessMap:Je,specularMap:We,specularColorMap:Ae,specularIntensityMap:st,transmission:pe,transmissionMap:F,thicknessMap:xe,gradientMap:Se,opaque:A.transparent===!1&&A.blending===Vr&&A.alphaToCoverage===!1,alphaMap:Le,alphaTest:ce,alphaHash:he,combine:A.combine,mapUv:ct&&y(A.map.channel),aoMapUv:St&&y(A.aoMap.channel),lightMapUv:it&&y(A.lightMap.channel),bumpMapUv:qe&&y(A.bumpMap.channel),normalMapUv:ke&&y(A.normalMap.channel),displacementMapUv:At&&y(A.displacementMap.channel),emissiveMapUv:Fe&&y(A.emissiveMap.channel),metalnessMapUv:rt&&y(A.metalnessMap.channel),roughnessMapUv:Bt&&y(A.roughnessMap.channel),anisotropyMapUv:se&&y(A.anisotropyMap.channel),clearcoatMapUv:Ge&&y(A.clearcoatMap.channel),clearcoatNormalMapUv:be&&y(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&y(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&y(A.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&y(A.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&y(A.sheenColorMap.channel),sheenRoughnessMapUv:Je&&y(A.sheenRoughnessMap.channel),specularMapUv:We&&y(A.specularMap.channel),specularColorMapUv:Ae&&y(A.specularColorMap.channel),specularIntensityMapUv:st&&y(A.specularIntensityMap.channel),transmissionMapUv:F&&y(A.transmissionMap.channel),thicknessMapUv:xe&&y(A.thicknessMap.channel),alphaMapUv:Le&&y(A.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ke||Et),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!K.attributes.uv&&(ct||Le),fog:!!k,useFog:A.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:we,skinning:V.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:le,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:tt,decodeVideoTexture:ct&&A.map.isVideoTexture===!0&&bt.getTransfer(A.map.colorSpace)===Ct,decodeVideoTextureEmissive:Fe&&A.emissiveMap.isVideoTexture===!0&&bt.getTransfer(A.emissiveMap.colorSpace)===Ct,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===pi,flipSided:A.side===pn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ue&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&A.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Mt.vertexUv1s=u.has(1),Mt.vertexUv2s=u.has(2),Mt.vertexUv3s=u.has(3),u.clear(),Mt}function p(A){const C=[];if(A.shaderID?C.push(A.shaderID):(C.push(A.customVertexShaderID),C.push(A.customFragmentShaderID)),A.defines!==void 0)for(const U in A.defines)C.push(U),C.push(A.defines[U]);return A.isRawShaderMaterial===!1&&(b(C,A),E(C,A),C.push(t.outputColorSpace)),C.push(A.customProgramCacheKey),C.join()}function b(A,C){A.push(C.precision),A.push(C.outputColorSpace),A.push(C.envMapMode),A.push(C.envMapCubeUVHeight),A.push(C.mapUv),A.push(C.alphaMapUv),A.push(C.lightMapUv),A.push(C.aoMapUv),A.push(C.bumpMapUv),A.push(C.normalMapUv),A.push(C.displacementMapUv),A.push(C.emissiveMapUv),A.push(C.metalnessMapUv),A.push(C.roughnessMapUv),A.push(C.anisotropyMapUv),A.push(C.clearcoatMapUv),A.push(C.clearcoatNormalMapUv),A.push(C.clearcoatRoughnessMapUv),A.push(C.iridescenceMapUv),A.push(C.iridescenceThicknessMapUv),A.push(C.sheenColorMapUv),A.push(C.sheenRoughnessMapUv),A.push(C.specularMapUv),A.push(C.specularColorMapUv),A.push(C.specularIntensityMapUv),A.push(C.transmissionMapUv),A.push(C.thicknessMapUv),A.push(C.combine),A.push(C.fogExp2),A.push(C.sizeAttenuation),A.push(C.morphTargetsCount),A.push(C.morphAttributeCount),A.push(C.numDirLights),A.push(C.numPointLights),A.push(C.numSpotLights),A.push(C.numSpotLightMaps),A.push(C.numHemiLights),A.push(C.numRectAreaLights),A.push(C.numDirLightShadows),A.push(C.numPointLightShadows),A.push(C.numSpotLightShadows),A.push(C.numSpotLightShadowsWithMaps),A.push(C.numLightProbes),A.push(C.shadowMapType),A.push(C.toneMapping),A.push(C.numClippingPlanes),A.push(C.numClipIntersection),A.push(C.depthPacking)}function E(A,C){o.disableAll(),C.supportsVertexTextures&&o.enable(0),C.instancing&&o.enable(1),C.instancingColor&&o.enable(2),C.instancingMorph&&o.enable(3),C.matcap&&o.enable(4),C.envMap&&o.enable(5),C.normalMapObjectSpace&&o.enable(6),C.normalMapTangentSpace&&o.enable(7),C.clearcoat&&o.enable(8),C.iridescence&&o.enable(9),C.alphaTest&&o.enable(10),C.vertexColors&&o.enable(11),C.vertexAlphas&&o.enable(12),C.vertexUv1s&&o.enable(13),C.vertexUv2s&&o.enable(14),C.vertexUv3s&&o.enable(15),C.vertexTangents&&o.enable(16),C.anisotropy&&o.enable(17),C.alphaHash&&o.enable(18),C.batching&&o.enable(19),C.dispersion&&o.enable(20),C.batchingColor&&o.enable(21),C.gradientMap&&o.enable(22),A.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),A.push(o.mask)}function w(A){const C=_[A.type];let U;if(C){const z=Jn[C];U=tw.clone(z.uniforms)}else U=A.uniforms;return U}function T(A,C){let U;for(let z=0,V=d.length;z<V;z++){const k=d[z];if(k.cacheKey===C){U=k,++U.usedTimes;break}}return U===void 0&&(U=new IT(t,C,A,s),d.push(U)),U}function R(A){if(--A.usedTimes===0){const C=d.indexOf(A);d[C]=d[d.length-1],d.pop(),A.destroy()}}function P(A){l.remove(A)}function $(){l.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:w,acquireProgram:T,releaseProgram:R,releaseShaderCache:P,programs:d,dispose:$}}function NT(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function UT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Lh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Nh(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,f,m,_,y,v){let p=t[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:y,group:v},t[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=m,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=y,p.group=v),e++,p}function o(h,f,m,_,y,v){const p=a(h,f,m,_,y,v);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):n.push(p)}function l(h,f,m,_,y,v){const p=a(h,f,m,_,y,v);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):n.unshift(p)}function u(h,f){n.length>1&&n.sort(h||UT),i.length>1&&i.sort(f||Lh),r.length>1&&r.sort(f||Lh)}function d(){for(let h=e,f=t.length;h<f;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:u}}function OT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Nh,t.set(i,[a])):r>=s.length?(a=new Nh,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function zT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new mt};break;case"SpotLight":n={position:new W,direction:new W,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new mt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":n={color:new mt,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function kT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let FT=0;function BT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function HT(t){const e=new zT,n=kT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new W);const r=new W,s=new Ft,a=new Ft;function o(u){let d=0,h=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let m=0,_=0,y=0,v=0,p=0,b=0,E=0,w=0,T=0,R=0,P=0;u.sort(BT);for(let A=0,C=u.length;A<C;A++){const U=u[A],z=U.color,V=U.intensity,k=U.distance,K=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=z.r*V,h+=z.g*V,f+=z.b*V;else if(U.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(U.sh.coefficients[G],V);P++}else if(U.isDirectionalLight){const G=e.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const Z=U.shadow,X=n.get(U);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,i.directionalShadow[m]=X,i.directionalShadowMap[m]=K,i.directionalShadowMatrix[m]=U.shadow.matrix,b++}i.directional[m]=G,m++}else if(U.isSpotLight){const G=e.get(U);G.position.setFromMatrixPosition(U.matrixWorld),G.color.copy(z).multiplyScalar(V),G.distance=k,G.coneCos=Math.cos(U.angle),G.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),G.decay=U.decay,i.spot[y]=G;const Z=U.shadow;if(U.map&&(i.spotLightMap[T]=U.map,T++,Z.updateMatrices(U),U.castShadow&&R++),i.spotLightMatrix[y]=Z.matrix,U.castShadow){const X=n.get(U);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,i.spotShadow[y]=X,i.spotShadowMap[y]=K,w++}y++}else if(U.isRectAreaLight){const G=e.get(U);G.color.copy(z).multiplyScalar(V),G.halfWidth.set(U.width*.5,0,0),G.halfHeight.set(0,U.height*.5,0),i.rectArea[v]=G,v++}else if(U.isPointLight){const G=e.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity),G.distance=U.distance,G.decay=U.decay,U.castShadow){const Z=U.shadow,X=n.get(U);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,X.shadowCameraNear=Z.camera.near,X.shadowCameraFar=Z.camera.far,i.pointShadow[_]=X,i.pointShadowMap[_]=K,i.pointShadowMatrix[_]=U.shadow.matrix,E++}i.point[_]=G,_++}else if(U.isHemisphereLight){const G=e.get(U);G.skyColor.copy(U.color).multiplyScalar(V),G.groundColor.copy(U.groundColor).multiplyScalar(V),i.hemi[p]=G,p++}}v>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const $=i.hash;($.directionalLength!==m||$.pointLength!==_||$.spotLength!==y||$.rectAreaLength!==v||$.hemiLength!==p||$.numDirectionalShadows!==b||$.numPointShadows!==E||$.numSpotShadows!==w||$.numSpotMaps!==T||$.numLightProbes!==P)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=v,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=w+T-R,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,$.directionalLength=m,$.pointLength=_,$.spotLength=y,$.rectAreaLength=v,$.hemiLength=p,$.numDirectionalShadows=b,$.numPointShadows=E,$.numSpotShadows=w,$.numSpotMaps=T,$.numLightProbes=P,i.version=FT++)}function l(u,d){let h=0,f=0,m=0,_=0,y=0;const v=d.matrixWorldInverse;for(let p=0,b=u.length;p<b;p++){const E=u[p];if(E.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(v),h++}else if(E.isSpotLight){const w=i.spot[m];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(v),w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(v),m++}else if(E.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(v),a.identity(),s.copy(E.matrixWorld),s.premultiply(v),a.extractRotation(s),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(v),f++}else if(E.isHemisphereLight){const w=i.hemi[y];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(v),y++}}}return{setup:o,setupView:l,state:i}}function Uh(t){const e=new HT(t),n=[],i=[];function r(d){u.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function a(d){i.push(d)}function o(){e.setup(n)}function l(d){e.setupView(n,d)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function VT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Uh(t),e.set(r,[o])):s>=a.length?(o=new Uh(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const GT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qT(t,e,n){let i=new _c;const r=new ot,s=new ot,a=new kt,o=new hw({depthPacking:cb}),l=new fw,u={},d=n.maxTextureSize,h={[Ui]:pn,[pn]:Ui,[pi]:pi},f=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:GT,fragmentShader:WT}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Xn;_.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new fn(_,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vg;let p=this.type;this.render=function(R,P,$){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||R.length===0)return;const A=t.getRenderTarget(),C=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),z=t.state;z.setBlending($i),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const V=p!==fi&&this.type===fi,k=p===fi&&this.type!==fi;for(let K=0,G=R.length;K<G;K++){const Z=R[K],X=Z.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const te=X.getFrameExtents();if(r.multiply(te),s.copy(X.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/te.x),r.x=s.x*te.x,X.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/te.y),r.y=s.y*te.y,X.mapSize.y=s.y)),X.map===null||V===!0||k===!0){const j=this.type!==fi?{minFilter:Wn,magFilter:Wn}:{};X.map!==null&&X.map.dispose(),X.map=new dr(r.x,r.y,j),X.map.texture.name=Z.name+".shadowMap",X.camera.updateProjectionMatrix()}t.setRenderTarget(X.map),t.clear();const _e=X.getViewportCount();for(let j=0;j<_e;j++){const le=X.getViewport(j);a.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),z.viewport(a),X.updateMatrices(Z,j),i=X.getFrustum(),w(P,$,X.camera,Z,this.type)}X.isPointLightShadow!==!0&&this.type===fi&&b(X,$),X.needsUpdate=!1}p=this.type,v.needsUpdate=!1,t.setRenderTarget(A,C,U)};function b(R,P){const $=e.update(y);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new dr(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(P,null,$,f,y,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(P,null,$,m,y,null)}function E(R,P,$,A){let C=null;const U=$.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)C=U;else if(C=$.isPointLight===!0?l:o,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const z=C.uuid,V=P.uuid;let k=u[z];k===void 0&&(k={},u[z]=k);let K=k[V];K===void 0&&(K=C.clone(),k[V]=K,P.addEventListener("dispose",T)),C=K}if(C.visible=P.visible,C.wireframe=P.wireframe,A===fi?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:h[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,$.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const z=t.properties.get(C);z.light=$}return C}function w(R,P,$,A,C){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&C===fi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,R.matrixWorld);const V=e.update(R),k=R.material;if(Array.isArray(k)){const K=V.groups;for(let G=0,Z=K.length;G<Z;G++){const X=K[G],te=k[X.materialIndex];if(te&&te.visible){const _e=E(R,te,A,C);R.onBeforeShadow(t,R,P,$,V,_e,X),t.renderBufferDirect($,null,V,_e,R,X),R.onAfterShadow(t,R,P,$,V,_e,X)}}}else if(k.visible){const K=E(R,k,A,C);R.onBeforeShadow(t,R,P,$,V,K,null),t.renderBufferDirect($,null,V,K,R,null),R.onAfterShadow(t,R,P,$,V,K,null)}}const z=R.children;for(let V=0,k=z.length;V<k;V++)w(z[V],P,$,A,C)}function T(R){R.target.removeEventListener("dispose",T);for(const $ in u){const A=u[$],C=R.target.uuid;C in A&&(A[C].dispose(),delete A[C])}}}const XT={[iu]:ru,[su]:lu,[au]:uu,[Wr]:ou,[ru]:iu,[lu]:su,[uu]:au,[ou]:Wr};function jT(t,e){function n(){let F=!1;const xe=new kt;let Se=null;const Le=new kt(0,0,0,0);return{setMask:function(ce){Se!==ce&&!F&&(t.colorMask(ce,ce,ce,ce),Se=ce)},setLocked:function(ce){F=ce},setClear:function(ce,he,Ue,tt,Mt){Mt===!0&&(ce*=tt,he*=tt,Ue*=tt),xe.set(ce,he,Ue,tt),Le.equals(xe)===!1&&(t.clearColor(ce,he,Ue,tt),Le.copy(xe))},reset:function(){F=!1,Se=null,Le.set(-1,0,0,0)}}}function i(){let F=!1,xe=!1,Se=null,Le=null,ce=null;return{setReversed:function(he){if(xe!==he){const Ue=e.get("EXT_clip_control");he?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),xe=he;const tt=ce;ce=null,this.setClear(tt)}},getReversed:function(){return xe},setTest:function(he){he?fe(t.DEPTH_TEST):we(t.DEPTH_TEST)},setMask:function(he){Se!==he&&!F&&(t.depthMask(he),Se=he)},setFunc:function(he){if(xe&&(he=XT[he]),Le!==he){switch(he){case iu:t.depthFunc(t.NEVER);break;case ru:t.depthFunc(t.ALWAYS);break;case su:t.depthFunc(t.LESS);break;case Wr:t.depthFunc(t.LEQUAL);break;case au:t.depthFunc(t.EQUAL);break;case ou:t.depthFunc(t.GEQUAL);break;case lu:t.depthFunc(t.GREATER);break;case uu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Le=he}},setLocked:function(he){F=he},setClear:function(he){ce!==he&&(xe&&(he=1-he),t.clearDepth(he),ce=he)},reset:function(){F=!1,Se=null,Le=null,ce=null,xe=!1}}}function r(){let F=!1,xe=null,Se=null,Le=null,ce=null,he=null,Ue=null,tt=null,Mt=null;return{setTest:function(vt){F||(vt?fe(t.STENCIL_TEST):we(t.STENCIL_TEST))},setMask:function(vt){xe!==vt&&!F&&(t.stencilMask(vt),xe=vt)},setFunc:function(vt,Tn,gn){(Se!==vt||Le!==Tn||ce!==gn)&&(t.stencilFunc(vt,Tn,gn),Se=vt,Le=Tn,ce=gn)},setOp:function(vt,Tn,gn){(he!==vt||Ue!==Tn||tt!==gn)&&(t.stencilOp(vt,Tn,gn),he=vt,Ue=Tn,tt=gn)},setLocked:function(vt){F=vt},setClear:function(vt){Mt!==vt&&(t.clearStencil(vt),Mt=vt)},reset:function(){F=!1,xe=null,Se=null,Le=null,ce=null,he=null,Ue=null,tt=null,Mt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let d={},h={},f=new WeakMap,m=[],_=null,y=!1,v=null,p=null,b=null,E=null,w=null,T=null,R=null,P=new mt(0,0,0),$=0,A=!1,C=null,U=null,z=null,V=null,k=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Z=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=Z>=1):X.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=Z>=2);let te=null,_e={};const j=t.getParameter(t.SCISSOR_BOX),le=t.getParameter(t.VIEWPORT),Ee=new kt().fromArray(j),He=new kt().fromArray(le);function J(F,xe,Se,Le){const ce=new Uint8Array(4),he=t.createTexture();t.bindTexture(F,he),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ue=0;Ue<Se;Ue++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(xe,0,t.RGBA,1,1,Le,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(xe+Ue,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return he}const Q={};Q[t.TEXTURE_2D]=J(t.TEXTURE_2D,t.TEXTURE_2D,1),Q[t.TEXTURE_CUBE_MAP]=J(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[t.TEXTURE_2D_ARRAY]=J(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Q[t.TEXTURE_3D]=J(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),fe(t.DEPTH_TEST),a.setFunc(Wr),qe(!1),ke($d),fe(t.CULL_FACE),St($i);function fe(F){d[F]!==!0&&(t.enable(F),d[F]=!0)}function we(F){d[F]!==!1&&(t.disable(F),d[F]=!1)}function Ie(F,xe){return h[F]!==xe?(t.bindFramebuffer(F,xe),h[F]=xe,F===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=xe),F===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=xe),!0):!1}function Te(F,xe){let Se=m,Le=!1;if(F){Se=f.get(xe),Se===void 0&&(Se=[],f.set(xe,Se));const ce=F.textures;if(Se.length!==ce.length||Se[0]!==t.COLOR_ATTACHMENT0){for(let he=0,Ue=ce.length;he<Ue;he++)Se[he]=t.COLOR_ATTACHMENT0+he;Se.length=ce.length,Le=!0}}else Se[0]!==t.BACK&&(Se[0]=t.BACK,Le=!0);Le&&t.drawBuffers(Se)}function ct(F){return _!==F?(t.useProgram(F),_=F,!0):!1}const zt={[er]:t.FUNC_ADD,[Ux]:t.FUNC_SUBTRACT,[Ox]:t.FUNC_REVERSE_SUBTRACT};zt[zx]=t.MIN,zt[kx]=t.MAX;const O={[Fx]:t.ZERO,[Bx]:t.ONE,[Hx]:t.SRC_COLOR,[tu]:t.SRC_ALPHA,[jx]:t.SRC_ALPHA_SATURATE,[qx]:t.DST_COLOR,[Gx]:t.DST_ALPHA,[Vx]:t.ONE_MINUS_SRC_COLOR,[nu]:t.ONE_MINUS_SRC_ALPHA,[Xx]:t.ONE_MINUS_DST_COLOR,[Wx]:t.ONE_MINUS_DST_ALPHA,[Kx]:t.CONSTANT_COLOR,[Yx]:t.ONE_MINUS_CONSTANT_COLOR,[Zx]:t.CONSTANT_ALPHA,[Jx]:t.ONE_MINUS_CONSTANT_ALPHA};function St(F,xe,Se,Le,ce,he,Ue,tt,Mt,vt){if(F===$i){y===!0&&(we(t.BLEND),y=!1);return}if(y===!1&&(fe(t.BLEND),y=!0),F!==Nx){if(F!==v||vt!==A){if((p!==er||w!==er)&&(t.blendEquation(t.FUNC_ADD),p=er,w=er),vt)switch(F){case Vr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ld:t.blendFunc(t.ONE,t.ONE);break;case Nd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ud:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Vr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ld:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Nd:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ud:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}b=null,E=null,T=null,R=null,P.set(0,0,0),$=0,v=F,A=vt}return}ce=ce||xe,he=he||Se,Ue=Ue||Le,(xe!==p||ce!==w)&&(t.blendEquationSeparate(zt[xe],zt[ce]),p=xe,w=ce),(Se!==b||Le!==E||he!==T||Ue!==R)&&(t.blendFuncSeparate(O[Se],O[Le],O[he],O[Ue]),b=Se,E=Le,T=he,R=Ue),(tt.equals(P)===!1||Mt!==$)&&(t.blendColor(tt.r,tt.g,tt.b,Mt),P.copy(tt),$=Mt),v=F,A=!1}function it(F,xe){F.side===pi?we(t.CULL_FACE):fe(t.CULL_FACE);let Se=F.side===pn;xe&&(Se=!Se),qe(Se),F.blending===Vr&&F.transparent===!1?St($i):St(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const Le=F.stencilWrite;o.setTest(Le),Le&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Fe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):we(t.SAMPLE_ALPHA_TO_COVERAGE)}function qe(F){C!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),C=F)}function ke(F){F!==Dx?(fe(t.CULL_FACE),F!==U&&(F===$d?t.cullFace(t.BACK):F===$x?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):we(t.CULL_FACE),U=F}function At(F){F!==z&&(G&&t.lineWidth(F),z=F)}function Fe(F,xe,Se){F?(fe(t.POLYGON_OFFSET_FILL),(V!==xe||k!==Se)&&(t.polygonOffset(xe,Se),V=xe,k=Se)):we(t.POLYGON_OFFSET_FILL)}function rt(F){F?fe(t.SCISSOR_TEST):we(t.SCISSOR_TEST)}function Bt(F){F===void 0&&(F=t.TEXTURE0+K-1),te!==F&&(t.activeTexture(F),te=F)}function Et(F,xe,Se){Se===void 0&&(te===null?Se=t.TEXTURE0+K-1:Se=te);let Le=_e[Se];Le===void 0&&(Le={type:void 0,texture:void 0},_e[Se]=Le),(Le.type!==F||Le.texture!==xe)&&(te!==Se&&(t.activeTexture(Se),te=Se),t.bindTexture(F,xe||Q[F]),Le.type=F,Le.texture=xe)}function L(){const F=_e[te];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function I(){try{t.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{t.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{t.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{t.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{t.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ge(){try{t.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{t.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Be(){try{t.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ve(){try{t.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{t.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Re(F){Ee.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),Ee.copy(F))}function Je(F){He.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),He.copy(F))}function We(F,xe){let Se=u.get(xe);Se===void 0&&(Se=new WeakMap,u.set(xe,Se));let Le=Se.get(F);Le===void 0&&(Le=t.getUniformBlockIndex(xe,F.name),Se.set(F,Le))}function Ae(F,xe){const Le=u.get(xe).get(F);l.get(xe)!==Le&&(t.uniformBlockBinding(xe,Le,F.__bindingPointIndex),l.set(xe,Le))}function st(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},te=null,_e={},h={},f=new WeakMap,m=[],_=null,y=!1,v=null,p=null,b=null,E=null,w=null,T=null,R=null,P=new mt(0,0,0),$=0,A=!1,C=null,U=null,z=null,V=null,k=null,Ee.set(0,0,t.canvas.width,t.canvas.height),He.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:fe,disable:we,bindFramebuffer:Ie,drawBuffers:Te,useProgram:ct,setBlending:St,setMaterial:it,setFlipSided:qe,setCullFace:ke,setLineWidth:At,setPolygonOffset:Fe,setScissorTest:rt,activeTexture:Bt,bindTexture:Et,unbindTexture:L,compressedTexImage2D:I,compressedTexImage3D:Y,texImage2D:Ve,texImage3D:ye,updateUBOMapping:We,uniformBlockBinding:Ae,texStorage2D:be,texStorage3D:Be,texSubImage2D:ue,texSubImage3D:pe,compressedTexSubImage2D:se,compressedTexSubImage3D:Ge,scissor:Re,viewport:Je,reset:st}}function KT(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ot,d=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,I){return m?new OffscreenCanvas(L,I):Ya("canvas")}function y(L,I,Y){let ue=1;const pe=Et(L);if((pe.width>Y||pe.height>Y)&&(ue=Y/Math.max(pe.width,pe.height)),ue<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const se=Math.floor(ue*pe.width),Ge=Math.floor(ue*pe.height);h===void 0&&(h=_(se,Ge));const be=I?_(se,Ge):h;return be.width=se,be.height=Ge,be.getContext("2d").drawImage(L,0,0,se,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+se+"x"+Ge+")."),be}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),L;return L}function v(L){return L.generateMipmaps}function p(L){t.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?t.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(L,I,Y,ue,pe=!1){if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let se=I;if(I===t.RED&&(Y===t.FLOAT&&(se=t.R32F),Y===t.HALF_FLOAT&&(se=t.R16F),Y===t.UNSIGNED_BYTE&&(se=t.R8)),I===t.RED_INTEGER&&(Y===t.UNSIGNED_BYTE&&(se=t.R8UI),Y===t.UNSIGNED_SHORT&&(se=t.R16UI),Y===t.UNSIGNED_INT&&(se=t.R32UI),Y===t.BYTE&&(se=t.R8I),Y===t.SHORT&&(se=t.R16I),Y===t.INT&&(se=t.R32I)),I===t.RG&&(Y===t.FLOAT&&(se=t.RG32F),Y===t.HALF_FLOAT&&(se=t.RG16F),Y===t.UNSIGNED_BYTE&&(se=t.RG8)),I===t.RG_INTEGER&&(Y===t.UNSIGNED_BYTE&&(se=t.RG8UI),Y===t.UNSIGNED_SHORT&&(se=t.RG16UI),Y===t.UNSIGNED_INT&&(se=t.RG32UI),Y===t.BYTE&&(se=t.RG8I),Y===t.SHORT&&(se=t.RG16I),Y===t.INT&&(se=t.RG32I)),I===t.RGB_INTEGER&&(Y===t.UNSIGNED_BYTE&&(se=t.RGB8UI),Y===t.UNSIGNED_SHORT&&(se=t.RGB16UI),Y===t.UNSIGNED_INT&&(se=t.RGB32UI),Y===t.BYTE&&(se=t.RGB8I),Y===t.SHORT&&(se=t.RGB16I),Y===t.INT&&(se=t.RGB32I)),I===t.RGBA_INTEGER&&(Y===t.UNSIGNED_BYTE&&(se=t.RGBA8UI),Y===t.UNSIGNED_SHORT&&(se=t.RGBA16UI),Y===t.UNSIGNED_INT&&(se=t.RGBA32UI),Y===t.BYTE&&(se=t.RGBA8I),Y===t.SHORT&&(se=t.RGBA16I),Y===t.INT&&(se=t.RGBA32I)),I===t.RGB&&(Y===t.UNSIGNED_INT_5_9_9_9_REV&&(se=t.RGB9_E5),Y===t.UNSIGNED_INT_10F_11F_11F_REV&&(se=t.R11F_G11F_B10F)),I===t.RGBA){const Ge=pe?ja:bt.getTransfer(ue);Y===t.FLOAT&&(se=t.RGBA32F),Y===t.HALF_FLOAT&&(se=t.RGBA16F),Y===t.UNSIGNED_BYTE&&(se=Ge===Ct?t.SRGB8_ALPHA8:t.RGBA8),Y===t.UNSIGNED_SHORT_4_4_4_4&&(se=t.RGBA4),Y===t.UNSIGNED_SHORT_5_5_5_1&&(se=t.RGB5_A1)}return(se===t.R16F||se===t.R32F||se===t.RG16F||se===t.RG32F||se===t.RGBA16F||se===t.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function w(L,I){let Y;return L?I===null||I===ur||I===Us?Y=t.DEPTH24_STENCIL8:I===gi?Y=t.DEPTH32F_STENCIL8:I===Ns&&(Y=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===ur||I===Us?Y=t.DEPTH_COMPONENT24:I===gi?Y=t.DEPTH_COMPONENT32F:I===Ns&&(Y=t.DEPTH_COMPONENT16),Y}function T(L,I){return v(L)===!0||L.isFramebufferTexture&&L.minFilter!==Wn&&L.minFilter!==Qn?Math.log2(Math.max(I.width,I.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?I.mipmaps.length:1}function R(L){const I=L.target;I.removeEventListener("dispose",R),$(I),I.isVideoTexture&&d.delete(I)}function P(L){const I=L.target;I.removeEventListener("dispose",P),C(I)}function $(L){const I=i.get(L);if(I.__webglInit===void 0)return;const Y=L.source,ue=f.get(Y);if(ue){const pe=ue[I.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&A(L),Object.keys(ue).length===0&&f.delete(Y)}i.remove(L)}function A(L){const I=i.get(L);t.deleteTexture(I.__webglTexture);const Y=L.source,ue=f.get(Y);delete ue[I.__cacheKey],a.memory.textures--}function C(L){const I=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(I.__webglFramebuffer[ue]))for(let pe=0;pe<I.__webglFramebuffer[ue].length;pe++)t.deleteFramebuffer(I.__webglFramebuffer[ue][pe]);else t.deleteFramebuffer(I.__webglFramebuffer[ue]);I.__webglDepthbuffer&&t.deleteRenderbuffer(I.__webglDepthbuffer[ue])}else{if(Array.isArray(I.__webglFramebuffer))for(let ue=0;ue<I.__webglFramebuffer.length;ue++)t.deleteFramebuffer(I.__webglFramebuffer[ue]);else t.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&t.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&t.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let ue=0;ue<I.__webglColorRenderbuffer.length;ue++)I.__webglColorRenderbuffer[ue]&&t.deleteRenderbuffer(I.__webglColorRenderbuffer[ue]);I.__webglDepthRenderbuffer&&t.deleteRenderbuffer(I.__webglDepthRenderbuffer)}const Y=L.textures;for(let ue=0,pe=Y.length;ue<pe;ue++){const se=i.get(Y[ue]);se.__webglTexture&&(t.deleteTexture(se.__webglTexture),a.memory.textures--),i.remove(Y[ue])}i.remove(L)}let U=0;function z(){U=0}function V(){const L=U;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),U+=1,L}function k(L){const I=[];return I.push(L.wrapS),I.push(L.wrapT),I.push(L.wrapR||0),I.push(L.magFilter),I.push(L.minFilter),I.push(L.anisotropy),I.push(L.internalFormat),I.push(L.format),I.push(L.type),I.push(L.generateMipmaps),I.push(L.premultiplyAlpha),I.push(L.flipY),I.push(L.unpackAlignment),I.push(L.colorSpace),I.join()}function K(L,I){const Y=i.get(L);if(L.isVideoTexture&&rt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Y.__version!==L.version){const ue=L.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Y,L,I);return}}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,Y.__webglTexture,t.TEXTURE0+I)}function G(L,I){const Y=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){Q(Y,L,I);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Y.__webglTexture,t.TEXTURE0+I)}function Z(L,I){const Y=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){Q(Y,L,I);return}n.bindTexture(t.TEXTURE_3D,Y.__webglTexture,t.TEXTURE0+I)}function X(L,I){const Y=i.get(L);if(L.version>0&&Y.__version!==L.version){fe(Y,L,I);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture,t.TEXTURE0+I)}const te={[hu]:t.REPEAT,[sr]:t.CLAMP_TO_EDGE,[fu]:t.MIRRORED_REPEAT},_e={[Wn]:t.NEAREST,[lb]:t.NEAREST_MIPMAP_NEAREST,[na]:t.NEAREST_MIPMAP_LINEAR,[Qn]:t.LINEAR,[Eo]:t.LINEAR_MIPMAP_NEAREST,[ar]:t.LINEAR_MIPMAP_LINEAR},j={[hb]:t.NEVER,[vb]:t.ALWAYS,[fb]:t.LESS,[Ig]:t.LEQUAL,[pb]:t.EQUAL,[_b]:t.GEQUAL,[mb]:t.GREATER,[gb]:t.NOTEQUAL};function le(L,I){if(I.type===gi&&e.has("OES_texture_float_linear")===!1&&(I.magFilter===Qn||I.magFilter===Eo||I.magFilter===na||I.magFilter===ar||I.minFilter===Qn||I.minFilter===Eo||I.minFilter===na||I.minFilter===ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,te[I.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,te[I.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,te[I.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,_e[I.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,_e[I.minFilter]),I.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,j[I.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===Wn||I.minFilter!==na&&I.minFilter!==ar||I.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||i.get(I).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,r.getMaxAnisotropy())),i.get(I).__currentAnisotropy=I.anisotropy}}}function Ee(L,I){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,I.addEventListener("dispose",R));const ue=I.source;let pe=f.get(ue);pe===void 0&&(pe={},f.set(ue,pe));const se=k(I);if(se!==L.__cacheKey){pe[se]===void 0&&(pe[se]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),pe[se].usedTimes++;const Ge=pe[L.__cacheKey];Ge!==void 0&&(pe[L.__cacheKey].usedTimes--,Ge.usedTimes===0&&A(I)),L.__cacheKey=se,L.__webglTexture=pe[se].texture}return Y}function He(L,I,Y){return Math.floor(Math.floor(L/Y)/I)}function J(L,I,Y,ue){const se=L.updateRanges;if(se.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,I.width,I.height,Y,ue,I.data);else{se.sort((ye,Re)=>ye.start-Re.start);let Ge=0;for(let ye=1;ye<se.length;ye++){const Re=se[Ge],Je=se[ye],We=Re.start+Re.count,Ae=He(Je.start,I.width,4),st=He(Re.start,I.width,4);Je.start<=We+1&&Ae===st&&He(Je.start+Je.count-1,I.width,4)===Ae?Re.count=Math.max(Re.count,Je.start+Je.count-Re.start):(++Ge,se[Ge]=Je)}se.length=Ge+1;const be=t.getParameter(t.UNPACK_ROW_LENGTH),Be=t.getParameter(t.UNPACK_SKIP_PIXELS),Ve=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,I.width);for(let ye=0,Re=se.length;ye<Re;ye++){const Je=se[ye],We=Math.floor(Je.start/4),Ae=Math.ceil(Je.count/4),st=We%I.width,F=Math.floor(We/I.width),xe=Ae,Se=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,st),t.pixelStorei(t.UNPACK_SKIP_ROWS,F),n.texSubImage2D(t.TEXTURE_2D,0,st,F,xe,Se,Y,ue,I.data)}L.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,be),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Be),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ve)}}function Q(L,I,Y){let ue=t.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(ue=t.TEXTURE_2D_ARRAY),I.isData3DTexture&&(ue=t.TEXTURE_3D);const pe=Ee(L,I),se=I.source;n.bindTexture(ue,L.__webglTexture,t.TEXTURE0+Y);const Ge=i.get(se);if(se.version!==Ge.__version||pe===!0){n.activeTexture(t.TEXTURE0+Y);const be=bt.getPrimaries(bt.workingColorSpace),Be=I.colorSpace===Di?null:bt.getPrimaries(I.colorSpace),Ve=I.colorSpace===Di||be===Be?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,I.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,I.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let ye=y(I.image,!1,r.maxTextureSize);ye=Bt(I,ye);const Re=s.convert(I.format,I.colorSpace),Je=s.convert(I.type);let We=E(I.internalFormat,Re,Je,I.colorSpace,I.isVideoTexture);le(ue,I);let Ae;const st=I.mipmaps,F=I.isVideoTexture!==!0,xe=Ge.__version===void 0||pe===!0,Se=se.dataReady,Le=T(I,ye);if(I.isDepthTexture)We=w(I.format===zs,I.type),xe&&(F?n.texStorage2D(t.TEXTURE_2D,1,We,ye.width,ye.height):n.texImage2D(t.TEXTURE_2D,0,We,ye.width,ye.height,0,Re,Je,null));else if(I.isDataTexture)if(st.length>0){F&&xe&&n.texStorage2D(t.TEXTURE_2D,Le,We,st[0].width,st[0].height);for(let ce=0,he=st.length;ce<he;ce++)Ae=st[ce],F?Se&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,Ae.width,Ae.height,Re,Je,Ae.data):n.texImage2D(t.TEXTURE_2D,ce,We,Ae.width,Ae.height,0,Re,Je,Ae.data);I.generateMipmaps=!1}else F?(xe&&n.texStorage2D(t.TEXTURE_2D,Le,We,ye.width,ye.height),Se&&J(I,ye,Re,Je)):n.texImage2D(t.TEXTURE_2D,0,We,ye.width,ye.height,0,Re,Je,ye.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){F&&xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Le,We,st[0].width,st[0].height,ye.depth);for(let ce=0,he=st.length;ce<he;ce++)if(Ae=st[ce],I.format!==Gn)if(Re!==null)if(F){if(Se)if(I.layerUpdates.size>0){const Ue=hh(Ae.width,Ae.height,I.format,I.type);for(const tt of I.layerUpdates){const Mt=Ae.data.subarray(tt*Ue/Ae.data.BYTES_PER_ELEMENT,(tt+1)*Ue/Ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,tt,Ae.width,Ae.height,1,Re,Mt)}I.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,Ae.width,Ae.height,ye.depth,Re,Ae.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ce,We,Ae.width,Ae.height,ye.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?Se&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,Ae.width,Ae.height,ye.depth,Re,Je,Ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ce,We,Ae.width,Ae.height,ye.depth,0,Re,Je,Ae.data)}else{F&&xe&&n.texStorage2D(t.TEXTURE_2D,Le,We,st[0].width,st[0].height);for(let ce=0,he=st.length;ce<he;ce++)Ae=st[ce],I.format!==Gn?Re!==null?F?Se&&n.compressedTexSubImage2D(t.TEXTURE_2D,ce,0,0,Ae.width,Ae.height,Re,Ae.data):n.compressedTexImage2D(t.TEXTURE_2D,ce,We,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?Se&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,Ae.width,Ae.height,Re,Je,Ae.data):n.texImage2D(t.TEXTURE_2D,ce,We,Ae.width,Ae.height,0,Re,Je,Ae.data)}else if(I.isDataArrayTexture)if(F){if(xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Le,We,ye.width,ye.height,ye.depth),Se)if(I.layerUpdates.size>0){const ce=hh(ye.width,ye.height,I.format,I.type);for(const he of I.layerUpdates){const Ue=ye.data.subarray(he*ce/ye.data.BYTES_PER_ELEMENT,(he+1)*ce/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,ye.width,ye.height,1,Re,Je,Ue)}I.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Re,Je,ye.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,We,ye.width,ye.height,ye.depth,0,Re,Je,ye.data);else if(I.isData3DTexture)F?(xe&&n.texStorage3D(t.TEXTURE_3D,Le,We,ye.width,ye.height,ye.depth),Se&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Re,Je,ye.data)):n.texImage3D(t.TEXTURE_3D,0,We,ye.width,ye.height,ye.depth,0,Re,Je,ye.data);else if(I.isFramebufferTexture){if(xe)if(F)n.texStorage2D(t.TEXTURE_2D,Le,We,ye.width,ye.height);else{let ce=ye.width,he=ye.height;for(let Ue=0;Ue<Le;Ue++)n.texImage2D(t.TEXTURE_2D,Ue,We,ce,he,0,Re,Je,null),ce>>=1,he>>=1}}else if(st.length>0){if(F&&xe){const ce=Et(st[0]);n.texStorage2D(t.TEXTURE_2D,Le,We,ce.width,ce.height)}for(let ce=0,he=st.length;ce<he;ce++)Ae=st[ce],F?Se&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,Re,Je,Ae):n.texImage2D(t.TEXTURE_2D,ce,We,Re,Je,Ae);I.generateMipmaps=!1}else if(F){if(xe){const ce=Et(ye);n.texStorage2D(t.TEXTURE_2D,Le,We,ce.width,ce.height)}Se&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Re,Je,ye)}else n.texImage2D(t.TEXTURE_2D,0,We,Re,Je,ye);v(I)&&p(ue),Ge.__version=se.version,I.onUpdate&&I.onUpdate(I)}L.__version=I.version}function fe(L,I,Y){if(I.image.length!==6)return;const ue=Ee(L,I),pe=I.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+Y);const se=i.get(pe);if(pe.version!==se.__version||ue===!0){n.activeTexture(t.TEXTURE0+Y);const Ge=bt.getPrimaries(bt.workingColorSpace),be=I.colorSpace===Di?null:bt.getPrimaries(I.colorSpace),Be=I.colorSpace===Di||Ge===be?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,I.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,I.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const Ve=I.isCompressedTexture||I.image[0].isCompressedTexture,ye=I.image[0]&&I.image[0].isDataTexture,Re=[];for(let he=0;he<6;he++)!Ve&&!ye?Re[he]=y(I.image[he],!0,r.maxCubemapSize):Re[he]=ye?I.image[he].image:I.image[he],Re[he]=Bt(I,Re[he]);const Je=Re[0],We=s.convert(I.format,I.colorSpace),Ae=s.convert(I.type),st=E(I.internalFormat,We,Ae,I.colorSpace),F=I.isVideoTexture!==!0,xe=se.__version===void 0||ue===!0,Se=pe.dataReady;let Le=T(I,Je);le(t.TEXTURE_CUBE_MAP,I);let ce;if(Ve){F&&xe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,st,Je.width,Je.height);for(let he=0;he<6;he++){ce=Re[he].mipmaps;for(let Ue=0;Ue<ce.length;Ue++){const tt=ce[Ue];I.format!==Gn?We!==null?F?Se&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue,0,0,tt.width,tt.height,We,tt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue,st,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue,0,0,tt.width,tt.height,We,Ae,tt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue,st,tt.width,tt.height,0,We,Ae,tt.data)}}}else{if(ce=I.mipmaps,F&&xe){ce.length>0&&Le++;const he=Et(Re[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,st,he.width,he.height)}for(let he=0;he<6;he++)if(ye){F?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Re[he].width,Re[he].height,We,Ae,Re[he].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,st,Re[he].width,Re[he].height,0,We,Ae,Re[he].data);for(let Ue=0;Ue<ce.length;Ue++){const Mt=ce[Ue].image[he].image;F?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue+1,0,0,Mt.width,Mt.height,We,Ae,Mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue+1,st,Mt.width,Mt.height,0,We,Ae,Mt.data)}}else{F?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,We,Ae,Re[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,st,We,Ae,Re[he]);for(let Ue=0;Ue<ce.length;Ue++){const tt=ce[Ue];F?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue+1,0,0,We,Ae,tt.image[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue+1,st,We,Ae,tt.image[he])}}}v(I)&&p(t.TEXTURE_CUBE_MAP),se.__version=pe.version,I.onUpdate&&I.onUpdate(I)}L.__version=I.version}function we(L,I,Y,ue,pe,se){const Ge=s.convert(Y.format,Y.colorSpace),be=s.convert(Y.type),Be=E(Y.internalFormat,Ge,be,Y.colorSpace),Ve=i.get(I),ye=i.get(Y);if(ye.__renderTarget=I,!Ve.__hasExternalTextures){const Re=Math.max(1,I.width>>se),Je=Math.max(1,I.height>>se);pe===t.TEXTURE_3D||pe===t.TEXTURE_2D_ARRAY?n.texImage3D(pe,se,Be,Re,Je,I.depth,0,Ge,be,null):n.texImage2D(pe,se,Be,Re,Je,0,Ge,be,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),Fe(I)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ue,pe,ye.__webglTexture,0,At(I)):(pe===t.TEXTURE_2D||pe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ue,pe,ye.__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(L,I,Y){if(t.bindRenderbuffer(t.RENDERBUFFER,L),I.depthBuffer){const ue=I.depthTexture,pe=ue&&ue.isDepthTexture?ue.type:null,se=w(I.stencilBuffer,pe),Ge=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=At(I);Fe(I)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,be,se,I.width,I.height):Y?t.renderbufferStorageMultisample(t.RENDERBUFFER,be,se,I.width,I.height):t.renderbufferStorage(t.RENDERBUFFER,se,I.width,I.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ge,t.RENDERBUFFER,L)}else{const ue=I.textures;for(let pe=0;pe<ue.length;pe++){const se=ue[pe],Ge=s.convert(se.format,se.colorSpace),be=s.convert(se.type),Be=E(se.internalFormat,Ge,be,se.colorSpace),Ve=At(I);Y&&Fe(I)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,Be,I.width,I.height):Fe(I)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ve,Be,I.width,I.height):t.renderbufferStorage(t.RENDERBUFFER,Be,I.width,I.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Te(L,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ue=i.get(I.depthTexture);ue.__renderTarget=I,(!ue.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),K(I.depthTexture,0);const pe=ue.__webglTexture,se=At(I);if(I.depthTexture.format===Os)Fe(I)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,pe,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,pe,0);else if(I.depthTexture.format===zs)Fe(I)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,pe,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function ct(L){const I=i.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==L.depthTexture){const ue=L.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),ue){const pe=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,ue.removeEventListener("dispose",pe)};ue.addEventListener("dispose",pe),I.__depthDisposeCallback=pe}I.__boundDepthTexture=ue}if(L.depthTexture&&!I.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");const ue=L.texture.mipmaps;ue&&ue.length>0?Te(I.__webglFramebuffer[0],L):Te(I.__webglFramebuffer,L)}else if(Y){I.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(n.bindFramebuffer(t.FRAMEBUFFER,I.__webglFramebuffer[ue]),I.__webglDepthbuffer[ue]===void 0)I.__webglDepthbuffer[ue]=t.createRenderbuffer(),Ie(I.__webglDepthbuffer[ue],L,!1);else{const pe=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=I.__webglDepthbuffer[ue];t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,se)}}else{const ue=L.texture.mipmaps;if(ue&&ue.length>0?n.bindFramebuffer(t.FRAMEBUFFER,I.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=t.createRenderbuffer(),Ie(I.__webglDepthbuffer,L,!1);else{const pe=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=I.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,se)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function zt(L,I,Y){const ue=i.get(L);I!==void 0&&we(ue.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Y!==void 0&&ct(L)}function O(L){const I=L.texture,Y=i.get(L),ue=i.get(I);L.addEventListener("dispose",P);const pe=L.textures,se=L.isWebGLCubeRenderTarget===!0,Ge=pe.length>1;if(Ge||(ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture()),ue.__version=I.version,a.memory.textures++),se){Y.__webglFramebuffer=[];for(let be=0;be<6;be++)if(I.mipmaps&&I.mipmaps.length>0){Y.__webglFramebuffer[be]=[];for(let Be=0;Be<I.mipmaps.length;Be++)Y.__webglFramebuffer[be][Be]=t.createFramebuffer()}else Y.__webglFramebuffer[be]=t.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){Y.__webglFramebuffer=[];for(let be=0;be<I.mipmaps.length;be++)Y.__webglFramebuffer[be]=t.createFramebuffer()}else Y.__webglFramebuffer=t.createFramebuffer();if(Ge)for(let be=0,Be=pe.length;be<Be;be++){const Ve=i.get(pe[be]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=t.createTexture(),a.memory.textures++)}if(L.samples>0&&Fe(L)===!1){Y.__webglMultisampledFramebuffer=t.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let be=0;be<pe.length;be++){const Be=pe[be];Y.__webglColorRenderbuffer[be]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Y.__webglColorRenderbuffer[be]);const Ve=s.convert(Be.format,Be.colorSpace),ye=s.convert(Be.type),Re=E(Be.internalFormat,Ve,ye,Be.colorSpace,L.isXRRenderTarget===!0),Je=At(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,Je,Re,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,Y.__webglColorRenderbuffer[be])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=t.createRenderbuffer(),Ie(Y.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(se){n.bindTexture(t.TEXTURE_CUBE_MAP,ue.__webglTexture),le(t.TEXTURE_CUBE_MAP,I);for(let be=0;be<6;be++)if(I.mipmaps&&I.mipmaps.length>0)for(let Be=0;Be<I.mipmaps.length;Be++)we(Y.__webglFramebuffer[be][Be],L,I,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+be,Be);else we(Y.__webglFramebuffer[be],L,I,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);v(I)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ge){for(let be=0,Be=pe.length;be<Be;be++){const Ve=pe[be],ye=i.get(Ve);let Re=t.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Re=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Re,ye.__webglTexture),le(Re,Ve),we(Y.__webglFramebuffer,L,Ve,t.COLOR_ATTACHMENT0+be,Re,0),v(Ve)&&p(Re)}n.unbindTexture()}else{let be=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(be=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(be,ue.__webglTexture),le(be,I),I.mipmaps&&I.mipmaps.length>0)for(let Be=0;Be<I.mipmaps.length;Be++)we(Y.__webglFramebuffer[Be],L,I,t.COLOR_ATTACHMENT0,be,Be);else we(Y.__webglFramebuffer,L,I,t.COLOR_ATTACHMENT0,be,0);v(I)&&p(be),n.unbindTexture()}L.depthBuffer&&ct(L)}function St(L){const I=L.textures;for(let Y=0,ue=I.length;Y<ue;Y++){const pe=I[Y];if(v(pe)){const se=b(L),Ge=i.get(pe).__webglTexture;n.bindTexture(se,Ge),p(se),n.unbindTexture()}}}const it=[],qe=[];function ke(L){if(L.samples>0){if(Fe(L)===!1){const I=L.textures,Y=L.width,ue=L.height;let pe=t.COLOR_BUFFER_BIT;const se=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ge=i.get(L),be=I.length>1;if(be)for(let Ve=0;Ve<I.length;Ve++)n.bindFramebuffer(t.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);const Be=L.texture.mipmaps;Be&&Be.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Ve=0;Ve<I.length;Ve++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(pe|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(pe|=t.STENCIL_BUFFER_BIT)),be){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ve]);const ye=i.get(I[Ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ye,0)}t.blitFramebuffer(0,0,Y,ue,0,0,Y,ue,pe,t.NEAREST),l===!0&&(it.length=0,qe.length=0,it.push(t.COLOR_ATTACHMENT0+Ve),L.depthBuffer&&L.resolveDepthBuffer===!1&&(it.push(se),qe.push(se),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,qe)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,it))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),be)for(let Ve=0;Ve<I.length;Ve++){n.bindFramebuffer(t.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ve,t.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ve]);const ye=i.get(I[Ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ve,t.TEXTURE_2D,ye,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const I=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[I])}}}function At(L){return Math.min(r.maxSamples,L.samples)}function Fe(L){const I=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function rt(L){const I=a.render.frame;d.get(L)!==I&&(d.set(L,I),L.update())}function Bt(L,I){const Y=L.colorSpace,ue=L.format,pe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Y!==jr&&Y!==Di&&(bt.getTransfer(Y)===Ct?(ue!==Gn||pe!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),I}function Et(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}this.allocateTextureUnit=V,this.resetTextureUnits=z,this.setTexture2D=K,this.setTexture2DArray=G,this.setTexture3D=Z,this.setTextureCube=X,this.rebindTextures=zt,this.setupRenderTarget=O,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Fe}function YT(t,e){function n(i,r=Di){let s;const a=bt.getTransfer(r);if(i===ni)return t.UNSIGNED_BYTE;if(i===oc)return t.UNSIGNED_SHORT_4_4_4_4;if(i===lc)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Sg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Eg)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===bg)return t.BYTE;if(i===wg)return t.SHORT;if(i===Ns)return t.UNSIGNED_SHORT;if(i===ac)return t.INT;if(i===ur)return t.UNSIGNED_INT;if(i===gi)return t.FLOAT;if(i===Vs)return t.HALF_FLOAT;if(i===Tg)return t.ALPHA;if(i===Mg)return t.RGB;if(i===Gn)return t.RGBA;if(i===Os)return t.DEPTH_COMPONENT;if(i===zs)return t.DEPTH_STENCIL;if(i===Ag)return t.RED;if(i===uc)return t.RED_INTEGER;if(i===Cg)return t.RG;if(i===cc)return t.RG_INTEGER;if(i===dc)return t.RGBA_INTEGER;if(i===Fa||i===Ba||i===Ha||i===Va)if(a===Ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Fa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Fa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ba)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ha)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Va)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pu||i===mu||i===gu||i===_u)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===pu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===mu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_u)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vu||i===yu||i===xu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===vu||i===yu)return a===Ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===xu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===bu||i===wu||i===Su||i===Eu||i===Tu||i===Mu||i===Au||i===Cu||i===Ru||i===Iu||i===Pu||i===Du||i===$u||i===Lu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===bu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Su)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Eu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Mu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Au)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ru)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Iu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Du)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$u)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nu||i===Uu||i===Ou)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Nu)return a===Ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Uu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ou)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zu||i===ku||i===Fu||i===Bu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===zu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ku)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Us?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const ZT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class QT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Hg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Oi({vertexShader:ZT,fragmentShader:JT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new fn(new Ws(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eM extends mr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,d=null,h=null,f=null,m=null,_=null;const y=typeof XRWebGLBinding<"u",v=new QT,p={},b=n.getContextAttributes();let E=null,w=null;const T=[],R=[],P=new ot;let $=null;const A=new Rn;A.viewport=new kt;const C=new Rn;C.viewport=new kt;const U=[A,C],z=new vw;let V=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let fe=T[Q];return fe===void 0&&(fe=new Wo,T[Q]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Q){let fe=T[Q];return fe===void 0&&(fe=new Wo,T[Q]=fe),fe.getGripSpace()},this.getHand=function(Q){let fe=T[Q];return fe===void 0&&(fe=new Wo,T[Q]=fe),fe.getHandSpace()};function K(Q){const fe=R.indexOf(Q.inputSource);if(fe===-1)return;const we=T[fe];we!==void 0&&(we.update(Q.inputSource,Q.frame,u||a),we.dispatchEvent({type:Q.type,data:Q.inputSource}))}function G(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",Z);for(let Q=0;Q<T.length;Q++){const fe=R[Q];fe!==null&&(R[Q]=null,T[Q].disconnect(fe))}V=null,k=null,v.reset();for(const Q in p)delete p[Q];e.setRenderTarget(E),m=null,f=null,h=null,r=null,w=null,J.stop(),i.isPresenting=!1,e.setPixelRatio($),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Q){u=Q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",G),r.addEventListener("inputsourceschange",Z),b.xrCompatible!==!0&&await n.makeXRCompatible(),$=e.getPixelRatio(),e.getSize(P),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Ie=null,Te=null;b.depth&&(Te=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,we=b.stencil?zs:Os,Ie=b.stencil?Us:ur);const ct={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(ct),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new dr(f.textureWidth,f.textureHeight,{format:Gn,type:ni,depthTexture:new Bg(f.textureWidth,f.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const we={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,we),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new dr(m.framebufferWidth,m.framebufferHeight,{format:Gn,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),J.setContext(r),J.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(Q){for(let fe=0;fe<Q.removed.length;fe++){const we=Q.removed[fe],Ie=R.indexOf(we);Ie>=0&&(R[Ie]=null,T[Ie].disconnect(we))}for(let fe=0;fe<Q.added.length;fe++){const we=Q.added[fe];let Ie=R.indexOf(we);if(Ie===-1){for(let ct=0;ct<T.length;ct++)if(ct>=R.length){R.push(we),Ie=ct;break}else if(R[ct]===null){R[ct]=we,Ie=ct;break}if(Ie===-1)break}const Te=T[Ie];Te&&Te.connect(we)}}const X=new W,te=new W;function _e(Q,fe,we){X.setFromMatrixPosition(fe.matrixWorld),te.setFromMatrixPosition(we.matrixWorld);const Ie=X.distanceTo(te),Te=fe.projectionMatrix.elements,ct=we.projectionMatrix.elements,zt=Te[14]/(Te[10]-1),O=Te[14]/(Te[10]+1),St=(Te[9]+1)/Te[5],it=(Te[9]-1)/Te[5],qe=(Te[8]-1)/Te[0],ke=(ct[8]+1)/ct[0],At=zt*qe,Fe=zt*ke,rt=Ie/(-qe+ke),Bt=rt*-qe;if(fe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Bt),Q.translateZ(rt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Te[10]===-1)Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Et=zt+rt,L=O+rt,I=At-Bt,Y=Fe+(Ie-Bt),ue=St*O/L*Et,pe=it*O/L*Et;Q.projectionMatrix.makePerspective(I,Y,ue,pe,Et,L),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function j(Q,fe){fe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(fe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let fe=Q.near,we=Q.far;v.texture!==null&&(v.depthNear>0&&(fe=v.depthNear),v.depthFar>0&&(we=v.depthFar)),z.near=C.near=A.near=fe,z.far=C.far=A.far=we,(V!==z.near||k!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),V=z.near,k=z.far),z.layers.mask=Q.layers.mask|6,A.layers.mask=z.layers.mask&3,C.layers.mask=z.layers.mask&5;const Ie=Q.parent,Te=z.cameras;j(z,Ie);for(let ct=0;ct<Te.length;ct++)j(Te[ct],Ie);Te.length===2?_e(z,A,C):z.projectionMatrix.copy(A.projectionMatrix),le(Q,z,Ie)};function le(Q,fe,we){we===null?Q.matrix.copy(fe.matrixWorld):(Q.matrix.copy(we.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(fe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ks*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(z)},this.getCameraTexture=function(Q){return p[Q]};let Ee=null;function He(Q,fe){if(d=fe.getViewerPose(u||a),_=fe,d!==null){const we=d.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let Ie=!1;we.length!==z.cameras.length&&(z.cameras.length=0,Ie=!0);for(let O=0;O<we.length;O++){const St=we[O];let it=null;if(m!==null)it=m.getViewport(St);else{const ke=h.getViewSubImage(f,St);it=ke.viewport,O===0&&(e.setRenderTargetTextures(w,ke.colorTexture,ke.depthStencilTexture),e.setRenderTarget(w))}let qe=U[O];qe===void 0&&(qe=new Rn,qe.layers.enable(O),qe.viewport=new kt,U[O]=qe),qe.matrix.fromArray(St.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(St.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(it.x,it.y,it.width,it.height),O===0&&(z.matrix.copy(qe.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ie===!0&&z.cameras.push(qe)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){h=i.getBinding();const O=h.getDepthInformation(we[0]);O&&O.isValid&&O.texture&&v.init(O,r.renderState)}if(Te&&Te.includes("camera-access")&&y){e.state.unbindTexture(),h=i.getBinding();for(let O=0;O<we.length;O++){const St=we[O].camera;if(St){let it=p[St];it||(it=new Hg,p[St]=it);const qe=h.getCameraImage(St);it.sourceTexture=qe}}}}for(let we=0;we<T.length;we++){const Ie=R[we],Te=T[we];Ie!==null&&Te!==void 0&&Te.update(Ie,fe,u||a)}Ee&&Ee(Q,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),_=null}const J=new Wg;J.setAnimationLoop(He),this.setAnimationLoop=function(Q){Ee=Q},this.dispose=function(){}}}const ji=new ii,tM=new Ft;function nM(t,e){function n(v,p){v.matrixAutoUpdate===!0&&v.updateMatrix(),p.value.copy(v.matrix)}function i(v,p){p.color.getRGB(v.fogColor.value,Og(t)),p.isFog?(v.fogNear.value=p.near,v.fogFar.value=p.far):p.isFogExp2&&(v.fogDensity.value=p.density)}function r(v,p,b,E,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(v,p):p.isMeshToonMaterial?(s(v,p),h(v,p)):p.isMeshPhongMaterial?(s(v,p),d(v,p)):p.isMeshStandardMaterial?(s(v,p),f(v,p),p.isMeshPhysicalMaterial&&m(v,p,w)):p.isMeshMatcapMaterial?(s(v,p),_(v,p)):p.isMeshDepthMaterial?s(v,p):p.isMeshDistanceMaterial?(s(v,p),y(v,p)):p.isMeshNormalMaterial?s(v,p):p.isLineBasicMaterial?(a(v,p),p.isLineDashedMaterial&&o(v,p)):p.isPointsMaterial?l(v,p,b,E):p.isSpriteMaterial?u(v,p):p.isShadowMaterial?(v.color.value.copy(p.color),v.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(v,p){v.opacity.value=p.opacity,p.color&&v.diffuse.value.copy(p.color),p.emissive&&v.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(v.map.value=p.map,n(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,n(p.alphaMap,v.alphaMapTransform)),p.bumpMap&&(v.bumpMap.value=p.bumpMap,n(p.bumpMap,v.bumpMapTransform),v.bumpScale.value=p.bumpScale,p.side===pn&&(v.bumpScale.value*=-1)),p.normalMap&&(v.normalMap.value=p.normalMap,n(p.normalMap,v.normalMapTransform),v.normalScale.value.copy(p.normalScale),p.side===pn&&v.normalScale.value.negate()),p.displacementMap&&(v.displacementMap.value=p.displacementMap,n(p.displacementMap,v.displacementMapTransform),v.displacementScale.value=p.displacementScale,v.displacementBias.value=p.displacementBias),p.emissiveMap&&(v.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,v.emissiveMapTransform)),p.specularMap&&(v.specularMap.value=p.specularMap,n(p.specularMap,v.specularMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest);const b=e.get(p),E=b.envMap,w=b.envMapRotation;E&&(v.envMap.value=E,ji.copy(w),ji.x*=-1,ji.y*=-1,ji.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),v.envMapRotation.value.setFromMatrix4(tM.makeRotationFromEuler(ji)),v.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=p.reflectivity,v.ior.value=p.ior,v.refractionRatio.value=p.refractionRatio),p.lightMap&&(v.lightMap.value=p.lightMap,v.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,v.lightMapTransform)),p.aoMap&&(v.aoMap.value=p.aoMap,v.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,v.aoMapTransform))}function a(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,p.map&&(v.map.value=p.map,n(p.map,v.mapTransform))}function o(v,p){v.dashSize.value=p.dashSize,v.totalSize.value=p.dashSize+p.gapSize,v.scale.value=p.scale}function l(v,p,b,E){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.size.value=p.size*b,v.scale.value=E*.5,p.map&&(v.map.value=p.map,n(p.map,v.uvTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,n(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function u(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.rotation.value=p.rotation,p.map&&(v.map.value=p.map,n(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,n(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function d(v,p){v.specular.value.copy(p.specular),v.shininess.value=Math.max(p.shininess,1e-4)}function h(v,p){p.gradientMap&&(v.gradientMap.value=p.gradientMap)}function f(v,p){v.metalness.value=p.metalness,p.metalnessMap&&(v.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,v.metalnessMapTransform)),v.roughness.value=p.roughness,p.roughnessMap&&(v.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,v.roughnessMapTransform)),p.envMap&&(v.envMapIntensity.value=p.envMapIntensity)}function m(v,p,b){v.ior.value=p.ior,p.sheen>0&&(v.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),v.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(v.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,v.sheenColorMapTransform)),p.sheenRoughnessMap&&(v.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,v.sheenRoughnessMapTransform))),p.clearcoat>0&&(v.clearcoat.value=p.clearcoat,v.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(v.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,v.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(v.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&v.clearcoatNormalScale.value.negate())),p.dispersion>0&&(v.dispersion.value=p.dispersion),p.iridescence>0&&(v.iridescence.value=p.iridescence,v.iridescenceIOR.value=p.iridescenceIOR,v.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(v.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,v.iridescenceMapTransform)),p.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),p.transmission>0&&(v.transmission.value=p.transmission,v.transmissionSamplerMap.value=b.texture,v.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(v.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,v.transmissionMapTransform)),v.thickness.value=p.thickness,p.thicknessMap&&(v.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=p.attenuationDistance,v.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(v.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(v.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=p.specularIntensity,v.specularColor.value.copy(p.specularColor),p.specularColorMap&&(v.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,v.specularColorMapTransform)),p.specularIntensityMap&&(v.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,v.specularIntensityMapTransform))}function _(v,p){p.matcap&&(v.matcap.value=p.matcap)}function y(v,p){const b=e.get(p).light;v.referencePosition.value.setFromMatrixPosition(b.matrixWorld),v.nearDistance.value=b.shadow.camera.near,v.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function iM(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,E){const w=E.program;i.uniformBlockBinding(b,w)}function u(b,E){let w=r[b.id];w===void 0&&(_(b),w=d(b),r[b.id]=w,b.addEventListener("dispose",v));const T=E.program;i.updateUBOMapping(b,T);const R=e.render.frame;s[b.id]!==R&&(f(b),s[b.id]=R)}function d(b){const E=h();b.__bindingPointIndex=E;const w=t.createBuffer(),T=b.__size,R=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,T,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,w),w}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const E=r[b.id],w=b.uniforms,T=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let R=0,P=w.length;R<P;R++){const $=Array.isArray(w[R])?w[R]:[w[R]];for(let A=0,C=$.length;A<C;A++){const U=$[A];if(m(U,R,A,T)===!0){const z=U.__offset,V=Array.isArray(U.value)?U.value:[U.value];let k=0;for(let K=0;K<V.length;K++){const G=V[K],Z=y(G);typeof G=="number"||typeof G=="boolean"?(U.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,z+k,U.__data)):G.isMatrix3?(U.__data[0]=G.elements[0],U.__data[1]=G.elements[1],U.__data[2]=G.elements[2],U.__data[3]=0,U.__data[4]=G.elements[3],U.__data[5]=G.elements[4],U.__data[6]=G.elements[5],U.__data[7]=0,U.__data[8]=G.elements[6],U.__data[9]=G.elements[7],U.__data[10]=G.elements[8],U.__data[11]=0):(G.toArray(U.__data,k),k+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,U.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(b,E,w,T){const R=b.value,P=E+"_"+w;if(T[P]===void 0)return typeof R=="number"||typeof R=="boolean"?T[P]=R:T[P]=R.clone(),!0;{const $=T[P];if(typeof R=="number"||typeof R=="boolean"){if($!==R)return T[P]=R,!0}else if($.equals(R)===!1)return $.copy(R),!0}return!1}function _(b){const E=b.uniforms;let w=0;const T=16;for(let P=0,$=E.length;P<$;P++){const A=Array.isArray(E[P])?E[P]:[E[P]];for(let C=0,U=A.length;C<U;C++){const z=A[C],V=Array.isArray(z.value)?z.value:[z.value];for(let k=0,K=V.length;k<K;k++){const G=V[k],Z=y(G),X=w%T,te=X%Z.boundary,_e=X+te;w+=te,_e!==0&&T-_e<Z.storage&&(w+=T-_e),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=w,w+=Z.storage}}}const R=w%T;return R>0&&(w+=T-R),b.__size=w,b.__cache={},this}function y(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function v(b){const E=b.target;E.removeEventListener("dispose",v);const w=a.indexOf(E.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(const b in r)t.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:u,dispose:p}}class rM{constructor(e={}){const{canvas:n=Nb(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),y=new Int32Array(4);let v=null,p=null;const b=[],E=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let T=!1;this._outputColorSpace=Cn;let R=0,P=0,$=null,A=-1,C=null;const U=new kt,z=new kt;let V=null;const k=new mt(0);let K=0,G=n.width,Z=n.height,X=1,te=null,_e=null;const j=new kt(0,0,G,Z),le=new kt(0,0,G,Z);let Ee=!1;const He=new _c;let J=!1,Q=!1;const fe=new Ft,we=new W,Ie=new kt,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function zt(){return $===null?X:1}let O=i;function St(D,q){return n.getContext(D,q)}try{const D={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${sc}`),n.addEventListener("webglcontextlost",Se,!1),n.addEventListener("webglcontextrestored",Le,!1),n.addEventListener("webglcontextcreationerror",ce,!1),O===null){const q="webgl2";if(O=St(q,D),O===null)throw St(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let it,qe,ke,At,Fe,rt,Bt,Et,L,I,Y,ue,pe,se,Ge,be,Be,Ve,ye,Re,Je,We,Ae,st;function F(){it=new p1(O),it.init(),We=new YT(O,it),qe=new o1(O,it,e,We),ke=new jT(O,it),qe.reversedDepthBuffer&&f&&ke.buffers.depth.setReversed(!0),At=new _1(O),Fe=new NT,rt=new KT(O,it,ke,Fe,qe,We,At),Bt=new u1(w),Et=new f1(w),L=new Sw(O),Ae=new s1(O,L),I=new m1(O,L,At,Ae),Y=new y1(O,I,L,At),ye=new v1(O,qe,rt),be=new l1(Fe),ue=new LT(w,Bt,Et,it,qe,Ae,be),pe=new nM(w,Fe),se=new OT,Ge=new VT(it),Ve=new r1(w,Bt,Et,ke,Y,m,l),Be=new qT(w,Y,qe),st=new iM(O,At,qe,ke),Re=new a1(O,it,At),Je=new g1(O,it,At),At.programs=ue.programs,w.capabilities=qe,w.extensions=it,w.properties=Fe,w.renderLists=se,w.shadowMap=Be,w.state=ke,w.info=At}F();const xe=new eM(w,O);this.xr=xe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const D=it.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=it.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(D){D!==void 0&&(X=D,this.setSize(G,Z,!1))},this.getSize=function(D){return D.set(G,Z)},this.setSize=function(D,q,ee=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=D,Z=q,n.width=Math.floor(D*X),n.height=Math.floor(q*X),ee===!0&&(n.style.width=D+"px",n.style.height=q+"px"),this.setViewport(0,0,D,q)},this.getDrawingBufferSize=function(D){return D.set(G*X,Z*X).floor()},this.setDrawingBufferSize=function(D,q,ee){G=D,Z=q,X=ee,n.width=Math.floor(D*ee),n.height=Math.floor(q*ee),this.setViewport(0,0,D,q)},this.getCurrentViewport=function(D){return D.copy(U)},this.getViewport=function(D){return D.copy(j)},this.setViewport=function(D,q,ee,ie){D.isVector4?j.set(D.x,D.y,D.z,D.w):j.set(D,q,ee,ie),ke.viewport(U.copy(j).multiplyScalar(X).round())},this.getScissor=function(D){return D.copy(le)},this.setScissor=function(D,q,ee,ie){D.isVector4?le.set(D.x,D.y,D.z,D.w):le.set(D,q,ee,ie),ke.scissor(z.copy(le).multiplyScalar(X).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(D){ke.setScissorTest(Ee=D)},this.setOpaqueSort=function(D){te=D},this.setTransparentSort=function(D){_e=D},this.getClearColor=function(D){return D.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(D=!0,q=!0,ee=!0){let ie=0;if(D){let H=!1;if($!==null){const me=$.texture.format;H=me===dc||me===cc||me===uc}if(H){const me=$.texture.type,Me=me===ni||me===ur||me===Ns||me===Us||me===oc||me===lc,Oe=Ve.getClearColor(),Pe=Ve.getClearAlpha(),Ze=Oe.r,Qe=Oe.g,Xe=Oe.b;Me?(_[0]=Ze,_[1]=Qe,_[2]=Xe,_[3]=Pe,O.clearBufferuiv(O.COLOR,0,_)):(y[0]=Ze,y[1]=Qe,y[2]=Xe,y[3]=Pe,O.clearBufferiv(O.COLOR,0,y))}else ie|=O.COLOR_BUFFER_BIT}q&&(ie|=O.DEPTH_BUFFER_BIT),ee&&(ie|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Se,!1),n.removeEventListener("webglcontextrestored",Le,!1),n.removeEventListener("webglcontextcreationerror",ce,!1),Ve.dispose(),se.dispose(),Ge.dispose(),Fe.dispose(),Bt.dispose(),Et.dispose(),Y.dispose(),Ae.dispose(),st.dispose(),ue.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",gn),xe.removeEventListener("sessionend",ns),jn.stop()};function Se(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const D=At.autoReset,q=Be.enabled,ee=Be.autoUpdate,ie=Be.needsUpdate,H=Be.type;F(),At.autoReset=D,Be.enabled=q,Be.autoUpdate=ee,Be.needsUpdate=ie,Be.type=H}function ce(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function he(D){const q=D.target;q.removeEventListener("dispose",he),Ue(q)}function Ue(D){tt(D),Fe.remove(D)}function tt(D){const q=Fe.get(D).programs;q!==void 0&&(q.forEach(function(ee){ue.releaseProgram(ee)}),D.isShaderMaterial&&ue.releaseShaderCache(D))}this.renderBufferDirect=function(D,q,ee,ie,H,me){q===null&&(q=Te);const Me=H.isMesh&&H.matrixWorld.determinant()<0,Oe=as(D,q,ee,ie,H);ke.setMaterial(ie,Me);let Pe=ee.index,Ze=1;if(ie.wireframe===!0){if(Pe=I.getWireframeAttribute(ee),Pe===void 0)return;Ze=2}const Qe=ee.drawRange,Xe=ee.attributes.position;let dt=Qe.start*Ze,pt=(Qe.start+Qe.count)*Ze;me!==null&&(dt=Math.max(dt,me.start*Ze),pt=Math.min(pt,(me.start+me.count)*Ze)),Pe!==null?(dt=Math.max(dt,0),pt=Math.min(pt,Pe.count)):Xe!=null&&(dt=Math.max(dt,0),pt=Math.min(pt,Xe.count));const $t=pt-dt;if($t<0||$t===1/0)return;Ae.setup(H,ie,Oe,ee,Pe);let Dt,Tt=Re;if(Pe!==null&&(Dt=L.get(Pe),Tt=Je,Tt.setIndex(Dt)),H.isMesh)ie.wireframe===!0?(ke.setLineWidth(ie.wireframeLinewidth*zt()),Tt.setMode(O.LINES)):Tt.setMode(O.TRIANGLES);else if(H.isLine){let Ye=ie.linewidth;Ye===void 0&&(Ye=1),ke.setLineWidth(Ye*zt()),H.isLineSegments?Tt.setMode(O.LINES):H.isLineLoop?Tt.setMode(O.LINE_LOOP):Tt.setMode(O.LINE_STRIP)}else H.isPoints?Tt.setMode(O.POINTS):H.isSprite&&Tt.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Fs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))Tt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ye=H._multiDrawStarts,Lt=H._multiDrawCounts,gt=H._multiDrawCount,sn=Pe?L.get(Pe).bytesPerElement:1,xi=Fe.get(ie).currentProgram.getUniforms();for(let an=0;an<gt;an++)xi.setValue(O,"_gl_DrawID",an),Tt.render(Ye[an]/sn,Lt[an])}else if(H.isInstancedMesh)Tt.renderInstances(dt,$t,H.count);else if(ee.isInstancedBufferGeometry){const Ye=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Lt=Math.min(ee.instanceCount,Ye);Tt.renderInstances(dt,$t,Lt)}else Tt.render(dt,$t)};function Mt(D,q,ee){D.transparent===!0&&D.side===pi&&D.forceSinglePass===!1?(D.side=pn,D.needsUpdate=!0,yr(D,q,ee),D.side=Ui,D.needsUpdate=!0,yr(D,q,ee),D.side=pi):yr(D,q,ee)}this.compile=function(D,q,ee=null){ee===null&&(ee=D),p=Ge.get(ee),p.init(q),E.push(p),ee.traverseVisible(function(H){H.isLight&&H.layers.test(q.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),D!==ee&&D.traverseVisible(function(H){H.isLight&&H.layers.test(q.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const ie=new Set;return D.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const me=H.material;if(me)if(Array.isArray(me))for(let Me=0;Me<me.length;Me++){const Oe=me[Me];Mt(Oe,ee,H),ie.add(Oe)}else Mt(me,ee,H),ie.add(me)}),p=E.pop(),ie},this.compileAsync=function(D,q,ee=null){const ie=this.compile(D,q,ee);return new Promise(H=>{function me(){if(ie.forEach(function(Me){Fe.get(Me).currentProgram.isReady()&&ie.delete(Me)}),ie.size===0){H(D);return}setTimeout(me,10)}it.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let vt=null;function Tn(D){vt&&vt(D)}function gn(){jn.stop()}function ns(){jn.start()}const jn=new Wg;jn.setAnimationLoop(Tn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(D){vt=D,xe.setAnimationLoop(D),D===null?jn.stop():jn.start()},xe.addEventListener("sessionstart",gn),xe.addEventListener("sessionend",ns),this.render=function(D,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(q),q=xe.getCamera()),D.isScene===!0&&D.onBeforeRender(w,D,q,$),p=Ge.get(D,E.length),p.init(q),E.push(p),fe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),He.setFromProjectionMatrix(fe,ei,q.reversedDepth),Q=this.localClippingEnabled,J=be.init(this.clippingPlanes,Q),v=se.get(D,b.length),v.init(),b.push(v),xe.enabled===!0&&xe.isPresenting===!0){const me=w.xr.getDepthSensingMesh();me!==null&&vr(me,q,-1/0,w.sortObjects)}vr(D,q,0,w.sortObjects),v.finish(),w.sortObjects===!0&&v.sort(te,_e),ct=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,ct&&Ve.addToRenderList(v,D),this.info.render.frame++,J===!0&&be.beginShadows();const ee=p.state.shadowsArray;Be.render(ee,D,q),J===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=v.opaque,H=v.transmissive;if(p.setupLights(),q.isArrayCamera){const me=q.cameras;if(H.length>0)for(let Me=0,Oe=me.length;Me<Oe;Me++){const Pe=me[Me];rs(ie,H,D,Pe)}ct&&Ve.render(D);for(let Me=0,Oe=me.length;Me<Oe;Me++){const Pe=me[Me];is(v,D,Pe,Pe.viewport)}}else H.length>0&&rs(ie,H,D,q),ct&&Ve.render(D),is(v,D,q);$!==null&&P===0&&(rt.updateMultisampleRenderTarget($),rt.updateRenderTargetMipmap($)),D.isScene===!0&&D.onAfterRender(w,D,q),Ae.resetDefaultState(),A=-1,C=null,E.pop(),E.length>0?(p=E[E.length-1],J===!0&&be.setGlobalState(w.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?v=b[b.length-1]:v=null};function vr(D,q,ee,ie){if(D.visible===!1)return;if(D.layers.test(q.layers)){if(D.isGroup)ee=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(q);else if(D.isLight)p.pushLight(D),D.castShadow&&p.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||He.intersectsSprite(D)){ie&&Ie.setFromMatrixPosition(D.matrixWorld).applyMatrix4(fe);const Me=Y.update(D),Oe=D.material;Oe.visible&&v.push(D,Me,Oe,ee,Ie.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||He.intersectsObject(D))){const Me=Y.update(D),Oe=D.material;if(ie&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Ie.copy(D.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ie.copy(Me.boundingSphere.center)),Ie.applyMatrix4(D.matrixWorld).applyMatrix4(fe)),Array.isArray(Oe)){const Pe=Me.groups;for(let Ze=0,Qe=Pe.length;Ze<Qe;Ze++){const Xe=Pe[Ze],dt=Oe[Xe.materialIndex];dt&&dt.visible&&v.push(D,Me,dt,ee,Ie.z,Xe)}}else Oe.visible&&v.push(D,Me,Oe,ee,Ie.z,null)}}const me=D.children;for(let Me=0,Oe=me.length;Me<Oe;Me++)vr(me[Me],q,ee,ie)}function is(D,q,ee,ie){const H=D.opaque,me=D.transmissive,Me=D.transparent;p.setupLightsView(ee),J===!0&&be.setGlobalState(w.clippingPlanes,ee),ie&&ke.viewport(U.copy(ie)),H.length>0&&Fi(H,q,ee),me.length>0&&Fi(me,q,ee),Me.length>0&&Fi(Me,q,ee),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function rs(D,q,ee,ie){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ie.id]===void 0&&(p.state.transmissionRenderTarget[ie.id]=new dr(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?Vs:ni,minFilter:ar,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const me=p.state.transmissionRenderTarget[ie.id],Me=ie.viewport||U;me.setSize(Me.z*w.transmissionResolutionScale,Me.w*w.transmissionResolutionScale);const Oe=w.getRenderTarget(),Pe=w.getActiveCubeFace(),Ze=w.getActiveMipmapLevel();w.setRenderTarget(me),w.getClearColor(k),K=w.getClearAlpha(),K<1&&w.setClearColor(16777215,.5),w.clear(),ct&&Ve.render(ee);const Qe=w.toneMapping;w.toneMapping=Li;const Xe=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),p.setupLightsView(ie),J===!0&&be.setGlobalState(w.clippingPlanes,ie),Fi(D,ee,ie),rt.updateMultisampleRenderTarget(me),rt.updateRenderTargetMipmap(me),it.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let pt=0,$t=q.length;pt<$t;pt++){const Dt=q[pt],Tt=Dt.object,Ye=Dt.geometry,Lt=Dt.material,gt=Dt.group;if(Lt.side===pi&&Tt.layers.test(ie.layers)){const sn=Lt.side;Lt.side=pn,Lt.needsUpdate=!0,ss(Tt,ee,ie,Ye,Lt,gt),Lt.side=sn,Lt.needsUpdate=!0,dt=!0}}dt===!0&&(rt.updateMultisampleRenderTarget(me),rt.updateRenderTargetMipmap(me))}w.setRenderTarget(Oe,Pe,Ze),w.setClearColor(k,K),Xe!==void 0&&(ie.viewport=Xe),w.toneMapping=Qe}function Fi(D,q,ee){const ie=q.isScene===!0?q.overrideMaterial:null;for(let H=0,me=D.length;H<me;H++){const Me=D[H],Oe=Me.object,Pe=Me.geometry,Ze=Me.group;let Qe=Me.material;Qe.allowOverride===!0&&ie!==null&&(Qe=ie),Oe.layers.test(ee.layers)&&ss(Oe,q,ee,Pe,Qe,Ze)}}function ss(D,q,ee,ie,H,me){D.onBeforeRender(w,q,ee,ie,H,me),D.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),H.onBeforeRender(w,q,ee,ie,D,me),H.transparent===!0&&H.side===pi&&H.forceSinglePass===!1?(H.side=pn,H.needsUpdate=!0,w.renderBufferDirect(ee,q,ie,H,D,me),H.side=Ui,H.needsUpdate=!0,w.renderBufferDirect(ee,q,ie,H,D,me),H.side=pi):w.renderBufferDirect(ee,q,ie,H,D,me),D.onAfterRender(w,q,ee,ie,H,me)}function yr(D,q,ee){q.isScene!==!0&&(q=Te);const ie=Fe.get(D),H=p.state.lights,me=p.state.shadowsArray,Me=H.state.version,Oe=ue.getParameters(D,H.state,me,q,ee),Pe=ue.getProgramCacheKey(Oe);let Ze=ie.programs;ie.environment=D.isMeshStandardMaterial?q.environment:null,ie.fog=q.fog,ie.envMap=(D.isMeshStandardMaterial?Et:Bt).get(D.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&D.envMap===null?q.environmentRotation:D.envMapRotation,Ze===void 0&&(D.addEventListener("dispose",he),Ze=new Map,ie.programs=Ze);let Qe=Ze.get(Pe);if(Qe!==void 0){if(ie.currentProgram===Qe&&ie.lightsStateVersion===Me)return xr(D,Oe),Qe}else Oe.uniforms=ue.getUniforms(D),D.onBeforeCompile(Oe,w),Qe=ue.acquireProgram(Oe,Pe),Ze.set(Pe,Qe),ie.uniforms=Oe.uniforms;const Xe=ie.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Xe.clippingPlanes=be.uniform),xr(D,Oe),ie.needsLights=Pn(D),ie.lightsStateVersion=Me,ie.needsLights&&(Xe.ambientLightColor.value=H.state.ambient,Xe.lightProbe.value=H.state.probe,Xe.directionalLights.value=H.state.directional,Xe.directionalLightShadows.value=H.state.directionalShadow,Xe.spotLights.value=H.state.spot,Xe.spotLightShadows.value=H.state.spotShadow,Xe.rectAreaLights.value=H.state.rectArea,Xe.ltc_1.value=H.state.rectAreaLTC1,Xe.ltc_2.value=H.state.rectAreaLTC2,Xe.pointLights.value=H.state.point,Xe.pointLightShadows.value=H.state.pointShadow,Xe.hemisphereLights.value=H.state.hemi,Xe.directionalShadowMap.value=H.state.directionalShadowMap,Xe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Xe.spotShadowMap.value=H.state.spotShadowMap,Xe.spotLightMatrix.value=H.state.spotLightMatrix,Xe.spotLightMap.value=H.state.spotLightMap,Xe.pointShadowMap.value=H.state.pointShadowMap,Xe.pointShadowMatrix.value=H.state.pointShadowMatrix),ie.currentProgram=Qe,ie.uniformsList=null,Qe}function _n(D){if(D.uniformsList===null){const q=D.currentProgram.getUniforms();D.uniformsList=Wa.seqWithValue(q.seq,D.uniforms)}return D.uniformsList}function xr(D,q){const ee=Fe.get(D);ee.outputColorSpace=q.outputColorSpace,ee.batching=q.batching,ee.batchingColor=q.batchingColor,ee.instancing=q.instancing,ee.instancingColor=q.instancingColor,ee.instancingMorph=q.instancingMorph,ee.skinning=q.skinning,ee.morphTargets=q.morphTargets,ee.morphNormals=q.morphNormals,ee.morphColors=q.morphColors,ee.morphTargetsCount=q.morphTargetsCount,ee.numClippingPlanes=q.numClippingPlanes,ee.numIntersection=q.numClipIntersection,ee.vertexAlphas=q.vertexAlphas,ee.vertexTangents=q.vertexTangents,ee.toneMapping=q.toneMapping}function as(D,q,ee,ie,H){q.isScene!==!0&&(q=Te),rt.resetTextureUnits();const me=q.fog,Me=ie.isMeshStandardMaterial?q.environment:null,Oe=$===null?w.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:jr,Pe=(ie.isMeshStandardMaterial?Et:Bt).get(ie.envMap||Me),Ze=ie.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Qe=!!ee.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Xe=!!ee.morphAttributes.position,dt=!!ee.morphAttributes.normal,pt=!!ee.morphAttributes.color;let $t=Li;ie.toneMapped&&($===null||$.isXRRenderTarget===!0)&&($t=w.toneMapping);const Dt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Tt=Dt!==void 0?Dt.length:0,Ye=Fe.get(ie),Lt=p.state.lights;if(J===!0&&(Q===!0||D!==C)){const Wt=D===C&&ie.id===A;be.setState(ie,D,Wt)}let gt=!1;ie.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Lt.state.version||Ye.outputColorSpace!==Oe||H.isBatchedMesh&&Ye.batching===!1||!H.isBatchedMesh&&Ye.batching===!0||H.isBatchedMesh&&Ye.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ye.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ye.instancing===!1||!H.isInstancedMesh&&Ye.instancing===!0||H.isSkinnedMesh&&Ye.skinning===!1||!H.isSkinnedMesh&&Ye.skinning===!0||H.isInstancedMesh&&Ye.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ye.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ye.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ye.instancingMorph===!1&&H.morphTexture!==null||Ye.envMap!==Pe||ie.fog===!0&&Ye.fog!==me||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==be.numPlanes||Ye.numIntersection!==be.numIntersection)||Ye.vertexAlphas!==Ze||Ye.vertexTangents!==Qe||Ye.morphTargets!==Xe||Ye.morphNormals!==dt||Ye.morphColors!==pt||Ye.toneMapping!==$t||Ye.morphTargetsCount!==Tt)&&(gt=!0):(gt=!0,Ye.__version=ie.version);let sn=Ye.currentProgram;gt===!0&&(sn=yr(ie,q,H));let xi=!1,an=!1,Bi=!1;const Nt=sn.getUniforms(),dn=Ye.uniforms;if(ke.useProgram(sn.program)&&(xi=!0,an=!0,Bi=!0),ie.id!==A&&(A=ie.id,an=!0),xi||C!==D){ke.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Nt.setValue(O,"projectionMatrix",D.projectionMatrix),Nt.setValue(O,"viewMatrix",D.matrixWorldInverse);const qt=Nt.map.cameraPosition;qt!==void 0&&qt.setValue(O,we.setFromMatrixPosition(D.matrixWorld)),qe.logarithmicDepthBuffer&&Nt.setValue(O,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Nt.setValue(O,"isOrthographic",D.isOrthographicCamera===!0),C!==D&&(C=D,an=!0,Bi=!0)}if(H.isSkinnedMesh){Nt.setOptional(O,H,"bindMatrix"),Nt.setOptional(O,H,"bindMatrixInverse");const Wt=H.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),Nt.setValue(O,"boneTexture",Wt.boneTexture,rt))}H.isBatchedMesh&&(Nt.setOptional(O,H,"batchingTexture"),Nt.setValue(O,"batchingTexture",H._matricesTexture,rt),Nt.setOptional(O,H,"batchingIdTexture"),Nt.setValue(O,"batchingIdTexture",H._indirectTexture,rt),Nt.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&Nt.setValue(O,"batchingColorTexture",H._colorsTexture,rt));const en=ee.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&ye.update(H,ee,sn),(an||Ye.receiveShadow!==H.receiveShadow)&&(Ye.receiveShadow=H.receiveShadow,Nt.setValue(O,"receiveShadow",H.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(dn.envMap.value=Pe,dn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&q.environment!==null&&(dn.envMapIntensity.value=q.environmentIntensity),an&&(Nt.setValue(O,"toneMappingExposure",w.toneMappingExposure),Ye.needsLights&&yi(dn,Bi),me&&ie.fog===!0&&pe.refreshFogUniforms(dn,me),pe.refreshMaterialUniforms(dn,ie,X,Z,p.state.transmissionRenderTarget[D.id]),Wa.upload(O,_n(Ye),dn,rt)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Wa.upload(O,_n(Ye),dn,rt),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Nt.setValue(O,"center",H.center),Nt.setValue(O,"modelViewMatrix",H.modelViewMatrix),Nt.setValue(O,"normalMatrix",H.normalMatrix),Nt.setValue(O,"modelMatrix",H.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Wt=ie.uniformsGroups;for(let qt=0,os=Wt.length;qt<os;qt++){const Dn=Wt[qt];st.update(Dn,sn),st.bind(Dn,sn)}}return sn}function yi(D,q){D.ambientLightColor.needsUpdate=q,D.lightProbe.needsUpdate=q,D.directionalLights.needsUpdate=q,D.directionalLightShadows.needsUpdate=q,D.pointLights.needsUpdate=q,D.pointLightShadows.needsUpdate=q,D.spotLights.needsUpdate=q,D.spotLightShadows.needsUpdate=q,D.rectAreaLights.needsUpdate=q,D.hemisphereLights.needsUpdate=q}function Pn(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(D,q,ee){const ie=Fe.get(D);ie.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),Fe.get(D.texture).__webglTexture=q,Fe.get(D.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ee,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,q){const ee=Fe.get(D);ee.__webglFramebuffer=q,ee.__useDefaultFramebuffer=q===void 0};const qs=O.createFramebuffer();this.setRenderTarget=function(D,q=0,ee=0){$=D,R=q,P=ee;let ie=!0,H=null,me=!1,Me=!1;if(D){const Pe=Fe.get(D);if(Pe.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer(O.FRAMEBUFFER,null),ie=!1;else if(Pe.__webglFramebuffer===void 0)rt.setupRenderTarget(D);else if(Pe.__hasExternalTextures)rt.rebindTextures(D,Fe.get(D.texture).__webglTexture,Fe.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Xe=D.depthTexture;if(Pe.__boundDepthTexture!==Xe){if(Xe!==null&&Fe.has(Xe)&&(D.width!==Xe.image.width||D.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(D)}}const Ze=D.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Me=!0);const Qe=Fe.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Qe[q])?H=Qe[q][ee]:H=Qe[q],me=!0):D.samples>0&&rt.useMultisampledRTT(D)===!1?H=Fe.get(D).__webglMultisampledFramebuffer:Array.isArray(Qe)?H=Qe[ee]:H=Qe,U.copy(D.viewport),z.copy(D.scissor),V=D.scissorTest}else U.copy(j).multiplyScalar(X).floor(),z.copy(le).multiplyScalar(X).floor(),V=Ee;if(ee!==0&&(H=qs),ke.bindFramebuffer(O.FRAMEBUFFER,H)&&ie&&ke.drawBuffers(D,H),ke.viewport(U),ke.scissor(z),ke.setScissorTest(V),me){const Pe=Fe.get(D.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+q,Pe.__webglTexture,ee)}else if(Me){const Pe=q;for(let Ze=0;Ze<D.textures.length;Ze++){const Qe=Fe.get(D.textures[Ze]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ze,Qe.__webglTexture,ee,Pe)}}else if(D!==null&&ee!==0){const Pe=Fe.get(D.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Pe.__webglTexture,ee)}A=-1},this.readRenderTargetPixels=function(D,q,ee,ie,H,me,Me,Oe=0){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Fe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Me!==void 0&&(Pe=Pe[Me]),Pe){ke.bindFramebuffer(O.FRAMEBUFFER,Pe);try{const Ze=D.textures[Oe],Qe=Ze.format,Xe=Ze.type;if(!qe.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=D.width-ie&&ee>=0&&ee<=D.height-H&&(D.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Oe),O.readPixels(q,ee,ie,H,We.convert(Qe),We.convert(Xe),me))}finally{const Ze=$!==null?Fe.get($).__webglFramebuffer:null;ke.bindFramebuffer(O.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(D,q,ee,ie,H,me,Me,Oe=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Fe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Me!==void 0&&(Pe=Pe[Me]),Pe)if(q>=0&&q<=D.width-ie&&ee>=0&&ee<=D.height-H){ke.bindFramebuffer(O.FRAMEBUFFER,Pe);const Ze=D.textures[Oe],Qe=Ze.format,Xe=Ze.type;if(!qe.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,dt),O.bufferData(O.PIXEL_PACK_BUFFER,me.byteLength,O.STREAM_READ),D.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Oe),O.readPixels(q,ee,ie,H,We.convert(Qe),We.convert(Xe),0);const pt=$!==null?Fe.get($).__webglFramebuffer:null;ke.bindFramebuffer(O.FRAMEBUFFER,pt);const $t=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Ub(O,$t,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,dt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,me),O.deleteBuffer(dt),O.deleteSync($t),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,q=null,ee=0){const ie=Math.pow(2,-ee),H=Math.floor(D.image.width*ie),me=Math.floor(D.image.height*ie),Me=q!==null?q.x:0,Oe=q!==null?q.y:0;rt.setTexture2D(D,0),O.copyTexSubImage2D(O.TEXTURE_2D,ee,0,0,Me,Oe,H,me),ke.unbindTexture()};const ho=O.createFramebuffer(),Kn=O.createFramebuffer();this.copyTextureToTexture=function(D,q,ee=null,ie=null,H=0,me=null){me===null&&(H!==0?(Fs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=H,H=0):me=0);let Me,Oe,Pe,Ze,Qe,Xe,dt,pt,$t;const Dt=D.isCompressedTexture?D.mipmaps[me]:D.image;if(ee!==null)Me=ee.max.x-ee.min.x,Oe=ee.max.y-ee.min.y,Pe=ee.isBox3?ee.max.z-ee.min.z:1,Ze=ee.min.x,Qe=ee.min.y,Xe=ee.isBox3?ee.min.z:0;else{const en=Math.pow(2,-H);Me=Math.floor(Dt.width*en),Oe=Math.floor(Dt.height*en),D.isDataArrayTexture?Pe=Dt.depth:D.isData3DTexture?Pe=Math.floor(Dt.depth*en):Pe=1,Ze=0,Qe=0,Xe=0}ie!==null?(dt=ie.x,pt=ie.y,$t=ie.z):(dt=0,pt=0,$t=0);const Tt=We.convert(q.format),Ye=We.convert(q.type);let Lt;q.isData3DTexture?(rt.setTexture3D(q,0),Lt=O.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(rt.setTexture2DArray(q,0),Lt=O.TEXTURE_2D_ARRAY):(rt.setTexture2D(q,0),Lt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,q.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,q.unpackAlignment);const gt=O.getParameter(O.UNPACK_ROW_LENGTH),sn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),xi=O.getParameter(O.UNPACK_SKIP_PIXELS),an=O.getParameter(O.UNPACK_SKIP_ROWS),Bi=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Dt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Dt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ze),O.pixelStorei(O.UNPACK_SKIP_ROWS,Qe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Xe);const Nt=D.isDataArrayTexture||D.isData3DTexture,dn=q.isDataArrayTexture||q.isData3DTexture;if(D.isDepthTexture){const en=Fe.get(D),Wt=Fe.get(q),qt=Fe.get(en.__renderTarget),os=Fe.get(Wt.__renderTarget);ke.bindFramebuffer(O.READ_FRAMEBUFFER,qt.__webglFramebuffer),ke.bindFramebuffer(O.DRAW_FRAMEBUFFER,os.__webglFramebuffer);for(let Dn=0;Dn<Pe;Dn++)Nt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Fe.get(D).__webglTexture,H,Xe+Dn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Fe.get(q).__webglTexture,me,$t+Dn)),O.blitFramebuffer(Ze,Qe,Me,Oe,dt,pt,Me,Oe,O.DEPTH_BUFFER_BIT,O.NEAREST);ke.bindFramebuffer(O.READ_FRAMEBUFFER,null),ke.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(H!==0||D.isRenderTargetTexture||Fe.has(D)){const en=Fe.get(D),Wt=Fe.get(q);ke.bindFramebuffer(O.READ_FRAMEBUFFER,ho),ke.bindFramebuffer(O.DRAW_FRAMEBUFFER,Kn);for(let qt=0;qt<Pe;qt++)Nt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,en.__webglTexture,H,Xe+qt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,en.__webglTexture,H),dn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Wt.__webglTexture,me,$t+qt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Wt.__webglTexture,me),H!==0?O.blitFramebuffer(Ze,Qe,Me,Oe,dt,pt,Me,Oe,O.COLOR_BUFFER_BIT,O.NEAREST):dn?O.copyTexSubImage3D(Lt,me,dt,pt,$t+qt,Ze,Qe,Me,Oe):O.copyTexSubImage2D(Lt,me,dt,pt,Ze,Qe,Me,Oe);ke.bindFramebuffer(O.READ_FRAMEBUFFER,null),ke.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else dn?D.isDataTexture||D.isData3DTexture?O.texSubImage3D(Lt,me,dt,pt,$t,Me,Oe,Pe,Tt,Ye,Dt.data):q.isCompressedArrayTexture?O.compressedTexSubImage3D(Lt,me,dt,pt,$t,Me,Oe,Pe,Tt,Dt.data):O.texSubImage3D(Lt,me,dt,pt,$t,Me,Oe,Pe,Tt,Ye,Dt):D.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,me,dt,pt,Me,Oe,Tt,Ye,Dt.data):D.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,me,dt,pt,Dt.width,Dt.height,Tt,Dt.data):O.texSubImage2D(O.TEXTURE_2D,me,dt,pt,Me,Oe,Tt,Ye,Dt);O.pixelStorei(O.UNPACK_ROW_LENGTH,gt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,sn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,xi),O.pixelStorei(O.UNPACK_SKIP_ROWS,an),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Bi),me===0&&q.generateMipmaps&&O.generateMipmap(Lt),ke.unbindTexture()},this.initRenderTarget=function(D){Fe.get(D).__webglFramebuffer===void 0&&rt.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?rt.setTextureCube(D,0):D.isData3DTexture?rt.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?rt.setTexture2DArray(D,0):rt.setTexture2D(D,0),ke.unbindTexture()},this.resetState=function(){R=0,P=0,$=null,ke.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),n.unpackColorSpace=bt._getUnpackColorSpace()}}const Oh={type:"change"},wc={type:"start"},Yg={type:"end"},Ma=new pc,zh=new Pi,sM=Math.cos(70*cn.DEG2RAD),Xt=new W,hn=2*Math.PI,Pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nl=1e-6;class aM extends bw{constructor(e,n=null){super(e,n),this.state=Pt.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hr.ROTATE,MIDDLE:Hr.DOLLY,RIGHT:Hr.PAN},this.touches={ONE:Or.ROTATE,TWO:Or.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new cr,this._lastTargetPosition=new W,this._quat=new cr().setFromUnitVectors(e.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ch,this._sphericalDelta=new ch,this._scale=1,this._panOffset=new W,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new W,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lM.bind(this),this._onPointerDown=oM.bind(this),this._onPointerUp=uM.bind(this),this._onContextMenu=gM.bind(this),this._onMouseWheel=hM.bind(this),this._onKeyDown=fM.bind(this),this._onTouchStart=pM.bind(this),this._onTouchMove=mM.bind(this),this._onMouseDown=cM.bind(this),this._onMouseMove=dM.bind(this),this._interceptControlDown=_M.bind(this),this._interceptControlUp=vM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Oh),this.update(),this.state=Pt.NONE}update(e=null){const n=this.object.position;Xt.copy(n).sub(this.target),Xt.applyQuaternion(this._quat),this._spherical.setFromVector3(Xt),this.autoRotate&&this.state===Pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=hn:i>Math.PI&&(i-=hn),r<-Math.PI?r+=hn:r>Math.PI&&(r-=hn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Xt.setFromSpherical(this._spherical),Xt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Xt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Xt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new W(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const u=new W(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(o),this.object.updateMatrixWorld(),a=Xt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ma.origin.copy(this.object.position),Ma.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ma.direction))<sM?this.object.lookAt(this.target):(zh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ma.intersectPlane(zh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>nl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nl||this._lastTargetPosition.distanceToSquared(this.target)>nl?(this.dispatchEvent(Oh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?hn/60*this.autoRotateSpeed*e:hn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Xt.setFromMatrixColumn(n,0),Xt.multiplyScalar(-e),this._panOffset.add(Xt)}_panUp(e,n){this.screenSpacePanning===!0?Xt.setFromMatrixColumn(n,1):(Xt.setFromMatrixColumn(n,0),Xt.crossVectors(this.object.up,Xt)),Xt.multiplyScalar(e),this._panOffset.add(Xt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Xt.copy(r).sub(this.target);let s=Xt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/n.clientHeight),this._rotateUp(hn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/n.clientHeight),this._rotateUp(hn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+n.x)*.5,o=(e.pageY+n.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new ot,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function oM(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function lM(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function uM(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Yg),this.state=Pt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function cM(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Hr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Pt.DOLLY;break;case Hr.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Pt.ROTATE}break;case Hr.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Pt.PAN}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(wc)}function dM(t){switch(this.state){case Pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case Pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case Pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function hM(t){this.enabled===!1||this.enableZoom===!1||this.state!==Pt.NONE||(t.preventDefault(),this.dispatchEvent(wc),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Yg))}function fM(t){this.enabled!==!1&&this._handleKeyDown(t)}function pM(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Or.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=Pt.TOUCH_ROTATE;break;case Or.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=Pt.TOUCH_PAN;break;default:this.state=Pt.NONE}break;case 2:switch(this.touches.TWO){case Or.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=Pt.TOUCH_DOLLY_PAN;break;case Or.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=Pt.TOUCH_DOLLY_ROTATE;break;default:this.state=Pt.NONE}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(wc)}function mM(t){switch(this._trackPointer(t),this.state){case Pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case Pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case Pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case Pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=Pt.NONE}}function gM(t){this.enabled!==!1&&t.preventDefault()}function _M(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vM(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}/*!
 * ONNX Runtime Web v1.23.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Sc=Object.defineProperty,yM=Object.getOwnPropertyDescriptor,xM=Object.getOwnPropertyNames,bM=Object.prototype.hasOwnProperty,wM=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')}),ge=(t,e)=>()=>(t&&(e=t(t=0)),e),ts=(t,e)=>{for(var n in e)Sc(t,n,{get:e[n],enumerable:!0})},SM=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of xM(e))!bM.call(t,r)&&r!==n&&Sc(t,r,{get:()=>e[r],enumerable:!(i=yM(e,r))||i.enumerable});return t},Bs=t=>SM(Sc({},"__esModule",{value:!0}),t),gs,Ci,Fr,kh,Zg,Jg=ge(()=>{gs=new Map,Ci=[],Fr=(t,e,n)=>{if(e&&typeof e.init=="function"&&typeof e.createInferenceSessionHandler=="function"){let i=gs.get(t);if(i===void 0)gs.set(t,{backend:e,priority:n});else{if(i.priority>n)return;if(i.priority===n&&i.backend!==e)throw new Error(`cannot register backend "${t}" using priority ${n}`)}if(n>=0){let r=Ci.indexOf(t);r!==-1&&Ci.splice(r,1);for(let s=0;s<Ci.length;s++)if(gs.get(Ci[s]).priority<=n){Ci.splice(s,0,t);return}Ci.push(t)}return}throw new TypeError("not a valid backend")},kh=async t=>{let e=gs.get(t);if(!e)return"backend not found.";if(e.initialized)return e.backend;if(e.aborted)return e.error;{let n=!!e.initPromise;try{return n||(e.initPromise=e.backend.init(t)),await e.initPromise,e.initialized=!0,e.backend}catch(i){return n||(e.error=`${i}`,e.aborted=!0),e.error}finally{delete e.initPromise}}},Zg=async t=>{let e=t.executionProviders||[],n=e.map(l=>typeof l=="string"?l:l.name),i=n.length===0?Ci:n,r,s=[],a=new Set;for(let l of i){let u=await kh(l);typeof u=="string"?s.push({name:l,err:u}):(r||(r=u),r===u&&a.add(l))}if(!r)throw new Error(`no available backend found. ERR: ${s.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:u}of s)n.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${u}`);let o=e.filter(l=>a.has(typeof l=="string"?l:l.name));return[r,new Proxy(t,{get:(l,u)=>u==="executionProviders"?o:Reflect.get(l,u)})]}}),EM=ge(()=>{Jg()}),Qg,TM=ge(()=>{Qg="1.23.0"}),il,Jt,e_=ge(()=>{TM(),il="warning",Jt={wasm:{},webgl:{},webgpu:{},versions:{common:Qg},set logLevel(t){if(t!==void 0){if(typeof t!="string"||["verbose","info","warning","error","fatal"].indexOf(t)===-1)throw new Error(`Unsupported logging level: ${t}`);il=t}},get logLevel(){return il}},Object.defineProperty(Jt,"logLevel",{enumerable:!0})}),Rt,MM=ge(()=>{e_(),Rt=Jt}),t_,n_,AM=ge(()=>{t_=(t,e)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=t.dims[3],n.height=t.dims[2];let i=n.getContext("2d");if(i!=null){let r,s;e?.tensorLayout!==void 0&&e.tensorLayout==="NHWC"?(r=t.dims[2],s=t.dims[3]):(r=t.dims[3],s=t.dims[2]);let a=e?.format!==void 0?e.format:"RGB",o=e?.norm,l,u;o===void 0||o.mean===void 0?l=[255,255,255,255]:typeof o.mean=="number"?l=[o.mean,o.mean,o.mean,o.mean]:(l=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(l[3]=o.mean[3])),o===void 0||o.bias===void 0?u=[0,0,0,0]:typeof o.bias=="number"?u=[o.bias,o.bias,o.bias,o.bias]:(u=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(u[3]=o.bias[3]));let d=s*r,h=0,f=d,m=d*2,_=-1;a==="RGBA"?(h=0,f=d,m=d*2,_=d*3):a==="RGB"?(h=0,f=d,m=d*2):a==="RBG"&&(h=0,m=d,f=d*2);for(let y=0;y<s;y++)for(let v=0;v<r;v++){let p=(t.data[h++]-u[0])*l[0],b=(t.data[f++]-u[1])*l[1],E=(t.data[m++]-u[2])*l[2],w=_===-1?255:(t.data[_++]-u[3])*l[3];i.fillStyle="rgba("+p+","+b+","+E+","+w+")",i.fillRect(v,y,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},n_=(t,e)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(n!=null){let r,s,a;e?.tensorLayout!==void 0&&e.tensorLayout==="NHWC"?(r=t.dims[2],s=t.dims[1],a=t.dims[3]):(r=t.dims[3],s=t.dims[2],a=t.dims[1]);let o=e!==void 0&&e.format!==void 0?e.format:"RGB",l=e?.norm,u,d;l===void 0||l.mean===void 0?u=[255,255,255,255]:typeof l.mean=="number"?u=[l.mean,l.mean,l.mean,l.mean]:(u=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(u[3]=l.mean[3])),l===void 0||l.bias===void 0?d=[0,0,0,0]:typeof l.bias=="number"?d=[l.bias,l.bias,l.bias,l.bias]:(d=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(d[3]=l.bias[3]));let h=s*r;if(e!==void 0&&(e.format!==void 0&&a===4&&e.format!=="RGBA"||a===3&&e.format!=="RGB"&&e.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let f=4,m=0,_=1,y=2,v=3,p=0,b=h,E=h*2,w=-1;o==="RGBA"?(p=0,b=h,E=h*2,w=h*3):o==="RGB"?(p=0,b=h,E=h*2):o==="RBG"&&(p=0,E=h,b=h*2),i=n.createImageData(r,s);for(let T=0;T<s*r;m+=f,_+=f,y+=f,v+=f,T++)i.data[m]=(t.data[p++]-d[0])*u[0],i.data[_]=(t.data[b++]-d[1])*u[1],i.data[y]=(t.data[E++]-d[2])*u[2],i.data[v]=w===-1?255:(t.data[w++]-d[3])*u[3]}else throw new Error("Can not access image data");return i}}),Aa,i_,r_,s_,a_,o_,CM=ge(()=>{Ec(),Aa=(t,e)=>{if(t===void 0)throw new Error("Image buffer must be defined");if(e.height===void 0||e.width===void 0)throw new Error("Image height and width must be defined");if(e.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:i}=e,r=e.norm??{mean:255,bias:0},s,a;typeof r.mean=="number"?s=[r.mean,r.mean,r.mean,r.mean]:s=[r.mean[0],r.mean[1],r.mean[2],r.mean[3]??255],typeof r.bias=="number"?a=[r.bias,r.bias,r.bias,r.bias]:a=[r.bias[0],r.bias[1],r.bias[2],r.bias[3]??0];let o=e.format!==void 0?e.format:"RGBA",l=e.tensorFormat!==void 0&&e.tensorFormat!==void 0?e.tensorFormat:"RGB",u=n*i,d=l==="RGBA"?new Float32Array(u*4):new Float32Array(u*3),h=4,f=0,m=1,_=2,y=3,v=0,p=u,b=u*2,E=-1;o==="RGB"&&(h=3,f=0,m=1,_=2,y=-1),l==="RGBA"?E=u*3:l==="RBG"?(v=0,b=u,p=u*2):l==="BGR"&&(b=0,p=u,v=u*2);for(let w=0;w<u;w++,f+=h,_+=h,m+=h,y+=h)d[v++]=(t[f]+a[0])/s[0],d[p++]=(t[m]+a[1])/s[1],d[b++]=(t[_]+a[2])/s[2],E!==-1&&y!==-1&&(d[E++]=(t[y]+a[3])/s[3]);return l==="RGBA"?new wn("float32",d,[1,4,n,i]):new wn("float32",d,[1,3,n,i])},i_=async(t,e)=>{let n=typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement,i=typeof ImageData<"u"&&t instanceof ImageData,r=typeof ImageBitmap<"u"&&t instanceof ImageBitmap,s=typeof t=="string",a,o=e??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},u=d=>typeof HTMLCanvasElement<"u"&&d instanceof HTMLCanvasElement||d instanceof OffscreenCanvas?d.getContext("2d"):null;if(n){let d=l();d.width=t.width,d.height=t.height;let h=u(d);if(h!=null){let f=t.height,m=t.width;if(e!==void 0&&e.resizedHeight!==void 0&&e.resizedWidth!==void 0&&(f=e.resizedHeight,m=e.resizedWidth),e!==void 0){if(o=e,e.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=f,o.width=m}else o.tensorFormat="RGBA",o.height=f,o.width=m;h.drawImage(t,0,0),a=h.getImageData(0,0,m,f).data}else throw new Error("Can not access image data")}else if(i){let d,h;if(e!==void 0&&e.resizedWidth!==void 0&&e.resizedHeight!==void 0?(d=e.resizedHeight,h=e.resizedWidth):(d=t.height,h=t.width),e!==void 0&&(o=e),o.format="RGBA",o.height=d,o.width=h,e!==void 0){let f=l();f.width=h,f.height=d;let m=u(f);if(m!=null)m.putImageData(t,0,0),a=m.getImageData(0,0,h,d).data;else throw new Error("Can not access image data")}else a=t.data}else if(r){if(e===void 0)throw new Error("Please provide image config with format for Imagebitmap");let d=l();d.width=t.width,d.height=t.height;let h=u(d);if(h!=null){let f=t.height,m=t.width;return h.drawImage(t,0,0,m,f),a=h.getImageData(0,0,m,f).data,o.height=f,o.width=m,Aa(a,o)}else throw new Error("Can not access image data")}else{if(s)return new Promise((d,h)=>{let f=l(),m=u(f);if(!t||!m)return h();let _=new Image;_.crossOrigin="Anonymous",_.src=t,_.onload=()=>{f.width=_.width,f.height=_.height,m.drawImage(_,0,0,f.width,f.height);let y=m.getImageData(0,0,f.width,f.height);o.height=f.height,o.width=f.width,d(Aa(y.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return Aa(a,o);throw new Error("Input data provided is not supported - aborted tensor creation")},r_=(t,e)=>{let{width:n,height:i,download:r,dispose:s}=e,a=[1,i,n,4];return new wn({location:"texture",type:"float32",texture:t,dims:a,download:r,dispose:s})},s_=(t,e)=>{let{dataType:n,dims:i,download:r,dispose:s}=e;return new wn({location:"gpu-buffer",type:n??"float32",gpuBuffer:t,dims:i,download:r,dispose:s})},a_=(t,e)=>{let{dataType:n,dims:i,download:r,dispose:s}=e;return new wn({location:"ml-tensor",type:n??"float32",mlTensor:t,dims:i,download:r,dispose:s})},o_=(t,e,n)=>new wn({location:"cpu-pinned",type:t,data:e,dims:n??[e.length]})}),nr,Cs,rl,l_,RM=ge(()=>{nr=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Cs=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),rl=!1,l_=()=>{if(!rl){rl=!0;let t=typeof BigInt64Array<"u"&&BigInt64Array.from,e=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,i=typeof n<"u"&&n.from;t&&(nr.set("int64",BigInt64Array),Cs.set(BigInt64Array,"int64")),e&&(nr.set("uint64",BigUint64Array),Cs.set(BigUint64Array,"uint64")),i?(nr.set("float16",n),Cs.set(n,"float16")):nr.set("float16",Uint16Array)}}}),u_,c_,IM=ge(()=>{Ec(),u_=t=>{let e=1;for(let n=0;n<t.length;n++){let i=t[n];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${n}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${i}`);e*=i}return e},c_=(t,e)=>{switch(t.location){case"cpu":return new wn(t.type,t.data,e);case"cpu-pinned":return new wn({location:"cpu-pinned",data:t.data,type:t.type,dims:e});case"texture":return new wn({location:"texture",texture:t.texture,type:t.type,dims:e});case"gpu-buffer":return new wn({location:"gpu-buffer",gpuBuffer:t.gpuBuffer,type:t.type,dims:e});case"ml-tensor":return new wn({location:"ml-tensor",mlTensor:t.mlTensor,type:t.type,dims:e});default:throw new Error(`tensorReshape: tensor location ${t.location} is not supported`)}}}),wn,Ec=ge(()=>{AM(),CM(),RM(),IM(),wn=class{constructor(t,e,n){l_();let i,r;if(typeof t=="object"&&"location"in t)switch(this.dataLocation=t.location,i=t.type,r=t.dims,t.location){case"cpu-pinned":{let a=nr.get(i);if(!a)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(t.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=t.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=t.texture,this.downloader=t.download,this.disposer=t.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=t.gpuBuffer,this.downloader=t.download,this.disposer=t.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=t.mlTensor,this.downloader=t.download,this.disposer=t.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof t=="string")if(i=t,o=n,t==="string"){if(!Array.isArray(e))throw new TypeError("A string tensor's data must be a string array.");a=e}else{let l=nr.get(t);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${t}.`);if(Array.isArray(e)){if(t==="float16"&&l===Uint16Array||t==="uint4"||t==="int4")throw new TypeError(`Creating a ${t} tensor from number array is not supported. Please use ${l.name} as data.`);t==="uint64"||t==="int64"?a=l.from(e,BigInt):a=l.from(e)}else if(e instanceof l)a=e;else if(e instanceof Uint8ClampedArray)if(t==="uint8")a=Uint8Array.from(e);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(t==="float16"&&e instanceof Uint16Array&&l!==Uint16Array)a=new globalThis.Float16Array(e.buffer,e.byteOffset,e.length);else throw new TypeError(`A ${i} tensor's data must be type of ${l}`)}else if(o=e,Array.isArray(t)){if(t.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof t[0];if(l==="string")i="string",a=t;else if(l==="boolean")i="bool",a=Uint8Array.from(t);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(t instanceof Uint8ClampedArray)i="uint8",a=Uint8Array.from(t);else{let l=Cs.get(t.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${t.constructor}.`);i=l,a=t}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");r=o,this.cpuData=a,this.dataLocation="cpu"}let s=u_(r);if(this.cpuData&&s!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=r,this.size=s}static async fromImage(t,e){return i_(t,e)}static fromTexture(t,e){return r_(t,e)}static fromGpuBuffer(t,e){return s_(t,e)}static fromMLTensor(t,e){return a_(t,e)}static fromPinnedBuffer(t,e,n){return o_(t,e,n)}toDataURL(t){return t_(this,t)}toImageData(t){return n_(this,t)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(t){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let e=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=e,t&&this.disposer&&(this.disposer(),this.disposer=void 0),e}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(t){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return c_(this,t)}}}),Vn,d_=ge(()=>{Ec(),Vn=wn}),Qa,sl,ri,qn,or,lr,h_=ge(()=>{e_(),Qa=(t,e)=>{(typeof Jt.trace>"u"?!Jt.wasm.trace:!Jt.trace)||console.timeStamp(`${t}::ORT::${e}`)},sl=(t,e)=>{let n=new Error().stack?.split(/\r\n|\r|\n/g)||[],i=!1;for(let r=0;r<n.length;r++){if(i&&!n[r].includes("TRACE_FUNC")){let s=`FUNC_${t}::${n[r].trim().split(" ")[1]}`;e&&(s+=`::${e}`),Qa("CPU",s);return}n[r].includes("TRACE_FUNC")&&(i=!0)}},ri=t=>{(typeof Jt.trace>"u"?!Jt.wasm.trace:!Jt.trace)||sl("BEGIN",t)},qn=t=>{(typeof Jt.trace>"u"?!Jt.wasm.trace:!Jt.trace)||sl("END",t)},or=t=>{(typeof Jt.trace>"u"?!Jt.wasm.trace:!Jt.trace)||console.time(`ORT::${t}`)},lr=t=>{(typeof Jt.trace>"u"?!Jt.wasm.trace:!Jt.trace)||console.timeEnd(`ORT::${t}`)}}),f_,PM=ge(()=>{Jg(),d_(),h_(),f_=class p_{constructor(e){this.handler=e}async run(e,n,i){ri(),or("InferenceSession.run");let r={},s={};if(typeof e!="object"||e===null||e instanceof Vn||Array.isArray(e))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof Vn)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let u of n){if(typeof u!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(u)===-1)throw new RangeError(`'fetches' contains invalid output name: ${u}.`);r[u]=null}if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let u=!1,d=Object.getOwnPropertyNames(n);for(let h of this.outputNames)if(d.indexOf(h)!==-1){let f=n[h];(f===null||f instanceof Vn)&&(u=!0,a=!1,r[h]=f)}if(u){if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else s=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let u of this.inputNames)if(typeof e[u]>"u")throw new Error(`input '${u}' is missing in 'feeds'.`);if(a)for(let u of this.outputNames)r[u]=null;let o=await this.handler.run(e,r,s),l={};for(let u in o)if(Object.hasOwnProperty.call(o,u)){let d=o[u];d instanceof Vn?l[u]=d:l[u]=new Vn(d.type,d.data,d.dims)}return lr("InferenceSession.run"),qn(),l}async release(){return this.handler.dispose()}static async create(e,n,i,r){ri(),or("InferenceSession.create");let s,a={};if(typeof e=="string"){if(s=e,typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(e instanceof Uint8Array){if(s=e,typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer){let d=e,h=0,f=e.byteLength;if(typeof n=="object"&&n!==null)a=n;else if(typeof n=="number"){if(h=n,!Number.isSafeInteger(h))throw new RangeError("'byteOffset' must be an integer.");if(h<0||h>=d.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${d.byteLength}).`);if(f=e.byteLength-h,typeof i=="number"){if(f=i,!Number.isSafeInteger(f))throw new RangeError("'byteLength' must be an integer.");if(f<=0||h+f>d.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${d.byteLength-h}].`);if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(d,h,f)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,l]=await Zg(a),u=await o.createInferenceSessionHandler(s,l);return lr("InferenceSession.create"),qn(),new p_(u)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Tc,DM=ge(()=>{PM(),Tc=f_}),$M=ge(()=>{}),LM=ge(()=>{}),NM=ge(()=>{}),UM=ge(()=>{}),OM={};ts(OM,{InferenceSession:()=>Tc,TRACE:()=>Qa,TRACE_EVENT_BEGIN:()=>or,TRACE_EVENT_END:()=>lr,TRACE_FUNC_BEGIN:()=>ri,TRACE_FUNC_END:()=>qn,Tensor:()=>Vn,env:()=>Rt,registerBackend:()=>Fr});var In=ge(()=>{EM(),MM(),DM(),d_(),$M(),LM(),h_(),NM(),UM()}),Mc=ge(()=>{}),m_={};ts(m_,{default:()=>g_});var al,ol,g_,zM=ge(()=>{by(),gr(),Ac(),al="ort-wasm-proxy-worker",ol=globalThis.self?.name===al,ol&&(self.onmessage=t=>{let{type:e,in:n}=t.data;try{switch(e){case"init-wasm":Cc(n.wasm).then(()=>{Wc(n).then(()=>{postMessage({type:e})},i=>{postMessage({type:e,err:i})})},i=>{postMessage({type:e,err:i})});break;case"init-ep":{let{epName:i,env:r}=n;qc(r,i).then(()=>{postMessage({type:e})},s=>{postMessage({type:e,err:s})});break}case"copy-from":{let{buffer:i}=n,r=ao(i);postMessage({type:e,out:r});break}case"create":{let{model:i,options:r}=n;Xc(i,r).then(s=>{postMessage({type:e,out:s})},s=>{postMessage({type:e,err:s})});break}case"release":jc(n),postMessage({type:e});break;case"run":{let{sessionId:i,inputIndices:r,inputs:s,outputIndices:a,options:o}=n;Kc(i,r,s,a,new Array(a.length).fill(null),o).then(l=>{l.some(u=>u[3]!=="cpu")?postMessage({type:e,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:e,out:l},Zc([...s,...l]))},l=>{postMessage({type:e,err:l})});break}case"end-profiling":Yc(n),postMessage({type:e});break;default:}}catch(i){postMessage({type:e,err:i})}}),g_=ol?null:t=>new Worker(t??bn,{type:"module",name:al})}),__={};ts(__,{default:()=>v_});var ll,v_,Fh,kM=ge(()=>{ll=async function(t={}){var e,n,i=t,r=new Promise((c,g)=>{e=c,n=g}),s=typeof window=="object",a=typeof WorkerGlobalScope<"u",o=a&&self.name?.startsWith("em-pthread");i.mountExternalData=(c,g)=>{c.startsWith("./")&&(c=c.substring(2)),(i.Fb||(i.Fb=new Map)).set(c,g)},i.unmountExternalData=()=>{delete i.Fb};var l=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,qc:!0}).buffer.constructor;let u=c=>async(...g)=>{try{if(i.Gb)throw Error("Session already started");let x=i.Gb={ec:g[0],errors:[]},S=await c(...g);if(i.Gb!==x)throw Error("Session mismatch");i.Kb?.flush();let M=x.errors;if(0<M.length){let N=await Promise.all(M);if(N=N.filter(B=>B),0<N.length)throw Error(N.join(`
`))}return S}finally{i.Gb=null}};i.jsepInit=(c,g)=>{if(c==="webgpu"){[i.Kb,i.Vb,i.Zb,i.Lb,i.Yb,i.Ab,i.$b,i.bc,i.Wb,i.Xb,i.ac]=g;let x=i.Kb;i.jsepRegisterBuffer=(S,M,N,B)=>x.registerBuffer(S,M,N,B),i.jsepGetBuffer=S=>x.getBuffer(S),i.jsepCreateDownloader=(S,M,N)=>x.createDownloader(S,M,N),i.jsepOnCreateSession=S=>{x.onCreateSession(S)},i.jsepOnReleaseSession=S=>{x.onReleaseSession(S)},i.jsepOnRunStart=S=>x.onRunStart(S),i.cc=(S,M)=>{x.upload(S,M)}}else if(c==="webnn"){let x=g[0];[i.oc,i.Ob,i.webnnEnsureTensor,i.Pb,i.webnnDownloadTensor,i.nc,i.webnnEnableTraceEvent]=g.slice(1),i.webnnReleaseTensorId=i.Ob,i.webnnUploadTensor=i.Pb,i.webnnRegisterMLContext=i.nc,i.webnnOnRunStart=S=>x.onRunStart(S),i.webnnOnRunEnd=x.onRunEnd.bind(x),i.webnnOnReleaseSession=S=>{x.onReleaseSession(S)},i.webnnCreateMLTensorDownloader=(S,M)=>x.createMLTensorDownloader(S,M),i.webnnRegisterMLTensor=(S,M,N,B)=>x.registerMLTensor(S,M,N,B),i.webnnCreateMLContext=S=>x.createMLContext(S),i.webnnRegisterMLConstant=(S,M,N,B,re,de)=>x.registerMLConstant(S,M,N,B,re,i.Fb,de),i.webnnRegisterGraphInput=x.registerGraphInput.bind(x),i.webnnIsGraphInput=x.isGraphInput.bind(x),i.webnnRegisterGraphOutput=x.registerGraphOutput.bind(x),i.webnnIsGraphOutput=x.isGraphOutput.bind(x),i.webnnCreateTemporaryTensor=x.createTemporaryTensor.bind(x),i.webnnIsGraphInputOutputTypeSupported=x.isGraphInputOutputTypeSupported.bind(x)}};let d=()=>{let c=(g,x,S)=>(...M)=>{let N=Yn,B=x?.();M=g(...M);let re=x?.();return B!==re&&(g=re,S(B),x=S=null),Yn!=N?new Promise((de,ve)=>{fo={resolve:de,reject:ve}}):M};(()=>{for(let g of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])i[g]=c(i[g],()=>i[g],x=>i[g]=x)})(),u!==void 0&&(i._OrtRun=u(i._OrtRun),i._OrtRunWithBinding=u(i._OrtRunWithBinding)),d=void 0};i.asyncInit=()=>{d?.()};var h,f,m=(c,g)=>{throw g},_=import.meta.url,y="";if(s||a){try{y=new URL(".",_).href}catch{}a&&(f=c=>{var g=new XMLHttpRequest;return g.open("GET",c,!1),g.responseType="arraybuffer",g.send(null),new Uint8Array(g.response)}),h=async c=>{if(_e(c))return new Promise((x,S)=>{var M=new XMLHttpRequest;M.open("GET",c,!0),M.responseType="arraybuffer",M.onload=()=>{M.status==200||M.status==0&&M.response?x(M.response):S(M.status)},M.onerror=S,M.send(null)});var g=await fetch(c,{credentials:"same-origin"});if(g.ok)return g.arrayBuffer();throw Error(g.status+" : "+g.url)}}var v,p,b,E,w,T,R,P,$,A,C,U,z,V,k,K=console.log.bind(console),G=console.error.bind(console),Z=K,X=G,te=!1,_e=c=>c.startsWith("file://");function j(){return p.buffer!=w.buffer&&Te(),w}function le(){return p.buffer!=w.buffer&&Te(),T}function Ee(){return p.buffer!=w.buffer&&Te(),R}function He(){return p.buffer!=w.buffer&&Te(),P}function J(){return p.buffer!=w.buffer&&Te(),$}function Q(){return p.buffer!=w.buffer&&Te(),A}function fe(){return p.buffer!=w.buffer&&Te(),C}function we(){return p.buffer!=w.buffer&&Te(),V}if(o){let c=function(g){try{var x=g.data,S=x.Db;if(S==="load"){let M=[];self.onmessage=N=>M.push(N),self.startWorker=()=>{postMessage({Db:"loaded"});for(let N of M)c(N);self.onmessage=c};for(let N of x.Sb)i[N]&&!i[N].proxy||(i[N]=(...B)=>{postMessage({Db:"callHandler",Rb:N,args:B})},N=="print"&&(Z=i[N]),N=="printErr"&&(X=i[N]));p=x.kc,Te(),k(x.lc)}else if(S==="run"){Je(x.Bb),yo(x.Bb,0,0,1,0,0),Ve(),Wt(x.Bb),Ie||(bd(),Ie=!0);try{We(x.hc,x.Jb)}catch(M){if(M!="unwind")throw M}}else x.target!=="setimmediate"&&(S==="checkMailbox"?Ie&&qt():S&&(X(`worker: received unknown command ${S}`),X(x)))}catch(M){throw wd(),M}};var Ie=!1;self.onunhandledrejection=g=>{throw g.reason||g},self.onmessage=c}function Te(){var c=p.buffer;i.HEAP8=w=new Int8Array(c),R=new Int16Array(c),i.HEAPU8=T=new Uint8Array(c),P=new Uint16Array(c),i.HEAP32=$=new Int32Array(c),i.HEAPU32=A=new Uint32Array(c),C=new Float32Array(c),V=new Float64Array(c),U=new BigInt64Array(c),z=new BigUint64Array(c)}function ct(){o?startWorker(i):ae.Da()}var zt,O=0,St=null;function it(){if(--O==0&&St){var c=St;St=null,c()}}function qe(c){throw X(c="Aborted("+c+")"),te=!0,c=new WebAssembly.RuntimeError(c+". Build with -sASSERTIONS for more info."),n(c),c}function ke(){return{a:{L:Ix,Aa:Rx,b:st,$:xe,A:he,pa:Ue,X:tt,Z:Mt,qa:vt,na:Tn,ga:gn,ma:ns,J:jn,Y:vr,V:is,oa:rs,W:Fi,va:yr,E:ho,Q:D,O:Pe,D:Qe,v:Xe,s:dt,P:Dt,z:Bi,R:Nt,ja:dn,T:os,aa:Uy,M:Oy,F:zy,ia:Wt,sa:ky,r:Fy,Ca:By,w:Gy,o:Wy,m:Xy,c:ie,Ba:jy,n:Ky,j:Jy,u:Qy,p:ex,f:tx,t:nx,l:ix,e:rx,k:sx,h:ax,g:ox,d:lx,da:ux,ea:cx,fa:dx,ba:od,ca:ld,N:ud,xa:fx,ua:mx,i:gx,C:_x,G:vx,ta:px,x:yx,ra:xx,U:bx,q:hx,y:wx,K:Sx,S:Ex,za:Tx,ya:Mx,ka:fd,la:pd,_:ue,B:md,I:gd,ha:_d,H:vd,a:p,wa:I}}}class At{name="ExitStatus";constructor(g){this.message=`Program terminated with exit(${g})`,this.status=g}}var Fe=c=>{c.terminate(),c.onmessage=()=>{}},rt=[],Bt=c=>{pe.length==0&&(Re(),ye(pe[0]));var g=pe.pop();if(!g)return 6;se.push(g),be[c.Bb]=g,g.Bb=c.Bb;var x={Db:"run",hc:c.fc,Jb:c.Jb,Bb:c.Bb};return g.postMessage(x,c.Nb),0},Et=0,L=(c,g,...x)=>{for(var S=2*x.length,M=wo(),N=bo(8*S),B=N>>>3,re=0;re<x.length;re++){var de=x[re];typeof de=="bigint"?(U[B+2*re]=1n,U[B+2*re+1]=de):(U[B+2*re]=0n,we()[B+2*re+1>>>0]=de)}return c=Sd(c,0,S,N,g),ta(M),c};function I(c){if(o)return L(0,1,c);if(E=c,!(0<Et)){for(var g of se)Fe(g);for(g of pe)Fe(g);pe=[],se=[],be={},te=!0}m(0,new At(c))}function Y(c){if(o)return L(1,0,c);ue(c)}var ue=c=>{if(E=c,o)throw Y(c),"unwind";I(c)},pe=[],se=[],Ge=[],be={},Be=c=>{var g=c.Bb;delete be[g],pe.push(c),se.splice(se.indexOf(c),1),c.Bb=0,Ed(g)};function Ve(){Ge.forEach(c=>c())}var ye=c=>new Promise(g=>{c.onmessage=M=>{var N=(M=M.data).Db;if(M.Hb&&M.Hb!=vo()){var B=be[M.Hb];B?B.postMessage(M,M.Nb):X(`Internal error! Worker sent a message "${N}" to target pthread ${M.Hb}, but that thread no longer exists!`)}else N==="checkMailbox"?qt():N==="spawnThread"?Bt(M):N==="cleanupThread"?Be(be[M.ic]):N==="loaded"?(c.loaded=!0,g(c)):M.target==="setimmediate"?c.postMessage(M):N==="callHandler"?i[M.Rb](...M.args):N&&X(`worker sent an unknown command ${N}`)},c.onerror=M=>{throw X(`worker sent an error! ${M.filename}:${M.lineno}: ${M.message}`),M};var x,S=[];for(x of[])i.propertyIsEnumerable(x)&&S.push(x);c.postMessage({Db:"load",Sb:S,kc:p,lc:b})});function Re(){var c=new Worker((()=>{let g=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new g("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});pe.push(c)}var Je=c=>{Te();var g=Q()[c+52>>>2>>>0];c=Q()[c+56>>>2>>>0],Ad(g,g-c),ta(g)},We=(c,g)=>{Et=0,c=Cd(c,g),0<Et?E=c:xo(c)};class Ae{constructor(g){this.Ib=g-24}}function st(c,g,x){var S=new Ae(c>>>=0);throw g>>>=0,x>>>=0,Q()[S.Ib+16>>>2>>>0]=0,Q()[S.Ib+4>>>2>>>0]=g,Q()[S.Ib+8>>>2>>>0]=x,c}function F(c,g,x,S){return o?L(2,1,c,g,x,S):xe(c,g,x,S)}function xe(c,g,x,S){if(c>>>=0,x>>>=0,S>>>=0,l===void 0)return 6;var M=[];return o&&M.length===0?F(c,g>>>=0,x,S):(c={fc:x,Bb:c,Jb:S,Nb:M},o?(c.Db="spawnThread",postMessage(c,M),0):Bt(c))}var Se=typeof TextDecoder<"u"?new TextDecoder:void 0,Le=(c,g=0,x=NaN)=>{var S=(g>>>=0)+x;for(x=g;c[x]&&!(x>=S);)++x;if(16<x-g&&c.buffer&&Se)return Se.decode(c.buffer instanceof ArrayBuffer?c.subarray(g,x):c.slice(g,x));for(S="";g<x;){var M=c[g++];if(128&M){var N=63&c[g++];if((224&M)==192)S+=String.fromCharCode((31&M)<<6|N);else{var B=63&c[g++];65536>(M=(240&M)==224?(15&M)<<12|N<<6|B:(7&M)<<18|N<<12|B<<6|63&c[g++])?S+=String.fromCharCode(M):(M-=65536,S+=String.fromCharCode(55296|M>>10,56320|1023&M))}}else S+=String.fromCharCode(M)}return S},ce=(c,g)=>(c>>>=0)?Le(le(),c,g):"";function he(c,g,x){return o?L(3,1,c,g,x):0}function Ue(c,g){if(o)return L(4,1,c,g)}function tt(c,g){if(o)return L(5,1,c,g)}function Mt(c,g,x){if(o)return L(6,1,c,g,x)}function vt(c,g,x){return o?L(7,1,c,g,x):0}function Tn(c,g){if(o)return L(8,1,c,g)}function gn(c,g,x){if(o)return L(9,1,c,g,x)}function ns(c,g,x,S){if(o)return L(10,1,c,g,x,S)}function jn(c,g,x,S){if(o)return L(11,1,c,g,x,S)}function vr(c,g,x,S){if(o)return L(12,1,c,g,x,S)}function is(c){if(o)return L(13,1,c)}function rs(c,g){if(o)return L(14,1,c,g)}function Fi(c,g,x){if(o)return L(15,1,c,g,x)}var ss,yr=()=>qe(""),_n=c=>{for(var g="";le()[c>>>0];)g+=ss[le()[c++>>>0]];return g},xr={},as={},yi=i.BindingError=class extends Error{constructor(c){super(c),this.name="BindingError"}};function Pn(c,g,x={}){return(function(S,M,N={}){var B=M.name;if(!S)throw new yi(`type "${B}" must have a positive integer typeid pointer`);if(as.hasOwnProperty(S)){if(N.Tb)return;throw new yi(`Cannot register type '${B}' twice`)}as[S]=M,xr.hasOwnProperty(S)&&(M=xr[S],delete xr[S],M.forEach(re=>re()))})(c,g,x)}var qs=(c,g,x)=>{switch(g){case 1:return x?S=>j()[S>>>0]:S=>le()[S>>>0];case 2:return x?S=>Ee()[S>>>1>>>0]:S=>He()[S>>>1>>>0];case 4:return x?S=>J()[S>>>2>>>0]:S=>Q()[S>>>2>>>0];case 8:return x?S=>U[S>>>3]:S=>z[S>>>3];default:throw new TypeError(`invalid integer width (${g}): ${c}`)}};function ho(c,g,x){x>>>=0,Pn(c>>>=0,{name:g=_n(g>>>0),fromWireType:S=>S,toWireType:function(S,M){if(typeof M!="bigint"&&typeof M!="number")throw M=M===null?"null":(S=typeof M)=="object"||S==="array"||S==="function"?M.toString():""+M,new TypeError(`Cannot convert "${M}" to ${this.name}`);return typeof M=="number"&&(M=BigInt(M)),M},Cb:Kn,readValueFromPointer:qs(g,x,g.indexOf("u")==-1),Eb:null})}var Kn=8;function D(c,g,x,S){Pn(c>>>=0,{name:g=_n(g>>>0),fromWireType:function(M){return!!M},toWireType:function(M,N){return N?x:S},Cb:Kn,readValueFromPointer:function(M){return this.fromWireType(le()[M>>>0])},Eb:null})}var q=[],ee=[];function ie(c){9<(c>>>=0)&&--ee[c+1]==0&&(ee[c]=void 0,q.push(c))}var H=c=>{if(!c)throw new yi(`Cannot use deleted val. handle = ${c}`);return ee[c]},me=c=>{switch(c){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let g=q.pop()||ee.length;return ee[g]=c,ee[g+1]=1,g}};function Me(c){return this.fromWireType(Q()[c>>>2>>>0])}var Oe={name:"emscripten::val",fromWireType:c=>{var g=H(c);return ie(c),g},toWireType:(c,g)=>me(g),Cb:Kn,readValueFromPointer:Me,Eb:null};function Pe(c){return Pn(c>>>0,Oe)}var Ze=(c,g)=>{switch(g){case 4:return function(x){return this.fromWireType(fe()[x>>>2>>>0])};case 8:return function(x){return this.fromWireType(we()[x>>>3>>>0])};default:throw new TypeError(`invalid float width (${g}): ${c}`)}};function Qe(c,g,x){x>>>=0,Pn(c>>>=0,{name:g=_n(g>>>0),fromWireType:S=>S,toWireType:(S,M)=>M,Cb:Kn,readValueFromPointer:Ze(g,x),Eb:null})}function Xe(c,g,x,S,M){if(c>>>=0,x>>>=0,g=_n(g>>>0),M===-1&&(M=4294967295),M=re=>re,S===0){var N=32-8*x;M=re=>re<<N>>>N}var B=g.includes("unsigned")?function(re,de){return de>>>0}:function(re,de){return de};Pn(c,{name:g,fromWireType:M,toWireType:B,Cb:Kn,readValueFromPointer:qs(g,x,S!==0),Eb:null})}function dt(c,g,x){function S(N){var B=Q()[N>>>2>>>0];return N=Q()[N+4>>>2>>>0],new M(j().buffer,N,B)}var M=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][g];Pn(c>>>=0,{name:x=_n(x>>>0),fromWireType:S,Cb:Kn,readValueFromPointer:S},{Tb:!0})}var pt=(c,g,x)=>{var S=le();if(g>>>=0,0<x){var M=g;x=g+x-1;for(var N=0;N<c.length;++N){var B=c.charCodeAt(N);if(55296<=B&&57343>=B&&(B=65536+((1023&B)<<10)|1023&c.charCodeAt(++N)),127>=B){if(g>=x)break;S[g++>>>0]=B}else{if(2047>=B){if(g+1>=x)break;S[g++>>>0]=192|B>>6}else{if(65535>=B){if(g+2>=x)break;S[g++>>>0]=224|B>>12}else{if(g+3>=x)break;S[g++>>>0]=240|B>>18,S[g++>>>0]=128|B>>12&63}S[g++>>>0]=128|B>>6&63}S[g++>>>0]=128|63&B}}S[g>>>0]=0,c=g-M}else c=0;return c},$t=c=>{for(var g=0,x=0;x<c.length;++x){var S=c.charCodeAt(x);127>=S?g++:2047>=S?g+=2:55296<=S&&57343>=S?(g+=4,++x):g+=3}return g};function Dt(c,g){Pn(c>>>=0,{name:g=_n(g>>>0),fromWireType:function(x){for(var S,M=Q()[x>>>2>>>0],N=x+4,B=N,re=0;re<=M;++re){var de=N+re;re!=M&&le()[de>>>0]!=0||(B=ce(B,de-B),S===void 0?S=B:(S+="\0",S+=B),B=de+1)}return si(x),S},toWireType:function(x,S){S instanceof ArrayBuffer&&(S=new Uint8Array(S));var M=typeof S=="string";if(!(M||ArrayBuffer.isView(S)&&S.BYTES_PER_ELEMENT==1))throw new yi("Cannot pass non-string to std::string");var N=M?$t(S):S.length,B=ea(4+N+1),re=B+4;return Q()[B>>>2>>>0]=N,M?pt(S,re,N+1):le().set(S,re>>>0),x!==null&&x.push(si,B),B},Cb:Kn,readValueFromPointer:Me,Eb(x){si(x)}})}var Tt=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Ye=(c,g)=>{for(var x=c>>1,S=x+g/2;!(x>=S)&&He()[x>>>0];)++x;if(32<(x<<=1)-c&&Tt)return Tt.decode(le().slice(c,x));for(x="",S=0;!(S>=g/2);++S){var M=Ee()[c+2*S>>>1>>>0];if(M==0)break;x+=String.fromCharCode(M)}return x},Lt=(c,g,x)=>{if(x??=2147483647,2>x)return 0;var S=g;x=(x-=2)<2*c.length?x/2:c.length;for(var M=0;M<x;++M){var N=c.charCodeAt(M);Ee()[g>>>1>>>0]=N,g+=2}return Ee()[g>>>1>>>0]=0,g-S},gt=c=>2*c.length,sn=(c,g)=>{for(var x=0,S="";!(x>=g/4);){var M=J()[c+4*x>>>2>>>0];if(M==0)break;++x,65536<=M?(M-=65536,S+=String.fromCharCode(55296|M>>10,56320|1023&M)):S+=String.fromCharCode(M)}return S},xi=(c,g,x)=>{if(g>>>=0,x??=2147483647,4>x)return 0;var S=g;x=S+x-4;for(var M=0;M<c.length;++M){var N=c.charCodeAt(M);if(55296<=N&&57343>=N&&(N=65536+((1023&N)<<10)|1023&c.charCodeAt(++M)),J()[g>>>2>>>0]=N,(g+=4)+4>x)break}return J()[g>>>2>>>0]=0,g-S},an=c=>{for(var g=0,x=0;x<c.length;++x){var S=c.charCodeAt(x);55296<=S&&57343>=S&&++x,g+=4}return g};function Bi(c,g,x){if(c>>>=0,g>>>=0,x=_n(x>>>=0),g===2)var S=Ye,M=Lt,N=gt,B=re=>He()[re>>>1>>>0];else g===4&&(S=sn,M=xi,N=an,B=re=>Q()[re>>>2>>>0]);Pn(c,{name:x,fromWireType:re=>{for(var de,ve=Q()[re>>>2>>>0],De=re+4,je=0;je<=ve;++je){var at=re+4+je*g;je!=ve&&B(at)!=0||(De=S(De,at-De),de===void 0?de=De:(de+="\0",de+=De),De=at+g)}return si(re),de},toWireType:(re,de)=>{if(typeof de!="string")throw new yi(`Cannot pass non-string to C++ string type ${x}`);var ve=N(de),De=ea(4+ve+g);return Q()[De>>>2>>>0]=ve/g,M(de,De+4,ve+g),re!==null&&re.push(si,De),De},Cb:Kn,readValueFromPointer:Me,Eb(re){si(re)}})}function Nt(c,g){Pn(c>>>=0,{Ub:!0,name:g=_n(g>>>0),Cb:0,fromWireType:()=>{},toWireType:()=>{}})}function dn(c){yo(c>>>0,!a,1,!s,131072,!1),Ve()}var en=c=>{if(!te)try{if(c(),!(0<Et))try{o?xo(E):ue(E)}catch(g){g instanceof At||g=="unwind"||m(0,g)}}catch(g){g instanceof At||g=="unwind"||m(0,g)}};function Wt(c){c>>>=0,typeof Atomics.jc=="function"&&(Atomics.jc(J(),c>>>2,c).value.then(qt),c+=128,Atomics.store(J(),c>>>2,1))}var qt=()=>{var c=vo();c&&(Wt(c),en(Md))};function os(c,g){(c>>>=0)==g>>>0?setTimeout(qt):o?postMessage({Hb:c,Db:"checkMailbox"}):(c=be[c])&&c.postMessage({Db:"checkMailbox"})}var Dn=[];function Uy(c,g,x,S,M){for(g>>>=0,S/=2,Dn.length=S,x=M>>>0>>>3,M=0;M<S;M++)Dn[M]=U[x+2*M]?U[x+2*M+1]:we()[x+2*M+1>>>0];return(g?_o[g]:Cx[c])(...Dn)}var Oy=()=>{Et=0};function zy(c){c>>>=0,o?postMessage({Db:"cleanupThread",ic:c}):Be(be[c])}function ky(c){}var Xs=(c,g)=>{var x=as[c];if(x===void 0)throw c=xd(c),x=_n(c),si(c),new yi(`${g} has unknown type ${x}`);return x},Jc=(c,g,x)=>{var S=[];return c=c.toWireType(S,x),S.length&&(Q()[g>>>2>>>0]=me(S)),c};function Fy(c,g,x){return g>>>=0,x>>>=0,c=H(c>>>0),g=Xs(g,"emval::as"),Jc(g,x,c)}function By(c,g){return g>>>=0,c=H(c>>>0),(g=Xs(g,"emval::as")).toWireType(null,c)}var js=c=>{try{c()}catch(g){qe(g)}},bi=0,Yn=null,Qc=0,Ks=[],ed={},td={},Hy=0,fo=null,Vy=[];function nd(c){return(function(g){if(!te){if(bi===0){var x=!1,S=!1;g((M=0)=>{if(!te&&(Qc=M,x=!0,S)){bi=2,js(()=>Pd(Yn)),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.resume(),M=!1;try{var N=(function(){var de=J()[Yn+8>>>2>>>0];return de=ae[td[de]],--Et,de()})()}catch(de){N=de,M=!0}var B=!1;if(!Yn){var re=fo;re&&(fo=null,(M?re.reject:re.resolve)(N),B=!0)}if(M&&!B)throw N}}),S=!0,x||(bi=1,Yn=(function(){var M=ea(65548),N=M+12;Q()[M>>>2>>>0]=N,Q()[M+4>>>2>>>0]=N+65536,N=Ks[0];var B=ed[N];return B===void 0&&(B=Hy++,ed[N]=B,td[B]=N),N=B,J()[M+8>>>2>>>0]=N,M})(),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.pause(),js(()=>Rd(Yn)))}else bi===2?(bi=0,js(Dd),si(Yn),Yn=null,Vy.forEach(en)):qe(`invalid state: ${bi}`);return Qc}})(g=>{c().then(g)})}function Gy(c){return c>>>=0,nd(async()=>{var g=await H(c);return me(g)})}var Ys=[];function Wy(c,g,x,S){return x>>>=0,S>>>=0,(c=Ys[c>>>0])(null,g=H(g>>>0),x,S)}var qy={},Zs=c=>{var g=qy[c];return g===void 0?_n(c):g};function Xy(c,g,x,S,M){return x>>>=0,S>>>=0,M>>>=0,(c=Ys[c>>>0])(g=H(g>>>0),g[x=Zs(x)],S,M)}function jy(c,g){return g>>>=0,(c=H(c>>>0))==H(g)}var id=()=>typeof globalThis=="object"?globalThis:Function("return this")();function Ky(c){return(c>>>=0)==0?me(id()):(c=Zs(c),me(id()[c]))}var Yy=c=>{var g=Ys.length;return Ys.push(c),g},Zy=(c,g)=>{for(var x=Array(c),S=0;S<c;++S)x[S]=Xs(Q()[g+4*S>>>2>>>0],`parameter ${S}`);return x};function Jy(c,g,x){var S=(g=Zy(c,g>>>0)).shift();c--;var M=`return function (obj, func, destructorsRef, args) {
`,N=0,B=[];x===0&&B.push("obj");for(var re=["retType"],de=[S],ve=0;ve<c;++ve)B.push(`arg${ve}`),re.push(`argType${ve}`),de.push(g[ve]),M+=`  var arg${ve} = argType${ve}.readValueFromPointer(args${N?"+"+N:""});
`,N+=g[ve].Cb;return M+=`  var rv = ${x===1?"new func":"func.call"}(${B.join(", ")});
`,S.Ub||(re.push("emval_returnValue"),de.push(Jc),M+=`  return emval_returnValue(retType, destructorsRef, rv);
`),c=new Function(...re,M+`};
`)(...de),x=`methodCaller<(${g.map(De=>De.name).join(", ")}) => ${S.name}>`,Yy(Object.defineProperty(c,"name",{value:x}))}function Qy(c){return c=Zs(c>>>0),me(i[c])}function ex(c,g){return g>>>=0,c=H(c>>>0),g=H(g),me(c[g])}function tx(c){9<(c>>>=0)&&(ee[c+1]+=1)}function nx(){return me([])}function ix(c){c=H(c>>>0);for(var g=Array(c.length),x=0;x<c.length;x++)g[x]=c[x];return me(g)}function rx(c){return me(Zs(c>>>0))}function sx(){return me({})}function ax(c){for(var g=H(c>>>=0);g.length;){var x=g.pop();g.pop()(x)}ie(c)}function ox(c,g,x){g>>>=0,x>>>=0,c=H(c>>>0),g=H(g),x=H(x),c[g]=x}function lx(c,g){return g>>>=0,c=(c=Xs(c>>>0,"_emval_take_value")).readValueFromPointer(g),me(c)}function ux(c,g){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c),g>>>=0,c=new Date(1e3*c),J()[g>>>2>>>0]=c.getUTCSeconds(),J()[g+4>>>2>>>0]=c.getUTCMinutes(),J()[g+8>>>2>>>0]=c.getUTCHours(),J()[g+12>>>2>>>0]=c.getUTCDate(),J()[g+16>>>2>>>0]=c.getUTCMonth(),J()[g+20>>>2>>>0]=c.getUTCFullYear()-1900,J()[g+24>>>2>>>0]=c.getUTCDay(),c=(c.getTime()-Date.UTC(c.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,J()[g+28>>>2>>>0]=c}var rd=c=>c%4==0&&(c%100!=0||c%400==0),sd=[0,31,60,91,121,152,182,213,244,274,305,335],ad=[0,31,59,90,120,151,181,212,243,273,304,334];function cx(c,g){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c),g>>>=0,c=new Date(1e3*c),J()[g>>>2>>>0]=c.getSeconds(),J()[g+4>>>2>>>0]=c.getMinutes(),J()[g+8>>>2>>>0]=c.getHours(),J()[g+12>>>2>>>0]=c.getDate(),J()[g+16>>>2>>>0]=c.getMonth(),J()[g+20>>>2>>>0]=c.getFullYear()-1900,J()[g+24>>>2>>>0]=c.getDay();var x=(rd(c.getFullYear())?sd:ad)[c.getMonth()]+c.getDate()-1|0;J()[g+28>>>2>>>0]=x,J()[g+36>>>2>>>0]=-60*c.getTimezoneOffset(),x=new Date(c.getFullYear(),6,1).getTimezoneOffset();var S=new Date(c.getFullYear(),0,1).getTimezoneOffset();c=0|(x!=S&&c.getTimezoneOffset()==Math.min(S,x)),J()[g+32>>>2>>>0]=c}function dx(c){c>>>=0;var g=new Date(J()[c+20>>>2>>>0]+1900,J()[c+16>>>2>>>0],J()[c+12>>>2>>>0],J()[c+8>>>2>>>0],J()[c+4>>>2>>>0],J()[c>>>2>>>0],0),x=J()[c+32>>>2>>>0],S=g.getTimezoneOffset(),M=new Date(g.getFullYear(),6,1).getTimezoneOffset(),N=new Date(g.getFullYear(),0,1).getTimezoneOffset(),B=Math.min(N,M);return 0>x?J()[c+32>>>2>>>0]=+(M!=N&&B==S):0<x!=(B==S)&&(M=Math.max(N,M),g.setTime(g.getTime()+6e4*((0<x?B:M)-S))),J()[c+24>>>2>>>0]=g.getDay(),x=(rd(g.getFullYear())?sd:ad)[g.getMonth()]+g.getDate()-1|0,J()[c+28>>>2>>>0]=x,J()[c>>>2>>>0]=g.getSeconds(),J()[c+4>>>2>>>0]=g.getMinutes(),J()[c+8>>>2>>>0]=g.getHours(),J()[c+12>>>2>>>0]=g.getDate(),J()[c+16>>>2>>>0]=g.getMonth(),J()[c+20>>>2>>>0]=g.getYear(),c=g.getTime(),BigInt(isNaN(c)?-1:c/1e3)}function od(c,g,x,S,M,N,B){return o?L(16,1,c,g,x,S,M,N,B):-52}function ld(c,g,x,S,M,N){if(o)return L(17,1,c,g,x,S,M,N)}var ls={},hx=()=>performance.timeOrigin+performance.now();function ud(c,g){if(o)return L(18,1,c,g);if(ls[c]&&(clearTimeout(ls[c].id),delete ls[c]),!g)return 0;var x=setTimeout(()=>{delete ls[c],en(()=>Td(c,performance.timeOrigin+performance.now()))},g);return ls[c]={id:x,rc:g},0}function fx(c,g,x,S){c>>>=0,g>>>=0,x>>>=0,S>>>=0;var M=new Date().getFullYear(),N=new Date(M,0,1).getTimezoneOffset();M=new Date(M,6,1).getTimezoneOffset();var B=Math.max(N,M);Q()[c>>>2>>>0]=60*B,J()[g>>>2>>>0]=+(N!=M),c=(g=re=>{var de=Math.abs(re);return`UTC${0<=re?"-":"+"}${String(Math.floor(de/60)).padStart(2,"0")}${String(de%60).padStart(2,"0")}`})(N),g=g(M),M<N?(pt(c,x,17),pt(g,S,17)):(pt(c,S,17),pt(g,x,17))}var px=()=>Date.now();function mx(c,g,x){return 0<=c&&3>=c?(c===0?c=Date.now():c=performance.timeOrigin+performance.now(),U[x>>>0>>>3]=BigInt(Math.round(1e6*c)),0):28}var po=[],cd=(c,g)=>{po.length=0;for(var x;x=le()[c++>>>0];){var S=x!=105;g+=(S&=x!=112)&&g%8?4:0,po.push(x==112?Q()[g>>>2>>>0]:x==106?U[g>>>3]:x==105?J()[g>>>2>>>0]:we()[g>>>3>>>0]),g+=S?8:4}return po};function gx(c,g,x){return c>>>=0,g=cd(g>>>0,x>>>0),_o[c](...g)}function _x(c,g,x){return c>>>=0,g=cd(g>>>0,x>>>0),_o[c](...g)}var vx=()=>{};function yx(c,g){return X(ce(c>>>0,g>>>0))}var xx=()=>{throw Et+=1,"unwind"};function bx(){return 4294901760}var wx=()=>navigator.hardwareConcurrency;function Sx(){return qe("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function Ex(c){c>>>=0;var g=le().length;if(c<=g||4294901760<c)return!1;for(var x=1;4>=x;x*=2){var S=g*(1+.2/x);S=Math.min(S,c+100663296);e:{S=(Math.min(4294901760,65536*Math.ceil(Math.max(c,S)/65536))-p.buffer.byteLength+65535)/65536|0;try{p.grow(S),Te();var M=1;break e}catch{}M=void 0}if(M)return!0}return!1}var Js=()=>(qe("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),us={},dd=c=>{c.forEach(g=>{Js()})};function Tx(){var c=Error().stack.toString().split(`
`);return c[0]=="Error"&&c.shift(),dd(c),us.Mb=Js(),us.dc=c,us.Mb}function Mx(c,g,x){if(c>>>=0,g>>>=0,us.Mb==c)var S=us.dc;else(S=Error().stack.toString().split(`
`))[0]=="Error"&&S.shift(),dd(S);for(var M=3;S[M]&&Js()!=c;)++M;for(c=0;c<x&&S[c+M];++c)J()[g+4*c>>>2>>>0]=Js();return c}var mo,go={},hd=()=>{if(!mo){var c,g={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(c in go)go[c]===void 0?delete g[c]:g[c]=go[c];var x=[];for(c in g)x.push(`${c}=${g[c]}`);mo=x}return mo};function fd(c,g){if(o)return L(19,1,c,g);c>>>=0,g>>>=0;var x,S=0,M=0;for(x of hd()){var N=g+S;Q()[c+M>>>2>>>0]=N,S+=pt(x,N,1/0)+1,M+=4}return 0}function pd(c,g){if(o)return L(20,1,c,g);c>>>=0,g>>>=0;var x=hd();for(var S of(Q()[c>>>2>>>0]=x.length,c=0,x))c+=$t(S)+1;return Q()[g>>>2>>>0]=c,0}function md(c){return o?L(21,1,c):52}function gd(c,g,x,S){return o?L(22,1,c,g,x,S):52}function _d(c,g,x,S){return o?L(23,1,c,g,x,S):70}var Ax=[null,[],[]];function vd(c,g,x,S){if(o)return L(24,1,c,g,x,S);g>>>=0,x>>>=0,S>>>=0;for(var M=0,N=0;N<x;N++){var B=Q()[g>>>2>>>0],re=Q()[g+4>>>2>>>0];g+=8;for(var de=0;de<re;de++){var ve=c,De=le()[B+de>>>0],je=Ax[ve];De===0||De===10?((ve===1?Z:X)(Le(je)),je.length=0):je.push(De)}M+=re}return Q()[S>>>2>>>0]=M,0}o||(function(){for(var c=i.numThreads-1;c--;)Re();rt.push(()=>{O++,(function(g){o?g():Promise.all(pe.map(ye)).then(g)})(()=>it())})})();for(var yd=Array(256),Qs=0;256>Qs;++Qs)yd[Qs]=String.fromCharCode(Qs);ss=yd,ee.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=()=>ee.length/2-5-q.length,o||(p=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),Te()),i.wasmBinary&&(v=i.wasmBinary),i.stackSave=()=>wo(),i.stackRestore=c=>ta(c),i.stackAlloc=c=>bo(c),i.setValue=function(c,g,x="i8"){switch(x.endsWith("*")&&(x="*"),x){case"i1":case"i8":j()[c>>>0]=g;break;case"i16":Ee()[c>>>1>>>0]=g;break;case"i32":J()[c>>>2>>>0]=g;break;case"i64":U[c>>>3]=BigInt(g);break;case"float":fe()[c>>>2>>>0]=g;break;case"double":we()[c>>>3>>>0]=g;break;case"*":Q()[c>>>2>>>0]=g;break;default:qe(`invalid type for setValue: ${x}`)}},i.getValue=function(c,g="i8"){switch(g.endsWith("*")&&(g="*"),g){case"i1":case"i8":return j()[c>>>0];case"i16":return Ee()[c>>>1>>>0];case"i32":return J()[c>>>2>>>0];case"i64":return U[c>>>3];case"float":return fe()[c>>>2>>>0];case"double":return we()[c>>>3>>>0];case"*":return Q()[c>>>2>>>0];default:qe(`invalid type for getValue: ${g}`)}},i.UTF8ToString=ce,i.stringToUTF8=pt,i.lengthBytesUTF8=$t;var Cx=[I,Y,F,he,Ue,tt,Mt,vt,Tn,gn,ns,jn,vr,is,rs,Fi,od,ld,ud,fd,pd,md,gd,_d,vd],_o={892060:(c,g,x,S,M)=>{if(i===void 0||!i.Fb)return 1;if((c=ce(Number(c>>>0))).startsWith("./")&&(c=c.substring(2)),!(c=i.Fb.get(c)))return 2;if(g=Number(g>>>0),x=Number(x>>>0),S=Number(S>>>0),g+x>c.byteLength)return 3;try{let N=c.subarray(g,g+x);switch(M){case 0:le().set(N,S>>>0);break;case 1:i.mc?i.mc(S,N):i.cc(S,N);break;default:return 4}return 0}catch{return 4}},892884:(c,g,x)=>{i.Pb(c,le().subarray(g>>>0,g+x>>>0))},892948:()=>i.oc(),892990:c=>{i.Ob(c)},893027:()=>{i.Wb()},893058:()=>{i.Xb()},893087:()=>{i.ac()},893112:c=>i.Vb(c),893145:c=>i.Zb(c),893177:(c,g,x)=>{i.Lb(Number(c),Number(g),Number(x),!0)},893240:(c,g,x)=>{i.Lb(Number(c),Number(g),Number(x))},893297:()=>typeof wasmOffsetConverter<"u",893354:c=>{i.Ab("Abs",c,void 0)},893405:c=>{i.Ab("Neg",c,void 0)},893456:c=>{i.Ab("Floor",c,void 0)},893509:c=>{i.Ab("Ceil",c,void 0)},893561:c=>{i.Ab("Reciprocal",c,void 0)},893619:c=>{i.Ab("Sqrt",c,void 0)},893671:c=>{i.Ab("Exp",c,void 0)},893722:c=>{i.Ab("Erf",c,void 0)},893773:c=>{i.Ab("Sigmoid",c,void 0)},893828:(c,g,x)=>{i.Ab("HardSigmoid",c,{alpha:g,beta:x})},893907:c=>{i.Ab("Log",c,void 0)},893958:c=>{i.Ab("Sin",c,void 0)},894009:c=>{i.Ab("Cos",c,void 0)},894060:c=>{i.Ab("Tan",c,void 0)},894111:c=>{i.Ab("Asin",c,void 0)},894163:c=>{i.Ab("Acos",c,void 0)},894215:c=>{i.Ab("Atan",c,void 0)},894267:c=>{i.Ab("Sinh",c,void 0)},894319:c=>{i.Ab("Cosh",c,void 0)},894371:c=>{i.Ab("Asinh",c,void 0)},894424:c=>{i.Ab("Acosh",c,void 0)},894477:c=>{i.Ab("Atanh",c,void 0)},894530:c=>{i.Ab("Tanh",c,void 0)},894582:c=>{i.Ab("Not",c,void 0)},894633:(c,g,x)=>{i.Ab("Clip",c,{min:g,max:x})},894702:c=>{i.Ab("Clip",c,void 0)},894754:(c,g)=>{i.Ab("Elu",c,{alpha:g})},894812:c=>{i.Ab("Gelu",c,void 0)},894864:c=>{i.Ab("Relu",c,void 0)},894916:(c,g)=>{i.Ab("LeakyRelu",c,{alpha:g})},894980:(c,g)=>{i.Ab("ThresholdedRelu",c,{alpha:g})},895050:(c,g)=>{i.Ab("Cast",c,{to:g})},895108:c=>{i.Ab("Add",c,void 0)},895159:c=>{i.Ab("Sub",c,void 0)},895210:c=>{i.Ab("Mul",c,void 0)},895261:c=>{i.Ab("Div",c,void 0)},895312:c=>{i.Ab("Pow",c,void 0)},895363:c=>{i.Ab("Equal",c,void 0)},895416:c=>{i.Ab("Greater",c,void 0)},895471:c=>{i.Ab("GreaterOrEqual",c,void 0)},895533:c=>{i.Ab("Less",c,void 0)},895585:c=>{i.Ab("LessOrEqual",c,void 0)},895644:(c,g,x,S,M)=>{i.Ab("ReduceMean",c,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:S?Array.from(J().subarray(Number(S)>>>0,Number(M)>>>0)):[]})},895819:(c,g,x,S,M)=>{i.Ab("ReduceMax",c,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:S?Array.from(J().subarray(Number(S)>>>0,Number(M)>>>0)):[]})},895993:(c,g,x,S,M)=>{i.Ab("ReduceMin",c,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:S?Array.from(J().subarray(Number(S)>>>0,Number(M)>>>0)):[]})},896167:(c,g,x,S,M)=>{i.Ab("ReduceProd",c,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:S?Array.from(J().subarray(Number(S)>>>0,Number(M)>>>0)):[]})},896342:(c,g,x,S,M)=>{i.Ab("ReduceSum",c,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:S?Array.from(J().subarray(Number(S)>>>0,Number(M)>>>0)):[]})},896516:(c,g,x,S,M)=>{i.Ab("ReduceL1",c,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:S?Array.from(J().subarray(Number(S)>>>0,Number(M)>>>0)):[]})},896689:(c,g,x,S,M)=>{i.Ab("ReduceL2",c,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:S?Array.from(J().subarray(Number(S)>>>0,Number(M)>>>0)):[]})},896862:(c,g,x,S,M)=>{i.Ab("ReduceLogSum",c,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:S?Array.from(J().subarray(Number(S)>>>0,Number(M)>>>0)):[]})},897039:(c,g,x,S,M)=>{i.Ab("ReduceSumSquare",c,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:S?Array.from(J().subarray(Number(S)>>>0,Number(M)>>>0)):[]})},897219:(c,g,x,S,M)=>{i.Ab("ReduceLogSumExp",c,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:S?Array.from(J().subarray(Number(S)>>>0,Number(M)>>>0)):[]})},897399:c=>{i.Ab("Where",c,void 0)},897452:(c,g,x)=>{i.Ab("Transpose",c,{perm:g?Array.from(J().subarray(Number(g)>>>0,Number(x)>>>0)):[]})},897576:(c,g,x,S)=>{i.Ab("DepthToSpace",c,{blocksize:g,mode:ce(x),format:S?"NHWC":"NCHW"})},897709:(c,g,x,S)=>{i.Ab("DepthToSpace",c,{blocksize:g,mode:ce(x),format:S?"NHWC":"NCHW"})},897842:(c,g,x,S,M,N,B,re,de,ve,De,je,at,yt,Ht)=>{i.Ab("ConvTranspose",c,{format:de?"NHWC":"NCHW",autoPad:g,dilations:[x],group:S,kernelShape:[M],pads:[N,B],strides:[re],wIsConst:()=>!!j()[ve>>>0],outputPadding:De?Array.from(J().subarray(Number(De)>>>0,Number(je)>>>0)):[],outputShape:at?Array.from(J().subarray(Number(at)>>>0,Number(yt)>>>0)):[],activation:ce(Ht)})},898275:(c,g,x,S,M,N,B,re,de,ve,De,je,at,yt)=>{i.Ab("ConvTranspose",c,{format:re?"NHWC":"NCHW",autoPad:g,dilations:Array.from(J().subarray(Number(x)>>>0,2+(Number(x)>>>0)>>>0)),group:S,kernelShape:Array.from(J().subarray(Number(M)>>>0,2+(Number(M)>>>0)>>>0)),pads:Array.from(J().subarray(Number(N)>>>0,4+(Number(N)>>>0)>>>0)),strides:Array.from(J().subarray(Number(B)>>>0,2+(Number(B)>>>0)>>>0)),wIsConst:()=>!!j()[de>>>0],outputPadding:ve?Array.from(J().subarray(Number(ve)>>>0,Number(De)>>>0)):[],outputShape:je?Array.from(J().subarray(Number(je)>>>0,Number(at)>>>0)):[],activation:ce(yt)})},898936:(c,g,x,S,M,N,B,re,de,ve,De,je,at,yt,Ht)=>{i.Ab("ConvTranspose",c,{format:de?"NHWC":"NCHW",autoPad:g,dilations:[x],group:S,kernelShape:[M],pads:[N,B],strides:[re],wIsConst:()=>!!j()[ve>>>0],outputPadding:De?Array.from(J().subarray(Number(De)>>>0,Number(je)>>>0)):[],outputShape:at?Array.from(J().subarray(Number(at)>>>0,Number(yt)>>>0)):[],activation:ce(Ht)})},899369:(c,g,x,S,M,N,B,re,de,ve,De,je,at,yt)=>{i.Ab("ConvTranspose",c,{format:re?"NHWC":"NCHW",autoPad:g,dilations:Array.from(J().subarray(Number(x)>>>0,2+(Number(x)>>>0)>>>0)),group:S,kernelShape:Array.from(J().subarray(Number(M)>>>0,2+(Number(M)>>>0)>>>0)),pads:Array.from(J().subarray(Number(N)>>>0,4+(Number(N)>>>0)>>>0)),strides:Array.from(J().subarray(Number(B)>>>0,2+(Number(B)>>>0)>>>0)),wIsConst:()=>!!j()[de>>>0],outputPadding:ve?Array.from(J().subarray(Number(ve)>>>0,Number(De)>>>0)):[],outputShape:je?Array.from(J().subarray(Number(je)>>>0,Number(at)>>>0)):[],activation:ce(yt)})},900030:(c,g)=>{i.Ab("GlobalAveragePool",c,{format:g?"NHWC":"NCHW"})},900121:(c,g,x,S,M,N,B,re,de,ve,De,je,at,yt)=>{i.Ab("AveragePool",c,{format:yt?"NHWC":"NCHW",auto_pad:g,ceil_mode:x,count_include_pad:S,storage_order:M,dilations:N?Array.from(J().subarray(Number(N)>>>0,Number(B)>>>0)):[],kernel_shape:re?Array.from(J().subarray(Number(re)>>>0,Number(de)>>>0)):[],pads:ve?Array.from(J().subarray(Number(ve)>>>0,Number(De)>>>0)):[],strides:je?Array.from(J().subarray(Number(je)>>>0,Number(at)>>>0)):[]})},900600:(c,g)=>{i.Ab("GlobalAveragePool",c,{format:g?"NHWC":"NCHW"})},900691:(c,g,x,S,M,N,B,re,de,ve,De,je,at,yt)=>{i.Ab("AveragePool",c,{format:yt?"NHWC":"NCHW",auto_pad:g,ceil_mode:x,count_include_pad:S,storage_order:M,dilations:N?Array.from(J().subarray(Number(N)>>>0,Number(B)>>>0)):[],kernel_shape:re?Array.from(J().subarray(Number(re)>>>0,Number(de)>>>0)):[],pads:ve?Array.from(J().subarray(Number(ve)>>>0,Number(De)>>>0)):[],strides:je?Array.from(J().subarray(Number(je)>>>0,Number(at)>>>0)):[]})},901170:(c,g)=>{i.Ab("GlobalMaxPool",c,{format:g?"NHWC":"NCHW"})},901257:(c,g,x,S,M,N,B,re,de,ve,De,je,at,yt)=>{i.Ab("MaxPool",c,{format:yt?"NHWC":"NCHW",auto_pad:g,ceil_mode:x,count_include_pad:S,storage_order:M,dilations:N?Array.from(J().subarray(Number(N)>>>0,Number(B)>>>0)):[],kernel_shape:re?Array.from(J().subarray(Number(re)>>>0,Number(de)>>>0)):[],pads:ve?Array.from(J().subarray(Number(ve)>>>0,Number(De)>>>0)):[],strides:je?Array.from(J().subarray(Number(je)>>>0,Number(at)>>>0)):[]})},901732:(c,g)=>{i.Ab("GlobalMaxPool",c,{format:g?"NHWC":"NCHW"})},901819:(c,g,x,S,M,N,B,re,de,ve,De,je,at,yt)=>{i.Ab("MaxPool",c,{format:yt?"NHWC":"NCHW",auto_pad:g,ceil_mode:x,count_include_pad:S,storage_order:M,dilations:N?Array.from(J().subarray(Number(N)>>>0,Number(B)>>>0)):[],kernel_shape:re?Array.from(J().subarray(Number(re)>>>0,Number(de)>>>0)):[],pads:ve?Array.from(J().subarray(Number(ve)>>>0,Number(De)>>>0)):[],strides:je?Array.from(J().subarray(Number(je)>>>0,Number(at)>>>0)):[]})},902294:(c,g,x,S,M)=>{i.Ab("Gemm",c,{alpha:g,beta:x,transA:S,transB:M})},902398:c=>{i.Ab("MatMul",c,void 0)},902452:(c,g,x,S)=>{i.Ab("ArgMax",c,{keepDims:!!g,selectLastIndex:!!x,axis:S})},902560:(c,g,x,S)=>{i.Ab("ArgMin",c,{keepDims:!!g,selectLastIndex:!!x,axis:S})},902668:(c,g)=>{i.Ab("Softmax",c,{axis:g})},902731:(c,g)=>{i.Ab("Concat",c,{axis:g})},902791:(c,g,x,S,M)=>{i.Ab("Split",c,{axis:g,numOutputs:x,splitSizes:S?Array.from(J().subarray(Number(S)>>>0,Number(M)>>>0)):[]})},902947:c=>{i.Ab("Expand",c,void 0)},903001:(c,g)=>{i.Ab("Gather",c,{axis:Number(g)})},903072:(c,g)=>{i.Ab("GatherElements",c,{axis:Number(g)})},903151:(c,g)=>{i.Ab("GatherND",c,{batch_dims:Number(g)})},903230:(c,g,x,S,M,N,B,re,de,ve,De)=>{i.Ab("Resize",c,{antialias:g,axes:x?Array.from(J().subarray(Number(x)>>>0,Number(S)>>>0)):[],coordinateTransformMode:ce(M),cubicCoeffA:N,excludeOutside:B,extrapolationValue:re,keepAspectRatioPolicy:ce(de),mode:ce(ve),nearestMode:ce(De)})},903592:(c,g,x,S,M,N,B)=>{i.Ab("Slice",c,{starts:g?Array.from(J().subarray(Number(g)>>>0,Number(x)>>>0)):[],ends:S?Array.from(J().subarray(Number(S)>>>0,Number(M)>>>0)):[],axes:N?Array.from(J().subarray(Number(N)>>>0,Number(B)>>>0)):[]})},903856:c=>{i.Ab("Tile",c,void 0)},903908:(c,g,x)=>{i.Ab("InstanceNormalization",c,{epsilon:g,format:x?"NHWC":"NCHW"})},904022:(c,g,x)=>{i.Ab("InstanceNormalization",c,{epsilon:g,format:x?"NHWC":"NCHW"})},904136:c=>{i.Ab("Range",c,void 0)},904189:(c,g)=>{i.Ab("Einsum",c,{equation:ce(g)})},904270:(c,g,x,S,M)=>{i.Ab("Pad",c,{mode:g,value:x,pads:S?Array.from(J().subarray(Number(S)>>>0,Number(M)>>>0)):[]})},904413:(c,g,x,S,M,N)=>{i.Ab("BatchNormalization",c,{epsilon:g,momentum:x,spatial:!!M,trainingMode:!!S,format:N?"NHWC":"NCHW"})},904582:(c,g,x,S,M,N)=>{i.Ab("BatchNormalization",c,{epsilon:g,momentum:x,spatial:!!M,trainingMode:!!S,format:N?"NHWC":"NCHW"})},904751:(c,g,x)=>{i.Ab("CumSum",c,{exclusive:Number(g),reverse:Number(x)})},904848:(c,g,x)=>{i.Ab("DequantizeLinear",c,{axis:g,blockSize:x})},904938:(c,g,x,S,M)=>{i.Ab("GridSample",c,{align_corners:g,mode:ce(x),padding_mode:ce(S),format:M?"NHWC":"NCHW"})},905108:(c,g,x,S,M)=>{i.Ab("GridSample",c,{align_corners:g,mode:ce(x),padding_mode:ce(S),format:M?"NHWC":"NCHW"})},905278:(c,g)=>{i.Ab("ScatterND",c,{reduction:ce(g)})},905363:(c,g,x,S,M,N,B,re,de)=>{i.Ab("Attention",c,{numHeads:g,isUnidirectional:x,maskFilterValue:S,scale:M,doRotary:N,qkvHiddenSizes:B?Array.from(J().subarray(Number(re)>>>0,Number(re)+B>>>0)):[],pastPresentShareBuffer:!!de})},905635:c=>{i.Ab("BiasAdd",c,void 0)},905690:c=>{i.Ab("BiasSplitGelu",c,void 0)},905751:c=>{i.Ab("FastGelu",c,void 0)},905807:(c,g,x,S,M,N,B,re,de,ve,De,je,at,yt,Ht,vn)=>{i.Ab("Conv",c,{format:je?"NHWC":"NCHW",auto_pad:g,dilations:x?Array.from(J().subarray(Number(x)>>>0,Number(S)>>>0)):[],group:M,kernel_shape:N?Array.from(J().subarray(Number(N)>>>0,Number(B)>>>0)):[],pads:re?Array.from(J().subarray(Number(re)>>>0,Number(de)>>>0)):[],strides:ve?Array.from(J().subarray(Number(ve)>>>0,Number(De)>>>0)):[],w_is_const:()=>!!j()[Number(at)>>>0],activation:ce(yt),activation_params:Ht?Array.from(fe().subarray(Number(Ht)>>>0,Number(vn)>>>0)):[]})},906391:c=>{i.Ab("Gelu",c,void 0)},906443:(c,g,x,S,M,N,B,re,de)=>{i.Ab("GroupQueryAttention",c,{numHeads:g,kvNumHeads:x,scale:S,softcap:M,doRotary:N,rotaryInterleaved:B,smoothSoftmax:re,localWindowSize:de})},906660:(c,g,x,S)=>{i.Ab("LayerNormalization",c,{axis:g,epsilon:x,simplified:!!S})},906771:(c,g,x,S)=>{i.Ab("LayerNormalization",c,{axis:g,epsilon:x,simplified:!!S})},906882:(c,g,x,S,M,N)=>{i.Ab("MatMulNBits",c,{k:g,n:x,accuracyLevel:S,bits:M,blockSize:N})},907009:(c,g,x,S,M,N)=>{i.Ab("MultiHeadAttention",c,{numHeads:g,isUnidirectional:x,maskFilterValue:S,scale:M,doRotary:N})},907168:(c,g)=>{i.Ab("QuickGelu",c,{alpha:g})},907232:(c,g,x,S,M)=>{i.Ab("RotaryEmbedding",c,{interleaved:!!g,numHeads:x,rotaryEmbeddingDim:S,scale:M})},907371:(c,g,x)=>{i.Ab("SkipLayerNormalization",c,{epsilon:g,simplified:!!x})},907473:(c,g,x)=>{i.Ab("SkipLayerNormalization",c,{epsilon:g,simplified:!!x})},907575:(c,g,x,S)=>{i.Ab("GatherBlockQuantized",c,{gatherAxis:g,quantizeAxis:x,blockSize:S})},907696:c=>{i.$b(c)},907730:(c,g)=>i.bc(Number(c),Number(g),i.Gb.ec,i.Gb.errors)};function Rx(c,g,x){return nd(async()=>{await i.Yb(Number(c),Number(g),Number(x))})}function Ix(){return typeof wasmOffsetConverter<"u"}var ae=await(async function(){function c(S,M){return ae=S.exports,ae=(function(){var N=ae,B={};for(let[re,de]of Object.entries(N))B[re]=typeof de=="function"?(...ve)=>{Ks.push(re);try{return de(...ve)}finally{te||(Ks.pop(),Yn&&bi===1&&Ks.length===0&&(bi=0,Et+=1,js(Id),typeof Fibers<"u"&&Fibers.sc()))}}:de;return B})(),ae=(function(){var N=ae,B=de=>ve=>de(ve)>>>0,re=de=>()=>de()>>>0;return(N=Object.assign({},N)).Ea=B(N.Ea),N.gb=re(N.gb),N.ib=B(N.ib),N.tb=B(N.tb),N.ub=re(N.ub),N.__cxa_get_exception_ptr=B(N.__cxa_get_exception_ptr),N})(),Ge.push(ae.jb),b=M,it(),ae}O++;var g=ke();if(i.instantiateWasm)return new Promise(S=>{i.instantiateWasm(g,(M,N)=>{S(c(M,N))})});if(o)return new Promise(S=>{k=M=>{var N=new WebAssembly.Instance(M,ke());S(c(N,M))}});zt??=i.locateFile?i.locateFile?i.locateFile("ort-wasm-simd-threaded.jsep.wasm",y):y+"ort-wasm-simd-threaded.jsep.wasm":new URL("/assets/ort-wasm-simd-threaded.jsep-CLmJQkb_.wasm",import.meta.url).href;try{var x=await(async function(S){var M=zt;if(!v&&typeof WebAssembly.instantiateStreaming=="function"&&!_e(M))try{var N=fetch(M,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(N,S)}catch(B){X(`wasm streaming compile failed: ${B}`),X("falling back to ArrayBuffer instantiation")}return(async function(B,re){try{var de=await(async function(ve){if(!v)try{var De=await h(ve);return new Uint8Array(De)}catch{}if(ve==zt&&v)ve=new Uint8Array(v);else{if(!f)throw"both async and sync fetching of the wasm failed";ve=f(ve)}return ve})(B);return await WebAssembly.instantiate(de,re)}catch(ve){X(`failed to asynchronously prepare wasm: ${ve}`),qe(ve)}})(M,S)})(g);return c(x.instance,x.module)}catch(S){return n(S),Promise.reject(S)}})(),xd=c=>(xd=ae.Ea)(c),bd=()=>(bd=ae.Fa)();i._OrtInit=(c,g)=>(i._OrtInit=ae.Ga)(c,g),i._OrtGetLastError=(c,g)=>(i._OrtGetLastError=ae.Ha)(c,g),i._OrtCreateSessionOptions=(c,g,x,S,M,N,B,re,de,ve)=>(i._OrtCreateSessionOptions=ae.Ia)(c,g,x,S,M,N,B,re,de,ve),i._OrtAppendExecutionProvider=(c,g,x,S,M)=>(i._OrtAppendExecutionProvider=ae.Ja)(c,g,x,S,M),i._OrtAddFreeDimensionOverride=(c,g,x)=>(i._OrtAddFreeDimensionOverride=ae.Ka)(c,g,x),i._OrtAddSessionConfigEntry=(c,g,x)=>(i._OrtAddSessionConfigEntry=ae.La)(c,g,x),i._OrtReleaseSessionOptions=c=>(i._OrtReleaseSessionOptions=ae.Ma)(c),i._OrtCreateSession=(c,g,x)=>(i._OrtCreateSession=ae.Na)(c,g,x),i._OrtReleaseSession=c=>(i._OrtReleaseSession=ae.Oa)(c),i._OrtGetInputOutputCount=(c,g,x)=>(i._OrtGetInputOutputCount=ae.Pa)(c,g,x),i._OrtGetInputOutputMetadata=(c,g,x,S)=>(i._OrtGetInputOutputMetadata=ae.Qa)(c,g,x,S),i._OrtFree=c=>(i._OrtFree=ae.Ra)(c),i._OrtCreateTensor=(c,g,x,S,M,N)=>(i._OrtCreateTensor=ae.Sa)(c,g,x,S,M,N),i._OrtGetTensorData=(c,g,x,S,M)=>(i._OrtGetTensorData=ae.Ta)(c,g,x,S,M),i._OrtReleaseTensor=c=>(i._OrtReleaseTensor=ae.Ua)(c),i._OrtCreateRunOptions=(c,g,x,S)=>(i._OrtCreateRunOptions=ae.Va)(c,g,x,S),i._OrtAddRunConfigEntry=(c,g,x)=>(i._OrtAddRunConfigEntry=ae.Wa)(c,g,x),i._OrtReleaseRunOptions=c=>(i._OrtReleaseRunOptions=ae.Xa)(c),i._OrtCreateBinding=c=>(i._OrtCreateBinding=ae.Ya)(c),i._OrtBindInput=(c,g,x)=>(i._OrtBindInput=ae.Za)(c,g,x),i._OrtBindOutput=(c,g,x,S)=>(i._OrtBindOutput=ae._a)(c,g,x,S),i._OrtClearBoundOutputs=c=>(i._OrtClearBoundOutputs=ae.$a)(c),i._OrtReleaseBinding=c=>(i._OrtReleaseBinding=ae.ab)(c),i._OrtRunWithBinding=(c,g,x,S,M)=>(i._OrtRunWithBinding=ae.bb)(c,g,x,S,M),i._OrtRun=(c,g,x,S,M,N,B,re)=>(i._OrtRun=ae.cb)(c,g,x,S,M,N,B,re),i._OrtEndProfiling=c=>(i._OrtEndProfiling=ae.db)(c),i._JsepOutput=(c,g,x)=>(i._JsepOutput=ae.eb)(c,g,x),i._JsepGetNodeName=c=>(i._JsepGetNodeName=ae.fb)(c);var vo=()=>(vo=ae.gb)(),si=i._free=c=>(si=i._free=ae.hb)(c),ea=i._malloc=c=>(ea=i._malloc=ae.ib)(c),yo=(c,g,x,S,M,N)=>(yo=ae.kb)(c,g,x,S,M,N),wd=()=>(wd=ae.lb)(),Sd=(c,g,x,S,M)=>(Sd=ae.mb)(c,g,x,S,M),Ed=c=>(Ed=ae.nb)(c),xo=c=>(xo=ae.ob)(c),Td=(c,g)=>(Td=ae.pb)(c,g),Md=()=>(Md=ae.qb)(),Ad=(c,g)=>(Ad=ae.rb)(c,g),ta=c=>(ta=ae.sb)(c),bo=c=>(bo=ae.tb)(c),wo=()=>(wo=ae.ub)(),Cd=i.dynCall_ii=(c,g)=>(Cd=i.dynCall_ii=ae.vb)(c,g);i.dynCall_vii=(c,g,x)=>(i.dynCall_vii=ae.dynCall_vii)(c,g,x),i.dynCall_iiiii=(c,g,x,S,M)=>(i.dynCall_iiiii=ae.dynCall_iiiii)(c,g,x,S,M),i.dynCall_iii=(c,g,x)=>(i.dynCall_iii=ae.dynCall_iii)(c,g,x),i.dynCall_iiiiii=(c,g,x,S,M,N)=>(i.dynCall_iiiiii=ae.dynCall_iiiiii)(c,g,x,S,M,N),i.dynCall_iiiiiiii=(c,g,x,S,M,N,B,re)=>(i.dynCall_iiiiiiii=ae.dynCall_iiiiiiii)(c,g,x,S,M,N,B,re),i.dynCall_iiiiiii=(c,g,x,S,M,N,B)=>(i.dynCall_iiiiiii=ae.dynCall_iiiiiii)(c,g,x,S,M,N,B),i.dynCall_vi=(c,g)=>(i.dynCall_vi=ae.dynCall_vi)(c,g),i.dynCall_iiii=(c,g,x,S)=>(i.dynCall_iiii=ae.dynCall_iiii)(c,g,x,S),i.dynCall_i=c=>(i.dynCall_i=ae.dynCall_i)(c),i.dynCall_viiiiiiii=(c,g,x,S,M,N,B,re,de)=>(i.dynCall_viiiiiiii=ae.dynCall_viiiiiiii)(c,g,x,S,M,N,B,re,de),i.dynCall_viii=(c,g,x,S)=>(i.dynCall_viii=ae.dynCall_viii)(c,g,x,S),i.dynCall_viijj=(c,g,x,S,M)=>(i.dynCall_viijj=ae.dynCall_viijj)(c,g,x,S,M),i.dynCall_viiiiii=(c,g,x,S,M,N,B)=>(i.dynCall_viiiiii=ae.dynCall_viiiiii)(c,g,x,S,M,N,B),i.dynCall_viiii=(c,g,x,S,M)=>(i.dynCall_viiii=ae.dynCall_viiii)(c,g,x,S,M),i.dynCall_viiiii=(c,g,x,S,M,N)=>(i.dynCall_viiiii=ae.dynCall_viiiii)(c,g,x,S,M,N),i.dynCall_vfiii=(c,g,x,S,M)=>(i.dynCall_vfiii=ae.dynCall_vfiii)(c,g,x,S,M),i.dynCall_viiiiff=(c,g,x,S,M,N,B)=>(i.dynCall_viiiiff=ae.dynCall_viiiiff)(c,g,x,S,M,N,B),i.dynCall_viiiiiff=(c,g,x,S,M,N,B,re)=>(i.dynCall_viiiiiff=ae.dynCall_viiiiiff)(c,g,x,S,M,N,B,re),i.dynCall_ffff=(c,g,x,S)=>(i.dynCall_ffff=ae.dynCall_ffff)(c,g,x,S),i.dynCall_viiff=(c,g,x,S,M)=>(i.dynCall_viiff=ae.dynCall_viiff)(c,g,x,S,M),i.dynCall_fffffff=(c,g,x,S,M,N,B)=>(i.dynCall_fffffff=ae.dynCall_fffffff)(c,g,x,S,M,N,B),i.dynCall_jjjjjjj=(c,g,x,S,M,N,B)=>(i.dynCall_jjjjjjj=ae.dynCall_jjjjjjj)(c,g,x,S,M,N,B),i.dynCall_jjjjjj=(c,g,x,S,M,N)=>(i.dynCall_jjjjjj=ae.dynCall_jjjjjj)(c,g,x,S,M,N),i.dynCall_iijjii=(c,g,x,S,M,N)=>(i.dynCall_iijjii=ae.dynCall_iijjii)(c,g,x,S,M,N),i.dynCall_viiiiiiiiiiiii=(c,g,x,S,M,N,B,re,de,ve,De,je,at,yt)=>(i.dynCall_viiiiiiiiiiiii=ae.dynCall_viiiiiiiiiiiii)(c,g,x,S,M,N,B,re,de,ve,De,je,at,yt),i.dynCall_viiiiiiiiii=(c,g,x,S,M,N,B,re,de,ve,De)=>(i.dynCall_viiiiiiiiii=ae.dynCall_viiiiiiiiii)(c,g,x,S,M,N,B,re,de,ve,De),i.dynCall_viiiiiiiiiii=(c,g,x,S,M,N,B,re,de,ve,De,je)=>(i.dynCall_viiiiiiiiiii=ae.dynCall_viiiiiiiiiii)(c,g,x,S,M,N,B,re,de,ve,De,je),i.dynCall_viiiiiiiiiiii=(c,g,x,S,M,N,B,re,de,ve,De,je,at)=>(i.dynCall_viiiiiiiiiiii=ae.dynCall_viiiiiiiiiiii)(c,g,x,S,M,N,B,re,de,ve,De,je,at),i.dynCall_viiiiiiiiiiiiiiiiii=(c,g,x,S,M,N,B,re,de,ve,De,je,at,yt,Ht,vn,ai,Hi,cs)=>(i.dynCall_viiiiiiiiiiiiiiiiii=ae.dynCall_viiiiiiiiiiiiiiiiii)(c,g,x,S,M,N,B,re,de,ve,De,je,at,yt,Ht,vn,ai,Hi,cs),i.dynCall_viiiiiiiii=(c,g,x,S,M,N,B,re,de,ve)=>(i.dynCall_viiiiiiiii=ae.dynCall_viiiiiiiii)(c,g,x,S,M,N,B,re,de,ve),i.dynCall_viiiiiiiiiiiiiiiiiii=(c,g,x,S,M,N,B,re,de,ve,De,je,at,yt,Ht,vn,ai,Hi,cs,So)=>(i.dynCall_viiiiiiiiiiiiiiiiiii=ae.dynCall_viiiiiiiiiiiiiiiiiii)(c,g,x,S,M,N,B,re,de,ve,De,je,at,yt,Ht,vn,ai,Hi,cs,So),i.dynCall_viiiiiii=(c,g,x,S,M,N,B,re)=>(i.dynCall_viiiiiii=ae.dynCall_viiiiiii)(c,g,x,S,M,N,B,re),i.dynCall_viiiiiiiiiiiiiii=(c,g,x,S,M,N,B,re,de,ve,De,je,at,yt,Ht,vn)=>(i.dynCall_viiiiiiiiiiiiiii=ae.dynCall_viiiiiiiiiiiiiii)(c,g,x,S,M,N,B,re,de,ve,De,je,at,yt,Ht,vn),i.dynCall_jiji=(c,g,x,S)=>(i.dynCall_jiji=ae.dynCall_jiji)(c,g,x,S),i.dynCall_v=c=>(i.dynCall_v=ae.dynCall_v)(c),i.dynCall_iidiiii=(c,g,x,S,M,N,B)=>(i.dynCall_iidiiii=ae.dynCall_iidiiii)(c,g,x,S,M,N,B),i.dynCall_iiiiiiiii=(c,g,x,S,M,N,B,re,de)=>(i.dynCall_iiiiiiiii=ae.dynCall_iiiiiiiii)(c,g,x,S,M,N,B,re,de),i.dynCall_iiij=(c,g,x,S)=>(i.dynCall_iiij=ae.dynCall_iiij)(c,g,x,S),i.dynCall_iiiiiiiiii=(c,g,x,S,M,N,B,re,de,ve)=>(i.dynCall_iiiiiiiiii=ae.dynCall_iiiiiiiiii)(c,g,x,S,M,N,B,re,de,ve),i.dynCall_iiiiiiiiiiiii=(c,g,x,S,M,N,B,re,de,ve,De,je,at)=>(i.dynCall_iiiiiiiiiiiii=ae.dynCall_iiiiiiiiiiiii)(c,g,x,S,M,N,B,re,de,ve,De,je,at),i.dynCall_iiiiiiiiiii=(c,g,x,S,M,N,B,re,de,ve,De)=>(i.dynCall_iiiiiiiiiii=ae.dynCall_iiiiiiiiiii)(c,g,x,S,M,N,B,re,de,ve,De),i.dynCall_ji=(c,g)=>(i.dynCall_ji=ae.dynCall_ji)(c,g),i.dynCall_iijii=(c,g,x,S,M)=>(i.dynCall_iijii=ae.dynCall_iijii)(c,g,x,S,M),i.dynCall_vij=(c,g,x)=>(i.dynCall_vij=ae.dynCall_vij)(c,g,x),i.dynCall_viiijii=(c,g,x,S,M,N,B)=>(i.dynCall_viiijii=ae.dynCall_viiijii)(c,g,x,S,M,N,B),i.dynCall_viijiiiiiiiiiiiiii=(c,g,x,S,M,N,B,re,de,ve,De,je,at,yt,Ht,vn,ai,Hi)=>(i.dynCall_viijiiiiiiiiiiiiii=ae.dynCall_viijiiiiiiiiiiiiii)(c,g,x,S,M,N,B,re,de,ve,De,je,at,yt,Ht,vn,ai,Hi),i.dynCall_viiiji=(c,g,x,S,M,N)=>(i.dynCall_viiiji=ae.dynCall_viiiji)(c,g,x,S,M,N),i.dynCall_fiii=(c,g,x,S)=>(i.dynCall_fiii=ae.dynCall_fiii)(c,g,x,S),i.dynCall_viijii=(c,g,x,S,M,N)=>(i.dynCall_viijii=ae.dynCall_viijii)(c,g,x,S,M,N),i.dynCall_viij=(c,g,x,S)=>(i.dynCall_viij=ae.dynCall_viij)(c,g,x,S),i.dynCall_jiij=(c,g,x,S)=>(i.dynCall_jiij=ae.dynCall_jiij)(c,g,x,S),i.dynCall_fi=(c,g)=>(i.dynCall_fi=ae.dynCall_fi)(c,g),i.dynCall_fii=(c,g,x)=>(i.dynCall_fii=ae.dynCall_fii)(c,g,x),i.dynCall_jii=(c,g,x)=>(i.dynCall_jii=ae.dynCall_jii)(c,g,x),i.dynCall_dii=(c,g,x)=>(i.dynCall_dii=ae.dynCall_dii)(c,g,x),i.dynCall_fiiii=(c,g,x,S,M)=>(i.dynCall_fiiii=ae.dynCall_fiiii)(c,g,x,S,M),i.dynCall_fif=(c,g,x)=>(i.dynCall_fif=ae.dynCall_fif)(c,g,x),i.dynCall_jfi=(c,g,x)=>(i.dynCall_jfi=ae.dynCall_jfi)(c,g,x),i.dynCall_viiiiiiiiiiiiii=(c,g,x,S,M,N,B,re,de,ve,De,je,at,yt,Ht)=>(i.dynCall_viiiiiiiiiiiiii=ae.dynCall_viiiiiiiiiiiiii)(c,g,x,S,M,N,B,re,de,ve,De,je,at,yt,Ht),i.dynCall_viiiiiiiiiiiiiiiiiiii=(c,g,x,S,M,N,B,re,de,ve,De,je,at,yt,Ht,vn,ai,Hi,cs,So,Px)=>(i.dynCall_viiiiiiiiiiiiiiiiiiii=ae.dynCall_viiiiiiiiiiiiiiiiiiii)(c,g,x,S,M,N,B,re,de,ve,De,je,at,yt,Ht,vn,ai,Hi,cs,So,Px),i.dynCall_viiiiiiiiiiiiiiii=(c,g,x,S,M,N,B,re,de,ve,De,je,at,yt,Ht,vn,ai)=>(i.dynCall_viiiiiiiiiiiiiiii=ae.dynCall_viiiiiiiiiiiiiiii)(c,g,x,S,M,N,B,re,de,ve,De,je,at,yt,Ht,vn,ai),i.dynCall_iif=(c,g,x)=>(i.dynCall_iif=ae.dynCall_iif)(c,g,x),i.dynCall_jiiii=(c,g,x,S,M)=>(i.dynCall_jiiii=ae.dynCall_jiiii)(c,g,x,S,M),i.dynCall_jiii=(c,g,x,S)=>(i.dynCall_jiii=ae.dynCall_jiii)(c,g,x,S),i.dynCall_viif=(c,g,x,S)=>(i.dynCall_viif=ae.dynCall_viif)(c,g,x,S),i.dynCall_viiij=(c,g,x,S,M)=>(i.dynCall_viiij=ae.dynCall_viiij)(c,g,x,S,M),i.dynCall_viiiijii=(c,g,x,S,M,N,B,re)=>(i.dynCall_viiiijii=ae.dynCall_viiiijii)(c,g,x,S,M,N,B,re),i.dynCall_iiiiij=(c,g,x,S,M,N)=>(i.dynCall_iiiiij=ae.dynCall_iiiiij)(c,g,x,S,M,N),i.dynCall_iiiiid=(c,g,x,S,M,N)=>(i.dynCall_iiiiid=ae.dynCall_iiiiid)(c,g,x,S,M,N),i.dynCall_iiiiijj=(c,g,x,S,M,N,B)=>(i.dynCall_iiiiijj=ae.dynCall_iiiiijj)(c,g,x,S,M,N,B),i.dynCall_iiiiiijj=(c,g,x,S,M,N,B,re)=>(i.dynCall_iiiiiijj=ae.dynCall_iiiiiijj)(c,g,x,S,M,N,B,re);var Rd=c=>(Rd=ae.wb)(c),Id=()=>(Id=ae.xb)(),Pd=c=>(Pd=ae.yb)(c),Dd=()=>(Dd=ae.zb)();return(function c(){if(0<O)St=c;else if(o)e(i),ct();else{for(;0<rt.length;)rt.shift()(i);0<O?St=c:(i.calledRun=!0,te||(ct(),e(i)))}})(),i.PTR_SIZE=4,r},v_=ll,Fh=globalThis.self?.name?.startsWith("em-pthread"),Fh&&ll()}),ul,Vu,Bh,bn,y_,Ca,Hh,Vh,cl,Gh,dl,x_,hl,b_,Ac=ge(()=>{Mc(),ul=typeof location>"u"?void 0:location.origin,Vu=import.meta.url>"file:"&&import.meta.url<"file;",Bh=()=>{{if(Vu){let t=URL;return new URL(new t("ort.bundle.min.mjs",import.meta.url).href,ul).href}return import.meta.url}},bn=Bh(),y_=()=>{if(bn&&!bn.startsWith("blob:"))return bn.substring(0,bn.lastIndexOf("/")+1)},Ca=(t,e)=>{try{let n=e??bn;return(n?new URL(t,n):new URL(t)).origin===ul}catch{return!1}},Hh=(t,e)=>{let n=e??bn;try{return(n?new URL(t,n):new URL(t)).href}catch{return}},Vh=(t,e)=>`${e??"./"}${t}`,cl=async t=>{let e=await(await fetch(t,{credentials:"same-origin"})).blob();return URL.createObjectURL(e)},Gh=async t=>(await import(t)).default,dl=(zM(),Bs(m_)).default,x_=async()=>{if(!bn)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Ca(bn))return[void 0,dl()];let t=await cl(bn);return[t,dl(t)]},hl=(kM(),Bs(__)).default,b_=async(t,e,n,i)=>{let r=hl&&!(t||e);if(r)if(bn)r=Ca(bn);else if(i&&!n)r=!0;else throw new Error("cannot determine the script source URL.");if(r)return[void 0,hl];{let s="ort-wasm-simd-threaded.jsep.mjs",a=t??Hh(s,e),o=n&&a&&!Ca(a,e),l=o?await cl(a):a??Vh(s,e);return[o?l:void 0,await Gh(l)]}}}),fl,Ra,_s,pl,Wh,qh,Xh,Cc,It,gr=ge(()=>{Ac(),Ra=!1,_s=!1,pl=!1,Wh=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},qh=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Xh=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Cc=async t=>{if(Ra)return Promise.resolve();if(_s)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(pl)throw new Error("previous call to 'initializeWebAssembly()' failed.");_s=!0;let e=t.initTimeout,n=t.numThreads;if(t.simd!==!1){if(t.simd==="relaxed"){if(!Xh())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!qh())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=Wh();n>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),t.numThreads=n=1);let r=t.wasmPaths,s=typeof r=="string"?r:void 0,a=r?.mjs,o=a?.href??a,l=r?.wasm,u=l?.href??l,d=t.wasmBinary,[h,f]=await b_(o,s,n>1,!!d||!!u),m=!1,_=[];if(e>0&&_.push(new Promise(y=>{setTimeout(()=>{m=!0,y()},e)})),_.push(new Promise((y,v)=>{let p={numThreads:n};if(d)p.wasmBinary=d;else if(u||s)p.locateFile=b=>u??s+b;else if(o&&o.indexOf("blob:")!==0)p.locateFile=b=>new URL(b,o).href;else if(h){let b=y_();b&&(p.locateFile=E=>b+E)}f(p).then(b=>{_s=!1,Ra=!0,fl=b,y(),h&&URL.revokeObjectURL(h)},b=>{_s=!1,pl=!0,v(b)})})),await Promise.race(_),m)throw new Error(`WebAssembly backend initializing failed due to timeout: ${e}ms`)},It=()=>{if(Ra&&fl)return fl;throw new Error("WebAssembly is not initialized yet.")}}),Bn,eo,wt,Rc=ge(()=>{gr(),Bn=(t,e)=>{let n=It(),i=n.lengthBytesUTF8(t)+1,r=n._malloc(i);return n.stringToUTF8(t,r,i),e.push(r),r},eo=(t,e,n,i)=>{if(typeof t=="object"&&t!==null){if(n.has(t))throw new Error("Circular reference in options");n.add(t)}Object.entries(t).forEach(([r,s])=>{let a=e?e+r:r;if(typeof s=="object")eo(s,a+".",n,i);else if(typeof s=="string"||typeof s=="number")i(a,s.toString());else if(typeof s=="boolean")i(a,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},wt=t=>{let e=It(),n=e.stackSave();try{let i=e.PTR_SIZE,r=e.stackAlloc(2*i);e._OrtGetLastError(r,r+i);let s=Number(e.getValue(r,i===4?"i32":"i64")),a=e.getValue(r+i,"*"),o=a?e.UTF8ToString(a):"";throw new Error(`${t} ERROR_CODE: ${s}, ERROR_MESSAGE: ${o}`)}finally{e.stackRestore(n)}}}),w_,FM=ge(()=>{gr(),Rc(),w_=t=>{let e=It(),n=0,i=[],r=t||{};try{if(t?.logSeverityLevel===void 0)r.logSeverityLevel=2;else if(typeof t.logSeverityLevel!="number"||!Number.isInteger(t.logSeverityLevel)||t.logSeverityLevel<0||t.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${t.logSeverityLevel}`);if(t?.logVerbosityLevel===void 0)r.logVerbosityLevel=0;else if(typeof t.logVerbosityLevel!="number"||!Number.isInteger(t.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${t.logVerbosityLevel}`);t?.terminate===void 0&&(r.terminate=!1);let s=0;return t?.tag!==void 0&&(s=Bn(t.tag,i)),n=e._OrtCreateRunOptions(r.logSeverityLevel,r.logVerbosityLevel,!!r.terminate,s),n===0&&wt("Can't create run options."),t?.extra!==void 0&&eo(t.extra,"",new WeakSet,(a,o)=>{let l=Bn(a,i),u=Bn(o,i);e._OrtAddRunConfigEntry(n,l,u)!==0&&wt(`Can't set a run config entry: ${a} - ${o}.`)}),[n,i]}catch(s){throw n!==0&&e._OrtReleaseRunOptions(n),i.forEach(a=>e._free(a)),s}}}),jh,Kh,Yh,vs,Zh,S_,BM=ge(()=>{gr(),Rc(),jh=t=>{switch(t){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${t}`)}},Kh=t=>{switch(t){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${t}`)}},Yh=t=>{t.extra||(t.extra={}),t.extra.session||(t.extra.session={});let e=t.extra.session;e.use_ort_model_bytes_directly||(e.use_ort_model_bytes_directly="1"),t.executionProviders&&t.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(t.enableMemPattern=!1)},vs=(t,e,n,i)=>{let r=Bn(e,i),s=Bn(n,i);It()._OrtAddSessionConfigEntry(t,r,s)!==0&&wt(`Can't set a session config entry: ${e} - ${n}.`)},Zh=async(t,e,n)=>{for(let i of e){let r=typeof i=="string"?i:i.name,s=[];switch(r){case"webnn":if(r="WEBNN",typeof i!="string"){let d=i?.deviceType;d&&vs(t,"deviceType",d,n)}break;case"webgpu":if(r="JS",typeof i!="string"){let d=i;if(d?.preferredLayout){if(d.preferredLayout!=="NCHW"&&d.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${d.preferredLayout}`);vs(t,"preferredLayout",d.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${r}`)}let a=Bn(r,n),o=s.length,l=0,u=0;if(o>0){l=It()._malloc(o*It().PTR_SIZE),n.push(l),u=It()._malloc(o*It().PTR_SIZE),n.push(u);for(let d=0;d<o;d++)It().setValue(l+d*It().PTR_SIZE,s[d][0],"*"),It().setValue(u+d*It().PTR_SIZE,s[d][1],"*")}await It()._OrtAppendExecutionProvider(t,a,l,u,o)!==0&&wt(`Can't append execution provider: ${r}.`)}},S_=async t=>{let e=It(),n=0,i=[],r=t||{};Yh(r);try{let s=jh(r.graphOptimizationLevel??"all"),a=Kh(r.executionMode??"sequential"),o=typeof r.logId=="string"?Bn(r.logId,i):0,l=r.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let u=r.logVerbosityLevel??0;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log verbosity level is not valid: ${u}`);let d=typeof r.optimizedModelFilePath=="string"?Bn(r.optimizedModelFilePath,i):0;if(n=e._OrtCreateSessionOptions(s,!!r.enableCpuMemArena,!!r.enableMemPattern,a,!!r.enableProfiling,0,o,l,u,d),n===0&&wt("Can't create session options."),r.executionProviders&&await Zh(n,r.executionProviders,i),r.enableGraphCapture!==void 0){if(typeof r.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${r.enableGraphCapture}`);vs(n,"enableGraphCapture",r.enableGraphCapture.toString(),i)}if(r.freeDimensionOverrides)for(let[h,f]of Object.entries(r.freeDimensionOverrides)){if(typeof h!="string")throw new Error(`free dimension override name must be a string: ${h}`);if(typeof f!="number"||!Number.isInteger(f)||f<0)throw new Error(`free dimension override value must be a non-negative integer: ${f}`);let m=Bn(h,i);e._OrtAddFreeDimensionOverride(n,m,f)!==0&&wt(`Can't set a free dimension override: ${h} - ${f}.`)}return r.extra!==void 0&&eo(r.extra,"",new WeakSet,(h,f)=>{vs(n,h,f,i)}),[n,i]}catch(s){throw n!==0&&e._OrtReleaseSessionOptions(n)!==0&&wt("Can't release session options."),i.forEach(a=>e._free(a)),s}}}),ir,mi,rr,co,to,Ic,Pc,Gu,Ke=ge(()=>{ir=t=>{switch(t){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${t}`)}},mi=t=>{switch(t){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${t}`)}},rr=(t,e)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][t],i=typeof e=="number"?e:e.reduce((r,s)=>r*s,1);return n>0?Math.ceil(i*n):void 0},co=t=>{switch(t){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${t}`)}},to=t=>{switch(t){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${t}`)}},Ic=t=>t==="float32"||t==="float16"||t==="int32"||t==="int64"||t==="uint32"||t==="uint8"||t==="bool"||t==="uint4"||t==="int4",Pc=t=>t==="float32"||t==="float16"||t==="int32"||t==="int64"||t==="uint32"||t==="uint64"||t==="int8"||t==="uint8"||t==="bool"||t==="uint4"||t==="int4",Gu=t=>{switch(t){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${t}`)}}}),Dc,E_=ge(()=>{Mc(),Dc=async t=>{if(typeof t=="string"){let e=await fetch(t);if(!e.ok)throw new Error(`failed to load external data file: ${t}`);let n=e.headers.get("Content-Length"),i=n?parseInt(n,10):0;if(i<1073741824)return new Uint8Array(await e.arrayBuffer());{if(!e.body)throw new Error(`failed to load external data file: ${t}, no response body.`);let r=e.body.getReader(),s;try{s=new ArrayBuffer(i)}catch(o){if(o instanceof RangeError){let l=Math.ceil(i/65536);s=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw o}let a=0;for(;;){let{done:o,value:l}=await r.read();if(o)break;let u=l.byteLength;new Uint8Array(s,a,u).set(l),a+=u}return new Uint8Array(s,0,i)}}else return t instanceof Blob?new Uint8Array(await t.arrayBuffer()):t instanceof Uint8Array?t:new Uint8Array(t)}}),Jh,Qh,ef,tf,$c,nf,ft,vi=ge(()=>{Ke(),Jh=["V","I","W","E","F"],Qh=(t,e)=>{console.log(`[${Jh[t]},${new Date().toISOString()}]${e}`)},$c=(t,e)=>{ef=t,tf=e},nf=(t,e)=>{let n=to(t),i=to(ef);n>=i&&Qh(n,typeof e=="function"?e():e)},ft=(...t)=>{tf&&nf(...t)}}),rf,Yr,ne,no,T_,M_,A_,et=ge(()=>{rf=class{static calcMatMulShape(t,e){return t[1]!==e[0]?void 0:[t[0],e[1]]}},Yr=class{static calcShape(t,e,n=!1){let i=t.length,r=e.length;if(i===0)return e;if(r===0)return t;let s=Math.max(t.length,e.length),a=new Array(s);if(n){if(i<2||r<2)return;let o=rf.calcMatMulShape([t[i-2],t[i-1]],[e[r-2],e[r-1]]);if(o===void 0)return;[a[s-2],a[s-1]]=o}for(let o=n?3:1;o<=s;o++){let l=i-o<0?1:t[i-o],u=r-o<0?1:e[r-o];if(l!==u&&l>1&&u>1)return;let d=Math.max(l,u);if(l&&u)a[s-o]=Math.max(l,u);else{if(d>1)return;a[s-o]=0}}return a}static isValidBroadcast(t,e){let n=t.length,i=e.length;if(n>i)return!1;for(let r=1;r<=n;r++)if(t[n-r]!==1&&t[n-r]!==e[i-r])return!1;return!0}},ne=class qa{static size(e){return qa.getSizeFromDimensionRange(e,0,e.length)}static convertShape(e,n=4){let i=e.length;if(i===0)return[];let r=new Array(i),s=i-1;for(;s>=0;){if(e[s]%n===0){r[s]=e[s]/n;break}if(n%e[s]!==0)throw new Error("cannot convert shape");r[s]=1,n/=e[s],s--}for(s--;s>=0;s--)r[s]=e[s];return r}static sizeFromDimension(e,n){if(n<0||n>e.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${e.length} dimensions.`);return qa.getSizeFromDimensionRange(e,n,e.length)}static sizeToDimension(e,n){if(n<0||n>e.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${e.length} dimensions.`);return qa.getSizeFromDimensionRange(e,0,n)}static getSizeFromDimensionRange(e,n,i){let r=1;for(let s=n;s<i;s++){if(e[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");r*=Number(e[s])}return r}static computeStrides(e){let n=e.length;if(n===0)return[];if(n===1)return[1];let i=new Array(n);i[n-1]=1,i[n-2]=e[n-1];for(let r=n-3;r>=0;--r)i[r]=i[r+1]*e[r+1];return i}static normalizeAxis(e,n){if(e<-n&&e>=n)throw new Error("unsupported axis for this operation.");return e<0?e+n:e}static normalizeAxes(e,n){return e.map(i=>this.normalizeAxis(i,n??e.length))}static sortBasedOnPerm(e,n){return n?n.map(i=>e[i]):e.slice().reverse()}static padShape(e,n){let i=e.length;return e.map((r,s)=>r+n[s]+n[s+i])}static areEqual(e,n){return e.length!==n.length?!1:e.every((i,r)=>i===n[r])}},no=class Rs{static adjustPoolAttributes(e,n,i,r,s,a){if(!e&&i.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(e)for(let o=0;o<n.length-2;o++)o>=i.length?i.push(n[o+2]):i[o]=n[o+2];for(let o=0;o<i.length;o++)if(o<r.length){if(r[o]<0)throw new Error("strides should be greater than or equal to 1")}else r.push(1);for(let o=0;o<i.length;o++)if(o<s.length){if(s[o]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let o=0;o<i.length*2;o++)if(o<a.length){if(a[o]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let o=0;o<i.length;o++){if(i[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[o]>=i[o]||a[o+i.length]>=i[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(e,n,i,r,s,a,o){if(o){if(s.length!==2*(e.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==e.length-2)throw new Error("length of strides should be the length of data dimensions");if(r.length!==e.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<e.length-2;l++)Rs.adjustPadAndReturnShape(e[l+(a?1:2)],n[l],i[l],r[l],s,l,l+e.length-2,o)}}static computePoolOutputShape(e,n,i,r,s,a,o){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let l=[n[0],n[1]];return Rs.computeShapeHelper(e,n,l,i,r,s,a,o),l}static computeConvOutputShape(e,n,i,r,s,a,o){if(e.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[e[0],n[0]];return Rs.computeShapeHelper(!1,e,l,i,r,s,a,o),l}static computeShapeHelper(e,n,i,r,s,a,o,l){if(e)for(let u=0;u<n.length-2;u++)i.push(1);else for(let u=0;u<n.length-2;u++)i.push(Rs.adjustPadAndReturnShape(n[u+2],r[u],s[u],a[u],o,u,u+n.length-2,l))}static adjustPadAndReturnShape(e,n,i,r,s,a,o,l){let u=i*(r-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return s[a]=0,s[o]=0,Math.floor((e-u)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let d=((e+n-1)/n-1)*n+r-e;return s[a]=Math.floor(l==="SAME_LOWER"?(d+1)/2:d/2),s[o]=d-s[a],Math.floor((e+d-r)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((e+s[a]+s[o]-u)/n+1)}},T_=class{static getShapeOfGemmResult(t,e,n,i,r){if(t.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let s,a,o;e?(s=t[1],a=t[0]):(s=t[0],a=t[1]);let l=-1;if(i?(o=n[0],l=1):(o=n[1],l=0),n[l]!==a)throw new Error("dimension mismatch");if(s<=0||o<=0||a<=0)throw new Error("invalid shape specified");if(r&&!Yr.isValidBroadcast(r,[s,o]))throw new Error("gemm: invalid bias shape for broadcast");return[s,o,a]}},M_=-34028234663852886e22,A_=34028234663852886e22}),Lc,C_=ge(()=>{Ke(),Lc=(t,e)=>new(co(e))(t)}),ml,Wu,gl,sf,_l,af,vl,yl,xl,of,R_,HM=ge(()=>{Ke(),vi(),ml=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Wu=(t,e)=>{if(e==="int32")return t;let n=ml.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);let i=n/8;if(t.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let r=t.byteLength/i,s=new(co(e))(t.buffer,t.byteOffset,r);switch(e){case"int64":case"uint64":{let a=new Int32Array(r);for(let o=0;o<r;o++){let l=s[o];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");a[o]=Number(l)}return new Uint8Array(a.buffer)}case"int8":case"uint8":case"uint32":{if(e==="uint32"&&s.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let a=Int32Array.from(s,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from ${e} to 'int32'`)}},gl=(t,e)=>{if(e==="int32")return t;if(t.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=t.byteLength/4,i=new Int32Array(t.buffer,t.byteOffset,n);switch(e){case"int64":{let r=BigInt64Array.from(i,BigInt);return new Uint8Array(r.buffer)}case"uint64":{if(i.some(s=>s<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let r=BigUint64Array.from(i,BigInt);return new Uint8Array(r.buffer)}case"int8":{if(i.some(s=>s<-128||s>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let r=Int8Array.from(i,Number);return new Uint8Array(r.buffer)}case"uint8":{if(i.some(r=>r<0||r>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(s=>s<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let r=Uint32Array.from(i,Number);return new Uint8Array(r.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${e}`)}},sf=1,_l=()=>sf++,af=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),vl=(t,e)=>{let n=ml.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);return e.length>0?Math.ceil(e.reduce((i,r)=>i*r)*n/8):0},yl=class{constructor(t){this.isDataConverted=!1;let{sessionId:e,context:n,tensor:i,dataType:r,shape:s,fallbackDataType:a}=t;this.sessionId=e,this.mlContext=n,this.mlTensor=i,this.dataType=r,this.tensorShape=s,this.fallbackDataType=a}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return vl(this.dataType,this.tensorShape)}destroy(){ft("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(t){this.mlContext.writeTensor(this.mlTensor,t)}async read(t){if(this.fallbackDataType){let e=await this.mlContext.readTensor(this.mlTensor),n=gl(new Uint8Array(e),this.dataType);if(t){(t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)).set(n);return}else return n.buffer}else return t?this.mlContext.readTensor(this.mlTensor,t):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(t,e,n){return this.mlContext===t&&this.dataType===e&&this.tensorShape.length===n.length&&this.tensorShape.every((i,r)=>i===n[r])}setIsDataConverted(t){this.isDataConverted=t}},xl=class{constructor(t,e){this.tensorManager=t,this.wrapper=e}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(t,e,n,i){let r=this.tensorManager.getMLContext(t),s;if(!r.opSupportLimits().input.dataTypes.includes(e)){if(s=af.get(e),!s||!r.opSupportLimits().input.dataTypes.includes(s))throw new Error(`WebNN backend does not support data type: ${e}`);ft("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${e} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(r,e,n))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==vl(e,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let a=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(t,e,n,a,!0,!0,s),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(t){let e=t;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")e=Wu(t,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(t.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}else ft("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(t){if(this.activeUpload){let e=this.wrapper?.isDataConverted?gl(this.activeUpload,this.wrapper?.type):this.activeUpload;if(t){t instanceof ArrayBuffer?new Uint8Array(t).set(e):new Uint8Array(t.buffer,t.byteOffset,t.byteLength).set(e);return}else return e.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return t?this.wrapper.read(t):this.wrapper.read()}},of=class{constructor(t){this.backend=t,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(t){let e=this.backend.getMLContext(t);if(!e)throw new Error("MLContext not found for session.");return e}reserveTensorId(){let t=_l();return this.tensorTrackersById.set(t,new xl(this)),t}releaseTensorId(t){let e=this.tensorTrackersById.get(t);e&&(this.tensorTrackersById.delete(t),e.tensorWrapper&&this.releaseTensor(e.tensorWrapper))}async ensureTensor(t,e,n,i,r){ft("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${e}, dataType: ${n}, shape: ${i}, copyOld: ${r}}`);let s=this.tensorTrackersById.get(e);if(!s)throw new Error("Tensor not found.");return s.ensureTensor(t,n,i,r)}upload(t,e){let n=this.tensorTrackersById.get(t);if(!n)throw new Error("Tensor not found.");n.upload(e)}async download(t,e){ft("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${t}, dstBuffer: ${e?.byteLength}}`);let n=this.tensorTrackersById.get(t);if(!n)throw new Error("Tensor not found.");return n.download(e)}releaseTensorsForSession(t){for(let e of this.freeTensors)e.sessionId===t&&e.destroy();this.freeTensors=this.freeTensors.filter(e=>e.sessionId!==t)}registerTensor(t,e,n,i){let r=this.getMLContext(t),s=_l(),a=new yl({sessionId:t,context:r,tensor:e,dataType:n,shape:i});return this.tensorTrackersById.set(s,new xl(this,a)),this.externalTensors.add(a),s}async getCachedTensor(t,e,n,i,r,s,a){let o=this.getMLContext(t);for(let[u,d]of this.freeTensors.entries())if(d.canReuseTensor(o,e,n)){ft("verbose",()=>`[WebNN] Reusing tensor {dataType: ${e}, ${a?`fallbackDataType: ${a},`:""} shape: ${n}`);let h=this.freeTensors.splice(u,1)[0];return h.sessionId=t,h}ft("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${e}, ${a?`fallbackDataType: ${a},`:""} shape: ${n}}`);let l=await o.createTensor({dataType:a??e,shape:n,dimensions:n,usage:i,writable:r,readable:s});return new yl({sessionId:t,context:o,tensor:l,dataType:e,shape:n,fallbackDataType:a})}releaseTensor(t){this.externalTensors.has(t)&&this.externalTensors.delete(t),this.freeTensors.push(t)}},R_=(...t)=>new of(...t)}),ys,lf,I_,VM=ge(()=>{Ke(),gr(),C_(),HM(),vi(),ys=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),lf=(t,e)=>{if(t===e)return!0;if(t===void 0||e===void 0)return!1;let n=Object.keys(t).sort(),i=Object.keys(e).sort();return n.length===i.length&&n.every((r,s)=>r===i[s]&&t[r]===e[r])},I_=class{constructor(t){this.tensorManager=R_(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,$c(t.logLevel,!!t.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(t){ft("verbose",()=>`[WebNN] onRunStart {sessionId: ${t}}`),this.activeSessionId=t}onRunEnd(t){ft("verbose",()=>`[WebNN] onRunEnd {sessionId: ${t}}`);let e=this.temporarySessionTensorIds.get(t);if(e){for(let n of e)ft("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(t),this.activeSessionId=void 0}}async createMLContext(t){if(t instanceof GPUDevice){let n=this.mlContextCache.findIndex(i=>i.gpuDevice===t);if(n!==-1)return this.mlContextCache[n].mlContext;{let i=await navigator.ml.createContext(t);return this.mlContextCache.push({gpuDevice:t,mlContext:i}),i}}else if(t===void 0){let n=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let e=this.mlContextCache.findIndex(n=>lf(n.options,t));if(e!==-1)return this.mlContextCache[e].mlContext;{let n=await navigator.ml.createContext(t);return this.mlContextCache.push({options:t,mlContext:n}),n}}registerMLContext(t,e){this.mlContextBySessionId.set(t,e);let n=this.sessionIdsByMLContext.get(e);n||(n=new Set,this.sessionIdsByMLContext.set(e,n)),n.add(t),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(t,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(t,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(t){this.sessionGraphInputs.delete(t),this.sessionGraphOutputs.delete(t);let e=this.mlContextBySessionId.get(t);if(!e)return;this.tensorManager.releaseTensorsForSession(t),this.mlContextBySessionId.delete(t);let n=this.sessionIdsByMLContext.get(e);if(n.delete(t),n.size===0){this.sessionIdsByMLContext.delete(e);let i=this.mlContextCache.findIndex(r=>r.mlContext===e);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(t){return this.mlContextBySessionId.get(t)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(t){ft("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${t}}`),this.tensorManager.releaseTensorId(t)}async ensureTensor(t,e,n,i,r){let s=ys.get(n);if(!s)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(t??this.currentSessionId,e,s,i,r)}async createTemporaryTensor(t,e,n){ft("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${e}, shape: ${n}}`);let i=ys.get(e);if(!i)throw new Error(`Unsupported ONNX data type: ${e}`);let r=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(t,r,i,n,!1);let s=this.temporarySessionTensorIds.get(t);return s?s.push(r):this.temporarySessionTensorIds.set(t,[r]),r}uploadTensor(t,e){if(!It().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");ft("verbose",()=>`[WebNN] uploadTensor {tensorId: ${t}, data: ${e.byteLength}}`),this.tensorManager.upload(t,e)}async downloadTensor(t,e){return this.tensorManager.download(t,e)}createMLTensorDownloader(t,e){return async()=>{let n=await this.tensorManager.download(t);return Lc(n,e)}}registerMLTensor(t,e,n,i){let r=ys.get(n);if(!r)throw new Error(`Unsupported ONNX data type: ${n}`);let s=this.tensorManager.registerTensor(t,e,r,i);return ft("verbose",()=>`[WebNN] registerMLTensor {tensor: ${e}, dataType: ${r}, dimensions: ${i}} -> {tensorId: ${s}}`),s}registerMLConstant(t,e,n,i,r,s,a=!1){if(!s)throw new Error("External mounted files are not available.");let o=t;t.startsWith("./")&&(o=t.substring(2));let l=s.get(o);if(!l)throw new Error(`File with name ${o} not found in preloaded files.`);if(e+n>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let u=l.slice(e,e+n).buffer,d;switch(r.dataType){case"float32":d=new Float32Array(u);break;case"float16":d=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(u):new Uint16Array(u);break;case"int32":d=new Int32Array(u);break;case"uint32":d=new Uint32Array(u);break;case"int64":if(a){let h=Wu(new Uint8Array(u),"int64");d=new Int32Array(h.buffer),r.dataType="int32"}else d=new BigInt64Array(u);break;case"uint64":d=new BigUint64Array(u);break;case"int8":d=new Int8Array(u);break;case"int4":case"uint4":case"uint8":d=new Uint8Array(u);break;default:throw new Error(`Unsupported data type: ${r.dataType} in creating WebNN Constant from external data.`)}return ft("verbose",()=>`[WebNN] registerMLConstant {dataType: ${r.dataType}, shape: ${r.shape}}} ${a?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),i.constant(r,d)}registerGraphInput(t){this.temporaryGraphInputs.push(t)}registerGraphOutput(t){this.temporaryGraphOutputs.push(t)}isGraphInput(t,e){let n=this.sessionGraphInputs.get(t);return n?n.includes(e):!1}isGraphOutput(t,e){let n=this.sessionGraphOutputs.get(t);return n?n.includes(e):!1}isGraphInputOutputTypeSupported(t,e,n=!0){let i=this.mlContextBySessionId.get(t),r=ys.get(ir(e));return typeof r>"u"?!1:n?!!i?.opSupportLimits().input.dataTypes.includes(r):!!i?.opSupportLimits().output.dataTypes.includes(r)}flush(){}}}),Nc=ge(()=>{}),bl,Ia,Pa,uf,cf,wl,qu,df,P_,GM=ge(()=>{vi(),Nc(),bl=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Ia=[],Pa=t=>Math.ceil(Number(t)/16)*16,uf=t=>{for(let e=0;e<Ia.length;e++){let n=Ia[e];if(t<=n)return n}return Math.ceil(t/16)*16},cf=1,wl=()=>cf++,qu=async(t,e,n,i)=>{let r=Pa(n),s=t.device.createBuffer({size:r,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=t.getCommandEncoder();t.endComputePass(),a.copyBufferToBuffer(e,0,s,0,r),t.flush(),await s.mapAsync(GPUMapMode.READ);let o=s.getMappedRange();if(i){let l=i();return l.set(new Uint8Array(o,0,n)),l}else return new Uint8Array(o.slice(0,n))}finally{s.destroy()}},df=class{constructor(t){this.backend=t,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[e]of bl)Ia.push(e),this.freeBuffers.set(e,[]),this.freeUniformBuffers.set(e,[]);this.sessionCount=0}upload(t,e){let n=e.buffer,i=e.byteOffset,r=e.byteLength,s=Pa(r),a=this.storageCache.get(t);if(!a)throw new Error("gpu data for uploading does not exist");if(Number(a.originalSize)!==r)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${r}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:s,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=o.getMappedRange();new Uint8Array(l).set(new Uint8Array(n,i,r)),o.unmap();let u=this.backend.device.createCommandEncoder();u.copyBufferToBuffer(o,0,a.gpuData.buffer,0,s),this.backend.device.queue.submit([u.finish()]),o.destroy(),ft("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${t})`)}memcpy(t,e){let n=this.storageCache.get(t);if(!n)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(e);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let r=Pa(n.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(n.gpuData.buffer,0,i.gpuData.buffer,0,r)}registerExternalBuffer(t,e,n){let i;if(n){if(i=n[0],t===n[1])return ft("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${e}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=wl();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:t},originalSize:e}),ft("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${e}) => id=${i}, registered.`),i}unregisterExternalBuffer(t){t!==void 0&&(this.storageCache.delete(t),ft("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${t}`))}create(t,e=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=uf(t),i,r=(e&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(e&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(r||s){let o=(r?this.freeBuffers:this.freeUniformBuffers).get(n);o?o.length>0?i=o.pop():i=this.backend.device.createBuffer({size:n,usage:e}):i=this.backend.device.createBuffer({size:n,usage:e})}else i=this.backend.device.createBuffer({size:n,usage:e});let a={id:wl(),type:0,buffer:i};return this.storageCache.set(a.id,{gpuData:a,originalSize:Number(t)}),ft("verbose",()=>`[WebGPU] GpuDataManager.create(size=${t}) => id=${a.id}`),a}get(t){return this.storageCache.get(t)?.gpuData}release(t){let e=typeof t=="bigint"?Number(t):t,n=this.storageCache.get(e);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return ft("verbose",()=>`[WebGPU] GpuDataManager.release(id=${e}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(e),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(t,e){let n=this.storageCache.get(Number(t));if(!n)throw new Error("data does not exist");await qu(this.backend,n.gpuData.buffer,n.originalSize,e)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let t of this.buffersPending){let e=bl.get(t.size);if((t.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(t.size)||[];e===void 0||n.length>=e?t.destroy():n.push(t)}else if((t.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(t.size)||[];e===void 0||n.length>=e?t.destroy():n.push(t)}else t.destroy()}this.buffersPending=[]}else{let t=this.capturedPendingBuffers.get(this.backend.currentSessionId);t||(t=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,t));for(let e of this.buffersPending)t.push(e);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(t=>{t.forEach(e=>{e.destroy()})}),this.freeUniformBuffers.forEach(t=>{t.forEach(e=>{e.destroy()})}),this.storageCache.forEach(t=>{t.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(t=>{t.forEach(e=>{e.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(t){let e=this.capturedPendingBuffers.get(t);e&&(e.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(t)),this.sessionCount-=1,this.sessionCount===0&&(ft("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},P_=(...t)=>new df(...t)}),hf,xt,Ot=ge(()=>{hf=class{constructor(t){Object.assign(this,t)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(t=>`${this[t]}`).join(";")),this.key}},xt=t=>new hf(t)}),Zr,Da,jt,rn,ze,Ut,Xu,Br,zi,Ne,xs,oe,$e,D_,Uc,ff,$_,nt=ge(()=>{Ke(),et(),Zr=64,Da=(t,e)=>{if(e===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(t)){case 10:return e>1?`vec${e}<f16>`:"f16";case 1:return e>1?`vec${e}<f32>`:"f32";case 6:return e>1?`vec${e}<i32>`:"i32";case 12:return e>1?`vec${e}<u32>`:"u32";case 7:if(e>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(e>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(e!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${t}`)}},jt=(t,e=1)=>{let n=Da(t,e);return typeof n=="string"?n:n[0]},rn=(t,e=1)=>{let n=Da(t,e);return typeof n=="string"?n:n[1]},ze=(...t)=>{let e=[];return t.forEach(n=>{n.length!==0&&e.push({type:12,data:n},{type:12,data:ne.computeStrides(n)})}),e},Ut=t=>t%4===0?4:t%2===0?2:1,Xu=(t="f32",e,n="0")=>!e||e===1?`${t}(${n})`:`vec${e}<${t}>(${n})`,Br=(t,e,n)=>t==="f32"?n:e===1?`f32(${n})`:`vec${e}<f32>(${n})`,zi=(t,e)=>e===4?`(${t}.x + ${t}.y + ${t}.z + ${t}.w)`:e===2?`(${t}.x + ${t}.y)`:e===3?`(${t}.x + ${t}.y + ${t}.z)`:t,Ne=(t,e,n,i)=>t.startsWith("uniforms.")&&n>4?typeof e=="string"?i==="f16"?`${t}[(${e}) / 8][(${e}) % 8 / 4][(${e}) % 8 % 4]`:`${t}[(${e}) / 4][(${e}) % 4]`:i==="f16"?`${t}[${Math.floor(e/8)}][${Math.floor(e%8/4)}][${e%8%4}]`:`${t}[${Math.floor(e/4)}][${e%4}]`:n>1?`${t}[${e}]`:t,xs=(t,e,n,i,r)=>{let s=typeof n=="number",a=s?n:n.length,o=[...new Array(a).keys()],l=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,u=Da(e,r),d=typeof u=="string"?u:u[1],h=typeof u=="string"?u:u[0],f={indices:l,value:d,storage:h,tensor:e},m=j=>typeof j=="string"?j:`${j}u`,_={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=s?"uniforms.":"",v=`${y}${t}_shape`,p=`${y}${t}_strides`,b="";for(let j=0;j<a-1;j++)b+=`
    let dim${j} = current / ${Ne(p,j,a)};
    let rest${j} = current % ${Ne(p,j,a)};
    indices[${j}] = dim${j};
    current = rest${j};
    `;b+=`indices[${a-1}] = current;`;let E=a<2?"":`
  fn o2i_${t}(offset: u32) -> ${f.indices} {
    var indices: ${f.indices};
    var current = offset;
    ${b}
    return indices;
  }`,w=j=>(_.offsetToIndices=!0,a<2?j:`o2i_${t}(${j})`),T=[];if(a>=2)for(let j=a-1;j>=0;j--)T.push(`${Ne(p,j,a)} * (indices[${j}])`);let R=a<2?"":`
  fn i2o_${t}(indices: ${f.indices}) -> u32 {
    return ${T.join("+")};
  }`,P=j=>(_.indicesToOffset=!0,a<2?j:`i2o_${t}(${j})`),$=(...j)=>a===0?"0u":`${f.indices}(${j.map(m).join(",")})`,A=(j,le)=>a<2?`${j}`:`${Ne(j,le,a)}`,C=(j,le,Ee)=>a<2?`${j}=${Ee};`:`${Ne(j,le,a)}=${Ee};`,U={},z=(j,le)=>{_.broadcastedIndicesToOffset=!0;let Ee=`${le.name}broadcastedIndicesTo${t}Offset`;if(Ee in U)return`${Ee}(${j})`;let He=[];for(let J=a-1;J>=0;J--){let Q=le.indicesGet("outputIndices",J+le.rank-a);He.push(`${A(p,J)} * (${Q} % ${A(v,J)})`)}return U[Ee]=`fn ${Ee}(outputIndices: ${le.type.indices}) -> u32 {
             return ${He.length>0?He.join("+"):"0u"};
           }`,`${Ee}(${j})`},V=(j,le)=>(()=>{if(f.storage===f.value)return`${t}[${j}]=${le};`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`${t}[${j}]=vec2<u32>(u32(${le}), select(0u, 0xFFFFFFFFu, ${le} < 0));`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`${t}[${j}]=vec2<u32>(u32(${le}), 0u);`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`${t}[${j}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${le}));`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),k=j=>(()=>{if(f.storage===f.value)return`${t}[${j}]`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`i32(${t}[${j}].x)`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`u32(${t}[${j}].x)`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`vec4<bool>(bool(${t}[${j}] & 0xFFu), bool(${t}[${j}] & 0xFF00u), bool(${t}[${j}] & 0xFF0000u), bool(${t}[${j}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),K=a<2?"":`
  fn get_${t}ByIndices(indices: ${f.indices}) -> ${d} {
    return ${k(`i2o_${t}(indices)`)};
  }`,G=a<2?"":(()=>{let j=o.map(Ee=>`d${Ee}: u32`).join(", "),le=o.map(Ee=>`d${Ee}`).join(", ");return`
  fn get_${t}(${j}) -> ${d} {
    return get_${t}ByIndices(${$(le)});
  }`})(),Z=(...j)=>{if(j.length!==a)throw new Error(`indices length must be ${a}`);let le=j.map(m).join(",");return a===0?k("0u"):a===1?k(le[0]):(_.get=!0,_.getByIndices=!0,_.indicesToOffset=!0,`get_${t}(${le})`)},X=j=>a<2?k(j):(_.getByIndices=!0,_.indicesToOffset=!0,`get_${t}ByIndices(${j})`),te=a<2?"":`
  fn set_${t}ByIndices(indices: ${f.indices}, value: ${d}) {
    ${V(`i2o_${t}(indices)`,"value")}
  }`,_e=a<2?"":(()=>{let j=o.map(Ee=>`d${Ee}: u32`).join(", "),le=o.map(Ee=>`d${Ee}`).join(", ");return`
  fn set_${t}(${j}, value: ${d}) {
    set_${t}ByIndices(${$(le)}, value);
  }`})();return{impl:()=>{let j=[],le=!1;return _.offsetToIndices&&(j.push(E),le=!0),_.indicesToOffset&&(j.push(R),le=!0),_.broadcastedIndicesToOffset&&(Object.values(U).forEach(Ee=>j.push(Ee)),le=!0),_.set&&(j.push(_e),le=!0),_.setByIndices&&(j.push(te),le=!0),_.get&&(j.push(G),le=!0),_.getByIndices&&(j.push(K),le=!0),!s&&le&&j.unshift(`const ${v} = ${f.indices}(${n.join(",")});`,`const ${p} = ${f.indices}(${ne.computeStrides(n).join(",")});`),j.join(`
`)},type:f,offsetToIndices:w,indicesToOffset:P,broadcastedIndicesToOffset:z,indices:$,indicesGet:A,indicesSet:C,set:(...j)=>{if(j.length!==a+1)throw new Error(`indices length must be ${a}`);let le=j[a];if(typeof le!="string")throw new Error("value must be string");let Ee=j.slice(0,a).map(m).join(",");return a===0?V("0u",le):a===1?V(Ee[0],le):(_.set=!0,_.setByIndices=!0,_.indicesToOffset=!0,`set_${t}(${Ee}, ${le})`)},setByOffset:V,setByIndices:(j,le)=>a<2?V(j,le):(_.setByIndices=!0,_.indicesToOffset=!0,`set_${t}ByIndices(${j}, ${le});`),get:Z,getByOffset:k,getByIndices:X,usage:i,name:t,strides:p,shape:v,rank:a}},oe=(t,e,n,i=1)=>xs(t,e,n,"input",i),$e=(t,e,n,i=1)=>xs(t,e,n,"output",i),D_=(t,e,n)=>xs(t,e,n,"atomicOutput",1),Uc=(t,e,n,i=1)=>xs(t,e,n,"internal",i),ff=class{constructor(t,e){this.normalizedDispatchGroup=t,this.limits=e,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(t){return`if (global_idx >= ${typeof t=="number"?`${t}u`:t}) { return; }`}mainStart(t=Zr){let e=typeof t=="number"?t:t[0],n=typeof t=="number"?1:t[1],i=typeof t=="number"?1:t[2];if(e>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${e}, ${n}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(e*n*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${e}, ${n}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let r=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=r?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,a=r?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${e*n*i}u + local_idx;`;return`@compute @workgroup_size(${e}, ${n}, ${i})
  fn main(${s}) {
    ${a}
  `}appendVariableUniforms(t){t.rank!==0&&(t.shape.startsWith("uniforms.")&&this.uniforms.push({name:t.shape.replace("uniforms.",""),type:"u32",length:t.rank}),t.strides.startsWith("uniforms.")&&this.uniforms.push({name:t.strides.replace("uniforms.",""),type:"u32",length:t.rank}))}declareVariable(t,e){if(t.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(t),this.appendVariableUniforms(t);let n=t.usage==="input"?"read":"read_write",i=t.usage==="atomicOutput"?"atomic<i32>":t.type.storage;return`@group(0) @binding(${e}) var<storage, ${n}> ${t.name}: array<${i}>;`}declareVariables(...t){return t.map(e=>this.declareVariable(e,this.variableIndex++)).join(`
`)}registerInternalVariable(t){if(t.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(t),this.appendVariableUniforms(t)}registerInternalVariables(...t){return t.forEach(e=>this.registerInternalVariable(e)),this}registerUniform(t,e,n=1){return this.uniforms.push({name:t,type:e,length:n}),this}registerUniforms(t){return this.uniforms=this.uniforms.concat(t),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let t=[];for(let{name:e,type:n,length:i}of this.uniforms)if(i&&i>4)n==="f16"?t.push(`@align(16) ${e}:array<mat2x4<${n}>, ${Math.ceil(i/8)}>`):t.push(`${e}:array<vec4<${n}>, ${Math.ceil(i/4)}>`);else{let r=i==null||i===1?n:`vec${i}<${n}>`;t.push(`${e}:${r}`)}return`
      struct Uniforms { ${t.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(t=>t.impl()).join(`
`)+this.internalVariables.map(t=>t.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let t=e=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(e)];return this.uniforms.map(e=>[t(e.type),e.length??1])}},$_=(t,e)=>new ff(t,e)}),pf,Sl,mf,gf,_f,vf,En,L_,N_,ki=ge(()=>{Ke(),et(),Ot(),nt(),pf=(t,e)=>{if(!t||t.length!==1)throw new Error("Transpose requires 1 input.");if(e.length!==0&&e.length!==t[0].dims.length)throw new Error(`perm size ${e.length} does not match input rank ${t[0].dims.length}`)},Sl=(t,e)=>e.length!==0?e:[...new Array(t).keys()].reverse(),mf=(t,e)=>ne.sortBasedOnPerm(t,Sl(t.length,e)),gf=(t,e,n,i)=>{let r=`fn perm(i: ${i.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let s=0;s<e;++s)r+=`a[${t[s]}]=i[${s}];`;return r+="return a;}"},_f=(t,e)=>{let n=[],i=[];for(let r=0;r<t.length;++r)t[r]!==1&&n.push(t[r]),t[e[r]]!==1&&i.push(e[r]);return{newShape:n,newPerm:i}},vf=(t,e)=>{let n=0;for(let i=0;i<t.length;++i)if(e[t[i]]!==1){if(t[i]<n)return!1;n=t[i]}return!0},En=(t,e)=>{let n=t.dataType,i=t.dims.length,r=Sl(i,e),s=mf(t.dims,r),a=t.dims,o=s,l=i<2||vf(r,t.dims),u;if(l)return u=_=>{let y=oe("input",n,a,4),v=$e("output",n,o,4);return`
  ${_.registerUniform("output_size","u32").declareVariables(y,v)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=ne.size(s);return{outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(_/64/4)},programUniforms:[{type:12,data:Math.ceil(_/4)}]}},getShaderSource:u};let{newShape:d,newPerm:h}=_f(t.dims,r),f=ne.areEqual(h,[2,3,1]),m=ne.areEqual(h,[3,1,2]);if(d.length===2||f||m){a=f?[d[0],d[1]*d[2]]:m?[d[0]*d[1],d[2]]:d,o=[a[1],a[0]];let _=16;return u=y=>{let v=oe("a",n,a.length),p=$e("output",n,o.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(v,p)}
  var<workgroup> tile : array<array<${p.type.value}, ${_+1}>, ${_}>;
  ${y.mainStart([_,_,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${_} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${_}u + local_id.x;
    let input_row = workgroup_id_x * ${_}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${v.getByIndices(`${v.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${_}u + local_id.x;
    let output_row = workgroup_id_y * ${_}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${p.setByIndices(`${p.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=ne.size(s);return{outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(o[1]/_),y:Math.ceil(o[0]/_)},programUniforms:[{type:12,data:y},...ze(a,o)]}},getShaderSource:u}}return u=_=>{let y=oe("a",n,a.length),v=$e("output",n,o.length);return`
  ${_.registerUniform("output_size","u32").declareVariables(y,v)}

  ${gf(r,i,y,v)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${v.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${v.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${e}`,inputDependencies:["rank"]},getRunData:()=>{let _=ne.size(s);return{outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...ze(a,o)]}},getShaderSource:u}},L_=(t,e)=>{pf(t.inputs,e.perm),t.compute(En(t.inputs[0],e.perm))},N_=t=>xt({perm:t.perm})}),yf,xf,bf,wf,Sf,Ef,Tf,Mf,Af,Cf,Un,U_,O_,z_,k_,F_,B_,H_,V_,G_,W_,WM=ge(()=>{Ke(),et(),nt(),Oc(),ki(),yf={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},xf={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},bf={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},wf={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Sf=(t,e)=>{let n=[];for(let i=e-t;i<e;++i)n.push(i);return n},Ef=(t,e)=>{let n=[],i=t.length;for(let s=0;s<i;s++)e.indexOf(s)===-1&&n.push(t[s]);let r=e.map(s=>t[s]);return[n,r]},Tf=(t,e)=>{let n=t.length+e.length,i=[],r=0;for(let s=0;s<n;s++)e.indexOf(s)===-1?i.push(t[r++]):i.push(1);return i},Mf=(t,e)=>{for(let n=0;n<t.length;++n)if(t[t.length-n-1]!==e-1-n)return!1;return!0},Af=(t,e)=>{let n=[];if(!Mf(t,e)){for(let i=0;i<e;++i)t.indexOf(i)===-1&&n.push(i);t.forEach(i=>n.push(i))}return n},Cf=(t,e,n,i,r,s,a)=>{let o=n[0].dims,l=ne.size(s),u=ne.size(a),d=oe("_A",n[0].dataType,o),h=$e("output",r,s),f=64;l===1&&(f=256);let m=`
          var<workgroup> aBestValues : array<f32, ${f}>;
       `,_=y=>`
        ${y.registerUniform("reduceSize","u32").declareVariables(d,h)}
        ${m}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${y.mainStart(f)}

          let outputIndex = global_idx / ${f};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${bf[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${d.getByOffset("offset + k")});
           bestValue = ${yf[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${xf[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${h.setByOffset("outputIndex",`${i==="mean"?`${h.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${h.type.storage}(${wf[i]})`}`)};
         }
        }`;return{name:t,shaderCache:{hint:`${e};${f}`,inputDependencies:["type"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:s,dataType:r}],dispatchGroup:{x:l},programUniforms:[{type:12,data:u}]})}},Un=(t,e,n,i)=>{let r=t.inputs.length===1?n:ju(t.inputs,n),s=r.axes;s.length===0&&!r.noopWithEmptyAxes&&(s=t.inputs[0].dims.map((m,_)=>_));let a=ne.normalizeAxes(s,t.inputs[0].dims.length),o=a,l=t.inputs[0],u=Af(o,t.inputs[0].dims.length);u.length>0&&(l=t.compute(En(t.inputs[0],u),{inputs:[0],outputs:[-1]})[0],o=Sf(o.length,l.dims.length));let[d,h]=Ef(l.dims,o),f=d;r.keepDims&&(f=Tf(d,a)),t.compute(Cf(e,r.cacheKey,[l],i,t.inputs[0].dataType,f,h),{inputs:[l]})},U_=(t,e)=>{Un(t,"ReduceMeanShared",e,"mean")},O_=(t,e)=>{Un(t,"ReduceL1Shared",e,"l1")},z_=(t,e)=>{Un(t,"ReduceL2Shared",e,"l2")},k_=(t,e)=>{Un(t,"ReduceLogSumExpShared",e,"logSumExp")},F_=(t,e)=>{Un(t,"ReduceMaxShared",e,"max")},B_=(t,e)=>{Un(t,"ReduceMinShared",e,"min")},H_=(t,e)=>{Un(t,"ReduceProdShared",e,"prod")},V_=(t,e)=>{Un(t,"ReduceSumShared",e,"sum")},G_=(t,e)=>{Un(t,"ReduceSumSquareShared",e,"sumSquare")},W_=(t,e)=>{Un(t,"ReduceLogSumShared",e,"logSum")}}),On,Rf,io,ju,zn,If,Pf,Df,$f,Lf,Nf,Uf,Of,zf,kf,kn,q_,X_,j_,K_,Y_,Z_,J_,Q_,e0,t0,Oc=ge(()=>{Ke(),et(),Ot(),nt(),WM(),On=t=>{if(!t||t.length===0||t.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(t.length===2&&t[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Rf=t=>["","",`var value = ${t.getByIndices("input_indices")};`,""],io=(t,e,n,i,r,s,a=!1,o=!1)=>{let l=[],u=n[0].dims,d=u.length,h=ne.normalizeAxes(r,d),f=!o&&h.length===0;u.forEach((y,v)=>{f||h.indexOf(v)>=0?a&&l.push(1):l.push(y)});let m=l.length,_=ne.size(l);return{name:t,shaderCache:e,getShaderSource:y=>{let v=[],p=oe("_A",n[0].dataType,d),b=$e("output",s,m),E=i(p,b,h),w=E[2];for(let T=0,R=0;T<d;T++)f||h.indexOf(T)>=0?(a&&R++,w=`for(var j${T}: u32 = 0; j${T} < ${u[T]}; j${T}++) {
                  ${E[2].includes("last_index")?`let last_index = j${T};`:""}
                  ${p.indicesSet("input_indices",T,`j${T}`)}
                  ${w}
                }`):(v.push(`${p.indicesSet("input_indices",T,b.indicesGet("output_indices",R))};`),R++);return`

        ${y.registerUniform("output_size","u32").declareVariables(p,b)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${p.type.indices};
          let output_indices = ${b.offsetToIndices("global_idx")};

          ${v.join(`
`)}
          ${E[0]}       // init ops for reduce max/min
          ${E[1]}
          ${w}
          ${E[3]}
          ${E.length===4?b.setByOffset("global_idx","value"):E.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:s}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...ze(u,l)]})}},ju=(t,e)=>{let n=[];return t[1].dims[0]>0&&t[1].getBigInt64Array().forEach(i=>n.push(Number(i))),xt({axes:n,keepDims:e.keepDims,noopWithEmptyAxes:e.noopWithEmptyAxes})},zn=(t,e,n,i)=>{let r=t.inputs,s=r.length===1?n:ju(r,n);t.compute(io(e,{hint:s.cacheKey,inputDependencies:["rank"]},[r[0]],s.noopWithEmptyAxes&&s.axes.length===0?Rf:i,s.axes,r[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},If=(t,e)=>{On(t.inputs),zn(t,"ReduceLogSum",e,(n,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},Pf=(t,e)=>{On(t.inputs),zn(t,"ReduceL1",e,(n,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},Df=(t,e)=>{On(t.inputs),zn(t,"ReduceL2",e,(n,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},$f=(t,e)=>{On(t.inputs),zn(t,"ReduceLogSumExp",e,(n,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},Lf=(t,e)=>{On(t.inputs),zn(t,"ReduceMax",e,(n,i,r)=>{let s=[];for(let a=0;a<n.rank;a++)(r.indexOf(a)>=0||r.length===0)&&s.push(n.indicesSet("input_indices",a,0));return[`${s.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},Nf=(t,e)=>{On(t.inputs),zn(t,"ReduceMean",e,(n,i,r)=>{let s=1;for(let a=0;a<n.rank;a++)(r.indexOf(a)>=0||r.length===0)&&(s*=t.inputs[0].dims[a]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${s});`]})},Uf=(t,e)=>{On(t.inputs),zn(t,"ReduceMin",e,(n,i,r)=>{let s=[];for(let a=0;a<n.rank;a++)(r.indexOf(a)>=0||r.length===0)&&s.push(`input_indices[${a}] = 0;`);return[`${s.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},Of=(t,e)=>{On(t.inputs),zn(t,"ReduceProd",e,(n,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},zf=(t,e)=>{On(t.inputs),zn(t,"ReduceSum",e,(n,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},kf=(t,e)=>{On(t.inputs),zn(t,"ReduceSumSquare",e,(n,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},kn=(t,e,n)=>{if(e.length===0)return n;let i=1,r=1;for(let s=0;s<e.length;s++)e.indexOf(s)===-1?i*=t[s]:r*=t[s];return r<32&&i>1024},q_=(t,e)=>{kn(t.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?Nf(t,e):U_(t,e)},X_=(t,e)=>{kn(t.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?Pf(t,e):O_(t,e)},j_=(t,e)=>{kn(t.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?Df(t,e):z_(t,e)},K_=(t,e)=>{kn(t.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?$f(t,e):k_(t,e)},Y_=(t,e)=>{kn(t.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?Lf(t,e):F_(t,e)},Z_=(t,e)=>{kn(t.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?Uf(t,e):B_(t,e)},J_=(t,e)=>{kn(t.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?Of(t,e):H_(t,e)},Q_=(t,e)=>{kn(t.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?zf(t,e):V_(t,e)},e0=(t,e)=>{kn(t.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?kf(t,e):G_(t,e)},t0=(t,e)=>{kn(t.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?If(t,e):W_(t,e)}}),El,n0,i0,Ku,qM=ge(()=>{Ke(),Ot(),Oc(),El=t=>{if(!t||t.length===0||t.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(t[0].dataType!==1)throw new Error("Invalid input type.")},n0=(t,e)=>{El(t.inputs);let n=(i,r,s)=>{let a=[];for(let o=0;o<i.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${e.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",r.setByOffset("global_idx","best_index")]};t.compute(io("ArgMin",{hint:e.cacheKey,inputDependencies:["rank"]},[t.inputs[0]],n,[e.axis],7,e.keepDims),{inputs:[0]})},i0=(t,e)=>{El(t.inputs);let n=(i,r,s)=>{let a=[];for(let o=0;o<i.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${e.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",r.setByOffset("global_idx","best_index")]};t.compute(io("argMax",{hint:e.cacheKey,inputDependencies:["rank"]},[t.inputs[0]],n,[e.axis],7,e.keepDims),{inputs:[0]})},Ku=t=>xt(t)}),Ff,$a,Bf,Hf,Vf,Hs,Gf,r0,zc=ge(()=>{Ke(),et(),Nc(),nt(),Ff=(t,e)=>{let n=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5];if(a&&o)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=n.dims[0],u=n.dims[1],d=n.dims[2];if(r.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==d)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(r.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let h=r.dims[0]/3,f=h,m=f;if(e.qkvHiddenSizes.length>0){if(e.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let E of e.qkvHiddenSizes)if(E%e.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");h=e.qkvHiddenSizes[0],f=e.qkvHiddenSizes[1],m=e.qkvHiddenSizes[2]}let _=u;if(h!==f)throw new Error("qkv_hidden_sizes first element should be same as the second");if(r.dims[0]!==h+f+m)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(a){if(f!==m)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==e.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==f/e.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');e.pastPresentShareBuffer||(y=a.dims[3])}let v=_+y,p=-1,b=0;if(s)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==l||o.dims[1]!==e.numHeads||o.dims[2]!==u||o.dims[3]!==v)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:u,pastSequenceLength:y,kvSequenceLength:_,totalSequenceLength:v,maxSequenceLength:p,inputHiddenSize:d,hiddenSize:h,vHiddenSize:m,headSize:Math.floor(h/e.numHeads),vHeadSize:Math.floor(m/e.numHeads),numHeads:e.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:e.maskFilterValue,maskType:b,scale:e.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},$a=(t,e,n)=>e&&t?`
      let total_sequence_length_input = u32(${e.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${t?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${n?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,Bf=(t,e,n,i,r,s,a,o)=>{let l=Ut(a?1:s),u=64,d=s/l;d<u&&(u=32);let h=Math.ceil(s/l/u),f=[{type:12,data:e},{type:12,data:n},{type:12,data:i},{type:12,data:r},{type:12,data:d},{type:12,data:h}],m=jt(t.dataType,l),_=rn(1,l),y=["type"];a&&y.push("type"),o&&y.push("type");let v=p=>{let b=$e("x",t.dataType,t.dims,l),E=[b],w=a?oe("seq_lens",a.dataType,a.dims):void 0;w&&E.push(w);let T=o?oe("total_sequence_length_input",o.dataType,o.dims):void 0;T&&E.push(T);let R=rn(t.dataType),P=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${u}>;
  var<workgroup> thread_sum: array<f32, ${u}>;
  ${p.registerUniforms(P).declareVariables(...E)}
  ${p.mainStart([u,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${$a(w,T,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${u}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${a?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${_}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${_}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${u}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${_}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${_}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${u}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${b.type.value}(${R}(1.0) / ${R}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${_}(x[offset + i]);
        x[offset + i] = ${b.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${a?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${b.type.value}(${R}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${u};${m};${l}`,inputDependencies:y},getShaderSource:v,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:r,z:e*n},programUniforms:f})}},Hf=(t,e,n,i,r,s,a,o,l)=>{let u=a+s.kvSequenceLength,d=[s.batchSize,s.numHeads,s.sequenceLength,u],h=t>1&&i,f=s.kvNumHeads?s.kvNumHeads:s.numHeads,m=h?[s.batchSize,f,u,s.headSize]:void 0,_=s.nReps?s.nReps:1,y=s.scale===0?1/Math.sqrt(s.headSize):s.scale,v=Ut(s.headSize),p=s.headSize/v,b=12,E={x:Math.ceil(u/b),y:Math.ceil(s.sequenceLength/b),z:s.batchSize*s.numHeads},w=[{type:12,data:s.sequenceLength},{type:12,data:p},{type:12,data:u},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:y},{type:12,data:a},{type:12,data:s.kvSequenceLength},{type:12,data:_}],T=h&&i&&ne.size(i.dims)>0,R=["type","type"];T&&R.push("type"),r&&R.push("type"),o&&R.push("type"),l&&R.push("type");let P=[{dims:d,dataType:e.dataType,gpuDataType:0}];h&&P.push({dims:m,dataType:e.dataType,gpuDataType:0});let $=A=>{let C=oe("q",e.dataType,e.dims,v),U=oe("key",n.dataType,n.dims,v),z=[C,U];if(T){let te=oe("past_key",i.dataType,i.dims,v);z.push(te)}r&&z.push(oe("attention_bias",r.dataType,r.dims));let V=o?oe("seq_lens",o.dataType,o.dims):void 0;V&&z.push(V);let k=l?oe("total_sequence_length_input",l.dataType,l.dims):void 0;k&&z.push(k);let K=$e("output",e.dataType,d),G=[K];h&&G.push($e("present_key",e.dataType,m,v));let Z=rn(1,v),X=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;

  var<workgroup> tileQ: array<${C.type.storage}, ${b*b}>;
  var<workgroup> tileK: array<${C.type.storage}, ${b*b}>;
  ${A.registerUniforms(X).declareVariables(...z,...G)}
  ${A.mainStart([b,b,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${_===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${_===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${$a(V,k,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${T&&h?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${h?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${Z}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${T&&h?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${h?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${Z}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(v){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${v}`)}})()};
        output[outputIdx] = ${K.type.value} (sum * uniforms.alpha) + ${r?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${v};${r!==void 0};${i!==void 0};${t}`,inputDependencies:R},getRunData:()=>({outputs:P,dispatchGroup:E,programUniforms:w}),getShaderSource:$}},Vf=(t,e,n,i,r,s,a=void 0,o=void 0)=>{let l=s+r.kvSequenceLength,u=r.nReps?r.nReps:1,d=r.vHiddenSize*u,h=t>1&&i,f=r.kvNumHeads?r.kvNumHeads:r.numHeads,m=h?[r.batchSize,f,l,r.headSize]:void 0,_=[r.batchSize,r.sequenceLength,d],y=12,v={x:Math.ceil(r.vHeadSize/y),y:Math.ceil(r.sequenceLength/y),z:r.batchSize*r.numHeads},p=[{type:12,data:r.sequenceLength},{type:12,data:l},{type:12,data:r.vHeadSize},{type:12,data:r.numHeads},{type:12,data:r.headSize},{type:12,data:d},{type:12,data:s},{type:12,data:r.kvSequenceLength},{type:12,data:u}],b=h&&i&&ne.size(i.dims)>0,E=["type","type"];b&&E.push("type"),a&&E.push("type"),o&&E.push("type");let w=[{dims:_,dataType:e.dataType,gpuDataType:0}];h&&w.push({dims:m,dataType:e.dataType,gpuDataType:0});let T=R=>{let P=oe("probs",e.dataType,e.dims),$=oe("v",n.dataType,n.dims),A=[P,$];b&&A.push(oe("past_value",i.dataType,i.dims));let C=a?oe("seq_lens",a.dataType,a.dims):void 0;a&&A.push(C);let U=o?oe("total_sequence_length_input",o.dataType,o.dims):void 0;o&&A.push(U);let z=[$e("output",e.dataType,_)];h&&z.push($e("present_value",e.dataType,m));let V=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${P.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${P.type.value}, ${y*y}>;
  ${R.registerUniforms(V).declareVariables(...A,...z)}
  ${R.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${u===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${u===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${$a(C,U,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${b&&h?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${h?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${P.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${b&&h?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${h?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${t}`,inputDependencies:E},getRunData:()=>({outputs:w,dispatchGroup:v,programUniforms:p}),getShaderSource:T}},Hs=(t,e,n,i,r,s,a,o,l,u,d=void 0,h=void 0)=>{let f=Math.min(t.outputCount,1+(a?1:0)+(o?1:0)),m=f>1?u.pastSequenceLength:0,_=m+u.kvSequenceLength,y=l&&ne.size(l.dims)>0?l:void 0,v=[e,n];f>1&&a&&ne.size(a.dims)>0&&v.push(a),y&&v.push(y),d&&v.push(d),h&&v.push(h);let p=t.compute(Hf(f,e,n,a,y,u,m,d,h),{inputs:v,outputs:f>1?[-1,1]:[-1]})[0];t.compute(Bf(p,u.batchSize,u.numHeads,m,u.sequenceLength,_,d,h),{inputs:d&&h?[p,d,h]:[p],outputs:[]});let b=[p,i];f>1&&o&&ne.size(o.dims)>0&&b.push(o),d&&b.push(d),h&&b.push(h),t.compute(Vf(f,p,i,o,u,m,d,h),{inputs:b,outputs:f>1?[0,2]:[0]})},Gf=(t,e)=>{let n=[e.batchSize,e.numHeads,e.sequenceLength,e.headSize],i=e.sequenceLength,r=e.inputHiddenSize,s=e.headSize,a=12,o={x:Math.ceil(e.headSize/a),y:Math.ceil(e.sequenceLength/a),z:e.batchSize*e.numHeads},l=[t.inputs[0],t.inputs[1],t.inputs[2]],u=[{type:12,data:i},{type:12,data:r},{type:12,data:s},{type:12,data:e.numHeads},{type:12,data:e.headSize},{type:12,data:e.hiddenSize},{type:12,data:e.hiddenSize+e.hiddenSize+e.vHiddenSize}],d=h=>{let f=$e("output_q",l[0].dataType,n),m=$e("output_k",l[0].dataType,n),_=$e("output_v",l[0].dataType,n),y=oe("input",l[0].dataType,l[0].dims),v=oe("weight",l[1].dataType,l[1].dims),p=oe("bias",l[2].dataType,l[2].dims),b=y.type.storage,E=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${b}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${b}, ${a*a}>;
  var<workgroup> tileWeightK: array<${b}, ${a*a}>;
  var<workgroup> tileWeightV: array<${b}, ${a*a}>;
  ${h.registerUniforms(E).declareVariables(y,v,p,f,m,_)}
  ${h.mainStart([a,a,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${b}(0);
    var valueK = ${b}(0);
    var valueV = ${b}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return t.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:t.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:t.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:t.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:u}),getShaderSource:d},{inputs:l,outputs:[-1,-1,-1]})},r0=(t,e)=>{let n=Ff(t.inputs,e),[i,r,s]=Gf(t,n);return Hs(t,i,r,s,t.inputs[4],void 0,void 0,void 0,t.inputs[5],n)}}),Wf,qf,Xf,s0,XM=ge(()=>{In(),Ke(),et(),Ot(),nt(),Wf=(t,e)=>{if(!t||t.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(i,r,s)=>{let a=r.length;if(a!==i.length)throw new Error(`${s}: num dimensions != ${a}`);r.forEach((o,l)=>{if(o!==i[l])throw new Error(`${s}: dim[${l}] do not match`)})};if(t[0].dims.length>1){let i=e.format==="NHWC"?e.spatial?t[0].dims.slice(-1):t[0].dims.slice(-1).concat(t[0].dims.slice(1,t[0].dims.length-1)):t[0].dims.slice(1,e.spatial?2:void 0);n(t[1].dims,i,"Invalid input scale"),n(t[2].dims,i,"Invalid input B"),n(t[3].dims,i,"Invalid input mean"),n(t[4].dims,i,"Invalid input var")}else n(t[1].dims,[1],"Invalid input scale"),n(t[2].dims,[1],"Invalid input B"),n(t[3].dims,[1],"Invalid input mean"),n(t[4].dims,[1],"Invalid input var")},qf=(t,e)=>{let{epsilon:n,spatial:i,format:r}=e,s=t[0].dims,a=i?Ut(s[s.length-1]):1,o=r==="NHWC"&&s.length>1?a:1,l=ne.size(s)/a,u=i,d=u?s.length:s,h=oe("x",t[0].dataType,t[0].dims,a),f=oe("scale",t[1].dataType,t[1].dims,o),m=oe("bias",t[2].dataType,t[2].dims,o),_=oe("inputMean",t[3].dataType,t[3].dims,o),y=oe("inputVar",t[4].dataType,t[4].dims,o),v=$e("y",t[0].dataType,d,a),p=()=>{let E="";if(i)E=`let cOffset = ${s.length===1?"0u":r==="NHWC"?`outputIndices[${s.length-1}] / ${a}`:"outputIndices[1]"};`;else if(r==="NCHW")E=`
            ${v.indicesSet("outputIndices","0","0")}
            let cOffset = ${v.indicesToOffset("outputIndices")};`;else{E=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let w=1;w<f.rank;w++)E+=`cIndices[${w}] = outputIndices[${w}];`;E+=`let cOffset = ${f.indicesToOffset("cIndices")};`}return E},b=E=>`
  const epsilon = ${n};
  ${E.registerUniform("outputSize","u32").declareVariables(h,f,m,_,y,v)}
  ${E.mainStart()}
  ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${v.offsetToIndices(`global_idx * ${a}`)};
    ${p()}
    let scale = ${f.getByOffset("cOffset")};
    let bias = ${m.getByOffset("cOffset")};
    let inputMean = ${_.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${h.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${v.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${e.epsilon}_${e.format}_${i}_${a}`,inputDependencies:u?["rank","type","type","type","type"]:void 0},getShaderSource:b,getRunData:()=>({outputs:[{dims:t[0].dims,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u?[{type:12,data:l},...ze(s)]:[{type:12,data:l}]})}},Xf=t=>xt(t),s0=(t,e)=>{let{inputs:n,outputCount:i}=t,r=Xf({...e,outputCount:i});if(Rt.webgpu.validateInputContent&&Wf(n,r),e.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");t.compute(qf(n,r))}}),jf,Kf,a0,jM=ge(()=>{et(),nt(),jf=t=>{if(t[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(t[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(t[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(t[0].dims[2]!==t[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Kf=t=>{let e=t[0].dims,n=t[0].dims[2],i=ne.size(e)/4,r=t[0].dataType,s=oe("input",r,e,4),a=oe("bias",r,[n],4),o=oe("residual",r,e,4),l=$e("output",r,e,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:e,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:u=>`
  const channels = ${n}u / 4;
  ${u.declareVariables(s,a,o,l)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${s.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},a0=t=>{jf(t.inputs),t.compute(Kf(t.inputs))}}),Yf,_t,o0,l0,u0,c0,d0,h0,f0,p0,m0,Zf,g0,_0,v0,y0,Is,x0,Xa,b0,w0,S0,E0,T0,M0,A0,C0,R0,I0,P0,D0,$0,L0,N0,U0,Tl,O0,Yu,Zu,z0,k0,F0,Jf,Qf,B0,kc=ge(()=>{Ke(),et(),Ot(),nt(),Yf=(t,e,n,i,r,s,a)=>{let o=Math.ceil(e/4),l="";typeof r=="string"?l=`${r}(a)`:l=r("a");let u=oe("inputData",n,[o],4),d=$e("outputData",i,[o],4),h=[{name:"vec_size",type:"u32"}];return a&&h.push(...a),`
      ${t.registerUniforms(h).declareVariables(u,d)}

  ${s??""}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${u.getByOffset("global_idx")};
    ${d.setByOffset("global_idx",l)}
  }`},_t=(t,e,n,i,r,s=t.dataType,a,o)=>{let l=[{type:12,data:Math.ceil(ne.size(t.dims)/4)}];return a&&l.push(...a),{name:e,shaderCache:{hint:r,inputDependencies:["type"]},getShaderSource:u=>Yf(u,ne.size(t.dims),t.dataType,s,n,i,o),getRunData:u=>({outputs:[{dims:t.dims,dataType:s}],dispatchGroup:{x:Math.ceil(ne.size(u[0].dims)/64/4)},programUniforms:l})}},o0=t=>{t.compute(_t(t.inputs[0],"Abs","abs"))},l0=t=>{t.compute(_t(t.inputs[0],"Acos","acos"))},u0=t=>{t.compute(_t(t.inputs[0],"Acosh","acosh"))},c0=t=>{t.compute(_t(t.inputs[0],"Asin","asin"))},d0=t=>{t.compute(_t(t.inputs[0],"Asinh","asinh"))},h0=t=>{t.compute(_t(t.inputs[0],"Atan","atan"))},f0=t=>{t.compute(_t(t.inputs[0],"Atanh","atanh"))},p0=t=>xt(t),m0=(t,e)=>{let n;switch(e.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${e.to}`)}t.compute(_t(t.inputs[0],"Cast",n,void 0,e.cacheKey,e.to))},Zf=t=>{let e,n,i=t.length>=2&&t[1].data!==0,r=t.length>=3&&t[2].data!==0;switch(t[0].dataType){case 1:e=i?t[1].getFloat32Array()[0]:-34028234663852886e22,n=r?t[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:e=i?t[1].getUint16Array()[0]:64511,n=r?t[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return xt({min:e,max:n})},g0=(t,e)=>{let n=e||Zf(t.inputs),i=rn(t.inputs[0].dataType);t.compute(_t(t.inputs[0],"Clip",r=>`clamp(${r}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:t.inputs[0].dataType,data:n.min},{type:t.inputs[0].dataType,data:n.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},_0=t=>{t.compute(_t(t.inputs[0],"Ceil","ceil"))},v0=t=>{t.compute(_t(t.inputs[0],"Cos","cos"))},y0=t=>{t.compute(_t(t.inputs[0],"Cosh","cosh"))},Is=t=>xt(t),x0=(t,e)=>{let n=rn(t.inputs[0].dataType);t.compute(_t(t.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${n}(${e.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,e.cacheKey))},Xa=(t="f32")=>`
const r0: ${t} = 0.3275911;
const r1: ${t} = 0.254829592;
const r2: ${t} = -0.284496736;
const r3: ${t} = 1.421413741;
const r4: ${t} = -1.453152027;
const r5: ${t} = 1.061405429;

fn erf_vf32(v: vec4<${t}>) -> vec4<${t}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,b0=t=>{let e=rn(t.inputs[0].dataType);t.compute(_t(t.inputs[0],"Erf",n=>`erf_vf32(${n})`,Xa(e)))},w0=t=>{t.compute(_t(t.inputs[0],"Exp","exp"))},S0=t=>{t.compute(_t(t.inputs[0],"Floor","floor"))},E0=t=>{let e=rn(t.inputs[0].dataType);t.compute(_t(t.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,Xa(e)))},T0=(t,e)=>{let n=rn(t.inputs[0].dataType);t.compute(_t(t.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${e.alpha});`,e.cacheKey))},M0=t=>{t.compute(_t(t.inputs[0],"Not",e=>`!${e}`))},A0=t=>{t.compute(_t(t.inputs[0],"Neg",e=>`-${e}`))},C0=t=>{t.compute(_t(t.inputs[0],"Reciprocal",e=>`1.0/${e}`))},R0=t=>{let e=rn(t.inputs[0].dataType);t.compute(_t(t.inputs[0],"Relu",n=>`select(vec4<${e}>(0.0), ${n}, ${n} > vec4<${e}>(0.0))`))},I0=t=>{t.compute(_t(t.inputs[0],"Sigmoid",e=>`(1.0 / (1.0 + exp(-${e})))`))},P0=t=>xt(t),D0=(t,e)=>{let n=rn(t.inputs[0].dataType);t.compute(_t(t.inputs[0],"HardSigmoid",i=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${e.alpha} * ${i} + vec4<${n}>(${e.beta})))`,void 0,e.cacheKey))},$0=t=>{t.compute(_t(t.inputs[0],"Sin","sin"))},L0=t=>{t.compute(_t(t.inputs[0],"Sinh","sinh"))},N0=t=>{t.compute(_t(t.inputs[0],"Sqrt","sqrt"))},U0=t=>{t.compute(_t(t.inputs[0],"Tan","tan"))},Tl=t=>`sign(${t}) * (1 - exp(-2 * abs(${t}))) / (1 + exp(-2 * abs(${t})))`,O0=t=>{t.compute(_t(t.inputs[0],"Tanh",Tl))},Yu=(t="f32")=>`
const fast_gelu_a: ${t} = 0.5;
const fast_gelu_b: ${t} = 0.7978845608028654;
const fast_gelu_c: ${t} = 0.035677408136300125;

fn tanh_v(v: vec4<${t}>) -> vec4<${t}> {
  return ${Tl("v")};
}
`,Zu=t=>`(fast_gelu_a + fast_gelu_a * tanh_v(${t} * (fast_gelu_c * ${t} * ${t} + fast_gelu_b))) * ${t}`,z0=t=>{let e=rn(t.inputs[0].dataType);t.compute(_t(t.inputs[0],"FastGelu",Zu,Yu(e),void 0,t.inputs[0].dataType))},k0=(t,e)=>{let n=rn(t.inputs[0].dataType);return t.compute(_t(t.inputs[0],"ThresholdedRelu",i=>`select(vec4<${n}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${e.alpha});`,e.cacheKey)),0},F0=t=>{t.compute(_t(t.inputs[0],"Log","log"))},Jf=(t,e)=>`
const alpha = vec4<${t}>(${e});
const one = ${t}(1.0);
const zero = ${t}(0.0);

fn quick_gelu_impl(x: vec4<${t}>) -> vec4<${t}> {
  let v = x *alpha;
  var x1 : vec4<${t}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Qf=t=>`quick_gelu_impl(${t})`,B0=(t,e)=>{let n=rn(t.inputs[0].dataType);t.compute(_t(t.inputs[0],"QuickGelu",Qf,Jf(n,e.alpha),e.cacheKey,t.inputs[0].dataType))}}),ep,tp,H0,KM=ge(()=>{et(),nt(),kc(),ep=t=>{if(t[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(t[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(t[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(t[0].dims[2]!==t[1].dims[0])throw new Error("last dimension of input and bias are not the same")},tp=t=>{let e=t[0].dims.slice();e[2]=e[2]/2;let n=oe("input",t[0].dataType,t[0].dims,4),i=oe("bias",t[0].dataType,[t[0].dims[2]],4),r=$e("output",t[0].dataType,e,4),s=ne.size(e)/4,a=jt(t[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:e,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${t[0].dims[2]/4/2}u;

  ${o.declareVariables(n,i,r)}

  ${Xa(a)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${r.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},H0=t=>{ep(t.inputs),t.compute(tp(t.inputs))}}),np,ip,Fn,V0,G0,W0,q0,X0,j0,K0,Y0,Z0,J0,YM=ge(()=>{Ke(),et(),nt(),np=(t,e,n,i,r,s,a,o,l,u,d,h)=>{let f,m;typeof o=="string"?f=m=(b,E)=>`${o}((${b}),(${E}))`:typeof o=="function"?f=m=o:(f=o.scalar,m=o.vector);let _=$e("outputData",d,i.length,4),y=oe("aData",l,e.length,4),v=oe("bData",u,n.length,4),p;if(r)if(s){let b=ne.size(e)===1,E=ne.size(n)===1,w=e.length>0&&e[e.length-1]%4===0,T=n.length>0&&n[n.length-1]%4===0;b||E?p=_.setByOffset("global_idx",m(b?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),E?`${v.type.value}(${v.getByOffset("0")}.x)`:v.getByOffset("global_idx"))):p=`
            let outputIndices = ${_.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",_)};
            let offsetB = ${v.broadcastedIndicesToOffset("outputIndices",_)};
            ${_.setByOffset("global_idx",m(a||w?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||T?v.getByOffset("offsetB / 4u"):`${v.type.value}(${v.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else p=_.setByOffset("global_idx",m(y.getByOffset("global_idx"),v.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let b=(E,w,T="")=>{let R=`aData[indexA${w}][componentA${w}]`,P=`bData[indexB${w}][componentB${w}]`;return`
            let outputIndices${w} = ${_.offsetToIndices(`global_idx * 4u + ${w}u`)};
            let offsetA${w} = ${y.broadcastedIndicesToOffset(`outputIndices${w}`,_)};
            let offsetB${w} = ${v.broadcastedIndicesToOffset(`outputIndices${w}`,_)};
            let indexA${w} = offsetA${w} / 4u;
            let indexB${w} = offsetB${w} / 4u;
            let componentA${w} = offsetA${w} % 4u;
            let componentB${w} = offsetB${w} % 4u;
            ${E}[${w}] = ${T}(${f(R,P)});
          `};d===9?p=`
            var data = vec4<u32>(0);
            ${b("data",0,"u32")}
            ${b("data",1,"u32")}
            ${b("data",2,"u32")}
            ${b("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:p=`
            ${b("outputData[global_idx]",0)}
            ${b("outputData[global_idx]",1)}
            ${b("outputData[global_idx]",2)}
            ${b("outputData[global_idx]",3)}
          `}return`
        ${t.registerUniform("vec_size","u32").declareVariables(y,v,_)}

        ${h??""}

        ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${p}
      }`},ip=(t,e,n,i,r,s,a=n.dataType)=>{let o=n.dims.map(y=>Number(y)??1),l=i.dims.map(y=>Number(y)??1),u=!ne.areEqual(o,l),d=o,h=ne.size(o),f=!1,m=!1,_=[u];if(u){let y=Yr.calcShape(o,l,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");d=y.slice(),h=ne.size(d);let v=ne.size(o)===1,p=ne.size(l)===1,b=o.length>0&&o[o.length-1]%4===0,E=l.length>0&&l[l.length-1]%4===0;_.push(v),_.push(p),_.push(b),_.push(E);let w=1;for(let T=1;T<d.length;T++){let R=o[o.length-T],P=l[l.length-T];if(R===P)w*=R;else break}w%4===0?(m=!0,f=!0):(v||p||b||E)&&(f=!0)}else f=!0;return _.push(f),{name:t,shaderCache:{hint:e+_.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>np(y,o,l,d,f,u,m,r,n.dataType,i.dataType,a,s),getRunData:()=>({outputs:[{dims:d,dataType:a}],dispatchGroup:{x:Math.ceil(h/64/4)},programUniforms:[{type:12,data:Math.ceil(ne.size(d)/4)},...ze(o,l,d)]})}},Fn=(t,e,n,i,r,s)=>{t.compute(ip(e,r??"",t.inputs[0],t.inputs[1],n,i,s))},V0=t=>{Fn(t,"Add",(e,n)=>`${e}+${n}`)},G0=t=>{Fn(t,"Div",(e,n)=>`${e}/${n}`)},W0=t=>{Fn(t,"Equal",{scalar:(e,n)=>`u32(${e}==${n})`,vector:(e,n)=>`vec4<u32>(${e}==${n})`},void 0,void 0,9)},q0=t=>{Fn(t,"Mul",(e,n)=>`${e}*${n}`)},X0=t=>{let e=oe("input",t.inputs[0].dataType,t.inputs[0].dims).type.value;Fn(t,"Pow",{scalar:(n,i)=>`pow_custom(${n},${i})`,vector:(n,i)=>`pow_vector_custom(${n},${i})`},`
    fn pow_custom(a : ${e}, b : ${e}) -> ${e} {
      if (b == ${e}(0.0)) {
        return ${e}(1.0);
      } else if (a < ${e}(0.0) && f32(b) != floor(f32(b))) {
        return ${e}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${e}(1.0), round(f32(abs(b) % ${e}(2.0))) != 1.0) * ${e}(${e==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${e}>, b : vec4<${e}>) -> vec4<${e}> {
      // TODO: implement vectorized pow
      return vec4<${e}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},j0=t=>{Fn(t,"Sub",(e,n)=>`${e}-${n}`)},K0=t=>{Fn(t,"Greater",{scalar:(e,n)=>`u32(${e}>${n})`,vector:(e,n)=>`vec4<u32>(${e}>${n})`},void 0,void 0,9)},Y0=t=>{Fn(t,"Less",{scalar:(e,n)=>`u32(${e}<${n})`,vector:(e,n)=>`vec4<u32>(${e}<${n})`},void 0,void 0,9)},Z0=t=>{Fn(t,"GreaterOrEqual",{scalar:(e,n)=>`u32(${e}>=${n})`,vector:(e,n)=>`vec4<u32>(${e}>=${n})`},void 0,void 0,9)},J0=t=>{Fn(t,"LessOrEqual",{scalar:(e,n)=>`u32(${e}<=${n})`,vector:(e,n)=>`vec4<u32>(${e}<=${n})`},void 0,void 0,9)}}),rp,sp,ap,op,Q0,ev,ZM=ge(()=>{Ke(),et(),Ot(),nt(),rp=(t,e)=>{if(!t||t.length<1)throw new Error("too few inputs");let n=0,i=t[n],r=i.dataType,s=i.dims.length;t.forEach((a,o)=>{if(o!==n){if(a.dataType!==r)throw new Error("input tensors should be one type");if(a.dims.length!==s)throw new Error("input tensors should have the same shape");a.dims.forEach((l,u)=>{if(u!==e&&l!==i.dims[u])throw new Error("non concat dimensions must match")})}})},sp=(t,e)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${t}u>(${e});
    for (var i: u32 = 0u; i < ${t}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${t}u;
  }`,ap=(t,e)=>{let n=t.length,i=[];for(let r=0;r<n;++r){let s=e.setByOffset("global_idx",t[r].getByIndices("indices"));n===1?i.push(s):r===0?i.push(`if (inputIndex == ${r}u) { ${s} }`):r===n-1?i.push(`else { ${s} }`):i.push(`else if (inputIndex == ${r}) { ${s} }`)}return i.join(`
`)},op=(t,e,n,i)=>{let r=ne.size(n),s=new Array(t.length),a=new Array(t.length),o=0,l=[],u=[],d=[{type:12,data:r}];for(let y=0;y<t.length;++y)o+=t[y].dims[e],s[y]=o,u.push(t[y].dims.length),a[y]=oe(`input${y}`,i,u[y]),l.push("rank"),d.push({type:12,data:s[y]});for(let y=0;y<t.length;++y)d.push(...ze(t[y].dims));d.push(...ze(n));let h=$e("output",i,n.length),f=h.indicesGet("indices",e),m=Array.from(Array(s.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),_=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let v=0;v<t.length;v++)y.registerUniform(`sizeInConcatAxis${v}`,"u32");return y.declareVariables(...a,h)})()}

  ${sp(s.length,m)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${h.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${f});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${m});
      ${f} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${ap(a,h)}
  }`;return{name:"Concat",shaderCache:{hint:`${e}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:n,dataType:i}],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:d}),getShaderSource:_}},Q0=(t,e)=>{let n=t.inputs,i=n[0].dims,r=ne.normalizeAxis(e.axis,i.length);rp(n,r);let s=i.slice();s[r]=n.reduce((o,l)=>o+(l.dims.length>r?l.dims[r]:0),0);let a=n.filter(o=>ne.size(o.dims)>0);t.compute(op(a,r,s,n[0].dataType),{inputs:a})},ev=t=>xt({axis:t.axis})}),hr,fr,pr,Fc,_r=ge(()=>{Ke(),et(),hr=(t,e,n="f32")=>{switch(t.activation){case"Relu":return`value = max(value, ${e}(0.0));`;case"Sigmoid":return`value = (${e}(1.0) / (${e}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${e}(${n}(uniforms.clip_min)), ${e}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${e}(0.0), min(${e}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${e}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${t.activation}`)}},fr=(t,e)=>{t.activation==="Clip"?e.push({type:1,data:t.clipMax},{type:1,data:t.clipMin}):t.activation==="HardSigmoid"?e.push({type:1,data:t.alpha},{type:1,data:t.beta}):t.activation==="LeakyRelu"&&e.push({type:1,data:t.alpha})},pr=(t,e)=>{t.activation==="Clip"?e.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):t.activation==="HardSigmoid"?e.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):t.activation==="LeakyRelu"&&e.push({name:"alpha",type:"f32"})},Fc=t=>{let e=t?.activation||"";if(e==="HardSigmoid"){let[n,i]=t?.activation_params||[.2,.5];return{activation:e,alpha:n,beta:i}}else if(e==="Clip"){let[n,i]=t?.activation_params||[M_,A_];return{activation:e,clipMax:i,clipMin:n}}else if(e==="LeakyRelu"){let[n]=t?.activation_params||[.01];return{activation:e,alpha:n}}return{activation:e}}}),Qt,tv,Bc=ge(()=>{Qt=(t,e)=>{switch(t){case 1:return e;case 2:return`vec2<${e}>`;case 3:return`vec3<${e}>`;case 4:return`vec4<${e}>`;default:throw new Error(`${t}-component is not supported.`)}},tv=t=>`
      ${t?"value = value + getBiasByOutputCoords(coords);":""}
      `}),nv,JM=ge(()=>{nv=t=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${t}.x), i32(${t}.y), i32(${t}.z), 1));
}
`}),Ls,Hc,Vc=ge(()=>{Ke(),et(),nt(),_r(),Ls=(t,e,n,i,r)=>{let s=i-n;return`
      ${Array.from({length:n}).map((a,o)=>`
      if (${Ne(e.shape,o,e.rank)} != 1) {
        ${e.indicesSet(t,o,Ne(r,o+s,i))}
      } else {
        ${e.indicesSet(t,o,0)}
      }`).join("")}
`},Hc=(t,e,n,i,r=!1,s)=>{let a=t[0].dims,o=t[1].dims,l=a[a.length-2],u=o[o.length-1],d=a[a.length-1],h=Ut(u),f=Ut(d),m=Ut(l),_=ne.size(n)/h/m,y=t.length>2,v=i?i.slice(0,-2):n.slice(0,-2),p=[ne.size(v),l,u],b=[{type:12,data:_},{type:12,data:l},{type:12,data:u},{type:12,data:d}];fr(e,b),b.push(...ze(v,a,o)),y&&b.push(...ze(t[2].dims)),b.push(...ze(p));let E=w=>{let T=Uc("batch_dims",t[0].dataType,v.length),R=oe("a",t[0].dataType,a.length,f),P=oe("b",t[1].dataType,o.length,h),$=$e("output",t[0].dataType,p.length,h),A=jt($.type.tensor),C=hr(e,$.type.value,A),U=[R,P],z="";if(y){let K=r?h:1;U.push(oe("bias",t[2].dataType,t[2].dims.length,K)),z=`${r?`value += bias[col / ${K}];`:`value += ${$.type.value}(bias[row + i]);`}`}let V=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];pr(e,V);let k=()=>{let K=`var a_data: ${R.type.value};`;for(let G=0;G<f;G++)K+=`
              let b_data${G} = b[(b_offset + (k + ${G}) * uniforms.N + col) / ${h}];`;for(let G=0;G<m;G++){K+=`a_data = a[(a_offset + (row + ${G}) * uniforms.K + k) / ${f}];`;for(let Z=0;Z<f;Z++)K+=`
            values[${G}] = fma(${P.type.value}(a_data${f===1?"":`[${Z}]`}), b_data${Z}, values[${G}]);
`}return K};return`
  ${w.registerUniforms(V).registerInternalVariables(T).declareVariables(...U,$)}
  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${h})) * ${h};
    var index1 = global_idx / (uniforms.N / ${h});
    let stride1 = uniforms.M / ${m};
    let row = (index1 % stride1) * ${m};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${T.offsetToIndices("batch")};`}

    var a_indices: ${R.type.indices};
    ${Ls("a_indices",R,R.rank-2,T.rank,"batch_indices")}
    ${R.indicesSet("a_indices",R.rank-2,0)}
    ${R.indicesSet("a_indices",R.rank-1,0)}
    let a_offset = ${R.indicesToOffset("a_indices")};

    var b_indices: ${P.type.indices};
    ${Ls("b_indices",P,P.rank-2,T.rank,"batch_indices")}
    ${P.indicesSet("b_indices",P.rank-2,0)}
    ${P.indicesSet("b_indices",P.rank-1,0)}
    let b_offset = ${P.indicesToOffset("b_indices")};
    var values: array<${$.type.value}, ${m}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${k()}
    }
    for (var i = 0u; i < ${m}u; i++) {
      var value = values[i];
      ${z}
      ${C}
      let cur_indices = ${$.type.indices}(batch, row + i, col);
      let offset = ${$.indicesToOffset("cur_indices")};
      ${$.setByOffset(`offset / ${h}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${e.activation};${h};${f};${m};${r}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(n):n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:b}),getShaderSource:E}}}),lp,up,Ju,Ml,cp,Qu,dp,ro,Gc=ge(()=>{Ke(),et(),nt(),_r(),Vc(),Bc(),lp=(t,e)=>t?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${e?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${e?", batchIndices":""});
        `,up=(t,e)=>t?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${e===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${e===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${e===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Ju=(t,e,n="f32",i,r=!1,s=32,a=!1,o=32)=>{let l=e[1]*t[1],u=e[0]*t[0],d=r?l:s,h=r?s:l,f=d/e[0],m=s/e[1];if(!((r&&f===4&&t[1]===4||!r&&(f===3||f===4))&&d%e[0]===0&&s%e[1]===0&&t[0]===4))throw new Error(`If transposeA ${r} is true, innerElementSize ${f} and workPerThread[1] ${t[1]} must be 4.
      Otherwise, innerElementSize ${f} must be 3 or 4.
  tileAWidth ${d} must be divisible by workgroupSize[0]${e[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${e[1]}. colPerThread ${t[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${f}<${n}>, ${d/f}>, ${h}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${u/t[0]}>, ${s}>;

const rowPerThread = ${t[1]};
const colPerThread = ${t[0]};
const innerElementSize = ${f};
const tileInner = ${s};

@compute @workgroup_size(${e[0]}, ${e[1]}, ${e[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${a?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${a?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${n}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${m};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${lp(r,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${m}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${f===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${up(r,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Ml=(t,e)=>t?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${e?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${e?", batchIndices":""});
            `,cp=t=>t?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Qu=(t,e,n="f32",i,r=!1,s=32,a=!1,o=32,l=!1)=>{let u=t[1]*e[1],d=t[0]*e[0],h=r?u:s,f=r?s:u;if(!(f%e[1]===0&&h%e[0]===0&&s%e[1]===0))throw new Error(`tileAHight ${f} must be divisible by workgroupSize[1]${e[1]}, tileAWidth ${h} must be divisible by workgroupSize[0]${e[0]}, tileInner ${s} must be divisible by workgroupSize[1]${e[1]}`);let m=f/e[1],_=h/e[0],y=s/e[1],v=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${u};
    let globalColStart = i32(workgroupId.x) * ${d};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${e[1]}) {
        for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${e[0]}) {
          ${Ml(r,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${e[1]}) {
            for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${e[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${n}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${e[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${r?`mm_Asub[k][localRow + innerRow * ${e[1]}];`:`mm_Asub[localRow + innerRow * ${e[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${e[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${e[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${u};

let tileRowA = i32(localId.y) * ${m};
let tileColA = i32(localId.x) * ${_};
let tileRowB = i32(localId.y) * ${y};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${m}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${_}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Ml(r,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${n}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${cp(r)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${n}, ${h}>, ${f}>;
  var<workgroup> mm_Bsub : array<array<${n}, ${d}>, ${s}>;
  const rowPerThread = ${t[1]};
  const colPerThread = ${t[0]};
  const tileInner = ${s};

@compute @workgroup_size(${e[0]}, ${e[1]}, ${e[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${a?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${a?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${n}, colPerThread>, rowPerThread>;
    ${v}
  }
`},dp=(t,e,n,i,r=!1)=>{let[s,a,o,l]=i,u=jt(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${Qt(t,u)} {
      var value = ${Qt(t,u)}(0.0);
      let col = colIn * ${t};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${a.type.indices};
        ${Ls("aIndices",a,a.rank-2,s.rank,"batchIndices")}
        ${a.indicesSet("aIndices",a.rank-2,"u32(row)")}
        ${a.indicesSet("aIndices",a.rank-1,"u32(colIn)")}
        value = ${a.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${Qt(t,u)} {
      var value = ${Qt(t,u)}(0.0);
      let col = colIn * ${t};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${Ls("bIndices",o,o.rank-2,s.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Qt(t,u)}) {
      let col = colIn * ${t};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${e?`value = value + ${r?"bias[colIn]":`${Qt(t,u)}(bias[row])`};`:""}
        ${n}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},ro=(t,e,n,i,r=!1,s)=>{let a=t[0].dims,o=t[1].dims,l=a.slice(0,-2),u=o.slice(0,-2),d=i?i.slice(0,-2):n.slice(0,-2),h=ne.size(d),f=a[a.length-2],m=a[a.length-1],_=o[o.length-1],y=m%4===0&&_%4===0,v=f<=8?[4,1,1]:[4,4,1],p=[8,8,1],b=[Math.ceil(_/p[0]/v[0]),Math.ceil(f/p[1]/v[1]),Math.ceil(h/p[2]/v[2])],E=y?4:1,w=[...l,f,m/E],T=w.length,R=[...u,m,_/E],P=R.length,$=[h,f,_/E],A=[{type:6,data:f},{type:6,data:_},{type:6,data:m}];fr(e,A),A.push(...ze(d,w,R));let C=["rank","rank"],U=t.length>2;U&&(A.push(...ze(t[2].dims)),C.push("rank")),A.push(...ze($));let z=V=>{let k=d.length,K=Uc("batchDims",t[0].dataType,k,1),G=jt(t[0].dataType),Z=oe("a",t[0].dataType,T,E),X=oe("b",t[1].dataType,P,E),te=$e("result",t[0].dataType,$.length,E),_e=[Z,X];if(U){let J=r?E:1;_e.push(oe("bias",t[2].dataType,t[2].dims.length,J))}let j=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];pr(e,j);let le=jt(te.type.tensor),Ee=hr(e,te.type.value,le),He=dp(E,U,Ee,[K,Z,X,te],r);return`
  ${V.registerUniforms(j).registerInternalVariables(K).declareVariables(..._e,te)}
  ${He}
  ${y?Ju(v,p,G,K):Qu(v,p,G,K)}
                   `};return{name:"MatMul",shaderCache:{hint:`${v};${e.activation};${y};${r}`,inputDependencies:C},getRunData:()=>({outputs:[{dims:s?s(n):n,dataType:t[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:A}),getShaderSource:z}}}),hp,iv,QM=ge(()=>{Ke(),vi(),nt(),_r(),Bc(),JM(),Gc(),hp=(t,e,n,i,r=!1,s,a=4,o=4,l=4,u="f32")=>{let d=A=>{switch(A){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${u}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${A} is not supported.`)}},h=A=>{switch(A){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${A} is not supported.`)}},f=t?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,m=t?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,_=t?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",y=t?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",v=t?"row":"col",p=t?"col":"row",b=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${t?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${v} / outWidth;
    let outCol = ${v} % outWidth;

    let WRow = ${p} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${p} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${p} % inChannels;
    var resData = ${Qt(a,u)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${_} && xCol >= 0 && xCol < ${y}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${d(a)}
    }
    return resData;`,E=t?e&&i?`
    let col = colIn * ${a};
    ${b}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${b}
    }
    return ${Qt(a,u)}(0.0);`:i&&n?`
    let col = colIn * ${a};
    ${b}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${b}
    }
    return ${Qt(a,u)}(0.0);`,w=t?i&&n?h(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${h(o)}
    }
    return ${Qt(o,u)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${h(o)}
    }
    return ${Qt(o,u)}(0.0);`,T=Qt(l,u),R=Qt(t?a:o,u),P=Qt(t?o:a,u),$=hr(s,T,u);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${R} {
      ${t?E:w}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${P} {
      ${t?w:E}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${T}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${t?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${m}
      ${tv(r)}
      ${$}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},iv=(t,e,n,i,r,s,a,o,l)=>{let u=e.format==="NHWC",d=u?t[0].dims[3]:t[0].dims[1],h=n[0],f=u?n[2]:n[3],m=u?n[1]:n[2],_=u?n[3]:n[1],y=u&&(d%4===0||d%3===0)&&_%4===0,v=u?_:f*m,p=u?f*m:_,b=[8,8,1],E=i<=8?[4,1,1]:[4,4,1],w=[Math.ceil(v/b[0]/E[0]),Math.ceil(p/b[1]/E[1]),Math.ceil(h/b[2]/E[2])];ft("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${w}`);let T=y?u&&d%4!==0?3:4:1,R=b[1]*E[1],P=b[0]*E[0],$=Math.max(b[0]*T,b[1]),A=i%R===0,C=r%P===0,U=s%$===0,z=y?[T,4,4]:[1,1,1],V=[{type:6,data:i},{type:6,data:r},{type:6,data:s},{type:6,data:[e.pads[0],e.pads[1]]},{type:6,data:e.strides},{type:6,data:e.dilations}];fr(e,V),V.push(...ze(t[0].dims,t[1].dims));let k=["rank","rank"];a&&(V.push(...ze(t[2].dims)),k.push("rank")),V.push(...ze(n));let K=G=>{let Z=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];pr(e,Z);let X=y?4:1,te=jt(t[0].dataType),_e=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${te}>`:te}) {
        result[flatIndex] = ${y?`vec4<${te}>`:te}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${te}>`:te}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,j=oe("x",t[0].dataType,t[0].dims.length,T===3?1:T),le=oe("w",t[1].dataType,t[1].dims.length,X),Ee=[j,le],He=$e("result",t[0].dataType,n.length,X);if(a){let J=oe("bias",t[2].dataType,t[2].dims.length,X);Ee.push(J),_e+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${te}>`:te} {
          return bias[coords.${u?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${nv("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${G.registerUniforms(Z).declareVariables(...Ee,He)}
        ${_e}
        ${hp(u,A,C,U,a,e,z[0],z[1],z[2],te)}
        ${y?Ju(E,b,te,void 0,!u,$):Qu(E,b,te,void 0,!u,$,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${e.cacheKey};${T};${y};${A};${C};${U};${R};${P};${$}`,inputDependencies:k},getRunData:()=>({outputs:[{dims:l?l(n):n,dataType:t[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:V}),getShaderSource:K}}}),fp,Al,bs,pp,Cl,mp,rv,sv,e2=ge(()=>{Ke(),vi(),et(),nt(),_r(),Bc(),fp=t=>{let e=1;for(let n=0;n<t.length;n++)e*=t[n];return e},Al=t=>typeof t=="number"?[t,t,t]:t,bs=(t,e)=>e<=1?t:t+(t-1)*(e-1),pp=(t,e,n,i=1)=>{let r=bs(e,i);return Math.floor((t[0]*(n-1)-n+r)/2)},Cl=(t,e,n,i,r)=>{r==null&&(r=pp(t,e[0],i[0]));let s=[0,0,0,n];for(let a=0;a<3;a++)t[a]+2*r>=e[a]&&(s[a]=Math.trunc((t[a]-e[a]+2*r)/i[a]+1));return s},mp=(t,e,n,i,r,s,a,o,l,u)=>{let d,h,f,m;if(t==="VALID"&&(t=0),typeof t=="number"){d={top:t,bottom:t,left:t,right:t,front:t,back:t};let _=Cl([e,n,i,1],[o,l,u],1,[r,s,a],t);h=_[0],f=_[1],m=_[2]}else if(Array.isArray(t)){if(!t.every((y,v,p)=>y===p[0]))throw Error(`Unsupported padding parameter: ${t}`);d={top:t[0],bottom:t[1],left:t[2],right:t[3],front:t[4],back:t[5]};let _=Cl([e,n,i,1],[o,l,u],1,[r,s,a],t[0]);h=_[0],f=_[1],m=_[2]}else if(t==="SAME_UPPER"){h=Math.ceil(e/r),f=Math.ceil(n/s),m=Math.ceil(i/a);let _=(h-1)*r+o-e,y=(f-1)*s+l-n,v=(m-1)*a+u-i,p=Math.floor(_/2),b=_-p,E=Math.floor(y/2),w=y-E,T=Math.floor(v/2),R=v-T;d={top:E,bottom:w,left:T,right:R,front:p,back:b}}else throw Error(`Unknown padding parameter: ${t}`);return{padInfo:d,outDepth:h,outHeight:f,outWidth:m}},rv=(t,e,n,i,r,s=!1,a="channelsLast")=>{let o,l,u,d,h;if(a==="channelsLast")[o,l,u,d,h]=t;else if(a==="channelsFirst")[o,h,l,u,d]=t;else throw new Error(`Unknown dataFormat ${a}`);let[f,,m,_,y]=e,[v,p,b]=Al(n),[E,w,T]=Al(i),R=bs(m,E),P=bs(_,w),$=bs(y,T),{padInfo:A,outDepth:C,outHeight:U,outWidth:z}=mp(r,l,u,d,v,p,b,R,P,$),V=s?f*h:f,k=[0,0,0,0,0];return a==="channelsFirst"?k=[o,V,C,U,z]:a==="channelsLast"&&(k=[o,C,U,z,V]),{batchSize:o,dataFormat:a,inDepth:l,inHeight:u,inWidth:d,inChannels:h,outDepth:C,outHeight:U,outWidth:z,outChannels:V,padInfo:A,strideDepth:v,strideHeight:p,strideWidth:b,filterDepth:m,filterHeight:_,filterWidth:y,effectiveFilterDepth:R,effectiveFilterHeight:P,effectiveFilterWidth:$,dilationDepth:E,dilationHeight:w,dilationWidth:T,inShape:t,outShape:k,filterShape:e}},sv=(t,e,n,i,r,s)=>{let a=s==="channelsLast";a?t[0].dims[3]:t[0].dims[1];let o=[64,1,1],l={x:n.map((v,p)=>p)},u=[Math.ceil(fp(l.x.map(v=>n[v]))/o[0]),1,1];ft("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${u}`);let d=1,h=ne.size(n),f=[{type:12,data:h},{type:12,data:i},{type:12,data:r},{type:12,data:e.strides},{type:12,data:e.dilations}];fr(e,f),f.push(...ze(t[0].dims,t[1].dims));let m=["rank","rank"],_=t.length===3;_&&(f.push(...ze(t[2].dims)),m.push("rank")),f.push(...ze(n));let y=v=>{let p=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:r.length},{name:"strides",type:"u32",length:e.strides.length},{name:"dilations",type:"u32",length:e.dilations.length}];pr(e,p);let b=1,E=jt(t[0].dataType),w=oe("x",t[0].dataType,t[0].dims.length,d),T=oe("W",t[1].dataType,t[1].dims.length,b),R=[w,T],P=$e("result",t[0].dataType,n.length,b),$="";if(_){let U=oe("bias",t[2].dataType,t[2].dims.length,b);R.push(U),$+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${E} {
          return bias[${a?Ne("coords",4,5):Ne("coords",1,5)}];
        }`}let A=Qt(d,E),C=hr(e,A,E);return`
            ${$}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${w.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${T.getByIndices("aIndices")};
            }
          ${v.registerUniforms(p).declareVariables(...R,P)}
          ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${P.offsetToIndices("global_idx")};
              let batch = ${Ne("coords",0,w.rank)};
              let d2 = ${a?Ne("coords",w.rank-1,w.rank):Ne("coords",1,w.rank)};
              let xFRCCorner = vec3<u32>(${a?Ne("coords",1,w.rank):Ne("coords",2,w.rank)},
              ${a?Ne("coords",2,w.rank):Ne("coords",3,w.rank)},
              ${a?Ne("coords",3,w.rank):Ne("coords",4,w.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?Ne("uniforms.x_shape",1,w.rank):Ne("uniforms.x_shape",2,w.rank)};
              let xShapeZ = ${a?Ne("uniforms.x_shape",2,w.rank):Ne("uniforms.x_shape",3,w.rank)};
              let xShapeW = ${a?Ne("uniforms.x_shape",3,w.rank):Ne("uniforms.x_shape",4,w.rank)};
              let xShapeU = ${a?Ne("uniforms.x_shape",4,w.rank):Ne("uniforms.x_shape",1,w.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${a?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${a?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${a?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${a?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${_?"value = value + getBiasByOutputCoords(coords)":""};
              ${C}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${e.cacheKey};${a};${d};${_}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:u[0],y:u[1],z:u[2]},programUniforms:f}),getShaderSource:y}}}),av,ov,t2=ge(()=>{Ke(),et(),nt(),_r(),av=(t,e,n,i)=>{let r=t.length>2,s=r?"value += b[output_channel];":"",a=t[0].dims,o=t[1].dims,l=e.format==="NHWC",u=l?n[3]:n[1],d=u/e.group,h=l&&d>=4?Ut(u):1,f=ne.size(n)/h,m=[{type:12,data:f},{type:12,data:e.dilations},{type:12,data:[e.strides[0],e.strides[1]]},{type:12,data:[e.pads[0],e.pads[1]]},{type:12,data:d}];fr(e,m),m.push(...ze(a,[o[0],o[1],o[2],o[3]/h]));let _=r?["rank","rank","rank"]:["rank","rank"];m.push(...ze([n[0],n[1],n[2],n[3]/h]));let y=v=>{let p=$e("output",t[0].dataType,n.length,h),b=jt(p.type.tensor),E=hr(e,p.type.value,b),w=oe("x",t[0].dataType,a.length),T=oe("w",t[1].dataType,o.length,h),R=[w,T];r&&R.push(oe("b",t[2].dataType,t[2].dims,h));let P=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:e.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];pr(e,P);let $=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${w.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${T.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${w.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${T.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${v.registerUniforms(P).declareVariables(...R,p)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${p.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${h} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${p.type.value} = ${p.type.value}(0);
    ${$}
    ${s}
    ${E}
    ${p.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${e.cacheKey}_${h}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:i?i(n):n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:y}},ov=(t,e,n,i)=>{let r=t.length>2,s=Ut(n[3]),a=Ut(n[2]),o=ne.size(n)/s/a,l=[t[0].dims[0],t[0].dims[1],t[0].dims[2],t[0].dims[3]/s],u=[t[1].dims[0],t[1].dims[1],t[1].dims[2],t[1].dims[3]/s],d=[n[0],n[1],n[2],n[3]/s],h=[{type:12,data:o},{type:6,data:[e.strides[0],e.strides[1]]},{type:6,data:[e.pads[0],e.pads[1]]}];fr(e,h),h.push(...ze(l,u,d));let f=(a-1)*e.strides[1]+u[1],m=_=>{let y=$e("output",t[0].dataType,d.length,s),v=jt(y.type.tensor),p=hr(e,y.type.value,v),b=oe("x",t[0].dataType,l.length,s),E=oe("w",t[1].dataType,u.length,s),w=[b,E];r&&w.push(oe("b",t[2].dataType,t[2].dims,s));let T=r?"value += b[output_channel];":"",R=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return pr(e,R),`
  ${_.registerUniforms(R).declareVariables(...w,y)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${a}u;
    let col = (index1 % width1) * ${a}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${b.type.value}, ${f}>;
    var values: array<${y.type.value}, ${a}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${u[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${f}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${b.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${b.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${u[1]}; w_width++) {
          let w_val = ${E.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${a}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${a}u; i++) {
      var value = values[i];
      ${T}
      ${p}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${e.cacheKey};${s};${a};${f};${u[0]};${u[1]}`,inputDependencies:r?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(n):n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:h}),getShaderSource:m}}}),gp,La,_p,Na,ec,Rl,vp,yp,tc,n2=ge(()=>{et(),QM(),e2(),Gc(),t2(),_r(),Vc(),ki(),gp=(t,e,n,i,r,s)=>{let a=t[0],o=t.slice(s?1:2,s?3:4),l=o.length,u=e[0],d=e.slice(2).map((f,m)=>f+(f-1)*(n[m]-1)),h=o.map((f,m)=>f+i[m]+i[m+l]).map((f,m)=>Math.floor((f-d[m]+r[m])/r[m]));return h.splice(0,0,a),h.splice(s?3:1,0,u),h},La=[2,3,1,0],_p=(t,e)=>{if(!t||t.length!==2&&t.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(t[0].dims.length>5)throw new Error("greater than 5D is not supported");if(t[0].dims.length!==t[1].dims.length)throw new Error("filter does not have same dimension as input");let n=t[0].dims[e.format==="NHWC"?t[0].dims.length-1:1],i=t[1].dims[1]*e.group;if(n!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(t.length===3&&(t[2].dims.length!==1||t[1].dims[0]!==t[2].dims[0]))throw new Error("invalid bias");let r=t[0].dims.length-2;if(e.dilations.length!==r)throw new Error(`dilations should be ${r}D`);if(e.strides.length!==r)throw new Error(`strides should be ${r}D`);if(e.pads.length!==r*2)throw new Error(`pads should be ${r*2}D`);if(e.kernelShape.length!==0&&e.kernelShape.length!==t[1].dims.length-2)throw new Error("invalid kernel shape")},Na=(t,e)=>{let n=t.kernelShape.slice();n.length<e[1].dims.length-2&&n.push(...Array(e[1].dims.length-2-n.length).fill(0));for(let s=2;s<e[1].dims.length;++s)n[s-2]===0&&(n[s-2]=e[1].dims[s]);let i=t.pads.slice();no.adjustPadsBasedOnAutoPad(e[0].dims,t.strides,t.dilations,n,i,t.format==="NHWC",t.autoPad);let r=Object.assign({},t);return Object.assign(r,{kernelShape:n,pads:i}),r},ec=t=>{let e=Fc(t),n=t.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][t.auto_pad],r=t.dilations,s=t.group,a=t.kernel_shape,o=t.pads,l=t.strides,u=t.w_is_const();return{autoPad:i,format:n,dilations:r,group:s,kernelShape:a,pads:o,strides:l,wIsConst:u,...e,cacheKey:`${t.format};${e.activation};`}},Rl=(t,e,n,i)=>{let r=n.format==="NHWC",s=gp(e[0].dims,e[1].dims,n.dilations,n.pads,n.strides,r);if(n.group!==1){let R=[e[0]];if(r){let P=t.kernelCustomData.wT??t.compute(En(e[1],La),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!t.kernelCustomData.wT&&(t.kernelCustomData.wT=P),R.push(P)}else R.push(e[1]);e.length===3&&R.push(e[2]),!t.adapterInfo.isArchitecture("ampere")&&r&&e[1].dims[0]===n.group&&e[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?t.compute(ov(R,n,s,i),{inputs:R}):t.compute(av(R,n,s,i),{inputs:R});return}let a=e.length===3,o=e[0].dims[r?1:2],l=e[0].dims[r?2:3],u=e[0].dims[r?3:1],d=e[1].dims[2],h=e[1].dims[3],f=s[r?1:2],m=s[r?2:3],_=s[r?3:1],y=r&&d===o&&h===l&&n.pads[0]===0&&n.pads[1]===0;if(y||d===1&&h===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let R=s[0],P,$,A,C=[];if(r){let V=t.kernelCustomData.wT??t.compute(En(e[1],La),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!t.kernelCustomData.wT&&(t.kernelCustomData.wT=V),y){let k=o*l*u;P=e[0].reshape([1,R,k]),$=V.reshape([1,k,_]),A=[1,R,_]}else P=e[0].reshape([R,o*l,u]),$=V.reshape([1,u,_]),A=[R,f*m,_];C.push(P),C.push($)}else P=e[0].reshape([R,u,o*l]),$=e[1].reshape([1,_,u]),A=[R,_,f*m],C.push($),C.push(P);a&&C.push(e[2]);let U=A[2],z=C[0].dims[C[0].dims.length-1];U<8&&z<8?t.compute(Hc(C,n,s,A,r,i),{inputs:C}):t.compute(ro(C,n,s,A,r,i),{inputs:C});return}let v=!0,p=t.kernelCustomData.wT??t.compute(En(e[1],La),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!t.kernelCustomData.wT&&(t.kernelCustomData.wT=p);let b=[e[0],p];a&&b.push(e[2]);let E=r?f*m:_,w=r?_:f*m,T=d*h*u;t.compute(iv(b,n,s,E,w,T,a,v,i),{inputs:b})},vp=(t,e)=>{let n=e.format==="NHWC",i=[t.inputs[0].reshape(n?[t.inputs[0].dims[0],1,t.inputs[0].dims[1],t.inputs[0].dims[2]]:[t.inputs[0].dims[0],t.inputs[0].dims[1],1,t.inputs[0].dims[2]]),t.inputs[1].reshape([t.inputs[1].dims[0],t.inputs[1].dims[1],1,t.inputs[1].dims[2]])];t.inputs.length===3&&i.push(t.inputs[2]);let r=[0,e.pads[0],0,e.pads[1]],s=[1].concat(e.strides),a=[1].concat(e.dilations),o=[1].concat(e.kernelShape),l=Na({...e,pads:r,strides:s,dilations:a,kernelShape:o},i);Rl(t,i,l,u=>n?[u[0],u[2],u[3]]:[u[0],u[1],u[3]])},yp=(t,e,n)=>{let i=n.format==="NHWC"?"channelsLast":"channelsFirst",r=Na(n,e),s=n.autoPad==="NOTSET"?n.pads:n.autoPad,a=rv(e[0].dims,e[1].dims,n.strides,n.dilations,s,!1,i);t.compute(sv(e,r,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],i))},tc=(t,e)=>{if(_p(t.inputs,e),t.inputs[0].dims.length===3)vp(t,e);else if(t.inputs[0].dims.length===5)yp(t,t.inputs,e);else{let n=Na(e,t.inputs);Rl(t,t.inputs,n)}}}),lv,i2=ge(()=>{Ke(),vi(),et(),nt(),lv=(t,e,n)=>{let i=t.length>2,r=e.outputShape,s=e.format==="NHWC",a=e.group,o=t[1].dims,l=o[2]/a,u=o[3],d=s?Ut(l):1,h=s&&u===1&&l>=4,f=h?Math.floor(l/4)*4:Math.floor(l/d)*d,m=l-f,_=s?Ut(u):1,y=s?u===1?d:_:1,v=ne.size(r)/_,p=[Math.ceil(v/64),1,1];ft("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${p}`);let b=["rank","rank"],E=[e.strides[0],e.strides[1]],w=[e.kernelShape[s?1:2],e.kernelShape[s?2:3]],T=[e.dilations[0],e.dilations[1]],R=[w[0]+(e.dilations[0]<=1?0:(e.kernelShape[s?1:2]-1)*(e.dilations[0]-1)),w[1]+(e.dilations[1]<=1?0:(e.kernelShape[s?2:3]-1)*(e.dilations[1]-1))],P=[R[0]-1-Math.floor((e.pads[0]+e.pads[2])/2),R[1]-1-Math.floor((e.pads[1]+e.pads[3])/2)],$=[{type:12,data:v},{type:12,data:E},{type:12,data:w},{type:12,data:T},{type:12,data:R},{type:6,data:P},{type:12,data:f},{type:12,data:l},{type:12,data:u},...ze(t[0].dims,t[1].dims)];i&&($.push(...ze(t[2].dims)),b.push("rank")),$.push(...ze(r));let A=C=>{let U=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:E.length},{name:"filter_dims",type:"u32",length:w.length},{name:"dilations",type:"u32",length:w.length},{name:"effective_filter_dims",type:"u32",length:R.length},{name:"pads",type:"i32",length:P.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],z=jt(t[0].dataType),V=s?1:2,k=s?2:3,K=s?3:1,G=oe("W",t[1].dataType,t[1].dims.length,y),Z=oe("Dy",t[0].dataType,t[0].dims.length,d),X=[Z,G];i&&X.push(oe("bias",t[2].dataType,[r[K]].length,_));let te=$e("result",t[0].dataType,r.length,_),_e=()=>{let Ee="";if(h)d===4?Ee+=`
        let xValue = ${Z.getByOffset("x_offset")};
        let wValue = ${G.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:d===2?Ee+=`
          dotProd = dotProd + dot(vec4<${z}>(${Z.getByOffset("x_offset")}, ${Z.getByOffset("x_offset + 1u")}), vec4<${z}>(${G.getByOffset("w_offset")}, ${G.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:d===1&&(Ee+=`
          dotProd = dotProd + dot(vec4<${z}>(${Z.getByOffset("x_offset")}, ${Z.getByOffset("x_offset + 1u")}, ${Z.getByOffset("x_offset + 2u")}, ${Z.getByOffset("x_offset + 3u")}), vec4<${z}>(${G.getByOffset("w_offset")}, ${G.getByOffset("w_offset + 1u")}, ${G.getByOffset("w_offset + 2u")}, ${G.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(Ee+=`
                  let xValue = ${s?Z.getByOffset(`${Z.indicesToOffset(`${Z.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${d}`):Z.get("batch","inputChannel","idyR","idyC")};
        `,d===1)Ee+=`
          let w_offset = ${G.indicesToOffset(`${G.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${G.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let He=0;He<d;He++)Ee+=`
            let wValue${He} = ${G.getByOffset(`${G.indicesToOffset(`${G.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${He}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${He}] * wValue${He};`;return Ee},j=()=>{if(m===0)return"";if(!h)throw new Error(`packInputAs4 ${h} is not true.`);let Ee="";if(d===1){Ee+="dotProd = dotProd";for(let He=0;He<m;He++)Ee+=`
            + ${Z.getByOffset(`x_offset + ${He}`)} * ${G.getByOffset(`w_offset + ${He}`)}`;Ee+=";"}else if(d===2){if(m!==2)throw new Error(`Invalid inputChannelsRemainder ${m}.`);Ee+=`
          let xValue = ${Z.getByOffset("x_offset")};
          let wValue = ${G.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return Ee},le=`
            let outputIndices = ${te.offsetToIndices(`global_idx * ${_}`)};
            let batch = ${te.indicesGet("outputIndices",0)};
            let d1 = ${te.indicesGet("outputIndices",K)};
            let r = ${te.indicesGet("outputIndices",V)};
            let c = ${te.indicesGet("outputIndices",k)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${te.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${z}(dyRCorner) + ${z}(wR)) / ${z}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${z}(uniforms.Dy_shape[${V}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${z}(dyCCorner) + ${z}(wC)) / ${z}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${z}(uniforms.Dy_shape[${k}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${h?`
                var x_offset = ${Z.indicesToOffset(`${Z.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${d};
                var w_offset = ${G.indicesToOffset(`${G.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${h?4:d}) {
                  ${_e()}
                  inputChannel = inputChannel + ${h?4:d};
                }
                ${j()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${_}]`:""};
            ${te.setByOffset("global_idx","value")};
          `;return`
    ${C.registerUniforms(U).declareVariables(...X,te)}
      ${C.mainStart()}
      ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${le}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${e.cacheKey};${d}${y}${_}${h}${m}`,inputDependencies:b},getRunData:()=>({dispatchGroup:{x:p[0],y:p[1],z:p[2]},outputs:[{dims:n?n(r):r,dataType:t[0].dataType}],programUniforms:$}),getShaderSource:A}}}),xp,bp,wp,Il,uv,Sp,Pl,Ep,cv,r2=ge(()=>{i2(),_r(),ki(),xp=(t,e,n,i,r,s)=>(t-1)*e+n+(i-1)*r+1-s,bp=(t,e,n,i,r)=>{let s=Math.floor(t/2);e==="SAME_UPPER"?(n[i]=s,n[r]=t-s):e==="SAME_LOWER"&&(n[i]=t-s,n[r]=s)},wp=(t,e,n,i,r,s,a,o,l,u)=>{let d=t.length-2,h=u.length===0;l.length<d&&l.push(...Array(d-l.length).fill(0));let f=t[0],m=e[o?3:1]*r;for(let _=0,y=t.length-d-(o?1:0);_<d;++_,++y){let v=t[y],p=h?v*a[_]:u[_],b=xp(v,a[_],s[_],e[y],n[_],p);bp(b,i,s,_,_+d),h&&u.push(a[_]*(v-1)+l[_]+(e[y]-1)*n[_]+1-s[_]-s[_+d])}u.splice(0,0,f),u.splice(o?3:1,0,m)},Il=(t,e)=>{let n=t.kernelShape.slice();if(t.kernelShape.length===0||t.kernelShape.reduce((h,f)=>h*f,1)===0){n.length=0;for(let h=2;h<e[1].dims.length;++h)n.push(e[1].dims[h])}let i=t.format==="NHWC";n.splice(0,0,e[1].dims[0]),n.splice(i?3:1,0,e[1].dims[1]);let r=t.pads.slice(),s=t.outputShape.slice(),a=t.outputPadding.slice(),o=e[0].dims,l=t.dilations.slice();if(l.reduce((h,f)=>h+f,0)===0){let h=e[0].dims.length-2;l=new Array(h).fill(1)}let u=t.strides.slice();if(u.reduce((h,f)=>h+f,0)===0){let h=e[0].dims.length-2;u=new Array(h).fill(1)}wp(o,n,l,t.autoPad,t.group,r,u,i,a,s);let d=Object.assign({},t);return Object.assign(d,{kernelShape:n,pads:r,outputPadding:a,outputShape:s,dilations:l,strides:u}),d},uv=t=>{let e=Fc(t),n=t.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof t.autoPad>"u"?0:t.autoPad],r=t.dilations,s=t.group,a=t.kernelShape,o=t.pads,l=t.strides,u=t.wIsConst(),d=t.outputPadding,h=t.outputShape;return{autoPad:i,format:n,dilations:r,group:s,kernelShape:a,outputPadding:d,outputShape:h,pads:o,strides:l,wIsConst:u,...e,cacheKey:`${t.format};${e.activation};`}},Sp=(t,e)=>{if(!t||t.length!==2&&t.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(t[0].dims.length!==4&&t[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(t[0].dims.length!==t[1].dims.length)throw new Error("filter does not have same dimension as input");let n=t[0].dims[e.format==="NHWC"?t[0].dims.length-1:1],i=t[1].dims[0];if(n!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let r=t[1].dims[1]*e.group;if(t.length===3&&(t[2].dims.length!==1||t[2].dims[0]!==r))throw new Error("invalid bias");let s=t[0].dims.length-2;if(e.dilations.reduce((a,o)=>a+o,0)>0&&e.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(e.strides.reduce((a,o)=>a+o,0)>0&&e.strides.length!==s)throw new Error(`strides should be ${s}D`);if(e.pads.reduce((a,o)=>a+o,0)>0&&e.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(e.outputPadding.length!==s&&e.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(e.kernelShape.reduce((a,o)=>a+o,0)>0&&e.kernelShape.length!==0&&e.kernelShape.length!==t[1].dims.length-2)throw new Error("invalid kernel shape");if(e.outputShape.length!==0&&e.outputShape.length!==t[0].dims.length-2)throw new Error("invalid output shape")},Pl=(t,e,n,i)=>{let r=t.kernelCustomData.wT??t.compute(En(e[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!t.kernelCustomData.wT&&(t.kernelCustomData.wT=r);let s=[e[0],r];e.length===3&&s.push(e[2]),t.compute(lv(s,n,i),{inputs:s})},Ep=(t,e)=>{let n=e.format==="NHWC",i=[t.inputs[0].reshape(n?[t.inputs[0].dims[0],1,t.inputs[0].dims[1],t.inputs[0].dims[2]]:[t.inputs[0].dims[0],t.inputs[0].dims[1],1,t.inputs[0].dims[2]]),t.inputs[1].reshape([t.inputs[1].dims[0],t.inputs[1].dims[1],1,t.inputs[1].dims[2]])];t.inputs.length===3&&i.push(t.inputs[2]);let r=e.kernelShape;(r.length===0||r[0]===0)&&(r=[t.inputs[1].dims[2]]);let s=e.dilations;(s.length===0||s[0]===0)&&(s=[1]);let a=e.strides;(a.length===0||a[0]===0)&&(a=[1]);let o=e.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],a=[1].concat(a),s=[1].concat(s),r=[1].concat(r);let l=e.outputPadding;l=[0].concat(l);let u=Il({...e,pads:o,strides:a,dilations:s,kernelShape:r,outputPadding:l},i);Pl(t,i,u,d=>n?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},cv=(t,e)=>{if(Sp(t.inputs,e),t.inputs[0].dims.length===3)Ep(t,e);else{let n=Il(e,t.inputs);Pl(t,t.inputs,n)}}}),Tp,dv,hv,s2=ge(()=>{Ke(),et(),Ot(),nt(),Tp=(t,e,n,i)=>{let r=ne.size(e),s=e.length,a=oe("input",t,s),o=$e("output",t,s),l=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),u=ne.normalizeAxis(l,s),d=h=>{let f=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,m=Ne("uniforms.input_shape","uniforms.axis",s),_=i.reverse?f+(i.exclusive?" + 1":""):"0",y=i.reverse?m:f+(i.exclusive?"":" + 1");return`
                ${h.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(a,o)}
                ${h.mainStart()}
                  ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${_};
                  let last : i32 = ${y};
                  for (var i : i32 = first; i < last; i++) {
                    ${a.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${a.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:e,dataType:t}],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:[{type:12,data:r},{type:12,data:u},...ze(e,e)]}),getShaderSource:d}},dv=(t,e)=>{let n=t.inputs[0].dims,i=t.inputs[0].dataType,r=t.inputs[1];t.compute(Tp(i,n,r,e),{inputs:[0]})},hv=t=>{let e=t.exclusive===1,n=t.reverse===1;return xt({exclusive:e,reverse:n})}}),Mp,Ap,Cp,fv,pv,a2=ge(()=>{Ke(),et(),Ot(),nt(),Mp=t=>{if(!t||t.length!==1)throw new Error("DepthToSpace requires 1 input.");if(t[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Ap=(t,e,n,i)=>{let r=[];r.push(`fn perm(i: ${i.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let s=0;s<e;++s)r.push(n.indicesSet("a",t[s],`i[${s}]`));return r.push("return a;}"),r.join(`
`)},Cp=(t,e)=>{let n,i,r,s,a,o,l=e.format==="NHWC",u=e.blocksize,d=e.mode==="DCR";l?([n,i,r,s]=t.dims,a=d?[n,i,r,u,u,s/u**2]:[n,i,r,s/u**2,u,u],o=d?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,i,r,s]=[t.dims[0],t.dims[2],t.dims[3],t.dims[1]],a=d?[n,u,u,s/u**2,i,r]:[n,s/u**2,u,u,i,r],o=d?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let h=t.reshape(a),f=h.dims.length,m=t.dataType,_=oe("a",m,f),y=$e("output",m,f),v=p=>`
  ${p.registerUniform("output_size","u32").declareVariables(_,y)}

  ${Ap(o,f,_,y)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${t.dims};${e.blocksize};${e.mode}`,inputDependencies:["rank"]},getRunData:p=>{let b=l?[n,i*u,r*u,s/u**2]:[n,s/u**2,i*u,r*u],E=ne.size(b),w=h.dims,T=ne.sortBasedOnPerm(w,o);return{outputs:[{dims:b,dataType:p[0].dataType}],dispatchGroup:{x:Math.ceil(E/64)},programUniforms:[{type:12,data:E},...ze(w,T)]}},getShaderSource:v}},fv=(t,e)=>{Mp(t.inputs),t.compute(Cp(t.inputs[0],e))},pv=t=>xt({blocksize:t.blocksize,mode:t.mode,format:t.format})}),Ua,ws,Dl,Rp,Ip,Pp,Dp,$l,$p,mv,gv,o2=ge(()=>{Ke(),et(),Ot(),nt(),Ua="[a-zA-Z]|\\.\\.\\.",ws="("+Ua+")+",Dl="^"+ws+"$",Rp="("+ws+",)*"+ws,Ip="^"+Rp+"$",Pp=class{constructor(t=-1){this.symbolToIndices=new Map,this.inputIndex=t}addSymbol(t,e){let n=this.symbolToIndices.get(t);n===void 0?n=[e]:n.push(e),this.symbolToIndices.set(t,n)}},Dp=class{constructor(t,e){this.equation=e,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,i]=e.includes("->")?e.split("->",2):[e,""];if(!n.match(RegExp(Ip)))throw new Error("Invalid LHS term");if(n.split(",").forEach((r,s)=>{let a=t[s].dims.slice();if(!r.match(RegExp(Dl)))throw new Error("Invalid LHS term");let o=this.processTerm(r,!0,a,s);this.lhs.push(o)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([r,s])=>s.count===1||r==="...").map(([r])=>r).join("");else if(!i.match(RegExp(ws)))throw new Error("Invalid RHS");i.match(RegExp(Ua,"g"))?.forEach(r=>{if(r==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(r);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(t,e,n){let i=this.symbolToInfo.get(t);if(i!==void 0){if(i.dimValue!==e&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(n)}else i={count:1,dimValue:e,inputIndices:[n]};this.symbolToInfo.set(t,i)}processTerm(t,e,n,i=-1){let r=n.length,s=!1,a=[],o=0;if(!t.match(RegExp(Dl))&&!e&&t!=="")throw new Error("Invalid LHS term");let l=t.match(RegExp(Ua,"g")),u=new Pp(i);return l?.forEach((d,h)=>{if(d==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let f=r-l.length+1;if(f<0)throw new Error("Ellipsis out of bounds");if(a=n.slice(o,o+f),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(e)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let m=0;m<a.length;m++){let _=String.fromCharCode(48+m);u.addSymbol(_,h+m),this.addSymbol(_,n[o++],i)}}else u.addSymbol(d,h+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(d,n[o++],i)}),u}},$l=t=>t+"_max",$p=(t,e,n,i)=>{let r=t.map(u=>u.length).map((u,d)=>oe(`input${d}`,e,u)),s=ne.size(i),a=$e("output",e,i.length),o=[...n.symbolToInfo.keys()].filter(u=>!n.rhs.symbolToIndices.has(u)),l=u=>{let d=[],h="var prod = 1.0;",f="var sum = 0.0;",m="sum += prod;",_=[],y=[],v=[],p=[],b=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((w,T)=>{if(n.rhs.symbolToIndices.has(T)){let R=n.rhs.symbolToIndices.get(T)?.[0];R!==void 0&&n.lhs.forEach((P,$)=>{if(w.inputIndices.includes($)){let A=P.symbolToIndices.get(T);if(A===void 0)throw new Error("Invalid symbol error");A.forEach(C=>{d.push(`${r[$].indicesSet(`input${$}Indices`,C,a.indicesGet("outputIndices",R))}`)})}})}else n.lhs.forEach((R,P)=>{if(w.inputIndices.includes(P)){let $=R.symbolToIndices.get(T);if($===void 0)throw new Error("Invalid symbol error");$.forEach(A=>{_.push(`${r[P].indicesSet(`input${P}Indices`,A,`${T}`)}`)}),p.push(`prod *= ${r[P].getByIndices(`input${P}Indices`)};`)}}),y.push(`for(var ${T}: u32 = 0; ${T} < uniforms.${$l(T)}; ${T}++) {`),v.push("}")});let E=b?[...d,`let sum = ${r.map((w,T)=>w.getByIndices(`input${T}Indices`)).join(" * ")};`]:[...d,f,...y,..._,h,...p,m,...v];return`
            ${u.registerUniforms(o.map(w=>({name:`${$l(w)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...r,a)}

            ${u.mainStart()}
            ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${a.offsetToIndices("global_idx")};
            ${r.map((w,T)=>`var input${T}Indices: ${r[T].type.indices};`).join(`
`)}
            ${E.join(`
`)};
            ${a.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:t.map(()=>"rank")},getRunData:()=>{let u=o.filter(h=>n.symbolToInfo.has(h)).map(h=>({type:12,data:n.symbolToInfo.get(h)?.dimValue||0}));u.push({type:12,data:s});let d=t.map((h,f)=>[...ze(h)]).reduce((h,f)=>h.concat(f),u);return d.push(...ze(i)),{outputs:[{dims:i,dataType:e}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}},getShaderSource:l}},mv=(t,e)=>{let n=new Dp(t.inputs,e.equation),i=n.outputDims,r=t.inputs.map((s,a)=>s.dims);t.compute($p(r,t.inputs[0].dataType,n,i))},gv=t=>{let e=t.equation.replace(/\s+/g,"");return xt({equation:e})}}),Lp,Ll,Np,Up,_v,l2=ge(()=>{Ke(),et(),nt(),Lp=t=>{if(!t||t.length!==2)throw new Error("Expand requires 2 input.");let e=t[0].dims,n=Array.from(t[1].getBigInt64Array(),Number),i=n.length<e.length?0:n.length-e.length,r=e.length<n.length?0:e.length-n.length;for(;i<n.length&&r<e.length;++i,++r)if(n[i]!==e[r]&&n[i]!==1&&e[r]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Ll=(t,e)=>{let n=t.length-e.length,i=[];for(let r=0;r<n;++r)i.push(t[r]);for(let r=0;r<e.length;++r)i.push(e[r]===1?t[r+n]:e[r]);return i},Np=(t,e)=>t.length>e.length?Ll(t,e):Ll(e,t),Up=t=>{let e=t[0].dims,n=Array.from(t[1].getBigInt64Array(),Number),i=Np(e,n),r=t[0].dataType,s=r===9||ne.size(e)===1,a=r===9||e.length>0&&e[e.length-1]%4===0?4:1,o=s||i.length>0&&i[i.length-1]%4===0?4:1,l=Math.ceil(ne.size(i)/o),u=h=>{let f=oe("input",r,e.length,a),m=$e("output",r,i.length,o),_;if(r===9){let y=(v,p,b="")=>`
          let outputIndices${p} = ${m.offsetToIndices(`outputOffset + ${p}u`)};
          let offset${p} = ${f.broadcastedIndicesToOffset(`outputIndices${p}`,m)};
          let index${p} = offset${p} / 4u;
          let component${p} = offset${p} % 4u;
          ${v}[${p}] = ${b}(${f.getByOffset(`index${p}`)}[component${p}]);
        `;_=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${y("data",0,"u32")}
        ${y("data",1,"u32")}
        ${y("data",2,"u32")}
        ${y("data",3,"u32")}
        ${m.setByOffset("global_idx","data")}
      }`}else _=`
        let outputIndices = ${m.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${f.broadcastedIndicesToOffset("outputIndices",m)};
        let data = ${m.type.value}(${f.getByOffset(`inputOffset / ${a}`)});
        ${m.setByOffset("global_idx","data")}
      }`;return`
    ${h.registerUniform("vec_size","u32").declareVariables(f,m)}
    ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${_}`},d=[{type:12,data:l},...ze(e,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${a}${o}`,inputDependencies:["rank"]},getShaderSource:u,getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d})}},_v=t=>{Lp(t.inputs),t.compute(Up(t.inputs),{inputs:[0]})}}),Op,vv,u2=ge(()=>{Ke(),et(),nt(),kc(),Op=t=>{let e=t[0].dataType,n=ne.size(t[0].dims),i=ne.size(t[1].dims),r=i%4===0,s=a=>{let o=oe("x",e,[1],4),l=oe("bias",e,[1],4),u=$e("y",e,[1],4),d=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],h=m=>`
      let bias${m}_offset: u32 = (global_idx * 4 + ${m}) % uniforms.bias_size;
      let bias${m} = ${l.getByOffset(`bias${m}_offset / 4`)}[bias${m}_offset % 4];`,f=r?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${h(0)}${h(1)}${h(2)}${h(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(d).declareVariables(o,l,u)}

    ${Yu(rn(e))}

    ${a.mainStart(Zr)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${f}
      let x_in = x + bias;
      ${u.setByOffset("global_idx",Zu("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${r}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(n/Zr/4)}})}},vv=t=>{t.inputs.length<2||ne.size(t.inputs[1].dims)===0?z0(t):t.compute(Op(t.inputs))}}),zp,kp,yv,xv,c2=ge(()=>{Ke(),et(),Ot(),nt(),zp=t=>{if(!t||t.length!==2)throw new Error("Gather requires 2 inputs.")},kp=(t,e)=>{let n=t[0].dims,i=t[1].dims,r=n.length,s=ne.normalizeAxis(e.axis,r),a=n.slice(0);a.splice(s,1,...i);let o=n[s],l=t[0].dataType===9?4:1,u=Math.ceil(ne.size(a)/l),d=[{type:12,data:u},{type:6,data:o},{type:12,data:s},...ze(t[0].dims,t[1].dims,a)],h=f=>{let m=oe("data",t[0].dataType,t[0].dims.length,l),_=oe("inputIndices",t[1].dataType,t[1].dims.length),y=$e("output",t[0].dataType,a.length,l),v=b=>{let E=i.length,w=`var indicesIndices${b}  = ${_.type.indices}(0);`;for(let T=0;T<E;T++)w+=`${E>1?`indicesIndices${b}[${T}]`:`indicesIndices${b}`} = ${a.length>1?`outputIndices${b}[uniforms.axis + ${T}]`:`outputIndices${b}`};`;w+=`
          var idx${b} = ${_.getByIndices(`indicesIndices${b}`)};
          if (idx${b} < 0) {
            idx${b} = idx${b} + uniforms.axisDimLimit;
          }
          var dataIndices${b} : ${m.type.indices};
        `;for(let T=0,R=0;T<r;T++)T===s?(w+=`${r>1?`dataIndices${b}[${T}]`:`dataIndices${b}`} = u32(idx${b});`,R+=E):(w+=`${r>1?`dataIndices${b}[${T}]`:`dataIndices${b}`} = ${a.length>1?`outputIndices${b}[${R}]`:`outputIndices${b}`};`,R++);return w},p;if(t[0].dataType===9){let b=(E,w,T="")=>`
          let outputIndices${w} = ${y.offsetToIndices(`outputOffset + ${w}u`)};
          ${v(w)};
          let offset${w} = ${m.indicesToOffset(`dataIndices${w}`)};
          let index${w} = offset${w} / 4u;
          let component${w} = offset${w} % 4u;
          ${E}[${w}] = ${T}(${m.getByOffset(`index${w}`)}[component${w}]);
        `;p=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${b("value",0,"u32")}
        ${b("value",1,"u32")}
        ${b("value",2,"u32")}
        ${b("value",3,"u32")}
        ${y.setByOffset("global_idx","value")}
      `}else p=`
      let outputIndices = ${y.offsetToIndices("global_idx")};
      ${v("")};
      let value = ${m.getByIndices("dataIndices")};
      ${y.setByOffset("global_idx","value")};
      `;return`
      ${f.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(m,_,y)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${p}
      }`};return{name:"Gather",shaderCache:{hint:e.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:h}},yv=t=>xt({axis:t.axis}),xv=(t,e)=>{let n=t.inputs;zp(n),t.compute(kp(t.inputs,e))}}),Fp,bv,wv,d2=ge(()=>{Ke(),et(),nt(),Fp=(t,e,n,i,r,s,a,o,l)=>{let u=[{type:12,data:s},{type:12,data:i},{type:12,data:r},{type:12,data:n},{type:12,data:a},{type:12,data:o},{type:12,data:l}],d=[s];u.push(...ze(e.dims,d));let h=f=>{let m=oe("indices_data",e.dataType,e.dims.length),_=$e("input_slice_offsets_data",12,1,1),y=[m,_],v=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:r.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${f.registerUniforms(v).declareVariables(...y)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${r.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${n.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return t.compute({name:"computeSliceOffsets",shaderCache:{hint:`${r.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:d,dataType:t.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u}),getShaderSource:h},{inputs:[e],outputs:[-1]})[0]},bv=(t,e)=>{let n=t.inputs,i=n[0].dims,r=n[0].dataType,s=n[1].dims,a=s[s.length-1],o=ne.sizeToDimension(s,s.length-1),l=ne.sizeFromDimension(i,e.batchDims+a),u=ne.sizeToDimension(i,e.batchDims),d=ne.sizeFromDimension(i,e.batchDims),h=o/u,f=new Array(a),m=l;for(let w=0;w<a;++w)f[a-1-w]=m,m*=i[e.batchDims+a-1-w];let _=Fp(t,n[1],f,e.batchDims,i,o,h,d,a),y=e.batchDims+a;if(y>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let v=s.slice(0,-1).concat(i.slice(y)),p=ne.size(v),b=[{type:12,data:p},{type:12,data:l},...ze(n[0].dims,_.dims,v)],E=w=>{let T=oe("data",n[0].dataType,n[0].dims.length),R=oe("slice_offsets",12,_.dims.length),P=$e("output",n[0].dataType,v.length);return`
          ${w.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(T,R,P)}
            ${w.mainStart()}
            ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};t.compute({name:"GatherND",shaderCache:{hint:e.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:v,dataType:r}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:b}),getShaderSource:E},{inputs:[n[0],_]})},wv=t=>({batchDims:t.batch_dims,cacheKey:""})}),Bp,Hp,Sv,Ev,h2=ge(()=>{Ke(),et(),Ot(),nt(),Bp=(t,e)=>{if(t.length<3||t.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=ne.normalizeAxis(e.quantizeAxis,t[0].dims.length),i=e.blockSize,r=t[0],s=t[2],a=t.length===4?t[3]:void 0;if(s.dims.length!==r.dims.length||!r.dims.map((o,l)=>l===n?Math.ceil(o/i)===s.dims[l]:o===s.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==r.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==s.dims.length||!a.dims.map((o,l)=>o===s.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Hp=(t,e)=>{let n=t[0].dims,i=t[1].dims,r=n.length,s=ne.normalizeAxis(e.gatherAxis,r),a=ne.normalizeAxis(e.quantizeAxis,r),o=n.slice(0);o.splice(s,1,...i);let l=ne.size(o),u=t[2].dataType,d=t[0].dataType===22,h=[{type:12,data:l},{type:12,data:a},{type:12,data:s},{type:12,data:e.blockSize},...ze(...t.map((m,_)=>m.dims),o)],f=m=>{let _=oe("data",t[0].dataType,t[0].dims.length),y=oe("inputIndices",t[1].dataType,t[1].dims.length),v=oe("scales",t[2].dataType,t[2].dims.length),p=t.length>3?oe("zeroPoint",t[3].dataType,t[3].dims.length):void 0,b=$e("output",u,o.length),E=[_,y,v];p&&E.push(p);let w=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${m.registerUniforms(w).declareVariables(...E,b)}
        ${m.mainStart()}
        let output_indices = ${b.offsetToIndices("global_idx")};
        var indices_indices = ${y.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${b.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${y.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${b.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${_.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${b.indicesGet("output_indices","i")};
          ${_.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${y.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${n[s]};
        }
        ${_.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${b.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${_.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${_.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${_.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${d?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${v.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${v.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${v.getByIndices("scale_indices")};
        ${p?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${p.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${p.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${d?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${rn(u)}(quantized_data - zero_point) * scale;
        ${b.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${e.cacheKey};${t.filter((m,_)=>_!==1).map(m=>m.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:t.length},(m,_)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:u}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:f}},Sv=(t,e)=>{let n=t.inputs;Bp(n,e),t.compute(Hp(t.inputs,e))},Ev=t=>xt({blockSize:t.blockSize,gatherAxis:t.gatherAxis,quantizeAxis:t.quantizeAxis})}),Vp,Gp,Tv,Mv,f2=ge(()=>{Ke(),et(),Ot(),nt(),Vp=t=>{if(!t||t.length!==2)throw new Error("GatherElements requires 2 inputs.");if(t[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(t[0].dims.length!==t[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Gp=(t,e)=>{let n=t[0].dims,i=t[0].dataType,r=n.length,s=t[1].dims,a=t[1].dataType,o=ne.normalizeAxis(e.axis,r),l=n[o],u=s.slice(0),d=ne.size(u),h=oe("input",i,r),f=oe("indicesInput",a,s.length),m=$e("output",i,u.length),_=[{type:12,data:d},{type:6,data:l},{type:12,data:o}];return _.push(...ze(n,s,u)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:u,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:_}),getShaderSource:y=>`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(h,f,m)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${m.offsetToIndices("global_idx")};

      var idx = ${f.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${h.type.indices}(outputIndices);
      ${h.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${h.getByIndices("inputIndices")};

      ${m.setByOffset("global_idx","value")};
  }`}},Tv=t=>xt({axis:t.axis}),Mv=(t,e)=>{let n=t.inputs;Vp(n),t.compute(Gp(t.inputs,e))}}),Wp,qp,Av,Cv,p2=ge(()=>{Ke(),et(),nt(),Wp=t=>{if(!t)throw new Error("Input is missing");if(t.length<2||t.length>3)throw new Error("Invaid input number.");if(t.length===3&&t[2].dims.length>2)throw new Error("Invalid input shape of C");if(t[0].dataType!==t[1].dataType||t.length===3&&t[0].dataType!==t[2].dataType)throw new Error("Input types are mismatched")},qp=(t,e)=>{let n=t[0].dims.slice(),i=t[1].dims.slice(),[r,s,a]=T_.getShapeOfGemmResult(n,e.transA,i,e.transB,t.length===3?t[2].dims:void 0),o=[r,s];if(!o)throw new Error("Can't use gemm on the given tensors");let l=16,u=Math.ceil(s/l),d=Math.ceil(r/l),h=!0,f=ne.size(o),m=[{type:12,data:h?u:f},{type:12,data:r},{type:12,data:s},{type:12,data:a},{type:1,data:e.alpha},{type:1,data:e.beta}],_=["type","type"];t.length===3&&(m.push(...ze(t[2].dims)),_.push("rank")),m.push(...ze(o));let y=p=>{let b="";e.transA&&e.transB?b="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":e.transA&&!e.transB?b="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!e.transA&&e.transB?b="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!e.transA&&!e.transB&&(b="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let E=e.alpha===1?"":"value *= uniforms.alpha;",w=oe("a",t[0].dataType,t[0].dims),T=oe("b",t[1].dataType,t[1].dims),R=w.type.value,P=null,$=[w,T];t.length===3&&(P=oe("c",t[2].dataType,t[2].dims.length),$.push(P));let A=$e("output",t[0].dataType,o.length);$.push(A);let C=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${p.registerUniforms(C).declareVariables(...$)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${R}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${b}
    }

    ${E}
    ${P!=null?`let cOffset = ${P.broadcastedIndicesToOffset("vec2(m, n)",A)}; value += ${R}(uniforms.beta) * ${P.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},v=p=>{let b=oe("a",t[0].dataType,t[0].dims),E=oe("b",t[1].dataType,t[1].dims),w=null,T=[b,E];t.length===3&&(w=oe("c",t[2].dataType,t[2].dims.length),T.push(w));let R=$e("output",t[0].dataType,o.length);T.push(R);let P=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],$="",A="";e.transA&&e.transB?(A=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${E.type.value}(0);
      }
      `,$="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):e.transA&&!e.transB?(A=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${E.type.value}(0);
      }
      `,$="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!e.transA&&e.transB?(A=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${E.type.value}(0);
      }
      `,$="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!e.transA&&!e.transB&&(A=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${E.type.value}(0);
      }
      `,$="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let C=e.alpha===1?"":"value *= uniforms.alpha;";return`
  ${p.registerUniforms(P).declareVariables(...T)}
  var<workgroup> tile_a: array<array<${b.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${E.type.storage}, ${l}>, ${l}>;
  ${p.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${R.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${A}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${$}
      }
      workgroupBarrier();
    }

    ${C}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${w!=null?`let cOffset = ${w.broadcastedIndicesToOffset("vec2(m, n)",R)}; value += ${R.type.value}(uniforms.beta) * ${w.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return h?{name:"GemmShared",shaderCache:{hint:`${e.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:o,dataType:t[0].dataType}],dispatchGroup:{x:u*d},programUniforms:m}),getShaderSource:v}:{name:"Gemm",shaderCache:{hint:`${e.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:o,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:y}},Av=t=>{let e=t.transA,n=t.transB,i=t.alpha,r=t.beta;return{transA:e,transB:n,alpha:i,beta:r,cacheKey:`${t.transA};${t.transB};${t.alpha===1}`}},Cv=(t,e)=>{Wp(t.inputs),t.compute(qp(t.inputs,e))}}),Zn,hi,Ki,Yi,Xp,jp,Kp,Yp,Zp,Jp,Qp,em,Rv,Iv,m2=ge(()=>{Ke(),et(),Ot(),nt(),[Zn,hi,Ki,Yi]=[0,1,2,3],Xp=t=>{if(t[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(t[0].dims.length!==t[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(t[0].dims.length-2!==t[1].dims[t[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${t[0].dims.length-2}`);if(t[0].dims[0]!==t[1].dims[0])throw new Error("grid batch size must match input batch size")},jp=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Kp=t=>`
  fn gs_bicubic_interpolate(p: mat4x4<${t}>, x: f32, y: f32) -> ${t} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${t}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Yp=t=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${t.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Zp=t=>`
  ${t.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,Jp=(t,e,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${e} {
     var pixel = ${e}(0);
     var indices = vec4<u32>(0);
     indices[${Zn}] = batch;
     indices[${hi}] = channel;`+(()=>{switch(n.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Ki}] = u32(r);
            indices[${Yi}] = u32(c);
          } else {
            return ${e}(0);
          }
        `;case"border":return`
          indices[${Ki}] = u32(clamp(r, 0, H - 1));
          indices[${Yi}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Ki}] = gs_reflect(r, border[1], border[3]);
          indices[${Yi}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${t.getByIndices("indices")};
  }
`,Qp=(t,e,n)=>(()=>{switch(n.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Zn}], indices[${hi}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Zn}], indices[${hi}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Zn}], indices[${hi}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Zn}], indices[${hi}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Zn}], indices[${hi}], border);

          let dx2 = ${e}(f32(x2) - x);
          let dx1 = ${e}(x - f32(x1));
          let dy2 = ${e}(f32(y2) - y);
          let dy1 = ${e}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${e}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Zn}], indices[${hi}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${t.setByOffset("global_idx","result")}`,em=(t,e)=>{let n=oe("x",t[0].dataType,t[0].dims.length),i=[t[1].dims[0],t[1].dims[1],t[1].dims[2]],r=oe("grid",t[1].dataType,i.length,2),s=[t[0].dims[0],t[0].dims[1],t[1].dims[1],t[1].dims[2]];e.format==="NHWC"&&(s=[t[0].dims[0],t[1].dims[1],t[1].dims[2],t[0].dims[3]],[Zn,hi,Ki,Yi]=[0,3,1,2]);let a=$e("output",t[0].dataType,s.length),o=n.type.value,l=ne.size(s),u=[{type:12,data:l},...ze(t[0].dims,i,s)],d=h=>`
  ${h.registerUniform("output_size","u32").declareVariables(n,r,a)}
  ${jp}
  ${Kp(o)}
  ${Yp(e)}
  ${Zp(e)}
  ${Jp(n,o,e)}

  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Ki}]);
      let W_in = i32(uniforms.x_shape[${Yi}]);

      ${e.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${a.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Zn}], indices[${Ki}], indices[${Yi}]);
      let nxy = ${r.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Qp(a,o,e)}
  }`;return{name:"GridSample",shaderCache:{hint:`${e.cacheKey}`,inputDependencies:["type","type"]},getRunData:h=>{let f=ne.size(s);return{outputs:[{dims:s,dataType:h[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:u}},getShaderSource:d}},Rv=(t,e)=>{Xp(t.inputs),t.compute(em(t.inputs,e))},Iv=t=>xt({alignCorners:t.align_corners,mode:t.mode,paddingMode:t.padding_mode,format:t.format})}),on,tm,Pv,Nl,nm,Ps,Dv,$v=ge(()=>{Ke(),et(),Ot(),Nc(),zc(),nt(),ki(),on=(t,e)=>t.length>e&&t[e].dims.length>0?t[e]:void 0,tm=(t,e)=>{let n=t[0],i=on(t,1),r=on(t,2),s=on(t,3),a=on(t,4),o=on(t,5),l=on(t,6),u=on(t,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let d=n.dims[0],h=n.dims[1],f=n.dims.length===3?n.dims[2]:e.numHeads*n.dims[4],m=h,_=0,y=0,v=Math.floor(f/e.numHeads);if(l&&u&&ne.size(l.dims)&&ne.size(u.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==d||l.dims[1]!==e.numHeads||l.dims[3]!==v)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[0]!==d||u.dims[1]!==e.numHeads||u.dims[3]!==v)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==u.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(u.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=l.dims[2],y=l.dims[2]}else if(l&&ne.size(l.dims)||u&&ne.size(u.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let p;if(i&&ne.size(i.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');p=2,m=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==e.numHeads||i.dims[3]!==2||i.dims[4]!==v)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(r)throw new Error('Expect "value" be none when "key" has packed kv format.');p=5,m=i.dims[1]}else{if(i.dims[1]!==e.numHeads||i.dims[3]!==v)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');p=0,m=i.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==e.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');p=3}if(s&&ne.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let b=_+m,E=0;if(a&&ne.size(a.dims)>0){E=8;let P=a.dims;throw P.length===1?P[0]===d?E=1:P[0]===3*d+2&&(E=3):P.length===2&&P[0]===d&&P[1]===b&&(E=5),E===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let w=!1,T=f;if(r&&ne.size(r.dims)>0){if(r.dims.length!==3&&r.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(r.dims.length===3){if(m!==r.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=r.dims[2]}else{if(m!==r.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');T=r.dims[1]*r.dims[3],w=!0}}let R=!1;if(a&&ne.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(o&&ne.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==d||o.dims[1]!==e.numHeads||o.dims[2]!==h||o.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:d,sequenceLength:h,pastSequenceLength:_,kvSequenceLength:m,totalSequenceLength:b,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:f,vHiddenSize:T,headSize:v,vHeadSize:Math.floor(T/e.numHeads),numHeads:e.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:e.maskFilterValue,maskType:E,scale:e.scale,broadcastResPosBias:R,passPastInKv:w,qkvFormat:p}},Pv=t=>xt({...t}),Nl=xt({perm:[0,2,1,3]}),nm=(t,e,n,i,r,s,a)=>{let o=[i,r,s],l=ne.size(o),u=[{type:12,data:l},{type:12,data:a},{type:12,data:s}],d=h=>{let f=$e("qkv_with_bias",e.dataType,o),m=oe("qkv",e.dataType,o),_=oe("bias",n.dataType,o),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${h.registerUniforms(y).declareVariables(m,_,f)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return t.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:e.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:d},{inputs:[e,n],outputs:[-1]})[0]},Ps=(t,e,n,i,r,s,a,o)=>{let l=s;if(a&&ne.size(a.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=nm(t,s,a,e,i,n*r,o),l=l.reshape([e,i,n,r]),n===1||i===1?l:t.compute(En(l,Nl.perm),{inputs:[l],outputs:[-1]})[0]}else return s.dims.length===3&&(l=s.reshape([e,i,n,r])),n===1||i===1?l:t.compute(En(l,Nl.perm),{inputs:[l],outputs:[-1]})[0]},Dv=(t,e)=>{let n=tm(t.inputs,e),i=t.inputs[0],r=on(t.inputs,1),s=on(t.inputs,2),a=on(t.inputs,3),o=on(t.inputs,4),l=on(t.inputs,5),u=on(t.inputs,6),d=on(t.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if(r?.dims.length===5)throw new Error("Packed KV is not implemented");let h=r&&s&&r.dims.length===4&&s.dims.length===4,f=Ps(t,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,i,a,0);if(h)return Hs(t,f,r,s,o,void 0,u,d,l,n);if(!r||!s)throw new Error("key and value must be provided");let m=Ps(t,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,r,a,n.hiddenSize),_=Ps(t,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,s,a,2*n.hiddenSize);Hs(t,f,m,_,o,void 0,u,d,l,n)}}),im,rm,sm,am,nc,Lv,Nv,Uv=ge(()=>{Ke(),et(),Ot(),nt(),im=t=>{if(!t||t.length<1)throw new Error("too few inputs")},rm=(t,e)=>{let n=[],i=e.numOutputs;return t[1].dims[0]>0&&(t[1].getBigInt64Array().forEach(r=>n.push(Number(r))),i=n.length),xt({numOutputs:i,axis:e.axis,splitSizes:n})},sm=t=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${t}u; i += 1u ) {
    if (index < ${Ne("uniforms.size_in_split_axis","i",t)}) {
        return i;
    }
    }
    return ${t}u;
}`,am=t=>{let e=t.length,n=[];for(let i=0;i<e;++i){let r=t[i].setByIndices("indices","input[global_idx]");e===1?n.push(r):i===0?n.push(`if (output_number == ${i}u) { ${r} }`):i===e-1?n.push(`else { ${r} }`):n.push(`else if (output_number == ${i}) { ${r} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${t[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},nc=(t,e)=>{let n=t[0].dims,i=ne.size(n),r=t[0].dataType,s=ne.normalizeAxis(e.axis,n.length),a=new Array(e.numOutputs),o=oe("input",r,n.length),l=new Array(e.numOutputs),u=[],d=[],h=0,f=[{type:12,data:i}];for(let _=0;_<e.numOutputs;_++){h+=e.splitSizes[_],l[_]=h;let y=n.slice();y[s]=e.splitSizes[_],d.push(y),a[_]=$e(`output${_}`,r,y.length),u.push({dims:d[_],dataType:t[0].dataType})}f.push({type:12,data:l},...ze(n,...d));let m=_=>`
  ${_.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(o,...a)}
  ${sm(l.length)}
  ${am(a)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${Ne("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${o.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:e.cacheKey,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:u,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:f})}},Lv=(t,e)=>{im(t.inputs);let n=t.inputs.length===1?e:rm(t.inputs,e);t.compute(nc(t.inputs,n),{inputs:[0]})},Nv=t=>{let e=t.axis,n=t.splitSizes,i=t.numOutputs<0?n.length:t.numOutputs;if(i!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return xt({axis:e,numOutputs:i,splitSizes:n})}}),om,so,Ov,zv=ge(()=>{Ke(),et(),Ot(),nt(),om=(t,e)=>{let[n,i,r,s]=t,{numHeads:a,rotaryEmbeddingDim:o}=e;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!ne.areEqual(i.dims,[])&&!ne.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(r.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${r.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!ne.areEqual(r.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=n.dims[0],u=n.dims[n.dims.length-2],d=r.dims[0],h=ne.sizeFromDimension(n.dims,1)/u,f=o===0?r.dims[1]*2:h/a;if(o>f)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(l!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(u!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(f/2!==r.dims[1]&&o/2!==r.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${r.dims[1]}`);if(u>d)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},so=(t,e)=>{let{interleaved:n,numHeads:i,rotaryEmbeddingDim:r,scale:s}=e,a=t[0].dims[0],o=ne.sizeFromDimension(t[0].dims,1),l=t[0].dims[t[0].dims.length-2],u=o/l,d=t[2].dims[1],h=r===0?d*2:u/i,f=new Array(a,l,u/h,h-d),m=ne.computeStrides(f),_=[{type:1,data:s},{type:12,data:f},{type:12,data:m},...t[0].dims.length===3?new Array({type:12,data:[o,u,h,1]}):[],...t[0].dims.length===4?new Array({type:12,data:[o,h,l*h,1]}):[],...ze(t[0].dims,t[1].dims,t[2].dims,t[3].dims,t[0].dims)],y=v=>{let p=oe("input",t[0].dataType,t[0].dims.length),b=oe("position_ids",t[1].dataType,t[1].dims.length),E=oe("cos_cache",t[2].dataType,t[2].dims.length),w=oe("sin_cache",t[3].dataType,t[3].dims.length),T=$e("output",t[0].dataType,t[0].dims.length);return v.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:f.length},{name:"global_strides",type:"u32",length:m.length},{name:"input_output_strides",type:"u32",length:m.length}]),`
        ${v.declareVariables(p,b,E,w,T)}

        ${v.mainStart(Zr)}
          let half_rotary_emb_dim = uniforms.${E.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${b.broadcastedIndicesToOffset("bsnh.xy",$e("",b.type.tensor,2))};
            let position_id =
                u32(${b.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${p.getByOffset("i")} * ${E.get("position_id","bsnh[3]")} -
                ${p.getByOffset("j")} * ${w.get("position_id","bsnh[3]")};
            ${T.setByOffset("i","re")}
            let im = ${p.getByOffset("i")} * ${w.get("position_id","bsnh[3]")} +
                ${p.getByOffset("j")} * ${E.get("position_id","bsnh[3]")};
            ${T.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${T.setByOffset("k",p.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:xt({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:t[0].dims,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(ne.size(f)/Zr)},programUniforms:_})}},Ov=(t,e)=>{om(t.inputs,e),t.compute(so(t.inputs,e))}}),lm,um,Ul,cm,kv,g2=ge(()=>{Ot(),Ke(),zc(),$v(),Uv(),ki(),zv(),nt(),lm=(t,e)=>{if(e.doRotary&&t.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=t[0],i=t[1],r=t[2],s=t[3],a=t[4];if(e.doRotary!==0&&t.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(e.localWindowSize!==-1)throw new Error("Local attention is not supported");if(e.softcap!==0)throw new Error("Softcap is not supported");if(e.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(e.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,l=n.dims[0],u=n.dims[1],d=n.dims.length===3?o?n.dims[2]/3:n.dims[2]:e.numHeads*n.dims[4],h=u,f=0,m=!i||i.dims.length===0,_=Math.floor(m?d/(e.numHeads+2*e.kvNumHeads):d/e.numHeads);m&&(d=_*e.numHeads);let y=s&&s.dims.length!==0,v=a&&a.dims.length!==0;if(y&&s.dims.length===4&&s.dims[0]===l&&s.dims[1]!==e.kvNumHeads&&s.dims[2]===e.kvNumHeads&&s.dims[3]===_)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&v){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');f=s.dims[2]}else if(y||v)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let p=1;if(i&&i.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(n.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');h=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==e.numHeads||i.dims[3]!==2||i.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(r)throw new Error('Expect "value" be none when "key" has packed kv format.');h=i.dims[1]}else{if(i.dims[1]!==e.numHeads||i.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');h=i.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==e.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');p=3}let b=0,E=!1,w=e.kvNumHeads?_*e.kvNumHeads:d;if(r&&r.dims.length>0){if(r.dims.length!==3&&r.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(r.dims.length===3){if(h!==r.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');w=r.dims[2]}else{if(h!==r.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');w=r.dims[1]*r.dims[3],E=!0}}let T=t.length>4?t[5]:void 0;if(T&&T.dims.length!==1&&T.dims[0]!==l)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:l,sequenceLength:u,pastSequenceLength:f,kvSequenceLength:h,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:d,vHiddenSize:w,headSize:_,vHeadSize:Math.floor(w/e.kvNumHeads),numHeads:e.numHeads,kvNumHeads:e.kvNumHeads,nReps:e.numHeads/e.kvNumHeads,pastPresentShareBuffer:!1,maskType:b,scale:e.scale,broadcastResPosBias:!1,passPastInKv:E,qkvFormat:p}},um=xt({perm:[0,2,1,3]}),Ul=(t,e,n)=>{let i=e,r=n.kvNumHeads;return e.dims.length===3&&n.kvSequenceLength!==0&&(i=e.reshape([n.batchSize,n.kvSequenceLength,r,n.headSize]),i=t.compute(En(i,um.perm),{inputs:[i],outputs:[-1]})[0]),i},cm=(t,e,n,i)=>{let r=7,s=["type","type"],a=[t*e],o=t*e,l=[{type:12,data:o},{type:12,data:e},{type:12,data:t}],u=d=>{let h=oe("seq_lens",n.dataType,n.dims),f=oe("total_seq_lens",i.dataType,i.dims),m=$e("pos_ids",r,a),_=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${d.registerUniforms(_).declareVariables(h,f,m)}
  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${f.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${h.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${m.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${m.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${m.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${t};${e}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:u}},kv=(t,e)=>{let n=lm(t.inputs,e);if(t.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(t.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let i=t.inputs[0],r=t.inputs[1]&&t.inputs[1].dims.length>0?t.inputs[1]:void 0,s=t.inputs[2]&&t.inputs[2].dims.length>0?t.inputs[2]:void 0,a=t.inputs[3]&&t.inputs[3].dims.length!==0?t.inputs[3]:void 0,o=t.inputs[4]&&t.inputs[4].dims.length!==0?t.inputs[4]:void 0,l=t.inputs.length>4?t.inputs[5]:void 0,u=t.inputs.length>5?t.inputs[6]:void 0,d=n.kvNumHeads?n.kvNumHeads:n.numHeads,h=xt({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,d*n.headSize,d*n.headSize]}),[f,m,_]=!r&&!s?t.compute(nc([i],h),{inputs:[i],outputs:[-1,-1,-1]}):[i,r,s],y,v;if(e.doRotary){let w=t.compute(cm(n.batchSize,n.sequenceLength,l,u),{inputs:[l,u],outputs:[-1]})[0],T=t.inputs[7],R=t.inputs[8],P=xt({interleaved:e.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:e.scale}),$=[f,w,T,R],A=[-1];y=t.compute(so($,P),{inputs:$,outputs:A})[0],$.splice(0,1,m);let C=xt({interleaved:e.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:e.scale});v=t.compute(so($,C),{inputs:$,outputs:A})[0]}let p=Ps(t,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,e.doRotary?y:f,void 0,0),b=Ul(t,e.doRotary?v:m,n),E=Ul(t,_,n);Hs(t,p,b,E,void 0,void 0,a,o,void 0,n,l,u)}}),Ol,dm,hm,Fv,_2=ge(()=>{Ke(),et(),ki(),nt(),Ol=(t,e,n,i,r,s,a,o)=>{let l=Ut(s),u=l===1?"f32":`vec${l}f`,d=l===1?"vec2f":`mat2x${l}f`,h=r*a,f=64;h===1&&(f=256);let m=[r,a,s/l],_=[r,a,2],y=["rank","type","type"],v=[];v.push(...ze(m,_));let p=b=>{let E=oe("x",e.dataType,3,l),w=oe("scale",n.dataType,n.dims),T=oe("bias",i.dataType,i.dims),R=$e("output",1,3,2),P=[E,w,T,R];return`
  var<workgroup> workgroup_shared : array<${d}, ${f}>;
  const workgroup_size = ${f}u;
  ${b.declareVariables(...P)}
  ${b.mainStart(f)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${u}(0);
    var squared_sum = ${u}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${u}(${E.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${d}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${zi("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${zi("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return t.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${o};${f}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:_,dataType:1}],dispatchGroup:{x:h},programUniforms:v}),getShaderSource:p},{inputs:[e,n,i],outputs:[-1]})[0]},dm=(t,e,n)=>{let i=e[0].dims,r=i,s=2,a=i[0],o=i[1],l=ne.sizeFromDimension(i,s),u=Ut(l),d=ne.size(r)/u,h=Ol(t,e[0],e[1],e[2],a,l,o,n.epsilon),f=[a,o,l/u],m=[a,o],_=["type","none"],y=v=>{let p=oe("x",e[0].dataType,f.length,u),b=oe("scale_shift",1,m.length,2),E=$e("output",e[0].dataType,f.length,u),w=[p,b,E];return`
  ${v.registerUniform("output_size","u32").declareVariables(...w)}
  ${v.mainStart()}
  ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${E.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${b.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${p.getByOffset("global_idx")} * ${E.type.value}(scale_shift.x) + ${E.type.value}(scale_shift.y);
      ${E.setByOffset("global_idx","value")};
  }`};t.compute({name:"InstanceNormalization",shaderCache:{hint:`${u}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:[{type:12,data:d},...ze(f,m,f)]}),getShaderSource:y},{inputs:[e[0],h]})},hm=(t,e,n)=>{let i=e[0].dims,r=i,s=i[0],a=i[i.length-1],o=ne.sizeFromDimension(i,1)/a,l=Ut(a),u=ne.size(r)/l,d=[{type:12,data:o},{type:12,data:Math.floor(a/l)}],h=["type","type"],f=!1,m=[0,i.length-1];for(let p=0;p<i.length-2;p++)f=f||i[p+1]!==1,m.push(p+1);f=f&&i[i.length-1]!==1;let _=f?t.compute(En(t.inputs[0],m),{inputs:[t.inputs[0]],outputs:[-1]})[0]:t.inputs[0].reshape(Array.from({length:i.length},(p,b)=>i[m[b]])),y=Ol(t,_,e[1],e[2],s,o,a,n.epsilon),v=p=>{let b=jt(e[0].dataType),E=l===1?"vec2f":`mat${l}x2f`,w=P=>{let $=P===0?"x":"y",A=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${b}(${A}(scale.${$}))`;case 2:return`vec2<${b}>(${A}(scale[0].${$}, scale[1].${$}))`;case 4:return`vec4<${b}>(${A}(scale[0].${$}, scale[1].${$}, scale[2].${$}, scale[3].${$}))`;default:throw new Error(`Not supported compoents ${l}`)}},T=oe("input",e[0].dataType,e[0].dims,l),R=$e("output",e[0].dataType,r,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${T.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${E}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${R.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${p.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${w(0)}, ${w(1)});
  }`};t.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:v},{inputs:[e[0],y]})},Fv=(t,e)=>{e.format==="NHWC"?hm(t,t.inputs,e):dm(t,t.inputs,e)}}),fm,pm,Bv,v2=ge(()=>{Ke(),et(),nt(),fm=t=>{if(!t||t.length<2)throw new Error("layerNorm requires at least 2 inputs.")},pm=(t,e,n)=>{let i=e.simplified,r=t[0].dims,s=t[1],a=!i&&t[2],o=r,l=ne.normalizeAxis(e.axis,r.length),u=ne.sizeToDimension(r,l),d=ne.sizeFromDimension(r,l),h=ne.size(s.dims),f=a?ne.size(a.dims):0;if(h!==d||a&&f!==d)throw new Error(`Size of X.shape()[axis:] == ${d}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${h} and bias size of ${f}`);let m=[];for(let T=0;T<r.length;++T)T<l?m.push(r[T]):m.push(1);let _=Ut(d),y=["type","type"],v=[{type:12,data:u},{type:1,data:d},{type:12,data:Math.floor(d/_)},{type:1,data:e.epsilon}];a&&y.push("type");let p=n>1,b=n>2,E=T=>{let R=jt(t[0].dataType),P=[oe("x",t[0].dataType,t[0].dims,_),oe("scale",s.dataType,s.dims,_)];a&&P.push(oe("bias",a.dataType,a.dims,_)),P.push($e("output",t[0].dataType,o,_)),p&&P.push($e("mean_data_output",1,m)),b&&P.push($e("inv_std_output",1,m));let $=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${T.registerUniforms($).declareVariables(...P)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Xu("f32",_)};
    var mean_square_vector = ${Xu("f32",_)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Br(R,_,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${zi("mean_vector",_)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${zi("mean_square_vector",_)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Br(R,_,"x[j + offset]")};
      let f32scale = ${Br(R,_,"scale[j]")};
      output[j + offset] = ${P[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${Br(R,_,"bias[j]")}`:""}
      );
    }

    ${p?"mean_data_output[global_idx] = mean":""};
    ${b?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},w=[{dims:o,dataType:t[0].dataType}];return p&&w.push({dims:m,dataType:1}),b&&w.push({dims:m,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${_};${n};${i}`,inputDependencies:y},getRunData:()=>({outputs:w,dispatchGroup:{x:Math.ceil(u/64)},programUniforms:v}),getShaderSource:E}},Bv=(t,e)=>{fm(t.inputs),t.compute(pm(t.inputs,e,t.outputCount))}}),mm,Hv,y2=ge(()=>{et(),Vc(),Gc(),mm=t=>{if(!t||t.length!==2)throw new Error("MatMul requires 2 inputs.");if(t[0].dims[t[0].dims.length-1]!==t[1].dims[t[1].dims.length-2])throw new Error("shared dimension does not match.")},Hv=t=>{mm(t.inputs);let e=Yr.calcShape(t.inputs[0].dims,t.inputs[1].dims,!0);if(!e)throw new Error("Can't use matmul on the given tensors");let n=e[e.length-1],i=t.inputs[0].dims[t.inputs[0].dims.length-1];if(n<8&&i<8)t.compute(Hc(t.inputs,{activation:""},e));else{let r=e[e.length-2],s=ne.size(t.inputs[0].dims.slice(0,-2)),a=ne.size(t.inputs[1].dims.slice(0,-2));if(s!==1&&r===1&&a===1){let o=t.inputs[0].reshape([1,s,i]),l=t.inputs[1].reshape([1,i,n]),u=[1,s,n],d=[o,l];t.compute(ro(d,{activation:""},e,u),{inputs:d})}else t.compute(ro(t.inputs,{activation:""},e))}}}),gm,_m,vm,Vv,Gv,x2=ge(()=>{Ke(),et(),Ot(),nt(),gm=(t,e)=>{if(t.length<3||t.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=t[0],i=n.dims.length;if(n.dims[i-1]!==e.k)throw new Error("The last dim of input shape does not match the k value");let r=Math.floor((e.k+e.blockSize-1)/e.blockSize),s=e.blockSize/8*e.bits,a=t[1];if(!ne.areEqual(a.dims,[e.n,r,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=t[2].dims;if(ne.size(o)!==e.n*r)throw new Error("scales input size error.");if(t.length===4){let l=t[3].dims,u=e.n*(e.bits===8?r:Math.floor((r*e.bits+7)/8));if(ne.size(l)!==u)throw new Error("zeroPoints input size error.")}},_m=(t,e)=>{let n=t[0].dims,i=n.length,r=n[i-2],s=e.k,a=e.n,o=n.slice(0,i-2),l=ne.size(o),u=t[1].dims[2]/4,d=t[0].dataType,h=Ut(e.k),f=Ut(u),m=Ut(a),_=o.concat([r,a]),y=r>1&&a/m%2===0?2:1,v=ne.size(_)/m/y,p=64,b=[],E=[l,r,s/h],w=ne.convertShape(t[1].dims).slice();w.splice(-1,1,u/f),b.push(...ze(E)),b.push(...ze(w)),b.push(...ze(t[2].dims)),t.length===4&&b.push(...ze(ne.convertShape(t[3].dims)));let T=[l,r,a/m];b.push(...ze(T));let R=P=>{let $=E.length,A=oe("a",t[0].dataType,$,h),C=oe("b",12,w.length,f),U=oe("scales",t[2].dataType,t[2].dims.length),z=[A,C,U],V=t.length===4?oe("zero_points",12,t[3].dims.length):void 0;V&&z.push(V);let k=T.length,K=$e("output",t[0].dataType,k,m),G=jt(t[0].dataType),Z=(()=>{switch(h){case 1:return`array<${G}, 8>`;case 2:return`mat4x2<${G}>`;case 4:return`mat2x4<${G}>`;default:throw new Error(`${h}-component is not supported.`)}})(),X=()=>{let j=`
          // reuse a data
            var input_offset = ${A.indicesToOffset(`${A.type.indices}(batch, row, word_offset)`)};
            var a_data: ${Z};
            for (var j: u32 = 0; j < ${8/h}; j++) {
              a_data[j] = ${A.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let le=0;le<m*y;le++)j+=`
            b_value = ${f===1?`b${le}_data`:`b${le}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${Z}(${Array.from({length:4},(Ee,He)=>`${G}(b_value_lower[${He}]), ${G}(b_value_upper[${He}])`).join(", ")});
            b_dequantized_values = ${h===1?`${Z}(${Array.from({length:8},(Ee,He)=>`(b_quantized_values[${He}] - ${V?`zero_point${le}`:"zero_point"}) * scale${le}`).join(", ")});`:`(b_quantized_values - ${Z}(${Array(8).fill(`${V?`zero_point${le}`:"zero_point"}`).join(",")})) * scale${le};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(le/m)}]${m>1?`[${le%m}]`:""} += ${Array.from({length:8/h},(Ee,He)=>`${h===1?`a_data[${He}] * b_dequantized_values[${He}]`:`dot(a_data[${He}], b_dequantized_values[${He}])`}`).join(" + ")};
          `;return j},te=()=>{let j=`
            var col_index = col * ${m};
            ${V?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${G}(8);`}
            `;for(let le=0;le<m*y;le++)j+=`
            let scale${le} = ${U.getByOffset("col_index * nBlocksPerCol + block")};
            ${V?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${V.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${le} = ${G}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return j},_e=()=>{let j=`col_index = col * ${m};`;for(let le=0;le<m*y;le++)j+=`
            let b${le}_data = ${C.getByIndices(`${C.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return j+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Z};
            var b_dequantized_values: ${Z};`,j};return`
        var<workgroup> workgroup_shared: array<${K.type.value}, ${y*p}>;
        ${P.declareVariables(...z,K)}
        ${P.mainStart([p,1,1])}
          let output_indices = ${K.offsetToIndices(`(global_idx / ${p}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${p}) {
            //process one block
            var word_offset: u32 = block * ${e.blockSize/h};
            ${te()}
            for (var word: u32 = 0; word < ${u}; word += ${f}) {
              ${_e()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${X()}
                word_offset += ${8/h};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${K.type.value} = ${K.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${p}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${K.setByIndices(`${K.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${e.blockSize};${e.bits};${h};${f};${m};${y};${p}`,inputDependencies:Array(t.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:d}],dispatchGroup:{x:v},programUniforms:b}),getShaderSource:R}},vm=(t,e)=>{let n=t[0].dims,i=n.length,r=n[i-2],s=e.k,a=e.n,o=n.slice(0,i-2),l=ne.size(o),u=t[1].dims[2]/4,d=t[0].dataType,h=Ut(e.k),f=Ut(u),m=o.concat([r,a]),_=128,y=a%8===0?8:a%4===0?4:1,v=_/y,p=v*f*8,b=p/h,E=p/e.blockSize,w=ne.size(m)/y,T=[],R=[l,r,s/h],P=ne.convertShape(t[1].dims).slice();P.splice(-1,1,u/f),T.push(...ze(R)),T.push(...ze(P)),T.push(...ze(t[2].dims)),t.length===4&&T.push(...ze(ne.convertShape(t[3].dims)));let $=[l,r,a];T.push(...ze($));let A=C=>{let U=R.length,z=oe("a",t[0].dataType,U,h),V=oe("b",12,P.length,f),k=oe("scales",t[2].dataType,t[2].dims.length),K=[z,V,k],G=t.length===4?oe("zero_points",12,t[3].dims.length):void 0;G&&K.push(G);let Z=$.length,X=$e("output",t[0].dataType,Z),te=jt(t[0].dataType),_e=()=>{switch(h){case 1:return`
          let a_data0 = vec4<${te}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${te}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${te}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${te}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${h}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${z.type.value}, ${b}>;
        var<workgroup> inter_results: array<array<${X.type.value}, ${v}>, ${y}>;
        ${C.declareVariables(...K,X)}
        ${C.mainStart([v,y,1])}
          let output_indices = ${X.offsetToIndices(`workgroup_index * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${E} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${b};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${b}; a_offset += ${_})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${z.getByIndices(`${z.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${z.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${E} + local_id.x;
            ${G?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${G.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${te}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${te}(8);`}
            let scale = ${k.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${V.getByIndices(`${V.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${e.blockSize/h};
            for (var i: u32 = 0; i < ${f}; i++) {
              ${_e()}
              let b_value = ${f===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${te}>(${Array.from({length:4},(j,le)=>`${te}(b_value_lower[${le}]), ${te}(b_value_upper[${le}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${te}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(j,le)=>`${`dot(a_data${le}, b_dequantized_values[${le}])`}`).join(" + ")};
              word_offset += ${8/h};
            }
            workgroupBarrier();
          }

          if (local_idx < ${y}) {
            var output_value: ${X.type.value} = ${X.type.value}(0);
            for (var b = 0u; b < ${v}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${X.setByIndices(`${X.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${e.blockSize};${h};${f};${v};${y}`,inputDependencies:Array(t.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:d}],dispatchGroup:{x:w},programUniforms:T}),getShaderSource:A}},Vv=(t,e)=>{gm(t.inputs,e),e.blockSize===32&&t.adapterInfo.isVendor("intel")&&t.adapterInfo.isArchitecture("gen-12lp")?t.compute(vm(t.inputs,e)):t.compute(_m(t.inputs,e))},Gv=t=>xt(t)}),ym,xm,bm,wm,Sm,Em,Tm,Mm,Wv,b2=ge(()=>{Ke(),et(),nt(),ym=t=>{if(!t||t.length<1)throw new Error("Too few inputs");if(t[0].dataType!==1&&t[0].dataType!==10)throw new Error("Input type must be float or float16.");if(t.length>=2){let e=t[0].dims.length*2===t[1].dims[0];if(t.length===4&&(e=t[3].dims[0]*2===t[1].dims[0]),!e)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},xm=(t,e,n)=>{let i="";for(let r=e-1;r>=0;--r)i+=`
            k = i32(${t.indicesGet("indices",r)}) - ${Ne("uniforms.pads",r,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${Ne("uniforms.x_shape",r,e)})) {
              break;
            }
            offset += k * i32(${Ne("uniforms.x_strides",r,e)});
        `;return`
          value = ${t.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},bm=(t,e,n)=>{let i="";for(let r=e-1;r>=0;--r)i+=`
                k = i32(${t.indicesGet("indices",r)}) - ${Ne("uniforms.pads",r,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${Ne("uniforms.x_shape",r,e)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${Ne("uniforms.x_shape",r,e)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${Ne("uniforms.x_strides",r,e)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},wm=(t,e,n)=>{let i="";for(let r=e-1;r>=0;--r)i+=`
                k = i32(${t.indicesGet("indices",r)}) - ${Ne("uniforms.pads",r,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${Ne("uniforms.x_shape",r,e)})) {
                  k = i32(${Ne("uniforms.x_shape",r,e)}) - 1;
                }
                offset += k * i32(${Ne("uniforms.x_strides",r,e)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Sm=(t,e,n)=>{let i="";for(let r=e-1;r>=0;--r)i+=`
                k = i32(${t.indicesGet("indices",r)}) - ${Ne("uniforms.pads",r,n)};
                if (k < 0)  {
                  k += i32(${Ne("uniforms.x_shape",r,e)}]);
                }
                if (k >= i32(${Ne("uniforms.x_shape",r,e)})) {
                  k -= i32(${Ne("uniforms.x_shape",r,e)});
                }
                offset += k * i32(${Ne("uniforms.x_strides",r,e)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Em=(t,e,n)=>{switch(n.mode){case 0:return xm(t,e,n.pads.length);case 1:return bm(t,e,n.pads.length);case 2:return wm(t,e,n.pads.length);case 3:return Sm(t,e,n.pads.length);default:throw new Error("Invalid mode")}},Tm=(t,e)=>{let n=ne.padShape(t[0].dims.slice(),e.pads),i=t[0].dims,r=ne.size(n),s=[{type:12,data:r},{type:6,data:e.pads}],a=t.length>=3&&t[2].data;e.mode===0&&s.push({type:a?t[2].dataType:1,data:e.value}),s.push(...ze(t[0].dims,n));let o=["rank"],l=u=>{let d=$e("output",t[0].dataType,n.length),h=oe("x",t[0].dataType,i.length),f=h.type.value,m=Em(d,i.length,e),_=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:e.pads.length}];return e.mode===0&&_.push({name:"constant_value",type:a?f:"f32"}),`
            ${u.registerUniforms(_).declareVariables(h,d)}
            ${u.mainStart()}
            ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${d.offsetToIndices("global_idx")};

            var value = ${f}(0);
            ${m}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${e.mode}${a}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(ne.size(n)/64)},programUniforms:s}),getShaderSource:l}},Mm=(t,e)=>{if(t.length>1){let n=t[1].getBigInt64Array(),i=t.length>=3&&t[2].data?t[2].dataType===10?t[2].getUint16Array()[0]:t[2].getFloat32Array()[0]:0,r=t[0].dims.length,s=new Int32Array(2*r).fill(0);if(t.length>=4){let o=t[3].getBigInt64Array();for(let l=0;l<o.length;l++)s[Number(o[l])]=Number(n[l]),s[Number(o[l])+r]=Number(n[l+o.length])}else n.forEach((o,l)=>s[Number(l)]=Number(o));let a=[];return s.forEach(o=>a.push(o)),{mode:e.mode,value:i,pads:a}}else return e},Wv=(t,e)=>{ym(t.inputs);let n=Mm(t.inputs,e);t.compute(Tm(t.inputs,n),{inputs:[0]})}}),Ss,zl,kl,Fl,Bl,Am,Cm,Hl,Vl,qv,Xv,Gl,jv,Kv,Wl,Yv,Zv,Jv,Qv,w2=ge(()=>{In(),Ke(),et(),nt(),Ss=t=>{if(Rt.webgpu.validateInputContent&&(!t||t.length!==1))throw new Error("Pool ops requires 1 input.")},zl=(t,e,n)=>{let i=e.format==="NHWC",r=t.dims.slice();i&&r.splice(1,0,r.pop());let s=Object.hasOwnProperty.call(e,"dilations"),a=e.kernelShape.slice(),o=e.strides.slice(),l=s?e.dilations.slice():[],u=e.pads.slice();no.adjustPoolAttributes(n,r,a,o,l,u);let d=no.computePoolOutputShape(n,r,o,l,a,u,e.autoPad),h=Object.assign({},e);s?Object.assign(h,{kernelShape:a,strides:o,pads:u,dilations:l,cacheKey:e.cacheKey}):Object.assign(h,{kernelShape:a,strides:o,pads:u,cacheKey:e.cacheKey});let f=d.slice();return f.push(f.splice(1,1)[0]),[h,i?f:d]},kl=(t,e)=>{let n=e.format==="NHWC",i=ne.size(t),r=ne.size(e.kernelShape),s=[{type:12,data:i},{type:12,data:r}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(e.kernelShape.length<=2){let o=e.kernelShape[e.kernelShape.length-1],l=e.strides[e.strides.length-1],u=e.pads[e.pads.length/2-1],d=e.pads[e.pads.length-1],h=!!(u+d);s.push({type:12,data:o},{type:12,data:l},{type:12,data:u},{type:12,data:d}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let f=!1;if(e.kernelShape.length===2){let m=e.kernelShape[e.kernelShape.length-2],_=e.strides[e.strides.length-2],y=e.pads[e.pads.length/2-2],v=e.pads[e.pads.length-2];f=!!(y+v),s.push({type:12,data:m},{type:12,data:_},{type:12,data:y},{type:12,data:v}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,a,!0,h,f]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=ne.computeStrides(e.kernelShape);s.push({type:12,data:o},{type:12,data:e.pads},{type:12,data:e.strides}),a.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:e.pads.length},{name:"strides",type:"u32",length:e.strides.length});let l=e.pads.reduce((u,d)=>u+d);return[s,a,!!l,!1,!1]}},Fl=(t,e,n,i,r,s,a,o,l,u,d,h)=>{let f=r.format==="NHWC",m=e.type.value,_=$e("output",e.type.tensor,i);if(r.kernelShape.length<=2){let y="",v="",p="",b=n-(f?2:1);if(d?y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${b}] < 0 || xIndices[${b}]
                      >= uniforms.x_shape[${b}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${e.indicesToOffset("xIndices")}];
                  ${s}
                }`:y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${e.indicesToOffset("xIndices")}];
                  ${s}
                }`,r.kernelShape.length===2){let E=n-(f?3:2);h?v=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${E}] = indices[${E}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${E}] < 0 || xIndices[${E}] >= uniforms.x_shape[${E}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:v=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${E}] = indices[${E}] * uniforms.sh - uniforms.phStart + j;
                `,p=`
              }
            `}return`
            ${t.registerUniforms(l).declareVariables(e,_)}

            ${t.mainStart()}
              ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var value = ${m}(${o});
              var pad = 0;
              ${v}
              ${y}
              ${p}
              ${a}

              output[global_idx] = value;
            }`}else{if(f)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let y=r.kernelShape.length,v=r.pads.length,p="";return u?p=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${e.indicesToOffset("xIndices")}];
                ${s}
              }`:p=`
              }
              let x_val = x[${e.indicesToOffset("xIndices")}];
              ${s}
            `,`
            ${t.registerUniforms(l).declareVariables(e,_)}

            ${t.mainStart()}
              ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var offsets: array<u32, ${y}>;

              var value = ${m}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${y-1}u; j++) {
                  offsets[j] = offset / ${Ne("uniforms.kernelStrides","j",y)};
                  offset -= offsets[j] * ${Ne("uniforms.kernelStrides","j",y)};
                }
                offsets[${y-1}] = offset;

                isPad = false;
                for (var j = ${n-y}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${Ne("uniforms.strides",`j - ${n-y}u`,y)}
                    + offsets[j - ${n-y}u] - ${Ne("uniforms.pads","j - 2u",v)};
                  ${p}
              }
              ${a}

              output[global_idx] = value;
            }`}},Bl=t=>`${t.format};${t.ceilMode};${t.autoPad};${t.kernelShape.length}`,Am=t=>`${Bl(t)};${t.countIncludePad}`,Cm=t=>`${Bl(t)};${t.storageOrder};${t.dilations}`,Hl=t=>({format:t.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][t.auto_pad],ceilMode:t.ceil_mode,kernelShape:t.kernel_shape,strides:t.strides,pads:t.pads}),Vl=(t,e,n,i)=>{let[r,s]=zl(e,i,n),a=oe("x",e.dataType,e.dims.length),o=a.type.value,l="value += x_val;",u="";r.countIncludePad?u+=`value /= ${o}(uniforms.kernelSize);`:u+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[d,h,f,m,_]=kl(s,r);d.push(...ze(e.dims,s));let y=["rank"];return{name:t,shaderCache:{hint:`${i.cacheKey};${f};${m};${_}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(ne.size(s)/64)},programUniforms:d}),getShaderSource:v=>Fl(v,a,e.dims.length,s.length,r,l,u,0,h,f,m,_)}},qv=t=>{let e=t.count_include_pad!==0,n=Hl(t);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:e,...n,cacheKey:""};return{...i,cacheKey:Am(i)}},Xv=(t,e)=>{Ss(t.inputs),t.compute(Vl("AveragePool",t.inputs[0],!1,e))},Gl={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},jv=t=>{let e=t.format;return{format:e,...Gl,cacheKey:e}},Kv=(t,e)=>{Ss(t.inputs),t.compute(Vl("GlobalAveragePool",t.inputs[0],!0,e))},Wl=(t,e,n,i)=>{let[r,s]=zl(e,i,n),a=`
      value = max(x_val, value);
    `,o="",l=oe("x",e.dataType,e.dims.length),u=["rank"],[d,h,f,m,_]=kl(s,r);return d.push(...ze(e.dims,s)),{name:t,shaderCache:{hint:`${i.cacheKey};${f};${m};${_}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(ne.size(s)/64)},programUniforms:d}),getShaderSource:y=>Fl(y,l,e.dims.length,s.length,r,a,o,e.dataType===10?-65504:-1e5,h,f,m,_)}},Yv=(t,e)=>{Ss(t.inputs),t.compute(Wl("MaxPool",t.inputs[0],!1,e))},Zv=t=>{let e=t.storage_order,n=t.dilations,i=Hl(t);if(e!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let r={storageOrder:e,dilations:n,...i,cacheKey:""};return{...r,cacheKey:Cm(r)}},Jv=t=>{let e=t.format;return{format:e,...Gl,cacheKey:e}},Qv=(t,e)=>{Ss(t.inputs),t.compute(Wl("GlobalMaxPool",t.inputs[0],!0,e))}}),Rm,Im,ey,ty,S2=ge(()=>{Ke(),et(),Ot(),nt(),Rm=(t,e)=>{if(t.length<2||t.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(t.length===3&&t[1].dims===t[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(t.length===3&&t[0].dataType!==t[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(t[0].dataType===6&&t.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(t[1].dims.length!==0&&t[1].dims.length!==1&&t[1].dims.length!==t[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(t.length>2){if(t[0].dataType!==t[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(t[1].dims.length!==t[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!t[1].dims.map((n,i)=>n===t[2].dims[i]).reduce((n,i)=>n&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(e.blockSize>0){if(t[1].dims.length===0||t[1].dims.length===1&&t[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!t[1].dims.map((r,s)=>s===e.axis||r===t[0].dims[s]).reduce((r,s)=>r&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(t[1].dims.length!==t[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=t[0].dims[e.axis],i=t[1].dims[e.axis];if(e.blockSize<Math.ceil(n/i)||e.blockSize>Math.ceil(n/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Im=(t,e)=>{let n=ne.normalizeAxis(e.axis,t[0].dims.length),i=t[0].dataType,r=i===3,s=t[0].dims,a=t[1].dataType,o=ne.size(s),l=i===3||i===2,u=l?[Math.ceil(ne.size(t[0].dims)/4)]:t[0].dims,d=t[1].dims,h=t.length>2?t[2]:void 0,f=h?l?[Math.ceil(ne.size(h.dims)/4)]:h.dims:void 0,m=d.length===0||d.length===1&&d[0]===1,_=m===!1&&d.length===1,y=Ut(o),v=m&&(!l||y===4),p=v?y:1,b=v&&!l?y:1,E=oe("input",l?12:i,u.length,b),w=oe("scale",a,d.length),T=h?oe("zero_point",l?12:i,f.length):void 0,R=$e("output",a,s.length,p),P=[E,w];T&&P.push(T);let $=[u,d];h&&$.push(f);let A=[{type:12,data:o/p},{type:12,data:n},{type:12,data:e.blockSize},...ze(...$,s)],C=U=>{let z=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${U.registerUniforms(z).declareVariables(...P,R)}
      ${U.mainStart()}
          ${U.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${R.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${E.getByOffset("global_idx / 4")};
            let x_vec = ${r?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${p===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${E.getByOffset("global_idx")};`};

          // Set scale input
          ${m?`let scale_value= ${w.getByOffset("0")}`:_?`
            let scale_index = ${R.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${w.getByOffset("scale_index")};`:`
            var scale_indices: ${w.type.indices} = output_indices;
            let index = ${w.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${w.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${w.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${T?m?l?`
                let zero_point_input = ${T.getByOffset("0")};
                let zero_point_vec =  ${r?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${T.getByOffset("0")}`:_?l?`
                let zero_point_index = ${R.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${T.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${r?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${R.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${T.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${w.indicesToOffset("scale_indices")};
                let zero_point_input = ${T.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${r?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${T.getByIndices("scale_indices")};`:`let zero_point_value = ${l?r?"i32":"u32":E.type.value}(0);`};
      // Compute and write output
      ${R.setByOffset("global_idx",`${R.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:e.cacheKey,inputDependencies:T?["rank","rank","rank"]:["rank","rank"]},getShaderSource:C,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(o/p/64),y:1,z:1},programUniforms:A})}},ey=(t,e)=>{Rm(t.inputs,e),t.compute(Im(t.inputs,e))},ty=t=>xt({axis:t.axis,blockSize:t.blockSize})}),Pm,Dm,ny,E2=ge(()=>{In(),Ke(),nt(),Pm=(t,e,n)=>{let i=t===e,r=t<e&&n<0,s=t>e&&n>0;if(i||r||s)throw new Error("Range these inputs' contents are invalid.")},Dm=(t,e,n,i)=>{let r=Math.abs(Math.ceil((e-t)/n)),s=[r],a=r,o=[{type:12,data:a},{type:i,data:t},{type:i,data:n},...ze(s)],l=u=>{let d=$e("output",i,s.length),h=d.type.value,f=[{name:"outputSize",type:"u32"},{name:"start",type:h},{name:"delta",type:h}];return`
        ${u.registerUniforms(f).declareVariables(d)}
        ${u.mainStart()}
        ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${h}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o})}},ny=t=>{let e=0,n=0,i=0;t.inputs[0].dataType===6?(e=t.inputs[0].getInt32Array()[0],n=t.inputs[1].getInt32Array()[0],i=t.inputs[2].getInt32Array()[0]):t.inputs[0].dataType===1&&(e=t.inputs[0].getFloat32Array()[0],n=t.inputs[1].getFloat32Array()[0],i=t.inputs[2].getFloat32Array()[0]),Rt.webgpu.validateInputContent&&Pm(e,n,i),t.compute(Dm(e,n,i,t.inputs[0].dataType),{inputs:[]})}}),$m,Lm,iy,ry,T2=ge(()=>{Ke(),et(),Ot(),nt(),$m=(t,e,n,i)=>{if(t!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${t}.`);let r=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,s=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${e}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(t){case"none":return`${e}=${n};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${e}, bitcast<${i}>(${n}));`:`
              ${r}bitcast<${i}>(oldValue) + (${n})${s}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${e}, bitcast<${i}>(${n}));`:`
                ${r}max(bitcast<f32>(oldValue), (${n}))${s}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${e}, bitcast<${i}>(${n}));`:`${r}min(bitcast<${i}>(oldValue), (${n}))${s}`;case"mul":return`${r}(bitcast<${i}>(oldValue) * (${n}))${s}`;default:throw new Error(`Reduction ${t} is not supported.`)}},Lm=(t,e)=>{let n=t[0].dims,i=t[1].dims,r=n,s=1,a=Math.ceil(ne.sizeToDimension(i,i.length-1)/s),o=i[i.length-1],l=ne.sizeFromDimension(n,o),u=[{type:12,data:a},{type:12,data:o},{type:12,data:l},...ze(t[1].dims,t[2].dims,r)],d=h=>{let f=oe("indices",t[1].dataType,t[1].dims.length),m=oe("updates",t[2].dataType,t[2].dims.length,s),_=e.reduction!=="none"&&e.reduction!==""?D_("output",t[0].dataType,r.length):$e("output",t[0].dataType,r.length,s);return`
      ${h.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(f,m,_)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${t[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${$m(e.reduction,"output[data_offset + i]","value",_.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${e.cacheKey}_${e.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:r,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:u}),getShaderSource:d}},iy=t=>xt({reduction:t.reduction}),ry=(t,e)=>{t.compute(Lm(t.inputs,e),{inputs:[t.inputs[1],t.inputs[2]],outputs:[]})}}),Nm,Um,Om,ql,zm,km,Fm,Bm,Hm,Vm,Gm,Wm,Xl,qm,Xm,jm,Km,Ym,sy,ay,M2=ge(()=>{Ke(),et(),Ot(),nt(),Nm=(t,e)=>{if(t.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),t.length>0){if(e.mode==="linear"){if(!(t.length===2||t.length===3||t.length===4&&t[0]===1&&t[1]===1||t.length===4&&t[0]===1&&t[3]===1||t.length===5&&t[0]===1&&t[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(e.mode==="cubic"&&!(t.length===2||t.length===4&&t[0]===1&&t[1]===1||t.length===4&&t[0]===1&&t[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Um=(t,e,n)=>{e.every(r=>r>=0&&r<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(n).fill(1);return e.forEach((r,s)=>i[r]=t[s]),i},Om=(t,e,n,i,r,s)=>{let[a,o,l]=n>10?[1,2,3]:[-1,t.length>1?1:-1,-1],u=t[0].dims.length;if(a>0&&t.length>a&&t[a].dims.length>0)t[a].getFloat32Array().forEach(d=>s.push(d));else if(e.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&t.length>o&&t[o].dims.length===1&&t[o].dims[0]>0){if(t[o].getFloat32Array().forEach(d=>i.push(d)),i.length!==0&&i.length!==u&&n>=18&&i.length!==e.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Nm(i,e),e.axes.length>0&&Um(i,e.axes,u).forEach((d,h)=>i[h]=d)}if(l>0&&t.length>l&&t[l].dims.length===1&&t[l].dims[0]>0&&(t[l].getBigInt64Array().forEach(d=>r.push(Number(d))),r.length!==0&&r.length!==u&&n>=18&&r.length!==e.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(e.axes.length>0){if(i.length!==0&&i.length!==e.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(r.length!==0&&r.length!==e.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof r<"u"&&i.length>0&&r.length>u)throw new Error("Resize requires only of scales or sizes to be specified")},ql=(t,e,n,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${t}) * (${e});
  let whole = ${i}(big / (${n}));
  let fract = ${i}(big % (${n})) / ${i}(${n});
  return whole + fract;
`,zm=(t,e)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${e} { `+(()=>{switch(t){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${e}(xResized) / ${e}(xScale);
          } else {
            ${ql("xResized","lengthOriginal","lengthResized",e)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${e}(xResized) + 0.5) / ${e}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${e}(xResized) + 0.5) / ${e}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${ql("xResized","lengthOriginal - 1","lengthResized - 1",e)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${e}(roiStart) * ${e}(lengthOriginal - 1) +
                        (${e}(xResized) * ${e}(roiEnd - roiStart) * ${e}(lengthOriginal - 1)) /
                        ${e}(lengthResized - 1);
                  } else {
                    return 0.5 * ${e}(roiStart + roiEnd) * ${e}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${e}xScale * ${e}(lengthResized);
                  const adjustment = ${e}(lengthResized) / outputWidth;
                  const center = ${e}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${e}(xResized) + 0.5) / ${e}(xScale)) - 0.5;`;case"half_pixel":return`return ((${e}(xResized) + 0.5) / ${e}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${t} is not supported`)}})()+"}",km=(t,e,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(t){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(e<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${t} is not supported`)}})()+"}",Fm=(t,e,n)=>{let i=new Array(n).fill(0).concat(new Array(n).fill(1)),r=t.length===0?i:t.slice();return e.length>0?(e.forEach((s,a)=>{i[s]=r[a],i[a+n]=r[e.length+a]}),i):r},Bm=(t,e,n,i)=>{let r=[];if(n.length>0)if(i.length>0){if(t.forEach(s=>r.push(s)),Math.max(...i)>t.length)throw new Error("axes is out of bound");i.forEach((s,a)=>r[s]=n[a])}else n.forEach(s=>r.push(s));else{if(e.length===0)throw new Error("Resize requires either scales or sizes.");r=t.map((s,a)=>Math.round(s*e[a]))}return r},Hm=(t,e,n)=>{let i=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(s=>e[s]),Number.MAX_VALUE):Math.min(...e,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(s=>e[s]),Number.MIN_VALUE):Math.max(...e,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();e.fill(1,0,e.length);let r=t.slice();return n.axes.length>0?(n.axes.forEach(s=>e[s]=i),n.axes.forEach(s=>r[s]=Math.round(t[s]*e[s]))):(e.fill(i,0,e.length),r.forEach((s,a)=>r[a]=Math.round(s*e[a]))),r},Vm=(t,e,n,i,r)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> array<${t.type.value}, ${n.length}> {
      var original_indices: array<${t.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var scale = ${Ne("uniforms.scales","i",i)};
        var roi_low = ${Ne("uniforms.roi","i",r)};
        var roi_hi = ${Ne("uniforms.roi",`i + ${e.length}`,r)};
        if (scale == 1.0) {
          original_indices[i] = ${t.type.value}(output_index);
        } else {
          var input_shape_i = ${Ne("uniforms.input_shape","i",e.length)};
          var output_shape_i = ${Ne("uniforms.output_shape","i",n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Gm=(t,e,n,i,r,s,a)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> ${t.type.indices} {
      var input_indices: ${t.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${Ne("uniforms.scales","i",r)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${Ne("uniforms.roi","i",s)};
          var roi_hi = ${Ne("uniforms.roi",`i + ${n.length}`,s)};
          var input_shape_i = ${Ne("uniforms.input_shape","i",n.length)};
          var output_shape_i = ${Ne("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${a} || (original_idx >= 0 && original_idx < ${e.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${e.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${t.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,Wm=(t,e)=>`
    fn checkInputIndices(input_indices: ${t.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${e.length}; i++) {
        var input_index = ${t.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${Ne("uniforms.input_shape","i",e.length)}) {
          return false;
        }
      }
      return true;
    }`,Xl=(t,e,n,i)=>t.rank>i?`
    ${t.indicesSet("input_indices",e,"channel")};
    ${t.indicesSet("input_indices",n,"batch")};
`:"",qm=(t,e,n,i,r)=>{let[s,a,o,l]=n.length===2?[-1,0,1,-1]:[0,2,3,1],u=t.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${u} {
      var input_indices: ${t.type.indices};
      ${t.indicesSet("input_indices",a,`max(0, min(row, ${n[a]} - 1))`)};
      ${t.indicesSet("input_indices",o,`max(0, min(col, ${n[o]} - 1))`)};
      ${Xl(t,l,s,2)}
      return ${t.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${e.type.indices}) -> ${u} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${u} = originalIndices[${a}];
      var col:${u} = originalIndices[${o}];
      ${i?`if (row < 0 || row > (${n[a]} - 1) || col < 0 || col > (${n[o]} - 1)) {
        return ${r};
      }`:""};
      row = max(0, min(row, ${n[a]} - 1));
      col = max(0, min(col, ${n[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${n.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${n.length>2?`u32(originalIndices[${s}])`:"0"};
      var x11: ${u} = getInputValue(batch, channel, row1, col1);
      var x12: ${u} = getInputValue(batch, channel, row1, col2);
      var x21: ${u} = getInputValue(batch, channel, row2, col1);
      var x22: ${u} = getInputValue(batch, channel, row2, col2);
      var dx1: ${u} = abs(row - ${u}(row1));
      var dx2: ${u} = abs(${u}(row2) - row);
      var dy1: ${u} = abs(col - ${u}(col1));
      var dy2: ${u} = abs(${u}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Xm=(t,e,n,i,r,s,a,o,l,u)=>{let d=n.length===2,[h,f]=d?[0,1]:[2,3],m=t.type.value,_=y=>{let v=y===h?"row":"col";return`
      fn ${v}CubicInterpolation(input_indices: ${t.type.indices}, output_indices: ${e.type.indices}) -> ${m} {
        var output_index = ${e.indicesGet("output_indices",y)};
        var originalIdx: ${m} = getOriginalCoordinateFromResizedCoordinate(output_index, ${r[y]},
        ${i[y]}, ${n[y]}, ${s[y]}, ${s[y]} + ${n.length});
        var fractOriginalIdx: ${m} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${n[y]} - 1))) {
          return ${l};
        }
        var data: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${v}: ${m} = originalIdx + ${m}(i);
          if (${v} < 0 || ${v} >= ${n[y]}) {
            ${u?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${l};`:`${v} = max(0, min(${v}, ${n[y]} - 1));`};
          }
        var input_indices_copy: ${t.type.indices} = input_indices;
          ${t.indicesSet("input_indices_copy",y,`u32(${v})`)};
          data[i + 1] = ${y===h?t.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${_(h)};
    ${_(f)};
  fn getCubicInterpolationCoefs(s: ${m}) -> array<${m}, 4> {
    var absS = abs(s);
    var coeffs: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${m} = 1.0 - absS;
    var twoMinusAbsS: ${m} = 2.0 - absS;
    var onePlusAbsS: ${m} = 1.0 + absS;
    coeffs[0] = ((${a} * onePlusAbsS - 5 * ${a}) * onePlusAbsS + 8 * ${a}) * onePlusAbsS - 4 * ${a};
    coeffs[1] = ((${a} + 2) * absS - (${a} + 3)) * absS * absS + 1;
    coeffs[2] = ((${a} + 2) * oneMinusAbsS - (${a} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${a} * twoMinusAbsS - 5 * ${a}) * twoMinusAbsS + 8 * ${a}) * twoMinusAbsS - 4 * ${a};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${m}, 4>, coefs: array<${m}, 4>) -> ${m} {
    var coefsSum: ${m} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${e.type.indices}) -> ${m} {
    var input_indices: ${t.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},jm=(t,e,n,i,r)=>{let[s,a,o,l,u]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],d=t.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${d} {
      var input_indices: ${t.type.indices};
      ${t.indicesSet("input_indices",a,`max(0, min(depth, ${n[a]} - 1))`)};
      ${t.indicesSet("input_indices",o,`max(0, min(height, ${n[o]} - 1))`)};
      ${t.indicesSet("input_indices",l,`max(0, min(width, ${n[l]} - 1))`)};
      ${Xl(t,u,s,3)}
      return ${t.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${e.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${d} = originalIndices[${a}];
      var height:${d} = originalIndices[${o}];
      var width:${d} = originalIndices[${l}];
      ${i?`if (depth < 0 || depth > (${n[a]} - 1) || height < 0 || height > (${n[o]} - 1) || width < 0 || (width > ${n[l]} - 1)) {
      return ${r};
        }`:""};

    depth = max(0, min(depth, ${n[a]} - 1));
      height = max(0, min(height, ${n[o]} - 1));
      width = max(0, min(width, ${n[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${n.length>3?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${n.length>3?`u32(originalIndices[${s}])`:"0"};

      var x111: ${d} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${d} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${d} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${d} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${d} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${d} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${d} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${d} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${d} = abs(depth - ${d}(depth1));
      var dx2: ${d} = abs(${d}(depth2) - depth);
      var dy1: ${d} = abs(height - ${d}(height1));
      var dy2: ${d} = abs(${d}(height2) - height);
      var dz1: ${d} = abs(width - ${d}(width1));
      var dz2: ${d} = abs(${d}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Km=(t,e,n,i,r,s)=>{let a=t.dims,o=Fm(s,e.axes,a.length),l=Bm(a,i,r,e.axes),u=i.slice();i.length===0&&(u=a.map((b,E)=>b===0?1:l[E]/b),e.keepAspectRatioPolicy!=="stretch"&&(l=Hm(a,u,e)));let d=$e("output",t.dataType,l.length),h=oe("input",t.dataType,a.length),f=ne.size(l),m=a.length===l.length&&a.every((b,E)=>b===l[E]),_=e.coordinateTransformMode==="tf_crop_and_resize",y=e.extrapolationValue,v=h.type.value,p=b=>`
      ${m?"":`
      ${zm(e.coordinateTransformMode,v)};
      ${(()=>{switch(e.mode){case"nearest":return`
              ${Wm(h,a)};
              ${km(e.nearestMode,n,v)};
              ${Gm(h,d,a,l,u.length,o.length,_)};
              `;case"linear":return`
              ${Vm(d,a,l,u.length,o.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${qm(h,d,a,_,y)}`;if(a.length===3||a.length===5)return`${jm(h,d,a,_,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${Xm(h,d,a,l,u,o,e.cubicCoeffA,_,e.extrapolationValue,e.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${b.registerUniform("output_size","u32").registerUniform("scales","f32",u.length).registerUniform("roi","f32",o.length).declareVariables(h,d)}
      ${b.mainStart()}
        ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${m?"output[global_idx] = input[global_idx];":`
        let output_indices = ${d.offsetToIndices("global_idx")};
        var input_indices: ${h.type.indices};
        ${(()=>{switch(e.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${h.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${e.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${a.length===2||a.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${e.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${e.cacheKey}|${n}|${u.length>0?e.mode==="cubic"?u:u.length:""}|${r.length>0?r:""}|${o.length>0?o:""}|${m}|${e.mode==="nearest"?a.length:a}`,inputDependencies:["rank"]},getShaderSource:p,getRunData:()=>({outputs:[{dims:l,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:u},{type:1,data:o},...ze(a,l)]})}},Ym=t=>{let e=t.customDataBuffer;return new Uint32Array(e,e.byteOffset,1)[0]},sy=(t,e)=>{let n=[],i=[],r=[],s=Ym(t);if(e.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Om(t.inputs,e,s,n,i,r),t.compute(Km(t.inputs[0],e,s,n,i,r),{inputs:[0]})},ay=t=>{let e=t.antialias,n=t.axes,i=t.coordinateTransformMode,r=t.cubicCoeffA,s=t.excludeOutside!==0,a=t.extrapolationValue,o=t.keepAspectRatioPolicy,l=t.mode,u=t.nearestMode===""?"simple":t.nearestMode;return xt({antialias:e,axes:n,coordinateTransformMode:i,cubicCoeffA:r,excludeOutside:s,extrapolationValue:a,keepAspectRatioPolicy:o,mode:l,nearestMode:u})}}),Zm,Jm,oy,A2=ge(()=>{Ke(),et(),nt(),Zm=t=>{if(!t||t.length<3)throw new Error("layerNorm requires at least 3 inputs.");let e=t[0],n=t[1],i=t[2];if(e.dataType!==n.dataType||e.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(e.dims.length!==3&&e.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let r=e.dims[e.dims.length-1],s=e.dims[e.dims.length-2];if(n.dims[n.dims.length-1]!==r)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==r)throw new Error("Gamma must have the same hidden size as input");if(t.length>3){let a=t[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==r)throw new Error("Beta must have the same hidden size as input")}if(t.length>4){let a=t[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==r)throw new Error("Bias must have the same hidden size as input")}},Jm=(t,e,n,i)=>{let r=e.simplified,s=t[0].dims,a=ne.size(s),o=s,l=a,u=s.slice(-1)[0],d=i?s.slice(0,-1).concat(1):[],h=!r&&t.length>3,f=t.length>4,m=i&&n>1,_=i&&n>2,y=n>3,v=64,p=Ut(u),b=[{type:12,data:l},{type:12,data:p},{type:12,data:u},{type:1,data:e.epsilon}],E=T=>{let R=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],P=[oe("x",t[0].dataType,t[0].dims,p),oe("skip",t[1].dataType,t[1].dims,p),oe("gamma",t[2].dataType,t[2].dims,p)];h&&P.push(oe("beta",t[3].dataType,t[3].dims,p)),f&&P.push(oe("bias",t[4].dataType,t[4].dims,p)),P.push($e("output",t[0].dataType,o,p)),m&&P.push($e("mean_output",1,d)),_&&P.push($e("inv_std_output",1,d)),y&&P.push($e("input_skip_bias_sum",t[0].dataType,o,p));let $=jt(t[0].dataType),A=jt(1,p);return`

      ${T.registerUniforms(R).declareVariables(...P)}
      var<workgroup> sum_shared : array<${A}, ${v}>;
      var<workgroup> sum_squared_shared : array<${A}, ${v}>;

      ${T.mainStart([v,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${v};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${v};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${v-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${f?"bias[offset1d + i]":$+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${y?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Br($,p,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${v};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${zi("sum",p)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${zi("square_sum",p)} / f32(uniforms.hidden_size) ${r?"":"- mean * mean"} + uniforms.epsilon);
        ${m?"mean_output[global_idx] = mean;":""}
        ${_?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${r?"":`- ${$}(mean)`}) *
            ${$}(inv_std_dev) * gamma[offset1d + i]
            ${h?"+ beta[offset1d + i]":""};
        }
      }`},w=[{dims:o,dataType:t[0].dataType}];return n>1&&w.push({dims:d,dataType:1}),n>2&&w.push({dims:d,dataType:1}),n>3&&w.push({dims:s,dataType:t[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${p};${m};${_};${y}`,inputDependencies:t.map((T,R)=>"type")},getShaderSource:E,getRunData:()=>({outputs:w,dispatchGroup:{x:Math.ceil(l/u)},programUniforms:b})}},oy=(t,e)=>{Zm(t.inputs);let n=[0];t.outputCount>1&&n.push(-3),t.outputCount>2&&n.push(-3),t.outputCount>3&&n.push(3),t.compute(Jm(t.inputs,e,t.outputCount,!1),{outputs:n})}}),Qm,Es,eg,jl,tg,ng,ly,uy,C2=ge(()=>{Ke(),et(),Ot(),nt(),Qm=(t,e)=>{if(!t||t.length<1)throw new Error("too few inputs");if(e.axes.length!==0){if(e.axes.length!==e.starts.length||e.axes.length!==e.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(e.starts.length!==e.ends.length)throw new Error("starts and ends must have the same length");t.slice(1).forEach((n,i)=>{if(t[i+1].dataType!==6&&t[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},Es=(t,e)=>{let n=[];if(t.length>e)if(t[e].dataType===7)t[e].getBigInt64Array().forEach(i=>n.push(Number(i)));else if(t[e].dataType===6)t[e].getInt32Array().forEach(i=>n.push(Number(i)));else throw new Error(`Input ${e} must be an array of int32 or int64`);return n},eg=(t,e)=>{if(t.length>1){let n=Es(t,1),i=Es(t,2),r=Es(t,3);return r.length===0&&(r=[...Array(t[0].dims.length).keys()]),xt({starts:n,ends:i,axes:r})}else return e},jl=(t,e,n,i,r)=>{let s=t;return t<0&&(s+=n[i[e]]),r[e]<0?Math.max(0,Math.min(s,n[i[e]]-1)):Math.max(0,Math.min(s,n[i[e]]))},tg=(t,e,n)=>`fn calculateInputIndices(output_indices: ${e.type.indices}) -> ${t.type.indices} {
          var input_indices: ${t.type.indices};
          var carry = 0u;
          for (var i = ${n.length-1}; i >= 0; i--) {
            let input_shape_i = ${Ne("uniforms.input_shape","i",n.length)};
            let steps_i = ${Ne("uniforms.steps","i",n.length)};
            let signs_i = ${Ne("uniforms.signs","i",n.length)};
            let starts_i = ${Ne("uniforms.starts","i",n.length)};
            var output_index = ${e.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${t.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,ng=(t,e)=>{let n=t[0].dims,i=ne.size(n),r=e.axes.length>0?ne.normalizeAxes(e.axes,n.length):[...Array(n.length).keys()],s=Es(t,4);s.forEach(p=>p!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(r.length).fill(1));let a=e.starts.map((p,b)=>jl(p,b,n,r,s)),o=e.ends.map((p,b)=>jl(p,b,n,r,s));if(r.length!==a.length||r.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(r.length!==n.length)for(let p=0;p<n.length;++p)r.includes(p)||(a.splice(p,0,0),o.splice(p,0,n[p]),s.splice(p,0,1));let l=s.map(p=>Math.sign(p));s.forEach((p,b,E)=>{if(p<0){let w=(o[b]-a[b])/p,T=a[b],R=T+w*s[b];a[b]=R,o[b]=T,E[b]=-p}});let u=n.slice(0);r.forEach((p,b)=>{u[p]=Math.ceil((o[p]-a[p])/s[p])});let d={dims:u,dataType:t[0].dataType},h=$e("output",t[0].dataType,u.length),f=oe("input",t[0].dataType,t[0].dims.length),m=ne.size(u),_=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:s.length}],y=[{type:12,data:m},{type:12,data:a},{type:6,data:l},{type:12,data:s},...ze(t[0].dims,u)],v=p=>`
      ${p.registerUniforms(_).declareVariables(f,h)}
        ${tg(f,h,n)}
        ${p.mainStart()}
          ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${h.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${h.setByOffset("global_idx",f.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${a.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[d],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:y})}},ly=(t,e)=>{Qm(t.inputs,e);let n=eg(t.inputs,e);t.compute(ng(t.inputs,n),{inputs:[0]})},uy=t=>{let e=t.starts,n=t.ends,i=t.axes;return xt({starts:e,ends:n,axes:i})}}),ig,rg,cy,dy,R2=ge(()=>{Ke(),et(),Ot(),ki(),nt(),ig=t=>{if(!t||t.length!==1)throw new Error("Softmax op requires 1 input.")},rg=(t,e)=>{let n=t.inputs[0],i=n.dims,r=ne.size(i),s=i.length,a=ne.normalizeAxis(e.axis,s),o=a<i.length-1,l,u=[];o?(u=Array.from({length:s},(P,$)=>$),u[a]=s-1,u[s-1]=a,l=t.compute(En(n,u),{inputs:[n],outputs:[-1]})[0]):l=n;let d=l.dims,h=d[s-1],f=r/h,m=Ut(h),_=h/m,y=64;f===1&&(y=256);let v=(P,$)=>$===4?`max(max(${P}.x, ${P}.y), max(${P}.z, ${P}.w))`:$===2?`max(${P}.x, ${P}.y)`:$===3?`max(max(${P}.x, ${P}.y), ${P}.z)`:P,p=oe("x",l.dataType,l.dims,m),b=$e("result",l.dataType,l.dims,m),E=p.type.value,w=jt(l.dataType)==="f32"?`var threadMax = ${E}(-3.402823e+38f);`:`var threadMax = ${E}(-65504.0h);`,T=P=>`
      var<workgroup> rowMaxShared : ${E};
      var<workgroup> rowSumShared : ${E};
      var<workgroup> threadShared : array<${E}, ${y}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${E} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${E}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${P.registerUniform("packedCols","i32").declareVariables(p,b)}
      ${P.mainStart(y)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${y};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${w}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${E}(${v("threadShared[0]",m)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${E}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${E}(${zi("threadShared[0]",m)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${E}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,R=t.compute({name:"Softmax",shaderCache:{hint:`${m};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:d,dataType:l.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:_}]}),getShaderSource:T},{inputs:[l],outputs:[o?-1:0]})[0];o&&t.compute(En(R,u),{inputs:[R]})},cy=(t,e)=>{ig(t.inputs),rg(t,e)},dy=t=>xt({axis:t.axis})}),Kl,sg,ag,og,hy,I2=ge(()=>{Ke(),et(),nt(),Kl=t=>Array.from(t.getBigInt64Array(),Number),sg=t=>{if(!t||t.length!==2)throw new Error("Tile requires 2 inputs.");if(t[0].dataType!==1&&t[0].dataType!==10&&t[0].dataType!==6&&t[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(t[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(t[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Kl(t[1]).length!==t[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},ag=(t,e)=>{let n=[];for(let i=0;i<t.length;++i)n.push(t[i]*e[i]);return n},og=(t,e)=>{let n=t[0].dims,i=e??Kl(t[1]),r=ag(n,i),s=ne.size(r),a=t[0].dataType,o=oe("input",a,n.length),l=$e("output",a,r.length),u=d=>`
      const inputShape = ${o.indices(...n)};
      ${d.registerUniform("output_size","u32").declareVariables(o,l)}
      ${d.mainStart()}
      ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:r,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...ze(t[0].dims,r)]}),getShaderSource:u}},hy=t=>{sg(t.inputs),t.compute(og(t.inputs),{inputs:[0]})}}),lg,ug,fy,P2=ge(()=>{Ke(),et(),nt(),lg=(t,e,n,i,r)=>{let s=$e("output_data",r,n.length,4),a=oe("a_data",e[1].dataType,e[1].dims.length,4),o=oe("b_data",e[2].dataType,e[2].dims.length,4),l=oe("c_data",e[0].dataType,e[0].dims.length,4),u,d=(h,f,m)=>`select(${f}, ${h}, ${m})`;if(!i)u=s.setByOffset("global_idx",d(a.getByOffset("global_idx"),o.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let h=(f,m,_="")=>{let y=`a_data[index_a${m}][component_a${m}]`,v=`b_data[index_b${m}][component_b${m}]`,p=`bool(c_data[index_c${m}] & (0xffu << (component_c${m} * 8)))`;return`
            let output_indices${m} = ${s.offsetToIndices(`global_idx * 4u + ${m}u`)};
            let offset_a${m} = ${a.broadcastedIndicesToOffset(`output_indices${m}`,s)};
            let offset_b${m} = ${o.broadcastedIndicesToOffset(`output_indices${m}`,s)};
            let offset_c${m} = ${l.broadcastedIndicesToOffset(`output_indices${m}`,s)};
            let index_a${m} = offset_a${m} / 4u;
            let index_b${m} = offset_b${m} / 4u;
            let index_c${m} = offset_c${m} / 4u;
            let component_a${m} = offset_a${m} % 4u;
            let component_b${m} = offset_b${m} % 4u;
            let component_c${m} = offset_c${m} % 4u;
            ${f}[${m}] = ${_}(${d(y,v,p)});
          `};r===9?u=`
            var data = vec4<u32>(0);
            ${h("data",0,"u32")}
            ${h("data",1,"u32")}
            ${h("data",2,"u32")}
            ${h("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:u=`
            ${h("output_data[global_idx]",0)}
            ${h("output_data[global_idx]",1)}
            ${h("output_data[global_idx]",2)}
            ${h("output_data[global_idx]",3)}
          `}return`
        ${t.registerUniform("vec_size","u32").declareVariables(l,a,o,s)}
        ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${u}
      }`},ug=t=>{let e=t[1].dims,n=t[2].dims,i=t[0].dims,r=t[1].dataType,s=!(ne.areEqual(e,n)&&ne.areEqual(n,i)),a=e,o=ne.size(e);if(s){let u=Yr.calcShape(Yr.calcShape(e,n,!1),i,!1);if(!u)throw new Error("Can't perform where op on the given tensors");a=u,o=ne.size(a)}let l=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:u=>lg(u,t,a,s,r),getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:l},...ze(i,e,n,a)]})}},fy=t=>{t.compute(ug(t.inputs))}}),py,D2=ge(()=>{qM(),zc(),XM(),jM(),KM(),YM(),ZM(),n2(),r2(),s2(),a2(),o2(),l2(),u2(),c2(),d2(),h2(),f2(),p2(),m2(),g2(),_2(),v2(),y2(),x2(),$v(),b2(),w2(),S2(),E2(),T2(),Oc(),M2(),zv(),A2(),C2(),R2(),Uv(),I2(),ki(),kc(),P2(),py=new Map([["Abs",[o0]],["Acos",[l0]],["Acosh",[u0]],["Add",[V0]],["ArgMax",[i0,Ku]],["ArgMin",[n0,Ku]],["Asin",[c0]],["Asinh",[d0]],["Atan",[h0]],["Atanh",[f0]],["Attention",[r0]],["AveragePool",[Xv,qv]],["BatchNormalization",[s0]],["BiasAdd",[a0]],["BiasSplitGelu",[H0]],["Cast",[m0,p0]],["Ceil",[_0]],["Clip",[g0]],["Concat",[Q0,ev]],["Conv",[tc,ec]],["ConvTranspose",[cv,uv]],["Cos",[v0]],["Cosh",[y0]],["CumSum",[dv,hv]],["DepthToSpace",[fv,pv]],["DequantizeLinear",[ey,ty]],["Div",[G0]],["Einsum",[mv,gv]],["Elu",[x0,Is]],["Equal",[W0]],["Erf",[b0]],["Exp",[w0]],["Expand",[_v]],["FastGelu",[vv]],["Floor",[S0]],["FusedConv",[tc,ec]],["Gather",[xv,yv]],["GatherElements",[Mv,Tv]],["GatherBlockQuantized",[Sv,Ev]],["GatherND",[bv,wv]],["Gelu",[E0]],["Gemm",[Cv,Av]],["GlobalAveragePool",[Kv,jv]],["GlobalMaxPool",[Qv,Jv]],["Greater",[K0]],["GreaterOrEqual",[Z0]],["GridSample",[Rv,Iv]],["GroupQueryAttention",[kv]],["HardSigmoid",[D0,P0]],["InstanceNormalization",[Fv]],["LayerNormalization",[Bv]],["LeakyRelu",[T0,Is]],["Less",[Y0]],["LessOrEqual",[J0]],["Log",[F0]],["MatMul",[Hv]],["MatMulNBits",[Vv,Gv]],["MaxPool",[Yv,Zv]],["Mul",[q0]],["MultiHeadAttention",[Dv,Pv]],["Neg",[A0]],["Not",[M0]],["Pad",[Wv]],["Pow",[X0]],["QuickGelu",[B0,Is]],["Range",[ny]],["Reciprocal",[C0]],["ReduceMin",[Z_]],["ReduceMean",[q_]],["ReduceMax",[Y_]],["ReduceSum",[Q_]],["ReduceProd",[J_]],["ReduceL1",[X_]],["ReduceL2",[j_]],["ReduceLogSum",[t0]],["ReduceLogSumExp",[K_]],["ReduceSumSquare",[e0]],["Relu",[R0]],["Resize",[sy,ay]],["RotaryEmbedding",[Ov]],["ScatterND",[ry,iy]],["Sigmoid",[I0]],["Sin",[$0]],["Sinh",[L0]],["Slice",[ly,uy]],["SkipLayerNormalization",[oy]],["Split",[Lv,Nv]],["Sqrt",[N0]],["Softmax",[cy,dy]],["Sub",[j0]],["Tan",[U0]],["Tanh",[O0]],["ThresholdedRelu",[k0,Is]],["Tile",[hy]],["Transpose",[L_,N_]],["Where",[fy]]])}),my,$2=ge(()=>{In(),vi(),nt(),my=class{constructor(t){this.backend=t,this.repo=new Map,this.attributesBound=!1}getArtifact(t){return this.repo.get(t)}setArtifact(t,e){this.repo.set(t,e)}run(t,e,n,i,r){ri(t.programInfo.name);let s=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let u of e)o.push({binding:o.length,resource:{buffer:u.buffer}});for(let u of n)o.push({binding:o.length,resource:{buffer:u.buffer}});r&&o.push({binding:o.length,resource:r});let l=s.createBindGroup({layout:t.computePipeline.getBindGroupLayout(0),entries:o,label:t.programInfo.name});if(this.backend.sessionStatus==="capturing"){let u={kernelId:this.backend.currentKernelId,computePipeline:t.computePipeline,bindGroup:l,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(u)}a.setPipeline(t.computePipeline),a.setBindGroup(0,l),a.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),qn(t.programInfo.name)}dispose(){}build(t,e){ri(t.name);let n=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(u=>{n.features.has(u.feature)&&i.push(`enable ${u.extension};`)});let r=$_(e,this.backend.device.limits),s=t.getShaderSource(r),a=`${i.join(`
`)}
${r.additionalImplementations}
${s}`,o=n.createShaderModule({code:a,label:t.name});ft("verbose",()=>`[WebGPU] ${t.name} shader code: ${a}`);let l=n.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:t.name});return qn(t.name),{programInfo:t,computePipeline:l,uniformVariablesInfo:r.variablesInfo}}normalizeDispatchGroupSize(t){let e=typeof t=="number"?t:t.x,n=typeof t=="number"?1:t.y||1,i=typeof t=="number"?1:t.z||1,r=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(e<=r&&n<=r&&i<=r)return[e,n,i];let s=e*n*i,a=Math.ceil(Math.sqrt(s));if(a>r){if(a=Math.ceil(Math.cbrt(s)),a>r)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}),gy={};ts(gy,{WebGpuBackend:()=>_y});var cg,dg,hg,_y,L2=ge(()=>{In(),Ke(),vi(),C_(),GM(),D2(),$2(),cg=(t,e)=>{if(e.length!==t.length)throw new Error(`inputDependencies length ${e.length} is not equal to inputTensors length ${t.length}.`);let n=[];for(let i=0;i<t.length;++i){let r=t[i].dataType;switch(e[i]){case"none":{n.push("");break}case"type":{n.push(`${r}`);break}case"rank":{let s=t[i].dims.length;n.push(`${r};${s}`);break}case"dims":{let s=t[i].dims.join(",");n.push(`${r};${s}`);break}default:throw new Error(`unsupported input dependency: ${e[i]}`)}}return n.join("|")},dg=(t,e,n)=>{let i=t.name;return t.shaderCache?.hint&&(i+="["+t.shaderCache.hint+"]"),i+=":"+n+`:${cg(e,t.shaderCache?.inputDependencies??new Array(e.length).fill("dims"))}`,i},hg=class{constructor(t){t&&(this.architecture=t.architecture,this.vendor=t.vendor)}isArchitecture(t){return this.architecture===t}isVendor(t){return this.vendor===t}},_y=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let t=this.kernelCustomData.get(this.currentKernelId);return t||(t={},this.kernelCustomData.set(this.currentKernelId,t)),t}async initialize(t,e){this.env=t;let n=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:e.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:e.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:e.limits.maxStorageBufferBindingSize,maxBufferSize:e.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:e.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:e.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:e.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:e.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},r=s=>e.features.has(s)&&n.push(s)&&!0;r("chromium-experimental-timestamp-query-inside-passes")||r("timestamp-query"),r("shader-f16"),r("subgroups"),this.device=await e.requestDevice(i),this.adapterInfo=new hg(e.info||await e.requestAdapterInfo()),this.gpuDataManager=P_(this),this.programManager=new my(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,$c(t.logLevel,!!t.debug),this.device.onuncapturederror=s=>{s.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${s.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:e,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let t=this.getCommandEncoder(),e={};this.queryType==="at-passes"&&(e.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=t.beginComputePass(e)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;ri(),this.endComputePass();let t;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),t=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(t,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,t,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&t.mapAsync(GPUMapMode.READ).then(()=>{let e=new BigUint64Array(t.getMappedRange()),n=this.pendingQueries.get(t);for(let i=0;i<e.length/2;i++){let r=n[i],s=r.kernelId,a=this.kernels.get(s),o=a.kernelType,l=a.kernelName,u=r.programName,d=r.inputTensorViews,h=r.outputTensorViews,f=e[i*2],m=e[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=f);let _=Number(f-this.queryTimeBase),y=Number(m-this.queryTimeBase);if(!Number.isSafeInteger(_)||!Number.isSafeInteger(y))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:d.map(v=>({dims:v.dims,dataType:mi(v.dataType)})),outputsMetadata:h.map(v=>({dims:v.dims,dataType:mi(v.dataType)})),kernelId:s,kernelType:o,kernelName:l,programName:u,startTime:_,endTime:y});else{let v="";d.forEach((b,E)=>{v+=`input[${E}]: [${b.dims}] | ${mi(b.dataType)}, `});let p="";h.forEach((b,E)=>{p+=`output[${E}]: [${b.dims}] | ${mi(b.dataType)}, `}),console.log(`[profiling] kernel "${s}|${o}|${l}|${u}" ${v}${p}start time: ${_} ns, execution time: ${y-_} ns`)}Qa("GPU",`${u}::${f}::${m}`)}t.unmap(),this.pendingQueries.delete(t)}),qn()}run(t,e,n,i,r,s){ri(t.name);let a=[];for(let b=0;b<e.length;++b){let E=e[b].data;if(E===0)continue;let w=this.gpuDataManager.get(E);if(!w)throw new Error(`no GPU data for input: ${E}`);a.push(w)}let{outputs:o,dispatchGroup:l,programUniforms:u}=t.getRunData(e),d=n.length===0?o.map((b,E)=>E):n;if(d.length!==o.length)throw new Error(`Output size ${d.length} must be equal to ${o.length}.`);let h=[],f=[];for(let b=0;b<o.length;++b){if(!Number.isInteger(d[b])||d[b]<-3||d[b]>=s)throw new Error(`Invalid output index: ${d[b]}`);if(d[b]===-3)continue;let E=d[b]===-1,w=d[b]===-2,T=E||w?r(o[b].dataType,o[b].dims):i(d[b],o[b].dataType,o[b].dims);if(h.push(T),T.data===0)continue;let R=this.gpuDataManager.get(T.data);if(!R)throw new Error(`no GPU data for output: ${T.data}`);if(E&&this.temporaryData.push(R),w){let P=this.kernelPersistentData.get(this.currentKernelId);P||(P=[],this.kernelPersistentData.set(this.currentKernelId,P)),P.push(R)}f.push(R)}if(a.length!==e.length||f.length!==h.length){if(f.length===0)return qn(t.name),h;throw new Error(`Program ${t.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let m;if(u){let b=0,E=[];u.forEach(P=>{let $=typeof P.data=="number"?[P.data]:P.data;if($.length===0)return;let A=P.type===10?2:4,C,U;P.type===10?(U=$.length>4?16:$.length>2?8:$.length*A,C=$.length>4?16:A*$.length):(U=$.length<=2?$.length*A:16,C=16),b=Math.ceil(b/U)*U,E.push(b);let z=P.type===10?8:4;b+=$.length>4?Math.ceil($.length/z)*C:$.length*A});let w=16;b=Math.ceil(b/w)*w;let T=new ArrayBuffer(b);u.forEach((P,$)=>{let A=E[$],C=typeof P.data=="number"?[P.data]:P.data;if(P.type===6)new Int32Array(T,A,C.length).set(C);else if(P.type===12)new Uint32Array(T,A,C.length).set(C);else if(P.type===10)new Uint16Array(T,A,C.length).set(C);else if(P.type===1)new Float32Array(T,A,C.length).set(C);else throw new Error(`Unsupported uniform type: ${mi(P.type)}`)});let R=this.gpuDataManager.create(b,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(R.buffer,0,T,0,b),this.gpuDataManager.release(R.id),m={offset:0,size:b,buffer:R.buffer}}let _=this.programManager.normalizeDispatchGroupSize(l),y=_[1]===1&&_[2]===1,v=dg(t,e,y),p=this.programManager.getArtifact(v);if(p||(p=this.programManager.build(t,_),this.programManager.setArtifact(v,p),ft("info",()=>`[artifact] key: ${v}, programName: ${t.name}`)),u&&p.uniformVariablesInfo){if(u.length!==p.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${p.uniformVariablesInfo.length}, got ${u.length} in program "${p.programInfo.name}".`);for(let b=0;b<u.length;b++){let E=u[b],w=E.type,T=typeof E.data=="number"?1:E.data.length,[R,P]=p.uniformVariablesInfo[b];if(w!==R||T!==P)throw new Error(`Uniform variable ${b} mismatch: expect type ${R} with size ${P}, got type ${w} with size ${T} in program "${p.programInfo.name}".`)}}if(ft("info",()=>`[ProgramManager] run "${t.name}" (key=${v}) with ${_[0]}x${_[1]}x${_[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let b={kernelId:this.currentKernelId,programName:p.programInfo.name,inputTensorViews:e,outputTensorViews:h};this.pendingKernels.push(b),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(b)}return this.programManager.run(p,a,f,_,m),qn(t.name),h}upload(t,e){this.gpuDataManager.upload(t,e)}memcpy(t,e){this.gpuDataManager.memcpy(t,e)}async download(t,e){await this.gpuDataManager.download(t,e)}alloc(t){return this.gpuDataManager.create(t).id}free(t){return this.gpuDataManager.release(t)}createKernel(t,e,n,i){let r=py.get(t);if(!r)throw new Error(`kernel not implemented: ${t}`);let s={kernelType:t,kernelName:i,kernelEntry:r[0],attributes:[r[1],n]};this.kernels.set(e,s)}releaseKernel(t){let e=this.kernelPersistentData.get(t);if(e){for(let n of e)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(t)}this.kernelCustomData.delete(t),this.kernels.delete(t)}computeKernel(t,e,n){let i=this.kernels.get(t);if(!i)throw new Error(`kernel not created: ${t}`);let r=i.kernelType,s=i.kernelName,a=i.kernelEntry,o=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${r}] ${s}" is not allowed to be called recursively`);this.currentKernelId=t,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),ft("info",()=>`[WebGPU] Start to run kernel "[${r}] ${s}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),a(e,o[1]),0}catch(u){return n.push(Promise.resolve(`[WebGPU] Kernel "[${r}] ${s}" failed. ${u}`)),1}finally{l&&n.push(this.device.popErrorScope().then(u=>u?`GPU validation error for kernel "[${r}] ${s}": ${u.message}`:null));for(let u of this.temporaryData)this.gpuDataManager.release(u.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(t,e,n,i){let r=this.sessionExternalDataMapping.get(t);r||(r=new Map,this.sessionExternalDataMapping.set(t,r));let s=r.get(e),a=this.gpuDataManager.registerExternalBuffer(n,i,s);return r.set(e,[a,n]),a}unregisterBuffers(t){let e=this.sessionExternalDataMapping.get(t);e&&(e.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(t))}getBuffer(t){let e=this.gpuDataManager.get(t);if(!e)throw new Error(`no GPU data for buffer: ${t}`);return e.buffer}createDownloader(t,e,n){return async()=>{let i=await qu(this,t,e);return Lc(i.buffer,n)}}writeTimestamp(t){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,t)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){ft("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){ft("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){ft("info","replay"),this.sessionStatus="replaying";let t=this.capturedCommandList.get(this.currentSessionId),e=this.capturedPendingKernels.get(this.currentSessionId),n=t.length;this.pendingKernels=[];for(let i=0;i<n;i++){let r=this.getComputePassEncoder(),s=t[i];this.writeTimestamp(this.pendingDispatchNumber*2),r.setPipeline(s.computePipeline),r.setBindGroup(0,s.bindGroup),r.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(e[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(t){this.unregisterBuffers(t),this.capturedCommandList.has(t)&&this.capturedCommandList.delete(t),this.capturedPendingKernels.has(t)&&this.capturedPendingKernels.delete(t),this.gpuDataManager.onReleaseSession(t)}onRunStart(t){this.currentSessionId=t,this.setQueryType()}}}),vy={};ts(vy,{init:()=>yy});var Oa,fg,yy,N2=ge(()=>{Ke(),vi(),et(),VM(),Oa=class xy{constructor(e,n,i,r){this.module=e,this.dataType=n,this.data=i,this.dims=r}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let e=ne.size(this.dims);return e===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,e)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let e=ne.size(this.dims);return e===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,e)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let e=ne.size(this.dims);return e===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,e)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let e=ne.size(this.dims);return e===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,e)}reshape(e){if(ne.size(e)!==ne.size(this.dims))throw new Error("Invalid new shape");return new xy(this.module,this.dataType,this.data,e)}},fg=class{constructor(t,e,n){this.module=t,this.backend=e,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=e.adapterInfo;let i=t.PTR_SIZE,r=n/t.PTR_SIZE,s=i===4?"i32":"i64";this.opKernelContext=Number(t.getValue(i*r++,s));let a=Number(t.getValue(i*r++,s));this.outputCount=Number(t.getValue(i*r++,s)),this.customDataOffset=Number(t.getValue(i*r++,"*")),this.customDataSize=Number(t.getValue(i*r++,s));let o=[];for(let l=0;l<a;l++){let u=Number(t.getValue(i*r++,s)),d=Number(t.getValue(i*r++,"*")),h=Number(t.getValue(i*r++,s)),f=[];for(let m=0;m<h;m++)f.push(Number(t.getValue(i*r++,s)));o.push(new Oa(t,u,d,f))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(t,e){let n=e?.inputs?.map(a=>typeof a=="number"?this.inputs[a]:a)??this.inputs,i=e?.outputs??[],r=(a,o,l)=>new Oa(this.module,o,this.output(a,l),l),s=(a,o)=>{let l=rr(a,o);if(!l)throw new Error(`Unsupported data type: ${a}`);let u=l>0?this.backend.gpuDataManager.create(l).id:0;return new Oa(this.module,a,u,o)};return this.backend.run(t,n,i,r,s,this.outputCount)}output(t,e){let n=this.module.stackSave();try{let i=this.module.PTR_SIZE,r=i===4?"i32":"i64",s=this.module.stackAlloc((1+e.length)*i);this.module.setValue(s,e.length,r);for(let a=0;a<e.length;a++)this.module.setValue(s+i*(a+1),e[a],r);return this.module._JsepOutput(this.opKernelContext,t,s)}catch(i){throw new Error(`Failed to generate kernel's output[${t}] with dims [${e}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(n)}}},yy=async(t,e,n,i)=>{let r=e.jsepInit;if(!r)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(t==="webgpu"){let s=(L2(),Bs(gy)).WebGpuBackend,a=new s;await a.initialize(n,i),r("webgpu",[a,o=>a.alloc(Number(o)),o=>a.free(o),(o,l,u,d=!1)=>{if(d)ft("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(l)}, size=${Number(u)}`),a.memcpy(Number(o),Number(l));else{ft("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(l)}, size=${Number(u)}`);let h=e.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(u));a.upload(Number(l),h)}},async(o,l,u)=>{ft("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${l}, size=${u}`),await a.download(Number(o),()=>e.HEAPU8.subarray(Number(l)>>>0,Number(l+u)>>>0))},(o,l,u)=>a.createKernel(o,Number(l),u,e.UTF8ToString(e._JsepGetNodeName(Number(l)))),o=>a.releaseKernel(o),(o,l,u,d)=>{ft("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${u}, kernel=${o}, contextDataOffset=${l}`);let h=new fg(e,a,Number(l));return a.computeKernel(Number(o),h,d)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let s=new I_(n);r("webnn",[s,()=>s.reserveTensorId(),a=>s.releaseTensorId(a),async(a,o,l,u,d)=>s.ensureTensor(a,o,l,u,d),(a,o)=>{s.uploadTensor(a,o)},async(a,o)=>s.downloadTensor(a,o),(a,o)=>s.registerMLContext(a,o),!!n.trace])}}}),pg,Wc,qc,Ri,mg,Yl,ao,Xc,jc,Zl,Kc,Yc,Zc,by=ge(()=>{In(),FM(),BM(),Ke(),gr(),Rc(),E_(),pg=(t,e)=>{It()._OrtInit(t,e)!==0&&wt("Can't initialize onnxruntime.")},Wc=async t=>{pg(t.wasm.numThreads,to(t.logLevel))},qc=async(t,e)=>{It().asyncInit?.();let n=t.webgpu.adapter;if(e==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=t.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let r=t.webgpu.forceFallbackAdapter;if(r!==void 0&&typeof r!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${r}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:r}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(e==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let i=(N2(),Bs(vy)).init;e==="webgpu"&&await i("webgpu",It(),t,n),e==="webnn"&&await i("webnn",It(),t)}},Ri=new Map,mg=t=>{let e=It(),n=e.stackSave();try{let i=e.PTR_SIZE,r=e.stackAlloc(2*i);e._OrtGetInputOutputCount(t,r,r+i)!==0&&wt("Can't get session input/output count.");let s=i===4?"i32":"i64";return[Number(e.getValue(r,s)),Number(e.getValue(r+i,s))]}finally{e.stackRestore(n)}},Yl=(t,e)=>{let n=It(),i=n.stackSave(),r=0;try{let s=n.PTR_SIZE,a=n.stackAlloc(2*s);n._OrtGetInputOutputMetadata(t,e,a,a+s)!==0&&wt("Can't get session input/output metadata.");let o=Number(n.getValue(a,"*"));r=Number(n.getValue(a+s,"*"));let l=n.HEAP32[r/4];if(l===0)return[o,0];let u=n.HEAPU32[r/4+1],d=[];for(let h=0;h<u;h++){let f=Number(n.getValue(r+8+h*s,"*"));d.push(f!==0?n.UTF8ToString(f):Number(n.getValue(r+8+(h+u)*s,"*")))}return[o,l,d]}finally{n.stackRestore(i),r!==0&&n._OrtFree(r)}},ao=t=>{let e=It(),n=e._malloc(t.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${t.byteLength}.`);return e.HEAPU8.set(t,n),[n,t.byteLength]},Xc=async(t,e)=>{let n,i,r=It();Array.isArray(t)?[n,i]=t:t.buffer===r.HEAPU8.buffer?[n,i]=[t.byteOffset,t.byteLength]:[n,i]=ao(t);let s=0,a=0,o=0,l=[],u=[],d=[];try{if([a,l]=await S_(e),e?.externalData&&r.mountExternalData){let w=[];for(let T of e.externalData){let R=typeof T=="string"?T:T.path;w.push(Dc(typeof T=="string"?T:T.data).then(P=>{r.mountExternalData(R,P)}))}await Promise.all(w)}for(let w of e?.executionProviders??[])if((typeof w=="string"?w:w.name)==="webnn"){if(r.shouldTransferToMLTensor=!1,typeof w!="string"){let T=w,R=T?.context,P=T?.gpuDevice,$=T?.deviceType,A=T?.powerPreference;R?r.currentContext=R:P?r.currentContext=await r.webnnCreateMLContext(P):r.currentContext=await r.webnnCreateMLContext({deviceType:$,powerPreference:A})}else r.currentContext=await r.webnnCreateMLContext();break}s=await r._OrtCreateSession(n,i,a),r.webgpuOnCreateSession?.(s),s===0&&wt("Can't create a session."),r.jsepOnCreateSession?.(),r.currentContext&&(r.webnnRegisterMLContext(s,r.currentContext),r.currentContext=void 0,r.shouldTransferToMLTensor=!0);let[h,f]=mg(s),m=!!e?.enableGraphCapture,_=[],y=[],v=[],p=[],b=[];for(let w=0;w<h;w++){let[T,R,P]=Yl(s,w);T===0&&wt("Can't get an input name."),u.push(T);let $=r.UTF8ToString(T);_.push($),v.push(R===0?{name:$,isTensor:!1}:{name:$,isTensor:!0,type:mi(R),shape:P})}for(let w=0;w<f;w++){let[T,R,P]=Yl(s,w+h);T===0&&wt("Can't get an output name."),d.push(T);let $=r.UTF8ToString(T);y.push($),p.push(R===0?{name:$,isTensor:!1}:{name:$,isTensor:!0,type:mi(R),shape:P});{if(m&&e?.preferredOutputLocation===void 0){b.push("gpu-buffer");continue}let A=typeof e?.preferredOutputLocation=="string"?e.preferredOutputLocation:e?.preferredOutputLocation?.[$]??"cpu",C=r.webnnIsGraphOutput;if(A==="cpu"&&C&&C(s,$)){b.push("ml-tensor-cpu-output");continue}if(A!=="cpu"&&A!=="cpu-pinned"&&A!=="gpu-buffer"&&A!=="ml-tensor")throw new Error(`Not supported preferred output location: ${A}.`);if(m&&A!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${A}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);b.push(A)}}let E=null;return b.some(w=>w==="gpu-buffer"||w==="ml-tensor"||w==="ml-tensor-cpu-output")&&(o=r._OrtCreateBinding(s),o===0&&wt("Can't create IO binding."),E={handle:o,outputPreferredLocations:b,outputPreferredLocationsEncoded:b.map(w=>w==="ml-tensor-cpu-output"?"ml-tensor":w).map(w=>Gu(w))}),Ri.set(s,[s,u,d,E,m,!1]),[s,_,y,v,p]}catch(h){throw u.forEach(f=>r._OrtFree(f)),d.forEach(f=>r._OrtFree(f)),o!==0&&r._OrtReleaseBinding(o)!==0&&wt("Can't release IO binding."),s!==0&&r._OrtReleaseSession(s)!==0&&wt("Can't release session."),h}finally{r._free(n),a!==0&&r._OrtReleaseSessionOptions(a)!==0&&wt("Can't release session options."),l.forEach(h=>r._free(h)),r.unmountExternalData?.()}},jc=t=>{let e=It(),n=Ri.get(t);if(!n)throw new Error(`cannot release session. invalid session id: ${t}`);let[i,r,s,a,o]=n;a&&(o&&e._OrtClearBoundOutputs(a.handle)!==0&&wt("Can't clear bound outputs."),e._OrtReleaseBinding(a.handle)!==0&&wt("Can't release IO binding.")),e.jsepOnReleaseSession?.(t),e.webnnOnReleaseSession?.(t),e.webgpuOnReleaseSession?.(t),r.forEach(l=>e._OrtFree(l)),s.forEach(l=>e._OrtFree(l)),e._OrtReleaseSession(i)!==0&&wt("Can't release session."),Ri.delete(t)},Zl=async(t,e,n,i,r,s,a=!1)=>{if(!t){e.push(0);return}let o=It(),l=o.PTR_SIZE,u=t[0],d=t[1],h=t[3],f=h,m,_;if(u==="string"&&(h==="gpu-buffer"||h==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(a&&h!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(h==="gpu-buffer"){let p=t[2].gpuBuffer;_=rr(ir(u),d);{let b=o.jsepRegisterBuffer;if(!b)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');m=b(i,s,p,_)}}else if(h==="ml-tensor"){let p=t[2].mlTensor;_=rr(ir(u),d);let b=o.webnnRegisterMLTensor;if(!b)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');m=b(i,p,ir(u),d)}else{let p=t[2];if(Array.isArray(p)){_=l*p.length,m=o._malloc(_),n.push(m);for(let b=0;b<p.length;b++){if(typeof p[b]!="string")throw new TypeError(`tensor data at index ${b} is not a string`);o.setValue(m+b*l,Bn(p[b],n),"*")}}else{let b=o.webnnIsGraphInput,E=o.webnnIsGraphOutput;if(u!=="string"&&b&&E){let w=o.UTF8ToString(r);if(b(i,w)||E(i,w)){let T=ir(u);_=rr(T,d),f="ml-tensor";let R=o.webnnCreateTemporaryTensor,P=o.webnnUploadTensor;if(!R||!P)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let $=await R(i,T,d);P($,new Uint8Array(p.buffer,p.byteOffset,p.byteLength)),m=$}else _=p.byteLength,m=o._malloc(_),n.push(m),o.HEAPU8.set(new Uint8Array(p.buffer,p.byteOffset,_),m)}else _=p.byteLength,m=o._malloc(_),n.push(m),o.HEAPU8.set(new Uint8Array(p.buffer,p.byteOffset,_),m)}}let y=o.stackSave(),v=o.stackAlloc(4*d.length);try{d.forEach((b,E)=>o.setValue(v+E*l,b,l===4?"i32":"i64"));let p=o._OrtCreateTensor(ir(u),m,_,v,d.length,Gu(f));p===0&&wt(`Can't create tensor for input/output. session=${i}, index=${s}.`),e.push(p)}finally{o.stackRestore(y)}},Kc=async(t,e,n,i,r,s)=>{let a=It(),o=a.PTR_SIZE,l=Ri.get(t);if(!l)throw new Error(`cannot run inference. invalid session id: ${t}`);let u=l[0],d=l[1],h=l[2],f=l[3],m=l[4],_=l[5],y=e.length,v=i.length,p=0,b=[],E=[],w=[],T=[],R=a.stackSave(),P=a.stackAlloc(y*o),$=a.stackAlloc(y*o),A=a.stackAlloc(v*o),C=a.stackAlloc(v*o);try{[p,b]=w_(s),or("wasm prepareInputOutputTensor");for(let k=0;k<y;k++)await Zl(n[k],E,T,t,d[e[k]],e[k],m);for(let k=0;k<v;k++)await Zl(r[k],w,T,t,h[i[k]],y+i[k],m);lr("wasm prepareInputOutputTensor");for(let k=0;k<y;k++)a.setValue(P+k*o,E[k],"*"),a.setValue($+k*o,d[e[k]],"*");for(let k=0;k<v;k++)a.setValue(A+k*o,w[k],"*"),a.setValue(C+k*o,h[i[k]],"*");if(f&&!_){let{handle:k,outputPreferredLocations:K,outputPreferredLocationsEncoded:G}=f;if(d.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${d.length}).`);or("wasm bindInputsOutputs");for(let Z=0;Z<y;Z++){let X=e[Z];await a._OrtBindInput(k,d[X],E[Z])!==0&&wt(`Can't bind input[${Z}] for session=${t}.`)}for(let Z=0;Z<v;Z++){let X=i[Z];r[Z]?.[3]?a._OrtBindOutput(k,h[X],w[Z],0)!==0&&wt(`Can't bind pre-allocated output[${Z}] for session=${t}.`):a._OrtBindOutput(k,h[X],0,G[X])!==0&&wt(`Can't bind output[${Z}] to ${K[Z]} for session=${t}.`)}lr("wasm bindInputsOutputs"),Ri.set(t,[u,d,h,f,m,!0])}a.jsepOnRunStart?.(u),a.webnnOnRunStart?.(u);let U;f?U=await a._OrtRunWithBinding(u,f.handle,v,A,p):U=await a._OrtRun(u,$,P,y,C,v,A,p),U!==0&&wt("failed to call OrtRun().");let z=[],V=[];or("wasm ProcessOutputTensor");for(let k=0;k<v;k++){let K=Number(a.getValue(A+k*o,"*"));if(K===w[k]){z.push(r[k]);continue}let G=a.stackSave(),Z=a.stackAlloc(4*o),X=!1,te,_e=0;try{a._OrtGetTensorData(K,Z,Z+o,Z+2*o,Z+3*o)!==0&&wt(`Can't access output tensor data on index ${k}.`);let j=o===4?"i32":"i64",le=Number(a.getValue(Z,j));_e=a.getValue(Z+o,"*");let Ee=a.getValue(Z+o*2,"*"),He=Number(a.getValue(Z+o*3,j)),J=[];for(let we=0;we<He;we++)J.push(Number(a.getValue(Ee+we*o,j)));a._OrtFree(Ee)!==0&&wt("Can't free memory for tensor dims.");let Q=J.reduce((we,Ie)=>we*Ie,1);te=mi(le);let fe=f?.outputPreferredLocations[i[k]];if(te==="string"){if(fe==="gpu-buffer"||fe==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let we=[];for(let Ie=0;Ie<Q;Ie++){let Te=a.getValue(_e+Ie*o,"*"),ct=a.getValue(_e+(Ie+1)*o,"*"),zt=Ie===Q-1?void 0:ct-Te;we.push(a.UTF8ToString(Te,zt))}z.push([te,J,we,"cpu"])}else if(fe==="gpu-buffer"&&Q>0){let we=a.jsepGetBuffer;if(!we)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let Ie=we(_e),Te=rr(le,Q);if(Te===void 0||!Ic(te))throw new Error(`Unsupported data type: ${te}`);X=!0,z.push([te,J,{gpuBuffer:Ie,download:a.jsepCreateDownloader(Ie,Te,te),dispose:()=>{a._OrtReleaseTensor(K)!==0&&wt("Can't release tensor.")}},"gpu-buffer"])}else if(fe==="ml-tensor"&&Q>0){let we=a.webnnEnsureTensor,Ie=a.webnnIsGraphInputOutputTypeSupported;if(!we||!Ie)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(rr(le,Q)===void 0||!Pc(te))throw new Error(`Unsupported data type: ${te}`);if(!Ie(t,te,!1))throw new Error(`preferredLocation "ml-tensor" for ${te} output is not supported by current WebNN Context.`);let Te=await we(t,_e,le,J,!1);X=!0,z.push([te,J,{mlTensor:Te,download:a.webnnCreateMLTensorDownloader(_e,te),dispose:()=>{a.webnnReleaseTensorId(_e),a._OrtReleaseTensor(K)}},"ml-tensor"])}else if(fe==="ml-tensor-cpu-output"&&Q>0){let we=a.webnnCreateMLTensorDownloader(_e,te)(),Ie=z.length;X=!0,V.push((async()=>{let Te=[Ie,await we];return a.webnnReleaseTensorId(_e),a._OrtReleaseTensor(K),Te})()),z.push([te,J,[],"cpu"])}else{let we=co(te),Ie=new we(Q);new Uint8Array(Ie.buffer,Ie.byteOffset,Ie.byteLength).set(a.HEAPU8.subarray(_e,_e+Ie.byteLength)),z.push([te,J,Ie,"cpu"])}}finally{a.stackRestore(G),te==="string"&&_e&&a._free(_e),X||a._OrtReleaseTensor(K)}}f&&!m&&(a._OrtClearBoundOutputs(f.handle)!==0&&wt("Can't clear bound outputs."),Ri.set(t,[u,d,h,f,m,!1]));for(let[k,K]of await Promise.all(V))z[k][2]=K;return lr("wasm ProcessOutputTensor"),z}finally{a.webnnOnRunEnd?.(u),a.stackRestore(R),E.forEach(U=>a._OrtReleaseTensor(U)),w.forEach(U=>a._OrtReleaseTensor(U)),T.forEach(U=>a._free(U)),p!==0&&a._OrtReleaseRunOptions(p),b.forEach(U=>a._free(U))}},Yc=t=>{let e=It(),n=Ri.get(t);if(!n)throw new Error("invalid session id");let i=n[0],r=e._OrtEndProfiling(i);r===0&&wt("Can't get an profile file name."),e._OrtFree(r)},Zc=t=>{let e=[];for(let n of t){let i=n[2];!Array.isArray(i)&&"buffer"in i&&e.push(i.buffer)}return e}}),Ii,An,Nr,Ts,Ms,za,Jl,ka,Zi,Ji,gg,wy,Sy,Ey,Ty,My,Ay,Cy,Ry=ge(()=>{In(),by(),gr(),Ac(),Ii=()=>!!Rt.wasm.proxy&&typeof document<"u",Nr=!1,Ts=!1,Ms=!1,ka=new Map,Zi=(t,e)=>{let n=ka.get(t);n?n.push(e):ka.set(t,[e])},Ji=()=>{if(Nr||!Ts||Ms||!An)throw new Error("worker not ready")},gg=t=>{switch(t.data.type){case"init-wasm":Nr=!1,t.data.err?(Ms=!0,Jl[1](t.data.err)):(Ts=!0,Jl[0]()),za&&(URL.revokeObjectURL(za),za=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let e=ka.get(t.data.type);t.data.err?e.shift()[1](t.data.err):e.shift()[0](t.data.out);break}}},wy=async()=>{if(!Ts){if(Nr)throw new Error("multiple calls to 'initWasm()' detected.");if(Ms)throw new Error("previous call to 'initWasm()' failed.");if(Nr=!0,Ii())return new Promise((t,e)=>{An?.terminate(),x_().then(([n,i])=>{try{An=i,An.onerror=s=>e(s),An.onmessage=gg,Jl=[t,e];let r={type:"init-wasm",in:Rt};!r.in.wasm.wasmPaths&&(n||Vu)&&(r.in.wasm.wasmPaths={wasm:new URL("/assets/ort-wasm-simd-threaded.jsep-CLmJQkb_.wasm",import.meta.url).href}),An.postMessage(r),za=n}catch(r){e(r)}},e)});try{await Cc(Rt.wasm),await Wc(Rt),Ts=!0}catch(t){throw Ms=!0,t}finally{Nr=!1}}},Sy=async t=>{if(Ii())return Ji(),new Promise((e,n)=>{Zi("init-ep",[e,n]);let i={type:"init-ep",in:{epName:t,env:Rt}};An.postMessage(i)});await qc(Rt,t)},Ey=async t=>Ii()?(Ji(),new Promise((e,n)=>{Zi("copy-from",[e,n]);let i={type:"copy-from",in:{buffer:t}};An.postMessage(i,[t.buffer])})):ao(t),Ty=async(t,e)=>{if(Ii()){if(e?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Ji(),new Promise((n,i)=>{Zi("create",[n,i]);let r={type:"create",in:{model:t,options:{...e}}},s=[];t instanceof Uint8Array&&s.push(t.buffer),An.postMessage(r,s)})}else return Xc(t,e)},My=async t=>{if(Ii())return Ji(),new Promise((e,n)=>{Zi("release",[e,n]);let i={type:"release",in:t};An.postMessage(i)});jc(t)},Ay=async(t,e,n,i,r,s)=>{if(Ii()){if(n.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(r.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return Ji(),new Promise((a,o)=>{Zi("run",[a,o]);let l=n,u={type:"run",in:{sessionId:t,inputIndices:e,inputs:l,outputIndices:i,options:s}};An.postMessage(u,Zc(l))})}else return Kc(t,e,n,i,r,s)},Cy=async t=>{if(Ii())return Ji(),new Promise((e,n)=>{Zi("end-profiling",[e,n]);let i={type:"end-profiling",in:t};An.postMessage(i)});Yc(t)}}),Ql,_g,Iy,U2=ge(()=>{In(),Ry(),Ke(),Mc(),E_(),Ql=(t,e)=>{switch(t.location){case"cpu":return[t.type,t.dims,t.data,"cpu"];case"gpu-buffer":return[t.type,t.dims,{gpuBuffer:t.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[t.type,t.dims,{mlTensor:t.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${t.location} for ${e()}`)}},_g=t=>{switch(t[3]){case"cpu":return new Vn(t[0],t[2],t[1]);case"gpu-buffer":{let e=t[0];if(!Ic(e))throw new Error(`not supported data type: ${e} for deserializing GPU tensor`);let{gpuBuffer:n,download:i,dispose:r}=t[2];return Vn.fromGpuBuffer(n,{dataType:e,dims:t[1],download:i,dispose:r})}case"ml-tensor":{let e=t[0];if(!Pc(e))throw new Error(`not supported data type: ${e} for deserializing MLTensor tensor`);let{mlTensor:n,download:i,dispose:r}=t[2];return Vn.fromMLTensor(n,{dataType:e,dims:t[1],download:i,dispose:r})}default:throw new Error(`invalid data location: ${t[3]}`)}},Iy=class{async fetchModelAndCopyToWasmMemory(t){return Ey(await Dc(t))}async loadModel(t,e){ri();let n;typeof t=="string"?n=await this.fetchModelAndCopyToWasmMemory(t):n=t,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Ty(n,e),qn()}async dispose(){return My(this.sessionId)}async run(t,e,n){ri();let i=[],r=[];Object.entries(t).forEach(h=>{let f=h[0],m=h[1],_=this.inputNames.indexOf(f);if(_===-1)throw new Error(`invalid input '${f}'`);i.push(m),r.push(_)});let s=[],a=[];Object.entries(e).forEach(h=>{let f=h[0],m=h[1],_=this.outputNames.indexOf(f);if(_===-1)throw new Error(`invalid output '${f}'`);s.push(m),a.push(_)});let o=i.map((h,f)=>Ql(h,()=>`input "${this.inputNames[r[f]]}"`)),l=s.map((h,f)=>h?Ql(h,()=>`output "${this.outputNames[a[f]]}"`):null),u=await Ay(this.sessionId,r,o,a,l,n),d={};for(let h=0;h<u.length;h++)d[this.outputNames[a[h]]]=s[h]??_g(u[h]);return qn(),d}startProfiling(){}endProfiling(){Cy(this.sessionId)}}}),Py={};ts(Py,{OnnxruntimeWebAssemblyBackend:()=>rc,initializeFlags:()=>ic,wasmBackend:()=>Dy});var ic,rc,Dy,O2=ge(()=>{In(),Ry(),U2(),ic=()=>{(typeof Rt.wasm.initTimeout!="number"||Rt.wasm.initTimeout<0)&&(Rt.wasm.initTimeout=0);let t=Rt.wasm.simd;if(typeof t!="boolean"&&t!==void 0&&t!=="fixed"&&t!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${t}". Reset it to \`false\` and ignore SIMD feature checking.`),Rt.wasm.simd=!1),typeof Rt.wasm.proxy!="boolean"&&(Rt.wasm.proxy=!1),typeof Rt.wasm.trace!="boolean"&&(Rt.wasm.trace=!1),typeof Rt.wasm.numThreads!="number"||!Number.isInteger(Rt.wasm.numThreads)||Rt.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Rt.wasm.numThreads=1;else{let e=typeof navigator>"u"?wM("node:os").cpus().length:navigator.hardwareConcurrency;Rt.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},rc=class{async init(t){ic(),await wy(),await Sy(t)}async createInferenceSessionHandler(t,e){let n=new Iy;return await n.loadModel(t,e),n}},Dy=new rc});In();In();In();var z2="1.23.0";{let t=(O2(),Bs(Py)).wasmBackend;Fr("webgpu",t,5),Fr("webnn",t,5),Fr("cpu",t,10),Fr("wasm",t,10)}Object.defineProperty(Rt.versions,"web",{value:z2,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $y={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1};function k2(t){let e=t.trim();return e.length===0&&(e="/"),e.startsWith("/")||(e=`/${e}`),e.endsWith("/")||(e=`${e}/`),e}function F2(t,e){if(/^(https?:)?\/\//i.test(e))return e;const n=e.replace(/^\/+/,"");return`${t}${n}`}function Ly(t,e){const n=$y[t],i=typeof n=="string"?n.trim():"";return i.length>0?i:e}function B2(t,e,n={}){const i=$y[t],r=i!==void 0?Number(i):Number.NaN,s=Number.isFinite(r)?r:e,a=n.min??Number.NEGATIVE_INFINITY,o=n.max??Number.POSITIVE_INFINITY;return Math.min(o,Math.max(a,s))}const Ny=k2("/"),H2="models/policy_model_best.onnx",V2=Ly("VITE_POLICY_MODEL_URL",H2),G2=F2(Ny,V2),W2=Ly("VITE_ORT_WASM_BASE_URL","https://cdn.jsdelivr.net/npm/onnxruntime-web@1.23.0/dist/"),q2=B2("VITE_MANUAL_PUSH_STRENGTH",1,{min:0,max:5}),eu=Object.freeze({baseUrl:Ny,policy:{modelUrl:G2},onnxRuntime:{wasmBaseUrl:W2},controls:{manualPushStrength:q2}});function X2(t){var e=t;const n=[];for(var i=new vc({color:e.color,transparent:!0,opacity:.2}),r=new Gt,s=e.stepWidth,a=e.stepHeight,o=e.width/2,l=e.height/2,u=-l;u<=l;u+=a)n.push(new W(-o,0,u)),n.push(new W(o,0,u));for(var u=-o;u<=o;u+=s)n.push(new W(u,0,-l)),n.push(new W(u,0,l));var d=new Xn().setFromPoints(n),h=new dw(d,i);return r.add(h),r}class j2{root;polePivot;cartMesh;trackHalfLength;pushIndicator;pushDirectionVector=new W;pushOffset=new W;poleTipWorld=new W;pushIndicatorTimer=0;pushIndicatorDirection=0;cartWidth=.6;cartHeight=.25;cartDepth=.4;railThickness=.05;trackLength=10;poleLength=1;pushIndicatorDuration=.4;pushIndicatorLength=.3;pushIndicatorHeadLength=.12;pushIndicatorHeadWidth=.07;constructor(e){this.root=new zr,this.trackHalfLength=this.trackLength/2;const n=new Ni(this.trackLength+this.cartWidth,this.railThickness,this.cartDepth*1.2),i=new Ga({color:5592405}),r=new fn(n,i);r.position.y=-this.cartHeight*.5-this.railThickness*.5,r.receiveShadow=!0,e.add(r);const s=new Ni(this.cartWidth,this.cartHeight,this.cartDepth),a=new Ga({color:1668818}),o=new fn(s,a);o.castShadow=!0,this.cartMesh=o,this.root.add(o),this.polePivot=new zr,this.polePivot.position.y=this.cartHeight*.5,this.root.add(this.polePivot);const l=new Ni(.05,this.poleLength,.05),u=new Ga({color:16752640}),d=new fn(l,u);d.castShadow=!0,d.position.y=this.poleLength*.5,this.polePivot.add(d),e.add(this.root),this.pushIndicator=new xw(new W(1,0,0),new W(0,0,0),this.pushIndicatorLength,16726832,this.pushIndicatorHeadLength,this.pushIndicatorHeadWidth),this.pushIndicator.visible=!1,e.add(this.pushIndicator)}update(e,n){this.root.position.x=cn.clamp(e.x,-this.trackHalfLength,this.trackHalfLength),this.polePivot.rotation.z=-e.theta,this.updatePushIndicator(n)}getCartPosition(e){return this.cartMesh.getWorldPosition(e)}showPushIndicator(e,n=1){const i=Math.sign(e);if(i===0)return;const r=cn.clamp(n,.25,5),s=cn.clamp(this.pushIndicatorLength*r,this.pushIndicatorLength*.6,this.pushIndicatorLength*1.8);this.pushIndicator.setLength(s,this.pushIndicatorHeadLength,this.pushIndicatorHeadWidth),this.pushIndicatorDirection=i,this.pushIndicatorTimer=this.pushIndicatorDuration,this.pushIndicator.visible=!0,this.refreshPushIndicatorPosition()}getTrackLength(){return this.trackLength}getCartWidth(){return this.cartWidth}updatePushIndicator(e){this.pushIndicator.visible&&(this.refreshPushIndicatorPosition(),this.pushIndicatorTimer-=e,this.pushIndicatorTimer<=0&&(this.pushIndicator.visible=!1,this.pushIndicatorTimer=0))}refreshPushIndicatorPosition(){this.pushIndicatorDirection!==0&&(this.polePivot.updateMatrixWorld(!0),this.poleTipWorld.set(0,this.poleLength,0),this.polePivot.localToWorld(this.poleTipWorld),this.pushDirectionVector.set(this.pushIndicatorDirection,0,0).normalize(),this.pushIndicator.setDirection(this.pushDirectionVector),this.pushOffset.copy(this.pushDirectionVector).multiplyScalar(.05),this.pushIndicator.position.copy(this.poleTipWorld).add(this.pushOffset),this.pushIndicator.position.y+=.02)}}class K2{state={x:0,xDot:0,theta:0,thetaDot:0};gravity=9.8;massCart=1;massPole=.1;totalMass=this.massCart+this.massPole;halfPoleLength=.5;poleMassLength=this.massPole*this.halfPoleLength;forceMag=10;tau=.02;thetaThresholdRadians=30*Math.PI/180;maxEpisodeSteps=1e3;accumulator=0;appliedForce=0;stepsSinceReset=0;resetFlag=!1;constructor(){this.reset()}advance(e){let n=0;for(this.resetFlag=!1,this.accumulator+=e;this.accumulator>=this.tau;)this.integrateStep(),this.accumulator-=this.tau,n+=1;return n>0&&(this.stepsSinceReset+=n),this.hasEpisodeTerminated()&&this.reset(),{...this.state}}setForce(e){this.appliedForce=cn.clamp(e,-this.forceMag,this.forceMag)}getForceMagnitude(){return this.forceMag}getState(){return{...this.state}}reset(e){this.state.x=e?.x??cn.randFloatSpread(.1),this.state.xDot=e?.xDot??cn.randFloatSpread(.1),this.state.theta=e?.theta??cn.randFloatSpread(.1),this.state.thetaDot=e?.thetaDot??cn.randFloatSpread(.1),this.accumulator=0,this.stepsSinceReset=0,this.appliedForce=0,this.resetFlag=!0}consumeResetFlag(){const e=this.resetFlag;return this.resetFlag=!1,e}integrateStep(){const{x:e,xDot:n,theta:i,thetaDot:r}=this.state,s=Math.sin(i),a=Math.cos(i),o=(this.appliedForce+this.poleMassLength*r*r*s)/this.totalMass,l=(this.gravity*s-a*o)/(this.halfPoleLength*(4/3-this.massPole*a*a/this.totalMass)),u=o-this.poleMassLength*l*a/this.totalMass;this.state.x=e+this.tau*n,this.state.xDot=n+this.tau*u,this.state.theta=i+this.tau*r,this.state.thetaDot=r+this.tau*l}hasEpisodeTerminated(){return Math.abs(this.state.theta)>this.thetaThresholdRadians||this.stepsSinceReset>=this.maxEpisodeSteps}nudgePole(e,n=1){const i=Math.sign(e);if(i===0)return;const r=cn.clamp(n,0,5),s=cn.degToRad(1.5)*r,a=cn.degToRad(45)*r,o=.4*r;this.state.theta+=s*i,this.state.thetaDot+=a*i,this.state.xDot+=o*i;const l=this.thetaThresholdRadians*.99;this.state.theta=cn.clamp(this.state.theta,-l,l)}}class Y2{session;modelUrl;initializationPromise;busy=!1;constructor(e){this.modelUrl=e}async init(){this.session||(this.initializationPromise||(this.initializationPromise=Tc.create(this.modelUrl,{executionProviders:["wasm"]}).then(e=>{this.session=e}).catch(e=>{throw console.error(`Failed to load policy model from ${this.modelUrl}`,e),e}).finally(()=>{this.initializationPromise=void 0})),await this.initializationPromise)}isReady(){return!!this.session}isBusy(){return this.busy}async predictForce(e,n){if(!this.session)throw new Error("Policy session is not initialized");if(this.busy)throw new Error("Policy inference already in progress");this.busy=!0;try{const i=this.session.inputNames[0],r=this.session.outputNames[0];if(!i||!r)throw new Error("Policy model input or output names are missing");const s=new Float32Array([e.x,e.xDot,e.theta,e.thetaDot]),a=new Vn("float32",s,[s.length]),o={[i]:a},u=(await this.session.run(o))[r];if(!u)throw new Error(`Policy model output "${r}" not found`);const d=u.data;if(d.length===0)throw new Error("Policy model returned empty output");let h;if(d.length===1){const f=Number(d[0]);h=cn.clamp(f,-n,n)}else{let f=0,m=Number(d[0]);for(let _=1;_<d.length;_+=1){const y=Number(d[_]);y>m&&(m=y,f=_)}if(d.length===2)h=f===0?-n:n;else{const _=f/(d.length-1)*2-1;h=cn.clamp(_*n,-n,n)}}return h}finally{this.busy=!1}}}class Z2{scene;camera;renderer;controls;clock=new yw;simulator;cartPoleVisual;cameraFollowOffset=new W;cartWorldPosition=new W;policyRunner;policyActionPending=!1;ortWasmBaseUrl;manualPushStrength;nudgeCooldownMs=1e3;leftNudgeButton;rightNudgeButton;leftNudgePointerHandler;rightNudgePointerHandler;leftNudgeClickHandler;rightNudgeClickHandler;swallowClickHandler;supportsPointerEvents=typeof window<"u"&&window.PointerEvent!==void 0;buttonCooldowns=new Map;trackAxis=new W(1,0,0);tmpCameraForward=new W;tmpCameraRight=new W;constructor(e,n){const i=n?.modelUrl??eu.policy.modelUrl,r=n?.ortWasmBaseUrl??eu.onnxRuntime.wasmBaseUrl,s=n?.manualPushStrength??eu.controls.manualPushStrength;this.ortWasmBaseUrl=r,this.manualPushStrength=s,this.scene=new ow,this.scene.background=new mt(15856630),this.camera=new Rn(45,window.innerWidth/window.innerHeight,.1,100),this.camera.position.set(3,2,4),this.camera.lookAt(new W(0,.5,0)),this.renderer=new rM({canvas:e,antialias:!0}),this.renderer.shadowMap.enabled=!0,this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.controls=new aM(this.camera,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.rotateSpeed=3,this.controls.target.set(0,.5,0),this.cameraFollowOffset.copy(this.camera.position).sub(this.controls.target),this.simulator=new K2,this.simulator.setForce(0),this.cartPoleVisual=new j2(this.scene),i&&this.initializePolicy(i),this.addLights(),this.addGround(),this.addFog(),this.setupEventListeners(),this.setupOnScreenControls(),this.animate()}initializePolicy(e){Rt.wasm.wasmPaths||(Rt.wasm.wasmPaths=this.ortWasmBaseUrl);const n=new Y2(e);this.policyRunner=n,n.init().then(()=>{console.info(`[Policy] Loaded ONNX model from ${e}`)}).catch(i=>{console.error("Failed to initialise policy runner",i),this.policyRunner=void 0})}requestPolicyAction(e){!this.policyRunner||!this.policyRunner.isReady()||this.policyRunner.isBusy()||this.policyActionPending||(this.policyActionPending=!0,this.policyRunner.predictForce(e,this.simulator.getForceMagnitude()).then(n=>{this.simulator.setForce(n)}).catch(n=>{console.error("Policy inference failed",n)}).finally(()=>{this.policyActionPending=!1}))}addLights(){const e=new pw(16777215,4473924,.6);e.position.set(0,1,0),this.scene.add(e);const n=new _w(16777215,.8);n.position.set(2,4,2),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.left=-3,n.shadow.camera.right=3,n.shadow.camera.top=3,n.shadow.camera.bottom=-3,this.scene.add(n)}addGround(){const e=new Ws(this.cartPoleVisual.getTrackLength()+this.cartPoleVisual.getCartWidth(),2),n=new Ga({color:14737632,opacity:.3,transparent:!0}),i=new fn(e,n);i.rotation.x=-Math.PI/2,i.position.y=-.18,i.receiveShadow=!0,this.scene.add(i);const r=X2({height:2,width:this.cartPoleVisual.getTrackLength()+this.cartPoleVisual.getCartWidth(),stepHeight:.1,stepWidth:.1,color:8947848});r.position.y=-.179,this.scene.add(r)}addFog(){this.scene.fog=new gc(15856630,1,15)}setupEventListeners(){window.addEventListener("resize",this.onWindowResize),window.addEventListener("keydown",this.onKeyDown)}setupOnScreenControls(){const e=document.querySelector("[data-nudge='left']"),n=document.querySelector("[data-nudge='right']");!e||!n||(this.leftNudgeButton=e,this.rightNudgeButton=n,this.supportsPointerEvents?(this.swallowClickHandler=i=>{i.preventDefault()},this.leftNudgePointerHandler=i=>{if(i.preventDefault(),!(i.currentTarget instanceof HTMLButtonElement))return;const r=i.currentTarget;r.disabled||(r.blur(),this.handleNudge(-1,r))},this.rightNudgePointerHandler=i=>{if(i.preventDefault(),!(i.currentTarget instanceof HTMLButtonElement))return;const r=i.currentTarget;r.disabled||(r.blur(),this.handleNudge(1,r))},e.addEventListener("pointerdown",this.leftNudgePointerHandler),n.addEventListener("pointerdown",this.rightNudgePointerHandler),this.swallowClickHandler&&(e.addEventListener("click",this.swallowClickHandler),n.addEventListener("click",this.swallowClickHandler))):(this.leftNudgeClickHandler=i=>{if(i.preventDefault(),!(i.currentTarget instanceof HTMLButtonElement))return;const r=i.currentTarget;r.disabled||(r.blur(),this.handleNudge(-1,r))},this.rightNudgeClickHandler=i=>{if(i.preventDefault(),!(i.currentTarget instanceof HTMLButtonElement))return;const r=i.currentTarget;r.disabled||(r.blur(),this.handleNudge(1,r))},e.addEventListener("click",this.leftNudgeClickHandler),n.addEventListener("click",this.rightNudgeClickHandler)))}handleNudge(e,n){const i=this.computeCameraRelativeDirection(e);this.simulator.nudgePole(i,this.manualPushStrength),this.cartPoleVisual.showPushIndicator(i,this.manualPushStrength),n&&this.beginButtonCooldown(n)}beginButtonCooldown(e){e.disabled=!0,e.classList.add("is-disabled");const n=this.buttonCooldowns.get(e);n!==void 0&&window.clearTimeout(n);const i=window.setTimeout(()=>{e.disabled=!1,e.classList.remove("is-disabled"),this.buttonCooldowns.delete(e)},this.nudgeCooldownMs);this.buttonCooldowns.set(e,i)}computeCameraRelativeDirection(e){this.camera.getWorldDirection(this.tmpCameraForward),this.tmpCameraRight.crossVectors(this.tmpCameraForward,this.camera.up).normalize();const n=this.tmpCameraRight.dot(this.trackAxis);if(!Number.isFinite(n)||n===0)return e;const i=Math.sign(n)||1;return e*i}onWindowResize=()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)};onKeyDown=e=>{if(e.key==="ArrowLeft"||e.key==="ArrowRight"){if(e.preventDefault(),e.repeat)return;const n=e.key==="ArrowLeft"?-1:1;this.handleNudge(n,void 0)}};animate=()=>{const e=this.clock.getDelta(),n=this.simulator.advance(e),i=this.simulator.consumeResetFlag();this.cartPoleVisual.update(n,e),i||this.requestPolicyAction(n),this.cameraFollowOffset.copy(this.camera.position).sub(this.controls.target),this.cartPoleVisual.getCartPosition(this.cartWorldPosition),this.controls.target.copy(this.cartWorldPosition),this.camera.position.copy(this.cartWorldPosition).add(this.cameraFollowOffset),this.controls.update(),this.renderer.render(this.scene,this.camera),window.requestAnimationFrame(this.animate)};getRenderer(){return this.renderer}teardownOnScreenControls(){this.leftNudgeButton&&(this.leftNudgePointerHandler&&this.leftNudgeButton.removeEventListener("pointerdown",this.leftNudgePointerHandler),this.leftNudgeClickHandler&&this.leftNudgeButton.removeEventListener("click",this.leftNudgeClickHandler),this.swallowClickHandler&&this.leftNudgeButton.removeEventListener("click",this.swallowClickHandler),this.leftNudgeButton.disabled=!1,this.leftNudgeButton.classList.remove("is-disabled")),this.rightNudgeButton&&(this.rightNudgePointerHandler&&this.rightNudgeButton.removeEventListener("pointerdown",this.rightNudgePointerHandler),this.rightNudgeClickHandler&&this.rightNudgeButton.removeEventListener("click",this.rightNudgeClickHandler),this.swallowClickHandler&&this.rightNudgeButton.removeEventListener("click",this.swallowClickHandler),this.rightNudgeButton.disabled=!1,this.rightNudgeButton.classList.remove("is-disabled")),this.leftNudgeButton=void 0,this.rightNudgeButton=void 0,this.leftNudgePointerHandler=void 0,this.rightNudgePointerHandler=void 0,this.leftNudgeClickHandler=void 0,this.rightNudgeClickHandler=void 0,this.swallowClickHandler=void 0;for(const e of this.buttonCooldowns.values())window.clearTimeout(e);this.buttonCooldowns.clear()}dispose(){window.removeEventListener("resize",this.onWindowResize),window.removeEventListener("keydown",this.onKeyDown),this.teardownOnScreenControls(),this.controls.dispose(),this.renderer.dispose()}}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector("canvas.threejs");if(!t)throw new Error('Canvas element with class "threejs" not found');new Z2(t)});
