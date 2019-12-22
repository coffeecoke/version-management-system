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
    <div else v-show="!boxshow" class="box-header">
      <h3 class="header-title"> <span class="num">02</span>查看产品代</h3>
      <span class="edit" @click="onEdit()"><i class="el-icon-edit"></i>编辑</span>
    </div>
    <div class="box-body">
      <div class="form-box">
      <el-form ref="form" :model="sizeForm" label-width="120px" size="mini">
        <template v-if="edit">
          <el-form-item label="产品族名称：">
              <el-input v-show="boxshow" v-model="sizeForm.name"></el-input>
          </el-form-item>
        </template>
         <ul
              else
              v-show="!boxshow"
              class="ulList"
            >
              <li>
                <span class="leftName">产品族名称：</span>
                <el-input
                  class="leftValue"
                  v-model="sizeForm.name"
                ></el-input>
              </li>
            </ul>
            <template v-if="edit">
        <el-form-item label=" 英文缩写：">

              <el-input v-show="boxshow" v-model="sizeForm.can"></el-input>

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
                  v-model="sizeForm.name"
                ></el-input>
              </li>
            </ul>
            <template v-if="edit">
        <el-form-item label="创建人：">

              <el-input v-show="boxshow" v-model="sizeForm.founder"></el-input>

        </el-form-item>
        </template>
        <ul
              else
              v-show="!boxshow"
              class="ulList"
            >
              <li>
                <span class="leftName">创建人：</span>
                <el-input
                  class="leftValue"
                  v-model="sizeForm.founder"
                ></el-input>
              </li>
            </ul>
            <template v-if="edit">
        <el-form-item label="创建时间：">
              <el-date-picker v-show="boxshow" value-format="yyyy-MM-dd" class="ipt" v-model="sizeForm.time" type="date"
              placeholder="选择日期"></el-date-picker>
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
                  v-model="sizeForm.time"
                ></el-input>
              </li>
            </ul>
            <template v-if="edit">
        <el-form-item label="创建事由：">
              <el-input v-show="boxshow" type="textarea" v-model="sizeForm.cause"></el-input>
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
                  v-model="sizeForm.cause"
                ></el-input>
              </li>
            </ul>
      </el-form>
      <template
              v-if="edit"
              v-show="boxshow"
            >
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
      </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      model1: '',
      sizeForm: {
        name: '111',
        can: '222',
        founder: '333',
        time: '44',
        cause: '创建事由示例创建事由示例创建事由示例创建创建事由示例创建事由示例创建事由示例创建'
      },
      button: '',
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
<style scoped lang="scss">
/* css */
.box-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height:40px;
  padding-left:16px;
  color:#5d70e9;
  background-color:#dcdde5;
  .num {
    margin-right:5px;
  }
}
.edit{
  padding-right:20px;
}
.el-form{
  padding:20px;
  .el-form-item{
    width:50%;
  }
}
.form-box /deep/ .el-input,
.form-box /deep/ .el-textarea {
  width: 100%;
}
.el-form .el-form-item:last-child{
  height:200px;
}
.el-input /deep/ .el-input__inner {
  height: 40px;
  line-height: 40px;
}
.el-select /deep/ .el-input__inner {
  height: 40px;
  line-height: 40px;
}
.el-textarea /deep/ .el-textarea__inner {
  height: 120px;
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
.ulList:last-child{
  border-bottom:solid 1px #ccc;
}
.ulList{
  width:50%;
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
