(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46da5c43"],{9735:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container",staticStyle:{padding:"100px",display:"flex","flex-wrap":"wrap"}},[a("div",{staticClass:"avatar-container",style:{zIndex:t.zIndex,height:t.height,width:t.width}},[a("img",{staticClass:"avatar-image",attrs:{src:t.avatar}})]),a("div",{staticClass:"text-container"},[a("div",{staticClass:"text-content",staticStyle:{display:"block"}},[a("h1",[t._v(" "+t._s(t.name)+" ")])]),a("div",{staticClass:"text-content",staticStyle:{display:"block"}},[a("h2",[t._v("role: "+t._s(t.roles)+" ")])])]),a("div",{staticClass:"function-container"},[a("el-button",{staticStyle:{position:"absolute",top:"calc(300px - 40px)",left:"calc(300px - 40px)"},attrs:{type:"primary",icon:"el-icon-edit",circle:""},on:{click:function(e){t.imagecropperShow=!0}}}),a("el-button",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary",icon:"el-icon-upload"},on:{click:function(e){t.imagecropperShow=!0}}},[t._v(" Change profile ")]),a("el-button",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary",icon:"el-icon-upload"},on:{click:function(e){t.imagecropperShow=!0}}},[t._v(" Change password ")])],1)])},n=[],c=(a("a9e3"),a("b0c0"),{name:"UserPanel",data:function(){return{zIndex:{type:Number,default:1},width:{type:String,default:"150px"},height:{type:String,default:"150px"}}},computed:{avatar:function(){return a("51a8")("./"+this.$store.getters.avatar)},name:function(){return this.$store.getters.name},roles:function(){return this.$store.getters.roles}},created:function(){}}),r=c,s=(a("bfa8"),a("2877")),o=Object(s["a"])(r,i,n,!1,null,"8c509e14",null);e["default"]=o.exports},bfa8:function(t,e,a){"use strict";a("e9ab")},e9ab:function(t,e,a){}}]);