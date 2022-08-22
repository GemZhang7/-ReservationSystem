<template>
    <el-menu 
    default-active="1-4-1" 
    class="el-menu-vertical-demo" 
    background-color="#209ad2"
    text-color="#303133"
    active-text-color="#fff"
    @open="handleOpen" 
    @close="handleClose" 
    :collapse="isCollapse">
        <div class="logoImg"></div>
        <!-- 没有子菜单的遍历 -->
        <el-menu-item @click="showMenu(item)" v-for="item in noChildren" :index="item.path" :key="item.path">
            <i :class="item.icon"></i>
            <span slot="title">{{item.lable}}</span>
        </el-menu-item>    
        <!-- 有子级菜单的遍历    -->
        <el-submenu v-for="item in hasChildren" :index="item.path + '' " :key="item.path">
            <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{item.lable}}</span>
            </template>
            <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
            <el-menu-item :index="subItem.path">{{subItem.lable}}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
  document.documentElement.style.overflow = 'hidden';
  export default {
    data() {
      return {
        name: "CommonAside",
        //导航栏是否合上
        isCollapse: false,
        menu:[],
        menu1:[
          {
            path:'/',
            name: 'home',
            lable: '首页',
            icon: 'el-icon-s-home'
          },
          {
            path:'/center',
            name:'center',
            lable: '个人中心',
            icon: 'el-icon-menu',
          },
          {
            path:'/mall',
            name: 'mall',
            lable: '设备预约',
            icon: 'el-icon-tickets'
          }
        ],
        menu2: [
          {
            path:'/user',
            name: 'user',
            lable: '用户管理',
            icon: 'el-icon-s-custom'
          },
          {
            path:'/manage',
            name: 'manage',
            lable: '设备管理',
            icon: 'el-icon-edit-outline'
          }
        ]
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
      //页面跳转 路由
      showMenu(item) {
        this.$router.push({
          name: item.name
        })
      },
    },
    computed: {
      noChildren() {
        //通过过滤，得到没有子级的菜单项（数组）
        return this.menu.filter(item => !item.children)
      },
      hasChildren() {
        return this.menu.filter(item => item.children)
      }
    },
    mounted() {
      
    },
    created() {
      const root =localStorage.getItem('root')
      if (root === 'admin') {
        this.menu = this.menu2
      } else {
        this.menu = this.menu1
      }
    }
  }
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100%;
  // border: 0;
  background-color: #209ad2;
  span{
  font-size: 20px;
  }
}
.logoImg {
  width: 100%;
  height: 60px;
  background-color: #fff;
}
</style>