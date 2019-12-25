<template>
  <div class="box">
    <template
              v-if="edit"
              v-show="boxshow"
            >
    <div class="box-header">
      <h3 class="header-title"> <span class="num">02</span>新增版本</h3>
    </div>
    </template>
    <div else v-show="!boxshow" class="box-header">
      <h3 class="header-title"> <span class="num">02</span>新增版本</h3>
      <span class="edit" @click="onEdit()"><i class="el-icon-edit"></i>编辑</span>
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
              <el-form-item label="版本编号：">
                <el-input v-model="formRepre.vNum"></el-input>
              </el-form-item>
            </template>
            <ul
              else
              v-show="!boxshow"
              class="ulList"
            >
              <li>
                <span class="leftName">版本编号：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.vNum"
                ></el-input>
              </li>
            </ul>
            <template
              v-if="edit"
              v-show="boxshow"
            >
              <el-form-item label="发版编号：">
                <el-select
                  v-model="formRepre.eNum"
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
                <span class="leftName">发版编号：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.eNum"
                ></el-input>
              </li>
            </ul>
            <template
              v-if="edit"
              v-show="boxshow"
            >
              <el-form-item label="版本名称：">
                <el-input
                  v-model="formRepre.name"
                ></el-input>
              </el-form-item>
            </template>
            <ul
              else
              v-show="!boxshow"
              class="ulList"
            >
              <li>
                <span class="leftName">版本名称：</span>
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
              <el-form-item label="研发项目编号：">
                <el-input
                  v-model="formRepre.pNum"
                ></el-input>
              </el-form-item>
            </template>
            <ul
              else
              v-show="!boxshow"
              class="ulList"
            >
              <li>
                <span class="leftName">研发项目编号：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.pNum"
                ></el-input>
              </li>
            </ul>
            <template
              v-if="edit"
              v-show="boxshow"
            >
              <el-form-item label="演示环境地址：">
                <el-input
                  v-model="formRepre.dUrl"
                ></el-input>
              </el-form-item>
            </template>
            <ul
              else
              v-show="!boxshow"
              class="ulList"
            >
              <li>
                <span class="leftName">演示环境地址：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.dUrl"
                ></el-input>
              </li>
            </ul>
            <template
              v-if="edit"
              v-show="boxshow"
            >
              <el-form-item label="用户名：">
                <el-input v-model="formRepre.username"></el-input>
              </el-form-item>
            </template>
            <ul
              else
              v-show="!boxshow"
              class="ulList"
            >
              <li>
                <span class="leftName">用户名：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.username"
                ></el-input>
              </li>
            </ul>
            <template
              v-if="edit"
              v-show="boxshow"
            >
              <el-form-item label="发版说明：">
                <el-input
                  type="textarea"
                  v-model="formRepre.eNodes"
                ></el-input>
              </el-form-item>
            </template>
            <ul
              else
              v-show="!boxshow"
              class="ulList last-list"
            >
              <li>
                <span class="leftName">发版说明：</span>
                <el-input
                  type="textarea"
                  class="leftValue"
                  v-model="formRepre.eNodes"
                ></el-input>
              </li>
            </ul>
            <template
              v-if="edit"
              v-show="boxshow"
            >
              <el-form-item label="优化功能：">
                <el-input
                  type="textarea"
                  v-model="formRepre.oFunction"
                ></el-input>
              </el-form-item>
            </template>
            <ul
              else
              v-show="!boxshow"
              class="ulList last-list"
            >
              <li>
                <span class="leftName">优化功能：</span>
                <el-input
                  type="textarea"
                  class="leftValue"
                  v-model="formRepre.oFunction"
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
            <el-form-item label="创建时间：">
              <el-input
                v-model="formRepre.time"
              ></el-input>
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
            <el-form-item label="发版负责人：">
              <el-input
                v-model="formRepre.ePerson"
              ></el-input>
            </el-form-item>
            </template>
            <ul
              else
              v-show="!boxshow"
              class="ulList"
            >
              <li>
                <span class="leftName">发版负责人：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.ePerson"
                ></el-input>
              </li>
            </ul>
            <template
              v-if="edit"
              v-show="boxshow"
            >
            <el-form-item label="发版资料SVN地址：">
              <el-input
                v-model="formRepre.svn"
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
                <span class="leftName">发版资料SVN地址：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.svn"
                ></el-input>
              </li>
            </ul>
            <template
              v-if="edit"
              v-show="boxshow"
            >
            <el-form-item label="演示数据库：">
              <el-input
                v-model="formRepre.sql"
              ></el-input>
            </el-form-item>
            </template>
            <ul
              else
              v-show="!boxshow"
              class="ulList"
            >
              <li>
                <span class="leftName">演示数据库：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.sql"
                ></el-input>
              </li>
            </ul>
            <template
              v-if="edit"
              v-show="boxshow"
            >
            <el-form-item label="密码">
              <el-input
                v-model="formRepre.password"
              ></el-input>
            </el-form-item>
            </template>
            <ul
              else
              v-show="!boxshow"
              class="ulList"
            >
              <li>
                <span class="leftName">演示数据库：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.password"
                ></el-input>
              </li>
            </ul>
            <template
              v-if="edit"
              v-show="boxshow"
            >
            <el-form-item label="新增功能：">
              <el-input
                v-model="formRepre.addFun"
              ></el-input>
            </el-form-item>
            </template>
            <ul
              else
              v-show="!boxshow"
              class="ulList"
            >
              <li>
                <span class="leftName">新增功能：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.addFun"
                ></el-input>
              </li>
            </ul>
            <template
              v-if="edit"
              v-show="boxshow"
            >
            <el-form-item label="遗留问题：">
              <el-input
                type="textarea"
                v-model="formRepre.question"
              ></el-input>
            </el-form-item>
            </template>
            <ul
              else
              v-show="!boxshow"
              class="ulList last-list"
            >
              <li>
                <span class="leftName">遗留问题：</span>
                <el-input
                  type="textarea"
                  class="leftValue"
                  v-model="formRepre.question"
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
        vNum: '',
        eNum: '',
        name: '',
        pNum: '',
        jk1: '公报',
        jk2: '私报',
        dUrl: '',
        username: '',
        eNodes: '',
        oFunction: '',

        time: '',
        ePerson: '',
        svn: '',
        sql: '',
        password: '',
        addFun: '',
        question: ''
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
.ulList:last-child{
  // border-bottom:solid 1px #ccc;
}
.ulList li {
  display: flex;
}
.ulList li span {
  // width:110px;
  height: 40px;
  line-height: 40px;
  font-size:12px;
  padding-left:5px;
  display: block;
  border-top:solid 1px #ccc;
  border-left:solid 1px #ccc;
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
.box-header{
  display: flex;
  justify-content: space-between;
}
.edit{
  padding-right:20px;
}
.last-list li{
  height:120px!important;
}
.last-list li span{
  height:100%;
}
.last-list li .leftValue .el-input__inner{
  height:100%!important;
}
</style>
