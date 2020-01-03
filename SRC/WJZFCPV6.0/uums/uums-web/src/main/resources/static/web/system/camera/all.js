

function editCameraSubmit() {
    var data = {name:"input NotNull",deviceType:"select NotNull"
        ,videoPlatform:"select NotNull",longitude:"input NotNull"
        ,latitude:"input NotNull",snapType:"select NotNull"
        ,url:"input NotNull",nationalStandardId:"input NotNull"
        ,cameraIp:"input NotNull"};
    var flag = V_CHECK(data);
    if(flag){
        $.ajax({
            type:'post',
            data:$('#editCameraForm').serialize(),
            url: getContextPath()+'/camera/update',
            cache:false,
            dataType:'json',
            success:function (data) {
                if(data.code=='SUCCESS'){
                    layer.alert('编辑摄像头成功',function () {
                        parent.window.closelayui();
                    })
                }else{
                    layer.alert(data.msg);
                }
            }
        })
    }
}

function addCameraSubmit() {
    var data = {name:"input NotNull",deviceType:"select NotNull"
        ,videoPlatform:"select NotNull",longitude:"input NotNull"
        ,latitude:"input NotNull",snapType:"select NotNull"
        ,url:"input NotNull",nationalStandardId:"input NotNull"
        ,cameraIp:"input NotNull",gsid:"input IntegerOrNull"};
    var flag = V_CHECK(data);
    if(flag){
        $.ajax({
            type:'post',
            data:$('#addCameraForm').serialize(),
            url:getContextPath()+'/camera/save',
            cache:false,
            dataType:'json',
            success:function (data) {
                if(data.code=='SUCCESS'){
                    layer.alert('添加摄像头成功',function () {
                        parent.window.closelayui();
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

function uploadFile() {

}