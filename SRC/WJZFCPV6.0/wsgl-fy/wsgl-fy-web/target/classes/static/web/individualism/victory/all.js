layui.use(['laydate', 'table'], function () {
    var laydate = layui.laydate;
    table = layui.table;
    laydate.render({
        elem: '#victoryDate'
        , type: 'datetime'
    });

});

function addVictorySubmit() {
    var data = {title:"input NotNull",type:"select NotNull"
        ,victoryPerson:"input Integer",solveCasePerson:"input Integer",victoryDate:"input NotNull"};
    var flag = V_CHECK(data);
    if(flag){
        $.ajax({
            type:'post',
            data:$('#addVictoryForm').serialize(),
            url: getContextPath()+'/victory/save',
            cache:false,
            dataType:'json',
            success:function (data) {
                if(data.code=='SUCCESS'){
                    layer.alert('添加战果成功',function () {
                        parent.window.closelayui();
                    })
                }else{
                    layer.alert(data.msg);
                }
            }
        })
    }
}

function editVictorySubmit(){
    var data = {title:"input NotNull",type:"select NotNull"
        ,victoryPerson:"input Integer",solveCasePerson:"input Integer",victoryDate:"input NotNull"};
    var flag = V_CHECK(data);
    if(flag){
        $.ajax({
            type:'post',
            data:$('#editVictoryForm').serialize(),
            url: getContextPath()+'/victory/update',
            cache:false,
            dataType:'json',
            success:function (data) {
                if(data.code=='SUCCESS'){
                    layer.alert('编辑战果成功',function () {
                        parent.window.closelayui();
                    })
                }else{
                    layer.alert(data.msg);
                }
            }
        })
    }
}


function addCommentSubmit() {
    var data = {detail:"input NotNull"};
    var victoryId = $("#victoryId").val();
    var flag = V_CHECK(data);
    if(flag){
        $.ajax({
            type:'post',
            data:$('#addCommentForm').serialize(),
            url: getContextPath()+'/victory/addComment',
            cache:false,
            dataType:'json',
            success:function (data) {
                if(data.code=='SUCCESS'){
                    layer.alert('评论成功',function () {
                        location.href =getContextPath()+"/victory/view?victoryId="+victoryId;
                    })
                }else{
                    layer.alert(data.msg);
                }
            }
        })
    }
}

//返回
function abandon() {
    var index = parent.layer.getFrameIndex(window.name);
    parent.layer.close(index);
}

function likeSubmit() {
    var val = $("#likeDiv").html();
    var victoryId = $("#victoryId").val();
    var likeType = $("#commentType").val();
    var url = $("#url").val();
    var subUrl = $("#baseURL").val()+"/victory/like?victoryId="+victoryId+"&likeType="+likeType+"&url="+url;
    if(val=="赞"){
        $.ajax({
            type:'POST',
            data:null,
            url:subUrl,
            cache:false,
            dataType:'json',
            success:function (data) {
                if(data.code=="SUCCESS"){
                    layer.alert('点赞成功',function () {
                        location.href =getContextPath()+"/victory/view?victoryId="+victoryId;
                    })
                }
            }
        })
    }
}


