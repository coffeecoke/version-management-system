<template>
  <div class="box">
    <div class="box-header">
      <h3 class="header-title"> <span class="num">02</span>查看产品代</h3>
    </div>
    <div class="box-body">
      <div class="form-box">
        <div class="left-box">
          <el-form  :label-position="labelPosition" :model="formInline"  label-width="100px">
            <el-form-item label="产品名称：">
              <el-input v-model="formInline.name"></el-input>
            </el-form-item>
            <el-form-item label="英文缩写：">
              <el-input v-model="formInline.sx"></el-input>
            </el-form-item>
            <el-form-item label="产品类型：">
              <el-select v-model="formInline.type" placeholder="请选择活动区域">
                <el-option label="区域一" ></el-option>
                <el-option label="区域二" ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="产品接口类型：">
              <el-select v-model="formInline.jk" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="创建时间：">
              <el-date-picker value-format="yyyy-MM-dd" class="ipt" v-model="formInline.time" type="date"
              placeholder="选择日期"></el-date-picker>
            </el-form-item>
            <el-form-item label="产品经理：">
              <el-input v-model="formInline.manage"></el-input>
            </el-form-item>
            <el-form-item label="创建事由：">
              <el-input type="textarea" v-model="formInline.origin"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="right-box">
          <el-form  :label-position="labelPosition" :model="formInline"  label-width="100px">
            <el-form-item label="版本变更记录：">
              <el-input type="textarea" v-model="formInline.writ" disabled></el-input>
            </el-form-item>
            <el-form-item label="演示环境URL：">
              <el-input v-model="formInline.url" disabled></el-input>
            </el-form-item>
            <el-form-item label="数据库地址：">
              <el-input v-model="formInline.location" disabled></el-input>
            </el-form-item>
            <el-form-item label="用户名/密码：">
              <el-input v-model="formInline.admin" disabled></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="btn-box">
        <div class="btn">
          <el-button class="cancel" round>取消</el-button>
          <el-button class="save" type="primary" round>保存</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      labelPosition: 'left',
      formInline: {
        name: '',
        sx: '',
        type: '',
        jk: '',
        time: '',
        manage: '',
        origin: '',
        writ: '版本登记版本登记版本登记版本登记版本登记版本登记',
        url: 'http://10.10.38',
        location: 'http://10.10.2',
        admin: 'admin/admin'
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>
<style lang="scss" scoped>
.form-box{
  padding:20px;
  display: flex;
  .left-box{
    width:50%;
  }
  .right-box{
    flex:1;
  }
}
.form-box /deep/ .el-input,.form-box /deep/ .el-textarea{
  width:80%;
}
.el-form-item{
  margin-bottom:8px;
}
.el-select{
  display: block;
}
.btn-box{
  width:100%;
  height:100px;
  // background: #ccc;
  position: fixed;
  bottom:0px;
}
.btn{
  display: block;
  margin:0 auto;
  width:100%;
  position: absolute;
  left:50%;
  transform:translateX(-30%);
  top:10px;
}
.btn .cancel{
  text-align: center;
  background: #EBEBEB;
  border:none;
  min-width:100px;
}
.btn .save{
  background: #5D70EA;
  border:none;
  min-width:100px;
}
.el-form-item /deep/ .el-form-item__label{
  font-size:12px;
}
.el-input /deep/ .el-input__inner{
  height:30px;
  line-height:30px;
}
.el-select /deep/ .el-input__inner{
  height:30px;
  line-height:30px;
}
</style>
