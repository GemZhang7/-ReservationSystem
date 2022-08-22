<template>
    <header>
        <div class="l-content">
            <!-- <a href="#" class="el-icon-s-home">首页</a> -->
            <!-- <img class="logoImg" src="../assets/1.png"> -->
        </div>
        <img class="logoImg" src="../assets/1.png">
        
        <div class="r-content">
            <el-dropdown>
                <span>
                    <img class="user" src="../assets/logo.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-button @click="handleLoginOut" style="border: 0px">退出登录</el-button>
                    <!-- <el-dropdown-item @click="handleLoginOut">退出</el-dropdown-item> -->
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>

<script>
export default {
    name: 'CommonHeader',
    methods: {
        handleLoginOut() {
            // this.$message.success('退出成功')
            this.$router.push({name:'login'})
            localStorage.clear()
        },
        // handleCommand(command) {
        // this.$message('click on item ' + command);
        // console.log(this);
    //   }
    }
}
</script>

<style lang="less" scoped>
header {
    position: relative;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    .r-content img{
        background-color: #ccc;
        height: 40px;
        width: 40px;
        border-radius: 50%;
    }
    .logoImg{
        position: absolute;
        height: 60px;
        left: -215px;
        top: 0;
    }
}


</style>