<template>
  <div>
    <a-card :bordered="false" :body-style="{padding: '24px'}">
      <div class="salesCard">
        <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
          <div class="extra-wrap" slot="tabBarExtraContent">
            <div class="extra-item">
              <a>今日</a>
              <a>本周</a>
              <a>本月</a>
              <a>本年</a>
            </div>
            <a-range-picker :style="{width: '256px'}"></a-range-picker>
          </div>
          <a-tab-pane loading="true" tab="销售额" key="1">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <bar title="销售额趋势" />
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <ranking-list title="门店销售排行榜" :list="rankList"/>
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane tab="访问量" key="2"><a-row>
            <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
              <bar title="销售额趋势" />
            </a-col>
            <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
              <ranking-list title="门店销售排行榜" :list="rankList"/>
            </a-col>
          </a-row></a-tab-pane>
        </a-tabs>
      </div>
    </a-card>
  </div>
</template>

<script>
import ChartCard from '../../components/card/ChartCard'
import MiniArea from '../../components/chart/MiniArea'
import MiniBar from '../../components/chart/MiniBar'
import MiniProgress from '../../components/chart/MiniProgress'
import Bar from '../../components/chart/Bar'
import RankingList from '../../components/chart/RankingList'
import HotSearch from '../../components/analysis/HotSearch'
import SalesData from '../../components/analysis/SalesData'
import Trend from '../../components/chart/Trend'

const rankList = []

for (let i = 0; i < 8; i++) {
  rankList.push({
    name: '桃源村' + i + '号店',
    total: 1234.56 - i * 100
  })
}

export default {
  name: 'my-home',
  data () {
    return {
      rankList
    }
  },
  components: {Trend, SalesData, HotSearch, RankingList, Bar, MiniProgress, MiniBar, MiniArea, ChartCard}
}
</script>

<style lang="less" scoped>
  .extra-wrap{

  }
  .extra-item{
    display: inline-block;
    margin-right: 24px;
    a{
      margin-left: 24px;
    }
  }
</style>
