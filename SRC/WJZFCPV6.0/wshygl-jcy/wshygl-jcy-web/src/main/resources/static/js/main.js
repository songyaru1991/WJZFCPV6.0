$(function () {
    function resize() {
        var windowW = $(window).width();
        var initWH = 1340 / 820;
        //1440尺寸下都用1280
        if (windowW <= 1440) {
            windowW = 1280;
        } else {
        }
        $("body,html").css({
            fontSize: windowW * 12 / 1280 + 'px'
        });
        $(".I106_contentLeft").height($(".I106_contentRight").height())
    }
    resize();
    $(window).bind("resize", resize)
});
$(document).ready(function () {
    //layui表单启用，渲染select/checkbox/radio等元素
    layui.use(["form","laydate"],function () {
        var carousel = layui.carousel
            ,form = layui.form
        form.render()
    });
    $(".I108_editUlToggle").click(function(){
        if($('.I108_listEditUl').is(':hidden')){//如果当前隐藏
            $('.I108_listEditUl').show();//那么就显示div
        }else{//否则
            $('.I108_listEditUl').hide();//就隐藏div
        }
    });
    // 首页导航栏点击切换
    // $(".I206_nav>li").click(function () {
    //     $(this).addClass("I206_navCur").siblings().removeClass("I206_navCur");
    //     $(".I206_subNavOuter").hide();
    //     $(".I206_subNavOuter").eq($(".I206_nav>li").index($(this))).show();
    // })
});