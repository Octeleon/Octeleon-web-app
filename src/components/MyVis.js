import React from 'react'
import ReactFauxDOM from 'react-faux-dom'
const d3 = require('d3')

class MyVis extends React.Component {
    constructor(props) {
      super(props);
    }
    drawChart() {
        var data = `1-May-12	582.13
            30-Apr-12	583.98
            27-Apr-12	603.00
            26-Apr-12	607.70
            25-Apr-12	610.00
            24-Apr-12	560.28
            23-Apr-12	571.70
            20-Apr-12	572.98
            19-Apr-12	587.44
            18-Apr-12	608.34
            17-Apr-12	609.70
            16-Apr-12	580.1`
            data = data.split('\n').map(v=>({date:v.split()[0],close:v.split()[1]}))
        var margin = {top: 20, right: 20, bottom: 30, left: 50}
        var width = 960 - margin.left - margin.right
        var height = 500 - margin.top - margin.bottom
    
        var parseDate = d3.timeFormat('%d-%b-%y')
    
        var x = d3.scaleTime()
        .range([0, width])
    
        var y = d3.scaleLinear()
        .range([height, 0])
    
        var xAxis = d3.axisBottom()
        .scale(x)
    
        var yAxis = d3.axisLeft()
        .scale(y)
    
        var line = d3.line()
        .x(function (d) { return x(d.date) })
        .y(function (d) { return y(d.close) })
    
        var node = ReactFauxDOM.createElement('svg')
        var svg = d3.select(node)
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
    
        data.forEach(function (d) {
          d.date = parseDate(d.date)
          d.close = +d.close
        })
    
        x.domain(d3.extent(data, function (d) { return d.date }))
        y.domain(d3.extent(data, function (d) { return d.close }))
    
        svg.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis)
    
        svg.append('g')
        .attr('class', 'y axis')
        .call(yAxis)
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '.71em')
        .style('text-anchor', 'end')
        .text('Price ($)')
    
        svg.append('path')
        .datum(data)
        .attr('class', 'line')
        .attr('d', line)
    
        return node.toReact()
    }
   
    render () {
      return this.drawChart();
    }
  }
export default MyVis