(this["webpackJsonpgeekinsider-ui"]=this["webpackJsonpgeekinsider-ui"]||[]).push([[25],{368:function(e,t,n){},375:function(e,t,n){"use strict";var a=n(4),r=n(0),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},l=n(27),o=function(e,t){return r.createElement(l.a,Object(a.a)(Object(a.a)({},e),{},{ref:t,icon:c}))};o.displayName="UserOutlined";t.a=r.forwardRef(o)},470:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Ce}));var a=n(306),r=n.n(a),c=n(307),l=n(0),o=n(156),i=n(473),s=n(5),u=n(6),d=n(371),p=n(11),f=n.n(p),m=n(4),b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},h=n(27),v=function(e,t){return l.createElement(h.a,Object(m.a)(Object(m.a)({},e),{},{ref:t,icon:b}))};v.displayName="RightOutlined";var O=l.forwardRef(v),y=n(12),g=n(348),j=n(245),C=n(163),x=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},N=j.a.Group,S=function(e){var t=l.useContext(C.b),n=t.getPopupContainer,a=t.getPrefixCls,r=t.direction,c=e.prefixCls,o=e.type,i=e.disabled,u=e.onClick,d=e.htmlType,p=e.children,m=e.className,b=e.overlay,h=e.trigger,v=e.align,O=e.visible,S=e.onVisibleChange,w=e.placement,E=e.getPopupContainer,k=e.href,P=e.icon,T=void 0===P?l.createElement(g.a,null):P,L=e.title,M=e.buttonsRender,z=e.mouseEnterDelay,R=e.mouseLeaveDelay,D=e.overlayClassName,_=e.overlayStyle,A=x(e,["prefixCls","type","disabled","onClick","htmlType","children","className","overlay","trigger","align","visible","onVisibleChange","placement","getPopupContainer","href","icon","title","buttonsRender","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle"]),B=a("dropdown-button",c),W={align:v,overlay:b,disabled:i,trigger:i?[]:h,onVisibleChange:S,getPopupContainer:E||n,mouseEnterDelay:z,mouseLeaveDelay:R,overlayClassName:D,overlayStyle:_};"visible"in e&&(W.visible=O),W.placement="placement"in e?w:"rtl"===r?"bottomLeft":"bottomRight";var H=M([l.createElement(j.a,{type:o,disabled:i,onClick:u,htmlType:d,href:k,title:L},p),l.createElement(j.a,{type:o,icon:T})]),F=Object(y.a)(H,2),U=F[0],V=F[1];return l.createElement(N,Object(s.a)({},A,{className:f()(B,m)}),U,l.createElement(I,W,V))};S.__ANT_BUTTON=!0,S.defaultProps={type:"default",buttonsRender:function(e){return e}};var w=S,E=n(56),k=n(42),P=n(33),T=(Object(k.a)("topLeft","topCenter","topRight","bottomLeft","bottomCenter","bottomRight"),function(e){var t,n=l.useContext(C.b),a=n.getPopupContainer,r=n.getPrefixCls,c=n.direction,o=e.arrow,i=e.prefixCls,p=e.children,m=e.trigger,b=e.disabled,h=e.getPopupContainer,v=e.overlayClassName,y=r("dropdown",i),g=l.Children.only(p),j=Object(P.a)(g,{className:f()("".concat(y,"-trigger"),Object(u.a)({},"".concat(y,"-rtl"),"rtl"===c),g.props.className),disabled:b}),x=f()(v,Object(u.a)({},"".concat(y,"-rtl"),"rtl"===c)),N=b?[]:m;return N&&-1!==N.indexOf("contextMenu")&&(t=!0),l.createElement(d.a,Object(s.a)({arrow:o,alignPoint:t},e,{overlayClassName:x,prefixCls:y,getPopupContainer:h||a,transitionName:function(){var t=r(),n=e.placement,a=void 0===n?"":n,c=e.transitionName;return void 0!==c?c:a.indexOf("top")>=0?"".concat(t,"-slide-down"):"".concat(t,"-slide-up")}(),trigger:N,overlay:function(){return function(t){var n,a=e.overlay;n="function"===typeof a?a():a;var r=(n=l.Children.only("string"===typeof n?l.createElement("span",null,n):n)).props;Object(E.a)(!r.mode||"vertical"===r.mode,"Dropdown",'mode="'.concat(r.mode,"\" is not supported for Dropdown's Menu."));var c=r.selectable,o=void 0!==c&&c,i=r.expandIcon,s="undefined"!==typeof i&&l.isValidElement(i)?i:l.createElement("span",{className:"".concat(t,"-menu-submenu-arrow")},l.createElement(O,{className:"".concat(t,"-menu-submenu-arrow-icon")}));return"string"===typeof n.type?n:Object(P.a)(n,{mode:"vertical",selectable:o,expandIcon:s})}(y)},placement:function(){var t=e.placement;return void 0!==t?t:"rtl"===c?"bottomRight":"bottomLeft"}()}),j)});T.Button=w,T.defaultProps={mouseEnterDelay:.15,mouseLeaveDelay:.1};var I=T,L=I,M=n(23),z=n(28),R=n(29),D=n(30),_=n(324),A=n(66),B=Object(l.createContext)({prefixCls:"",firstLevel:!0,inlineCollapsed:!1});var W=function(e){var t,n,a=e.popupClassName,r=e.icon,c=e.title,o=l.useContext(B),i=o.prefixCls,u=o.inlineCollapsed,d=o.antdMenuTheme,p=Object(_.g)();if(r){var m=Object(P.b)(c)&&"span"===c.type;n=l.createElement(l.Fragment,null,Object(P.a)(r,{className:f()(Object(P.b)(r)?null===(t=r.props)||void 0===t?void 0:t.className:"","".concat(i,"-item-icon"))}),m?c:l.createElement("span",{className:"".concat(i,"-title-content")},c))}else n=u&&!p.length&&c&&"string"===typeof c?l.createElement("div",{className:"".concat(i,"-inline-collapsed-noicon")},c.charAt(0)):l.createElement("span",{className:"".concat(i,"-title-content")},c);return l.createElement(B.Provider,{value:Object(s.a)(Object(s.a)({},o),{firstLevel:!1})},l.createElement(_.e,Object(s.a)({},Object(A.a)(e,["icon"]),{title:n,popupClassName:f()(i,"".concat(i,"-").concat(d),a)})))},H=n(291),F=n(290),U={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"},V=function(e,t){return l.createElement(h.a,Object(m.a)(Object(m.a)({},e),{},{ref:t,icon:U}))};V.displayName="BarsOutlined";var G=l.forwardRef(V),J={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"},q=function(e,t){return l.createElement(h.a,Object(m.a)(Object(m.a)({},e),{},{ref:t,icon:J}))};q.displayName="LeftOutlined";var K=l.forwardRef(q),Q=n(277),X=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},Y=l.createContext({siderHook:{addSider:function(){return null},removeSider:function(){return null}}});function Z(e){var t=e.suffixCls,n=e.tagName,a=e.displayName;return function(e){var r=function(a){var r=l.useContext(C.b).getPrefixCls,c=a.prefixCls,o=r(t,c);return l.createElement(e,Object(s.a)({prefixCls:o,tagName:n},a))};return r.displayName=a,r}}var $=function(e){var t=e.prefixCls,n=e.className,a=e.children,r=e.tagName,c=X(e,["prefixCls","className","children","tagName"]),o=f()(t,n);return l.createElement(r,Object(s.a)({className:o},c),a)},ee=(Z({suffixCls:"layout",tagName:"section",displayName:"Layout"})((function(e){var t,n=l.useContext(C.b).direction,a=l.useState([]),r=Object(y.a)(a,2),c=r[0],o=r[1],i=e.prefixCls,d=e.className,p=e.children,m=e.hasSider,b=e.tagName,h=X(e,["prefixCls","className","children","hasSider","tagName"]),v=f()(i,(t={},Object(u.a)(t,"".concat(i,"-has-sider"),"boolean"===typeof m?m:c.length>0),Object(u.a)(t,"".concat(i,"-rtl"),"rtl"===n),t),d);return l.createElement(Y.Provider,{value:{siderHook:{addSider:function(e){o((function(t){return[].concat(Object(Q.a)(t),[e])}))},removeSider:function(e){o((function(t){return t.filter((function(t){return t!==e}))}))}}}},l.createElement(b,Object(s.a)({className:v},h),p))})),Z({suffixCls:"layout-header",tagName:"header",displayName:"Header"})($),Z({suffixCls:"layout-footer",tagName:"footer",displayName:"Footer"})($),Z({suffixCls:"layout-content",tagName:"main",displayName:"Content"})($),function(e){return!isNaN(parseFloat(e))&&isFinite(e)}),te=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},ne={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},ae=l.createContext({}),re=function(){var e=0;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e+=1,"".concat(t).concat(e)}}(),ce=l.forwardRef((function(e,t){var n=e.prefixCls,a=e.className,r=e.trigger,c=e.children,o=e.defaultCollapsed,i=void 0!==o&&o,d=e.theme,p=void 0===d?"dark":d,m=e.style,b=void 0===m?{}:m,h=e.collapsible,v=void 0!==h&&h,g=e.reverseArrow,j=void 0!==g&&g,x=e.width,N=void 0===x?200:x,S=e.collapsedWidth,w=void 0===S?80:S,E=e.zeroWidthTriggerStyle,k=e.breakpoint,P=e.onCollapse,T=e.onBreakpoint,I=te(e,["prefixCls","className","trigger","children","defaultCollapsed","theme","style","collapsible","reverseArrow","width","collapsedWidth","zeroWidthTriggerStyle","breakpoint","onCollapse","onBreakpoint"]),L=Object(l.useContext)(Y).siderHook,M=Object(l.useState)("collapsed"in I?I.collapsed:i),z=Object(y.a)(M,2),R=z[0],D=z[1],_=Object(l.useState)(!1),B=Object(y.a)(_,2),W=B[0],H=B[1];Object(l.useEffect)((function(){"collapsed"in I&&D(I.collapsed)}),[I.collapsed]);var F=function(e,t){"collapsed"in I||D(e),null===P||void 0===P||P(e,t)},U=Object(l.useRef)();U.current=function(e){H(e.matches),null===T||void 0===T||T(e.matches),R!==e.matches&&F(e.matches,"responsive")},Object(l.useEffect)((function(){function e(e){return U.current(e)}var t;if("undefined"!==typeof window){var n=window.matchMedia;if(n&&k&&k in ne){t=n("(max-width: ".concat(ne[k],")"));try{t.addEventListener("change",e)}catch(a){t.addListener(e)}e(t)}}return function(){try{null===t||void 0===t||t.removeEventListener("change",e)}catch(a){null===t||void 0===t||t.removeListener(e)}}}),[]),Object(l.useEffect)((function(){var e=re("ant-sider-");return L.addSider(e),function(){return L.removeSider(e)}}),[]);var V=function(){F(!R,"clickTrigger")},J=Object(l.useContext)(C.b).getPrefixCls;return l.createElement(ae.Provider,{value:{siderCollapsed:R}},function(){var e,o=J("layout-sider",n),i=Object(A.a)(I,["collapsed"]),d=R?w:N,m=ee(d)?"".concat(d,"px"):String(d),h=0===parseFloat(String(w||0))?l.createElement("span",{onClick:V,className:f()("".concat(o,"-zero-width-trigger"),"".concat(o,"-zero-width-trigger-").concat(j?"right":"left")),style:E},r||l.createElement(G,null)):null,y={expanded:j?l.createElement(O,null):l.createElement(K,null),collapsed:j?l.createElement(K,null):l.createElement(O,null)}[R?"collapsed":"expanded"],g=null!==r?h||l.createElement("div",{className:"".concat(o,"-trigger"),onClick:V,style:{width:m}},r||y):null,C=Object(s.a)(Object(s.a)({},b),{flex:"0 0 ".concat(m),maxWidth:m,minWidth:m,width:m}),x=f()(o,"".concat(o,"-").concat(p),(e={},Object(u.a)(e,"".concat(o,"-collapsed"),!!R),Object(u.a)(e,"".concat(o,"-has-trigger"),v&&null!==r&&!h),Object(u.a)(e,"".concat(o,"-below"),!!W),Object(u.a)(e,"".concat(o,"-zero-width"),0===parseFloat(m)),e),a);return l.createElement("aside",Object(s.a)({className:x},i,{style:C,ref:t}),l.createElement("div",{className:"".concat(o,"-children")},c),v||W&&h?g:null)}())}));ce.displayName="Sider";var le=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},oe=function(e){Object(R.a)(n,e);var t=Object(D.a)(n);function n(){var e;return Object(M.a)(this,n),(e=t.apply(this,arguments)).renderItem=function(t){var n,a,r=t.siderCollapsed,c=e.context,o=c.prefixCls,i=c.firstLevel,d=c.inlineCollapsed,p=c.direction,m=e.props,b=m.className,h=m.children,v=e.props,O=v.title,y=v.icon,g=v.danger,j=le(v,["title","icon","danger"]),C=O;"undefined"===typeof O?C=i?h:"":!1===O&&(C="");var x={title:C};r||d||(x.title=null,x.visible=!1);var N=Object(H.a)(h).length;return l.createElement(F.a,Object(s.a)({},x,{placement:"rtl"===p?"left":"right",overlayClassName:"".concat(o,"-inline-collapsed-tooltip")}),l.createElement(_.b,Object(s.a)({},j,{className:f()((n={},Object(u.a)(n,"".concat(o,"-item-danger"),g),Object(u.a)(n,"".concat(o,"-item-only-child"),1===(y?N+1:N)),n),b),title:"string"===typeof O?O:void 0}),Object(P.a)(y,{className:f()(Object(P.b)(y)?null===(a=y.props)||void 0===a?void 0:a.className:"","".concat(o,"-item-icon"))}),e.renderItemChildren(d)))},e}return Object(z.a)(n,[{key:"renderItemChildren",value:function(e){var t=this.context,n=t.prefixCls,a=t.firstLevel,r=this.props,c=r.icon,o=r.children,i=l.createElement("span",{className:"".concat(n,"-title-content")},o);return(!c||Object(P.b)(o)&&"span"===o.type)&&o&&e&&a&&"string"===typeof o?l.createElement("div",{className:"".concat(n,"-inline-collapsed-noicon")},o.charAt(0)):i}},{key:"render",value:function(){return l.createElement(ae.Consumer,null,this.renderItem)}}]),n}(l.Component);oe.contextType=B;var ie=n(279),se=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},ue=function(e){Object(R.a)(n,e);var t=Object(D.a)(n);function n(e){var a;return Object(M.a)(this,n),(a=t.call(this,e)).renderMenu=function(e){var t=e.getPopupContainer,n=e.getPrefixCls,r=e.direction,c=n(),o=a.props,i=o.prefixCls,u=o.className,d=o.theme,p=o.expandIcon,m=se(o,["prefixCls","className","theme","expandIcon"]),b=Object(A.a)(m,["siderCollapsed","collapsedWidth"]),h=a.getInlineCollapsed(),v={horizontal:{motionName:"".concat(c,"-slide-up")},inline:ie.a,other:{motionName:"".concat(c,"-zoom-big")}},O=n("menu",i),y=f()("".concat(O,"-").concat(d),u);return l.createElement(B.Provider,{value:{prefixCls:O,inlineCollapsed:h||!1,antdMenuTheme:d,direction:r,firstLevel:!0}},l.createElement(_.f,Object(s.a)({getPopupContainer:t,overflowedIndicator:l.createElement(g.a,null),overflowedIndicatorPopupClassName:"".concat(O,"-").concat(d)},b,{inlineCollapsed:h,className:y,prefixCls:O,direction:r,defaultMotions:v,expandIcon:Object(P.a)(p,{className:"".concat(O,"-submenu-expand-icon")})})))},Object(E.a)(!("inlineCollapsed"in e&&"inline"!==e.mode),"Menu","`inlineCollapsed` should only be used when `mode` is inline."),Object(E.a)(!(void 0!==e.siderCollapsed&&"inlineCollapsed"in e),"Menu","`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead."),a}return Object(z.a)(n,[{key:"getInlineCollapsed",value:function(){var e=this.props,t=e.inlineCollapsed,n=e.siderCollapsed;return void 0!==n?n:t}},{key:"render",value:function(){return l.createElement(C.a,null,this.renderMenu)}}]),n}(l.Component);ue.defaultProps={theme:"light"};var de=function(e){Object(R.a)(n,e);var t=Object(D.a)(n);function n(){return Object(M.a)(this,n),t.apply(this,arguments)}return Object(z.a)(n,[{key:"render",value:function(){var e=this;return l.createElement(ae.Consumer,null,(function(t){return l.createElement(ue,Object(s.a)({},e.props,t))}))}}]),n}(l.Component);de.Divider=_.a,de.Item=oe,de.SubMenu=W,de.ItemGroup=_.c;var pe=de,fe=n(94),me=n(83),be=n(375),he=n(475),ve=n(10),Oe=n(278),ye=(n(368),n(13)),ge=he.a.Option,je=Object(fe.b)((function(e){return{skillSearch:e.skillSearch,userType:e.userType,skills:e.skills}}),(function(e){return Object(me.b)({fetchSkillSearch:Oe.m,setSearchType:Oe.v,fetchRecruiterSkillSearch:Oe.l},e)}))((function(e){var t=e.fetchSkillSearch,n=e.setSearchType,a=e.userType,r=e.fetchRecruiterSkillSearch,c=e.skills,l=Object(ve.g)(),o=Object(ve.h)();return Object(ye.jsx)(he.a,{mode:"multiple",placeholder:"candidate"===a?"Search jobs via skills":"Search candidates via skills",style:{width:"candidate"===a?"50%":"100%"},onChange:function(e){"/search"!==(null===o||void 0===o?void 0:o.pathname)&&("candidate"===a?l.push("/search"):l.push("/recruiter/search")),e.length?("candidate"===a?t(e):r(e),n("skillSearch")):n("recommended")},onClick:function(){"candidate"===a?l.push("/search"):l.push("/recruiter/search")},allowClear:!0,dropdownMatchSelectWidth:!1,onClear:function(){n("recommended")},children:c.map((function(e){return Object(ye.jsx)(ge,{value:e,children:e},e)}))})})),Ce=Object(fe.b)((function(e){return{userType:e.userType,cities:e.cities,skills:e.skills}}),(function(e){return Object(me.b)({setUserType:Oe.w,setLoading:Oe.t,getJobDetails:Oe.p,setSearchType:Oe.v,fetchCompanySearchData:Oe.f,fetchCities:Oe.e,fetchSkills:Oe.n,clearStates:Oe.a},e)}))((function(e){var t=e.history,n=e.setIsAuth,a=e.setUserType,s=e.setLoading,u=e.fetchCompanySearchData,d=e.setSearchType,p=e.userType,f=e.fetchCities,m=e.fetchSkills,b=e.cities,h=e.skills,v=e.clearStates;Object(l.useEffect)((function(){0===b.length&&f(),0===h.length&&m()}),[]);var O=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,o.a.signOut();case 3:n(!1),t.push("/login"),s(!1),v();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(c.a)(r.a.mark((function e(){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.currentAuthenticatedUser();case 2:if(e.t0=e.sent.signInUserSession.idToken.payload["cognito:groups"][0],"userCandidate"!==e.t0){e.next=7;break}e.t1="candidate",e.next=8;break;case 7:e.t1="recruiter";case 8:n=e.t1,a(n),c="/".concat(n,"/profile"),t.push(c);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(ye.jsx)("div",{className:"navbar",children:Object(ye.jsxs)("header",{className:"navbar__container",children:[Object(ye.jsx)("div",{className:"navbar__logo",onClick:function(){return t.push("/home")},children:Object(ye.jsx)("h2",{children:"Geekinsider"})}),Object(ye.jsxs)("div",{className:"navbar__center",children:["candidate"===p&&Object(ye.jsx)(i.a.Search,{style:{width:"50%",marginRight:"20px"},placeholder:"Search jobs by company name",onPressEnter:function(e){var t;if(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value){var n=e.target.value;u(n),d("companySearch")}else d("recommended")},onSearch:function(e){e?(u(e),d("companySearch")):d("recommended")},onClick:function(){"candidate"===p?t.push("/search"):t.push("/recruiter/search")},allowClear:!0}),Object(ye.jsx)(je,{})]}),Object(ye.jsx)("div",{className:"navbar__right",children:Object(ye.jsx)(L,{trigger:["click"],overlay:Object(ye.jsxs)(pe,{children:[Object(ye.jsx)(pe.Item,{onClick:y,children:"Profile"}),Object(ye.jsx)(pe.Item,{onClick:O,children:"Logout"})]}),placement:"bottomRight",arrow:!0,children:Object(ye.jsx)(j.a,{shape:"circle",size:"large",icon:Object(ye.jsx)(be.a,{})})})})]})})}))}}]);
//# sourceMappingURL=25.132970ce.chunk.js.map