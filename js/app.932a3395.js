(function(t){function e(e){for(var s,n,l=e[0],r=e[1],c=e[2],u=0,h=[];u<l.length;u++)n=l[u],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&h.push(a[n][0]),a[n]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);o&&o(e);while(h.length)h.shift()();return i.push.apply(i,c||[]),k()}function k(){for(var t,e=0;e<i.length;e++){for(var k=i[e],s=!0,l=1;l<k.length;l++){var r=k[l];0!==a[r]&&(s=!1)}s&&(i.splice(e--,1),t=n(n.s=k[0]))}return t}var s={},a={app:0},i=[];function n(e){if(s[e])return s[e].exports;var k=s[e]={i:e,l:!1,exports:{}};return t[e].call(k.exports,k,k.exports,n),k.l=!0,k.exports}n.m=t,n.c=s,n.d=function(t,e,k){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:k})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var k=Object.create(null);if(n.r(k),Object.defineProperty(k,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(k,s,function(e){return t[e]}.bind(null,s));return k},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/Mashhad/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var o=r;i.push([0,"chunk-vendors"]),k()})({0:function(t,e,k){t.exports=k("cd49")},2004:function(t,e,k){},cd49:function(t,e,k){"use strict";k.r(e);k("e260"),k("e6cf"),k("cca6"),k("a79d");var s,a=k("2b0e"),i=k("5f5b"),n=function(){var t=this,e=t.$createElement,k=t._self._c||e;return k("div",{attrs:{id:"app"}},[k("b-card",[k("b-tabs",{attrs:{"content-class":"mt-3"}},[k("b-tab",{attrs:{title:"Dictionary",active:""}},[k("b-button-toolbar",[k("b-button",{attrs:{pill:"",variant:"outline-danger"},on:{click:t.clearWord}},[t._v("Clear")]),k("b-input-group",{attrs:{size:"sm"}},[k("b-form-input",{attrs:{placeholder:"Enter some word"},on:{input:t.searchWord},model:{value:t.wordText,callback:function(e){t.wordText=e},expression:"wordText"}})],1)],1),k("br"),k("b-table",{attrs:{striped:"",hover:"",items:t.wordItems,fields:t.wordFields}})],1),k("b-tab",{attrs:{title:"Calendar"}},[k("b-calendar",{staticClass:"border rounded p-2",attrs:{block:"","value-as-date":""},on:{input:t.refreshDateTxt},model:{value:t.currentSelDate,callback:function(e){t.currentSelDate=e},expression:"currentSelDate"}}),k("center",[k("b-button",{staticClass:"ml-auto",attrs:{size:"sm",variant:"outline-primary"},on:{click:t.setToday}},[t._v(" Set today ")]),k("br"),k("br"),k("b-list-group",[k("b-list-group-item",[t._v(t._s(t.currentSelDTxt[0]))]),k("b-list-group-item",[t._v(t._s(t.currentSelDTxt[1]))]),k("b-list-group-item",[t._v(t._s(t.currentSelDTxt[2]))]),k("b-list-group-item",[t._v(t._s(t.currentSelDTxt[3]))])],1)],1)],1),k("b-tab",{attrs:{title:"World clock"}},[k("b-list-group",[k("b-list-group-item",[k("center",[t._v(" Today is "),k("br"),k("span",{staticClass:"date"},[t._v(t._s(t.dates[1].date))])])],1),t._l(t.dates,(function(e){return k("b-list-group-item",{key:e.place},[k("center",[k("b-button",{attrs:{variant:"outline-secondary"}},[t._v(" "+t._s(e.place)+" ")]),k("span",{staticClass:"time"},[t._v(t._s(e.time))])],1)],1)}))],2)],1),k("b-tab",{attrs:{title:"Input tools"}},[k("b-form-textarea",{attrs:{id:"ta_keys",rows:"1","max-rows":"6",placeholder:"Press some keys"},model:{value:t.keysTxt,callback:function(e){t.keysTxt=e},expression:"keysTxt"}}),k("table",{staticClass:"table keyboard"},[k("tbody",[k("tr",[k("td",{staticClass:"key_white",attrs:{id:"k001"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k001")))]),k("td",{staticClass:"key_white",attrs:{id:"k002"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k002")))]),k("td",{staticClass:"key_white",attrs:{id:"k003"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k003")))]),k("td",{staticClass:"key_white",attrs:{id:"k004"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k004")))]),k("td",{staticClass:"key_white",attrs:{id:"k005"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k005")))]),k("td",{staticClass:"key_white",attrs:{id:"k006"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k006")))]),k("td",{staticClass:"key_white",attrs:{id:"k007"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k007")))]),k("td",{staticClass:"key_white",attrs:{id:"k008"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k008")))]),k("td",{staticClass:"key_white",attrs:{id:"k009"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k009")))]),k("td",{staticClass:"key_white",attrs:{id:"k010"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k010")))]),k("td",{staticClass:"key_white",attrs:{id:"k011"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k011")))]),k("td",{staticClass:"key_white",attrs:{id:"k012"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k012")))]),k("td",{staticClass:"key_white",attrs:{id:"k013"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k013")))]),k("td",{staticClass:"key_gray",attrs:{id:"k014"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k014")))])]),k("tr",[k("td",{staticClass:"key_gray",attrs:{id:"k021"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k021")))]),k("td",{staticClass:"key_white",attrs:{id:"k022"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k022")))]),k("td",{staticClass:"key_white",attrs:{id:"k023"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k023")))]),k("td",{staticClass:"key_white",attrs:{id:"k024"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k024")))]),k("td",{staticClass:"key_white",attrs:{id:"k025"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k025")))]),k("td",{staticClass:"key_white",attrs:{id:"k026"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k026")))]),k("td",{staticClass:"key_white",attrs:{id:"k027"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k027")))]),k("td",{staticClass:"key_white",attrs:{id:"k028"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k028")))]),k("td",{staticClass:"key_white",attrs:{id:"k029"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k029")))]),k("td",{staticClass:"key_white",attrs:{id:"k030"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k030")))]),k("td",{staticClass:"key_white",attrs:{id:"k031"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k031")))]),k("td",{staticClass:"key_white",attrs:{id:"k032"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k032")))]),k("td",{staticClass:"key_white",attrs:{id:"k033"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k033")))]),k("td",{staticClass:"key_gray",attrs:{id:"k034",rowspan:"2"},on:{click:t.onKeyPush}},[k("br"),t._v(t._s(t.l.get("k034")))])]),k("tr",[k("td",{class:{key_gray_on:t.isShift,key_gray:!t.isShift},attrs:{id:"k041"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k041")))]),k("td",{staticClass:"key_white",attrs:{id:"k042"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k042")))]),k("td",{staticClass:"key_white",attrs:{id:"k043"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k043")))]),k("td",{staticClass:"key_white",attrs:{id:"k044"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k044")))]),k("td",{staticClass:"key_white",attrs:{id:"k045"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k045")))]),k("td",{staticClass:"key_white",attrs:{id:"k046"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k046")))]),k("td",{staticClass:"key_white",attrs:{id:"k047"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k047")))]),k("td",{staticClass:"key_white",attrs:{id:"k048"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k048")))]),k("td",{staticClass:"key_white",attrs:{id:"k049"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k049")))]),k("td",{staticClass:"key_white",attrs:{id:"k050"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k050")))]),k("td",{staticClass:"key_white",attrs:{id:"k051"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k051")))]),k("td",{staticClass:"key_white",attrs:{id:"k052"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k052")))]),k("td",{staticClass:"key_white",attrs:{id:"k053"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k053")))])]),k("tr",[k("td",{class:{key_gray_on:t.isShiftOnce,key_gray:!t.isShiftOnce},attrs:{id:"k061"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k061")))]),k("td",{staticClass:"key_white",attrs:{id:"k062"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k062")))]),k("td",{staticClass:"key_white",attrs:{id:"k063"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k063")))]),k("td",{staticClass:"key_white",attrs:{id:"k064"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k064")))]),k("td",{staticClass:"key_white",attrs:{id:"k065"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k065")))]),k("td",{staticClass:"key_white",attrs:{id:"k066"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k066")))]),k("td",{staticClass:"key_white",attrs:{id:"k067"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k067")))]),k("td",{staticClass:"key_white",attrs:{id:"k068"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k068")))]),k("td",{staticClass:"key_white",attrs:{id:"k069"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k069")))]),k("td",{staticClass:"key_white",attrs:{id:"k070"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k070")))]),k("td",{staticClass:"key_white",attrs:{id:"k071"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k071")))]),k("td",{staticClass:"key_white",attrs:{id:"k072"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k072")))]),k("td",{class:{key_gray_on:t.isShiftOnce,key_gray:!t.isShiftOnce},attrs:{id:"k073",colspan:"2"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k073")))])]),k("tr",[k("td",{staticClass:"key_gray",attrs:{id:"k081"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k081")))]),k("td",{staticClass:"key_gray",attrs:{id:"k082"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k082")))]),k("td",{class:{key_gray_on:t.isAlt,key_gray:!t.isAlt},attrs:{id:"k083"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k083")))]),k("td",{staticClass:"key_white",attrs:{id:"k084",colspan:"7"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k084")))]),k("td",{class:{key_gray_on:t.isAlt,key_gray:!t.isAlt},attrs:{id:"k085"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k085")))]),k("td",{staticClass:"key_gray",attrs:{id:"k086",colspan:"2"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k086")))]),k("td",{staticClass:"key_gray",attrs:{id:"k087"},on:{click:t.onKeyPush}},[t._v(t._s(t.l.get("k087")))])])])])],1),k("b-tab",{attrs:{title:"Transliteration"}},[k("label",{attrs:{for:"ta_roman"}},[k("h2",[t._v("Roman:")])]),k("b-form-textarea",{attrs:{id:"ta_roman",rows:"5","max-rows":"6",placeholder:"Write some text"},on:{input:t.onRoman},model:{value:t.romanTxt,callback:function(e){t.romanTxt=e},expression:"romanTxt"}}),k("label",{attrs:{for:"ta_farsi"}},[k("h2",[t._v("Farsi:")])]),k("b-form-textarea",{attrs:{id:"ta_farsi",rows:"5","max-rows":"6",placeholder:"Write some text"},on:{input:t.onFarsi},model:{value:t.farsiTxt,callback:function(e){t.farsiTxt=e},expression:"farsiTxt"}})],1)],1)],1)],1)},l=[],r=k("b85c"),c=k("d4ec"),o=k("bee2"),u=k("262e"),h=k("2caf"),d=(k("4ec9"),k("d3b7"),k("3ca3"),k("ddb0"),k("99af"),k("d81d"),k("a15b"),k("caad"),k("2532"),k("14d9"),k("ac1f"),k("5319"),k("5b81"),k("9ab4")),_=k("1b40"),y=k("3835"),v=(k("00b4"),new Map([["۰","0"],["۱","1"],["۲","2"],["۳","3"],["۴","4"],["۵","5"],["۶","6"],["۷","7"],["۸","8"],["۹","9"]])),g=b(v),f=new Map([["ا","a"],["ب","b"],["ت","t"],["ث","c"],["د","d"],["ر","r"],["ز","z"],["س","s"],["ش","sh"],["غ","gh"],["ف","f"],["ل","l"],["م","m"],["ن","n"],["ه","h"],["پ","p"],["ک","k"],["گ","g"],["ی","ye"],["اس","es"],["ایر","ir|a"],["ب|ز","bo|z"],["ت|ه","te|h"],["ج|م","jo|m"],["د|ر","da|r"],["ر|گ","or|g"],["ر|ی","ri|ye"],["س|ل","sa|l"],["س|گ","sa|g"],["فی","fi"],["م|ش","ma|sh"],["مو","mu"],["م|ی","mi|ye"],["ن|س","ne|s"],["ه|د","ha|d"],["هو","hu"],["پ|د","pe|d"],["چ|ک","cha|k"],["کو","ku"],["است","ast"]]),p=b(f);function b(t){var e,k=new Map,s=Object(r["a"])(t.entries());try{for(s.s();!(e=s.n()).done;){var a=Object(y["a"])(e.value,2),i=a[0],n=a[1];k.set(n,i)}}catch(l){s.e(l)}finally{s.f()}return k}function w(t){return/^\s*$/.test(t)}function m(t){return P(t,!1,!0,g,p)}function C(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return P(t,e,!1,v,f)}function P(t,e,k,s,a){if(void 0===t||null===t)return"";for(var i=k?t.toLowerCase():t,n="",l=1,r=0;r<i.length;r+=l){l=1;var c=i.charAt(r);if(w(c))n+=c;else{var o=s.get(c);if(void 0===o){var u=r+1<i.length?i.charAt(r+1):null,h=r+2<i.length?i.charAt(r+2):null,d=r+3<i.length?i.charAt(r+3):null;o=a.get("".concat(c).concat(u,"|").concat(h).concat(d)),l=2,void 0===o&&(o=a.get("".concat(c).concat(u).concat(h,"|").concat(d)),l=3),void 0===o&&(o=a.get("".concat(c).concat(u,"|").concat(h)),l=2),void 0===o&&(o=a.get("".concat(c).concat(u).concat(h)),l=3),void 0===o&&(o=a.get("".concat(c,"|").concat(u)),l=1),void 0===o&&(o=a.get("".concat(c).concat(u)),l=2),void 0===o&&(o=a.get(c),l=1),void 0===o?n+="_":(o=o.split("|")[0],e&&(0===n.length||w(n.charAt(n.length-1)))&&(o=o.toUpperCase().charAt(0)+o.substring(1)),n+=o)}else n+=o}}return n}var K=s=function(t){Object(u["a"])(k,t);var e=Object(h["a"])(k);function k(){var t;return Object(c["a"])(this,k),t=e.apply(this,arguments),t.wordText="",t.maxWordCount=16,t.wordItems=[],t.wordFields=[{key:"p",label:"Farsi",sortable:!0},{key:"r",label:"Roman",sortable:!0},{key:"d",label:"Deutsch",sortable:!0}],t.allWordItems=[],t.currentSelDTxt=["---","---"],t.currentSelDate=s.getNowDate(),t.dates=s.getAllDates(),t.fa_bn=new Map([["k001","÷"],["k002","!"],["k003","´"],["k004","ر"],["k005","؋"],["k006","%"],["k007","×"],["k008","⸲"],["k009","*"],["k010",")"],["k011","("],["k012","_"],["k013","+"],["k014","←"],["k021","⇆"],["k022","◌ْ"],["k023","◌ٌ"],["k024","◌ٍ"],["k025","◌ً"],["k026","◌ُ"],["k027","◌ِ"],["k028","◌َ"],["k029","◌ّ"],["k030","]"],["k031","["],["k032","}"],["k033","{"],["k034","↵"],["k041","⇩"],["k042","ؤ"],["k043","ئ"],["k044","ي"],["k045","إ"],["k046","أ"],["k047","آ"],["k048","ة"],["k049","»"],["k050","«"],["k051",":"],["k052","⸵"],["k053","|"],["k061","⇧"],["k062",">"],["k063","ك"],["k064","◌ٓ"],["k065","\\"],["k066","◌ٰ"],["k067","پول"],["k068","◌ٔ"],["k069","ء"],["k070",">"],["k071","<"],["k072","⸮"],["k073","⇧"],["k081","⎈"],["k083","⎇"],["k084"," "],["k085","⎇"],["k087","⎈"],["k086","🇦🇫"]]),t.fa_ln=new Map([["k001","پ"],["k002","۱"],["k003","۲"],["k004","۳"],["k005","۴"],["k006","۵"],["k007","۶"],["k008","۷"],["k009","۸"],["k010","۹"],["k011","۰"],["k012","-"],["k013","="],["k014","←"],["k021","⇆"],["k022","ض"],["k023","ص"],["k024","ث"],["k025","ق"],["k026","ف"],["k027","غ"],["k028","ع"],["k029","ه"],["k030","خ"],["k031","ح"],["k032","ج"],["k033","چ"],["k034","↵"],["k042","ش"],["k053","ژ"],["k043","س"],["k044","ی"],["k045","ب"],["k046","ل"],["k047","ا"],["k048","ت"],["k049","ن"],["k050","م"],["k051","ک"],["k052","گ"],["k062","<"],["k063","ظ"],["k064","ط"],["k065","ز"],["k066","ر"],["k067","ذ"],["k068","د"],["k070","و"],["k081","⎈"],["k083","⎇"],["k084"," "],["k085","⎇"],["k087","⎈"],["k071","."],["k072","/"],["k069","ئ"],["k073","⇧"],["k041","⇩"],["k061","⇧"],["k086","🇦🇫"]]),t.fa_la=new Map([["k001","~"],["k002","`"],["k003","@"],["k004","#"],["k005","$"],["k006","%"],["k007","^"],["k008","&"],["k009","·"],["k010","…"],["k011","¦"],["k012","_"],["k013","="],["k014","←"],["k021","⇆"],["k022","°"],["k023","ص"],["k024","€"],["k025","("],["k026",")"],["k027","◌ٖ"],["k028","ٱ"],["k029","◌ٟ"],["k030","'"],["k031",'"'],["k032","ځ"],["k033","څ"],["k034","↵"],["k041","⇩"],["k042","ښ"],["k043","ۍ"],["k044","ی"],["k045","ې"],["k046","ڷ"],["k047","-"],["k048","ټ"],["k049","ڼ"],["k050","ں"],["k051",";"],["k052","ګ"],["k053","?"],["k061","⇧"],["k062","|"],["k063","ے"],["k064","ڑ"],["k065","ږ"],["k066","ړ"],["k067","ڈ"],["k068","ډ"],["k069","ٹ"],["k070",","],["k071","ۇ"],["k072","ۉ"],["k073","⇧"],["k081","⎈"],["k083","⎇"],["k084"," "],["k085","⎇"],["k087","⎈"],["k086","🇦🇫"]]),t.fa_ba=t.fa_la,t.de_bn=new Map([["k001","°"],["k002","!"],["k003",'"'],["k004","§"],["k005","$"],["k006","%"],["k007","&"],["k008","/"],["k009","("],["k010",")"],["k011","="],["k012","?"],["k013","`"],["k014","←"],["k021","⇆"],["k022","Q"],["k023","W"],["k024","E"],["k025","R"],["k026","T"],["k027","Z"],["k028","U"],["k029","I"],["k030","O"],["k031","P"],["k032","Ü"],["k033","*"],["k034","↵"],["k041","⇩"],["k042","A"],["k043","S"],["k044","D"],["k045","F"],["k046","G"],["k047","H"],["k048","J"],["k049","K"],["k050","L"],["k051","Ö"],["k052","Ä"],["k053","'"],["k061","⇧"],["k062",">"],["k063","Y"],["k064","X"],["k065","C"],["k066","V"],["k067","B"],["k068","N"],["k069","M"],["k070",";"],["k071",":"],["k072","_"],["k073","⇧"],["k081","⎈"],["k083","⎇"],["k084"," "],["k085","⎇"],["k087","⎈"],["k086","🇩🇪"]]),t.de_ln=new Map([["k001","^"],["k002","1"],["k003","2"],["k004","3"],["k005","4"],["k006","5"],["k007","6"],["k008","7"],["k009","8"],["k010","9"],["k011","0"],["k012","ß"],["k013","´"],["k014","←"],["k021","⇆"],["k022","q"],["k023","w"],["k024","e"],["k025","r"],["k026","t"],["k027","z"],["k028","u"],["k029","i"],["k030","o"],["k031","p"],["k032","ü"],["k033","+"],["k034","↵"],["k041","⇩"],["k042","a"],["k043","s"],["k044","d"],["k045","f"],["k046","g"],["k047","h"],["k048","j"],["k049","k"],["k050","l"],["k051","ö"],["k052","ä"],["k053","#"],["k061","⇧"],["k062","<"],["k063","y"],["k064","x"],["k065","c"],["k066","v"],["k067","b"],["k068","n"],["k069","m"],["k070",","],["k071","."],["k072","-"],["k073","⇧"],["k081","⎈"],["k083","⎇"],["k084"," "],["k085","⎇"],["k087","⎈"],["k086","🇩🇪"]]),t.de_ba=new Map([["k001","″"],["k002","¡"],["k003","⅛"],["k004","£"],["k005","¤"],["k006","⅜"],["k007","⅝"],["k008","⅞"],["k009","™"],["k010","±"],["k011","°"],["k012","¿"],["k013","˛"],["k014","←"],["k021","⇆"],["k022","Ω"],["k023","Ł"],["k024","€"],["k025","®"],["k026","Ŧ"],["k027","¥"],["k028","↑"],["k029","ı"],["k030","Ø"],["k031","Þ"],["k032","˚"],["k033","¯"],["k034","↵"],["k041","⇩"],["k042","Æ"],["k043","ẞ"],["k044","Ð"],["k045","ª"],["k046","Ŋ"],["k047","Ħ"],["k048","˙"],["k049","&"],["k050","Ł"],["k051","."],["k052","ˇ"],["k053","˘"],["k061","⇧"],["k062","ˍ"],["k063","›"],["k064","‹"],["k065","©"],["k066","‚"],["k067","‘"],["k068","’"],["k069","º"],["k070","×"],["k071","÷"],["k072","—"],["k073","⇧"],["k081","⎈"],["k083","⎇"],["k084"," "],["k085","⎇"],["k087","⎈"],["k086","🇩🇪"]]),t.de_la=new Map([["k001","´"],["k002","¹"],["k003","²"],["k004","³"],["k005","¼"],["k006","½"],["k007","¬"],["k008","{"],["k009","["],["k010","]"],["k011","}"],["k012","\\"],["k013","¸"],["k014","←"],["k021","⇆"],["k022","@"],["k023","ł"],["k024","€"],["k025","¶"],["k026","ŧ"],["k027","←"],["k028","↓"],["k029","→"],["k030","ø"],["k031","þ"],["k032","¨"],["k033","~"],["k034","↵"],["k041","⇩"],["k042","æ"],["k043","ſ"],["k044","ð"],["k045","đ"],["k046","ŋ"],["k047","ħ"],["k048","."],["k049","ĸ"],["k050","ł"],["k051","˝"],["k052","^"],["k053","’"],["k061","⇧"],["k062","|"],["k063","»"],["k064","«"],["k065","¢"],["k066","„"],["k067","“"],["k068","”"],["k069","µ"],["k070","·"],["k071","…"],["k072","–"],["k073","⇧"],["k081","⎈"],["k083","⎇"],["k084"," "],["k085","⎇"],["k087","⎈"],["k086","🇩🇪"]]),t.l=new Map,t.keysTxt="",t.isFarsi=!0,t.isShiftOnce=!1,t.isShift=!1,t.isAlt=!1,t.romanTxt="",t.farsiTxt="",t}return Object(o["a"])(k,[{key:"clearWord",value:function(){this.wordText="",this.wordItems=[]}},{key:"reloadDict",value:function(){var t=this,e="raw.githubusercontent.com",k="husaft",s="Mashhad",a="german",i="https://".concat(e,"/").concat(k,"/").concat(s,"/main/dict/").concat(a,".json");fetch(i).then((function(t){return t.json()})).then((function(e){var k=e.map((function(t){var e={p:t.p,r:t.r,d:t.d.join(", ")};return e}));t.allWordItems=k,t.searchWord()}))}},{key:"searchWord",value:function(){if(0!=this.allWordItems.length){var t,e=s.patchLatin(this.wordText.toLowerCase()),k=[],a=Object(r["a"])(this.allWordItems);try{for(a.s();!(t=a.n()).done;){var i=t.value;if((i.p.includes(e)||s.patchLatin(i.r).includes(e)||i.d.toLowerCase().includes(e))&&(k.push(i),k.length>=this.maxWordCount))break}}catch(n){a.e(n)}finally{a.f()}this.wordItems=k}else this.reloadDict()}},{key:"refreshDateTxt",value:function(){var t={dateStyle:"full"};this.currentSelDTxt=[this.currentSelDate.toLocaleDateString("fa-IR",t),this.currentSelDate.toLocaleDateString("en-IR-u-ca-persian",t),this.currentSelDate.toLocaleDateString("ar-SA",t),this.currentSelDate.toLocaleDateString("en-SA-u-ca-islamic-umalqura",t)]}},{key:"setToday",value:function(){this.currentSelDate=s.getNowDate(),this.refreshDateTxt()}},{key:"getLayout",value:function(){return this.isFarsi?this.isShift||this.isShiftOnce?this.isAlt?this.fa_ba:this.fa_bn:this.isAlt?this.fa_la:this.fa_ln:this.isShift||this.isShiftOnce?this.isAlt?this.de_ba:this.de_bn:this.isAlt?this.de_la:this.de_ln}},{key:"switchLayout",value:function(){this.l=this.getLayout()}},{key:"enableClock",value:function(){var t=this;setInterval((function(){t.dates=s.getAllDates()}),3e4)}},{key:"mounted",value:function(){this.switchLayout(),this.enableClock(),this.refreshDateTxt()}},{key:"onKeyPush",value:function(t){var e=t.target.id,k=this.l.get(e);if(void 0!==k){if("⎈"!==k)return"🇩🇪"===k?(this.isFarsi=!0,void this.switchLayout()):"🇦🇫"===k?(this.isFarsi=!1,void this.switchLayout()):"⎇"===k?(this.isAlt=!this.isAlt,void this.switchLayout()):"⇩"===k?(this.isShift=!this.isShift,void this.switchLayout()):"⇧"===k?(this.isShiftOnce=!this.isShiftOnce,void this.switchLayout()):void("←"!==k?("↵"===k&&(k="\n"),"⇆"===k&&(k="\t"),this.isShiftOnce&&(this.isShiftOnce=!1,this.switchLayout()),this.keysTxt+=k):this.keysTxt=this.keysTxt.substring(0,this.keysTxt.length-1));this.keysTxt=""}}},{key:"onRoman",value:function(){this.farsiTxt=m(this.romanTxt)}},{key:"onFarsi",value:function(){this.romanTxt=C(this.farsiTxt)}}],[{key:"patchLatin",value:function(t){return t.replaceAll("ā","a").replaceAll("č","c").replaceAll("ǧ","g").replaceAll("ḫ","h").replaceAll("š","s").replaceAll("ʻ","").replaceAll("ž","z")}},{key:"getNowDate",value:function(){var t=new Date;return new Date(t.getFullYear(),t.getMonth(),t.getDate())}},{key:"getTimeZones",value:function(){var t=[{place:"United States",zone:"America/New_York"},{place:"Deutschland",zone:"Europe/Berlin"},{place:"ایران",zone:"Asia/Tehran"},{place:"افغانستان",zone:"Asia/Kabul"}];return t}},{key:"getTimeOpts",value:function(t){var e={day:"2-digit",month:"short",year:"numeric",hour12:!1,hour:"numeric",minute:"2-digit",timeZone:t};return e}},{key:"getDate",value:function(t,e){var k=s.getTimeOpts(t),a=new Date,i=a.toLocaleString("en",k),n=i.split(","),l=n[0].split(" "),r=l[0],c=l[1],o=n[1],u=c+" "+r+" "+o,h=n[2];return{date:u,time:h,place:e}}},{key:"getAllDates",value:function(){return s.getTimeZones().map((function(t){return s.getDate(t.zone,t.place)}))}}]),k}(_["b"]);K=s=Object(d["a"])([Object(_["a"])({components:{}})],K);var x=K,T=x,S=(k("d4d6"),k("2877")),D=Object(S["a"])(T,n,l,!1,null,null,null),O=D.exports;k("f9e3"),k("2dd8");a["default"].config.productionTip=!0,a["default"].use(i["a"]),new a["default"]({render:function(t){return t(O)}}).$mount("#app")},d4d6:function(t,e,k){"use strict";k("2004")}});
//# sourceMappingURL=app.932a3395.js.map