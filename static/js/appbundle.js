var hedyApp=(()=>{var V=Object.defineProperty;var se=t=>V(t,"__esModule",{value:!0});var le=(t,e)=>{se(t);for(var r in e)V(t,r,{get:e[r],enumerable:!0})};var Ce={};le(Ce,{auth:()=>n,confetti_cannon:()=>ke,copy_to_clipboard:()=>ne,create_class:()=>pe,delete_class:()=>ge,error:()=>p,get_trimmed_code:()=>J,join_class:()=>B,load_quiz:()=>$e,modal:()=>c,prompt_unsaved:()=>be,remove_student:()=>me,rename_class:()=>fe,reset_level_preferences:()=>we,runit:()=>te,save_level_settings:()=>he,saveit:()=>F,saveitP:()=>G,share_program:()=>xe,success:()=>j,theGlobalEditor:()=>S,tryPaletteCode:()=>_e,viewProgramLink:()=>re});var H=class{constructor(){$("#modal-confirm-button").on("click",()=>this.hide()),$("#modal-no-button").on("click",()=>this.hide()),$("#modal-cancel-button").on("click",()=>this.hide())}show(){$("#modal-mask").show(),$("#modal-content").show(),window.scrollTo(0,0)}hide(){$("#modal-mask").hide(),$("#modal-content").hide(),$("#modal-alert").hide(),$("#modal-prompt").hide(),$("#modal-confirm").hide()}alert(e,r){$("#modal-alert-text").text(e),this.show(),$("#modal-alert").show(),r&&setTimeout(()=>this.hide(),r)}confirm(e,r){$("#modal-confirm-text").text(e),this.show(),$("#modal-confirm").show(),$("#modal-yes-button").off("click").on("click",()=>{this.hide(),r()})}prompt(e,r,a){$("#modal-prompt-text").text(e),this.show(),$("#modal-prompt").show(),r&&$("#modal-prompt-input").val(r),$("#modal-ok-button").off("click").on("click",()=>{this.hide();let o=$("#modal-prompt-input").val();typeof o=="string"&&a(o)})}},f,j={setEditor(t){f=t},hide:function(){$("#okbox").hide(),f==null||f.resize()},showWarning(t,e){$("#okbox .caption").text(t),$("#okbox .details").text(e),$("#okbox").show(),f==null||f.resize()},show(t){$("#okbox .caption").text(t),$("#okbox").show(),f==null||f.resize(),setTimeout(function(){$("#okbox").hide(),f==null||f.resize()},3e3)}},p={setEditor(t){f=t},hide(){$("#errorbox").hide(),$("#warningbox").hide(),f==null||f.resize()},showWarning(t,e){$("#warningbox .caption").text(t),$("#warningbox .details").text(e),$("#warningbox").show(),f==null||f.resize()},show(t,e){$("#errorbox .caption").text(t),$("#errorbox .details").html(e),$("#errorbox").show(),f==null||f.resize()}},c=new H;function m(){return{gobble:[{regex:".*",token:"text",next:"start"}],expression_eol:ce([{regex:"'[^']*'",token:"constant.character"},{regex:"at random",token:"keyword"},{regex:"$",token:"text"}])}}var ue=[{name:"level1",rules:h(m(),M("gobble"),O(),g("start",{regex:A("echo"),token:"keyword",next:"gobble"}),g("start",{regex:A("ask"),token:"keyword",next:"gobble"}))},{name:"level2",rules:h(m(),M("expression_eol"),C("gobble"),w("gobble"),O())},{name:"level3",rules:h(m(),O(),M("expression_eol"),C(),w())},{name:"level4",rules:h(m(),M(),C(),w(),L(),y())},{name:"level5",rules:h(m(),M(),C(),w(),L(),y(),N())},{name:"level6",rules:h(m(),M(),C(),w(),L(),y(),N(),_())},{name:"level7",rules:h(m(),M(),C(),w(),x(),y(),N(),_())},{name:"level8",rules:h(m(),M(),C(),w(),x(),y(),_(),z())},{name:"level9and10",rules:h(m(),M(),C(),w(),x(),y(),_(),K(),z())},{name:"level11",rules:h(m(),M(),C(),w(),x(),y(),_(),K())},{name:"level12",rules:h(m(),v(),b(),w(),x(),y(),_(),k())},{name:"level11",rules:h(m(),v(),b(),w(),x(),y(),_(),k())},{name:"level13",rules:h(m(),v(),b(),w(),x(),y(),_(),k())},{name:"level14",rules:h(m(),v(),b(),w(),x(),y(),_(),k())},{name:"level15",rules:h(m(),v(),b(),w(),x(),y(),_(),k())},{name:"level16",rules:h(m(),v(),b(),w(),x(),y(),_(),k())},{name:"level17",rules:h(m(),v(),b(),w(),x(),y(),_(),k())},{name:"level18and19",rules:h(m(),v(),b(),w(),x(),y(),_(),k())},{name:"level20",rules:h(m(),v(),b(),w(),x(),y(),_(),k())},{name:"level21",rules:h(m(),v(),b(),w(),x(),y(),_(),k())},{name:"level22",rules:h(m(),v(),b(),w(),x(),y(),_(),k())},{name:"level23",rules:h(m(),v(),b(),w(),x(),y(),_(),k())}];function ce(t){let e=[];for(let r of t)r.regex&&e.push({regex:r.regex+"$",token:r.token,next:"start"}),e.push(r);return e}function g(t,e){return r=>{Array.isArray(t)||(t=[t]);for(let a of t)r[a]||(r[a]=[]),Array.isArray(e)?r[a].push(...e):r[a].push(e);return r}}function R(...t){return e=>{for(let r of t)e=r(e);return e}}function h(t,...e){return R(...e)(t)}function M(t){return g("start",{regex:A("print"),token:"keyword",next:t!=null?t:"start"})}function C(t){return g("start",{regex:"(\\w+)( is ask )",token:["text","keyword"],next:t!=null?t:"expression_eol"})}function w(t){return g("start",{regex:"(\\w+)( is )",token:["text","keyword"],next:t!=null?t:"expression_eol"})}function v(){return g("start",{regex:"(print)(\\()",token:["keyword","paren.lparen"],next:"start"})}function O(){return R(g("start",{regex:"turn (left|right)?",token:"keyword",next:"start"}),g("start",{regex:"forward",token:"keyword",next:"start"}))}function b(){return g("start",{regex:"(\\w+)( is input)(\\()",token:["text","keyword","paren.lparen"],next:"start"})}function y(){return R(g("start",{regex:"'[^']*'",token:"constant.character"}),g("start",{regex:"at random",token:"keyword"}),g("start",{regex:"[, ]+",token:"punctuation.operator"}))}function L(){return R(g("start",{regex:A("if"),token:"keyword",next:"condition"}),g("start",{regex:A("else"),token:"keyword"}),g("condition",{regex:A("((is)|(in))"),token:"keyword",next:"start"}))}function x(){return R(g("start",{regex:A("if"),token:"keyword",next:"condition"}),g("start",{regex:"\\belse\\b",token:"keyword"}),g("condition",{regex:A("((is)|(in))"),token:"keyword",next:"start"}))}function _(){return g(["start","expression_eol"],[{regex:" \\* ",token:"keyword"},{regex:" \\+ ",token:"keyword"},{regex:" \\- ",token:"keyword"}])}function N(){return g("start",{regex:"(repeat)( \\w+ )(times)",token:["keyword","text","keyword"]})}function z(){return g("start",{regex:"(for )(\\w+)( in )(\\w+)",token:["keyword","text","keyword","text"]})}function K(){return g("start",{regex:"(for )(\\w+)( in range )(\\w+)( to )(\\w+)",token:["keyword","text","keyword","text","keyword","text"]})}function k(){return g("start",{regex:"(for )(\\w+)( in range)(\\()([\\s\\w]+)(,)([\\s\\w]+)(\\))",token:["keyword","text","keyword","paren.lparen","text","punctuation.operator","text","paren.rparen"]})}function de(t){for(let e of Object.values(t))for(let r of e)r.regex&&!r._loosened&&(r.regex=r.regex.replace(/ /g," +"),r._loosened=!0);return t}if(window.define)for(let t of ue)define("ace/mode/"+t.name,[],function(e,r,a){var o=e("ace/lib/oop"),i=e("ace/mode/text").Mode,s=e("ace/mode/text_highlight_rules").TextHighlightRules;function l(){this.$rules=de(t.rules),this.normalizeRules()}o.inherits(l,s);function u(){this.HighlightRules=l}o.inherits(u,i),r.Mode=u});function A(t){return"\\b"+t+" "}function pe(){c.prompt(n.texts.class_name_prompt,"",function(t){if(!t){c.alert(n.texts.class_name_empty);return}$.ajax({type:"POST",url:"/class",data:JSON.stringify({name:t}),contentType:"application/json",dataType:"json"}).done(function(e){location.reload()}).fail(function(e){if(e.responseText=="duplicate"){c.alert(n.texts.class_name_duplicate);return}console.error(e),p.show(ErrorMessages.Connection_error,JSON.stringify(e))})})}function fe(t){c.prompt(n.texts.class_name_prompt,"",function(e){if(!e){c.alert(n.texts.class_name_empty);return}$.ajax({type:"PUT",url:"/class/"+t,data:JSON.stringify({name:e}),contentType:"application/json",dataType:"json"}).done(function(r){location.reload()}).fail(function(r){if(r.responseText=="duplicate"){c.alert(n.texts.class_name_duplicate);return}console.error(r),p.show(ErrorMessages.Connection_error,JSON.stringify(r))})})}function ge(t){c.confirm(n.texts.delete_class_prompt,function(){$.ajax({type:"DELETE",url:"/class/"+t,contentType:"application/json",dataType:"json"}).done(function(e){window.location.pathname="/for-teachers"}).fail(function(e){console.error(e),p.show(ErrorMessages.Connection_error,JSON.stringify(e))})})}function B(t,e,r=!1){if(!n.profile)return c.confirm(n.texts.join_prompt,function(){localStorage.setItem("hedy-join",JSON.stringify({link:t,name:e})),window.location.pathname="/login"});$.ajax({type:"GET",url:t}).done(function(a){c.alert(n.texts.class_join_confirmation+" "+e),r||(window.location.pathname="/programs")}).fail(function(a){console.error(a),p.show(ErrorMessages.Connection_error,JSON.stringify(a))})}function me(t,e){c.confirm(n.texts.remove_student_prompt,function(){$.ajax({type:"DELETE",url:"/class/"+t+"/student/"+e,contentType:"application/json",dataType:"json"}).done(function(r){location.reload()}).fail(function(r){console.error(r),p.show(ErrorMessages.Connection_error,JSON.stringify(r))})})}function he(){console.log("Make a db call in the future...")}function we(){$("#adventures_overview li").each(function(){$(this).is(":visible")&&$(this).find(":input").prop("checked",!1)}),$("#attempts").val(5),$("#progress").val(5),$("#hide_level").prop("checked",!1)}var W={AF:"Afghanistan",AX:"\xC5land Islands",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua and Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia, Plurinational State of",BQ:"Bonaire, Sint Eustatius and Saba",BA:"Bosnia and Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",BN:"Brunei Darussalam",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos (Keeling) Islands",CO:"Colombia",KM:"Comoros",CG:"Congo",CD:"Congo, the Democratic Republic of the",CK:"Cook Islands",CR:"Costa Rica",CI:"C\xF4te d'Ivoire",HR:"Croatia",CU:"Cuba",CW:"Cura\xE7ao",CY:"Cyprus",CZ:"Czech Republic",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:"Falkland Islands (Malvinas)",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard Island and McDonald Islands",VA:"Holy See (Vatican City State)",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran, Islamic Republic of",IQ:"Iraq",IE:"Ireland",IM:"Isle of Man",IL:"Israel",IT:"Italy",JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",KP:"Korea, Democratic People's Republic of",KR:"Korea, Republic of",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Lao People's Democratic Republic",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MK:"Macedonia, the Former Yugoslav Republic of",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia, Federated States of",MD:"Moldova, Republic of",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestine, State of",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RE:"R\xE9union",RO:"Romania",RU:"Russian Federation",RW:"Rwanda",BL:"Saint Barth\xE9lemy",SH:"Saint Helena, Ascension and Tristan da Cunha",KN:"Saint Kitts and Nevis",LC:"Saint Lucia",MF:"Saint Martin (French part)",PM:"Saint Pierre and Miquelon",VC:"Saint Vincent and the Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome and Principe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SX:"Sint Maarten (Dutch part)",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia and the South Sandwich Islands",SS:"South Sudan",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SJ:"Svalbard and Jan Mayen",SZ:"Swaziland",SE:"Sweden",CH:"Switzerland",SY:"Syrian Arab Republic",TW:"Taiwan, Province of China",TJ:"Tajikistan",TZ:"Tanzania, United Republic of",TH:"Thailand",TL:"Timor-Leste",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad and Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks and Caicos Islands",TV:"Tuvalu",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",US:"United States",UM:"United States Minor Outlying Islands",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VE:"Venezuela, Bolivarian Republic of",VN:"Viet Nam",VG:"Virgin Islands, British",VI:"Virgin Islands, U.S.",WF:"Wallis and Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"};if(!window.AuthMessages)throw new Error('On a page where you load this JavaScript, you must also load the "client_messages.js" script');var n={texts:AuthMessages,profile:void 0,reset:void 0,entityify:function(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/`/g,"&#96;")},emailRegex:/^(([a-zA-Z0-9_+\.\-]+)@([\da-zA-Z\.\-]+)\.([a-zA-Z\.]{2,6})\s*)$/,redirect:function(t){t="/"+t,window.location.pathname=t},logout:function(){$.ajax({type:"POST",url:"/auth/logout"}).done(function(){n.redirect("login")})},destroy:function(){c.confirm(n.texts.are_you_sure,function(){$.ajax({type:"POST",url:"/auth/destroy"}).done(function(){n.redirect("")})})},error:function(t,e,r){$(r||"#error").html(t),$(r||"#error").css("display","block"),e&&$("#"+e).css("border","solid 1px red")},clear_error:function(t){$(t||"#error").html(""),$(t||"#error").css("display","none"),$("form *").css("border","")},success:function(t,e){$("#error").css("display","none"),$(e||"#success").html(t),$(e||"#success").css("display","block")},submit:function(t){var r,a,o,i;let e={};if($("form.js-validated-form *").map(function(s,l){l.id&&(e[l.id]=l.value)}),t==="signup"){if(!e.username)return n.error(n.texts.please_username,"username");if(e.username=e.username.trim(),e.username.length<3)return n.error(n.texts.username_three,"username");if(e.username.match(/:|@/))return n.error(n.texts.username_special,"username");if(!((r=e.email)==null?void 0:r.match(n.emailRegex)))return n.error(n.texts.valid_email,"email");if(e.email!==e.mail_repeat)return n.error(n.texts.repeat_match_email,"mail_repeat");if(!e.password)return n.error(n.texts.please_password,"password");if(e.password.length<6)return n.error(n.texts.password_six,"password");if(e.password!==e.password_repeat)return n.error(n.texts.repeat_match_password,"password_repeat");if(e.birth_year&&!Q(e.birth_year))return n.error(n.texts.valid_year+new Date().getFullYear(),"birth_year");let s={username:e.username,email:e.email,password:e.password,birth_year:e.birth_year?parseInt(e.birth_year):void 0,country:e.country?e.country:void 0,gender:e.gender?e.gender:void 0,subscribe:$("#subscribe").prop("checked"),is_teacher:$("#is_teacher").prop("checked"),prog_experience:$("input[name=has_experience]:checked").val(),experience_languages:$("#languages").is(":visible")?$("input[name=languages]").filter(":checked").map((l,u)=>$(u).val()).get():void 0};$.ajax({type:"POST",url:"/auth/signup",data:JSON.stringify(s),contentType:"application/json; charset=utf-8"}).done(function(){n.success(n.texts.signup_success),n.profile={session_expires_at:Date.now()+1e3*60*60*24},Z()}).fail(function(l){let u=l.responseText||"";u.match("email")?n.error(n.texts.exists_email):u.match("username")?n.error(n.texts.exists_username):n.error(n.texts.ajax_error)})}if(t==="login"){if(!e.username)return n.error(n.texts.please_username_email,"username");if(!e.password)return n.error(n.texts.please_password,"password");n.clear_error(),$.ajax({type:"POST",url:"/auth/login",data:JSON.stringify({username:e.username,password:e.password}),contentType:"application/json; charset=utf-8"}).done(function(){n.profile={session_expires_at:Date.now()+1e3*60*60*24},Z()}).fail(function(s){var l;s.status===403?(n.error(n.texts.invalid_username_password+" "+n.texts.no_account+` &nbsp;<button class="green-btn" onclick="auth.redirect ('signup')">`+n.texts.create_account+"</button>"),$("#create-account").hide(),localStorage.setItem("hedy-login-username",(l=e.username)!=null?l:"")):n.error(n.texts.ajax_error)})}if(t==="profile"){if(!((a=e.email)!=null?a:"").match(n.emailRegex))return n.error(n.texts.valid_email,"email");if(e.birth_year&&!Q(e.birth_year))return n.error(n.texts.valid_year+new Date().getFullYear(),"birth_year");let s={email:e.email,birth_year:e.birth_year?parseInt(e.birth_year):void 0,country:e.country,gender:e.gender,prog_experience:$("input[name=has_experience]:checked").val(),experience_languages:$("#languages").is(":visible")?$("input[name=languages]").filter(":checked").map((l,u)=>$(u).val()).get():void 0};console.log(s),n.clear_error(),$.ajax({type:"POST",url:"/profile",data:JSON.stringify(s),contentType:"application/json; charset=utf-8"}).done(function(){n.success(n.texts.profile_updated)}).fail(function(l){n.error(n.texts.ajax_error+" "+l.responseText)})}if(t==="change_password"){if(!e.password)return n.error(n.texts.please_password,"password","#error-password");if(e.password.length<6)return n.error(n.texts.password_six,"password","#error-password");if(e.password!==e.password_repeat)return n.error(n.texts.repeat_match,"password_repeat","#error-password");let s={old_password:e.old_password,new_password:e.password};n.clear_error("#error-password"),$.ajax({type:"POST",url:"/auth/change_password",data:JSON.stringify(s),contentType:"application/json; charset=utf-8"}).done(function(){n.success(n.texts.password_updated,"#success-password"),$("#old_password").val(""),$("#password").val(""),$("#password_repeat").val("")}).fail(function(l){l.status===403?n.error(n.texts.invalid_password,null,"#error-password"):n.error(n.texts.ajax_error,null,"#error-password")})}if(t==="recover"){if(!e.username)return n.error(n.texts.please_username,"username");let s={username:e.username};n.clear_error(),$.ajax({type:"POST",url:"/auth/recover",data:JSON.stringify(s),contentType:"application/json; charset=utf-8"}).done(function(){n.success(n.texts.sent_password_recovery),$("#username").val("")}).fail(function(l){l.status===403?n.error(n.texts.invalid_username):n.error(n.texts.ajax_error)})}if(t==="reset"){if(!e.password)return n.error(n.texts.please_password,"password");if(e.password.length<6)return n.error(n.texts.password_six,"password");if(e.password!==e.password_repeat)return n.error(n.texts.repeat_match,"password_repeat");let s={username:(o=n.reset)==null?void 0:o.username,token:(i=n.reset)==null?void 0:i.token,password:e.password};n.clear_error(),$.ajax({type:"POST",url:"/auth/reset",data:JSON.stringify(s),contentType:"application/json; charset=utf-8"}).done(function(){n.success(n.texts.password_resetted),$("#password").val(""),$("#password_repeat").val(""),delete n.reset,n.redirect("login")}).fail(function(l){l.status===403?n.error(n.texts.invalid_reset_link):n.error(n.texts.ajax_error)})}},markAsTeacher:function(t,e){$.ajax({type:"POST",url:"/admin/markAsTeacher",data:JSON.stringify({username:t,is_teacher:e}),contentType:"application/json; charset=utf-8"}).done(function(){c.alert(["User",t,"successfully",e?"marked":"unmarked","as teacher"].join(" "),4e3),location.reload()}).fail(function(r){console.log(r),c.alert(["Error when",e?"marking":"unmarking","user",t,"as teacher"].join(" "))})},changeUserEmail:function(t,e){c.prompt("Please enter the corrected email",e,function(r){if(r!==e){if(!r.match(n.emailRegex))return c.alert("Please enter a valid email.");$.ajax({type:"POST",url:"/admin/changeUserEmail",data:JSON.stringify({username:t,email:r}),contentType:"application/json; charset=utf-8"}).done(function(){c.alert(["Successfully changed the email for User",t,"to",r].join(" ")),location.reload()}).fail(function(a){console.log(a),c.alert(["Error when changing the email for User",t].join(" "))})}})}};if($("#country")){let t=$("#country").html();Object.keys(W).map(function(e){t+='<option value="'+e+'">'+W[e]+"</option>"}),$("#country").html(t)}$(".auth input").get().map(function(t){t.addEventListener("input",()=>n.clear_error())});$.ajax({type:"GET",url:"/profile"}).done(function(t){["/signup","/login"].indexOf(window.location.pathname)!==-1&&n.redirect("my-profile"),n.profile=t,$("#profile").html()&&($("#username").html(t.username),$("#email").val(t.email),$("#birth_year").val(t.birth_year),$("#gender").val(t.gender),$("#country").val(t.country),t.prog_experience&&($('input[name=has_experience][value="'+t.prog_experience+'"]').prop("checked",!0),t.prog_experience==="yes"&&$("#languages").show()),(t.experience_languages||[]).map(function(e){$('input[name=languages][value="'+e+'"]').prop("checked",!0)}),jQuery.isEmptyObject(t.student_classes)?$("#student_classes").hide():$("#student_classes ul").html((t.student_classes||[]).map(function(e){return"<li>"+n.entityify(e.name)+"</li>"}).join("")))}).fail(function(t){window.location.pathname.indexOf("/my-profile")!==-1&&n.redirect("login")});if(window.location.pathname==="/reset"){let t=window.location.search.slice(1).split("&"),e={};t.map(function(r){let a=r.split("=");e[a[0]]=decodeURIComponent(a[1])}),!e.username||!e.token?n.redirect("recover"):n.reset=e}if(window.location.pathname==="/signup"){let t=localStorage.getItem("hedy-login-username");t&&(localStorage.removeItem("hedy-login-username"),t.match("@")?$("#email").val(t):$("#username").val(t))}$("#email, #mail_repeat").on("cut copy paste",function(t){return t.preventDefault(),!1});async function Z(){let t=localStorage.getItem("hedy-first-save"),e=t?JSON.parse(t):void 0;if(e){await G(e[0],e[1],e[2],e[3]),localStorage.removeItem("hedy-first-save");let i=Y();if(i)return n.redirect(i)}let r=localStorage.getItem("hedy-join"),a=r?JSON.parse(r):void 0;if(a)return localStorage.removeItem("hedy-join"),B(a.link,a.name);let o=Y();if(o)return n.redirect(o);n.redirect("programs")}function Y(){let t=localStorage.getItem("hedy-save-redirect");return t&&localStorage.removeItem("hedy-save-redirect"),t}function Q(t){let e=parseInt(t);return!(!e||e<1900||e>new Date().getFullYear())}var S;(function(){window.State||(window.State={}),t($("#editor"));for(let r of $(".turn-pre-into-ace pre").get()){$(r).addClass("text-lg rounded");let a=e(r,!0);if(a.setOptions({maxLines:1/0}),a.setOptions({minLines:2}),a.setValue(a.getValue().replace(/\n+$/,""),-1),$(r).hasClass("no-copy-button")){if($(r).attr("id")){let o=String($(r).attr("id")),i=q(parseInt(o));a.session.setMode(i)}}else{let o=$("<div>").css({position:"absolute",top:5,right:5,width:"auto"}).appendTo(r);$("<button>").attr("title",UiMessages.try_button).css({fontFamily:"sans-serif"}).addClass("green-btn").text("\u21E5").appendTo(o).click(function(){S==null||S.setValue(a.getValue()+`
`)})}}function t(r){if(!r.length)return;var a=e(r.get(0),r.data("readonly"));S=a,p.setEditor(a),window.Range=ace.require("ace/range").Range;let o=window.sessionStorage;if(o){let s=r.data("lskey"),l=r.data("loaded-program"),u=o.getItem(s);l!=="True"&&u&&a.setValue(u,1),a.on("blur",function(T){o.setItem(s,a.getValue())}),a.on("change",function(){$("#inline-modal").is(":visible")&&$("#inline-modal").hide(),window.State.disable_run=!1,$("#runit").css("background-color",""),window.State.unsaved_changes=!0,ee(a)})}window.onbeforeunload=()=>{if(window.State.unsaved_changes&&!window.State.no_unload_prompt)return n.texts.unsaved_changes};let i;return window.addEventListener("keydown",function(s){let l=s.keyCode;if(l===18){i=!0;return}if(l===13&&i){if(!window.State.level||!window.State.lang)throw new Error("Oh no");te(window.State.level,window.State.lang,function(){$("#output").focus()})}l===37&&document.activeElement===document.getElementById("output")&&(a.focus(),a.navigateFileEnd())}),window.addEventListener("keyup",function(s){if(s.keyCode===18){i=!1;return}}),a}function e(r,a){let o=ace.edit(r);o.setTheme("ace/theme/monokai"),a&&o.setOptions({readOnly:!0,showGutter:!1,showPrintMargin:!1,highlightActiveLine:!1});var i=1;if(i==1&&window.State.level){let s=q(parseInt(window.State.level));o.session.setMode(s)}return o}})();function q(t){return{"9":"ace/mode/level9and10","10":"ace/mode/level9and10","18":"ace/mode/level18and19","19":"ace/mode/level18and19"}[t]||"ace/mode/level"+t}function X(){return!n.profile||n.profile.session_expires_at>Date.now()?!1:(location.reload(),!0)}function ee(t){t.session.clearAnnotations();for(let e in t.session.getMarkers(!1))t.session.removeMarker(e)}function te(t,e,r){if(window.State.disable_run)return c.alert(n.texts.answer_question);if(!X()){p.hide(),j.hide();try{t=t.toString();var a=S,o=J();ee(a),console.log(`Original program:
`,o),$.ajax({type:"POST",url:"/parse",data:JSON.stringify({level:t,code:o,lang:e,read_aloud:!!$("#speak_dropdown").val(),adventure_name:window.State.adventure_name}),contentType:"application/json",dataType:"json"}).done(function(i){if(console.log("Response",i),i.Warning&&p.showWarning(ErrorMessages.Transpile_warning,i.Warning),i.Error){p.show(ErrorMessages.Transpile_error,i.Error),i.Location&&i.Location[0]!="?"&&ye(a,i.Location[0],i.Location[1]);return}i.Code&&(console.log("success!"),j.show(ErrorMessages.Transpile_success)),ve(i.Code,i.has_turtle,r).catch(function(s){console.log(s),p.show(ErrorMessages.Execute_error,s.message),Se(t,o,s.message)})}).fail(function(i){console.error(i),i.readyState<4?p.show(ErrorMessages.Connection_error,ErrorMessages.CheckInternet):p.show(ErrorMessages.Other_error,ErrorMessages.ServerError)})}catch(i){console.error(i),p.show(ErrorMessages.Other_error,i.message)}}}function ye(t,e,r,a=1){if(t.session.setAnnotations([{row:e-1,column:(r!=null?r:1)-1,text:"",type:"error"}]),r===void 0){t.session.addMarker(new ace.Range(e-1,1,e-1,2),"editor-error","fullLine",!1);return}t.session.addMarker(new ace.Range(e-1,r-1,e-1,r-1+a),"editor-error","text",!1)}function _e(t){var e=ace.edit("editor"),r=1;e.setValue(t+`
`,r),window.State.unsaved_changes=!1}function F(t,e,r,a,o){if(p.hide(),j.hide(),!X())try{if(!n.profile)return c.confirm(n.texts.save_prompt,function(){window.State&&window.State.adventure_name&&!Array.isArray(t)&&(t=[t,window.State.adventure_name]),localStorage.setItem("hedy-first-save",JSON.stringify([t,e,r,a])),window.location.pathname="/login"});window.State.unsaved_changes=!1;var i=window.State.adventure_name;Array.isArray(t)&&(i=t[1],t=t[0]),$.ajax({type:"POST",url:"/programs",data:JSON.stringify({level:t,lang:e,name:r,code:a,adventure_name:i}),contentType:"application/json",dataType:"json"}).done(function(s){var l;if(o)return s.Error?o(s):o(null,s);if(s.Warning&&p.showWarning(ErrorMessages.Transpile_warning,s.Warning),s.Error){p.show(ErrorMessages.Transpile_error,s.Error);return}c.alert(n.texts.save_success_detail,4e3),$("#program_name").val(s.name),(l=window.State.adventures)==null||l.map(function(u){u.short_name===(i||"level")&&(u.loaded_program={name:s.name,code:a})})}).fail(function(s){console.error(s),p.show(ErrorMessages.Connection_error,JSON.stringify(s)),s.status===403&&(localStorage.setItem("hedy-first-save",JSON.stringify([i?[t,i]:t,e,r,a])),localStorage.setItem("hedy-save-redirect","hedy"),window.location.pathname="/login")})}catch(s){console.error(s),p.show(ErrorMessages.Other_error,s.message)}}function G(t,e,r,a){return new Promise((o,i)=>{F(t,e,r,a,(s,l)=>{s?i(s):o(l)})})}function re(t){return window.location.origin+"/hedy/"+t+"/view"}function xe(t,e,r,a,o){if(!n.profile)return c.alert(n.texts.must_be_logged);var i=function(u){$.ajax({type:"POST",url:"/programs/share",data:JSON.stringify({id:u,public:a}),contentType:"application/json",dataType:"json"}).done(function(T){a&&ne(re(u),!0),c.alert(a?n.texts.share_success_detail:n.texts.unshare_success_detail,4e3),o&&setTimeout(function(){location.reload()},1e3)}).fail(function(T){console.error(T),p.show(ErrorMessages.Connection_error,JSON.stringify(T))})};if(r!==!0)return i(r);let s=`${$("#program_name").val()}`,l=J();return F(t,e,s,l,(u,T)=>{if(u&&u.Warning)return p.showWarning(ErrorMessages.Transpile_warning,u.Warning);if(u&&u.Error)return p.show(ErrorMessages.Transpile_error,u.Error);i(T.id)})}function ne(t,e){var i,s;var r=document.createElement("textarea");r.value=t,r.setAttribute("readonly",""),r.style.position="absolute",r.style.left="-9999px",document.body.appendChild(r);let a=document.getSelection(),o=a&&a.rangeCount>0?a.getRangeAt(0):void 0;r.select(),document.execCommand("copy"),document.body.removeChild(r),o&&((i=document.getSelection())==null||i.removeAllRanges(),(s=document.getSelection())==null||s.addRange(o)),e||c.alert(n.texts.copy_clipboard,4e3)}function Se(t,e,r){$.ajax({type:"POST",url:"/report_error",data:JSON.stringify({level:t,code:e,page:window.location.href,client_error:r}),contentType:"application/json",dataType:"json"})}window.onerror=function(e,r,a,o,i){$.ajax({type:"POST",url:"/client_exception",data:JSON.stringify({message:e,source:r,line_number:a,column_number:o,error:i,url:window.location.href,user_agent:navigator.userAgent}),contentType:"application/json",dataType:"json"})};function ve(t,e,r){window.State.programsInExecution||(window.State.programsInExecution=0),window.State.programsInExecution++;let a=$("#output");a.empty(),Sk.pre="output";let o=Sk.TurtleGraphics||(Sk.TurtleGraphics={});return o.target="turtlecanvas",o.width=400,o.height=300,o.worldWidth=400,o.worldHeight=300,e||$("#turtlecanvas").empty(),Sk.configure({output:l,read:u,inputfun:T,inputfunTakesPrompt:!0,__future__:Sk.python3,timeoutMsg:function(){return ErrorMessages.Program_too_long},execLimit:function(){return e?2e4:3e3}()}),Sk.misceval.asyncToPromise(function(){return Sk.importMainWithBody("<stdin>",!1,t,!0)}).then(function(d){console.log("Program executed"),window.State.programsInExecution===1&&$("#output").is(":empty")&&$("#turtlecanvas").is(":empty")&&p.showWarning(ErrorMessages.Transpile_warning,ErrorMessages.Empty_output),window.State.programsInExecution--,r&&r()}).catch(function(d){console.log(d);let E=i(d)||JSON.stringify(d);throw new Error(E)});function i(d){return d.args&&d.args.v&&d.args.v[0]&&d.args.v[0].v}function s(d,E){$("<span>").text(d).css({color:E}).appendTo(a)}function l(d){window.State.programsInExecution>1||(s(d,"white"),ae(d))}function u(d){if(Sk.builtinFiles===void 0||Sk.builtinFiles.files[d]===void 0)throw"File not found: '"+d+"'";return Sk.builtinFiles.files[d]}function T(d){return Sk.execStart=new Date(new Date().getTime()+1e3*60*60*24*365),$("#turtlecanvas").empty(),new Promise(function(E){window.State.disable_run=!0,$("#runit").css("background-color","gray");let I=$('#inline-modal input[type="text"]');$("#inline-modal .caption").text(d),I.val(""),I.attr("placeholder",d),ae(d),setTimeout(function(){I.focus()},0),$("#inline-modal form").one("submit",function(P){return window.State.disable_run=!1,$("#runit").css("background-color",""),P.preventDefault(),$("#inline-modal").hide(),Sk.execStart=new Date,setTimeout(function(){E(I.val()),$("#output").focus()},0),!1}),$("#inline-modal").show()})}}function ae(t){var e=$("#speak_dropdown").val();if(!!e){var r=window.speechSynthesis.getVoices().filter(a=>a.voiceURI===e)[0];if(r){let a=new SpeechSynthesisUtterance(t);a.voice=r,a.rate=.9,speechSynthesis.speak(a)}}}(()=>{if(!window.speechSynthesis||!window.State.lang)return;let t=0,e=setInterval(function(){var o;t+=1;let a=r((o=window.State.lang)!=null?o:"");if(a.length>0){for(let i of a)$("#speak_dropdown").append($("<option>").attr("value",i.voiceURI).text("\u{1F4E3} "+i.name));$("#speak_container").show(),clearInterval(e)}t>=20&&clearInterval(e)},100);function r(a){let o=a.match(/^([a-z]+)/i);if(!o)return[];let i=o[1];return window.speechSynthesis?window.speechSynthesis.getVoices().filter(s=>s.lang.startsWith(i)):[]}})();function be(t){if(window.State.no_unload_prompt=!0,!window.State.unsaved_changes||!n.profile)return t();c.confirm(n.texts.unsaved_changes,t)}function $e(t){$('*[data-tabtarget="end"]').html('<iframe id="quiz-iframe" class="w-full" title="Quiz" src="/quiz/start/'+t+'"></iframe>')}function J(){try{ace.require("ace/ext/whitespace").trimTrailingSpace(S.session,!0)}catch(t){console.error(t)}return S==null?void 0:S.getValue()}function ke(){let t=document.getElementById("confetti");if(t){t.classList.remove("hidden");let e=new JSConfetti({canvas:t});setTimeout(function(){t.classList.add("hidden")},3e3),e.addConfetti();let r=document.getElementById("confetti-button");r&&r.classList.add("hidden")}}$(function(){function t(){$("#warningbox").hide(),$("#errorbox").hide(),$("#okbox").hide(),$("#output").empty(),$("#turtlecanvas").empty(),window.State.unsaved_changes=!1}function e(r){var u,T,d,E,I,P,U;let a=$('*[data-tab="'+r+'"]'),o=a.siblings("*[data-tab]"),i=$('*[data-tabtarget="'+r+'"]'),s=i.siblings("*[data-tabtarget]");o.removeClass("tab-selected"),a.addClass("tab-selected"),s.addClass("hidden"),i.removeClass("hidden");let l={};if((u=window.State.adventures)==null||u.map(function(D){l[D.short_name]=D}),t(),r==="end"){$("#adventures-tab").css("max-height","100%"),$("#level-header input").hide(),$("#editor-area").hide();return}$("#adventures-tab").css("max-height","20em"),$("#level-header input").show(),$("#editor-area").show(),window.State.loaded_program&&(window.State.adventure_name_onload||"level")===r?($("#program_name").val(window.State.loaded_program.name),(T=S)==null||T.setValue(window.State.loaded_program.code)):((d=l[r])==null?void 0:d.loaded_program)?($("#program_name").val(l[r].loaded_program.name),(E=S)==null||E.setValue(l[r].loaded_program.code)):r==="level"&&window.State.default_program_name&&window.State.default_program?($("#program_name").val(window.State.default_program_name),(I=S)==null||I.setValue(window.State.default_program)):($("#program_name").val(l[r].default_save_name+" - "+window.State.level_title+" "+window.State.level),(P=S)==null||P.setValue(l[r].start_code)),window.State.adventure_name=r==="level"?void 0:r,(U=S)==null||U.clearSelection(),window.State.unsaved_changes=!1}if($("*[data-tab]").click(function(r){let o=$(r.target).data("tab");r.preventDefault(),window.State.unsaved_changes?c.confirm(n.texts.unsaved_changes,()=>e(o)):e(o);let i=o!=="level"?o:"";window.history&&window.history.replaceState(null,"","#"+i)}),window.State&&window.State.adventure_name)e(window.State.adventure_name);else if(window.location.hash){let r=window.location.hash.replace(/^#/,"");r&&e(r)}});function Te(t){var e=80,r=t.split(`
`),a=r.map(o=>Math.floor(o.length/e));return Me(a)+r.length}function Me(t){let e=0;for(let r of t)e+=r;return e}function oe(t){var e=Math.max(1,Te($(t).val())),r=e*25+4;$(t).height()<r&&$(t).css({height:`${r}px`})}$("textarea").each((t,e)=>oe(e)).on("input",t=>{let e=$(t.target);e.hasClass("touched")||(e.addClass("touched"),e.attr("name",e.data("name")),Ee(e.closest("form"))),oe(e)});var ie=new Map;function Ee(t){var e=t.data("file"),r=ie.get(e);if(!r){var a=$('button[data-file="'+e+'"]');r={button:a,changes:0},ie.set(e,r)}r.changes+=1,r.button.text(`${e} (${r.changes})`)}$("button[data-file]").click(t=>{var e=$(t.target).data("file"),r=$('form[data-file="'+e+'"]');r.submit()});return Ce;})();
//# sourceMappingURL=appbundle.js.map
