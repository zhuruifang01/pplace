  var createcharts={};//创建函数对象
  // 首页
      //创建柱状图的函数：
        createcharts.chart1=function(Xdata,Ydata){
        $(function(){
          var chart1= echarts.init(document.getElementById('chart1'));
          var option = {
              //backgroundColor:'rgba(178,220,245,0.4)',//背景色
              color: ['#3da5a1'],
              tooltip : {  //鼠标悬浮显示
                  trigger: 'axis',
                  axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  }
              },
              title: {
                  text:"七大场景达标率",
                  textStyle: {
                      fontSize: 20,
                      fontWeight:'normal',
                      color:'#dadce3',            //标题颜色
                  },
                  x:'center'

              },
              grid: {  //图表的位置
                  left: '6%',
                  right: '12%',
                  bottom: '3%',
                  containLabel: true
              },
              xAxis : [
                  {
                      type : 'category',
                      name : 'x/场景名',
                      data :Xdata,
                      axisTick: {
                          alignWithLabel: true
                      },
                      axisLabel: {
                          show: true,
                          textStyle: {
                              color: '#dadce3'   //x轴字体颜色
                          },
                          // interval:0
                      },
                      axisLine:{
                          lineStyle:{
                              color:'#376e90',   //x轴线颜色
                          }
                      },

                  }
              ],
              yAxis : [

                  {   splitLine:{show: false},  //去掉网格
                      type : 'value',
                      name : 'y/达标率(%)',
                      axisLabel: {
                          show: true,
                          textStyle: {
                              color: '#dadce3'
                          }
                      },
                      axisLine:{
                          lineStyle:{
                              color:'#376e90',
                          }
                      }
                  }
              ],
              series : [
                  {
                      name:'达标率',
                      type:'bar',
                      barWidth: '60%',
                      itemStyle:{
                          normal: {

                              color: function (params) {
                                  // build a color map as your need.
                                  var colorList = [
                                      '#05cbcc','#6a6cc4','#fa6ddf','#f49ac2','#f6d16c','#f9ad81','#00b6de','#f49ac2'
                                  ];
                                  return colorList[params.dataIndex]
                              }
                          }
                      },
                      data:Ydata
                  }
              ]
          };
          chart1.setOption(option);
      });
  };
     //创建横向柱状图的函数：
       createcharts.chart2=function(Xdata,Ydata1,Ydata2){
              $(function(){
                  var chart2= echarts.init(document.getElementById('chart2'));
                  var option = {
                      title: {
                          text:"近6周达标率趋势",
                          textStyle: {
                              fontSize: 20,
                              fontWeight:'normal',
                              color:'#fff',           //标题颜色
                          },
                          x:'20%',
                          y:'6px'
                      },
                      grid: {  //图表的位置
                          left: '3%',
                          right: '18%',
                          top:'26%',
                          bottom: '3%',
                          containLabel: true
                      },
                      tooltip : {
                          trigger: 'axis',
                          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                          }
                      },
                      legend: {  //图例的图表：
                          x:'75%',
                          y:'6px',
                          data:['重点场景', '口碑场景'],
                          textStyle: {
                              color: '#dadce3'   //x轴字体颜色
                          },
                      },
                      calculable : true,
                      xAxis : [
                          {   splitLine:{show: false},
                              type : 'value',
                              name : 'x/达标率(%)',
                              boundaryGap : [0, 0.01],
                              axisTick: {
                                  alignWithLabel: true
                              },
                              axisLabel: {
                                  show: true,
                                  textStyle: {
                                      color: '#dadce3'   //x轴字体颜色
                                  },
                                  // interval:0
                              },
                              axisLine:{
                                  lineStyle:{
                                      color:'#376e90',   //x轴线颜色
                                  }
                              }
                          }
                      ],
                      yAxis : [
                          {   splitLine:{show: false},
                              type : 'category',
                              name : 'y/周期',
                              axisLabel: {
                                  show: true,
                                  textStyle: {
                                      color: '#dadce3'
                                  }
                              },
                              axisLine:{
                                  lineStyle:{
                                      color:'#376e90',
                                  }
                              },
                              data:Xdata,
                          }
                      ],
                      series : [
                          {
                              name:'重点场景',
                              type:'bar',
                              data:Ydata1,
                              itemStyle:{
                                  normal: {
                                      color: function (params) {
                                          var colorList = [
                                              '#05cbcc','#05cbcc','#05cbcc','#05cbcc','#05cbcc','#05cbcc'
                                          ];
                                          return colorList[params.dataIndex]
                                      }
                                  }
                              }
                          },
                          {
                              name:'口碑场景',
                              type:'bar',
                              data:Ydata2,
                              itemStyle:{
                                  normal: {
                                      color: function (params) {
                                          var colorList = [
                                              '#249cf1','#249cf1','#249cf1','#249cf1','#249cf1','#249cf1'
                                          ];
                                          return colorList[params.dataIndex]
                                      }
                                  }
                              }
                          },
                      ]
                  };
                  chart2.setOption(option);
              });
          };
     //创建折线图的函数：
       createcharts.chart3=function(name,Xdata,Ydata1){
          $(function(){
              var chart3= echarts.init(document.getElementById('chart3'));
              var option = {
                  title: {
                      text: '重点场景4G-KPI近72小时趋势图',
                      textStyle: {
                          fontSize: 20,
                          fontWeight:'normal',
                          color:'#dadce3',            //标题颜色
                      },
                      x:'center',
                      y:'6px'
                  },
                  color:['#a173eb'],
                  grid: {  //图表的位置
                      left: '3%',
                      right: '12%',
                      top:'26%',
                      bottom: '3%',
                      containLabel: true
                  },
                  tooltip : {
                      trigger: 'axis'
                  },

                  xAxis : [
                      {   splitLine:{show: false},  //去掉网格
                          type: 'category',
                          boundaryGap: false,
                          name: 'x/时间',
                          axisLabel: {
                              show: true,
                              textStyle: {
                                  color: '#dadce3'
                              }
                          },
                          axisLine: {
                              lineStyle: {
                                  color:'#376e90',
                              }
                          },
                          data: Xdata
                      }
                  ],
                  yAxis : [
                      {   splitLine:{show: false},  //去掉网格
                          type : 'value',
                          axisLabel: {
                              show: true,
                              textStyle: {
                                  color: '#dadce3'
                              }
                          },
                          axisLine:{
                              lineStyle:{
                                  color:'#376e90',
                              }
                          }
                      }
                  ],
                  series : [
                      {
                          name:name,
                          type:'line',
                          stack: '销量',
                          areaStyle: {normal: {}},
                          data:Ydata1
                      }
                  ]
              };
              chart3.setOption(option);
          });
      };
  //具体场景：
     //上右 柱状图：
      createcharts.chart4=function(Xdata,Ydata1,Ydata2){
          $(function(){
              var chart4= echarts.init(document.getElementById('chart4'));
              var option = {
                  tooltip : {  //鼠标悬浮显示
                      trigger: 'axis',
                      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                      }
                  },
                  grid: {  //图表的位置
                      left: '3%',
                      right: '12%',
                      top:'30%',
                      bottom: '3%',
                      containLabel: true
                  },
                      toolbox: {
                          show : true,

                      },
                      calculable : true,
                      xAxis : [
                          {   name: 'x/周期',
                              type : 'category',
                              data :Xdata,
                              axisLabel: {
                                  show: true,
                                  textStyle: {
                                      color: '#dadce3'   //x轴字体颜色
                                  },
                                  // interval:0
                              },
                              axisLine:{
                                  lineStyle:{
                                      color:'#376e90',    //x轴线颜色
                                  }
                              }
                          }
                      ],
                      yAxis : [
                          {   splitLine:{show: false},  //去掉网格
                              type : 'value',
                              axisLabel: {
                                  show: true,
                                  textStyle: {
                                      color: '#dadce3'
                                  }
                              },
                              axisLine:{
                                  lineStyle:{
                                      color:'#376e90',
                                  }
                              }
                          }
                      ],
                      series : [
                          {
                              name:'良好栅格(%)',
                              type:'bar',
                              data:Ydata1,
                              itemStyle:{
                                  normal: {

                                      color: function (params) {
                                          // build a color map as your need.
                                          var colorList = [
                                              '#ef9536','#efa43a','#edb53e','#f1b241','#f1cb50','#f7d567','#f9de96'
                                          ];
                                          return colorList[params.dataIndex]
                                      }
                                  }
                              }
                          }
                      ]
                  };
              chart4.setOption(option);
          });
      };

  // 下右 折线图:
  createcharts.chart5=function(name,Xdata,Ydata1){
      $(function(){
          var chart5= echarts.init(document.getElementById('chart5'));
          var option = {
              title: {
                  text: '4G-KQI近72小时趋势图',
                  textStyle: {
                      fontSize: 20,
                      fontWeight:'normal',
                      color:'#dadce3',            //标题颜色
                  },
                  x:'center',
                  y:'6px'
              },
              color:['#facd78'],
              grid: {  //图表的位置
                  left: '3%',
                  right: '5%',
                  top:'26%',
                  bottom: '3%',
                  containLabel: true
              },
              tooltip : {
                  trigger: 'axis'
              },
              // legend: {  //图例
              //     x:'55%',
              //     y:'10px',
              //     data:[
              //         {
              //             name:'告警',
              //             textStyle:{
              //                 fontSize:12,
              //                 fontWeight:'bolder',
              //                 color:'#249cf1'
              //             },
              //             icon:'stack'
              //         },
              //         {
              //             name:'KPI',
              //             textStyle:{
              //                 fontSize:12,
              //                 fontWeight:'bolder',
              //                 color:'#a173eb'
              //             },
              //             icon:'stack'
              //
              //         },
              //         {
              //             name:'KQI',
              //             textStyle:{
              //                 fontSize:12,
              //                 fontWeight:'bolder',
              //                 color:'#facd78'
              //             },
              //             icon:'stack'
              //         },
              //         {
              //             name:'容量',
              //             textStyle:{
              //                 fontSize:12,
              //                 fontWeight:'bolder',
              //                 color:'#05cbcc'
              //             },
              //             icon:'stack'
              //         }
              //     ]
              // },
              toolbox: {
                  show : true,

              },
              calculable : true,
              xAxis : [
                  {
                      type: 'category',
                      boundaryGap: false,
                      name: 'x/时间',
                      axisLabel: {
                          show: true,
                          textStyle: {
                              color: '#dadce3'
                          }
                      },
                      axisLine: {
                          lineStyle: {
                              color:'#376e90',
                          }
                      },
                      data: Xdata
                  }
              ],
              yAxis : [
                  {   splitLine:{show: false},  //去掉网格
                      type : 'value',
                      min:3,
                      axisLabel: {
                          show: true,
                          textStyle: {
                              color: '#dadce3'
                          }
                      },
                      axisLine:{
                          lineStyle:{
                              color:'#376e90',
                          }
                      }
                  }
              ],
              series : [
                  {
                      name:name,
                      type:'line',
                      smooth:true,
                      itemStyle : {
                          normal : {
                              areaStyle: {type: 'default'}
                          }
                      },
                      data:Ydata1
                  }
              ]
          };
          chart5.setOption(option);
      });
  };
    //下左 折线图:
      createcharts.chart6=function(name,Xdata,Ydata1){
          $(function(){
          var chart6= echarts.init(document.getElementById('chart6'));
          var option = {
              title: {
                  text: '3G-KPI近72小时趋势图',
                  textStyle: {
                      fontSize: 20,
                      fontWeight:'normal',
                      color:'#dadce3',            //标题颜色
                  },
                  x:'center',
                  y:'6px'
              },
              color:['#05cbcc'],
              grid: {  //图表的位置
                  left: '3%',
                  right: '12%',
                  top:'26%',
                  bottom: '3%',
                  containLabel: true
              },
              tooltip : {
                  trigger: 'axis'
              },
              toolbox: {
                  show : true,

              },
              calculable : true,
              xAxis : [
                  {
                      type: 'category',
                      boundaryGap: false,
                      name: 'x/时间',
                      axisLabel: {
                          show: true,
                          textStyle: {
                              color: '#dadce3'
                          }
                      },
                      axisLine: {
                          lineStyle: {
                              color:'#376e90',
                          }
                      },
                      data: Xdata
                  }
              ],
              yAxis : [
                  {   splitLine:{show: false},  //去掉网格
                      type : 'value',
                      axisLabel: {
                          show: true,
                          textStyle: {
                              color: '#dadce3'
                          }
                      },
                      axisLine:{
                          lineStyle:{
                              color:'#376e90',
                          }
                      }
                  }
              ],
              series : [
                  {
                      name:name,
                      type:'line',
                      smooth:true,
                      itemStyle : {
                          normal : {
                              areaStyle: {type: 'default'}
                          }
                      },
                      data:Ydata1
                  }
              ]
          };
          chart6.setOption(option);
      });
      };
    //下中 折线图：
      createcharts.chart7=function(name,Xdata,Ydata1){
          $(function(){
              var chart7= echarts.init(document.getElementById('chart7'));
              var option = {
                  title: {
                      text: '4G-KPI近72小时趋势图',
                      textStyle: {
                          fontSize: 20,
                          fontWeight:'normal',
                          color:'#dadce3',            //标题颜色
                      },
                      x:'center',
                      y:'6px'
                  },
                  color:['#a173eb'],
                  grid: {  //图表的位置
                      left: '3%',
                      right: '12%',
                      top:'26%',
                      bottom: '3%',
                      containLabel: true
                  },
                  tooltip : {
                      trigger: 'axis'
                  },
                  toolbox: {
                      show : true,

                  },
                  calculable : true,
                  xAxis : [
                      {
                          type: 'category',
                          boundaryGap: false,
                          name: 'x/时间',
                          axisLabel: {
                              show: true,
                              textStyle: {
                                  color: '#dadce3'
                              }
                          },
                          axisLine: {
                              lineStyle: {
                                  color:'#376e90',
                              }
                          },
                          data: Xdata
                      }
                  ],
                  yAxis : [
                      {   splitLine:{show: false},  //去掉网格
                          type : 'value',
                          axisLabel: {
                              show: true,
                              textStyle: {
                                  color: '#dadce3'
                              }
                          },
                          axisLine:{
                              lineStyle:{
                                  color:'#376e90',
                              }
                          }
                      }
                  ],
                  series : [
                      {
                          name:name,
                          type:'line',
                          smooth:true,
                          itemStyle : {
                              normal : {
                                  areaStyle: {type: 'default'}
                              }
                          },
                          data:Ydata1
                      }
                  ]
              };
              chart7.setOption(option);
          });
      };

  // ===========index4=====================
  //趋势图：
  createcharts.chart8=function(Xdata,Ydata1,Ydata2){
      $(function(){
          var chart8= echarts.init(document.getElementById('chart8'));
          var option = {
              tooltip : {  //鼠标悬浮显示
                  trigger: 'axis',
                  axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  }
              },
              grid: {  //图表的位置
                  left: '3%',
                  right: '12%',
                  top:'30%',
                  bottom: '3%',
                  containLabel: true
              },
              toolbox: {
                  show : true,

              },
              calculable : true,
              xAxis : [
                  {   name: 'x/PRB利用率',
                      type : 'category',
                      data :Xdata,
                      axisLabel: {
                          show: true,
                          textStyle: {
                              color: '#dadce3'   //x轴字体颜色
                          },
                          // interval:0
                      },
                      axisLine:{
                          lineStyle:{
                              color:'#376e90',    //x轴线颜色
                          }
                      }
                  }
              ],
              yAxis : [
                  {   name: 'y/小区数量',
                      splitLine:{show: false},  //去掉网格
                      type : 'value',
                      axisLabel: {
                          show: true,
                          textStyle: {
                              color: '#dadce3'
                          }
                      },
                      axisLine:{
                          lineStyle:{
                              color:'#376e90',
                          }
                      }
                  }
              ],
              series : [
                  {
                      type:'line',
                      data:Ydata1,
                      itemStyle:{
                          normal: {

                              color: function (params) {
                                  // build a color map as your need.
                                  var colorList = [
                                      '#7fe578'
                                  ];
                                  return colorList[params.dataIndex]
                              }
                          }
                      }
                  },
                  {
                      name:'小区数量',
                      type:'bar',
                      data:Ydata2,
                      itemStyle:{
                          normal: {

                              color: function (params) {
                                  // build a color map as your need.
                                  var colorList = [
                                      '#cb9dfb'
                                  ];
                                  return colorList[params.dataIndex]
                              }
                          }
                      }
                  }
              ]
          };
          chart8.setOption(option);
      });
  };