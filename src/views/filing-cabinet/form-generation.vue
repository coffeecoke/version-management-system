<template>
  <div class="box">
    <template
      v-if="edit"
      v-show="boxshow"
    >
      <div class="box-header">
        <h3 class="header-title"> <span class="num">02</span>查看产品代</h3>
      </div>
    </template>
    <div
      else
      v-show="!boxshow"
      class="box-header"
    >
      <h3 class="header-title"> <span class="num">02</span>查看产品代</h3>
      <span
        class="edit"
        @click="onEdit()"
      ><i class="el-icon-edit"></i>编辑</span>
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
              v-if="edit"
              v-show="boxshow"
            >
              <el-form-item label="产品名称：">
                <el-input v-model="formRepre.name"></el-input>
              </el-form-item>
            </template>
            <ul
              else
              v-show="!boxshow"
              class="ulList"
            >
              <li>
                <span class="leftName">产品名称：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.name"
                ></el-input>
              </li>
            </ul>
            <template
              v-if="edit"
              v-show="boxshow"
            >
              <el-form-item label="英文缩写：">
                <el-input v-model="formRepre.sx"></el-input>
              </el-form-item>
            </template>
            <ul
              else
              v-show="!boxshow"
              class="ulList"
            >
              <li>
                <span class="leftName">英文缩写：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.sx"
                ></el-input>
              </li>
            </ul>
            <template
              v-if="edit"
              v-show="boxshow"
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
              v-show="!boxshow"
              class="ulList"
            >
              <li>
                <span class="leftName">产品类型：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.type"
                ></el-input>
              </li>
            </ul>
            <template
              v-if="edit"
              v-show="boxshow"
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
              v-show="!boxshow"
              class="ulList"
            >
              <li>
                <span class="leftName">产品接口类型：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.jk"
                ></el-input>
              </li>
            </ul>
            <template
              v-if="edit"
              v-show="boxshow"
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
              v-show="!boxshow"
              class="ulList"
            >
              <li>
                <span class="leftName">创建时间：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.time"
                ></el-input>
              </li>
            </ul>
            <template
              v-if="edit"
              v-show="boxshow"
            >
              <el-form-item label="产品经理：">
                <el-input v-model="formRepre.manage"></el-input>
              </el-form-item>
            </template>
            <ul
              else
              v-show="!boxshow"
              class="ulList"
            >
              <li>
                <span class="leftName">产品经理：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.manage"
                ></el-input>
              </li>
            </ul>
            <template
              v-if="edit"
              v-show="boxshow"
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
              v-show="!boxshow"
              class="ulList last-list"
            >
              <li>
                <span class="leftName">创建事由：</span>
                <el-input
                  type="textarea"
                  class="leftValue"
                  v-model="formRepre.origin"
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
            <template
              v-if="edit"
              v-show="boxshow"
            >
              <el-form-item label="版本变更记录：">
                <el-input
                  type="textarea"
                  v-model="formRepre.writ"
                  readonly
                ></el-input>
              </el-form-item>
            </template>
            <ul
              else
              v-show="!boxshow"
              class="ulList last-list"
            >
              <li>
                <span class="leftName">版本变更记录：</span>
                <el-input
                  type="textarea"
                  class="leftValue"
                  v-model="formRepre.writ"
                ></el-input>
              </li>
            </ul>
            <template
              v-if="edit"
              v-show="boxshow"
            >
              <el-form-item label="演示环境URL：">
                <el-input
                  v-model="formRepre.url"
                  readonly
                ></el-input>
              </el-form-item>
            </template>
            <ul
              else
              v-show="!boxshow"
              class="ulList"
            >
              <li>
                <span class="leftName">演示环境URL：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.url"
                ></el-input>
              </li>
            </ul>
            <template
              v-if="edit"
              v-show="boxshow"
            >
              <el-form-item label="数据库地址：">
                <el-input
                  v-model="formRepre.location"
                  readonly
                ></el-input>
              </el-form-item>
            </template>
            <ul
              else
              v-show="!boxshow"
              class="ulList"
            >
              <li>
                <span class="leftName">数据库地址：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.location"
                ></el-input>
              </li>
            </ul>
            <template
              v-if="edit"
              v-show="boxshow"
            >
              <el-form-item label="用户名/密码：">
                <el-input
                  v-model="formRepre.admin"
                  disabled
                ></el-input>
              </el-form-item>
            </template>
            <ul
              else
              v-show="!boxshow"
              class="ulList"
            >
              <li>
                <span class="leftName">用户名/密码：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.admin"
                ></el-input>
              </li>
            </ul>
          </el-form>
        </div>
      </div>
      <template
        v-if="edit"
        v-show="boxshow"
      >
        <div class="btn-box">
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
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      labelPosition: 'right',
      formRepre: {
        name: '监管报送系统',
        sx: 'jdcbdhfbh',
        type: 'APR_WER',
        jk: '报文类型',
        jk1: '明细报文类',
        jk2: '明细报文类',
        jk3: '明细报文类',
        jk4: '明细报文类',
        time: '2019-07-30',
        manage: 'admin',
        origin: '版本登记版本登记版本登记版本登记版本登记版本登记',
        writ: '版本登记版本登记版本登记版本登记版本登记版本登记',
        url: 'http://10.10.38',
        location: 'http://10.10.2',
        admin: 'admin/admin'
      },
      edit: true,
      boxshow: true
    }
  },
  methods: {
    onSubmit () {
      this.edit = false
      this.boxshow = false
    },
    onEdit () {
      this.edit = true
      this.boxshow = true
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
.el-form-item {
  margin-bottom: 8px;
}
.el-select {
  display: block;
}
.btn-box {
  width: 100%;
  text-align: center;
  // background: #ccc;
  // position: fixed;
  // bottom: 0px;
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
