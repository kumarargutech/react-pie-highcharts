import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);

class App extends Component {
  
  componentDidMount() {
    Highcharts.chart('container', {
      chart: {
        type: 'pie',
        backgroundColor: '#ffffff',
        marginRight: 250
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      legend: {
        enabled: true,
        useHTML: true,
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical',
        itemMarginTop: 10,
        itemMarginBottom: 10,
        x: -400,
        itemStyle: {
          visible: true,
          color: '#OOOOOO',
          fontSize: '14px',
          lineHeight: '15px'
        }
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: false
          }
        },
        pie: {
          borderWidth: 0,
          innerSize: 140,
          startAngle: 40
        }
      },
      series: [{
        showInLegend: true,
        data: [{
          name: 'Yahoo',
          color: '#E3297D',
          y: 322
        }, {
          name: 'BBC',
          color: '#59BD8B',
          y: 298
        }, {
          name: 'YouTube',
          color: '#1DA4D1',
          y: 344
        }, {
          name: 'Netflix',
          color: 'green',
          y: 144
        }, {
          name: 'Google',
          color: 'orange',
          y: 250
        } ]
      }]
    });
  }
  
  render() {
    return (
      <div className="App">
        <div id="container"></div>
      </div>
    );
  }
}

export default App;
