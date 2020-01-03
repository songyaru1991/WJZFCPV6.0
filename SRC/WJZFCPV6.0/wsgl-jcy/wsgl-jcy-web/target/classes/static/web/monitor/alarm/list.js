layui.use(['laydate', 'table'], function () {
    var laydate = layui.laydate;
    table = layui.table;
    table.init('demo', {
        limit: 15
    });
    $(".I106_contentLeft").height($(".I106_contentRight").height())
    laydate.render({
        elem: '#startTime'
        , type: 'datetime'
    });
    laydate.render({
        elem: '#stopTime'
        , type: 'datetime'
    });
});