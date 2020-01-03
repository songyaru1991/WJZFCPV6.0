layui.use('laydate', function () {
    var laydate = layui.laydate;
    laydate.render({
        elem: '#faultTime'
        , type: 'datetime'
    });
    laydate.render({
        elem: '#faultReplyTime'
        , type: 'datetime'
    });
    laydate.render({
        elem: '#faultSolveTime'
        , type: 'datetime'
    });
    laydate.render({
        elem: '#faultRecoverTime'
        , type: 'datetime'
    });
});

var customer = {
    index: null,
    cancel: function () {
        index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
        parent.layer.close(index); //再执行关闭
    },
    edit: function () {
        var contextPath = getContextPath();
        var data = {
            engineVendor: "select NotNull",
            faultLevel: "select NotNull",
            faultTime: "input NotNull",
            faultDescription: "input NotNull",
            faultSolveRecord: "input NotNull"
        };

        var flag = V_CHECK(data);
        if (flag) {
            var index1 = layer.load(1, {
                shade: [0.1, '#fff'] //0.1透明度的白色背景
            });

            $.ajax({
                type: "post",
                url: contextPath + '/system/fault/edit',
                data: $("form").serialize(),
                success: function (resp) {
                    if (resp) {
                        layer.alert("保存成功", function () {
                            window.parent.parent.location.reload();//刷新父页面
                            index = parent.parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
                            parent.layer.close(index); //再执行关闭
                        });
                    } else {
                        layer.alert("保存失败");
                    }
                }
            })
        }
    }
};