<template>
  <div class="box">
    <template v-if="edit">
      <div class="box-header">
        <h3 class="header-title"> <span class="num">02</span>{{boxHeadTitle}}</h3>
      </div>
    </template>
    <div
      v-else
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
            <template v-if="edit">
              <el-form-item label="产品名称：">
                <el-input v-model="formRepre.name"></el-input>
              </el-form-item>
            </template>
            <ul
              v-else
              class="ulList"
            >
              <li>
                <span class="leftName">产品名称：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.name"
                  :disabled="true"
                ></el-input>
              </li>
            </ul>
            <template v-if="edit">
              <el-form-item label="英文缩写：">
                <el-input v-model="formRepre.sx"></el-input>
              </el-form-item>
            </template>
            <ul
              v-else
              class="ulList"
            >
              <li>
                <span class="leftName">英文缩写：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.sx"
                  :disabled="true"
                ></el-input>
              </li>
            </ul>
            <template v-if="edit">
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
              v-else
              class="ulList"
            >
              <li>
                <span class="leftName">产品类型：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.type"
                  :disabled="true"
                ></el-input>
              </li>
            </ul>
            <template v-if="edit">
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
              v-else
              class="ulList"

            >
              <li>
                <span class="leftName">产品接口类型：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.jk"
                  :disabled="true"
                ></el-input>
              </li>
            </ul>
            <template v-if="edit">
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
              v-else
              class="ulList"
            >
              <li>
                <span class="leftName">创建时间：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.time"
                  :disabled="true"
                ></el-input>
              </li>
            </ul>
            <template v-if="edit">
              <el-form-item label="产品经理：">
                <el-input v-model="formRepre.manage"></el-input>
              </el-form-item>
            </template>
            <ul
              v-else
              class="ulList"
            >
              <li>
                <span class="leftName">产品经理：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.manage"
                  :disabled="true"
                ></el-input>
              </li>
            </ul>
            <template v-if="edit">
              <el-form-item label="创建事由：">
                <el-input
                  type="textarea"
                  v-model="formRepre.origin"
                ></el-input>
              </el-form-item>
            </template>
            <ul
              v-else
              class="ulList last-list"
            >
              <li>
                <span class="leftName">创建事由：</span>
                <el-input
                  type="textarea"
                  class="leftValue"
                  v-model="formRepre.origin"
                  :disabled="true"
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
            <template v-if="edit">
              <el-form-item label="版本变更记录：">
                <el-input
                  type="textarea"
                  v-model="formRepre.writ"
                  readonly
                ></el-input>
              </el-form-item>
            </template>
            <ul
              v-else
              class="ulList last-list"
            >
              <li>
                <span class="leftName">版本变更记录：</span>
                <el-input
                  type="textarea"
                  class="leftValue"
                  v-model="formRepre.writ"
                  :disabled="true"
                ></el-input>
              </li>
            </ul>
            <template v-if="edit">
              <el-form-item label="演示环境URL：">
                <el-input
                  v-model="formRepre.url"
                  readonly
                ></el-input>
              </el-form-item>
            </template>
            <ul
              v-else
              class="ulList"
            >
              <li>
                <span class="leftName">演示环境URL：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.url"
                  :disabled="true"
                ></el-input>
              </li>
            </ul>
            <template v-if="edit">
              <el-form-item label="数据库地址：">
                <el-input
                  v-model="formRepre.location"
                  readonly
                ></el-input>
              </el-form-item>
            </template>
            <ul
              v-else
              class="ulList"
            >
              <li>
                <span class="leftName">数据库地址：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.location"
                  :disabled="true"
                ></el-input>
              </li>
            </ul>
            <template v-if="edit">
              <el-form-item label="用户名/密码：">
                <el-input
                  v-model="formRepre.admin"
                  disabled
                ></el-input>
              </el-form-item>
            </template>
            <ul
              v-else
              class="ulList"
            >
              <li>
                <span class="leftName">用户名/密码：</span>
                <el-input
                  class="leftValue"
                  v-model="formRepre.admin"
                  :disabled="true"
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
      boxHeadTitle: '',
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
  },
  mounted () {
    if (this.$route.params.data) {
      this.boxHeadTitle = this.$route.params.data.label + '--产品代'
    }
  },
  watch: {
    $route: function (to, from) {
      // from 对象中包含当前地址
      // to 对象中包含目标地址
      // 其实还有一个next参数的
      // 这个参数是控制路由是否跳转的
      // 如果没写，可以不用写next()来代表允许路由跳转，如果写了就必须写next(),否则路由是不会生效的。
      this.boxHeadTitle = this.$route.params.data.label + '--产品代'
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
