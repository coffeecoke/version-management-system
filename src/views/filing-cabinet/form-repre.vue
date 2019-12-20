<template>
  <div class="box">
    <div class="box-header">
      <h3 class="header-title"> <span class="num">02</span>查看产品代</h3>
    </div>
    <div class="box-body">
      <div class="form-box">
        <div class="left-box">
          <el-form
            :label-position="labelPosition"
            :model="formRepre"
            label-width="100px"
          >
            <template
              v-if="formRepre.edit"
              v-show="formRepre.boxshow"
            >
              <el-form-item label="产品名称：">
                <el-input v-model="formRepre.name"></el-input>
              </el-form-item>
            </template>
            <ul
              else
              v-show="!formRepre.boxshow"
              class="ulList"
            >
              <li>
                <span class="leftName">产品名称111：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.name"
                ></el-input>
              </li>
            </ul>
            <template
              v-if="formRepre.edit"
              v-show="formRepre.boxshow"
            >
              <el-form-item label="英文缩写：">
                <el-input v-model="formRepre.sx"></el-input>
              </el-form-item>
            </template>
            <ul
              else
              v-show="!formRepre.boxshow"
              class="ulList"
            >
              <li>
                <span class="leftName">产品名称111：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.sx"
                ></el-input>
              </li>
            </ul>
            <template
              v-if="formRepre.edit"
              v-show="formRepre.boxshow"
            >
              <el-form-item label="产品类型：">
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
            </template>
            <ul
              else
              v-show="!formRepre.boxshow"
              class="ulList"
            >
              <li>
                <span class="leftName">产品名称111：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.sx"
                ></el-input>
              </li>
            </ul>
            <template
              v-if="formRepre.edit"
              v-show="formRepre.boxshow"
            >
              <el-form-item label="产品接口类型：">
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
            </template>
            <ul
              else
              v-show="!formRepre.boxshow"
              class="ulList"
            >
              <li>
                <span class="leftName">产品名称111：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.sx"
                ></el-input>
              </li>
            </ul>
            <template
              v-if="formRepre.edit"
              v-show="formRepre.boxshow"
            >
              <el-form-item label="创建时间：">
                <el-date-picker
                  value-format="yyyy-MM-dd"
                  class="ipt"
                  v-model="formRepre.time"
                  type="date"
                  placeholder="选择日期"
                ></el-date-picker>
              </el-form-item>
            </template>
            <ul
              else
              v-show="!formRepre.boxshow"
              class="ulList"
            >
              <li>
                <span class="leftName">产品名称111：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.sx"
                ></el-input>
              </li>
            </ul>
            <template
              v-if="formRepre.edit"
              v-show="formRepre.boxshow"
            >
              <el-form-item label="产品经理：">
                <el-input v-model="formRepre.manage"></el-input>
              </el-form-item>
            </template>
            <ul
              else
              v-show="!formRepre.boxshow"
              class="ulList"
            >
              <li>
                <span class="leftName">产品名称111：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.sx"
                ></el-input>
              </li>
            </ul>
            <template
              v-if="formRepre.edit"
              v-show="formRepre.boxshow"
            >
              <el-form-item label="创建事由：">
                <el-input
                  type="textarea"
                  v-model="formRepre.origin"
                ></el-input>
              </el-form-item>
            </template>
            <ul
              else
              v-show="!formRepre.boxshow"
              class="ulList"
            >
              <li>
                <span class="leftName">产品名称111：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.sx"
                ></el-input>
              </li>
            </ul>
          </el-form>
        </div>
        <div class="right-box">
          <el-form
            :label-position="labelPosition"
            :model="formRepre"
            label-width="100px"
          >
            <el-form-item label="版本变更记录：">
              <el-input
                type="textarea"
                v-model="formRepre.writ"
                readonly
              ></el-input>
            </el-form-item>
            <el-form-item label="演示环境URL：">
              <el-input
                v-model="formRepre.url"
                readonly
              ></el-input>
            </el-form-item>
            <el-form-item label="数据库地址：">
              <el-input
                v-model="formRepre.location"
                readonly
              ></el-input>
            </el-form-item>
            <el-form-item label="用户名/密码：">
              <el-input
                v-model="formRepre.admin"
                disabled
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="btn-box">
        <div class="btn">
          <el-button
            class="cancel"
            round
          >取消</el-button>
          <el-button
            class="save"
            type="primary"
            @click="onSubmit"
            round
          >保存</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      labelPosition: 'right',
      formRepre: {
        name: '111',
        sx: '222',
        type: '333',
        jk: '',
        jk1: '123',
        jk2: '234',
        jk3: '123',
        jk4: '234',
        time: '',
        manage: '',
        origin: '',
        writ: '版本登记版本登记版本登记版本登记版本登记版本登记',
        url: 'http://10.10.38',
        location: 'http://10.10.2',
        admin: 'admin/admin',
        edit: true,
        boxshow: true
      }
    }
  },
  methods: {
    onSubmit () {
      this.formRepre.edit = false
      this.formRepre.boxshow = false
    }
  }
}
</script>
<style lang="scss" scoped>
.form-box {
  padding: 20px;
  display: flex;
  .left-box {
    width: 50%;
  }
  .right-box {
    flex: 1;
  }
}
.form-box /deep/ .el-input,
.form-box /deep/ .el-textarea {
  width: 100%;
}
.el-textarea /deep/ .el-textarea__inner {
  height: 140px;
}
.el-form-item {
  margin-bottom: 8px;
}
.el-select {
  display: block;
}
.btn-box {
  width: 100%;
  height: 100px;
  // background: #ccc;
  position: fixed;
  bottom: 0px;
}
.btn {
  display: block;
  margin: 0 auto;
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-30%);
  top: 10px;
}
.btn .cancel {
  text-align: center;
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
.ulList {
}
.ulList li {
  display: flex;
}
.ulList li span {
  // width:110px;
  height: 40px;
  line-height: 40px;
  display: block;
}
.leftName {
  width: 140px;
  background: #F5F5F5;
}
.rightValue {
  background: #fff;
}
.leftValue /deep/ .el-input__inner{
  border-radius: 0px!important;
  border-bottom:0;
  border-top: solid 1px #ccc;
  outline: none;
}
.leftValue .el-input:last-child /deep/ .el-input__inner{
  border-bottom:solid 1px #ccc!important;
}
</style>
