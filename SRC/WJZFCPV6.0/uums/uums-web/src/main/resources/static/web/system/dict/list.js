function queryByType(event, treeId, treeNode){
    if(!treeNode.code){
        treeNode.code = '';
    }
    $("#parentCode").val(treeNode.code);
    $("#form").submit();
}

function returnUrl(url){
    return getContextPath()+"/"+url;
}
function add() {
    var parentCode = $("#parentCode").val();
    if(parentCode == '' || parentCode == '-1'){
        ol = layui.layer.open({
            title:'<img src="'+returnUrl('/images/I208_edit.png')+'"><span>字典类型添加</span>',
            type: 2,
            shadeClose: false,
            shade: 0.6,
            skin:'A106_layer',
            area: ['1000px', '380px'], //宽高
            content: [returnUrl('/dict/addType'), 'yes']
        })
    }else{
        ol = layui.layer.open({
            title:'<img src="'+returnUrl('/images/I208_edit.png')+'"><span>字典添加</span>',
            type: 2,
            shadeClose: false,
            shade: 0.6,
            skin:'A106_layer',
            area: ['1000px', '380px'], //宽高
            content: [returnUrl('/dict/add'), 'yes']
        })
    }


}


function del(){
    if(type()){
        layer.msg("不能选择编辑类型!请在页面左侧树结构上进行操作类型!");
        return;
    }
    if(getRowCount() == 0){
        layer.msg("未选择任何一行");
        return;
    }
    var id = getRowFexId("id");
    layer.confirm('确定删除吗?',{title: '删除'}, function (index) {
        $.ajax({
            type:'delete',
            url:returnUrl("/dict/"+id),
            cache:false,
            dataType:'json',
            success:function (data) {
                if(data.code=='200'){
                    $("#form").submit();
                }else{
                    layer.alert(data.message);
                }
            }
        })
    });


}


function edit(){

    if(getRowCount() != 1){
        layer.msg("只能选择一行");
        return ;
    }
    if(type()){
        ol = layui.layer.open({
            title:'<img src="'+returnUrl('/images/I208_edit.png')+'"><span>字典类型编辑</span>',
            type: 2,
            shadeClose: false,
            shade: 0.6,
            skin:'A106_layer',
            area: ['1000px', '380px'], //宽高
            content: [returnUrl('/dict/editType?id='+getRowFexId("id")), 'yes']
        })
    }else{

        ol = layui.layer.open({
            title:'<img src="'+returnUrl('/images/I208_edit.png')+'"><span>字典编辑</span>',
            type: 2,
            shadeClose: false,
            shade: 0.6,
            skin:'A106_layer',
            area: ['1000px', '380px'], //宽高
            content: [returnUrl('/dict/edit?id='+getRowFexId("id")), 'yes']
        })
    }
}

function view(){
    if(getRowCount() != 1){
        layer.msg("只能选择一行");
    }else{

        ol = layui.layer.open({
            title:'<img src="'+returnUrl('/images/I208_edit.png')+'"><span>字典编辑</span>',
            type: 2,
            shadeClose: false,
            shade: 0.6,
            skin:'A106_layer',
            area: ['1000px', '380px'], //宽高
            content: [returnUrl('/dict/view/'+getRowFexId("id")), 'yes']
        })
    }
}

function layerclose(){
    layui.layer.close(ol);
    $("#form").submit();
}
function closeLayer(){
    layui.layer.close(ol);
}

function type(){
    var checkStatus = table.checkStatus('tables')
        ,data = checkStatus.data,arr = new Array();;
    for(var i = 0;i<data.length;i++){
        return data[i]["parentName"] == "类型";
    }
    return false;
}
function getRowFexId(value){
    var checkStatus = table.checkStatus('tables')
        ,data = checkStatus.data,arr = new Array();;
    for(var i = 0;i<data.length;i++){
        arr.push(data[i][value]);
    }
    return arr.join(",");
}

function getRowCount(){
    var checkStatus = table.checkStatus('tables')
        ,data = checkStatus.data,arr = new Array();;
    return data.length;
}
var table = null;
layui.use('table',function () {
    table = layui.table ;
    table.init('demo', {
        limit: 15
    });
    $(".I106_contentLeft").height($(".I106_contentRight").height());
});

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
                pIdKey: "parentCode",
                idKey:"code"
            }
        },
        callback: {
            beforeDrag: beforeDrag,
            onClick:queryByType
        }
    };

    var zNodes = JSON.parse($("#dictTypes").val());
    var parentCode = $("#parentCode").val();


    function beforeDrag(treeId, treeNodes) {
        return false;
    }

    function selNode(code) {
        treeObj = $.fn.zTree.getZTreeObj("treeDemo");
        node = treeObj.getNodeByParam("code",code);
        treeObj.cancelSelectedNode();
        treeObj.selectNode(node, true);
        treeObj.expandNode(node, true, false);
    }

    $.fn.zTree.init($("#treeDemo"), setting, zNodes);
    selNode(parentCode == "" ? "-1" : parentCode);

});
