'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var speechSynthesis=window.speechSynthesis,speak=function(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},c=b.lang,d=c===void 0?'en-US':c,e=b.pitch,f=e===void 0?1:e,g=b.rate,h=g===void 0?1:g,j=speechSynthesis.getVoices(),k=j.find(function(m){return m.lang===d}),l=new SpeechSynthesisUtterance(a);if(!k)throw Error('lang '+d+' not found');l=Object.assign(l,{voice:k,pitch:f,rate:h}),speechSynthesis.speak(l)};exports.default={speak:speak};
