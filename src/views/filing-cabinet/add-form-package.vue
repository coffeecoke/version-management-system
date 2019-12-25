<template>
<div class="box">
  <div class="box-header">
    <h3 class="header-title"> <span class="num">02</span>程序包</h3>
  </div>
  <div class="box-body">
    <div class="form-box">
        <h4 class="package">程序包</h4>
        <el-form class="form" label-width="120px" :model="formLabelAlign">
          <el-form-item label="去注释war包：">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="去注释源码包：">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
        </el-form>
        <p class="notes">注：三种脚本至少有一个不为空</p>
        <el-form class="form" label-width="120px" :model="formLabelAlign1">
          <el-form-item label="oracle数据库：">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="DB2数据库：">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
          <el-form-item label="Mysql数据库：">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
        </el-form>
    </div>
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
</template>
<script>
export default {
  data () {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: ''
      },
      formLabelAlign1: {
        name: '',
        region: ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.form-box {
  padding:20px;
}
.package{
  padding:10px 0;
}
.form{
  width:50%;
}
.notes{
  width:60%;
  height:40px;
  line-height: 40px;
  background:rgba(245,198,90,0.5);
  color: #75673F;
  padding-left:10px;
  margin-bottom:20px;
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
</style>
