/*
 *	jQuery dotdotdot 1.6.16
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 *
 *	Plugin website:
 *	dotdotdot.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */
!function(t,e){function n(t,e,n){var r=t.children(),o=!1;t.empty();for(var i=0,d=r.length;d>i;i++){var l=r.eq(i);if(t.append(l),n&&t.append(n),a(t,e)){l.remove(),o=!0;break}n&&n.detach()}return o}function r(e,n,i,d,l){var s=!1,c="table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style",u="script, .dotdotdot-keep";return e.contents().detach().each(function(){var f=this,h=t(f);if("undefined"==typeof f||3==f.nodeType&&0==t.trim(f.data).length)return!0;if(h.is(u))e.append(h);else{if(s)return!0;e.append(h),l&&e[e.is(c)?"after":"append"](l),a(i,d)&&(s=3==f.nodeType?o(h,n,i,d,l):r(h,n,i,d,l),s||(h.detach(),s=!0)),s||l&&l.detach()}}),s}function o(e,n,r,o,d){var c=e[0];if(!c)return!1;var f=s(c),h=-1!==f.indexOf(" ")?" ":"　",p="letter"==o.wrap?"":h,g=f.split(p),v=-1,w=-1,b=0,y=g.length-1;for(o.fallbackToLetter&&0==b&&0==y&&(p="",g=f.split(p),y=g.length-1);y>=b&&(0!=b||0!=y);){var m=Math.floor((b+y)/2);if(m==w)break;w=m,l(c,g.slice(0,w+1).join(p)+o.ellipsis),a(r,o)?(y=w,o.fallbackToLetter&&0==b&&0==y&&(p="",g=g[0].split(p),v=-1,w=-1,b=0,y=g.length-1)):(v=w,b=w)}if(-1==v||1==g.length&&0==g[0].length){var x=e.parent();e.detach();var T=d&&d.closest(x).length?d.length:0;x.contents().length>T?c=u(x.contents().eq(-1-T),n):(c=u(x,n,!0),T||x.detach()),c&&(f=i(s(c),o),l(c,f),T&&d&&t(c).parent().append(d))}else f=i(g.slice(0,v+1).join(p),o),l(c,f);return!0}function a(t,e){return t.innerHeight()>e.maxHeight}function i(e,n){for(;t.inArray(e.slice(-1),n.lastCharacter.remove)>-1;)e=e.slice(0,-1);return t.inArray(e.slice(-1),n.lastCharacter.noEllipsis)<0&&(e+=n.ellipsis),e}function d(t){return{width:t.innerWidth(),height:t.innerHeight()}}function l(t,e){t.innerText?t.innerText=e:t.nodeValue?t.nodeValue=e:t.textContent&&(t.textContent=e)}function s(t){return t.innerText?t.innerText:t.nodeValue?t.nodeValue:t.textContent?t.textContent:""}function c(t){do t=t.previousSibling;while(t&&1!==t.nodeType&&3!==t.nodeType);return t}function u(e,n,r){var o,a=e&&e[0];if(a){if(!r){if(3===a.nodeType)return a;if(t.trim(e.text()))return u(e.contents().last(),n)}for(o=c(a);!o;){if(e=e.parent(),e.is(n)||!e.length)return!1;o=c(e[0])}if(o)return u(t(o),n)}return!1}function f(e,n){return e?"string"==typeof e?(e=t(e,n),e.length?e:!1):e.jquery?e:!1:!1}function h(t){for(var e=t.innerHeight(),n=["paddingTop","paddingBottom"],r=0,o=n.length;o>r;r++){var a=parseInt(t.css(n[r]),10);isNaN(a)&&(a=0),e-=a}return e}if(!t.fn.dotdotdot){t.fn.dotdotdot=function(e){if(0==this.length)return t.fn.dotdotdot.debug('No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){t(this).dotdotdot(e)});var o=this;o.data("dotdotdot")&&o.trigger("destroy.dot"),o.data("dotdotdot-style",o.attr("style")||""),o.css("word-wrap","break-word"),"nowrap"===o.css("white-space")&&o.css("white-space","normal"),o.bind_events=function(){return o.bind("update.dot",function(e,d){e.preventDefault(),e.stopPropagation(),l.maxHeight="number"==typeof l.height?l.height:h(o),l.maxHeight+=l.tolerance,"undefined"!=typeof d&&(("string"==typeof d||d instanceof HTMLElement)&&(d=t("<div />").append(d).contents()),d instanceof t&&(i=d)),g=o.wrapInner('<div class="dotdotdot" />').children(),g.contents().detach().end().append(i.clone(!0)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});var c=!1,u=!1;return s.afterElement&&(c=s.afterElement.clone(!0),c.show(),s.afterElement.detach()),a(g,l)&&(u="children"==l.wrap?n(g,l,c):r(g,o,g,l,c)),g.replaceWith(g.contents()),g=null,t.isFunction(l.callback)&&l.callback.call(o[0],u,i),s.isTruncated=u,u}).bind("isTruncated.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],s.isTruncated),s.isTruncated}).bind("originalContent.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],i),i}).bind("destroy.dot",function(t){t.preventDefault(),t.stopPropagation(),o.unwatch().unbind_events().contents().detach().end().append(i).attr("style",o.data("dotdotdot-style")||"").data("dotdotdot",!1)}),o},o.unbind_events=function(){return o.unbind(".dot"),o},o.watch=function(){if(o.unwatch(),"window"==l.watch){var e=t(window),n=e.width(),r=e.height();e.bind("resize.dot"+s.dotId,function(){n==e.width()&&r==e.height()&&l.windowResizeFix||(n=e.width(),r=e.height(),u&&clearInterval(u),u=setTimeout(function(){o.trigger("update.dot")},100))})}else c=d(o),u=setInterval(function(){if(o.is(":visible")){var t=d(o);(c.width!=t.width||c.height!=t.height)&&(o.trigger("update.dot"),c=t)}},500);return o},o.unwatch=function(){return t(window).unbind("resize.dot"+s.dotId),u&&clearInterval(u),o};var i=o.contents(),l=t.extend(!0,{},t.fn.dotdotdot.defaults,e),s={},c={},u=null,g=null;return l.lastCharacter.remove instanceof Array||(l.lastCharacter.remove=t.fn.dotdotdot.defaultArrays.lastCharacter.remove),l.lastCharacter.noEllipsis instanceof Array||(l.lastCharacter.noEllipsis=t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),s.afterElement=f(l.after,o),s.isTruncated=!1,s.dotId=p++,o.data("dotdotdot",!0).bind_events().trigger("update.dot"),l.watch&&o.watch(),o},t.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:!0,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:!1,windowResizeFix:!0},t.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","　",",",";",".","!","?"],noEllipsis:[]}},t.fn.dotdotdot.debug=function(){};var p=1,g=t.fn.html;t.fn.html=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?this.trigger("update",[n]):g.apply(this,arguments)};var v=t.fn.text;t.fn.text=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?(n=t("<div />").text(n).html(),this.trigger("update",[n])):v.apply(this,arguments)}}}(jQuery);;
/*	
 * jQuery mmenu v4.3.2
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *	
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * Dual licensed under the MIT license:
 * http://en.wikipedia.org/wiki/MIT_License
 */
!function(e){function s(s,n,t){if(t){if("object"!=typeof s&&(s={}),"boolean"!=typeof s.isMenu){var i=t.children();s.isMenu=1==i.length&&i.is(n.panelNodetype)}return s}s=e.extend(!0,{},e[a].defaults,s),("top"==s.position||"bottom"==s.position)&&("back"==s.zposition||"next"==s.zposition)&&(e[a].deprecated('Using position "'+s.position+'" in combination with zposition "'+s.zposition+'"','zposition "front"'),s.zposition="front");for(var o=["position","zposition","modal","moveBackground"],l=0,d=o.length;d>l;l++)"undefined"!=typeof s[o[l]]&&(e[a].deprecated('The option "'+o[l]+'"',"offCanvas."+o[l]),s.offCanvas=s.offCanvas||{},s.offCanvas[o[l]]=s[o[l]]);return s}function n(s){s=e.extend(!0,{},e[a].configuration,s);for(var n=["panel","list","selected","label","spacer"],t=0,i=n.length;i>t;t++)"undefined"!=typeof s[n[t]+"Class"]&&(e[a].deprecated('The configuration option "'+n[t]+'Class"',"classNames."+n[t]),s.classNames[n[t]]=s[n[t]+"Class"]);if("undefined"!=typeof s.counterClass&&(e[a].deprecated('The configuration option "counterClass"',"classNames.counters.counter"),s.classNames.counters=s.classNames.counters||{},s.classNames.counters.counter=s.counterClass),"undefined"!=typeof s.collapsedClass&&(e[a].deprecated('The configuration option "collapsedClass"',"classNames.labels.collapsed"),s.classNames.labels=s.classNames.labels||{},s.classNames.labels.collapsed=s.collapsedClass),"undefined"!=typeof s.header)for(var n=["panelHeader","panelNext","panelPrev"],t=0,i=n.length;i>t;t++)"undefined"!=typeof s.header[n[t]+"Class"]&&(e[a].deprecated('The configuration option "header.'+n[t]+'Class"',"classNames.header."+n[t]),s.classNames.header=s.classNames.header||{},s.classNames.header[n[t]]=s.header[n[t]+"Class"]);for(var n=["pageNodetype","pageSelector","menuWrapperSelector","menuInjectMethod"],t=0,i=n.length;i>t;t++)"undefined"!=typeof s[n[t]]&&(e[a].deprecated('The configuration option "'+n[t]+'"',"offCanvas."+n[t]),s.offCanvas=s.offCanvas||{},s.offCanvas[n[t]]=s[n[t]]);return s}function t(){u=!0,c.$wndw=e(window),c.$html=e("html"),c.$body=e("body"),e.each([l,d,r],function(e,s){s.add=function(e){e=e.split(" ");for(var n in e)s[e[n]]=s.mm(e[n])}}),l.mm=function(e){return"mm-"+e},l.add("wrapper menu ismenu inline panel list subtitle selected label spacer current highest hidden opened subopened subopen fullsubopen subclose"),l.umm=function(e){return"mm-"==e.slice(0,3)&&(e=e.slice(3)),e},d.mm=function(e){return"mm-"+e},d.add("parent"),r.mm=function(e){return e+".mm"},r.add("toggle open close setSelected transitionend webkitTransitionEnd mousedown mouseup touchstart touchmove touchend scroll resize click keydown keyup"),e[a]._c=l,e[a]._d=d,e[a]._e=r,e[a].glbl=c}function i(s,n){if(s.hasClass(l.current))return!1;var t=e("."+l.panel,n),i=t.filter("."+l.current);return t.removeClass(l.highest).removeClass(l.current).not(s).not(i).addClass(l.hidden),s.hasClass(l.opened)?i.addClass(l.highest).removeClass(l.opened).removeClass(l.subopened):(s.addClass(l.highest),i.addClass(l.subopened)),s.removeClass(l.hidden).addClass(l.current),setTimeout(function(){s.removeClass(l.subopened).addClass(l.opened)},25),"open"}var a="mmenu",o="4.3.2";if(!e[a]){var l={},d={},r={},u=!1,c={$wndw:null,$html:null,$body:null};e[a]=function(e,s,n){return this.$menu=e,this.opts=s,this.conf=n,this.vars={},this._init(),this},e[a].uniqueId=0,e[a].prototype={_init:function(){if(this.opts=s(this.opts,this.conf,this.$menu),this._initMenu(),this._initPanels(),this._initLinks(),this._bindCustomEvents(),e[a].addons)for(var n=0;n<e[a].addons.length;n++)"function"==typeof this["_addon_"+e[a].addons[n]]&&this["_addon_"+e[a].addons[n]]()},_bindCustomEvents:function(){var s=this,n=this.$menu.find(this.opts.isMenu&&!this.opts.slidingSubmenus?"ul, ol":"."+l.panel);n.off(r.toggle+" "+r.open+" "+r.close).on(r.toggle+" "+r.open+" "+r.close,function(e){e.stopPropagation()}),this.opts.slidingSubmenus?n.on(r.open,function(){return i(e(this),s.$menu)}):n.on(r.toggle,function(){var s=e(this);return s.triggerHandler(s.parent().hasClass(l.opened)?r.close:r.open)}).on(r.open,function(){return e(this).parent().addClass(l.opened),"open"}).on(r.close,function(){return e(this).parent().removeClass(l.opened),"close"})},_initMenu:function(){this.opts.offCanvas&&this.conf.clone&&(this.$menu=this.$menu.clone(!0),this.$menu.add(this.$menu.find("*")).filter("[id]").each(function(){e(this).attr("id",l.mm(e(this).attr("id")))})),this.$menu.contents().each(function(){3==e(this)[0].nodeType&&e(this).remove()}),this.$menu.parent().addClass(l.wrapper);var s=[l.menu];s.push(l.mm(this.opts.slidingSubmenus?"horizontal":"vertical")),this.opts.classes&&s.push(this.opts.classes),this.opts.isMenu&&s.push(l.ismenu),this.$menu.addClass(s.join(" "))},_initPanels:function(){var s=this;this.__refactorClass(e("."+this.conf.classNames.list,this.$menu),this.conf.classNames.list,"list"),this.opts.isMenu&&e("ul, ol",this.$menu).not(".mm-nolist").addClass(l.list);var n=e("."+l.list+" > li",this.$menu);this.__refactorClass(n,this.conf.classNames.selected,"selected"),this.__refactorClass(n,this.conf.classNames.label,"label"),this.__refactorClass(n,this.conf.classNames.spacer,"spacer"),n.off(r.setSelected).on(r.setSelected,function(s,t){s.stopPropagation(),n.removeClass(l.selected),"boolean"!=typeof t&&(t=!0),t&&e(this).addClass(l.selected)}),this.__refactorClass(e("."+this.conf.classNames.panel,this.$menu),this.conf.classNames.panel,"panel"),this.$menu.children().filter(this.conf.panelNodetype).add(this.$menu.find("."+l.list).children().children().filter(this.conf.panelNodetype)).addClass(l.panel);var t=e("."+l.panel,this.$menu);t.each(function(){var n=e(this),t=n.attr("id")||s.__getUniqueId();n.attr("id",t)}),t.find("."+l.panel).each(function(){var n=e(this),t=n.is("ul, ol")?n:n.find("ul ,ol").first(),i=n.parent(),a=i.find("> a, > span"),o=i.closest("."+l.panel);if(n.data(d.parent,i),i.parent().is("."+l.list)){var r=e('<a class="'+l.subopen+'" href="#'+n.attr("id")+'" />').insertBefore(a);a.is("a")||r.addClass(l.fullsubopen),s.opts.slidingSubmenus&&t.prepend('<li class="'+l.subtitle+'"><a class="'+l.subclose+'" href="#'+o.attr("id")+'">'+a.text()+"</a></li>")}});var i=this.opts.slidingSubmenus?r.open:r.toggle;if(t.each(function(){var n=e(this),t=n.attr("id");e('a[href="#'+t+'"]',s.$menu).off(r.click).on(r.click,function(e){e.preventDefault(),n.trigger(i)})}),this.opts.slidingSubmenus){var a=e("."+l.list+" > li."+l.selected,this.$menu);a.parents("li").removeClass(l.selected).end().add(a.parents("li")).each(function(){var s=e(this),n=s.find("> ."+l.panel);n.length&&(s.parents("."+l.panel).addClass(l.subopened),n.addClass(l.opened))}).closest("."+l.panel).addClass(l.opened).parents("."+l.panel).addClass(l.subopened)}else{var a=e("li."+l.selected,this.$menu);a.parents("li").removeClass(l.selected).end().add(a.parents("li")).addClass(l.opened)}var o=t.filter("."+l.opened);o.length||(o=t.first()),o.addClass(l.opened).last().addClass(l.current),this.opts.slidingSubmenus&&t.not(o.last()).addClass(l.hidden).end().find("."+l.panel).appendTo(this.$menu)},_initLinks:function(){var s=this;e("."+l.list+" > li > a",this.$menu).not("."+l.subopen).not("."+l.subclose).not('[rel="external"]').not('[target="_blank"]').off(r.click).on(r.click,function(n){var t=e(this),i=t.attr("href");s.__valueOrFn(s.opts.onClick.setSelected,t)&&t.parent().trigger(r.setSelected);var a=s.__valueOrFn(s.opts.onClick.preventDefault,t,"#"==i.slice(0,1));a&&n.preventDefault(),s.__valueOrFn(s.opts.onClick.blockUI,t,!a)&&c.$html.addClass(l.blocking),s.__valueOrFn(s.opts.onClick.close,t,a)&&s.$menu.triggerHandler(r.close)})},_update:function(e){if(this.updates||(this.updates=[]),"function"==typeof e)this.updates.push(e);else for(var s=0,n=this.updates.length;n>s;s++)this.updates[s].call(this,e)},__valueOrFn:function(e,s,n){return"function"==typeof e?e.call(s[0]):"undefined"==typeof e&&"undefined"!=typeof n?n:e},__refactorClass:function(e,s,n){e.filter("."+s).removeClass(s).addClass(l[n])},__transitionend:function(e,s,n){var t=!1,i=function(){t||s.call(e[0]),t=!0};e.one(r.transitionend,i),e.one(r.webkitTransitionEnd,i),setTimeout(i,1.1*n)},__getUniqueId:function(){return l.mm(e[a].uniqueId++)}},e.fn[a]=function(i,o){return u||t(),i=s(i,o),o=n(o),this.each(function(){var s=e(this);s.data(a)||s.data(a,new e[a](s,i,o))})},e[a].version=o,e[a].defaults={classes:"",slidingSubmenus:!0,onClick:{setSelected:!0}},e[a].configuration={panelNodetype:"ul, ol, div",transitionDuration:400,classNames:{panel:"Panle",list:"List",selected:"Selected",label:"Label",spacer:"Spacer"}},function(){var s=window.document,n=window.navigator.userAgent,t="ontouchstart"in s,i="WebkitOverflowScrolling"in s.documentElement.style,o=function(){return n.indexOf("Android")>=0?2.4>parseFloat(n.slice(n.indexOf("Android")+8)):!1}();e[a].support={touch:t,oldAndroidBrowser:o,overflowscrolling:function(){return t?i?!0:o?!1:!0:!0}()}}(),e[a].debug=function(){},e[a].deprecated=function(e,s){"undefined"!=typeof console&&"undefined"!=typeof console.warn&&console.warn("MMENU: "+e+" is deprecated, use "+s+" instead.")}}}(jQuery);
/*	
 * jQuery mmenu offCanvas addon
 * mmenu.frebsite.nl
 *	
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 */
!function(e){function o(e){return e}function t(e){return"string"!=typeof e.pageSelector&&(e.pageSelector="> "+e.pageNodetype),e}function n(){u=!0,s=e[r]._c,i=e[r]._d,a=e[r]._e,s.add("offcanvas modal background opening blocker page"),i.add("style"),a.add("opening opened closing closed setPage"),p=e[r].glbl,p.$allMenus=(p.$allMenus||e()).add(this.$menu),p.$wndw.on(a.keydown,function(e){return p.$html.hasClass(s.opened)&&9==e.keyCode?(e.preventDefault(),!1):void 0});var o=0;p.$wndw.on(a.resize,function(e,t){if(t||p.$html.hasClass(s.opened)){var n=p.$wndw.height();(t||n!=o)&&(o=n,p.$page.css("minHeight",n))}})}var s,i,a,p,r="mmenu",l="offCanvas",u=!1;e[r].prototype["_addon_"+l]=function(){if(!this.opts[l])return this;u||n(),this.opts[l]=o(this.opts[l]),this.conf[l]=t(this.conf[l]),this.vars.opened=!1;var e=this.opts[l],i=this.conf[l],a=[s.offcanvas];"left"!=e.position&&a.push(s.mm(e.position)),"back"!=e.zposition&&a.push(s.mm(e.zposition)),this.$menu.addClass(a.join(" ")).parent().removeClass(s.wrapper),this[l+"_initPage"](p.$page),this[l+"_initBlocker"](),this[l+"_initOpenClose"](),this[l+"_bindCustomEvents"](),this.$menu[i.menuInjectMethod+"To"](i.menuWrapperSelector)},e[r].addons=e[r].addons||[],e[r].addons.push(l),e[r].defaults[l]={position:"left",zposition:"back",modal:!1,moveBackground:!0},e[r].configuration[l]={pageNodetype:"div",pageSelector:null,menuWrapperSelector:"body",menuInjectMethod:"prepend"},e[r].prototype.open=function(){if(this.vars.opened)return!1;var e=this;return this._openSetup(),setTimeout(function(){e._openFinish()},25),"open"},e[r].prototype._openSetup=function(){p.$allMenus.not(this.$menu).trigger(a.close),p.$page.data(i.style,p.$page.attr("style")||""),p.$wndw.trigger(a.resize,[!0]);var e=[s.opened];this.opts[l].modal&&e.push(s.modal),this.opts[l].moveBackground&&e.push(s.background),"left"!=this.opts[l].position&&e.push(s.mm(this.opts[l].position)),"back"!=this.opts[l].zposition&&e.push(s.mm(this.opts[l].zposition)),this.opts.classes&&e.push(this.opts.classes),p.$html.addClass(e.join(" ")),this.$menu.addClass(s.current+" "+s.opened)},e[r].prototype._openFinish=function(){var e=this;this.__transitionend(p.$page,function(){e.$menu.trigger(a.opened)},this.conf.transitionDuration),this.vars.opened=!0,p.$html.addClass(s.opening),this.$menu.trigger(a.opening)},e[r].prototype.close=function(){if(!this.vars.opened)return!1;var e=this;return this.__transitionend(p.$page,function(){e.$menu.removeClass(s.current).removeClass(s.opened),p.$html.removeClass(s.opened).removeClass(s.modal).removeClass(s.background).removeClass(s.mm(e.opts[l].position)).removeClass(s.mm(e.opts[l].zposition)),e.opts.classes&&p.$html.removeClass(e.opts.classes),p.$page.attr("style",p.$page.data(i.style)),e.vars.opened=!1,e.$menu.trigger(a.closed)},this.conf.transitionDuration),p.$html.removeClass(s.opening),this.$menu.trigger(a.closing),"close"},e[r].prototype[l+"_initBlocker"]=function(){var o=this;p.$blck||(p.$blck=e('<div id="'+s.blocker+'" />').appendTo(p.$body)),p.$blck.off(a.touchstart).on(a.touchstart,function(e){e.preventDefault(),e.stopPropagation(),p.$blck.trigger(a.mousedown)}).on(a.mousedown,function(e){e.preventDefault(),p.$html.hasClass(s.modal)||o.close()})},e[r].prototype[l+"_initPage"]=function(o){o||(o=e(this.conf[l].pageSelector,p.$body),o.length>1&&(e[r].debug("Multiple nodes found for the page-node, all nodes are wrapped in one <"+this.conf[l].pageNodetype+">."),o=o.wrapAll("<"+this.conf[l].pageNodetype+" />").parent())),o.addClass(s.page),p.$page=o},e[r].prototype[l+"_initOpenClose"]=function(){var o=this,t=this.$menu.attr("id");t&&t.length&&(this.conf.clone&&(t=s.umm(t)),e('a[href="#'+t+'"]').off(a.click).on(a.click,function(e){e.preventDefault(),o.open()}));var t=p.$page.attr("id");t&&t.length&&e('a[href="#'+t+'"]').on(a.click,function(e){e.preventDefault(),o.close()})},e[r].prototype[l+"_bindCustomEvents"]=function(){var e=this,o=a.open+" "+a.opening+" "+a.opened+" "+a.close+" "+a.closing+" "+a.closed+" "+a.setPage;this.$menu.off(o).on(o,function(e){e.stopPropagation()}),this.$menu.on(a.open,function(){e.open()}).on(a.close,function(){e.close()}).on(a.setPage,function(o,t){e[l+"_initPage"](t),e[l+"_initOpenClose"]()})}}(jQuery);
/*	
 * jQuery mmenu counters addon
 * mmenu.frebsite.nl
 *	
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 */
!function(t){function n(n){return"boolean"==typeof n&&(n={add:n,update:n}),"object"!=typeof n&&(n={}),n=t.extend(!0,{},t[i].defaults[c],n),n.count&&(t[i].deprecated('the option "count" for counters','the option "update"'),n.update=n.count),n}function e(t){return t}function o(){d=!0,s=t[i]._c,a=t[i]._d,u=t[i]._e,s.add("counter search noresultsmsg"),r=t[i].glbl}var s,a,u,r,i="mmenu",c="counters",d=!1;t[i].prototype["_addon_"+c]=function(){d||o(),this.opts[c]=n(this.opts[c]),this.conf[c]=e(this.conf[c]);var u=this,r=this.opts[c];if(this.conf[c],this.__refactorClass(t("em",this.$menu),this.conf.classNames[c].counter,"counter"),r.add&&t("."+s.panel,this.$menu).each(function(){var n=t(this),e=n.data(a.parent);if(e){var o=t('<em class="'+s.counter+'" />'),u=e.find("> a."+s.subopen);u.parent().find("em."+s.counter).length||u.before(o)}}),r.update){var i=t("em."+s.counter,this.$menu);i.each(function(){var n=t(this),e=t(n.next().attr("href"),u.$menu);if(e.is("."+s.list)||(e=e.find("> ."+s.list)),e.length){var o=function(){var t=e.children().not("."+s.label).not("."+s.subtitle).not("."+s.hidden).not("."+s.search).not("."+s.noresultsmsg);n.html(t.length)};o(),u._update(o)}})}},t[i].addons=t[i].addons||[],t[i].addons.push(c),t[i].defaults[c]={add:!1,update:!1},t[i].configuration.classNames[c]={counter:"Counter"}}(jQuery);
/*	
 * jQuery mmenu dragOpen addon
 * mmenu.frebsite.nl
 *	
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 */
!function(e){function t(t){return"boolean"==typeof t&&(t={open:t}),"object"!=typeof t&&(t={}),t=e.extend(!0,{},e[p].defaults[g],t)}function a(e){return e}function o(){f=!0,s=e[p]._c,i=e[p]._d,r=e[p]._e,s.add("dragging"),r.add("dragleft dragright dragup dragdown dragend"),d=e[p].glbl}function n(e,t,a){return t>e&&(e=t),e>a&&(e=a),e}var s,i,r,d,p="mmenu",g="dragOpen",f=!1;e[p].prototype["_addon_"+g]=function(){if(e.fn.hammer){f||o(),this.opts[g]=t(this.opts[g]),this.conf[g]=a(this.conf[g]);var i=this,p=this.opts[g],h=this.conf[g];if(p.open){var c=0,l=!1,u=0,v=0,m="width";switch(this.opts.offCanvas.position){case"left":case"right":m="width";break;default:m="height"}switch(this.opts.offCanvas.position){case"left":var _={events:r.dragleft+" "+r.dragright,open_dir:"right",close_dir:"left",delta:"deltaX",page:"pageX",negative:!1};break;case"right":var _={events:r.dragleft+" "+r.dragright,open_dir:"left",close_dir:"right",delta:"deltaX",page:"pageX",negative:!0};break;case"top":var _={events:r.dragup+" "+r.dragdown,open_dir:"down",close_dir:"up",delta:"deltaY",page:"pageY",negative:!1};break;case"bottom":var _={events:r.dragup+" "+r.dragdown,open_dir:"up",close_dir:"down",delta:"deltaY",page:"pageY",negative:!0}}var w=this.__valueOrFn(p.pageNode,this.$menu,d.$page);"string"==typeof w&&(w=e(w));var b=d.$page.find("."+s.mm("fixed-top")+", ."+s.mm("fixed-bottom")),$=d.$page;switch(this.opts.offCanvas.zposition){case"back":$=$.add(b);break;case"front":$=this.$menu;break;case"next":$=$.add(this.$menu).add(b)}w.hammer().on(r.touchstart+" "+r.mousedown,function(e){if("touchstart"==e.type)var t=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0],a=t[_.page];else if("mousedown"==e.type)var a=e[_.page];switch(i.opts.offCanvas.position){case"right":case"bottom":a>=d.$wndw[m]()-p.maxStartPos&&(c=1);break;default:a<=p.maxStartPos&&(c=1)}}).on(_.events+" "+r.dragend,function(e){c>0&&(e.gesture.preventDefault(),e.stopPropagation())}).on(_.events,function(e){var t=_.negative?-e.gesture[_.delta]:e.gesture[_.delta];if(l=t>u?_.open_dir:_.close_dir,u=t,u>p.threshold&&1==c){if(d.$html.hasClass(s.opened))return;c=2,i._openSetup(),i.vars.opened=!0,d.$html.addClass(s.dragging),v=n(d.$wndw[m]()*h[m].perc,h[m].min,h[m].max)}2==c&&$.css(i.opts.offCanvas.position,n(u,10,v)-("front"==i.opts.offCanvas.zposition?v:0))}).on(r.dragend,function(){2==c&&(d.$html.removeClass(s.dragging),$.css(i.opts.offCanvas.position,""),l==_.open_dir?i._openFinish():i.close()),c=0})}}},e[p].addons=e[p].addons||[],e[p].addons.push(g),e[p].defaults[g]={open:!1,maxStartPos:100,threshold:50},e[p].configuration[g]={width:{perc:.8,min:140,max:440},height:{perc:.8,min:140,max:880}}}(jQuery);
/*	
 * jQuery mmenu header addon
 * mmenu.frebsite.nl
 *	
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 */
!function(e){function t(t){return"boolean"==typeof t&&(t={add:t,update:t}),"object"!=typeof t&&(t={}),t=e.extend(!0,{},e[i].defaults[h],t)}function a(e){return e}function n(){c=!0,s=e[i]._c,r=e[i]._d,o=e[i]._e,s.add("header hasheader prev next title titletext"),d=e[i].glbl}var s,r,o,d,i="mmenu",h="header",c=!1;e[i].prototype["_addon_"+h]=function(){c||n(),this.opts[h]=t(this.opts[h]),this.conf[h]=a(this.conf[h]);var r=this,i=this.opts[h];if(this.conf[h],i.add){var l=i.content?i.content:'<a class="'+s.prev+'" href="#"></a><span class="'+s.title+'"></span><a class="'+s.next+'" href="#"></a>';e('<div class="'+s.header+'" />').prependTo(this.$menu).append(l)}var f=e("div."+s.header,this.$menu);if(f.length&&this.$menu.addClass(s.hasheader),i.update&&f.length){var p=f.find("."+s.title),u=f.find("."+s.prev),v=f.find("."+s.next),m=!1;d.$page&&(m="#"+d.$page.attr("id")),u.add(v).on(o.click,function(t){t.preventDefault(),t.stopPropagation();var a=e(this).attr("href");"#"!==a&&(m&&a==m?r.$menu.trigger(o.close):e(a,r.$menu).trigger(o.open))}),e("."+s.panel,this.$menu).each(function(){var t=e(this),a=e("."+r.conf.classNames[h].panelHeader,t).text(),n=e("."+r.conf.classNames[h].panelPrev,t).attr("href"),d=e("."+r.conf.classNames[h].panelNext,t).attr("href");a||(a=e("."+s.subclose,t).text()),a||(a=i.title),n||(n=e("."+s.subclose,t).attr("href"));var c=function(){p[a?"show":"hide"]().text(a),u[n?"show":"hide"]().attr("href",n),v[d?"show":"hide"]().attr("href",d)};t.on(o.open,function(){c()}),t.hasClass(s.current)&&c()})}},e[i].addons=e[i].addons||[],e[i].addons.push(h),e[i].defaults[h]={add:!1,content:!1,update:!1,title:"Menu"},e[i].configuration.classNames[h]={panelHeader:"Header",panelNext:"Next",panelPrev:"Prev"}}(jQuery);
/*	
 * jQuery mmenu labels addon
 * mmenu.frebsite.nl
 *	
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 */
!function(l){function s(s){return"boolean"==typeof s&&(s={collapse:s}),"object"!=typeof s&&(s={}),s=l.extend(!0,{},l[p].defaults[d],s)}function e(l){return l}function a(){i=!0,o=l[p]._c,n=l[p]._d,t=l[p]._e,o.add("collapsed"),c=l[p].glbl}var o,n,t,c,p="mmenu",d="labels",i=!1;l[p].prototype["_addon_"+d]=function(){i||a(),this.opts[d]=s(this.opts[d]),this.conf[d]=e(this.conf[d]);var n=this.opts[d];this.conf[d],n.collapse&&(this.__refactorClass(l("li",this.$menu),this.conf.classNames[d].collapsed,"collapsed"),l("."+o.label,this.$menu).each(function(){var s=l(this),e=s.nextUntil("."+o.label,"all"==n.collapse?null:"."+o.collapsed);"all"==n.collapse&&(s.addClass(o.opened),e.removeClass(o.collapsed)),e.length&&(s.wrapInner("<span />"),l('<a href="#" class="'+o.subopen+" "+o.fullsubopen+'" />').prependTo(s).on(t.click,function(l){l.preventDefault(),s.toggleClass(o.opened),e[s.hasClass(o.opened)?"removeClass":"addClass"](o.collapsed)}))}))},l[p].addons=l[p].addons||[],l[p].addons.push(d),l[p].defaults[d]={collapse:!1},l[p].configuration.classNames[d]={collapsed:"Collapsed"}}(jQuery);
/*	
 * jQuery mmenu searchfield addon
 * mmenu.frebsite.nl
 *	
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 */
!function(e){function s(s){return"boolean"==typeof s&&(s={add:s,search:s}),"object"!=typeof s&&(s={}),s=e.extend(!0,{},e[d].defaults[c],s),"boolean"!=typeof s.showLinksOnly&&(s.showLinksOnly="menu"==s.addTo),s}function n(e){return e}function t(){h=!0,o=e[d]._c,r=e[d]._d,l=e[d]._e,o.add("search hassearch noresultsmsg noresults nosubresults counter"),l.add("search reset change"),i=e[d].glbl}function a(e){switch(e){case 9:case 16:case 17:case 18:case 37:case 38:case 39:case 40:return!0}return!1}var o,r,l,i,d="mmenu",c="searchfield",h=!1;e[d].prototype["_addon_"+c]=function(){h||t(),this.opts[c]=s(this.opts[c]),this.conf[c]=n(this.conf[c]);var i=this,d=this.opts[c];if(this.conf[c],d.add){switch(d.addTo){case"menu":var u=this.$menu;break;case"panels":var u=e("."+o.panel,this.$menu);break;default:var u=e(d.addTo,this.$menu).filter("."+o.panel)}u.length&&u.each(function(){var s=e(this),n=s.is("."+o.list)?"li":"div",t=e("<"+n+' class="'+o.search+'" />');if(t.append('<input placeholder="'+d.placeholder+'" type="text" autocomplete="off" />'),s.is("."+o.menu))t.prependTo(i.$menu);else{var a=s.children().first(),r=a.is("."+o.subtitle)?"After":"Before";t["insert"+r](a)}d.noResults&&(s.is("."+o.menu)&&(s=s.find("."+o.panel).first()),n=s.is("."+o.list)?"li":"div",e("<"+n+' class="'+o.noresultsmsg+'" />').html(d.noResults).appendTo(s))})}if(this.$menu.children("div."+o.search).length&&this.$menu.addClass(o.hassearch),d.search){var f=e("."+o.search,this.$menu);f.length&&f.each(function(){var s=e(this);if("menu"==d.addTo)var n=e("."+o.panel,i.$menu),t=i.$menu;else var n=s.closest("."+o.panel),t=n;var c=n.add(n.children("."+o.list)),h=s.find("input"),u=e("> li",c),f=u.filter("."+o.label),p=u.not("."+o.subtitle).not("."+o.label).not("."+o.search).not("."+o.noresultsmsg),m="> a";d.showLinksOnly||(m+=", > span"),h.off(l.keyup+" "+l.change).on(l.keyup,function(e){a(e.keyCode)||s.trigger(l.search)}).on(l.change,function(){s.trigger(l.search)}),s.off(l.reset+" "+l.search).on(l.reset+" "+l.search,function(e){e.stopPropagation()}).on(l.reset,function(){s.trigger(l.search,[""])}).on(l.search,function(s,a){"string"==typeof a?h.val(a):a=h.val(),a=a.toLowerCase(),n.scrollTop(0),p.add(f).addClass(o.hidden),p.each(function(){var s=e(this);e(m,s).text().toLowerCase().indexOf(a)>-1&&s.add(s.prevAll("."+o.label).first()).removeClass(o.hidden)}),e(n.get().reverse()).each(function(){var s=e(this),n=s.data(r.parent);if(n){var t=s.add(s.find("> ."+o.list)).find("> li").not("."+o.subtitle).not("."+o.search).not("."+o.noresultsmsg).not("."+o.label).not("."+o.hidden);t.length?n.removeClass(o.hidden).removeClass(o.nosubresults).prevAll("."+o.label).first().removeClass(o.hidden):"menu"==d.addTo&&(s.hasClass(o.current)&&n.trigger(l.open),n.addClass(o.nosubresults))}}),t[p.not("."+o.hidden).length?"removeClass":"addClass"](o.noresults),i._update()})})}},e[d].addons=e[d].addons||[],e[d].addons.push(c),e[d].defaults[c]={add:!1,addTo:"menu",search:!1,placeholder:"Search",noResults:"No results found."}}(jQuery);
/*	
 * jQuery mmenu toggles addon
 * mmenu.frebsite.nl
 *	
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 */
!function(t){function n(t){return t}function s(t){return t}function e(){g=!0,o=t[r]._c,i=t[r]._d,a=t[r]._e,o.add("toggle"),l=t[r].glbl}var o,i,a,l,r="mmenu",d="toggles",g=!1;t[r].prototype["_addon_"+d]=function(){g||e(),this.opts[d]=n(this.opts[d]),this.conf[d]=s(this.conf[d]);var i=this;this.opts[d],this.conf[d],this.__refactorClass(t("input",this.$menu),this.conf.classNames[d].toggle,"toggle"),t("."+o.toggle,this.$menu).each(function(){var n=t(this),s=n.parent(),e=n.attr("id")||i.__getUniqueId();n.attr("id",e),s.prepend(n),t('<label for="'+e+'" class="'+o.toggle+'"><div></div></label>').insertBefore(s.children().last())})},t[r].addons=t[r].addons||[],t[r].addons.push(d),t[r].defaults[d]={},t[r].configuration.classNames[d]={toggle:"Toggle"}}(jQuery);;
/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);;
/**
 * @file
 * A JavaScript file for the theme.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {

  $(document).ready(function (e) {
    $("html").removeClass("no-js");
  });

  function lineClamp(context) {

    $(".feature-tile-content", context).each(function (index) {
      // get some height for our math
      var $wrapper = $(this);
      var $standfirst = $(".field-standfirst", $wrapper);

      $(window).resize(function () {
          $standfirst.css("height", "auto");

          var heightTotal = $wrapper.height();
          var heightTaken =
            $(".field-post-date", $wrapper).outerHeight() +
            $(".field-title-field", $wrapper).outerHeight();

          var heightAvailable = heightTotal - heightTaken;


          var normalisedHeight = normalised_available_height($standfirst, heightAvailable);

          $standfirst.css("height", normalisedHeight);
        })
        .resize();

      $standfirst.dotdotdot({watch: 'window'});
    });

    // Truncate topic if necessary.
    $('.view-mode-hero_tile, .view-mode-feature_tile, .view-mode-feature_tile2, .view-mode-postcard, .view-mode-mini_tile, .view-mode-story_tile')
      .find('.field-topics')
      .dotdotdot({
        wrap: 'letter',
        watch: 'window',
        callback: function (isTruncated, orgContent) {
          // Add full content at title attribute to tuncated items.
          $(this).attr('title', isTruncated ? orgContent.text() : '');
        }
      });

    $(".emergency-tile-content", context).each(function (index) {
      // get some height for our math
      var $wrapper = $(this);
      var $standfirst = $(".field-emergency-body", $wrapper);

      $(window).resize(function () {
          $standfirst.css("height", "auto");

          var heightTotal = $wrapper.height();
          var heightTaken =
            $(".field-post-date", $wrapper).outerHeight() +
            $(".field-standfirst", $wrapper).outerHeight() +
            $(".field-node-link", $wrapper).outerHeight() +
            $(".field-title-field", $wrapper).outerHeight();

          var heightAvailable = heightTotal - heightTaken;


          var normalisedHeight = normalised_available_height($standfirst, heightAvailable);

          $standfirst.css("height", normalisedHeight);
        })
        .resize();
      $standfirst.dotdotdot({watch: 'window'});
    });

    $(".bx-caption", context).each(function (index) {
      var $caption = $(this);
      var $title = $(".field-title-field", this);
      var $wrapper = $(this).parents('.bx-wrapper');
      var $arrow = $('.bx-next', $wrapper);
      var $arrowOffset = $arrow.position();
      var $standfirst = $('.field-bx-caption', this);

      // get some height for our math
      var heightAvailable = $wrapper.innerHeight();
      var heightTaken =
        $arrow.outerHeight(true) + $caption.outerHeight(true);

      if (typeof $arrowOffset != "undefined") {
        heightTaken += $arrowOffset.top;
      }
      if (heightAvailable < heightTaken) {
        var height = $standfirst.height() - heightTaken + heightAvailable;
        var normalisedHeight = normalised_available_height($standfirst, height);

        $standfirst.css("height", normalisedHeight);
        $standfirst.dotdotdot({watch: 'window'});
      }
    });
  }

  function normalised_available_height(container, height) {
    var lineheight = parseInt(container.css('line-height'));
    var lines = Math.floor(height / lineheight);
    return lines * lineheight;
  }

  Drupal.behaviors.galleryCaptions = {
    attach: function (context, settings) {
      $(".slide-caption").dotdotdot(({watch: 'window'}));
    }
  }

  Drupal.behaviors.lineClamp = {
    attach: function (context, settings) {
      // See http://stackoverflow.com/questions/779379/why-is-settimeoutfn-0-sometimes-useful.
      setTimeout(function () {
        lineClamp(context)
      }, 0);
    }
  }

  Drupal.behaviors.YouTube = {
    attach: function (context, settings) {

      if (!jQuery.browser.mobile) {
        var tag = document.createElement('script');
        tag.src = "//www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        // This function creates an <iframe> (and YouTube player) after the API code downloads.
        //  initialize the player when the API becomes available to the page
        var ytPlayers = {};

        function onYouTubeIframeAPIReady() {
          //get all YouTube iframe IDs
          $(".yt-player").each(function () {
            ytPlayers[this.id] = new YT.Player(this.id);
          });
        }

        // onYouTubeIframeAPIReady needs to be available
        // directly in the window for the iframe_api to call
        window.ytPlayers = ytPlayers;
        window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
      }
    }
  }

  Drupal.behaviors.mediaSpotlight = {
    attach: function (context, settings) {
      $('.media-spotlight-inner').dotdotdot({watch: 'window'});
    }
  }

  Drupal.behaviors.postcardArticle = {
    attach: function (context, settings) {
      var $postcards = $('.view-mode-postcard.node-article');
      // calculate initial bottom position of the postcard text content
      $postcards.each(function () {
        set_postcard_text_styles($(this), false);
        $(".field-standfirst", this).dotdotdot({watch: 'window'});
      });

      // add the hover class to postcard
      $postcards.hover(
        function (e) {
          $(this).addClass('hover');
          set_postcard_text_styles($(this), true);
        }, function (e) {
          $(this).removeClass('hover');
          set_postcard_text_styles($(this), false);
        }
      );
    }
  }

  // Overlay behaviour for snapshots
  Drupal.behaviors.postcardVideo = {
    attach: function (context, settings) {
      var $postcards = $('.view-mode-postcard.node-video, .view-mode-postcard.layrow-tile-image');

      // calculate initial bottom position of the postcard text content
      $postcards.each(function () {
        set_postcard_text_styles($(this), false);
        _postcard_video_standfirst(this);
      });

      //// add the hover class to postcard
      $postcards.hover(
        function (e) {
          $(this).addClass('hover');
          set_postcard_text_styles($(this), true);
        }, function (e) {
          $(this).removeClass('hover');
          set_postcard_text_styles($(this), false);
        }
      );

      // show the video when the user clicks on play
      $('.field-icon-video-play').click(
        function (e) {
          $(this).parent().addClass('show-video');
          if (!jQuery.browser.mobile) {
            var ytIframeID = $(this).parents().find(".yt-player")[0].id;
            var ytPlayer = ytPlayers[ytIframeID];
            ytPlayer.playVideo();
          }
        }
      );

      function _postcard_video_standfirst(context) {
        var heightTaken = $(".field-title-field", context).outerHeight() +
          $(".field-topics").outerHeight();
        // i frigging love magic numbers
        var maxContainerHeight = 117;
        var availableHeight = maxContainerHeight - heightTaken;

        var height = normalised_available_height($(context), availableHeight);

        var standfirstHeight = $(".field-standfirst p", context).outerHeight();

        if (standfirstHeight > height) {
          $(".field-standfirst p", context).css("height", height);
          $(".field-standfirst p", context).dotdotdot({watch: 'window'});
        }

        var totalHeight = $(".field-standfirst p", context).outerHeight() +
          heightTaken;

        if (totalHeight < maxContainerHeight) {
          $(".postcart-text-content", context).css("height", totalHeight);
        } else {
          $(".postcart-text-content", context).css("height", maxContainerHeight);
        }
      }

      function normalised_available_height(container, height) {
        var lineheight = parseInt(container.css('line-height'));
        var lines = Math.floor(height / lineheight);

        return lines * lineheight;
      }
    }
  };

  // function to set the styles for the postcard texts
  function set_postcard_text_styles($postcard, showStandfirst) {
    var $postcardTextContent = $postcard.find('.postcard-text-content');

    // get the height of the title field & the topic
    var heightTaken =
      $(".field-title-field", $postcardTextContent).outerHeight() +
      $(".field-topics", $postcardTextContent).outerHeight();
    var styles = {height: heightTaken};

    if (showStandfirst == true) {
      heightTaken += $(".field-standfirst", $postcardTextContent).outerHeight() +
        $(".field-node-link", $postcardTextContent).outerHeight();
      styles.height = heightTaken + 8;
      styles.bottom = 25;
    }
    else {
      styles.bottom = 15;
      styles.overflow = "hidden";
    }

    // set the styles
    $postcardTextContent.css(styles);
  }

  // create a popup window for sharing services
  Drupal.behaviors.serviceLinksPopup = {
    attach: function (context, settings) {
      $(".service-links > a").click(function () {
        var popupWin = window.open($(this).prop('href'), '', 'location=1,height=400,width=800');
        if (window.focus) {
          popupWin.focus();
        }
        return false;
      });
    }
  }

  // behaviour for the mmenu mobile menu
  Drupal.behaviors.mobileMenu = {
    attach: function (context, settings) {

      $("body").append($("<nav id='mobile-menu' />"));


      $("ul.secondary-menu").children().each(function (index, item) {
        $(item).addClass("mmenu-secondary-menu");
      });

      $("#mobile-menu").append($("<ul class='main-menu' />"));

      $('#mobile-menu > .main-menu').append(
        $("#primary-menu > ul.main-menu").clone().children());
      $('#mobile-menu > .main-menu').append(
        $("#secondary-menu > ul.secondary-menu").clone().children());


      $("#mobile-menu").mmenu({
        "offCanvas": {
          "zposition": "front"
        }
      });
    }
  }

  // mobile search configuration
  Drupal.behaviors.mobileSearch = {
    attach: function (context, settings) {
      $("body").append($("<div class='mobile-search-box' />"));
      $("a#mobile-search").mousedown(function (e) {

        e.stopImmediatePropagation();

        toggleMobileSearchVisibility();

        $(".search-form-text").focus();

        /*$(".search-form-text").focusout(function() {*/
        //toggleMobileSearchVisibility();
        /*});*/

        return false;
      });
    }
  }

  // TODO flag for review
  Drupal.behaviors.removeBxsliderAttr = {
    attach: function (context, settings) {
      $('.bxslider li img').each(function () {
        $(this).removeAttr('height');
        $(this).removeAttr('width');
      });
    }
  }


  function toggleMobileSearchVisibility() {
    if ($(".mobile-search-button>a").hasClass("clicked")) {
      $(".mobile-search-box").removeClass("visible");
      $(".mobile-search-button>a").removeClass("clicked");
      $(".search-box").removeClass("visible");
    } else {
      $(".mobile-search-box").addClass("visible");
      $(".search-box").addClass("visible");
      $(".mobile-search-button>a").addClass("clicked");
    }
  }

})(jQuery, Drupal, this, this.document);

;
