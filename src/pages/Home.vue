<template>
  <div>
    <!-- 轮播图 -->
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in imagBox" :key="item.id">
        <img :src="item.idView" class="image">
      </el-carousel-item>
    </el-carousel>

    <el-row class="dataCardBox" :gutter="10">
      <el-col :span="6">
        <el-card class="dataCard" style="background: linear-gradient(to top right, #6275eb, #86caf6); height: 130px">
          <div>
            <h4 class="small">开放共享设备</h4>
            <span class="big">431</span><span class="small">台</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="dataCard" style="background: linear-gradient(to top right, #219ad3, #74daf3); height: 130px">
          <div>
            <h4 class="small">设备使用率</h4>
            <span class="big">58</span><span class="small">%</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="dataCard" style="background: linear-gradient(to top right, #30bfa3, #40de87); height: 130px">
          <div>
            <h4 class="small">总预约次数</h4>
            <span class="big">456</span><span class="small">次</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="dataCard" style="background: linear-gradient(to top right, #e0ab2b, #f0e16c); height: 130px"> 
          <div>
            <h4 class="small">总使用时间</h4>
            <span class="big">87831</span><span class="small">小时</span>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 新闻通知模块 -->
    <el-row class="square" :gutter="10">
      <el-col class="inform" :span="12">
        <el-card shadow="hidden">
          <div class="cardHead" slot="header">
            <i class="el-icon-warning"></i> 通知
          </div>
          <div class="cardBody">
            <ul>
              <li><a href="#">· 关于印发第四批研究所实验收费标准(试行)的通知</a><span>2022-12-06</span></li>
              <li><a href="#">· 关于印发第三批研究所实验收费标准(试行)的通知</a><span>2022-07-18</span></li>
              <li><a href="#">· 关于印发结构工程研究所、岩土工程研究所、工程抗震研究所实验</a><span>2021-11-22</span></li>
              <li><a href="#">· 第十七期教学沙龙“后疫情时代”的实验教学模式</a><span>2021-06-03</span></li>
              <li><a href="#">· 关于组织教师参加“学堂在线————新学期教学模式分享与研讨</a><span>2021-04-13</span></li>
            </ul>
          </div>
        </el-card>
      </el-col>
      <el-col class="news" :span="12">
        <el-card shadow="hidden">
          <div class="cardHead" slot="header">
            <i class="el-icon-location"></i> 新闻
          </div>
          <div class="cardBody">
            <ul>
              <li><a href="#">· 当好主人翁 争气做建设者</a></li>
              <li><a href="#">· 课程思政引领下的“水力学”一流课程建设探索与实践</a></li>
              <li><a href="#">· 打造具有东北特色的国家知识产权战略研究品牌智库</a></li>
              <li><a href="#">· “勤学桥”落成开通 研究生教育大楼连通</a></li>
              <li><a href="#">· 国家科学技术奖励大会召开</a></li>
            </ul>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name:"Home",
  data() {
    return {
      imagBox:[
        {id:0, idView: require('../assets/home1.jpg')},
        {id:1, idView: require('../assets/home2.jpg')},
        {id:2, idView: require('../assets/home3.jpg')}
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .el-carousel__item img {
    width: 100%;
    height: 100%;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .square {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .cardHead {
    font-size: 20px;
    }
    .el-card {
    padding-top: 1px;
    }
    .el-card__body {
      // font-size: 16px;
      // color: #666;
      ul {
        margin-left: 5px;
        li:nth-child(-n+4) {
        margin-bottom: 10px;
        }
        li {
          display: flex;
          justify-content: space-between;
          span {
          font-size: 12px;
          color: #ccc;
          }
          a:hover {
          color: skyblue;
          }
        }
      }
    }
    .inform i {
      color: orange;
    }
    .news i {
      color: #409EFF;
    }
  }
  
  .dataCardBox .dataCard {
    color: #fff;
    .big {
      font-size: 40px;
      margin: 5px;
      font-weight: 700;
    }
    .small {
      font-weight: 500;
    }
    h4 {
      margin: 5px;
    }
  }
</style>