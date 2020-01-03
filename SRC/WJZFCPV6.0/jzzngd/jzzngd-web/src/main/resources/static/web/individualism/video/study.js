var table = null;
layui.use(['table'], function () {
    var laydate = layui.laydate;
    table = layui.table;
    table.init('demo', {
        limit: 15
    });
    $(".I106_contentLeft").height($(".I106_contentRight").height())
});
var contextPath = getContextPath();
var customer = {
    index: null,
    del: function () {
        var idList = customer.getRowFexId("id");
        layer.confirm('确定要删除此信息？', {
            btn: ['确定', '取消'] //按钮
        }, function () {
            $.ajax({
                type: "delete",
                url: contextPath + "/individualism/video/" + idList,
                success: function (resp) {
                    if (resp === true) {
                        layer.alert("删除成功");
                        location.href = contextPath + "/individualism/video/study";
                    } else {
                        layer.alert("删除失败");
                    }
                }
            });
        });
    },
    toDetail: function () {
        var id = customer.getRowFexId("id");
        var title = customer.getRowFexId("title");
        if (customer.getRowCount() !== 1) {
            layer.alert("只能选择一行");
            return;
        }
        layui.layer.open({
            title: '<img src="' + contextPath + '/images/I208_edit.png"><span>' + title + '</span>',
            type: 2,
            shadeClose: false,
            shade: 0.6,
            skin: 'A106_layer',
            area: ['1000px', '500px'], //宽高
            content: [contextPath + '/individualism/video/' + id, 'yes']
        });
    },
    toAdd: function () {
        layui.layer.open({
            title: '<img src="' + contextPath + '/images/I208_edit.png"><span>新增视频分享</span>',
            type: 2,
            shadeClose: false,
            shade: 0.6,
            skin: 'A106_layer',
            area: ['1000px', '450px'], //宽高
            content: [contextPath + '/individualism/video/add', 'yes'],
        });
    },
    toEdit: function () {
        var id = customer.getRowFexId("id");
        var title = customer.getRowFexId("title");
        if (customer.getRowCount() !== 1) {
            layer.alert("只能选择一行");
            return;
        }
        layui.layer.open({
            title: '<img src="' + contextPath + '/images/I208_edit.png"><span>' + title + '</span>',
            type: 2,
            shadeClose: false,
            shade: 0.6,
            skin: 'A106_layer',
            area: ['1000px', '450px'], //宽高
            content: [contextPath + '/individualism/video/' + id, 'yes']
        });
    },
    getRowFexId: function (value) {
        //获取选中行FexId属性值公共方法
        //value 为传入的  {field: 'id',style:'display:none;'} field值
        //返回结果 是这一列被选中的 用,隔开的字符串
        var checkStatus = table.checkStatus('tables')
            , data = checkStatus.data, arr = new Array();
        for (var i = 0; i < data.length; i++) {
            arr.push(data[i][value]);
        }
        return arr.join(",");
    },
    getRowCount: function () {
        var checkStatus = table.checkStatus('tables')
            , data = checkStatus.data, arr = new Array();
        return data.length;
    }
};