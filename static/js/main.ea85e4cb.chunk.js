(this["webpackJsonpcovid-app"]=this["webpackJsonpcovid-app"]||[]).push([[0],{115:function(e,t,n){e.exports=n(221)},119:function(e,t,n){},122:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=122},221:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n.n(a),o=n(71),c=n(72),l=n(77),i=n(76),u=n(60);var s=Object(a.memo)((function(e){var t=e.countries,n=e.setTooltipContent;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.ComposableMap,{"data-tip":"",projectionConfig:{scale:200}},r.a.createElement(u.ZoomableGroup,null,r.a.createElement(u.Geographies,{geography:"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"},(function(e){return e.geographies.map((function(e){return r.a.createElement(u.Geography,{key:e.rsmKey,geography:e,onMouseEnter:function(){var a=e.properties.ISO_A2;t.filter((function(e){return e.CountryCode===a})).map((function(e){return n(e.Country,e.TotalConfirmed,e.NewConfirmed,e.TotalDeaths,e.NewDeaths,e.TotalRecovered,e.NewRecovered,e.Date)}))},onMouseLeave:function(){n("")},style:{default:{fill:"#D6D6DA",outline:"none",border:"black"},hover:{fill:"#F53",outline:"none"},pressed:{fill:"#E42",outline:"none"}}})}))})))))})),d=(n(119),n(111)),p=function(e){var t=e.data;return r.a.createElement(d.a,null,r.a.createElement("p",null,"Country: ",t.country),r.a.createElement("p",null,"Confirmed cases: ",t.confirmed,r.a.createElement("span",null)," New cases: ",t.newConfirmed),r.a.createElement("p",null,"Death total: ",t.deaths," ",r.a.createElement("span",null)," New deaths: ",t.newDeaths),r.a.createElement("p",null,"Recovered: ",t.recovered," ",r.a.createElement("span",null)," New recovered:"," ",t.newRecovered," "),r.a.createElement("p",null,"Update time: ",t.date))},m=n(107),f=function(e){var t={labels:e.data.map((function(e){return e.date})),datasets:[{label:e.name,fill:!1,lineTension:.1,borderColor:e.color,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:e.color,pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:e.color,pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:e.data.map((function(e){return e.property}))}]};return r.a.createElement(m.a,{data:t})},h={method:"GET",redirect:"follow"},v=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={selectValue:"afghanistan",dataActive:[],dataDeaths:[]},e.handleChange=function(t){e.setState({selectValue:t.target.value})},e.getData=function(){fetch("https://api.covid19api.com/total/country/".concat(e.state.selectValue),h).then((function(e){return e.json()})).then((function(t){return e.setState({dataActive:t.filter((function(e){return e.Active>0})).map((function(e){return{property:e.Active,date:e.Date.substring(0,10)}})),dataDeaths:t.filter((function(e){return e.Deaths>0})).map((function(e){return{property:e.Deaths,date:e.Date.substring(0,10)}}))})})).catch((function(e){return console.log("error",e)}))},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"componentDidUpdate",value:function(e,t){this.state.selectValue!==t.selectValue&&this.getData()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("select",{value:this.state.selectValue,name:"countries",id:"countrySelected",onChange:this.handleChange},this.props.countries&&this.props.countries.map((function(e){return r.a.createElement("option",{key:e.CountryCode,value:e.Slug},e.Country)}))),r.a.createElement(f,{data:this.state.dataActive,name:"Active cases",color:"rgba(1, 167, 255, 1)"}),r.a.createElement(f,{data:this.state.dataDeaths,name:"Deaths",color:"rgba(255, 37, 37, 1)"}))}}]),n}(a.Component),y=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={countries:[],country:"",confirmed:null,newConfirmed:null,deaths:null,newDeaths:null,recovered:null,newRecovered:null,date:"",selectValue:""},e.setTooltipContent=function(t,n,a,r,o,c,l,i){e.setState({country:t,confirmed:n,newConfirmed:a,deaths:r,newDeaths:o,recovered:c,newRecovered:l,date:i})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.covid19api.com/summary",{method:"GET",redirect:"follow"}).then((function(e){return e.json()})).then((function(t){e.setState({countries:t.Countries})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"map"},r.a.createElement(s,{setTooltipContent:this.setTooltipContent,countries:this.state.countries}),this.state.country&&r.a.createElement(p,{data:this.state})),r.a.createElement("div",{className:"charts"},r.a.createElement(v,{countries:this.state.countries})))}}]),n}(a.Component),E=n(110),g=n.n(E),C=function(){return r.a.createElement(y,null)},b=document.getElementById("root");g.a.render(r.a.createElement(C,null),b)}},[[115,1,2]]]);
//# sourceMappingURL=main.ea85e4cb.chunk.js.map