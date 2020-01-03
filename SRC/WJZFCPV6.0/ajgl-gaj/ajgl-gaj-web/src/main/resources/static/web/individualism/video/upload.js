var contextPath = getContextPath();
var customer = {
    index: null,
    cancel: function () {
        index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
        parent.layer.close(index); //再执行关闭
    },
    add: function () {
        var data = {
            title: "input NotNull",
            content: "input NotNull"
        };

        var flag = V_CHECK(data);
        if (flag) {
            var index1 = layer.load(1, {
                shade: [0.1, '#fff'] //0.1透明度的白色背景
            });

            $.post(contextPath + "/feedback/insert", $("form").serialize(), function (resp) {
                layer.close(index1);
                if (resp) {
                    layer.alert("添加成功", function () {
                        window.parent.parent.location.reload();//刷新父页面
                        index = parent.parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
                        parent.layer.close(index); //再执行关闭
                    });
                } else {
                    layer.alert("添加失败");
                }
            });
        }
    }
};

layui.use('upload', function () {
    var $ = layui.jquery
        , upload = layui.upload;
    //多文件列表示例
    var demoListView = $('#demoList')  //文件列表显示的元素
        , uploadListIns = upload.render({
        elem: '#testList'  //触发选择文件弹出的按钮
        , url: contextPath + '/individualism/files/upload'
        , accept: 'video'   //后台接收的文件参数名
        , multiple: true   //是否可以上传多个文件
        , auto: false    //是否自动上传，一般是选false和bindAction配合使用
        , bindAction: '#testListAction1'   //触发上传文件的按钮
        , number: 0   //限制上传的个数，0为不限制
        , size: 500000
        , before: function (obj) { //obj参数包含的信息，跟 choose回调完全一致。其中输入向后台传输的参数
            this.data = {
                'videoId': videoId
            };
        }
        , choose: function (obj) {
            var files = this.files = obj.pushFile(); //将每次选择的文件追加到文件队列
            //读取本地文件
            obj.preview(function (index, file, result) {
                var tr = $(['<tr id="upload-' + index + '">'
                    , '<td>' + file.name + '</td>'
                    , '<td>' + (file.size / 1014).toFixed(1) + 'kb</td>'
                    , '<td>等待上传</td>'
                    , '<td>'
                    , '<button class="layui-btn layui-btn-mini demo-reload layui-hide">重传</button>'
                    , '<button class="layui-btn layui-btn-mini layui-btn-danger demo-delete">删除</button>'
                    , '</td>'
                    , '</tr>'].join(''));

                //单个重传
                tr.find('.demo-reload').on('click', function () {
                    obj.upload(index, file);
                });

                //删除
                tr.find('.demo-delete').on('click', function () {
                    delete files[index]; //删除对应的文件
                    tr.remove();
                    uploadListIns.config.elem.next()[0].value = ''; //清空 input file 值，以免删除后出现同名文件不可选
                });
                demoListView.append(tr);
            });
        }
        , done: function (res, index, upload) {  //每个文件上传完成后的回调
            if (res) { //上传成功
                var tr = demoListView.find('tr#upload-' + index)
                    , tds = tr.children();
                tds.eq(2).html('<span style="color: #5FB878;">上传成功</span>');
                tds.eq(3).html(''); //清空操作
                return delete this.files[index]; //删除文件队列已经上传成功的文件

            } else {
                layer.alert("上传失败");
            }
        },
        allDone: function (res, index, upload) {  //所有文件上传完成后的回调
            layer.alert("上传成功", function () {
                window.parent.parent.location.reload();//刷新父页面
                index = parent.parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
                parent.layer.close(index); //再执行关闭
            })
            /*this.error(index, upload);*/
        }
        , error: function (index, upload) {
            var tr = demoListView.find('tr#upload-' + index)
                , tds = tr.children();
            tds.eq(2).html('<span style="color: #FF5722;">上传失败</span>');
            tds.eq(3).find('.demo-reload').removeClass('layui-hide'); //显示重传
        }
    });
});

function saveActivity() {
    var data = {
        title: "input NotNull"
    };

    var flag = V_CHECK(data);
    if (flag) {
        var index1 = layer.load(1, {
            shade: [0.1, '#fff'] //0.1透明度的白色背景
        });

        var title = $("#title").val();
        $.ajax({
            url: contextPath + "/individualism/video",
            type: 'POST',
            data: {title:title},
            dataType:"json",
            // 告诉jQuery不要去处理发送的数据
            // processData: false,
            // 告诉jQuery不要去设置Content-Type请求头
            // contentType: false,
            async: true,
            success: function (ret) {
                //alert("上传成功")
                videoId = ret;
                $("#testListAction1").trigger("click");  //触发上传文件
            },
            error:function (resp) {
                layer.alert(resp);
            }
        });

    }
}
