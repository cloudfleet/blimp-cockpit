"use strict";angular.module("blimpCockpitApp",["ngAnimate","ngCookies","ngResource","ngSanitize","ngTouch","ngStorage","ui.router","ui.bootstrap","ui.utils","ui.load","ui.jq","pascalprecht.translate","ui.calendar"]),angular.module("blimpCockpitApp").config(["$controllerProvider","$compileProvider","$filterProvider","$provide",function(a,b,c,d){var e=angular.module("blimpCockpitApp");e.controller=a.register,e.directive=b.directive,e.filter=c.register,e.factory=d.factory,e.service=d.service,e.constant=d.constant,e.value=d.value}]).config(["$translateProvider",function(a){a.useStaticFilesLoader({prefix:"/scripts/l10n/",suffix:".json"}),a.preferredLanguage("en"),a.useLocalStorage()}]),angular.module("blimpCockpitApp").run(["$state","$rootScope","cockpitApi",function(a,b,c){b.$on("$stateChangeStart",function(a,b){return console.log("Going to "+b.name),!0})}]).run(["$rootScope","$state","$stateParams",function(a,b,c){a.$state=b,a.$stateParams=c}]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(a,b,c){c.html5Mode(!0),b.otherwise("app/cockpit"),a.state("app",{resolve:{cockpitApi:"cockpitApi",currentUser:["cockpitApi",function(a){return a.loadCurrentUser()}]},"abstract":!0,url:"/app",templateUrl:"views/app.html",data:{requireLogin:!0}}).state("app.cockpit",{url:"/cockpit",templateUrl:"views/app_dashboard.html"}).state("app.mail",{"abstract":!0,url:"/mail",templateUrl:"views/mail.html"}).state("app.mail.list",{url:"/inbox/{fold}",templateUrl:"views/mail.list.html"}).state("app.mail.detail",{url:"/{mailId:[0-9]{1,4}}",templateUrl:"views/mail.detail.html"}).state("app.mail.compose",{url:"/compose",templateUrl:"views/mail.new.html"}).state("app.calendar",{url:"/calendar",templateUrl:"views/app_calendar.html"}).state("apps",{"abstract":!0,resolve:{cockpitApi:"cockpitApi",currentUser:["cockpitApi",function(a){return a.loadCurrentUser()}]},url:"/apps",templateUrl:"views/layout.html",data:{requireLogin:!0}}).state("apps.note",{url:"/note",templateUrl:"views/apps_note.html"}).state("apps.contact",{url:"/contact",templateUrl:"views/apps_contact.html"}).state("app.todo",{url:"/todo",templateUrl:"views/apps_todo.html"}).state("app.todo.list",{url:"/{fold}"}).state("access",{url:"/access",template:'<div ui-view class="fade-in-right-big smooth"></div>',data:{requireLogin:!1}}).state("access.signin",{url:"/signin",templateUrl:"views/page_signin.html"}).state("access.forgotpwd",{url:"/forgotpwd",templateUrl:"views/page_forgotpwd.html"})}]),angular.module("blimpCockpitApp").controller("FullcalendarCtrl",["$scope",function(a){var b=new Date,c=b.getDate(),d=b.getMonth(),e=b.getFullYear();a.events=[{title:"All Day Event",start:new Date(e,d,1),className:["b-l b-2x b-info"],location:"New York",info:"This a all day event that will start from 9:00 am to 9:00 pm, have fun!"},{title:"Dance class",start:new Date(e,d,3),end:new Date(e,d,4,9,30),allDay:!1,className:["b-l b-2x b-danger"],location:"London",info:"Two days dance training class."},{title:"Game racing",start:new Date(e,d,6,16,0),className:["b-l b-2x b-info"],location:"Hongkong",info:"The most big racing of this year."},{title:"Soccer",start:new Date(e,d,8,15,0),className:["b-l b-2x b-info"],location:"Rio",info:"Do not forget to watch."},{title:"Family",start:new Date(e,d,9,19,30),end:new Date(e,d,9,20,30),className:["b-l b-2x b-success"],info:"Family party"},{title:"Long Event",start:new Date(e,d,c-5),end:new Date(e,d,c-2),className:["bg-success bg"],location:"HD City",info:"It is a long long event"},{title:"Play game",start:new Date(e,d,c-1,16,0),className:["b-l b-2x b-info"],location:"Tokyo",info:"Tokyo Game Racing"},{title:"Birthday Party",start:new Date(e,d,c+1,19,0),end:new Date(e,d,c+1,22,30),allDay:!1,className:["b-l b-2x b-primary"],location:"New York",info:"Party all day"},{title:"Repeating Event",start:new Date(e,d,c+4,16,0),alDay:!1,className:["b-l b-2x b-warning"],location:"Home Town",info:"Repeat every day"},{title:"Click for Google",start:new Date(e,d,28),end:new Date(e,d,29),url:"http://google.com/",className:["b-l b-2x b-primary"]},{title:"Feed cat",start:new Date(e,d+1,6,18,0),className:["b-l b-2x b-info"]}],a.precision=400,a.lastClickTime=0,a.alertOnEventClick=function(b){var c=(new Date).getTime();c-a.lastClickTime<=a.precision&&a.events.push({title:"New Event",start:b,className:["b-l b-2x b-info"]}),a.lastClickTime=c},a.alertOnDrop=function(b,c){a.alertMessage="Event Dropped to make dayDelta "+c},a.alertOnResize=function(b,c){a.alertMessage="Event Resized to make dayDelta "+c},a.overlay=$(".fc-overlay"),a.alertOnMouseOver=function(b,c){a.event=b,a.overlay.removeClass("left right top").find(".arrow").removeClass("left right top pull-up");var d=$(c.target).closest(".fc-event"),e=d.closest(".calendar"),f=d.offset().left-e.offset().left,g=e.width()-(d.offset().left-e.offset().left+d.width()),h=e.height()-(d.offset().top-e.offset().top+d.height());g>a.overlay.width()?a.overlay.addClass("left").find(".arrow").addClass("left pull-up"):f>a.overlay.width()?a.overlay.addClass("right").find(".arrow").addClass("right pull-up"):a.overlay.find(".arrow").addClass("top"),h<a.overlay.height()&&a.overlay.addClass("top").find(".arrow").removeClass("pull-up").addClass("pull-down"),0===d.find(".fc-overlay").length&&d.append(a.overlay)},a.initView=function(b){a.uiConfig={calendar:{height:450,editable:!0,header:{left:"prev",center:"title",right:"next"},defaultView:b,dayClick:a.alertOnEventClick,eventDrop:a.alertOnDrop,eventResize:a.alertOnResize,eventMouseover:a.alertOnMouseOver}}},a.addEvent=function(){a.events.push({title:"New Event",start:new Date(e,d,c),className:["b-l b-2x b-info"]})},a.remove=function(b){a.events.splice(b,1)},a.changeView=function(a){$(".calendar").fullCalendar("changeView",a)},a.today=function(){$(".calendar").fullCalendar("today")},a.eventSources=[a.events]}]),angular.module("blimpCockpitApp").controller("AppCtrl",["$scope","$translate","$localStorage","$window","cockpitApi","mailpileApi",function(a,b,c,d,e,f){function g(a){var b=a.navigator.userAgent||a.navigator.vendor||a.opera;return/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/.test(b)}var h=!!navigator.userAgent.match(/MSIE/i);h&&angular.element(d.document.body).addClass("ie"),g(d)&&angular.element(d.document.body).addClass("smart"),a.getCurrentUser=function(){return e.getCurrentUser()},a.app={name:"cloud fleet",version:"1.0.1",color:{primary:"#e26826",info:"#088076",success:"#27c24c",warning:"#fad733",danger:"#f05050",light:"#e8eff0",dark:"#3a3f51",black:"#1c2b36"},settings:{themeID:1,navbarHeaderColor:"bg-cf-orange",asideColor:"bg-black",headerFixed:!0,asideFixed:!0,asideFolded:!0}},angular.isDefined(c.settings)?a.app.settings=c.settings:c.settings=a.app.settings,a.lang={isopen:!1},a.langs={en:"English",de_DE:"German"},a.selectLang=a.langs[b.proposedLanguage()]||"English",a.setLang=function(c){a.selectLang=a.langs[c],b.use(c),a.lang.isopen=!a.lang.isopen},a.logOut=function(){e.logOut().then(function(a){console.log(a)},function(){})}}]),angular.module("blimpCockpitApp").controller("MenuCtrl",["$scope","mailpileApi",function(a,b){console.log("Creating menu scope"),b.getInboxCount().then(function(b){a.inboxCount=b})}]),angular.module("blimpCockpitApp").controller("MailCtrl",["$scope",function(a){a.folds=[{name:"Inbox",filter:""},{name:"Starred",filter:"starred"},{name:"Sent",filter:"sent"},{name:"Important",filter:"important"},{name:"Draft",filter:"draft"},{name:"Trash",filter:"trash"}],a.labels=[{name:"cloudfleet",filter:"cloudfleet",color:"#23b7e5"},{name:"Client",filter:"client",color:"#fad733"},{name:"Work",filter:"work",color:"#27c24c"}],a.addLabel=function(){a.labels.push({name:a.newLabel.name,filter:angular.lowercase(a.newLabel.name),color:"#ccc"}),a.newLabel.name=""},a.labelClass=function(a){return{"b-l-info":"angular"===angular.lowercase(a),"b-l-warning":"client"===angular.lowercase(a),"b-l-success":"work"===angular.lowercase(a)}}}]),angular.module("blimpCockpitApp").controller("MailListCtrl",["$scope","mails","$stateParams",function(a,b,c){a.fold=c.fold,b.all().then(function(b){a.mails=b})}]),angular.module("blimpCockpitApp").controller("MailDetailCtrl",["$scope","mails","$stateParams",function(a,b,c){b.get(c.mailId).then(function(b){a.mail=b})}]),angular.module("blimpCockpitApp").controller("MailNewCtrl",["$scope",function(a){a.mail={to:"",subject:"",content:""},a.tolist=[{name:"James",email:"james@gmail.com"},{name:"Luoris Kiso",email:"luoris.kiso@hotmail.com"},{name:"Lucy Yokes",email:"lucy.yokes@gmail.com"}]}]),angular.module("blimpCockpitApp").directive("labelColor",function(){return function(a,b,c){b.css({color:c.color})}}),angular.module("blimpCockpitApp").factory("mails",["$http",function(a){var b="scripts/controllers/mails.json",c=a.get(b).then(function(a){return a.data.mails}),d={};return d.all=function(){return c},d.get=function(a){return c.then(function(b){for(var c=0;c<b.length;c++)if(b[c].id===a)return b[c];return null})},d}]),angular.module("blimpCockpitApp").controller("ContactCtrl",["$scope","$http","$filter",function(a,b,c){b.get("scripts/controllers/contacts.json").then(function(b){a.items=b.data.items,a.item=c("orderBy")(a.items,"first")[0],a.item.selected=!0}),a.filter="",a.groups=[{name:"Coworkers"},{name:"Family"},{name:"Friends"},{name:"Partners"},{name:"Group"}],a.createGroup=function(){var b={name:"New Group"};b.name=a.checkItem(b,a.groups,"name"),a.groups.push(b)},a.checkItem=function(a,b,c){var d=0;return angular.forEach(b,function(b){if(0===b[c].indexOf(a[c])){var e=b[c].replace(a[c],"").trim();d=e?Math.max(d,parseInt(e)+1):1}}),a[c]+(d?" "+d:"")},a.deleteGroup=function(b){a.groups.splice(a.groups.indexOf(b),1)},a.selectGroup=function(b){angular.forEach(a.groups,function(a){a.selected=!1}),a.group=b,a.group.selected=!0,a.filter=b.name},a.selectItem=function(b){angular.forEach(a.items,function(a){a.selected=!1,a.editing=!1}),a.item=b,a.item.selected=!0},a.deleteItem=function(b){a.items.splice(a.items.indexOf(b),1),a.item=c("orderBy")(a.items,"first")[0],a.item&&(a.item.selected=!0)},a.createItem=function(){var b={group:"Friends",avatar:"img/a0.jpg"};a.items.push(b),a.selectItem(b),a.item.editing=!0},a.editItem=function(a){a&&a.selected&&(a.editing=!0)},a.doneEditing=function(a){a.editing=!1}}]),angular.module("blimpCockpitApp").factory("todoStorage",function(){var a="todos";return{get:function(){return JSON.parse(localStorage.getItem(a)||"[]")},put:function(b){localStorage.setItem(a,JSON.stringify(b))}}}),angular.module("blimpCockpitApp").controller("TodoCtrl",["$scope","$location","$filter","todoStorage",function(a,b,c,d){var e=a.todos=d.get();a.newTodo="",a.remainingCount=c("filter")(e,{completed:!1}).length,""===b.path()&&b.path("/"),a.location=b,a.$watch("location.path()",function(b){a.statusFilter={"/app/todo/active":{completed:!1},"/app/todo/completed":{completed:!0}}[b]}),a.$watch("remainingCount == 0",function(b){a.allChecked=b}),a.addTodo=function(){var b=a.newTodo.trim();0!==b.length&&(e.push({title:b,completed:!1}),d.put(e),a.newTodo="",a.remainingCount++)},a.editTodo=function(b){b.editedTodo=!0,a.originalTodo=angular.extend({},b)},a.doneEditing=function(b){b.editedTodo=!1,b.title=b.title.trim(),b.title||a.removeTodo(b),d.put(e)},a.revertEditing=function(b){e[e.indexOf(b)]=a.originalTodo,a.doneEditing(a.originalTodo)},a.removeTodo=function(b){a.remainingCount-=b.completed?0:1,e.splice(e.indexOf(b),1),d.put(e)},a.todoCompleted=function(b){a.remainingCount+=b.completed?-1:1,d.put(e)},a.clearCompletedTodos=function(){a.todos=e=e.filter(function(a){return!a.completed}),d.put(e)},a.markAll=function(b){e.forEach(function(a){a.completed=b}),a.remainingCount=b?0:e.length,d.put(e)}}]),angular.module("blimpCockpitApp").controller("NoteCtrl",["$scope","$http",function(a,b){b.get("scripts/controllers/notes.json").then(function(b){a.notes=b.data.notes,a.note=a.notes[0],a.notes[0].selected=!0}),a.colors=["primary","info","success","warning","danger","dark"],a.createNote=function(){var b={content:"New note",color:a.colors[Math.floor(3*Math.random())],date:Date.now()};a.notes.push(b),a.selectNote(b)},a.deleteNote=function(b){a.notes.splice(a.notes.indexOf(b),1),b.selected&&(a.note=a.notes[0],a.notes.length&&(a.notes[0].selected=!0))},a.selectNote=function(b){angular.forEach(a.notes,function(a){a.selected=!1}),a.note=b,a.note.selected=!0}}]),angular.module("blimpCockpitApp").controller("SigninFormController",["$scope","$http","$state","cockpitApi",function(a,b,c,d){a.user={},a.authError=null,a.login=function(){a.authError=null,d.login(a.user.username,a.user.password).then(function(){console.log("logged in successfully"),c.go("app.cockpit")},function(a){console.log(a)})}}]),angular.module("blimpCockpitApp").controller("SignupFormController",["$scope","$http","$state",function(a,b,c){a.user={},a.authError=null,a.signup=function(){a.authError=null,b.post("api/signup",{name:a.user.username,email:a.user.email,password:a.user.password}).then(function(b){b.data.user?c.go("app.cockpit"):a.authError=b},function(){a.authError="Server Error"})}}]),angular.module("ui.load",[]).service("uiLoad",["$document","$q","$timeout",function(a,b,c){var d=[],e=!1,f=b.defer();this.load=function(a){a=angular.isArray(a)?a:a.split(/\s+/);var b=this;return e||(e=f.promise),angular.forEach(a,function(a){e=e.then(function(){return a.indexOf(".css")>=0?b.loadCSS(a):b.loadScript(a)})}),f.resolve(),e},this.loadScript=function(e){if(d[e])return d[e].promise;var f=b.defer(),g=a[0].createElement("script");return g.src=e,g.onload=function(a){c(function(){f.resolve(a)})},g.onerror=function(a){c(function(){f.reject(a)})},a[0].body.appendChild(g),d[e]=f,f.promise},this.loadCSS=function(e){if(d[e])return d[e].promise;var f=b.defer(),g=a[0].createElement("link");return g.rel="stylesheet",g.type="text/css",g.href=e,g.onload=function(a){c(function(){f.resolve(a)})},g.onerror=function(a){c(function(){f.reject(a)})},a[0].head.appendChild(g),d[e]=f,f.promise}}]),angular.module("blimpCockpitApp").factory("$localstorage",["$window",function(a){return{set:function(b,c){a.localStorage[b]=c},get:function(b,c){return a.localStorage[b]||c},setObject:function(b,c){a.localStorage[b]=c&&JSON.stringify(c)||null},getObject:function(b){var c=a.localStorage[b];return c&&JSON.parse(c)||null}}}]),angular.module("blimpCockpitApp").factory("cockpitApi",["$resource","$http","$q","$rootScope","$state","$localstorage",function(a,b,c,d,e,f){var g="cloudfleet.cockpit.currentUser",h=function(a){f.setObject(g,a)},i=function(){f.getObject(g,null)},j={getCurrentUser:function(){return f.getObject(g)},login:function(a,d){console.log("logging in user "+a);var e=c.defer();return b.post("/musterroll/login",{username:a,password:d}).success(function(){b.get("/musterroll/api/v1/currentUser").success(function(a){h(a),e.resolve(a)}).error(function(){e.resolve(!1)})}).error(function(){e.resolve(!1)}),e.promise},logOut:function(){var a=c.defer();return b.get("/musterroll/logout").success(function(b){i(),a.resolve(b)}).error(function(b,c){a.resolve(c)}),a.promise},loadCurrentUser:function(){var a=c.defer();return a.resolve(status),b.get("/musterroll/api/v1/currentUser").success(function(b){h(b),a.resolve(b)}).error(function(b,c){i(),a.resolve(null)}),a.promise}};return j}]),angular.module("blimpCockpitApp").directive("setNgAnimate",["$animate",function(a){return{link:function(b,c,d){b.$watch(function(){return b.$eval(d.setNgAnimate,b)},function(b){a.enabled(!!b,c)})}}}]),angular.module("blimpCockpitApp").directive("uiButterbar",["$rootScope","$anchorScroll",function(a,b){return{restrict:"AC",template:'<span class="bar"></span>',link:function(a,c){c.addClass("butterbar hide"),a.$on("$stateChangeStart",function(){b(),c.removeClass("hide").addClass("active")}),a.$on("$stateChangeSuccess",function(a){a.targetScope.$watch("$viewContentLoaded",function(){c.addClass("hide").removeClass("active")})})}}}]),angular.module("blimpCockpitApp").directive("cfUiCalendar",function(){return{restrict:"A",scope:{title:"=",showDateSelectors:"=",showList:"=",view:"=",showClass:"="},templateUrl:"views/calendar.html"}}),angular.module("blimpCockpitApp").directive("uiFocus",["$timeout","$parse",function(a,b){return{link:function(c,d,e){var f=b(e.uiFocus);c.$watch(f,function(b){b===!0&&a(function(){d[0].focus()})}),d.bind("blur",function(){c.$apply(f.assign(c,!1))})}}}]),angular.module("blimpCockpitApp").directive("uiFullscreen",["$document",function(a){return{restrict:"AC",template:'<i class="fa fa-expand fa-fw text"></i><i class="fa fa-compress fa-fw text-active"></i>',link:function(b,c,d){c.addClass("hide"),screenfull.enabled&&!navigator.userAgent.match(/Trident.*rv:11\./)&&c.removeClass("hide"),c.on("click",function(){var a;d.target&&(a=$(d.target)[0]),screenfull.toggle(a)}),a.on(screenfull.raw.fullscreenchange,function(){screenfull.isFullscreen?c.addClass("active"):c.removeClass("active")})}}}]),angular.module("ui.jq",["ui.load"]).value("uiJqConfig",{}).directive("uiJq",["uiJqConfig","$timeout",function(a,b){var c={};return{restrict:"A",compile:function(d,e){var f=a&&a[e.uiJq];return function(a,d,e){function g(){var b=[];return e.uiOptions?(b=a.$eval("["+e.uiOptions+"]"),angular.isObject(f)&&angular.isObject(b[0])&&(b[0]=angular.extend({},f,b[0]))):f&&(b=[f]),b}function h(){b(function(){d[e.uiJq].apply(d,g())},0,!1)}function i(){e.uiRefresh&&a.$watch(e.uiRefresh,function(){h()})}e.ngModel&&d.is("select,input,textarea")&&d.bind("change",function(){d.trigger("input")}),c[e.uiJq]?uiLoad.load(c[e.uiJq]).then(function(){h(),i()})["catch"](function(){}):(h(),i())}}}}]),angular.module("blimpCockpitApp").directive("uiModule",["MODULE_CONFIG","uiLoad","$compile",function(a,b,c){return{restrict:"A",compile:function(d){var e=d.contents().clone();return function(d,f,g){f.contents().remove(),b.load(a[g.uiModule]).then(function(){c(e)(d,function(a){f.append(a)})})}}}}]),angular.module("blimpCockpitApp").directive("uiNav",[function(){return{restrict:"AC",link:function(a,b){var c,d=$(window),e=768,f=$(".app-aside"),g=".dropdown-backdrop";b.on("click","a",function(a){c&&c.trigger("mouseleave.nav");var b=$(this);b.parent().siblings(".active").toggleClass("active"),b.next().is("ul")&&b.parent().toggleClass("active")&&a.preventDefault(),b.next().is("ul")||d.width()<e&&$(".app-aside").removeClass("show off-screen")}),b.on("mouseenter","a",function(a){if(c&&c.trigger("mouseleave.nav"),$("> .nav",f).remove(),!(!$(".app-aside-fixed.app-aside-folded").length||d.width()<e||$(".app-aside-dock").length)){var b,h=$(a.target),i=$(window).height(),j=50,k=150;!h.is("a")&&(h=h.closest("a")),h.next().is("ul")&&(c=h.next(),h.parent().addClass("active"),b=h.parent().position().top+j,c.css("top",b),b+c.height()>i&&c.css("bottom",0),b+k>i&&c.css("bottom",i-b-j).css("top","auto"),c.appendTo(f),c.on("mouseleave.nav",function(){$(g).remove(),c.appendTo(h.parent()),c.off("mouseleave.nav").css("top","auto").css("bottom","auto"),h.parent().removeClass("active")}),$(".smart").length&&$('<div class="dropdown-backdrop"/>').insertAfter(".app-aside").on("click",function(a){a&&a.trigger("mouseleave.nav")}))}}),f.on("mouseleave",function(){c&&c.trigger("mouseleave.nav"),$("> .nav",f).remove()})}}}]),angular.module("blimpCockpitApp").directive("uiScrollTo",["$location","$anchorScroll",function(a,b){return{restrict:"AC",link:function(c,d,e){d.on("click",function(){a.hash(e.uiScrollTo),b()})}}}]),angular.module("blimpCockpitApp").directive("uiShift",["$timeout",function(a){return{restrict:"A",link:function(b,c,d){function e(){a(function(){var a=d.uiShift,b=d.target;h.hasClass("in")||h[a](b).addClass("in")})}function f(){g&&g.prepend(c),!g&&h.insertAfter(j),h.removeClass("in")}var g,h=$(c),i=$(window),j=h.prev(),k=i.width();!j.length&&(g=h.parent()),768>k&&e()||f(),i.resize(function(){k!==i.width()&&a(function(){i.width()<768&&e()||f(),k=i.width()})})}}}]),angular.module("blimpCockpitApp").directive("uiToggleClass",[function(){return{restrict:"AC",link:function(a,b,c){b.on("click",function(a){function d(a,b){for(var c=new RegExp("\\s"+a.replace(/\*/g,"[A-Za-z0-9-_]+").split(" ").join("\\s|\\s")+"\\s","g"),d=" "+$(b)[0].className+" ";c.test(d);)d=d.replace(c," ");$(b)[0].className=$.trim(d)}a.preventDefault();var e=c.uiToggleClass.split(","),f=c.target&&c.target.split(",")||new Array(b),g=0;angular.forEach(e,function(a){var b=f[f.length&&g];-1!==a.indexOf("*")&&d(a,b),$(b).toggleClass(a),g++}),$(b).toggleClass("active")})}}}]),angular.module("blimpCockpitApp").filter("fromNow",function(){return function(a){return moment(a).fromNow()}}),angular.module("blimpCockpitApp").factory("mailpileApi",["$resource","$http","$q","$rootScope","$state","$localstorage","cockpitApi",function(a,b,c,d,e,f,g){var h="/mailpile/"+g.getCurrentUser(),i=h+"/api/0/",j={getInboxCount:function(){var a=c.defer();return b.get(i+"search/?q=in:inbox").then(function(b){b.stats?a.resolve(b.stats.total):a.resolve("n/a")},function(b,c){a.resolve("n/a")}),a.promise}};return j}]),angular.module("blimpCockpitApp").controller("DashboardCtrl",["$scope","mailpileApi",function(a,b){console.log("Creating cockpit scope"),b.getInboxCount().then(function(b){a.inboxCount=b})}]);
//# sourceMappingURL=scripts.582f194f.js.map