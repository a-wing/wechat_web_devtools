'use strict';var _exports;function init(){const a=require('../../lib/react.js'),b=require('../../cssStr/cssStr.js'),c=require('../../stores/windowStores.js');var d;const e=a.createClass({displayName:'Toast',getInitialState:function(){return{msg:'',show:!1,type:''}},_tipsMsg:function(f){this.setState({msg:f.msg,show:!0,type:f.type||'success'}),d=setTimeout(()=>{this.setState({show:!1})},2000)},componentDidMount:function(){c.on('SHOW_TIPS_MSG',this._tipsMsg)},componentWillUnmount:function(){clearTimeout(d),c.removeListener('SHOW_TIPS_MSG',this._tipsMsg)},render:function(){let f=this.state.show?b.displayBlock:b.displayNone;return a.createElement('div',{className:`toast toast-${this.state.type}`,style:f},a.createElement('i',{className:'icon-info'}),this.state.msg)}});_exports=e}init(),module.exports=_exports;