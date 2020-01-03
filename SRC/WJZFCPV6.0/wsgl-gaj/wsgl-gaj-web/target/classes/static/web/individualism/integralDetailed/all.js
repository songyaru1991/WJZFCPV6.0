var table = null;
layui.use(['laydate','table'],function () {
    table = layui.table;
    //监听表格复选框选择
    table.on('checkbox(demo)', function(obj){

    });
    var laydate = layui.laydate;
    laydate.render({
        elem: '#startTime'
        , type: 'month'
    });
    laydate.render({
        elem: '#stopTime'
        , type: 'month'
    });
})
