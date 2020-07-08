/*
 * @Author: your name
 * @Date: 2020-05-24 23:41:07
 * @LastEditTime: 2020-05-24 23:42:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \咖啡\js\tab.js
 */ 
var oDiv=document.querySelectorAll(".text");
var oDiv1=document.querySelectorAll(".content");
console.log(oDiv1)
console.log(oDiv)
oDiv.forEach(function (itme,key) {
        console.log(itme);
        itme.onclick = function() {
                oDiv.forEach(function (v,k) {
                   //清空效果
                    oDiv1[k].id ="";
                })					
                //当前点击的标签设置变化
            oDiv1[key].id = "kai";
            }
        
    });