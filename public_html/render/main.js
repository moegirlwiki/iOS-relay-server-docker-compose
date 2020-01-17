//黑幕
$(document).ready(function(){$(".heimu").click(function(){$(this).css("background","#ffffff");$(this).children("a").css("background","#ffffff");});});

//NavBox渲染
$(function(){function t(t){var l=$(t).attr("style");if(l){var n=[];return l=l.split(";"),$.each(l,function(){this.length&&s.test(this)&&n.push(this)}),n.join(";")}}function l(n){n=$(n);var e={collapsible:!1,open:!0};if(n.is("table")){e.collapsible=n.is(".mw-collapsible"),e.open=n.is(".autocollapse")||n.is(".mw-uncollapsed");var a=n.find(">tbody>tr>.navbox-title");if(a.length){var i=a.find(">span:not(.mw-collapsible-toggle)"),s=i.children();if(s.find("small").length){var o=s.html().split("<br>");e.title=o[0],e.nav=$(o[1]).find("small").html()}else e.title=s.is("div")&&"text-align:center; line-height:10pt"==s.attr("style")?s.html():i.html();var r=t(a);r&&(e.titleStyle=r)}var c=[];n.find(">tbody>tr").filter(function(){return!$(this).find(">.navbox-title").length&&"2px"!=$(this).css("height")}).each(function(){c.push(l(this))}),e.subgroup=c}else if(n.is("tr")){var a=n.find(">.navbox-group");if(a.length){var r=t(a);r&&(e.titleStyle=r);var p=a.children();e.title=p.is("div")&&"padding:0em 0.75em;"==p.attr("style")?p.html():a.html()}var a=n.find(">.navbox-list");if(a.length)if(a.find(">.navbox-subgroup").length){var v=l(a.find(">.navbox-subgroup"));e.subgroup=v.title?[v]:v.subgroup}else{var r=t(a);r&&(e.contentStyle=r),e.content=a.html()}var a=n.find(">.navbox-abovebelow");a.length&&(e.title=a.html())}return e}function n(t){t=$(t);var n={subgroup:l(t.find(">tbody>tr>td>.mw-collapsible"))};return n}function e(t,l){if(l.collapsible&&(t.addClass(o+"collapsible"),l.open&&t.addClass(o+"open")),l.title){var n=$('<div class="'+o+'title" />');if(n.html(l.title),t.append(n),l.titleStyle&&(n.attr("style",l.titleStyle),-1!==l.titleStyle.indexOf("background")&&t.css("border-color",n.css("background-color"))),l.collapsible&&n.append('<div class="'+o+'toggle"><span class="'+o+'status-close">[展开]</span><span class="'+o+'status-open">[折叠]</span></div>'),l.nav){var a=$('<div class="'+o+'nav" />');n.append(a),n.addClass(o+"has-nav"),a.html(l.nav)}}if(l.content||l.subgroup){var i=$('<div class="'+o+'content" />');if(t.append(i),l.content)l.contentStyle&&i.attr("style",l.contentStyle),i.html(l.content);else{var s=$('<div class="'+o+'subgroup" />').appendTo(i);$.each(l.subgroup,function(){e(s,this)})}}}function a(t){var l=$('<div class="'+o+'wrapper" />'),n=$('<div class="'+o+'subgroup" />');return l.append(n),e(n,t.subgroup),l}function i(t){var t=t||".navbox";$(t).each(function(){var t=$(this);if(!t.parents(".navbox").length){var l=n(t),e=a(l);e.bind("click",function(t){var l=$(t.target);l.parent().hasClass(o+"toggle")&&(l.closest("."+o+"collapsible").toggleClass(o+"open"),t.stopPropagation())}),t.after(e).hide()}})}var s=/^\s*(background|color|font)/i,o="moegirl-flatten-navbox-";i();var r=$("."+o+"wrapper .navbox");r.length&&i(r)});

