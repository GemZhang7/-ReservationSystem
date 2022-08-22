<template>
  <div class="manage">
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
    <!-- 弹出的窗口2(预约) -->
    <el-dialog
      title="设备预约"
      :visible.sync="isShow1">

        <div class="order-time">
          <div class="block">
              <span class="demonstration">预约时间：</span>
              <el-date-picker
                v-model="timeValue"
                value-format="yyyy-MM-dd HH:mm"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
          </div>
        </div>

        <div slot="footer" class="dialog-footer">
          <el-button @click="isShow1 = false">取消</el-button>
          <el-button @click="confirm" type="primary">确定</el-button>
        </div>
    </el-dialog>

    <!-- user页面的头部 (新增、输入、搜索) -->
    <div class="manage-header">
      <common-form
        :formLabel="formLabel"
        :form="searchForm"
        :inline="true"
        ref="form">
          <i class="el-icon-error" @click="clearInput()"></i>
          <el-button @click="getList(searchForm.keyword)" type="primary">搜索</el-button>
        </common-form>
    </div>

    <!-- 表格 -->
    <common-table-equip
      :tableData="tableData"
      :tableLabel="tableLabel"
      @check="checkInf"
      @order="orderEquip"
    ></common-table-equip>
  </div>
</template>

<script>
import CommonForm from '../components/CommonForm.vue'
import CommonTableEquip from '../components/CommonTableEquip.vue'
import { MessageBox,Message } from 'element-ui';
export default {
  name:'User',
  components: {
    CommonForm,
    CommonTableEquip
  },
  data() {
    return {
      operateType: 'add',
      timeValue:'',
      isShow: false,
      isShow1: false,
      inform: '',
      uses: '',
      equiTable: {},
      formLabel: [
        {
          model: 'keyword',
          label: '',
          type: 'input'
        }
      ],
      searchForm: {
        keyword: ''
      },
      tableData: [],
      //表头
      tableLabel: [
        {
          prop: "name",
          label: "设备名称",
          width: 300,
        },
        {
          prop: "place",
          label: "放置地",
          width: 300
        },
        {
          prop: "count",
          label: "设备库存数量/台",
          width: 300
        }
      ],
    }
  },
  methods:{
    //搜索框
    clearInput() {
      this.searchForm.keyword = ''
      this.getUser()
      this.tableData = this.tableData.map(item => {
        return item
      })
    },
    // 搜索功能 
    getList(name = '') {
      const mockList = this.tableData.filter((user) => {
        if(name && user.name.indexOf(name) === -1) return false
        return true
      })
      this.tableData = mockList
      
    },

    confirm() {
      const rows = this.equiTable
      console.log(rows);
      rows.ordertime1 = this.timeValue[0]
      rows.ordertime2 = this.timeValue[1]
      rows.count--
      this.$http.put(`/equiList/${rows.id}`, rows).then(res => {
        this.isShow1 = false
        console.log(this.equiTable);
      })
    },

    //查看信息
    checkInf(row) {
      this.operateType = 'edit'
      this.isShow = true
      this.operateForm = row
      this.inform = row.inform
      this.uses = row.uses
    },
    //预约按钮
    orderEquip(row) {
      this.isShow1 =true
      const equiId = row.id
      this.equiTable = row
    },

    //从服务器获取设备列表（发出请求）
    getUser() {
      this.$http.get('/equiList').then(res => {
      const userList = res.data
      //拿到用户信息
      this.tableData = userList.map(item => {
        return item
      })
      } 
    )
    },

  },
  created() {
    this.getUser()
  },
  mounted() {
  }

}
</script>

<style lang="less" scoped>
.manage-header{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .el-icon-error {
      position: absolute;
      top: 15px;
      right: 90px;
      content: '';
      color: #ccc;
    }
}
</style>