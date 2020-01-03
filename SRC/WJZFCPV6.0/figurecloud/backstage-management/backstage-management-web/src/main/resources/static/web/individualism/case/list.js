function getRowFexId(value){
    var checkStatus = table.checkStatus('tables')
        ,data = checkStatus.data,arr = new Array();;
    for(var i = 0;i<data.length;i++){
        arr.push(data[i][value]);
    }
    return arr.join(",");
}

function closelayui(){
    $("#form").submit();
}

function view() {
    var id = getRowFexId("id").split(",");
    if(id[0]==''){
        layer.msg("请先选择一条数据！");
        return;
    }
    if(id.length>1){
        layer.msg("只能同时查看一条数据！");
        return;
    }
    if(id.length==1){
        layui.layer.open({
            title:'<img src= "'+getContextPath()+'/images/I208_edit.png" ><span>案例查看</span>',
            type: 2,
            shadeClose: false,
            shade: 0.6,
            skin:'A106_layer',
            area: ['1000px', '380px'], //宽高
            content: [getContextPath()+'/case/view?caseId='+id, 'yes']
        })
    }
}

function add() {
    layui.layer.open({
        title:'<img src= "'+getContextPath()+'/images/I208_edit.png" ><span>案例录入</span>',
        type: 2,
        shadeClose: false,
        shade: 0.6,
        skin:'A106_layer',
        area: ['1000px', '580px'], //宽高
        content: [getContextPath()+'/case/add', 'yes']
    })
}

function edit() {
    var id = getRowFexId("id").split(",");
    if(id[0]==''){
        layer.msg("请先选择一条数据！");
        return;
    }
    if(id.length>1){
        layer.msg("只能同时编辑一条数据！");
        return;
    }
    layui.layer.open({
        title:'<img src= "'+getContextPath()+'/images/I208_edit.png" ><span>案例编辑</span>',
        type: 2,
        shadeClose: false,
        shade: 0.6,
        skin:'A106_layer',
        area: ['1000px', '580px'], //宽高
        content: [getContextPath()+'/case/edit?caseId='+id, 'yes']
    })
}


function del() {
    var ids = getRowFexId("id").split(",");
    if(ids[0]==''){
        layer.msg("请先选择一条数据！");
        return;
    }
    parent.window.layer.confirm('<span>确认删除'+ids.length+'条数据吗？</span>',{title: '<span>删除</span>'},  function (index) {
        $.ajax({
            type: 'post',
            url: getContextPath()+'/case/delete?ids='+ids,
            dataType:'json',
            success: function (data) {
                if(data.code=="SUCCESS"){
                    layer.alert('删除案例成功',function () {
                        window.location.reload();
                    })
                }else{
                    layer.msg('删除失败');
                }
            }
        })

    });

}