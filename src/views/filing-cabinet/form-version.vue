<template>
  <div class="box">
    <template
      v-if="edit"
    >
      <div class="box-header">
        <h3 class="header-title"> <span class="num">02</span>{{boxHeadTitle}}</h3>
      </div>
    </template>
    <div
      v-else
      class="box-header"
    >
      <h3 class="header-title"> <span class="num">02</span>{{boxHeadTitle}}</h3>
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
            :rules="rules"
            :ref="formRepre"
          >
            <template v-if="edit">
              <el-form-item label="版本编号：" prop="vNum">
                <el-input v-model="formRepre.vNum"></el-input>
              </el-form-item>
            </template>
            <ul
              v-else
              class="ulList"
            >
              <li>
                <span class="leftName">版本编号：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.vNum"
                  :disabled="true"
                ></el-input>
              </li>
            </ul>
            <template v-if="edit">
              <el-form-item label="发版编号："  prop="eNum">
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
              v-else
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
            <template v-if="edit">
              <el-form-item label="版本名称：" prop="name">
                <el-input v-model="formRepre.name"></el-input>
              </el-form-item>
            </template>
            <ul
              v-else
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
            <template v-if="edit">
              <el-form-item label="研发项目编号：" prop="pNum">
                <el-input v-model="formRepre.pNum"></el-input>
              </el-form-item>
            </template>
            <ul
              v-else
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
            <template v-if="edit">
              <el-form-item label="演示环境地址：" prop="dUrl">
                <el-input v-model="formRepre.dUrl"></el-input>
              </el-form-item>
            </template>
            <ul
              v-else
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
            <template v-if="edit">
              <el-form-item label="用户名：" prop="username">
                <el-input v-model="formRepre.username"></el-input>
              </el-form-item>
            </template>
            <ul
              v-else
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
            <template v-if="edit">
              <el-form-item label="发版说明：" prop="eNodes">
                <el-input
                  type="textarea"
                  v-model="formRepre.eNodes"
                ></el-input>
              </el-form-item>
            </template>
            <ul
              v-else
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
            <template v-if="edit">
              <el-form-item label="优化功能：" prop="oFunction">
                <el-input
                  type="textarea"
                  v-model="formRepre.oFunction"
                ></el-input>
              </el-form-item>
            </template>
            <ul
              v-else
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
            :rules="rules"
          >
            <template v-if="edit">
              <el-form-item label="创建时间：" prop="time">
                <el-input v-model="formRepre.time"></el-input>
              </el-form-item>
            </template>
            <ul
              v-else
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
            <template v-if="edit">
              <el-form-item label="发版负责人："  prop="ePerson">
                <el-input v-model="formRepre.ePerson"></el-input>
              </el-form-item>
            </template>
            <ul
              v-else
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
            <template v-if="edit">
              <el-form-item label="发版资料SVN地址：" prop="svn">
                <el-input
                  v-model="formRepre.svn"
                  readonly
                ></el-input>
              </el-form-item>
            </template>
            <ul
              v-else
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
            <template v-if="edit">
              <el-form-item label="演示数据库：" prop="sql">
                <el-input v-model="formRepre.sql"></el-input>
              </el-form-item>
            </template>
            <ul
              v-else
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
            <template v-if="edit">
              <el-form-item label="密码" prop="password">
                <el-input v-model="formRepre.password"></el-input>
              </el-form-item>
            </template>
            <ul
              v-else
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
            <template v-if="edit">
              <el-form-item label="新增功能：" prop="addFun">
                <el-input v-model="formRepre.addFun"></el-input>
              </el-form-item>
            </template>
            <ul
              v-else
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
            <template v-if="edit">
              <el-form-item label="遗留问题：" prop="question">
                <el-input
                  type="textarea"
                  v-model="formRepre.question"
                ></el-input>
              </el-form-item>
            </template>
            <ul
              v-else
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
      <template v-if="edit">
        <div class="btn">
          <el-button
            class="cancel"
            round
            @click = "onCancel"
          >取消</el-button>
          <el-button
            class="save"
            type="primary"
            @click="onSubmit(formRepre)"
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
      },
      rules: {
        vNum: [
          { required: true, message: '请输入版本编号', trigger: 'blur' }
        ],
        eNum: [
          { required: true, message: '请输入发版编号', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入版本名次', trigger: 'blur' }
        ],
        pNum: [
          { required: true, message: '请输入研发项目编号', trigger: 'blur' }
        ],
        dUrl: [
          { required: true, message: '请输入演示环境地址', trigger: 'blur' }
        ],
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        eNodes: [
          { required: true, message: '请输入发版说明', trigger: 'blur' }
        ],
        oFunction: [
          { required: true, message: '请输入优化功能', trigger: 'blur' }
        ],
        time: [
          { required: true, message: '请输入创建时间', trigger: 'blur' }
        ],
        ePerson: [
          { required: true, message: '请输入发版负责人', trigger: 'blur' }
        ],
        svn: [
          { required: true, message: '请输入发版资料SVN地址', trigger: 'blur' }
        ],
        sql: [
          { required: true, message: '请输入演示数据库', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        addFun: [
          { required: true, message: '请输入新增功能', trigger: 'blur' }
        ],
        question: [
          { required: true, message: '请输入遗留问题', trigger: 'blur' }
        ]
      },
      edit: false
    }
  },
  methods: {
    onCancel () {
      this.edit = false
    },
    onSubmit (formRepre) {
      // this.edit = false
      this.$refs[formRepre].validate((valid) => {
        console.log(this.$refs[formRepre])
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    onEdit () {
      this.edit = true
    }
  },
  mounted () {
    if (this.$route.params.data) {
      this.boxHeadTitle = this.$route.params.data.label + '--产品版本'
    }
  },
  watch: {
    $route: function (to, from) {
      // from 对象中包含当前地址
      // to 对象中包含目标地址
      // 其实还有一个next参数的
      // 这个参数是控制路由是否跳转的
      // 如果没写，可以不用写next()来代表允许路由跳转，如果写了就必须写next(),否则路由是不会生效的。
      this.boxHeadTitle = this.$route.params.data.label + '--产品版本'
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
