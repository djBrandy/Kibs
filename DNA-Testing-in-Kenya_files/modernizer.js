;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}
function z(a,b){return typeof a===b}
function A(a,b){return!!~(""+a).indexOf(b)}
function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&j[e]!==c)
return b=="pfx"?e:!0}
return!1}
function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}
!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}
function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}
function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}
function k(){var a=B;return a.loader={load:j,i:0},a};