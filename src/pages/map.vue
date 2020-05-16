<template>
  <div id="main" style="width: 600px;height: 400px;"></div>
</template>

<script>
import echarts from 'echarts'

export default {
  data () {
    return {
      listData: [
        {'name': '约翰内斯堡', 'value': [28.047305, -26.204103], country: 'South Africa'},
        {'name': '萨格勒布', 'value': [15.981919, 45.815008], country: 'Croatia'},
        {'name': '斗湖', 'value': [117.538749, 4.1459], country: 'Malaysia'},
        {'name': '马尼拉', 'value': [120.98453, 14.58865], country: 'Philippines'},
        {'name': '中国香港', 'value': [114.186125, 22.293586], country: 'China'},
        {'name': '中国北京', 'value': [116.4, 39.9], country: 'China'}
      ],
      colors: ['#EEEC0D', '#E55125', '#5EA6FE', '#FC92F7', '#67D670', '#36FFF8'],
      option: {
        backgroundColor: '#333333',
        geo: {
          map: 'world',
          label: {
            emphasis: {
              show: true,
              color: '#fff'
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: 'rgba(0, 26, 45, 0.4)',
              borderColor: '#3697AD',
              borderWidth: 1,
              shadowColor: '#3697AD',
              shadowBlur: 30
            },
            emphasis: {
              areaColor: '#2a333d'
            }
          },
          regions: []
        },
        series: [{
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          symbolSize: 10,
          rippleEffect: {
            brushType: 'stroke',
            scale: 10,
            period: 10
          },
          itemStyle: {
            normal: {
              color: '#44FCF7'
            }
          },
          data: []
        }]
      }
    }
  },
  components: {},
  methods: {
    getRandomColor () {
      return this.data.colors[Math.floor(Math.random() * this.data.colors.length)]
    },

    drawMap (id) {
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption(this.data.option)
    },

    startLoop () {
      const listDataLen = this.data.listData.length
      var i = 0
      setTimeout(function () {
        i++
        if (i >= listDataLen) {
          i = 0
        }
        const randomColor = this.getRandomColor()

        var that = this
        this.data.option['series'][0]['data'] = [{
          itemStyle: {
            normal: {
              color: randomColor
            }
          }
        }]
        this.data.option['geo']['regions'] = [
          {
            name: that.data.listData[i]['country'],
            itemStyle: {
              normal: {
                areaColor: 'skyblue'
              }
            }
          }
        ]
        this.setOption(this.data.option, true)
      }, 2000)
    }
  },
  mounted () {
    this.drawMap('main')
    this.startLoop()
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
