$(document).ready(function () {
    var contextPath = getContextPath();
    //构建FormData对象,表单上传，根据表单id获取表单数据
    var formData =new FormData(document.getElementById("form"));

    //定义一个数组 把文件数组的值给新数组  对新数组进行操作  然后把新数组传递给后台
    var upLoadFiles = [];
    $(".P105_fileUpLoad").click(function () {
        $("#fileUpload").on("change", function () {
            var files = this.files;
            var length = files.length;
            console.log("选择了" + length + "张图片");
           Array.prototype.push.apply(upLoadFiles, files);
            console.log(upLoadFiles);

            //3、回显
            $.each(files, function (key, value) {
                if (!validateImg(value)) {
                    return;
                }
                var reader = new FileReader();
                if(typeof FileReader==='undefined'){
                    alert("抱歉，你的浏览器不支持 FileReader");
                    $("#fileUpload").setAttribute('disabled','disabled');
                }/*else{
                    $("#fileUpload").addEventListener('change',readFile,false);
                }　　　*/　　//handler
                reader.readAsDataURL(value);
                reader.onload = function (e) {
                    //e.target.result上传的图片转化成base64
                    var imgName=value.name;
                    var imgHTML = '<div class="E205_juanzong"><img src=' + e.target.result + ' class="updateImg E205_juanzongImg">' +
                                   '<img src="/wshygl-jcy/static/images/E205_delete.png" alt="" class="E205_delete"  onclick="javascript:deleteYulanImg(this,escape(\''+imgName+'\'));"></div>';
                    $(".P105_succeed").append(imgHTML);
                };
            })
        })


        //把当前input标签的id属性remove,继续上传时清除上传选中文件
        $("#fileUpload").removeAttr("id");
        var newInput = '<input class="file" type="file" name="file" multiple id="fileUpload">';
       $(".P105_fileUpLoad").append($(newInput));

        $(".P105_choose1").hide();
        $(".P105_start").attr("style", "");
    })

    $(".P105_upload1").click(function () {
        $("#fileUpload").click();
    })

    //验证的 图片的大写和格式的  函数
    function validateImg(file) {
        var reg = /\.(jpg|png|jpeg|gif|png)$/ig;
        var sizeMB = file.size / (1024 * 1024);
        // 验证文件是否是图片
        if (!reg.test(file.name)) {
            layer.alert('请选择jpg,png,jpeg,gif,png文件上传');
            return false;
        }
        // 验证图片大小是否超过5M
        if (sizeMB > 10) {
            layer.alert('请选择10M以下的图片');
            return false;
        }
        return true;
    }


    saveZwxx = function (ajbs){
            var data = {
                ajbh: "input NotNull", zwmc: "input NotNull",
                zwlb: "select NotNull", ajmc: "input NotNull"
            };
            var flag = V_CHECK(data);
            if (!flag) {
                return;
            }
        //上传图片
        for (var i = 0, j = upLoadFiles.length; i < j; ++i)
        {
            formData.append('file', upLoadFiles[i]);
        }
        $.ajax({
                url: contextPath + "/saveAddZwxx",
                type: "POST",
               // data: $("#form").serialize(),
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
                            parent.$('.src_iframeleft').attr('src', result.nextUrl+"?ajbs="+ajbs);
                        });

                    } else {
                        layer.alert(result.message);
                        return;
                    }
                },
                error: function () {
                    alert("error");
                    $('.src_iframeleft').attr('src', result.nextUrl+"?ajbs="+ajbs);
                }
            })
            return false;
        }

        layui.use(['layer'], function () {
            var layer = layui.layer;
        })

    /* 删除 已上传到服务器和在本地预览的图片*/
    deleteUplodImg= function (obj,picname){
        layer.confirm('确定删除吗？', {btn: ['确定', '取消']}, function (index) {
            layer.close(index);
            $.ajax({
                url: contextPath + "/deleteUplodImg",
                type: "post",
                data:{"picname":picname},
                dataType: "json",
                success: function (result) {
                    if (200 == result.code) {
                        picSize=picSize-1;
                        layer.alert(result.message, function () {
                            //window.location.reload();
                            layer.close(layer.index);
                            $(obj).parent().remove();
                        });
                    } else {
                        layer.alert(result.message);
                        return;
                    }
                }
            })
        })
    }

    /* 删除 预览图片*/
    deleteYulanImg= function (obj,imgName){
        //图片名称中含空格时会出现错误，所有进行编码解码
        var imgName=unescape(imgName);
        layer.confirm('确定删除吗？', {btn: ['确定', '取消']}, function (index) {
            layer.close(index);
            console.log(upLoadFiles);
            for(var i = 0; i < upLoadFiles.length; i++) {
                if(upLoadFiles[i].name == imgName) {
                    upLoadFiles.splice(i, 1);
                    break;
                }
            }
            console.log(upLoadFiles);
            $(obj).parent().remove();
        })

    }


})



