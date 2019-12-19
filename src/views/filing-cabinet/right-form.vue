<template>
  <div class="box">
    <div class="box-header">
      <h3 class="header-title"> <span class="num">02</span>查看产品信息</h3>
      <span class="edit" :model="model1" @click="choosePer()"><i class="el-icon-edit"></i>编辑</span>
    </div>
    <div class="box-body">
      <el-form ref="form" :model="sizeForm" label-width="120px" size="mini">
        <el-form-item label="产品族名称：">
          <template>
            <template v-if="sizeForm.edit">
              <el-input v-show="downIcon" v-model="sizeForm.name"></el-input>
            </template>
            <span v-show="!downIcon" else>{{sizeForm.name}}</span>
          </template>
        </el-form-item>
        <el-form-item label=" 英文缩写：">
          <template>
            <template v-if="sizeForm.edit">
              <el-input v-show="downIcon" v-model="sizeForm.can"></el-input>
            </template>
            <span else v-show="!downIcon">{{sizeForm.can}}</span>
          </template>
        </el-form-item>
        <el-form-item label="创建人：">
          <template>
            <template v-if="sizeForm.edit">
              <el-input v-show="downIcon" v-model="sizeForm.founder"></el-input>
            </template>
            <span else v-show="!downIcon">{{sizeForm.founder}}</span>
          </template>
        </el-form-item>
        <el-form-item label="创建时间：">
          <template>
            <template v-if="sizeForm.edit">
              <el-date-picker v-show="downIcon" value-format="yyyy-MM-dd" class="ipt" v-model="sizeForm.time" type="date"
              placeholder="选择日期"></el-date-picker>
            </template>
            <span else v-show="!downIcon">{{sizeForm.time}}</span>
          </template>
        </el-form-item>
        <el-form-item label="创建事由：">
          <template>
            <template v-if="sizeForm.edit">
              <el-input v-show="downIcon" type="textarea" v-model="sizeForm.cause"></el-input>
            </template>
            <span else v-show="!downIcon">{{sizeForm.cause}}</span>
          </template>
        </el-form-item>
      </el-form>
      <el-button class="button" @click="onSubmit" type="primary" v-if="sizeForm.edit">提交</el-button>
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
        cause: '创建事由示例创建事由示例创建事由示例创建创建事由示例创建事由示例创建事由示例创建',
        edit: false,
        downIcon: false
      },
      button: ''
    }
  },
  methods: {
    choosePer () {
      this.sizeForm.edit = !this.sizeForm.edit
      this.downIcon = !this.downIcon
    },
    onSubmit () {
      this.sizeForm.edit = true
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
.el-form .el-form-item:last-child{
  height:200px;
}
.el-form-item--mini /deep/ .el-form-item__label{
      height:40px;
      line-height: 40px;
      background: #F5F5F5;
      text-align: left;
      padding-left:10px;
      border-top:solid 1px #DCDFE6;
}
.el-input--mini /deep/ .el-input__inner{
      height:40px;
      border-radius: 0;
      margin-top:0px;
      border-radius: 0;
      border:none;
      border-top:solid 1px #ccc;
      border-right:solid 1px #ccc;
}
 .el-form /deep/ .el-form-item{
    margin-bottom:0px;
 }
 .el-textarea /deep/ .el-textarea__inner{
   border-radius: 0;
   border-left:none;
 }
 .el-form .el-form-item:last-child /deep/  .el-form-item__label{
  height:200px;
}
.el-form .el-form-item:last-child /deep/  .el-textarea__inner{
  height:200px;
}
.el-date-editor{
  width:100%;
}
.el-form-item span{
  border-top:solid 1px #ccc;
  border-right:solid 1px #ccc;
  height:40px;
  line-height: 40px;
  margin-top:0;
  // padding:19px 0;
  width:100%;
  display: inline-block;
  padding-left:15px;
  font-size:12px;
  color: #606266;
}
 .el-form .el-form-item:last-child /deep/  span{
  height:200px;
  line-height: 20px;
  padding-top:4px;
  border-bottom:solid 1px #ccc;
}
.el-form-item--mini /deep/ .el-form-item__content{
  line-height: 0;
}
.button{
  margin-top:10px;
  margin-left:20px;
}
</style>
