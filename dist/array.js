!function(r,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():r.Array=t()}(this,function(){"use strict";Array.prototype.indexOf||(Array.prototype.indexOf=function(r){if(null==this)throw new TypeError("can't convert "+this+" to object");var t=Object(this),e=t.length>>>0;if(0===e)return-1;var o=arguments.length>1?ToInteger(arguments[1]):0;if(o>=e)return-1;var n;for(o>=0?n=o:(n=e-Math.abs(o),0>n&&(n=0));e>n;){if(n in t&&r===t[n])return n;n++}return-1}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(r){if(null==this)throw new TypeError("can't convert "+this+" to object");var t=Object(this),e=t.length>>>0;if(0===e)return-1;for(var o=arguments.length>1?ToInteger(arguments[1]):e-1,n=o>=0?Math.min(o,e-1):e-Math.abs(o);n>=0;){if(n in t&&r===t[n])return n;n--}return-1}),Array.prototype.every||(Array.prototype.every=function(r){if(null==this)throw new TypeError("can't convert "+this+" to object");var t=Object(this),e=t.length>>>0;if("function"!=typeof r)throw new TypeError(r+" is not a function");for(var o=arguments[1],n=0;e>n;){if(n in t&&!r.call(o,t[n],n,t))return!1;n++}return!0}),Array.prototype.forEach||(Array.prototype.forEach=function(r){if(null==this)throw new TypeError("can't convert "+this+" to object");var t=Object(this),e=t.length>>>0;if("function"!=typeof r)throw new TypeError(r+" is not a function");for(var o=arguments[1],n=0;e>n;)n in t&&r.call(o,t[n],n,t),n++}),Array.prototype.filter||(Array.prototype.filter=function(r){if(null==this)throw new TypeError("can't convert "+this+" to object");var t=Object(this),e=t.length>>>0;if("function"!=typeof r)throw new TypeError(r+" is not a function");for(var o=arguments[1],n=new Array,i=0,a=0;e>i;)i in t&&r.call(o,kValue,i,t)&&(n[a++]=kValue),i++;return n}),Array.prototype.map||(Array.prototype.map=function(r){if(null==this)throw new TypeError("can't convert "+this+" to object");var t=Object(this),e=t.length>>>0;if("function"!=typeof r)throw new TypeError(r+" is not a function");for(var o=arguments[1],n=new Array(e),i=0;e>i;)i in t&&(n[i]=r.call(o,t[i],i,t)),i++;return n}),Array.prototype.some||(Array.prototype.some=function(r){if(null==this)throw new TypeError("can't convert "+this+" to object");var t=Object(this),e=t.length>>>0;if("function"!=typeof r)throw new TypeError(r+" is not a function");for(var o=arguments[1],n=0;e>n;){if(n in t&&r.call(o,t[n],n,t))return!0;n++}return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(r){if(null==this)throw new TypeError("can't convert "+this+" to object");var t=Object(this),e=t.length>>>0;if("function"!=typeof r)throw new TypeError(r+" is not a function");if(0===e&&arguments.length<2)throw new TypeError("reduce of empty array with no initial value");var o,n=0;if(arguments.length>1)o=arguments[1];else{for(var i=!1;!i&&e>n;)i=n in t,i&&(o=t[n]),n++;if(!i)throw new TypeError("reduce of empty array with no initial value")}for(;e>n;)n in t&&(o=r.call(void 0,o,t[n],n,t)),n++;return o}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(r){if(null==this)throw new TypeError("can't convert "+this+" to object");var t=Object(this),e=t.length>>>0;if("function"!=typeof r)throw new TypeError(r+" is not a function");if(0===e&&arguments.length<2)throw new TypeError("reduce of empty array with no initial value");var o,n=e-1;if(arguments.length>1)o=arguments[1];else{for(var i=!1;!i&&n>=0;)i=n in t,i&&(o=t[n]),n--;if(!i)throw new TypeError("reduce of empty array with no initial value")}for(;n>=0;)n in t&&(o=r.call(void 0,o,t[n],n,t)),n--;return o})});