<template>
<div class="box">
  <div class="box-header">
    <h3 class="header-title"> <span class="num">02</span>程序包</h3>
  </div>
  <div class="box-body">
    <div class="form-box">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="程序包" name="first">
          <el-form class="form" :rules="rules" :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
            <el-form-item class="tip inputWid margin-20" prop="war" label="去注释war包：">
              <el-input v-model="formLabelAlign.war"></el-input>
            </el-form-item>
            <el-form-item class="tip inputWid margin-20" prop="region" label="去注释源码包：">
              <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item class="tip inputWid margin-20" prop="sm" label="版本说明：">
              <el-input type="textarea" v-model="formLabelAlign.sm"></el-input>
            </el-form-item>
            <p class="notes">注：三种脚本至少有一个不为空</p>
            <el-form-item class="margin-20" prop="ora" label="oracle数据库：">
              <el-input v-model="formLabelAlign.ora"></el-input>
            </el-form-item>
            <el-form-item class="margin-20" prop="db" label="DB2数据库：">
              <el-input v-model="formLabelAlign.db"></el-input>
            </el-form-item>
            <el-form-item class="margin-20" prop="sql" label="Mysql数据库：">
              <el-input v-model="formLabelAlign.sql"></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="补丁" name="second">
          <el-form class="form" :rules1="rules1" :label-position="labelPosition" label-width="120px" :model="formPatch">
            <el-form-item class="tip inputWid margin-20" prop="war1" label="补丁程序包：">
              <el-input v-model="formLabelAlign.war1"></el-input>
            </el-form-item>
            <el-form-item class="tip inputWid margin-20" prop="region" label="补丁源码包：">
              <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item class="tip inputWid margin-20" prop="explain" label="补丁说明：">
              <el-input type="textarea" v-model="formLabelAlign.explain"></el-input>
            </el-form-item>
            <p class="baseInfo">基本信息</p>
            <el-form-item class="inputInfo margin-20" prop="time" label="创建时间：">
              <el-input v-model="formLabelAlign.time"></el-input>
            </el-form-item>
            <el-form-item class="inputInfo margin-20" prop="leader" label="负责人：">
              <el-input v-model="formLabelAlign.leader"></el-input>
            </el-form-item>
            <el-form-item class="inputInfo margin-20" prop="number" label="补丁编号：">
              <el-input v-model="formLabelAlign.number"></el-input>
            </el-form-item>
            <el-form-item class="inputInfo margin-20" prop="name" label="补丁名称：">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item class="inputInfo margin-20" prop="type" label="补丁类型：">
              <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
    </div>
    <div class="btn">
         <el-button
            class="cancel"
            round
          >取消</el-button>
          <el-button
            class="save"
            type="primary"
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
      activeName: 'second',
      labelPosition: 'left',
      formLabelAlign: {
        war: '',
        region: '',
        sm: '',
        ora: '',
        db: '',
        sql: ''
      },
      rules: {
        war: [
          { required: true, message: '请输入产品名称', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请输入英文缩写', trigger: 'blur' }
        ],
        sm: [
          { required: true, message: '请输入产品类型', trigger: 'blur' }
        ],
        ora: [
          { required: true, message: '请输入产品名称', trigger: 'blur' }
        ],
        db: [
          { required: true, message: '请输入英文缩写', trigger: 'blur' }
        ],
        sql: [
          { required: true, message: '请输入产品类型', trigger: 'blur' }
        ]
      },
      formPatch: {
        war: '',
        region: '',
        explain: '',
        time: '',
        leader: '',
        number: '',
        name: '',
        type: ''
      },
      rules1: {
        war1: [
          { required: true, message: '请输入产品名称', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请输入英文缩写', trigger: 'blur' }
        ],
        explain: [
          { required: true, message: '请输入产品类型', trigger: 'blur' }
        ],
        time: [
          { required: true, message: '请输入产品名称', trigger: 'blur' }
        ],
        leader: [
          { required: true, message: '请输入英文缩写', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入产品类型', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请输入产品类型', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
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

.tip /deep/ .el-form-item__label{
  color:#e13c40;
}
.inputWid /deep/ .el-input{
  width:50%;
}
.margin-20{
  margin-bottom:10px;
}
.inputInfo /deep/ .el-input{
  width:40%;
}
.notes{
  width:100%;
  height:40px;
  line-height: 40px;
  background:rgba(245,198,90,0.5);
  color: #75673F;
  padding-left:10px;
  margin-bottom:20px;
}
.baseInfo{
  height:40px;
  line-height: 40px;
  font-size:20px;
  font-weight:bolder;
}

</style>
