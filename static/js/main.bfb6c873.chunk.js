(this["webpackJsonpbits-and-bytes"]=this["webpackJsonpbits-and-bytes"]||[]).push([[0],{13:function(t,e,i){},15:function(t,e,i){"use strict";i.r(e);var a=i(1),n=i.n(a),r=i(7),s=i.n(r),c=(i(13),i(2)),u=i(3),o=i(5),l=i(4),h=i(0),f=function(t){var e=t.onChange;return Object(h.jsxs)("div",{className:"navbar",children:[Object(h.jsx)("button",{onClick:function(){return e(I.ContentEnum.HARDWARES)},children:"HARDWARE"}),Object(h.jsx)("button",{onClick:function(){return e("oaml")},children:"FACILITIES"}),Object(h.jsx)("button",{onClick:function(){return e("oaml")},children:"UPGRADES"}),Object(h.jsx)("button",{onClick:function(){return e("oaml")},children:"UNLOCKS"}),Object(h.jsx)("button",{onClick:function(){return e("oaml")},children:"STATS"})]})},_={THOUSAND:Math.pow(10,3),MILLION:Math.pow(10,6),BILLION:Math.pow(10,9),TRILLION:Math.pow(10,12),QUADRILLION:Math.pow(10,15),QUINTILLION:Math.pow(10,18),SEXTILLION:Math.pow(10,21),SEPTILLION:Math.pow(10,24),OCTILLION:Math.pow(10,27),NONILLION:Math.pow(10,30),DECILLION:Math.pow(10,33)},d={KB:1024,MB:Math.pow(1024,2)};function v(t){var e=0,i="$",a="";for(var n in _){if(t<_[n]){e=t/(_[n]/1e3),i=a.substring(0,3)+" "+i;break}a=n}return Object.freeze({value:e,suffix:i})}function m(t){var e=0,i="B",a="B";for(var n in d){if(t<d[n]){e=t/(d[n]/1024),i=a;break}a=n}return Object.freeze({value:e,suffix:i})}function j(t){var e,i,a;e=Math.floor(t/(3.6*Math.pow(10,6)));var n=t%(3.6*Math.pow(10,6));i=Math.floor(n/6e4);var r=n%6e4;return a=Math.ceil(r/1e3),String(e).padStart(2,"0")+":"+String(i).padStart(2,"0")+":"+String(a).padStart(2,"0")}var p=function(t){var e=t.currCurrency;return Object(h.jsx)("div",{className:"header",children:Object(h.jsx)("h1",{style:{color:"white"},children:"$"+String(v(e).value.toFixed(2)).padStart(6,"0")+" "+v(e).suffix})})},g=i(8),O=function(t){Object(o.a)(i,t);var e=Object(l.a)(i);function i(t){var a;Object(c.a)(this,i),(a=e.call(this,t)).props=t,a.interval=null;var n=a.props.hardware,r=window.localStorage.getItem(n.type);return a.state=null!==r?JSON.parse(r):{type:n.type,name:n.name,initial_cost:n.initial_cost,coefficient:n.coefficient,initial_time:n.initial_time,initial_revenue:n.initial_revenue,initial_storage:n.initial_storage,has_started:!1,quantity:0,cost:n.initial_cost,cost_scale:1,time:n.initial_time,start_time:0,time_left:0,revenue:0,revenue_scale:1,storage:0,storage_scale:1,is_managed:!1},a}return Object(u.a)(i,[{key:"componentDidMount",value:function(){"vaccuum_tube"==this.state.type&&0==this.state.quantity&&this.upgrade(1),this.state.has_started&&this.startInterval()}},{key:"start",value:function(){var t=this;if(!(this.state.has_started||this.state.quantity<=0)){var e=(new Date).getTime();this.setState({has_started:!0,start_time:e,time_left:this.state.time},(function(){return t.startInterval()}))}}},{key:"startInterval",value:function(){var t=this;this.interval=setInterval((function(){t.update()}),1/60)}},{key:"purchase",value:function(t){this.props.purchase(t,this.state.cost,this.state.coefficient)&&this.upgrade(t)}},{key:"upgrade",value:function(t){for(var e=this,i=0,a=this.state.cost,n=0;n<t;n++)i+=1,a*=this.state.coefficient;this.setState({quantity:this.state.quantity+i,cost:a},(function(){e.updateRevenue(),e.updateStorage(),localStorage.setItem(e.state.type,JSON.stringify(e.state))}))}},{key:"update",value:function(){var t=this;if(this.state.has_started){var e=(new Date).getTime(),i=1e3*this.state.time-(e-this.state.start_time);this.setState({time_left:i<=0?0:i},(function(){return localStorage.setItem(t.state.type,JSON.stringify(t.state))})),i<=0&&(this.setState({has_started:!1},(function(){return localStorage.setItem(t.state.type,JSON.stringify(t.state))})),this.props.gainRevenue(this.state.revenue),clearInterval(this.interval),this.state.is_managed&&this.start())}}},{key:"updateRevenue",value:function(){var t=this.state.initial_revenue*this.state.quantity*this.state.revenue_scale;this.setState({revenue:t},localStorage.setItem(this.state.type,JSON.stringify(this.state)))}},{key:"updateStorage",value:function(){var t=this.state.initial_storage*this.state.quantity*this.state.storage_scale;this.setState({storage:t},localStorage.setItem(this.state.type,JSON.stringify(this.state)))}},{key:"render",value:function(){var t=this;return Object(h.jsxs)("div",{className:"hardware",children:[Object(h.jsx)("button",{id:"start-button",onClick:function(){return t.start()},children:Object(h.jsx)("h5",{children:"START"})}),Object(h.jsxs)("div",{id:"content",children:[Object(h.jsx)("h3",{id:"quantity",children:"["+this.state.quantity+"]"}),Object(h.jsx)("h3",{id:"name",children:this.state.name}),Object(h.jsx)("h3",{id:"time_left",children:j(this.state.time_left)}),Object(h.jsx)("h3",{id:"time_left_suffix",children:"HH:MM:SS"}),Object(h.jsxs)("button",{id:"purchase_button",onClick:function(){return t.purchase(1)},children:[Object(h.jsx)("h3",{id:"buy",children:"BUY 1"}),Object(h.jsx)("h3",{id:"cost",children:String(v(this.state.cost).value.toFixed(2)).padStart(6)}),Object(h.jsx)("h3",{id:"cost_suffix",children:v(this.state.cost).suffix})]}),Object(h.jsx)("h3",{id:"revenue_text",children:"REVENUE"}),Object(h.jsx)("h3",{id:"revenue",children:String(v(this.state.revenue).value.toFixed(2)).padStart(6)}),Object(h.jsx)("h3",{id:"revenue_suffix",children:v(this.state.initial_storage).suffix}),Object(h.jsx)("h3",{id:"storage_text",children:"STORAGE"}),Object(h.jsx)("h3",{id:"storage",children:String(m(this.state.storage).value.toFixed(2)).padStart(7)}),Object(h.jsx)("h3",{id:"storage_suffix",children:m(this.state.storage).suffix})]})]})}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}}]),i}(n.a.Component),S=function(t){var e=t.gainRevenue,i=t.purchase,n=Object(a.useState)([{type:"vaccuum_tube",name:"Vaccuum Tube",initial_cost:3.738,coefficient:1.07,initial_time:1,initial_revenue:1,initial_storage:1},{type:"magnetic_core",name:"Magnetic Core",initial_cost:46.73,coefficient:1.15,initial_time:3.2,initial_revenue:14.5,initial_storage:128},{type:"semiconductor",name:"Semiconductor",initial_cost:584.06,coefficient:1.14,initial_time:10.24,initial_revenue:210.25,initial_storage:16384},{type:"magnetic_dict",name:"Magnetic Disk",initial_cost:7300.78,coefficient:1.13,initial_time:32.77,initial_revenue:3048.63,initial_storage:2097152},{type:"optical_disk",name:"Optical Disk",initial_cost:91259.77,coefficient:1.12,initial_time:104.86,initial_revenue:44205.06,initial_storage:268435456},{type:"flash_drive",name:"Flash Drive",initial_cost:1140747.07,coefficient:1.11,initial_time:335.54,initial_revenue:640973.41,initial_storage:34359738368},{type:"solid_state_drive",name:"Solid State Drive",initial_cost:14259338.38,coefficient:1.1,initial_time:1073.74,initial_revenue:9294114.39,initial_storage:4398046511104},{type:"data_silo",name:"Data Silo",initial_cost:178241729.74,coefficient:1.09,initial_time:3435.97,initial_revenue:134764658.66,initial_storage:562949953421312},{type:"data_lake",name:"Data Lake",initial_cost:2228021621.7,coefficient:1.08,initial_time:10995.12,initial_revenue:1954097550.63,initial_storage:0xffffffffffffe0},{type:"cloud_data",name:"Cloud Data",initial_cost:27850270271.3,coefficient:1.07,initial_time:35184.37,initial_revenue:28334269484.12,initial_storage:922337203685478e4}]),r=Object(g.a)(n,2),s=r[0];r[1];return Object(h.jsx)("div",{className:"hardwares",children:s.map((function(t){return Object(h.jsx)(O,{hardware:t,gainRevenue:e,purchase:i},t.type)}))})},b=function(t){var e=t.contentToShow,i=t.gainRevenue,a=t.purchase;return Object(h.jsx)("div",{className:"body",children:e===I.ContentEnum.HARDWARES&&Object(h.jsx)(S,{gainRevenue:i,purchase:a})})},y=function(t){var e=t.contentToShow,i=t.currCurrency,a=t.gainRevenue,n=t.purchase;return Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)(p,{currCurrency:i}),Object(h.jsx)(b,{contentToShow:e,gainRevenue:a,purchase:n})]})},x=function(t){Object(o.a)(i,t);var e=Object(l.a)(i);function i(t){var a;Object(c.a)(this,i),(a=e.call(this,t)).onChange=function(t){a.setState({cur_content:t})},a.purchase=function(t,e,i){var n=function(t,e,i){for(var a=e,n=0;n<t-1;n++)a*=i;return a}(t,e,i);if(a.state.curr_currency<n)return!1;var r=a.state.curr_currency-n;return a.setState({curr_currency:r},(function(){return localStorage.setItem("game_data",JSON.stringify(a.state))})),!0},a.gainRevenue=function(t){a.setState({curr_currency:a.state.curr_currency+t,life_currency:a.state.life_currency+t,term_currency:a.state.term_currency+t},(function(){return localStorage.setItem("game_data",JSON.stringify(a.state))}))};var n=localStorage.getItem("game_data");return a.state=null!==n?JSON.parse(n):{curr_currency:0,life_currency:0,term_currency:0,start_life_currency:0,storage_space:0,cur_content:i.ContentEnum.HARDWARES},a}return Object(u.a)(i,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"game",children:[Object(h.jsx)(f,{onChange:this.onChange}),Object(h.jsx)(y,{contentToShow:this.state.cur_content,currCurrency:this.state.curr_currency,gainRevenue:this.gainRevenue,purchase:this.purchase})]})}}]),i}(n.a.Component);x.ContentEnum={HARDWARES:0,FACILITIES:1,UPGRADES:2,UNLOCKS:3,INVESTORS:4,STATS:5};var I=x;s.a.render(Object(h.jsx)(I,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.bfb6c873.chunk.js.map