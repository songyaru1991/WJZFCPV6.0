$(function () {
    function resize() {
        //在1920px下 1em = 20px
        var windowW
      if ( document.body.clientWidth <$(parent.document).width()){
        windowW =$(parent.document).width()
      }else {
        windowW = document.body.clientWidth
      }
        //1440尺寸下都用1280
        if (windowW <= 1280) {
            windowW = 1280;
        }
      $("body,html").css({
            fontSize: windowW * (40 / 3)  / 1280 + 'px'
        });


      //高度自适应
      // if ($(".J106_page").height()>$(window).height()) {
      //   $(".J106_footer").css({
      //     "position": "static"
      //   })
      // } else {
      //   $(".J106_footer").css({
      //     "position": "absolute"
      //   })
      // }

    }
    resize();
    $(window).bind("resize", resize)
  getTime()
  setInterval("getTime();",1000); //每隔一秒运行一次

});

//取得系统当前时间
function getTime(){
  var myDate = new Date();
  var date = myDate.toLocaleDateString();
  var hours = myDate.getHours();
  var minutes = myDate.getMinutes();
  var seconds = myDate.getSeconds();
   minutes = minutes > 9 ? minutes : '0' + minutes;
   seconds = seconds > 9 ? seconds : '0' + seconds;

  $(".H105_dateTime").html(date+" "+hours+":"+minutes+":"+seconds); //将值赋给div
}


//获取当前时间并格式化
Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "H+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
//调用
var time1 = new Date().Format("yyyy-MM-dd");
var time2 = new Date().Format("yyyy-MM-dd HH:mm:ss");

