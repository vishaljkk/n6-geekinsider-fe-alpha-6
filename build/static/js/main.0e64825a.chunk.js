(this["webpackJsonpgeekinsider-ui"]=this["webpackJsonpgeekinsider-ui"]||[]).push([[7],{106:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a(0);var c=a(273),n=a(84),r=(a(183),a(13)),s=function(e){var t=e.fontSize,a=e.text;return Object(r.jsx)("div",{className:"loader--generic",children:Object(r.jsx)(c.a,{indicator:Object(r.jsx)(n.a,{style:{fontSize:t||30},spin:!0}),tip:a})})}},111:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var c=a(83),n=a(143),r=a(112),s=Object(c.c)(r.a,Object(c.a)(n.a))},112:function(e,t,a){"use strict";var c=a(116),n=a(7),r={userType:"",isAuth:!1,profileDetails:{},loading:!1,recentJobs:[],skillSearch:[],trendingJobs:[],recommendedJobs:[],activeJob:{},jobDetailModalVisible:!1,recommendedCandidates:[],recruiterCandidateDetails:{},searchType:"recommended",companySearch:[],appliedCandidates:[],skills:[],cities:[]};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTH":return Object(n.a)(Object(n.a)({},e),{},{isAuth:t.payload});case"SET_USER_TYPE":return Object(n.a)(Object(n.a)({},e),{},{userType:t.payload});case"SET_PROFILE_DETAIL":return Object(n.a)(Object(n.a)({},e),{},{profileDetails:t.payload});case"SET_MESSAGES":return Object(n.a)(Object(n.a)({},e),{},{messages:t.payload});case"SET_LOADING":return Object(n.a)(Object(n.a)({},e),{},{loading:t.payload});case"ADD_JOB_POST":return Object(n.a)(Object(n.a)({},e),{},{recentJobs:[t.payload].concat(Object(c.a)(e.recentJobs))});case"SET_POSTED_JOBS":return Object(n.a)(Object(n.a)({},e),{},{recentJobs:t.payload});case"SET_SKILL_SEARCH_RESULT":return Object(n.a)(Object(n.a)({},e),{},{skillSearch:t.payload});case"SET_TRENDING_JOBS":return Object(n.a)(Object(n.a)({},e),{},{trendingJobs:t.payload});case"SET_RECOMMENDED_JOBS":return Object(n.a)(Object(n.a)({},e),{},{recommendedJobs:t.payload});case"SET_ACTIVE_JOB":return Object(n.a)(Object(n.a)({},e),{},{activeJob:t.payload});case"SET_ACTIVE_JOB_MODAL_VISIBLE":return Object(n.a)(Object(n.a)({},e),{},{jobDetailModalVisible:t.payload});case"SET_RECOMMENDED_CANDIDATES":return Object(n.a)(Object(n.a)({},e),{},{recommendedCandidates:t.payload});case"SET_RECRUITER_CANDIDATE_DETAILS":return Object(n.a)(Object(n.a)({},e),{},{recruiterCandidateDetails:t.payload});case"SET_SEARCH_TYPE":return Object(n.a)(Object(n.a)({},e),{},{searchType:t.payload});case"SET_COMPANY_SEARCH":return Object(n.a)(Object(n.a)({},e),{},{companySearch:t.payload});case"SET_APPLIED_CANDIDATES":return Object(n.a)(Object(n.a)({},e),{},{appliedCandidates:t.payload});case"SET_CITIES":return Object(n.a)(Object(n.a)({},e),{},{cities:t.payload});case"SET_SKILLS":return Object(n.a)(Object(n.a)({},e),{},{skills:t.payload});case"CLEAR_STATE":return Object(n.a)({},r);default:return Object(n.a)({},e)}}},175:function(e,t,a){},183:function(e,t,a){},194:function(e,t){},240:function(e,t,a){},244:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(43),s=a.n(r),i=(a(175),a(7)),o=a(105),d=a(10),l=a(94),u=a(111),b=a(144),j=a(145),O=a(158),p=a(157),_=a(276),E=a(245),S=a(13),h=function(e){Object(O.a)(a,e);var t=Object(p.a)(a);function a(e){var c;return Object(b.a)(this,a),(c=t.call(this,e)).state={hasError:!1},c}return Object(j.a)(a,[{key:"componentDidCatch",value:function(e,t){}},{key:"render",value:function(){return this.state.hasError?Object(S.jsx)(_.a,{status:"404",title:"404",subTitle:"Something went wrong!.",extra:Object(S.jsx)(E.a,{type:"primary",children:"Back Home"})}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),a}(c.Component),T=a(106),m={aws_project_region:"us-east-1",aws_cognito_identity_pool_id:"us-east-1:83f30242-09d6-47aa-941c-0cd0b0ececc8",aws_cognito_region:"us-east-1",aws_user_pools_id:"us-east-1_fiDmjl5hP",aws_user_pools_web_client_id:"51r0j2oj1mbi14t91ehd755hgt",oauth:{domain:"geek-inisder-auth-api-dev.auth.us-east-1.amazoncognito.com",scope:["phone","email","openid","profile","aws.cognito.signin.user.admin"],redirectSignIn:"http://localhost:3000/",redirectSignOut:"http://localhost:3000/",responseType:"code"},federationTarget:"COGNITO_USER_POOLS",aws_cloud_logic_custom:[{name:"AdminQueries",endpoint:"https://6mc2vkairf.execute-api.us-east-1.amazonaws.com/dev",region:"us-east-1"}]};a(104).default.configure(m);a(240);var f=Object(c.lazy)((function(){return Promise.all([a.e(10),a.e(24)]).then(a.bind(null,479))})),g=function(){return Object(S.jsx)(c.Suspense,{fallback:Object(S.jsx)("div",{className:"loader--global",children:Object(S.jsx)(T.a,{className:"loader--global"})}),children:Object(S.jsx)(h,{children:Object(S.jsx)(l.a,{store:u.a,children:Object(S.jsx)(o.a,{children:Object(S.jsx)(d.b,{path:"/",render:function(e){return Object(S.jsx)(f,Object(i.a)({},e))}})})})})})},y=function(e){e&&e instanceof Function&&a.e(27).then(a.bind(null,468)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(S.jsx)(n.a.StrictMode,{children:Object(S.jsx)(g,{})}),document.getElementById("root")),y()}},[[244,8,9]]]);
//# sourceMappingURL=main.0e64825a.chunk.js.map