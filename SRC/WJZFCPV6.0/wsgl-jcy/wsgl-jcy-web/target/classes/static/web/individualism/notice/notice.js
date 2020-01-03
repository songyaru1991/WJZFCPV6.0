var table = null;

layui.use('table',function () {
    table = layui.table;
    //监听表格复选框选择
    table.on('checkbox(demo)', function(obj){

    });
})

var customer = {
    index: null,
    returnURL: function (url) {
        return /*[[@{*/url/*}]]*/;
    },
    targer_url: function (url) {
        location.href = customer.returnURL(url);
    },
    finishRead: function (id,url) {

        console.info(id)
            $.ajax({
                type: "get",
                url: '/notice/finishRead',
                data:{"id":id},
                dataType: 'json',
                success: function (data) {
                    console.info(data);
                    customer.targer_url(data.nextUrl);
                }
            })
        }
};