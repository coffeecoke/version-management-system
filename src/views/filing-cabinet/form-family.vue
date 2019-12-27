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
        <el-form
          ref="form"
          :model="sizeForm"
          label-width="120px"
          size="mini"
        >
          <template v-if="edit">
            <el-form-item label="产品族名称：">
              <el-input
                v-model="sizeForm.name"
              ></el-input>
            </el-form-item>
          </template>
          <ul
            v-else
            class="ulList"
          >
            <li>
              <span class="leftName">产品族名称：</span>
              <el-input
                class="leftValue"
                v-model="sizeForm.name"
                :disabled="true"
              ></el-input>
            </li>
          </ul>
          <template v-if="edit">
            <el-form-item label=" 英文缩写：">
              <el-input
                v-model="sizeForm.can"
              ></el-input>

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
                v-model="sizeForm.name"
                :disabled="true"
              ></el-input>
            </li>
          </ul>
          <template v-if="edit">
            <el-form-item label="创建人：">
              <el-input
                v-model="sizeForm.founder"
              ></el-input>

            </el-form-item>
          </template>
          <ul
            v-else
            class="ulList"
          >
            <li>
              <span class="leftName">创建人：</span>
              <el-input
                class="leftValue"
                v-model="sizeForm.founder"
                :disabled="true"
              ></el-input>
            </li>
          </ul>
          <template v-if="edit">
            <el-form-item label="创建时间：">
              <el-date-picker
                value-format="yyyy-MM-dd"
                class="ipt"
                v-model="sizeForm.time"
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
                v-model="sizeForm.time"
                :disabled="true"
              ></el-input>
            </li>
          </ul>
          <template v-if="edit">
            <el-form-item label="创建事由：">
              <el-input
                type="textarea"
                v-model="sizeForm.cause"
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
                v-model="sizeForm.cause"
                :disabled="true"
              ></el-input>
            </li>
          </ul>
        </el-form>
        <template
          v-if="edit"
        >
          <div class="btn-box">
            <div class="btn">
              <el-button
                class="cancel"
                round
                @click = "onCancel"
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
      boxHeadTitle: '',
      model1: '',
      sizeForm: {
        name: '111',
        can: '222',
        founder: '333',
        time: '44',
        cause:
          '创建事由示例创建事由示例创建事由示例创建创建事由示例创建事由示例创建事由示例创建'
      },
      button: '',
      edit: false,
      boxshow: false
    }
  },
  methods: {
    onCancel () {
      this.edit = false
    },
    onSubmit () {
      this.edit = false
    },
    onEdit () {
      this.edit = true
    }
  },
  mounted () {
    if (this.$route.params.data) {
      this.boxHeadTitle = this.$route.params.data.label + '--产品族'
    }
  },
  watch: {
    '$route': function (to, from) {
      // from 对象中包含当前地址
      // to 对象中包含目标地址
      // 其实还有一个next参数的
      // 这个参数是控制路由是否跳转的
      // 如果没写，可以不用写next()来代表允许路由跳转，如果写了就必须写next(),否则路由是不会生效的。
      this.boxHeadTitle = this.$route.params.data.label + '--产品族'
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
  color:#fff;
  background-color:#5d70e9;
  .num {
    margin-right: 5px;
  }
}
.el-form {
  padding: 20px;
  .el-form-item {
    width: 50%;
  }
}

</style>