//METABOX
$(function(){
function MetaCaixaInit() {
    var i = 0,
    clickFun = function() {
        var vMcNom = this.id.substr(0, 3),
        vIndex = this.id.substr(5, 1),
        i = 1;
        for (i = 1; i <= 9; i++) {
            var vPsElem = document.getElementById(vMcNom + "ps" + i);
            if (!vPsElem) break;
            if (vIndex == i) {
                vPsElem.style.display = "block";
                vPsElem.style.visibility = "visible";
                document.getElementById(vMcNom + "bt" + i).className = "mcBotoSel";
            } else {
                vPsElem.style.display = "none";
                vPsElem.style.visibility = "hidden";
                document.getElementById(vMcNom + "bt" + i).className = "mcBoto";
            }
        }
        return false;
    };
    for (i = 0; i <= 9; i++) {
        var vMc = document.getElementById("mc" + i);
        if (!vMc) break;
        var j = 1,
        vPsIni = 0;
        for (j = 1; j <= 9; j++) {
            var vBt = document.getElementById("mc" + i + "bt" + j);
            if (!vBt) break;
            vBt.onclick = clickFun;
            if (vBt.className == "mcBotoSel") vPsIni = j;
        }
        if (vPsIni === 0) {
            vPsIni = 1 + Math.floor((j - 1) * Math.random());
            document.getElementById("mc" + i + "ps" + vPsIni).style.display = "block";
            document.getElementById("mc" + i + "ps" + vPsIni).style.visibility = "visible";
            document.getElementById("mc" + i + "bt" + vPsIni).className = "mcBotoSel";
        }
    }
}

  MetaCaixaInit();
});


//折叠显示
$(document).ready(function(){
    $(".mw-collapsible.wikitable").each(function(index){
        $(this).children("tbody").children("tr:first-child").click(function(){$(".mc-mw-coll"+index).toggle();});
        $(this).children("tbody").children("tr:not(:first-child)").hide().addClass("mc-mw-coll"+index);
    });
});


//图片调整
$(document).ready(function(){
    var list = $("img");
    var notlist = $(".mw-sprites img, .infoBox img, .fullImageLink img");

    for (var i = 0; i < notlist.length; i++) {
        for (var j = 0; j < list.length; j++) {
            if (notlist[i] == list[j]){
                list.splice(j,1);
            }
        };
    };

    for (var i = 0; i < list.length; i++) {
        var obj = list[i];
        var w = obj.width
        var h = obj.height
        obj.style.maxWidth = w + "px";
        obj.style.maxHeight = h + "px";
        obj.style.width = "100%";
        obj.style.height = "auto";
        obj.removeAttribute("width");
        obj.removeAttribute("height");
    };
});

$(function(){function a(a,b,c){var e,d=new Date;d.setTime(d.getTime()+1e3*60*60*24*c),e="expires="+d.toUTCString(),document.cookie=a+"="+b+"; "+e}function b(a){var d,e,b=a+"=",c=document.cookie.split(";");for(d=0;d<c.length;d++){for(e=c[d];" "==e.charAt(0);)e=e.substring(1);if(0==e.indexOf(b))return e.substring(b.length,e.length)}return""}function c(){window.hh=0,$(".menu-content").show(),$(".menu-content ul").each(function(){$(this).height()>window.hh&&(window.hh=$(this).height())}),$(".menu-content ul").css("height",window.hh+"px"),$(".menu-content ul ul").css("height","auto"),$(".ztdh .menu-item span.menu-title").css("background-color","#9dd5ff"),$(".ztdh").css("height",window.hh+$(".ztdh").height()+"px"),a("ztdh-"+$(".ztdh").attr("id"),"show",300),$(".ztdh-hsctrl").html("[ 隐藏全部 ]")}function d(){$(".menu-content ul").removeAttr("style"),$(".ztdh .menu-item span.menu-title").removeAttr("style"),$(".menu-content").removeAttr("style"),$(".ztdh").removeAttr("style"),a("ztdh-"+$(".ztdh").attr("id"),"hide",300),$(".ztdh-hsctrl").html("[ 显示全部 ]")}document.body.clientWidth<550?$(".menu-item").click(function(){$(this).children(".menu-content").toggle()}):($(".ztdh-hsctrl").click(function(){"[ 显示全部 ]"==$(this).html()?c():d()}),"show"==b("ztdh-"+$(".ztdh").attr("id"))?c():a("ztdh-"+$(".ztdh").attr("id"),"hide",300))});



$(document).ready(function(){
    $(".remove-in-ios-app").remove();
});