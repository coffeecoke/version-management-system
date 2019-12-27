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
            label-width="100px"
          >
            <el-form-item label="版本编号：">
              <el-input v-model="formRepre.vNum"></el-input>
            </el-form-item>
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
            <el-form-item label="版本名称：">
              <el-input v-model="formRepre.name"></el-input>
            </el-form-item>
            <el-form-item label="研发项目编号：">
              <el-input v-model="formRepre.pNum"></el-input>
            </el-form-item>
            <el-form-item label="演示环境地址：">
              <el-input v-model="formRepre.dUrl"></el-input>
            </el-form-item>
            <el-form-item label="用户名：">
              <el-input v-model="formRepre.username"></el-input>
            </el-form-item>
            <el-form-item label="发版说明：">
              <el-input
                type="textarea"
                v-model="formRepre.eNodes"
              ></el-input>
            </el-form-item>
            <el-form-item label="优化功能：">
              <el-input
                type="textarea"
                v-model="formRepre.oFunction"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="right-box">
          <el-form
            :label-position="labelPosition"
            :model="formRepre"
            label-width="100px"
          >
            <el-form-item label="创建时间：">
              <el-input v-model="formRepre.time"></el-input>
            </el-form-item>
            <el-form-item label="发版负责人：">
              <el-input v-model="formRepre.ePerson"></el-input>
            </el-form-item>
            <el-form-item label="发版资料SVN地址：">
              <el-input
                v-model="formRepre.svn"
                readonly
              ></el-input>
            </el-form-item>
            <el-form-item label="演示数据库：">
              <el-input v-model="formRepre.sql"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="formRepre.password"></el-input>
            </el-form-item>
            <el-form-item label="新增功能：">
              <el-input v-model="formRepre.addFun"></el-input>
            </el-form-item>
            <el-form-item label="遗留问题：">
              <el-input
                type="textarea"
                v-model="formRepre.question"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
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
      boxHeadTitle: '',
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
      }
    }
  },
  methods: {
    onSubmit () {

    },
    onEdit () {

    }
  },
  mounted () {
    this.boxHeadTitle = this.$route.query.nodeName + '--新增产品代'
  },
  watch: {
    '$route': function (to, from) {
      // from 对象中包含当前地址
      // to 对象中包含目标地址
      // 其实还有一个next参数的
      // 这个参数是控制路由是否跳转的
      // 如果没写，可以不用写next()来代表允许路由跳转，如果写了就必须写next(),否则路由是不会生效的。
      this.boxHeadTitle = to.query.nodeName + '--新增产品代'
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

</style>
