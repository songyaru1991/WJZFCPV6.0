function save() {
    var data = {name:"input NotNull",parentCode:"select NotNull"
        ,code:"select NotNull"};
    var flag = V_CHECK(data);
    if(flag){
        var index1 = layer.load(1, {
            shade: [0.1, '#fff'] //0.1透明度的白色背景
        });
        $.ajax({
            type:'post',
            data:$('#form').serialize(),
            url:document.getElementById("form").action,
            cache:false,
            dataType:'json',
            success:function (data) {
                layer.close(index1);
                layer.alert(data.message,function () {
                    if(data.code=='200'){
                        parent.window.layerclose();
                    }

                });
            }
        })
    }
}
function saveType() {
    var data = {name:"input NotNull"
        ,code:"select NotNull"};
    var flag = V_CHECK(data);
    if(flag){
        var index1 = layer.load(1, {
            shade: [0.1, '#fff'] //0.1透明度的白色背景
        });
        $.ajax({
            type:'post',
            data:$('#form').serialize(),
            url:document.getElementById("form").action,
            cache:false,
            dataType:'json',
            success:function (data) {
                layer.close(index1);
                layer.alert(data.message,function () {
                    if(data.code=='200'){
                        parent.window.layerclose();
                    }

                });
            }
        })
    }
}

