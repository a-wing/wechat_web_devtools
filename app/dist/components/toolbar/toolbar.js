'use strict';var _exports;function init(){const a=require('../../lib/react.js'),b=require('./userinfo.js'),c=require('./urlbar.js'),d=require('./clearbutton.js'),e=require('../../stores/windowStores.js'),f=a.createClass({displayName:'Toolbar',getInitialState:function(){let g=e.getUserInfo();return{userInfo:g}},_upDataUserInfo:function(g){this.setState({uesrInfo:g})},componentDidMount:function(){e.on('UPDATA_USER_INFO',this._upDataUserInfo)},componentWillUnmount:function(){e.removeListener('UPDATA_USER_INFO',this._upDataUserInfo)},render:function(){let g=this.props.project;return g?a.createElement('div',{className:'toolbar'},a.createElement(b,{project:this.props.project,userInfo:this.state.userInfo})):a.createElement('div',{className:'toolbar'},a.createElement(b,{userInfo:this.state.userInfo}),a.createElement(c,{project:this.props.project}),a.createElement(d,null))}});_exports=f}init(),module.exports=_exports;