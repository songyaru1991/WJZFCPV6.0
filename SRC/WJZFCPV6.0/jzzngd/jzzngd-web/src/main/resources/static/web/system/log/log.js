layui.use(['form', 'table', 'laydate'], function () {
    var form = layui.form
        , layer = layui.layer
        , laydate = layui.laydate;

    //同时绑定多个
    lay('.date-item').each(function(){
        laydate.render({
            elem: this
            ,type: 'datetime'
            ,trigger: 'click'
        });
    });
    form.render();
});

var customer = {
    index: null,
    returnURL: function (url) {
        return /*[[@{*/url/*}]]*/;
    },
    targer_url: function (url) {
        location.href = customer.returnURL(url);
    },

    submit: function () {
        $("#form").submit();
    }


};