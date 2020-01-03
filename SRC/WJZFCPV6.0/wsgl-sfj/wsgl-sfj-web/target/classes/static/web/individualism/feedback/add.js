var contextPath = getContextPath();
var customer = {
    index: null,
    cancel: function () {
        index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
        parent.layer.close(index); //再执行关闭
    },
    add: function () {
        var data = {
            title: "input NotNull",
            content: "input NotNull"
        };

        var flag = V_CHECK(data);
        if (flag) {
            var index1 = layer.load(1, {
                shade: [0.1, '#fff'] //0.1透明度的白色背景
            });

            $.post(contextPath + "/feedback/insert", $("form").serialize(), function (resp) {
                layer.close(index1);
                if (resp) {
                    layer.alert("添加成功", function () {
                        window.parent.parent.location.reload();//刷新父页面
                        index = parent.parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
                        parent.layer.close(index); //再执行关闭
                    });
                } else {
                    layer.alert("添加失败");
                }
            });
        }
    }
};
