var customer = {
    index: null,
    saveName: function () {
        var contextPath = getContextPath();
        $.ajax({
            type: "post",
            url: contextPath + '/gallery/changeName',
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
    },
    cancel: function () {
        index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
        parent.layer.close(index); //再执行关闭
    }
};