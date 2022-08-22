<template>
  <div>
    <!-- 弹出的窗口1(查看) -->
    <el-dialog
      title="设备信息"
      :visible.sync="isShow">
      
      <div class="inform-card">
        <div class="title">
          <h1>主要规格和技术参数</h1>
        </div>
        <div class="body">
          {{this.inform}}
        </div>
      </div>
      <div class="inform-card">
        <div class="title">
          <h1>主要功能及特色</h1>
        </div>
        <div class="body">
          {{this.uses}}
        </div>
      </div>

    </el-dialog>
    <el-row class="home" :gutter="10">
    <!-- 上左区域 -->
    <el-col :span="8">
      <!-- 身份卡 -->
      <el-card shadow="hover" style="height: 230px">
        <div class="user">
          <img src="../assets/logo.png" />
          <div class="user-info">
            <p class="name">姓名：张三</p>
            <p class="access">身份：学生</p>
          </div>
        </div>
        <div class="login-info">
          <p>学院：<span>信息与通信工程学院</span></p>
          <p>学号：<span>20181146564</span></p>
        </div>
      </el-card>
    </el-col>
    <!-- 上右区域 -->
    <el-col :span="16">
      <!-- 彩色卡片（上面） -->
      <div>
        <el-col :span="6">
        <el-card class="orderCard" style="height: 90px; background-color: #6278f3">
        <div>
          <h4>待提交</h4>
          <h1>0</h1>
        </div>
      </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="orderCard" style="height: 90px; background-color: #f2575f">
        <div>
          <h4>待审核</h4>
          <h1>0</h1>
        </div>
      </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="orderCard" style="height: 90px; background-color: #e1b031">
        <div>
          <h4>使用中</h4>
          <h1>{{this.count}}</h1>
        </div>
      </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="orderCard" style="height: 90px; background-color: #5d738a">
        <div>
          <h4>已归还</h4>
          <h1>0</h1>
        </div>
      </el-card>
      </el-col>
      </div>
      <!-- 折线图 -->
      <div class="zhexiantu">
        <el-card class="charts" style="height: 130px" shadow="none">
          <div style="height: 130px" ref="echarts"></div>
        </el-card>
      </div>
    </el-col> 
  </el-row>
  

  <!-- 预约清单 -->
  <div class="orderList">
      <h1>预约清单</h1>
      <div class="commontable">
        <common-table-center
      :tableData="tableData"
      :tableLabel="tableLabel"
      @check="checkInf"
        ></common-table-center>
      </div>
    </div>
  </div>
  
</template>

<script>
import * as echarts from 'echarts'
import CommonForm from '../components/CommonForm.vue'
import CommonTableCenter from '../components/CommonTableCenter.vue'

export default {
  name: "Center",
  components: {
    CommonForm,
    CommonTableCenter
  },
  data() {
    return {
      tableData: [],
      count: 0,
      isShow: false,
      inform: '',
      uses: '',
      //表头
      tableLabel: [
        {
          prop: "name",
          label: "设备名称",
          width: 300
        },
        {
          prop: 'ordertime1',
          label: "（预约时间",
          width: 300
        },
        {
          prop: '',
          label: "至",
          width: 25
        },
        {
          prop: 'ordertime2',
          label: "归还时间）",
          width: 300
        }
      ],
    }
  },

  methods: {
    getList() {
      this.$http.get('/equiList').then(res => {
      const List = res.data
      const newList = List.filter((item) => {
        if (item.ordertime1 != null) {
          this.count ++
          return true
        }
      })
      //拿到用户信息
      this.tableData = newList.map(item => {
        return item
      })

      } 
    )
    },

    //查看信息
    checkInf(row) {
      this.operateType = 'edit'
      this.isShow = true
      this.operateForm = row
      this.inform = row.inform
      this.uses = row.uses
    },
  },

  mounted() {
    //图表
    const option = {
             xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              },
              yAxis: {
                name: '在线时长/min',
                type: 'value',
                axisTick: {
                  length: 1
                },
                splitNumber: 1

              },
              series: [
                {
                  data: [0, 0, 30, 0, 0, 0, 0],
                  type: 'line'
                }
              ],
              grid: {
                y: 30
              }
        }
        const E = echarts.init(this.$refs.echarts,{
          height: 30,
        })
        E.setOption(option)
    this.getList()
  }
};
</script>

<style lang="less" scoped>
.user {
  display: flex;
  justify-content: space-around;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
  img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
  }
}

.orderCard {
  color: #fff;
  margin-bottom: 10px;
  h1{
    margin: 0;
    font-size: 30px;
  }
  h4 {
    margin: 0;
    font-size: 16px;
  }
}

.orderList {
  h1 {
    font-size: 25px;
    font-weight: 400;
    margin: 25px 0 5px 0;
    padding-left: 5px;
  }
  .commontable {
    height: 300px;
  }
}

</style>
