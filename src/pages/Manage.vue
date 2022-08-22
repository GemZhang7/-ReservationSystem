<template>
  <div class="manage">
    <!-- 弹出的窗口 -->
    <el-dialog
      :title="operateType === 'add'? '新增用户' : '编辑用户'"
      :visible.sync="isShow">
      <common-form
        :formLabel="operateFormLabel"
        :form="operateForm"
        :inline="true"
        ref="form"></common-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="isShow = false">取消</el-button>
          <el-button @click="confirm" type="primary">确定</el-button>
        </div>
    </el-dialog>

    <!-- user页面的头部 (新增、输入、搜索) -->
    <div class="manage-header">
      <el-button @click="addUser" type="primary">+ 新增</el-button>
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
    <common-table
      :tableData="tableData"
      :tableLabel="tableLabel"
      
      @changePage="getList"
      @edit="editUser"
      @del="delUser"
    ></common-table>
  </div>
</template>

<script>
import CommonForm from '../components/CommonForm.vue'
import CommonTable from '../components/CommonTable.vue'
import { MessageBox,Message } from 'element-ui';
import { number } from 'echarts';
export default {
  name:'Manage',
  components: {
    CommonForm,
    CommonTable
  },
  data() {
    return {
      operateType: 'add',
      userId: number,
      isShow: false,
      operateFormLabel:[
        {
          model: 'name',
          label: '设备名称',
          type: 'input'
        },
        {
          model: 'inform',
          label: '主要规格和技术参数',
          type: 'input'
        },
        {
          model: 'uses',
          label: '主要功能及特色',
          type: 'input',
        },
        {
          model: 'count',
          label: '数量',
          type: 'input',
        },
        {
          model: 'place',
          label: '放置地',
          type: 'input',
        },
      ],
      operateForm: {
        name: '',
        inform: '',
        uses: '',
        place: '',
        count: ''
      },
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
        //并识别性别
        item.sexLabel = item.sex
        return item
      })
    },
    confirm() {
      if(this.operateType == 'edit') {
        this.$http.put(`/equiList/${this.userId}`, this.operateForm).then(res => {
          this.isShow = false
          this.getUser()
        })
      }else {
        this.$http.post('/equiList', this.operateForm).then(res => {
        this.isShow = false
        this.getUser()
        })
      }
    },
    addUser() {
      this.isShow = true
      this.operateType ='add'
      this.operateForm = {
        name: '',
        inform: '',
        uses: '',
        place: '',
        count: ''
      }
      // this.$http.post('/userList', this.operateForm)
    },
    // 搜索功能 
    getList(name = '') {
      const mockList = this.tableData.filter((user) => {
        if(name && user.name.indexOf(name) === -1) return false
        return true
      })
      this.tableData = mockList
      
    },
    //编辑功能
    editUser(row) {
      this.operateType = 'edit'
      this.isShow = true
      this.operateForm = row
      this.userId = row.id
      // this.$http.put(`/userList/${row.id}`, this.operateForm)
    },

    //从服务器获取用户列表（发出请求）
    getUser() {
      this.$http.get('/equiList').then(res => {
      const userList = res.data
      //拿到用户信息
      this.tableData = userList.map(item => {
        //并识别性别
        item.sexLabel = item.sex
        return item
      })
      } 
    )
    },

    //删除用户(未完成)
    delUser(row) {
      //删除的提示信息
      MessageBox.confirm("此操作将永久删除改信息，是否继续？", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$http.delete(`/equiList/${row.id}`).then(() => {
          Message({
            type: 'seccess',
            message: '删除成功'
          })
          this.getUser()
        })
      })
    }
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