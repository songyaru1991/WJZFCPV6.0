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

            if(layContent=="案件管理") {
                layHref = 'navigationBar';
            }
            parent.$('.H105_labelCoat>.H105_label:eq(0)').replaceWith(' <div class="H105_label H105_label2 fl" lay-href=' + layHref + ' data-content='+ layContent +'><span>' + layContent + '</span> </div>');

        }

    });

    // // 添加标签 所处三级页面
    $('.H105_clickEvent').click(function () {
        var layContent = $(this).attr('data-content');
        var layHref = $(this).attr('lay-href');
        // 新建或者替换标签
        addTab(layContent, layHref);
        parent.parent.$('.src_iframeleft').attr('src', layHref);

    });

    ;
    // jquery  标签点击切换背景色*/ 所处一级页面
    $('.H105_labelCoat').on('click', '.H105_label', function () {

        $(this).addClass('H105_label2').siblings().removeClass('H105_label2');
        var layContent = $(this).attr('data-content');
        var layHref = $(this).attr('lay-href');
        // 重新加载
            $('.src_iframeleft').attr('src', layHref);
    });

    // 新建或者替换标签

    function addTab (content, url) {
        parent.parent.$('.H105_labelCoat>.H105_label').removeClass('H105_label2');
        // 判断标签个数
        if ( parent.parent.$('.H105_label').length > 1) {
            parent.parent.$('.H105_labelCoat>.H105_label:eq(1)').replaceWith(' <div class="H105_label H105_label2 fl" lay-href=' + url + ' data-content='+ content +'><span>' + content + '</span><img src="../static/images/H105_x1.png" alt="" class="H105_close"></div>');
        } else {
            parent.parent.$('.H105_labelCoat').append(' <div class="H105_label H105_label2 fl" lay-href=' + url+' data-content='+ content +'><span>' + content + '</span><img src="../static/images/H105_x1.png" alt="" class="H105_close"></div>');
        }
    }

    // 删除标签*/ 所处页面一级
    $('.H105_labelCoat').on('click', '.H105_close', function (event) {
        event.stopPropagation();
        var layContent = $(this).attr('data-content');
        var layHref = $(this).attr('lay-href');
        // 在详情页时点击删除
        if ($('.H105_label2').index() == 2) {
            layHref= $('.H105_labelCoat>.H105_label:eq(0)').attr('lay-href')
            // 重新加载
            $('.src_iframeleft').attr('src', layHref);

        }
        $(this).parent().remove();
        $('.H105_labelCoat>.H105_label:eq(0)').addClass('H105_label2');
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



    // jquery  点击切换背景色*/
    $('.A205_listBtn>p').click(function () {
        $(this).addClass('A205_btnEmphasis').siblings().removeClass('A205_btnEmphasis');
    });

});



















