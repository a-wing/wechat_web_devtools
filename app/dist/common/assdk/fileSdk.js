'use strict';var _exports;function init(){require('../../actions/webviewActions.js');const a=require('../../stores/projectStores.js'),b=require('../../utils/file.js'),c=require('fs'),d=require('path'),e={'.doc':!0,'.xls':!0,'.ppt':!0,'.pdf':!0,'.docx':!0,'.xlsx':!0,'.pptx':!0};_exports={saveFile:function(g,h){let i=g.args,j=i.tempFilePath;var k=b.getFileStat(j);if(!j||!k)h({errMsg:'saveFile:fail file not found'});else{const m=a.getCurrentProjectConfig(),n=a.getCurrentProject();var l=b.getSavedFileList(n);if(1024*(1024*m.Setting.MaxFileStorageSize)<l.totalSize+k.size)h({errMsg:'saveFile:fail the maximum size of the file storage limit is exceeded'});else{let o=b.saveFileForever(j);!1===o?h({errMsg:'saveFile:fail'}):h({errMsg:'saveFile:ok',savedFilePath:o})}}},openDocument:function(g,h){let i=g.args,j=i.filePath,k=d.extname(j);if(!e[k].toLowerCase())return void h({errMsg:'openDocument:fail filetype not supported'});let l=b.getRealPath(j);return c.existsSync(l)?void(nw.Shell.openItem(l),h({errMsg:'openDocument:ok'})):void h({errMsg:'openDocument:fail fail file not exist'})},getSavedFileList:function(g,h){let i=a.getCurrentProject(),j=b.getSavedFileList(i);h({errMsg:'getSavedFileList:ok',fileList:j.fileList})},getSavedFileInfo:function(g,h){let i=g.args;if(i.filePath){let j=b.getFileStat(i.filePath);j?h({errMsg:'getSavedFileInfo:ok',size:j.size,createTime:parseInt(j.ctime.getTime()/1000)}):h({errMsg:`getSavedFileInfo:fail file doesn't exist`})}else h({errMsg:'getSavedFileInfo:fail'})},removeSavedFile:function(g,h){let i=g.args;i.filePath?b.removeSavedFile(i.filePath)?h({errMsg:'removeSavedFile:ok'}):h({errMsg:`removeSavedFile:fail file doesn't exist`}):h({errMsg:'removeSavedFile:fail'})},base64ToTempFilePath:function(g,h){let i=g.args,j=a.getCurrentProject();if(i.base64Data){let k=b.saveBase64DataToFile(j,i.base64Data,'.jpg');k?h({errMsg:'base64ToTempFilePath:ok',tempFilePath:k}):h({errMsg:'base64ToTempFilePath:fail'})}else h({errMsg:'base64ToTempFilePath:fail'})}}}init(),module.exports=_exports;