function getRowFexId(value){
    var checkStatus = table.checkStatus('tables')
        ,data = checkStatus.data,arr = new Array();;
    for(var i = 0;i<data.length;i++){
        arr.push(data[i][value]);
    }
    return arr.join(",");
}

function add() {
    layui.layer.open({
        title:'<img src= "'+getContextPath()+'/images/I208_edit.png" ><span>战果录入</span>',
        type: 2,
        shadeClose: false,
        shade: 0.6,
        skin:'A106_layer',
        area: ['1000px', '580px'], //宽高
        content: [getContextPath()+'/victory/add', 'yes']
    })
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
            title:'<img src= "'+getContextPath()+'/images/I208_edit.png" ><span>战果编辑</span>',
            type: 2,
            shadeClose: false,
            shade: 0.6,
            skin:'A106_layer',
            area: ['1000px', '580px'], //宽高
            content: [getContextPath()+'/victory/edit?victoryId='+id, 'yes']
        })
    }
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
            url: getContextPath()+'/victory/del?ids='+ids,
            dataType:'json',
            success: function (data) {
                if(data.code=="SUCCESS"){
                    layer.alert('删除战果成功',function () {
                        location.reload();
                    })

                }else{
                    layer.msg('删除失败');
                }
            }
        })

    });

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
            title:'<img src= "'+getContextPath()+'/images/I208_edit.png" ><span>战果查看</span>',
            type: 2,
            shadeClose: false,
            shade: 0.6,
            skin:'A106_layer',
            area: ['1000px', '580px'], //宽高
            content: [getContextPath()+'/victory/view?victoryId='+id, 'yes']
        })
    }
}

function closelayui(){
    $("#form").submit();
}