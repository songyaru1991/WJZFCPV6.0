function addCaseSubmit() {
    var data = {title:"input NotNull",grade:"input NotNull",caseFile:"fileinput NotNull"};
    var flag = V_CHECK(data);
    if(flag){
        var formData = new FormData( $("#addCaseForm")[0]);
        $.ajax({
            type:"POST",
            url:getContextPath()+'/case/save',
            dataType:"json",
            data:formData,
            cache:false,
            processData:false,
            success:function (result) {
                if(data.code='SUCCESS'){
                    layer.alert('新增案例成功',function () {
                        parent.window.closelayui();
                    })
                }else{
                    layer.alert(data.msg);
                }
            },
            contentType:false
        });
    }
}

function editCaseSubmit() {
    var data = {title:"input NotNull",grade:"input NotNull"};
    var flag = V_CHECK(data);
    var formData = new FormData( $("#editCaseForm")[0]);
    if(flag){
        $.ajax({
            type:"POST",
            url:getContextPath()+'/case/update',
            dataType:"json",
            data:formData,
            cache:false,
            processData:false,
            success:function (result) {
                if(data.code='SUCCESS'){
                    layer.alert('编辑案例成功',function () {
                        parent.window.closelayui();
                    })
                }else{
                    layer.alert(data.msg);
                }
            },
            contentType:false
        });
    }
}
function addCommentSubmit() {
    var data = {detail:"input NotNull"};
    var caseId = $("#caseId").val();
    var commentType = $("#commentType").val();
    var detail = $("#detail").val();
    var url = $("#url").val();
    var flag = V_CHECK(data);
    if(flag){
        $.ajax({
            type:'post',
            data:"caseId="+caseId+"&commentType="+commentType+"&detail="+detail+"&url="+url,
            url: getContextPath()+'/case/addComment',
            cache:false,
            dataType:'json',
            success:function (data) {
                if(data.code=='SUCCESS'){
                    layer.alert('评论成功',function () {
                        location.href =getContextPath()+"/case/view?caseId="+caseId;
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
    var caseId = $("#caseId").val();
    var likeType = $("#commentType").val();
    var url = $("#url").val();
    var subUrl = $("#baseURL").val()+"/case/like?caseId="+caseId+"&likeType="+likeType+"&url="+url;
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
                        location.href =getContextPath()+"/case/view?caseId="+caseId;
                    })
                }
            }
        })
    }
}

function chooseFile() {
    $("#caseFile").click();
}
function fileChange(obj) {
    $("#fileName").val(obj.files[0].name);
}

function download(filesUrl){
    var a = document.createElement('a');
    a.download = filesUrl.substr(filesUrl.lastIndexOf("/")+1);
    a.href = getContextPath()+filesUrl;
    $("body").append(a); //修复firefox中无法触发click
    a.click();
    $(a).remove();

}

$(function(){
    layui.use(['rate'], function() {
        var rate = layui.rate;
        var grade = $("#grade").val();
        rate.render({
            elem: '#gradeDiv'
            ,value: grade
            ,text: true
            ,setText: function(value){ //自定义文本的回调
                this.span.text( value + "星");
                $("#grade").val(value)
            }
        })
    });
});