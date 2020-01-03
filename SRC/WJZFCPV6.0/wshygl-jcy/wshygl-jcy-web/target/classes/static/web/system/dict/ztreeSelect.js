var setting = {
    view: {
        dblClickExpand: false
    },
    data: {
        simpleData: {
            enable: true,
            pIdKey: "parentCode",
            idKey:"code"
        }
    },
    callback: {
        beforeClick: beforeClick,
        onClick: onClick
    }
};

function selNode(code) {
    var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
    var node = treeObj.getNodeByParam("code",code);
    treeObj.cancelSelectedNode();
    treeObj.selectNode(node, true);
    treeObj.expandNode(node, true, false);
}

function beforeClick(treeId, treeNode) {
    var check = treeNode.parentCode == null;
    if(check){
        layer.alert("请不要选择根节点");
    }
    return !check;
}

function onClick(e, treeId, treeNode) {
    var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
        nodes = zTree.getSelectedNodes(),
        v = "",codev = "";
    var parentCode = $("#parentCode");
    parentCode.attr("value", treeNode.name);
    var hideCode = $("#hidparentCode");
    hideCode.attr("value", treeNode.code);
}

function showMenu() {
    var cityObj = $("#parentCode");
    var cityOffset = $("#parentCode").offset();
    $("#menuContent").css({left:cityOffset.left + "px", top:cityOffset.top + cityObj.outerHeight() + "px"}).slideDown("fast");

    $("body").bind("mousedown", onBodyDown);
}
function hideMenu() {
    $("#menuContent").fadeOut("fast");
    $("body").unbind("mousedown", onBodyDown);
}
function onBodyDown(event) {
    if (!(event.target.id == "parentCode" || event.target.id == "menuContent" || $(event.target).parents("#menuContent").length>0)) {
        hideMenu();
    }
}
$(document).ready(function(){
    var parentCode = parent.node.code;
    var parentName = parent.node.name;
    var zNodes = JSON.parse($("#dictTypes").val());
    $.fn.zTree.init($("#treeDemo"), setting, zNodes);
    var hideCode = $("#hidparentCode").val();
    if(hideCode != ""){
        selNode(hideCode);
    }else{
        if(parentCode != "-1"){
            selNode(parentCode);
            $("#parentCode").val(parentName);
            $("#hidparentCode").val(parentCode);
        }
    }

});
