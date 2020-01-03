$(document).ready(function () {
    var contextPath = getContextPath();
 //   var files = '';
    $("#fileUpload").on("change", function () {
       // file = this.files;
        var file = $("#fileUpload").val();
        if (file == "") {
            alert("请选择要上传的文件");
            return false;
        } else {
            //检验文件类型是否正确
            //获得上传文件名
            var fileArr=file.split("\\");
            var fileTArr=fileArr[fileArr.length-1].toLowerCase().split(".");
            var filetype=fileTArr[fileTArr.length-1];
            if (filetype != "xml" && filetype != "zip") {
                layer.alert("文件格式不对，请上传xml/zip文件!");
                return false;
            }
        }
        return true;
    });


    //验证的 格式的  函数
    function validateImg(file) {
        var reg = /\.(xml|zip)$/ig;
        var sizeMB = file.size / (1024 * 1024);
        // 验证文件是否是xml|zip
        if (!reg.test(file.name)) {
            layer.alert('请选择xml/zip文件上传');
            return false;
        }

        /* if (sizeMB > 10) {
             layer.alert('请选择10M以下的图片');
             return false;
         }*/
        return true;
    }
    //上传导入的xml文件
    saveImportKsry= function () {
        var formData =new FormData(document.getElementById("form"));
        $.ajax({
            url: contextPath + "/Ksry/saveImportKsry",
            type: "POST",
            data :formData,
            cache: false,
            async: false,
            contentType : false,//必须false才会自动加上正确的Content-Type
            processData : false,//必须false才会避开jQuery对 formdata 的默认处理.XMLHttpRequest会对 formdata 进行正确的处理.
            dataType: "json",
            success: function (result) {
                if (result.code == 200) {
                    layer.alert(result.message, function (index) {
                        layer.close(layer.index);
                        $("#fileUpload").val("");
                        parent.parent.$('.H105_iframeright').attr('src', contextPath + result.nextUrl);
                    });

                } else {
                    layer.alert(result.message);
                    return;
                }
            },
            error: function () {
                alert("error");
                $('.src_iframeleft').attr('src', result.nextUrl);
            }
        })
        return false;
    }



})



