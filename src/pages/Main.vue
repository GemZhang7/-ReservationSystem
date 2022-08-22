<template>
    <!-- container布局 -->
    <el-container style="height: 100%">
        <el-aside style="width: auto">
            <common-aside></common-aside>
        </el-aside>
        <el-container>
        <el-header>
            <common-header></common-header>
        </el-header>
        <el-main >
            <router-view></router-view>
        </el-main>
    </el-container>
    </el-container>
</template>

<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommoHeader.vue'
document.documentElement.style.overflow = 'hidden';
    export default {
        name: "Center",
        components: {CommonAside, CommonHeader}
    }
</script>

<style lang="less" scoped>
.el-main {
    background-color: #EBEEF5;
}
</style>