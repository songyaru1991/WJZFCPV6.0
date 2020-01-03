$(document).ready(function() {
  // 图表
  //饼状图逆时针渲染
  Highcharts.wrap(Highcharts.seriesTypes.pie.prototype, 'animate',
    function(proceed, init) {
      this.startAngleRad += Math.PI;
      proceed.call(this, init);
    });

  /**
   * 饼状图
   * @param dom 图所在页面元素
   * @param title 标题
   * @param data 数据
   * @param names 分类名称
   * @param pieColors 分类对应颜色
   */
  function pieChart(dom, title, data, names, pieColors) {
    var pieData = [];
    for (var i = 0; i < data.length; i++) {
      var a = {};
      a.name = names[(data.length - i - 1)];
      a.y = data[(data.length - i - 1)];
      a.color = pieColors[(data.length - i - 1)];
      pieData.push(a);
    }
    $(dom).highcharts({
      title: {
        text: title,
      },
      chart: {
        type: 'pie',//图表类型：饼状图
        margin: [80, 5, 20, 5],
        spacing: [0, 0, 0, 0]
      },
      credits: {//版权信息
        enabled: false
      },
      exporting: {//导出模块
        enabled: false
      },
      plotOptions: {//数据列配置
        pie: {
          cursor: 'pointer',
          allowPointSelect: false,//是否能选中
          borderWidth: 0,
          showInLegend: false,//是否在图例中显示
          dataLabels: {//数据标签
            enabled: true,
            distance: 20,
            format: '<span>{point.name}</span>',
            style: {
              'color': '#323133',
              fontSize: 16 + 'px',
              fontWeight: 'normal',
            }
          }
        }
      },
      series: [
        {
          data: [
            {
              y: 100,//所占百分比
              color: '#ffffff'//该类颜色
            }],
          size: '55%',
          dataLabels: {//数据标签
            enabled: false
          },
          enableMouseTracking: false
        }, {
          name: '案件数量',
          data: pieData,
          size: '100%',
          innerSize: '55%',
          startAngle: -20
        }]
    });
  }

  /**
   * 柱状图
   * @param dom 图所在页面元素
   * @param xtitle/ytitle 横纵坐标文字
   * @param villageNames 分类名称
   * @param areaData 数据
   * @param areaColor 设置title/subtitle颜色 方便回调时取出颜色做柱状图渐变
   */
  function areaColumn(dom, xtitle, ytitle, villageNames, areaData, areaColor) {
    $(dom).highcharts({
      chart: {
        type: 'column',
        margin: [60, 50, 80, 50],
        spacing: [0, 0, 0, 0]
      },
      title: {
        text: '',
        style: {
          color: areaColor[0],
        },
      },
      subtitle: {
        text: '',
        style: {
          color: areaColor[1],
        },
      },
      credits: {//版权信息
        enabled: false
      },
      exporting: {//导出模块
        enabled: false
      },
      xAxis: {
        title: {
          text: xtitle,
          align: 'high',
        },
        categories: villageNames,
        crosshair: true,
        lineWidth: 2,
        lineColor: '#80c6e3',
        tickWidth: 0,
      },
      yAxis: {
        title: {
          text: ytitle,
          align: 'high',
        },
        min: 0,
        gridLineWidth: 1,
        gridLineColor: '#cce8f4',
        lineWidth: 2,
        lineColor: '#80c6e3',
        tickAmount: 5,
        endOnTick: false,
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color: #dd5b5b; font-size: 12px">{point.y}件</td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          cursor: 'pointer',
          borderWidth: 0,
          showInLegend: false,//是否在图例中显示
          borderRadius: 5
        }
      },
      series: [
        {
          data: areaData
        }]
    }, function(chart) {
      SetEveryOnePointColor(chart);
    });
  }

  /**
   * 折线图
   * @param dom 图所在页面元素
   * @param title 标题
   * @param sortNames 分类名称
   * @param sortData 数据
   */
  function sortSeries(dom, title, sortNames, sortData) {
    $(dom).highcharts({
      chart: {
        margin: [60, 0, 80, 45],
        spacing: [0, 0, 0, 0]
      },
      title: {
        text: title,
      },
      credits: {//版权信息
        enabled: false
      },
      exporting: {//导出模块
        enabled: false
      },
      xAxis: {
        categories: sortNames,
        crosshair: true,
        lineWidth: 2,
        lineColor: '#81ce89',
        tickWidth: 0,
      },
      yAxis: {
        title: '',
        min: 0,
        gridLineWidth: 1,
        gridLineColor: '#cdecd0',
        lineWidth: 2,
        lineColor: '#81ce89',
        tickAmount: 5,
        endOnTick: false,
        labels: {
          format: '{value:.,0f}'//就这个地方设置显示格式
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color: #dd5b5b; font-size: 12px">{point.y}件</td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        series: {
          cursor: 'pointer',
          borderWidth: 0,
          showInLegend: false,//是否在图例中显示
          borderRadius: 5,
          color: '#81ce89',
          lineWidth: 1,
          marker: {
            // symbol: 'url(../images/circle.png)'
          },
        }
      },
      series: [
        {
          data: sortData,
        }]
    });
  }

  /**
   * 设置每一个数据点的颜色值
   * @param chart 图形文件
   */
  function SetEveryOnePointColor(chart) {
    //获取title颜色
    var color1 = chart.title.styles.color;
    //获取subtitle颜色
    var color2 = chart.subtitle.styles.color;
    //获得第一个序列的所有数据点
    var pointsList = chart.series[0].points;
    //console.log(pointsList);
    //遍历设置每一个数据点颜色
    for (var i = 0; i < pointsList.length; i++) {
      chart.series[0].points[i].update({
        color: {
          linearGradient: {x1: 0, y1: 1, x2: 0, y2: 0}, //横向渐变效果 如果将x2和y2值交换将会变成纵向渐变效果
          stops: [
            [0, color1],
            [1, color2]
          ]
        }
      });
    }
  }

  function resize3() {
    // 同部门案件数量对比 柱状图
    var areaNames = ['芙蓉区', '天心区', '岳麓区', '开福区', '雨花区', '望城区', '浏阳市', '长沙县'];
    var areaData = [2800, 2100, 2150, 1800, 2200, 3547, 1850, 1950];
    var areaColor = ['#7fe7f1', '#2395ff'];
    areaColumn('#container1', '', '数量( 件 )', areaNames, areaData, areaColor);
    //司法救助数量取胜分析 折线图
    var sortNames = ['2012', '2013', '2014', '2015', '2016', '2017', '2018'];
    var sortData = [2600, 1200, 2300, 1800, 3900, 1050, 2100];
    sortSeries('#container2', '', sortNames, sortData);
    //同类型案件对比 饼状图
    var timeData = [140, 105, 116, 285, 160];//数据
    var timeNames = ['政法委', '公安', '法院', '司法', '检察院'];//时间区段
    var timeColors = ['#65e3ca', '#bd4aff', '#faa46a', '#ff4aa8', '#60bff6'];//时间区段在图中的颜色
    pieChart('#container3', '', timeData, timeNames, timeColors);
    // 同类型救助资金额度对比 柱状图
    var typeNames = ['800', '1000', '1500', '2000', '2500', '3000', '3500', '4000'];
    var typeColor = ['#50cafd', '#7169ff'];
    var typeData = [2800, 2100, 2150, 1800, 2200, 3547, 1850, 1950];
    areaColumn('#container4', '金额( 元 )', '数量( 起 )', typeNames, typeData, typeColor);

    // 下拉框选择后  更新图表
    layui.use(['form'], function() {
      var form = layui.form;
      form.on('select()', function(data) {
        if (data.elem.name.match(/case/)) {
          // 同部门案件数量对比 柱状图
          areaNames = ['芙蓉区', '天心区', '岳麓区', '开福区', '雨花区', '望城区', '浏阳市', '长沙县'];
          areaData = [800, 1000, 1150, 1800, 1200, 1547, 2850, 3950];
          areaColor = ['#7fe7f1', '#2395ff'];
          areaColumn('#container1', '', '数量( 件 )', areaNames, areaData, areaColor);
        } else if (data.elem.name.match(/relief/)) {
          //司法救助数量取胜分析 折线图
          sortNames = ['2012', '2013', '2014', '2015', '2016', '2017', '2018'];
          sortData = [1200, 1000, 2300, 800, 1900, 1110, 2100];
          sortSeries('#container2', '', sortNames, sortData);
        } else if (data.elem.name.match(/type/)) {
          //同类型案件对比 饼状图
          timeData = [100, 79, 160, 125, 60];//数据
          timeNames = ['政法委', '公安', '法院', '司法', '检察院'];//时间区段
          timeColors = ['#65e3ca', '#bd4aff', '#faa46a', '#ff4aa8', '#60bff6'];//时间区段在图中的颜色
          pieChart('#container3', '', timeData, timeNames, timeColors);
        } else if (data.elem.name.match(/amount/)) {
          // 同类型救助资金额度对比 柱状图
          typeNames = ['800', '1000', '1500', '2000', '2500', '3000', '3500', '4000'];
          typeColor = ['#50cafd', '#7169ff'];
          typeData = [1800, 2200, 2050, 800, 1200, 1597, 2200, 1850];
          areaColumn('#container4', '金额( 元 )', '数量( 起 )', typeNames, typeData, typeColor);
        }
      });
    });
  }
  resize3()
  $(window).bind("resize", resize3)
});
