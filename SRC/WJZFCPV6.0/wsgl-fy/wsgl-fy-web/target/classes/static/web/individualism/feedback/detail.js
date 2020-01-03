var contextPath = getContextPath();
var customer = {
    index: null,
    cancel: function () {
        index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
        parent.layer.close(index); //再执行关闭
    },
    addComment: function () {
        var commentContent = $("#comment").val();
        var relationId = $("#relationId").val();
        $.ajax({
            type: 'post',
            data: {
                content: commentContent,
                relationId: relationId
            },
            url: contextPath + '/feedback/comment',
            cache: false,
            dataType: 'json',
            success: function (resp) {
                if (resp === true) {
                    layer.alert("评论成功");
                    location.href = contextPath + "/feedback/detail/" + relationId;
                } else {
                    layer.alert("评论失败，请联系管理员");
                }
            }
        })
    }
};
