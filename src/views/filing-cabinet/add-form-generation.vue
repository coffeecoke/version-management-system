<template>
  <div class="box">
    <div class="box-header">
      <h3 class="header-title"> <span class="num">02</span>{{boxHeadTitle}}</h3>
    </div>
    <div class="box-body">
      <div class="form-box">
        <div class="left-box">
          <el-form
            :label-position="labelPosition"
            :model="formRepre"
            :rules="formRepre"
            label-width="100px"
          >
            <el-form-item label="产品名称：" prop="name">
              <el-input v-model="formRepre.name"></el-input>
            </el-form-item>
            <el-form-item label="英文缩写：" prop="sx">
              <el-input v-model="formRepre.sx"></el-input>
            </el-form-item>
            <el-form-item label="产品类型：" prop="type">
              <el-select
                v-model="formRepre.type"
                placeholder="请选择活动区域"
              >
                <el-option
                  :label="formRepre.jk1"
                  :value="formRepre.jk1"
                ></el-option>
                <el-option
                  :label="formRepre.jk2"
                  :value="formRepre.jk2"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="产品接口类型：" prop="jk">
              <el-select
                v-model="formRepre.jk"
                placeholder="请选择活动区域"
              >
                <el-option
                  :label="formRepre.jk3"
                  :value="formRepre.jk3"
                ></el-option>
                <el-option
                  :label="formRepre.jk4"
                  :value="formRepre.jk4"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="创建时间：" prop="time">
              <el-date-picker
                value-format="yyyy-MM-dd"
                class="ipt"
                v-model="formRepre.time"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="产品经理：" prop="manage">
              <el-input v-model="formRepre.manage"></el-input>
            </el-form-item>
            <el-form-item label="创建事由："  prop="origin">
              <el-input
                type="textarea"
                v-model="formRepre.origin"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="right-box">
          <el-form
            :label-position="labelPosition"
            :model="formRepre"
            label-width="100px"
            :rules="rules"
            :ref="formRepre"
          >
            <el-form-item label="版本变更记录：" prop="writ">
              <el-input
                type="textarea"
                v-model="formRepre.writ"
                readonly
              ></el-input>
            </el-form-item>
            <el-form-item label="演示环境URL："  prop="url">
              <el-input
                v-model="formRepre.url"
                readonly
              ></el-input>
            </el-form-item>
            <el-form-item label="数据库地址："  prop="location">
              <el-input
                v-model="formRepre.location"
                readonly
              ></el-input>
            </el-form-item>
            <el-form-item label="用户名/密码："  prop="admin">
              <el-input
                v-model="formRepre.admin"
                disabled
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="btn-box">
        <el-button
          class="cancel"
          round
        >取消</el-button>
        <el-button
          class="save"
          type="primary"
          @click="onSubmit(formRepre)"
          round
        >保存</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      boxHeadTitle: '',
      labelPosition: 'right',
      formRepre: {
        name: '',
        sx: '',
        type: '',
        jk: '',
        jk1: '',
        jk2: '',
        jk3: '',
        jk4: '',
        time: '',
        manage: '',
        origin: '',
        writ: '',
        url: '',
        location: '',
        admin: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入产品名称', trigger: 'blur' }
        ],
        sx: [
          { required: true, message: '请输入英文缩写', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请输入产品类型', trigger: 'blur' }
        ],
        jk: [
          { required: true, message: '请输入接口类型', trigger: 'blur' }
        ],
        time: [
          { required: true, message: '请选择时间', trigger: 'change' }
        ],
        manage: [
          { required: true, message: '请输入产品经理', trigger: 'blur' }
        ],
        origin: [
          { required: true, message: '请输入创建事由', trigger: 'blur' }
        ],
        writ: [
          { required: true, message: '请输入版本变更记录', trigger: 'blur' }
        ],
        url: [
          { type: 'array', required: true, message: '请输入演示环境URL', trigger: 'blur' }
        ],
        location: [
          { type: 'array', required: true, message: '请输入数据库地址', trigger: 'blur' }
        ],
        admin: [
          { type: 'array', required: true, message: '请输入用户名/密码', trigger: 'blur' }
        ]
      },
      edit: true,
      boxshow: true
    }
  },
  methods: {
    onSubmit (formRepre) {
      this.$refs[formRepre].validate((valid) => {
        console.log(this.$refs[formRepre])
        if (valid) {
          alert('submit!')
          // 左侧树添加新增节点
          this.appendChildNode()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    appendChildNode () {
      var nodeData = this.$route.params.data
      console.log(nodeData)
      const newChild = {
        id: 345,
        showCheckbox: false,
        label: '新增',
        nodeType: 'pg',
        children: []
      }
      if (!nodeData.children) {
        this.$set(nodeData, 'children', [])
      }
      nodeData.children.push(newChild)
    }
  },
  mounted () {
    this.boxHeadTitle = this.$route.params.data.label + '--新增产品代'
  },
  watch: {
    '$route': function (to, from) {
      // from 对象中包含当前地址
      // to 对象中包含目标地址
      // 其实还有一个next参数的
      // 这个参数是控制路由是否跳转的
      // 如果没写，可以不用写next()来代表允许路由跳转，如果写了就必须写next(),否则路由是不会生效的。
      this.boxHeadTitle = to.params.data.label + '--新增产品代'
    }
  }
}
</script>
<style lang="scss" scoped>
.form-box {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  .left-box {
    width: 48%;
  }
  .right-box {
    width: 48%;
  }
}
.form-box /deep/ .el-input,
.form-box /deep/ .el-textarea {
  width: 100%;
}
.el-textarea /deep/ .el-textarea__inner {
  height: 120px;
}
.el-select {
  display: block;
}
.btn-box {
  width: 100%;
  text-align: center;
  padding:10px;
}
.btn {
  margin: 10px auto;
  width: 100%;
  text-align: center;
}

.btn .cancel {
  background: #ebebeb;
  border: none;
  min-width: 100px;
}
.btn .save {
  background: #5d70ea;
  border: none;
  min-width: 100px;
}
.el-form-item /deep/ .el-form-item__label {
  font-size: 12px;
}
.el-input /deep/ .el-input__inner {
  height: 40px;
  line-height: 40px;
}
.el-select /deep/ .el-input__inner {
  height: 40px;
  line-height: 40px;
}
.ulList:last-child {
  border-bottom: solid 1px #ccc;
}
.ulList li {
  display: flex;
}
.ulList li span {
  // width:110px;
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  padding-left: 5px;
  display: block;
  border-top: solid 1px #ccc;
  border-left: solid 1px #ccc;
}
.leftName {
  width: 140px;
  background: #f5f5f5;
}
.rightValue {
  background: #fff;
}
.leftValue /deep/ .el-input__inner {
  border-radius: 0px !important;
  border-bottom: 0;
  border-top: solid 1px #ccc;
  outline: none;
}
.leftValue .el-input:last-child /deep/ .el-input__inner {
  border-bottom: solid 1px #ccc !important;
}
.box-header {
  display: flex;
  justify-content: space-between;
}
.edit {
  padding-right: 20px;
}
.last-list li {
  height: 120px !important;
}
.last-list li span {
  height: 100%;
}
.last-list li .leftValue .el-input__inner {
  height: 100% !important;
}
</style>
