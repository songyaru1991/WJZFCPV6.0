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
    $('.I106_subNavItem').parent().removeClass('I106_subNavItemCurrent');
    $(this).parent().addClass('I106_subNavItemCurrent');
  });

  //点击收起表格
  $('.E105_arrowup').click(function () {
    $(this).toggleClass('E105_arrowdown');
    $(this).parent().parent().find('.E105_tableFloor').slideToggle();
      $(this).parent().parent().find('.E105_tableFloor3').slideToggle();
  });

//点击收起表格
  $('.C105_arrowDown').click(function () {
    $(this).toggleClass('C105_arrowUp');
    $(this).parent().parent().find('.C105_transfer').slideToggle();
  });

  // jquery  点击切换背景色*/
  $('.E105_check').click(function () {
  //  $(this).addClass('E105_checkClick').siblings().removeClass('E105_checkClick');
      window.parent.parent.active1($(this))
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
  $('.A105L_neirong').on('click', '.A105L_item', function (event) {
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
  
 		if(layHref=="./property_second.html"||layHref.indexOf('main')>0)
      {
    // 重新加载
    //判断标签是在否已存
    if (layHref) {
      var isData = false;
      $.each(parent.$('.H105_labelCoat .H105_label[lay-id]'), function () {
        if ($(this).attr('lay-id') == layHref) {
          isData = true;
        }
      });
      // 重新加载
      console.log('重新加载' + layHref);
      parent.$('.H405_iframe').attr('src', layHref);
        
	      	if ( parent.$('.H105_labelCoat>.H105_label').length >=2){
	        parent.$('.H105_labelCoat>.H105_label:eq(1)').remove();
	      	}
	      	parent.$('.H105_labelCoat>.H105_label:eq(0)').replaceWith(' <div class="H105_label H105_label2 fl" lay-id=' + layHref + '><span>' + layContent + '</span> </div>');
      }
    }
      else{
				$('#frm').attr('src', layHref);

				//	parent.$('.H105_labelCoat>.H105_label:eq(0)').replaceWith(' <div class="H105_label H105_label2 fl" lay-id=' + layHref + '><span>' + layContent + '</span> </div>');
			}
  });


  // // 添加标签 所处三级页面
  $('.H105_clickEvent').click(function () {
    var layContent = $(this).attr('data-content');
    var layHref = $(this).attr('lay-href');
    // 新建或者替换标签
    addTab(layContent, layHref);
    console.log('重新加载' + layHref);
    parent.parent.$('.src_iframeleft').attr('src', layHref);

  });

  ;
  // jquery  标签点击切换背景色*/ 所处一级页面
  $('.H105_labelCoat').on('click', '.H105_label', function () {
    $(this).addClass('H105_label2').siblings().removeClass('H105_label2');
    var layContent = $(this).attr('data-content');
    var layHref = $(this).attr('lay-id');
    // 重新加载
    console.log('重新加载' + layHref);
    $('.src_iframeleft').attr('src', layHref);
  });

      // 新建或者替换标签

  function addTab (content, url) {
    parent.parent.$('.H105_labelCoat>.H105_label').removeClass('H105_label2');
    // 判断标签个数
    if ( parent.parent.$('.H105_label').length > 1) {
      parent.parent.$('.H105_labelCoat>.H105_label:eq(1)').replaceWith(' <div class="H105_label H105_label2 fl" lay-id=' + url + '><span>' + content + '</span><img src="../images/H105_x1.png" alt="" class="H105_close"></div>');
    } else {
      parent.parent.$('.H105_labelCoat').append(' <div class="H105_label H105_label2 fl" lay-id=' + url + '><span>' + content + '</span><img src="../images/H105_x1.png" alt="" class="H105_close"></div>');
    }
  }

  // 删除标签*/ 所处页面一级
  $('.H105_labelCoat').on('click', '.H105_close', function (event) {
    event.stopPropagation();
    var layContent = $(this).attr('data-content');
    var layHref = $(this).attr('lay-id');
    // 在详情页时点击删除
    if ($('.H105_label2').index() == 2) {
      layHref= $('.H105_labelCoat>.H105_label:eq(0)').attr('lay-id')
      // 重新加载
      console.log('重新加载' + layHref);
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


    console.log('重新加载' + layHref);
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

// jquery  点击切换背景色*/
  $('.S105_backlog>p').click(function () {
    $(this).addClass('S105_backlogSelect').siblings().removeClass('S105_backlogSelect');
  });



  layui.use('element', function () {
    var $ = layui.jquery
      , element = layui.element ; //Tab的切换功能，切换事件监听等，需要依赖element模块

      $('body').on('click', '.site-demo-active1', function(){
        window.parent.parent.active1($(this))
      });
      $('body').on('click', '.site-demo-active2', function(){
          window.parent.parent.$('.layui_H105_title .layui-this').attr('lay-id')
          $(this).data('url',window.parent.parent.$('.layui_H105_title .layui-this').attr('lay-id'));
         // console.log($(this).data('url'))
          window.parent.parent.active1($(this));
      });
  });
  
  
  
  
  
 

});


function setStyleMenu()
{
	$('.I106_navItem').removeClass('I106_navItemCurrent');
	 $(".I106_navItem").eq(3).addClass('I106_navItemCurrent');    	 
    $("#wangluo1").parent().siblings().find('.I106_arrow').removeClass('I106_arrowCurrent');
    $("#wangluo1").find('.I106_arrow').addClass('I106_arrowCurrent');
    $("#wangluo1").parent().siblings().find('.I106_subNavList').slideUp();
    if ($("#wangluo1").siblings('.I106_subNavList').length !== 0) {
      $('.I106_navItem').removeClass('I106_subNavItemCurrent');
      $("#wangluo1").siblings('.I106_subNavList').slideDown();
     
    } else {
      $('.I106_subNavItem ').removeClass('I106_subNavItemCurrent');
      $("#wangluo1").addClass('I106_subNavItemCurrent');
    }
    $('.I106_subNavItem').parent().removeClass('I106_subNavItemCurrent');
    $("#wangluo2").parent().addClass('I106_subNavItemCurrent');
}

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

function active1(othis) {

  var type = othis.data('type');
  var $ = layui.jquery
    , element = layui.element ; //Tab的切换功能，切换事件监听等，需要依赖element模块
  // console.log('H105_page1',$('.H105_page1').height())
  layui.use('element', function () {
    //触发事件
    var active = {
      urls : [],
      // 创建iframe
      content : function(othis) {
        var iframe = document.createElement("iframe");
        iframe.setAttribute("frameborder", "0");

        iframe.setAttribute("src", othis.data('url'));

        iframe.classList.add("H405_iframe");
        iframe.id=("H405_iframe",othis.data('id')||'')
        return iframe.outerHTML;
      },
      // 新增iframe
      tabAdd: function(othis){
        //新增一个Tab项
        element.tabAdd('demo', {
          title: othis.data('name')
          ,content:  this.content(othis ),
          id :othis.data('url')
          // ,id:othis.data('id')//实际使用一般是规定好的id，这里以时间戳模拟下
        })
        element.tabChange('demo', othis.data('url'))
      }
      , tabDelete: function (othis) {
        //删除指定Tab项-根据路径
        element.tabDelete('demo', othis.data('url')); //删除：“商品管理”
        othis.addClass('layui-btn-disabled');
      }
      , tabChange: function (layHref) {
        //切换到指定Tab项
        element.tabChange('demo', layHref); //切换到：用户管理
      }
    };

    // 判断是否删除
    if(type == 'tabDelete'){
      active[type] ? active[type](othis) : '';
    }else {
      //判断标签是在否已存
      var layHref=othis.data('url')
      if (layHref) {
        var isData = false;
        $.each(parent.$('.layui_H105_title>li[lay-id]'), function () {
          // console.log($(this).attr('lay-id'))
          if ($(this).attr('lay-id') == layHref) {
            isData = true;
          }
        })
      // 判断是否存在,有就切换,无就不存在
        if(isData){
         // console.log(layHref)
          active.tabChange(layHref)
        }else {
          active[type] ? active[type](othis) : '';
        }
      };
    }




    // 事件过滤器lay-filter 绑定为demo
    // 监听切换
    element.on('tab(demo)', function(data){
      // console.log(data);
    });

  })
}

















