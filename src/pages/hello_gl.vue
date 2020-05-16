<template>
  <div id="main" style="width: 600px;height: 400px;"></div>
</template>

<script>
import echarts from 'echarts'

export default {
  data () {
    return {
      data: []
    }
  },
  methods: {
    makeGaussian (amplitude, x0, y0, sigmaX, sigmaY) {
      return function (amplitude, x0, y0, sigmaX, sigmaY, x, y) {
        var exponent = -(
          (Math.pow(x - x0, 2) / (2 * Math.pow(sigmaX, 2))) +
                (Math.pow(y - y0, 2) / (2 * Math.pow(sigmaY, 2)))
        )
        return amplitude * Math.pow(Math.E, exponent)
      }.bind(null, amplitude, x0, y0, sigmaX, sigmaY)
    },

    echartsInit () {
      this.charts = echarts.init(document.getElementById('main'))

      var data = []
      var gaussian = this.makeGaussian(50, 0, 0, 20, 20)

      for (var y = -50; y <= 50; y++) {
        for (var x = -50; x <= 50; x++) {
          var z = gaussian(x, y)
          data.push([x, y, z])
        }
      }

      console.log(data)

      var option = {
        grid3D: {},
        xAxis3D: {},
        yAxis3D: {},
        zAxis3D: { max: 60 },
        series: [{
          type: 'surface',
          data: data
        }]
      }
      this.charts.setOption(option)
    }
  },
  mounted () {
    this.echartsInit()
  }
}
</script>
