<template>
  <div class="login-wrap">
    <el-form
      :model="form"
      status-icon
      :rules="rules"
      ref="form"
      label-width="100px"
      class="login-container"
    >
      <h3 class="login_title">实验设备预约系统登陆</h3>
      <el-form-item
        label="用户名"
        label-width="80px"
        prop="username"
        class="username"
      >
        <el-input
          type="input"
          v-model="form.username"
          auto-complete="off"
          placeholder="请输入账号"
        ></el-input>
      </el-form-item>

      <el-form-item label="密码" label-width="80px" prop="password">
        <el-input
          type="password"
          v-model="form.password"
          auto-complete="off"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item class="login_submit">
        <el-button type="primary" @click="login" class="login_submit"
          >登陆</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Message } from 'element-ui';
export default {
  name: 'Login',
  data() {
    return {
      labelPosition: 'top',
      form: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 3,
            message: '用户名长度不能小于3位',
            trigger: 'blur',
          },
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
    };
  },
  methods: {
    //密码认证
    getMenu() {
      //    const userMsg = this.form
      //     if (userMsg.username === "admin" && userMsg.password === "admin") {
      //         const root = 'admin'
      //         localStorage.setItem('root', root)
      //         this.$router.push({name: 'user'})
      //     } else if (userMsg.username === "zhangsan" && userMsg.password === "123456") {
      //         const root = 'user'
      //         localStorage.setItem('root', root)
      //         this.$router.push({name: 'home'})
      //     }else {
      //        Message.warning('登录错误')
      //     }
      this.$router.push({ name: 'user' });
    },

    //登录请求
    login() {
      this.getMenu();
    },
  },
};
</script>

<style lang="less">
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
.login_submit {
  margin: 10px auto 0 auto;
  padding-right: 80px;
  .el-button {
    width: 100%;
  }
}
</style>
