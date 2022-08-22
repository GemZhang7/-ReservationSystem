<template>
  <div class="common-table">
      <el-table :data="tableData" height="100%" stripe>
          <el-table-column
            show-overflow-tooltip
            v-for="item in tableLabel"
            :key="item.prop"
            :label="item.label"
            :width="item.width ? item.width : 125"
            align="center"
          >
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{scope.row[item.prop]}}</span>
            </template>
          </el-table-column>

          <el-table-column label="操作" min-width="180" align="center">
              <template slot-scope="scope">
                <!-- <el-button size="mini" type="primary" @click="handleEdit(scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button> -->
                <el-button size="mini" type="info" @click="checkInform(scope.row)">查看</el-button>
                <el-button size="mini" type="primary" @click="orderEquip(scope.row)">预约</el-button>
              </template>
          </el-table-column>
      </el-table>
  </div>
</template>

<script>
export default {
    name: 'CommonTableEquip',
    props: {
        tableData: Array,
        tableLabel: Array,
    },
    data() {
        return {
            
        }
    },
    methods: {
        // handleEdit(row) {
        //     this.$emit('edit', row)
        // },
        // handleDelete(row) {
        //     this.$emit('del', row)
        // },
        checkInform(row) {
            this.$emit('check', row)
        },
        orderEquip(row) {
            this.$emit('order', row)
        }
    }

}
</script>

<style lang="less" scoped>
.common-table {
    height: 600px;
    background-color: #fff;
}
</style>