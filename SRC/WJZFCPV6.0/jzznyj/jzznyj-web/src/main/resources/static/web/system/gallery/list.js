var contextPath = getContextPath();

$(document).ready(function () {
    var setting = {
        view: {
            showIcon: false
        },
        data: {
            simpleData: {
                enable: true
            }
        }
    };
    $.get(contextPath + "/gallery/treeJson", function (resp) {
        $.fn.zTree.init($("#treeDemo"), setting, JSON.parse(resp));
    })
});

var table = null;
layui.use(['laydate', 'table'], function () {
    table = layui.table;
    table.init('demo', {
        limit: 15
    });
    $(".I106_contentLeft").height($(".I106_contentRight").height());
});



var customer = {
    index: null,
    toEdit: function () {
        var id = customer.getRowFexId("id");
        var rowCount = customer.getRowCount();
        if (rowCount > 1) {
            layer.alert("只能选取一行，请重新选择");
            return;
        } else if (rowCount < 1) {
            layer.alert("至少选取一行，请重新选择");
            return;
        }
        layui.layer.open({
            title: '<img src=' + contextPath + '/images/I208_edit.png"><span>类型名称重命名</span>',
            type: 2,
            shadeClose: false,
            shade: 0.6,
            skin: 'A106_layer',
            area: ['510px', '230px'], //宽高
            content: [contextPath + '/gallery/edit/' + id, 'yes']
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

function queryChildrenTypeByParentId(type) {
    location.href = contextPath + "/gallery/list?type=" + type;
}