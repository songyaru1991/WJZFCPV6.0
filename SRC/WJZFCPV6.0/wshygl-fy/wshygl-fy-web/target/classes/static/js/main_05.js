$(function () {

    function resize1 () {
        var windowHeight = document.body.clientHeight;
        var windowWidth = document.body.clientWidth;

        // $(".jq_iframeleft" ).height(windowHeight - $('.jq_iframeTOP').height())
        $('.jq_iframeleft').height(windowHeight - $('.H105_top').height());
        $('.A105_directory').height($('.A105L_body').height() - 173);

    }

    resize1();
    $(window).bind('resize', resize1);

    //左侧菜单栏点击切换
    $('.I106_navItem').click(function () {
        $('.I106_navItem').removeClass('I106_navItemCurrent');
        $(this).addClass('I106_navItemCurrent');
        $(this).parent().siblings().find('.I106_arrow').removeClass('I106_arrowCurrent');
        $(this).find('.I106_arrow').addClass('I106_arrowCurrent');
        $(this).parent().siblings().find('.I106_subNavList').slideUp();
        if ($(this).siblings('.I106_subNavList').length !== 0) {
            $('.I106_navItem').removeClass('I106_subNavItemCurrent');
            $(this).siblings('.I106_subNavList').slideDown();
        } else {
            $('.I106_subNavItem ').removeClass('I106_subNavItemCurrent');
            $(this).addClass('I106_subNavItemCurrent');
        }
    });

    $('.I106_subNavItem').click(function () {
        $('.I106_subNavItem').removeClass('I106_subNavItemCurrent');
        $(this).addClass('I106_subNavItemCurrent');
    });

    //点击收起表格
    $('.E105_arrowup').click(function () {
        $(this).toggleClass('E105_arrowdown');
        $(this).parent().parent().find('.E105_tableFloor').slideToggle();
    });

//点击收起表格
    $('.C105_arrowDown').click(function () {
        $(this).toggleClass('C105_arrowUp');
        $(this).parent().parent().find('.C105_transfer').slideToggle();
    });

    // jquery  点击切换背景色*/
    $('.E105_check').click(function () {
        $(this).addClass('E105_checkClick').siblings().removeClass('E105_checkClick');
    });

    //下拉列表点击收起
    $('.A105_IDirectory').click(function () {
        $(this).find('.A105_arrowDown').toggleClass('C105_arrowUp');
        $(this).parent().find('.A105_directory').slideToggle();
    });

    // jquery  点击显示弹窗*/
    $('.A105P_close,.A105_addBtn,.A105P_zhenju  ').click(function () {
        $('.A105_popupCoat').toggle();
    });

    // jquery  点击切换背景色*/
    $('.A105L_item').click(function () {
        $(this).addClass('A105L_itemChoose').siblings().removeClass('A105L_itemChoose');
    });

    // jquery  点击切换背景色*/
    $('.A105_Intelligence').click(function () {

        $('.A105_body', parent.document).toggleClass('A105_bodyWider');
        $('.A105_catalogue', parent.document).toggleClass('A105_catalogueWider');
        $('.A105L_detailCoat').toggle();

    });

// 2018-4-2
    // jquery  点击切换背景色*/
    $('.H105_handingItem').click(function () {
        $(this).addClass('H105_handingChoose').siblings().removeClass('H105_handingChoose');
    });

    // 点击打开弹窗
    $('.E105_addCoat1').click(function () {
        layui.use('layer', function () {
            layer.open({
                type: 2,
                title: '选择换押人员',
                closeBtn: 1,
                shadeClose: true,
                area: ['450px', '280px'],
                skin: 'E105_popCoat',
                content: './popup/third_edit_popUp.html'
            });
        });
    });
    $('.E105_addCoat1').click();



//选项卡初始化


    //左侧菜单子目录点击事件 所处二级页面
    $('.I106_subNavList>li').click(function () {

        var layContent = $(this).attr('data-content');
        var layHref = $(this).attr('lay-href');
        // 重新加载
        //判断标签是在否已存
        if (layHref) {
            var isData = false;
            $.each(parent.$('.H105_labelCoat .H105_label[lay-href]'), function () {
                if ($(this).attr('lay-href') == layHref) {
                    isData = true;
                }
            });
            // 重新加载
            $('.H105_iframeright').attr('src', layHref);

            if ( parent.$('.H105_labelCoat>.H105_label').length >=2){
                parent.$('.H105_labelCoat>.H105_label:eq(1)').remove();
            }

            if(layContent=="换押人员列表") {
                layHref = '/wshygl-fy/Ksry/navigationBarKsryList';
            }
            if(layContent=="接收换押") {
                layHref = '/wshygl-fy/Jshy/navigationBarJshyList';
            }
            if(layContent=="网上换押") {
                layHref = '/wshygl-fy/Wshy/navigationBarWshyList';
            }
            if(layContent=="历史换押记录") {
                layHref = '/wshygl-fy/Lshyjl/navigationBarLshyjlList';
            }
            if(layContent==("换押信息统计")) {
                layHref = "/wshygl-fy/Hytj/navigationBarHytjList";
            }
            parent.$('.H105_labelCoat>.H105_label:eq(0)').replaceWith(' <div class="H105_label H105_label2 fl" lay-href=' + layHref + ' data-content='+ layContent +'><span>' + layContent + '</span> </div>');

        }

    });

    // 编辑按钮点击事件
    $('.H105_clickEvent').click(function () {
        var layContent = $(this).attr('data-content');
        var layHref = $(this).attr('lay-href');
        // 新建或者替换标签
        addTab(layContent, layHref);
        parent.parent.$('.src_iframeleft').attr('src', layHref);

    });

    viewClickEvent = function (layContent,layHref) {
        // 新建或者替换标签
        addTab(layContent, layHref);
        parent.parent.$('.src_iframeleft').attr('src', layHref);
    }


    //在frame页面中点击 新建或者替换标签
    function parentAddTab (content, url) {
        parent.parent.parent.$('.H105_labelCoat>.H105_label').removeClass('H105_label2');
        // 判断标签个数
        if ( parent.parent.parent.$('.H105_label').length > 1) {
            parent.parent.parent.$('.H105_labelCoat>.H105_label:eq(1)').replaceWith(' <div class="H105_label H105_label2 fl" lay-href=' + url + ' data-content='+ content +'><span>' + content + '</span><img src="/wshygl-fy/static/images/H105_x1.png" alt="" class="H105_close"></div>');
        } else {
            parent.parent.parent.$('.H105_labelCoat').append(' <div class="H105_label H105_label2 fl" lay-href=' + url+' data-content='+ content +'><span>' + content + '</span><img src="/wshygl-fy/static/images/H105_x1.png" alt="" class="H105_close"></div>');
        }
    }


    // 案件详情按钮点击事件
    $('.S105_caseBtn').click(function () {
        <!--查看换押和人员基本信息的查询参数-->
        var searchCondition = $('#searchCondition').val();
        var searchContent = $(" #searchContent").val();
        var pageNo = $(" #pageNo").val();
        <!-- 以下四个参数为换押统计的查询参数-->

        var qsrq = $(" #qsrq").val();
        var jsrq = $(" #jsrq").val();



        var layContent = $(this).attr('data-content');
        var layHref = $(this).attr('lay-href');
             layHref = layHref + '&searchCondition='+searchCondition+'&searchContent='+searchContent+'&pageNo='+pageNo
            +'&qsrq='+qsrq+'&jsrq='+jsrq;
        var layFrom = $(this).attr('data-from');
        // 新建或者替换标签
        addTabFrom(layContent, layHref,layFrom);
        parent.parent.$('.src_iframeleft').attr('src', layHref);
    });

    // 新建或者替换标签
    function addTabFrom (content, url,from) {
        parent.parent.$('.H105_labelCoat>.H105_label').removeClass('H105_label2');
        // 判断标签个数
        if ( parent.parent.$('.H105_label').length > 1) {
            parent.parent.$('.H105_labelCoat>.H105_label:eq(1)').replaceWith(' <div class="H105_label H105_label2 fl" lay-href=' + url + ' data-content='+ content + ' data-from='+ from +'><span>' + content + '</span><img src="/wshygl-fy/static/images/H105_x1.png" alt="" class="H105_close"></div>');
        } else {
            parent.parent.$('.H105_labelCoat').append(' <div class="H105_label H105_label2 fl" lay-href=' + url+' data-content='+ content +' data-from='+ from +'><span>' + content + '</span><img src="/wshygl-fy/static/images/H105_x1.png" alt="" class="H105_close"></div>');
        }
    }


    // jquery  标签点击切换背景色*/ 所处一级页面
    $('.H105_labelCoat').on('click', '.H105_label', function () {

        $(this).addClass('H105_label2').siblings().removeClass('H105_label2');
        var layContent = $(this).attr('data-content');
        var layHref = $(this).attr('lay-href');

        // 重新加载
      if(layContent.indexOf("换押人员列表")!=-1 || layContent.indexOf("换押管理")!=-1) {
          layHref = '/wshygl-fy/Ksry/navigationBarKsryList';
            $('.src_iframeleft').attr('src', layHref);
        }else if(layContent.indexOf("接收换押")!=-1){
          layHref="/wshygl-fy/Jshy/navigationBarJshyList";
          $('.src_iframeleft').attr('src', layHref);
      }else if(layContent.indexOf("网上换押")!=-1){
          layHref="/wshygl-fy/Wshy/navigationBarWshyList";
          $('.src_iframeleft').attr('src', layHref);
      }else if(layContent.indexOf("历史换押记录")!=-1){
          layHref="/wshygl-fy/Lshyjl/navigationBarLshyjlList";
          $('.src_iframeleft').attr('src', layHref);
      }else if(layContent.indexOf("换押信息统计")!=-1){
          layHref="/wshygl-fy/Hytj/navigationBarHytjList";
          $('.src_iframeleft').attr('src', layHref);
      }else if(layContent=="查看" || layContent=="换押" || layContent=="延长换押"|| layContent=="判决" || layContent=="案件详情" || layContent=="修改密码"){
          $('.src_iframeleft').attr('src', layHref);
      }
      else{
          $(".src_iframeleft").contents().find(".H105_iframeright").attr('src', layHref);    //父页面获取子页面元素

        }
        //$('.src_iframeleft').attr('src', layHref);
    });

    // 新建或者替换标签
    function addTab (content, url) {
        parent.parent.$('.H105_labelCoat>.H105_label').removeClass('H105_label2');
        // 判断标签个数
        if ( parent.parent.$('.H105_label').length > 1) {
            parent.parent.$('.H105_labelCoat>.H105_label:eq(1)').replaceWith(' <div class="H105_label H105_label2 fl" lay-href=' + url + ' data-content='+ content +'><span>' + content + '</span><img src="/wshygl-fy/static/images/H105_x1.png" alt="" class="H105_close"></div>');
        } else {
            parent.parent.$('.H105_labelCoat').append(' <div class="H105_label H105_label2 fl" lay-href=' + url+' data-content='+ content +'><span>' + content + '</span><img src="/wshygl-fy/static/images/H105_x1.png" alt="" class="H105_close"></div>');
        }
    }

    // 删除标签*/ 所处页面一级
    $('.H105_labelCoat').on('click', '.H105_close', function (event) {

        <!--查看换押和人员基本信息的查询参数-->
        var searchCondition = $('#searchCondition').val();
        var searchContent = $(" #searchContent").val();
        var pageNo = $(" #pageNo").val();

        <!-- 以下四个参数为换押统计的查询参数-->
        var qsrq = $(" #qsrq").val();
        var jsrq = $(" #jsrq").val();

        event.stopPropagation();
        var layContent = $(this).attr('data-content');
        var layHref = $(this).attr('lay-href');
        layHref = layHref + '?searchCondition='+searchCondition+'&searchContent='+searchContent+'&pageNo='+pageNo
           +'&qsrq='+qsrq+'&jsrq='+jsrq;

        // 在详情页时点击删除
        if ($('.H105_label2').index() == 2) {
            layHref= $('.H105_labelCoat>.H105_label:eq(0)').attr('lay-href');
            // 重新加载
            $('.src_iframeleft').attr('src', layHref);

        }
        $(this).parent().remove();
        $('.H105_labelCoat>.H105_label:eq(0)').addClass('H105_label2');
    });

    // 取消*******删除标签*/
    $('.jq_E105_cannel').on('click', function (event) {
        var searchCondition = $('#searchCondition').val();
        var searchContent = $(" #searchContent").val();
        var pageNo = $(" #pageNo").val();
            layui.layer.confirm('确定跳转到新页面吗，未保存信息会丢失！', {
                btn: ['确定', '取消'] //按钮
            }, function () {
                // 阻止冒泡
                event.stopPropagation();
                // 在详情页时点击删除
                var layHref = parent.$('.H105_labelCoat>.H105_label:eq(0)').attr('lay-href')
                layHref=layHref + '?searchCondition='+searchCondition+'&searchContent='+searchContent+'&pageNo='+pageNo;
                // 重新加载
                parent.$('.src_iframeleft').attr('src', layHref);
                parent.$('.H105_labelCoat>.H105_label:eq(1)').remove();
                parent.$('.H105_labelCoat>.H105_label:eq(0)').addClass('H105_label2');
            }, function () {
            });
    });

    // 返回*******删除一级标签,不做修改保存的提示*/
    $('.jq_E105_cannel3').on('click', function (event) {
        <!--查看换押和人员基本信息的查询参数-->
        var searchCondition = $('#searchCondition').val();
        var searchContent = $(" #searchContent").val();
        var pageNo = $(" #pageNo").val();

        // 阻止冒泡
        event.stopPropagation();
        // 在详情页时点击删除
        var layHref = parent.$('.H105_labelCoat>.H105_label:eq(0)').attr('lay-href')
        layHref=layHref + '?searchCondition='+searchCondition+'&searchContent='+searchContent+'&pageNo='+pageNo;
        // 重新加载
        parent.$('.src_iframeleft').attr('src', layHref);
        parent.$('.H105_labelCoat>.H105_label:eq(1)').remove();
        parent.$('.H105_labelCoat>.H105_label:eq(0)').addClass('H105_label2');
    });

    // 返回*******删除一级标签*/
    $('.jq_E105_cannel2').on('click', function (event) {
        <!--查看换押和人员基本信息的查询参数-->
        var searchCondition = $('#searchCondition').val();
        var searchContent = $("#searchContent").val();
        var pageNo = $("#pageNo").val();

        <!-- 以下参数为换押统计的查询参数-->

        var qsrq = $(" #qsrq").val();
        var jsrq = $(" #jsrq").val();

        // 阻止冒泡
        event.stopPropagation();

        var layHref =   parent.parent.$('.H105_labelCoat>.H105_label:eq(0)').attr('lay-href');
        layHref = layHref + '?searchCondition='+searchCondition+'&searchContent='+searchContent+'&pageNo='+pageNo
                             +'&qsrq='+qsrq+'&jsrq='+jsrq;
        // 重新加载
        parent.parent.$('.src_iframeleft').attr('src', layHref);
        parent.parent.$('.H105_labelCoat>.H105_label:eq(1)').remove();
        parent.parent.$('.H105_labelCoat>.H105_label:eq(0)').addClass('H105_label2');
    });

    // 取消*******不删除标签 加载二级页面*/
    $('.jq_E105_cannel1').on('click', function (event) {
        <!--查看换押和人员基本信息的查询参数-->
        var searchCondition = $('#searchCondition').val();
        var searchContent = $(" #searchContent").val();
        var pageNo = $(" #pageNo").val();

        <!-- 以下参数为换押统计的查询参数-->
        var qsrq = $(" #qsrq").val();
        var jsrq = $(" #jsrq").val();
        var layFrom=  parent. parent.$('.H105_labelCoat>.H105_label:eq(1)').attr('data-from');
        var layContent = $(this).attr('lay-Content');
        var layHref = $(this).attr('lay-Href');

        layHref = layHref + '&searchCondition='+searchCondition+'&searchContent='+searchContent+'&pageNo='+pageNo
            +'&qsrq='+qsrq+'&jsrq='+jsrq;
        // 阻止冒泡
        event.stopPropagation();

        // 重新加载
        parent.$('.src_iframeleft').attr('src', layHref);
        // 新建或者替换标签
        addTab(layContent, layHref);
    });

    //  编辑跳到新增 所处三级页面
    $('.jq_suspect').click(function () {
        var layContent = $(this).attr('data-content');
        var layHref = $(this).attr('lay-href');
        // 替换标签
        addTab(layContent, layHref);

        parent.parent.$('.src_iframeleft').attr('src', layHref);

    });


    document.body.onclick=function(e){
//用户触发click事件就可以关闭了，因为绑定在window上，按事件冒泡处理，不会影响菜单的功能
        if (document.querySelector('.A105_rightMenu')){
            document.querySelector('.A105_rightMenu').style.display='none';
        }
    }

    $('.jq_E105_cannel4').on('click', function (event) {

        // 阻止冒泡
        event.stopPropagation();
        // 在详情页时点击删除
        var layHref = parent.$('.H105_labelCoat>.H105_label:eq(0)').attr('lay-href');
        // 重新加载
        parent.$('.src_iframeleft').attr('src', layHref);
        parent.$('.H105_labelCoat>.H105_label:eq(1)').remove();
        parent.$('.H105_labelCoat>.H105_label:eq(0)').addClass('H105_label2');
    });

    // jquery  点击切换背景色*/
    $('.A205_listBtn>p').click(function () {
        $(this).addClass('A205_btnEmphasis').siblings().removeClass('A205_btnEmphasis');
    });

});



















