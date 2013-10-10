(function(h){h.extend(h.inputmask.defaults.aliases,{decimal:{mask:"~",placeholder:"",repeat:"*",greedy:!1,numericInput:!1,isNumeric:!0,digits:"*",groupSeparator:"",radixPoint:".",groupSize:3,autoGroup:!1,allowPlus:!0,allowMinus:!0,integerDigits:"*",defaultValue:"",prefix:"",suffix:"",getMaskLength:function(b,f,e,c,a){var d=b.length;f||("*"==e?d=c.length+1:1<e&&(d+=b.length*(e-1)));b=h.inputmask.escapeRegex.call(this,a.groupSeparator);a=h.inputmask.escapeRegex.call(this,a.radixPoint);c=c.join("");
a=c.replace(RegExp(b,"g"),"").replace(RegExp(a),"");return d+(c.length-a.length)},postFormat:function(b,f,e,c){if(""==c.groupSeparator)return f;var a=b.slice();h.inArray(c.radixPoint,b);e||a.splice(f,0,"?");a=a.join("");if(c.autoGroup||e&&-1!=a.indexOf(c.groupSeparator)){for(var d=h.inputmask.escapeRegex.call(this,c.groupSeparator),a=a.replace(RegExp(d,"g"),""),d=a.split(c.radixPoint),a=d[0],g=RegExp("([-+]?[\\d?]+)([\\d?]{"+c.groupSize+"})");g.test(a);)a=a.replace(g,"$1"+c.groupSeparator+"$2"),a=
a.replace(c.groupSeparator+c.groupSeparator,c.groupSeparator);1<d.length&&(a+=c.radixPoint+d[1])}b.length=a.length;c=0;for(d=a.length;c<d;c++)b[c]=a.charAt(c);a=h.inArray("?",b);e||b.splice(a,1);return e?f:a},regex:{number:function(b){var f=h.inputmask.escapeRegex.call(this,b.groupSeparator),e=h.inputmask.escapeRegex.call(this,b.radixPoint),c=isNaN(b.digits)?b.digits:"{0,"+b.digits+"}";return RegExp("^"+("["+(b.allowPlus?"+":"")+(b.allowMinus?"-":"")+"]?")+"(\\d+|\\d{1,"+b.groupSize+"}(("+f+"\\d{"+
b.groupSize+"})?)+)("+e+"\\d"+c+")?$")}},onKeyDown:function(b,f,e){var c=h(this);if(b.keyCode==e.keyCode.TAB){if(b=h.inArray(e.radixPoint,f),-1!=b){for(var a=c.data("_inputmask").masksets,c=c.data("_inputmask").activeMasksetIndex,d=1;d<=e.digits&&d<e.getMaskLength(a[c]._buffer,a[c].greedy,a[c].repeat,f,e);d++)if(void 0==f[b+d]||""==f[b+d])f[b+d]="0";this._valueSet(f.join(""))}}else if(b.keyCode==e.keyCode.DELETE||b.keyCode==e.keyCode.BACKSPACE)e.postFormat(f,0,!0,e),this._valueSet(f.join(""))},definitions:{"~":{validator:function(b,
f,e,c,a){if(""==b)return!1;if(!c&&1>=e&&"0"===f[0]&&/[\d-]/.test(b)&&1==f.length)return f[0]="",{pos:0};var d=c?f.slice(0,e):f.slice();d.splice(e,0,b);var d=d.join(""),g=h.inputmask.escapeRegex.call(this,a.groupSeparator),d=d.replace(RegExp(g,"g"),""),g=a.regex.number(a).test(d);if(!g&&(d+="0",g=a.regex.number(a).test(d),!g)){g=d.lastIndexOf(a.groupSeparator);for(i=d.length-g;3>=i;i++)d+="0";g=a.regex.number(a).test(d);if(!g&&!c&&b==a.radixPoint&&(g=a.regex.number(a).test("0"+d+"0")))return f[e]=
"0",e++,{pos:e}}return!1==g||c||b==a.radixPoint?g:{pos:a.postFormat(f,e,!1,a)}},cardinality:1,prevalidator:null}},insertMode:!0,autoUnmask:!1},integer:{regex:{number:function(b){var f=h.inputmask.escapeRegex.call(this,b.groupSeparator);return RegExp("^"+(b.allowPlus||b.allowMinus?"["+(b.allowPlus?"+":"")+(b.allowMinus?"-":"")+"]?":"")+"(\\d+|\\d{1,"+b.groupSize+"}(("+f+"\\d{"+b.groupSize+"})?)+)$")}},alias:"decimal"}})})(jQuery);
