<template>
  <div class="box">
    <div class="box-body">
      <!-- <form-plan></form-plan> -->
      <form-repre></form-repre>
    </div>
  </div>
</template>
<script>
// import formPlan from './form-plan.vue'
import formRepre from './form-repre.vue'
export default {
  components: {
    // formPlan,
    formRepre
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
