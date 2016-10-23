import React from 'react';
import echarts from 'echarts';
class App extends React.Component {
  componentDidMount() {
    let myChart = echarts.init(document.getElementById('main'));


    myChart.setOption({
        title: {
          text: 'ECharts',
          show: true,


        },
        tooltip: {},
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    })
  }

  render () {
    return(
      <div>
        <div id="main" style={{width:"600px",height:"400px"}}></div>

      </div>
    )
  }
}

export default App;
