'use strict';var _exports;function init(){const a=require('../../../lib/react.js');require('../../../lib/react-dom.js');const b=require('../../../stores/windowStores.js'),c=a.createClass({displayName:'Confirm',getInitialState:function(){return{title:'',content:'',confirmText:'\u786E\u5B9A',cancelText:'\u53D6\u6D88',showCancel:!0,confirmColor:'#3CC51F',cancelColor:'#000000',hidden:!0}},componentDidMount:function(){b.on('WINDOW_SHOW_SIMULATOR_CONFIRM',this._onShowConfirm)},componentWillUnmount:function(){b.removeListener('WINDOW_SHOW_SIMULATOR_CONFIRM',this._onShowConfirm)},_onShowConfirm:function(d){if(d){this._callback=d.callback;let g='string'==typeof d.title?d.title:'',h='string'==typeof d.content?d.content:'';this.setState({title:g,content:h,showCancel:'alert'!==d.type,hidden:!1})}},callback:function(d){'function'==typeof this._callback&&this._callback(d)},handleCancelClick:function(){this.hide(),this.callback(!1)},handleConfrimClick:function(){this.hide(),this.callback(!0)},hide:function(){this.setState({hidden:!0})},render:function(){return a.createElement('div',{className:'wx-modal',style:{display:this.state.hidden?'none':'block'}},a.createElement('div',{className:'wx-modal-mask'}),a.createElement('div',{className:'wx-modal-dialog'},a.createElement('div',{className:'wx-modal-dialog-hd'},a.createElement('strong',null,this.state.title)),a.createElement('div',{className:'wx-modal-dialog-bd'},this.state.content),a.createElement('div',{className:'wx-modal-dialog-ft'},a.createElement('a',{className:'wx-modal-btn-default',style:{color:this.state.cancelColor,display:this.state.showCancel?'':'none'},onClick:this.handleCancelClick},this.state.cancelText),a.createElement('a',{className:'wx-modal-btn-primary',style:{color:this.state.confirmColor},onClick:this.handleConfrimClick},this.state.confirmText))))}});_exports=c}init(),module.exports=_exports;