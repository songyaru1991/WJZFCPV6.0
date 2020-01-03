layui.use('table',function () {
    layui.table.init('demo', {
        limit: 15
    });
    $(".I106_contentLeft").height($(".I106_contentRight").height())
})

var table = null;

layui.use('table',function () {
    table = layui.table;
    //监听表格复选框选择
    table.on('checkbox(demo)', function(obj){
    });
})



//获取选中行FexId属性值公共方法
//value 为传入的  {field: 'id',style:'display:none;'} field值
//返回结果 是这一列被选中的 用,隔开的字符串
function getRowFexId(value){
    var checkStatus = table.checkStatus('tables')
        ,data = checkStatus.data,arr = new Array();;
    for(var i = 0;i<data.length;i++){
        arr.push(data[i][value]);
    }
    return arr.join(",");
}


function add() {
    //var imgSrc = /*[[@{*/images/I208_edit.png/*}]]*/;
    var orgId = $("#orgId").val();
    if(orgId=='') {
        layer.msg("请先选择节点!");
        return;
    }
    layui.layer.open({
        title:'<img src= "'+getContextPath()+'/images/I208_edit.png" ><span>摄像头新增</span>',
        type: 2,
        shadeClose: false,
        shade: 0.6,
        skin:'A106_layer',
        area: ['1000px', '580px'], //宽高
        content: [getContextPath()+'/camera/add?orgId='+orgId, 'yes']
    })
}

function view(){
    var id = getRowFexId("id").split(",");
    if(id[0]==''){
        layer.msg("请先选择一条数据！");
        return;
    }
    if(id.length>1){
        layer.msg("只能查看一条数据！");
        return;
    }
    if(id.length==1){
        layui.layer.open({
            title:'<span>摄像头信息</span>',
            type: 2,
            shadeClose: false,
            shade: 0.6,
            skin:'A106_layer',
            area: ['1000px', '700px'], //宽高
            content: [getContextPath()+'/camera/view?id='+id, 'no']
        })
    }

}

function edit(){
    var id = getRowFexId("id").split(",");
    if(id[0]==''){
        layer.msg("请先选择一条数据！");
        return;
    }
    if(id.length>1){
        layer.msg("只能同时编辑一条数据！");
        return;
    }
    if(id.length==1){
        layui.layer.open({
            title:'<span>摄像头编辑</span>',
            type: 2,
            shadeClose: false,
            shade: 0.6,
            skin:'A106_layer',
            area: ['1000px', '580px'], //宽高
            content: [getContextPath()+'/camera/edit?id='+id, 'yes']
        })
    }

}


function del(){
    var ids = getRowFexId("id").split(",");
    if(ids[0]==''){
        layer.msg("请先选择一条数据！");
        return;
    }
    parent.window.layer.confirm('<span>确认删除'+ids.length+'条数据吗？</span>',{title: '<span>删除</span>'},  function (index) {
        $.ajax({
            type: 'post',
            url: getContextPath()+'/camera/delete?ids='+ids,
            dataType:'json',
            success: function (data) {
                if(data.code=="SUCCESS"){
                    layer.alert('删除摄像头成功',function () {
                        location.reload();
                    })
                }else{
                    layer.msg('删除失败');
                }
            }
        })

    });
}




function toImport(){
    layui.layer.open({
        title:'<span>摄像头导入</span>',
        type: 2,
        shadeClose: false,
        shade: 0.6,
        skin:'A106_layer',
        area: ['1000px', '580px'], //宽高
        content: [getContextPath()+'/camera/upload', 'yes']
    })
}

function closelayui(){
    $("#form").submit();
}


function queryByType(event, treeId, treeNode){
    if(!treeNode.code){
        treeNode.code = '';
    }
    $("#orgId").val(treeNode.id);
    $("#form").submit();
}
function beforeDrag(treeId, treeNodes) {
    return false;
}

var treeObj = null,node = null;

$(document).ready(function(){

    var setting = {
        view: {
            showIcon: false
        },
        edit: {
            enable: true,
            showRemoveBtn: false,
            showRenameBtn: false
        },
        data: {
            keep: {
                parent:true,
                leaf:true
            },
            simpleData: {
                enable: true,
                pIdKey: "parentId",
                idKey:"id"
            }
        },
        callback: {
            beforeDrag: beforeDrag,
            onClick:queryByType
        }
    };

    var zNodes = JSON.parse($("#orgList").val());
    var orgId = $("#orgId").val();


    function beforeDrag(treeId, treeNodes) {
        return false;
    }

    function selNode(code) {
        treeObj = $.fn.zTree.getZTreeObj("treeDemo");
        node = treeObj.getNodeByParam("id",orgId);
        treeObj.cancelSelectedNode();
        treeObj.selectNode(node, true);
        treeObj.expandNode(node, true, false);
    }

    $.fn.zTree.init($("#treeDemo"), setting, zNodes);
    selNode(orgId);

});