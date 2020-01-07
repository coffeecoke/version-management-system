
<template>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="loginName">
      <el-input type="text" v-model="ruleForm2.loginName" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="ruleForm2.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <!-- <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox> -->
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" @keyup.enter.native = "handleSubmit2" :loading="logining">登录</el-button>
      <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      logining: false,
      ruleForm2: {
        loginName: '',
        password: ''
      },
      rules2: {
        loginName: [
          { required: true, message: '请输入账号', trigger: 'blur' }
          // { validator: validaePass }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
          // { validator: validaePass2 }
        ]
      },
      checked: true
    }
  },
  created () {
    var _self = this
    document.onkeydown = function (e) {
      let key
      if (window.event === undefined) {
        key = e.keyCode
      } else {
        key = window.event.keyCode
      }
      if (key === 13) {
        _self.handleSubmit2()
      }
    }
  },
  methods: {
    handleSubmit2 (ev) {
      localStorage.setItem('loginName', this.ruleForm2.loginName)
      let _this = this
      this.$refs.ruleForm2.validate((valid) => {
        if (valid) {
          // _this.$router.replace('/table');
          this.logining = true
          let loginParams = { loginName: this.ruleForm2.loginName, password: this.ruleForm2.password }
          this.$api.userInfo.getUserInfo(loginParams).then(res => {
            let result = res.data
            console.log(result)
            this.logining = false
            let { msg, status, token, userName } = result
            if (status !== '1') {
              this.$message({
                message: msg,
                type: 'error'
              })
            } else {
              localStorage.setItem('token', token)
              localStorage.setItem('userName', userName)
              _this.$router.push({ path: '/' })
            }
          })
        } else {
          return false
        }
      })
    }
  }
}

</script>

<style lang="scss" scoped>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    position: absolute;
    top:180px;
    left:50%;
    transform: translateX(-50%);
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>
