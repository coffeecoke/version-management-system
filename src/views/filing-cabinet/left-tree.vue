<template>
  <div class="box">
    <div class="box-header">
      <h3 class="header-title"> <span class="num">01</span> 选择你要查看的产品</h3>
    </div>
    <div class="box-body">
      <elTree2
        :load="loadNode"
        lazy
        show-checkbox
        node-key="id"
        ref="tree"
        highlight-current
        accordion
        :props="defaultProps"
      >
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <el-button
            type="text"
            size="mini"
            @click="() => show(node, data)">
            Append
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="() => remove(node, data)">
            Delete
          </el-button>
        </span>
      </span>
      </elTree2>
    </div>
  </div>
</template>
<script>
import elTree2 from '@/components/tree/src/tree.vue'
export default {
  components: {
    elTree2
  },
  data () {
    return {
      defaultProps: {
        children: 'children',
        label: 'label',
        isLeaf: 'isLeaf'
      }
    }
  },
  methods: {
    loadNode (node, resolve) {
      console.log(node.data)
      if (node.level === 0) {
        return resolve([{
          id: 1,
          showCheckbox: false,
          label: '一级 1',
          nodeType: '产品族',
          hasChild: true
        }, {
          id: 2,
          showCheckbox: false,
          label: '一级 2',
          hasChild: false,
          nodeType: '产品族'
        }, {
          id: 3,
          showCheckbox: false,
          label: '一级 3',
          hasChild: false,
          nodeType: '产品族'
        }])
      }
      if (!node.data.hasChild) return resolve([])
      setTimeout(() => {
        const data = [{
          label: 'leaf',
          hasChild: true,
          children: [{
            id: 11,
            label: '一级 11'
          }]
        }, {
          label: 'zone',
          hasChild: false
        }]
        resolve(data)
      }, 500)
    },
    show (node, data) {
      console.log(node)
      console.log(data)
    },
    getCheckedNodes () {
      console.log(this.$refs.tree.getCheckedNodes())
    },
    getCheckedKeys () {
      console.log(this.$refs.tree.getCheckedKeys())
    },
    setCheckedNodes () {
      this.$refs.tree.setCheckedNodes([{
        id: 5,
        label: '二级 2-1'
      }, {
        id: 9,
        label: '三级 1-1-1'
      }])
    },
    setCheckedKeys () {
      this.$refs.tree.setCheckedKeys([3])
    },
    resetChecked () {
      this.$refs.tree.setCheckedKeys([])
    }
  },

  activated () {}
}
</script>
<style scoped lang="scss">
/* css */
.box-header {
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: 16px;
  color: #5d70e9;
  background-color: #dcdde5;
  .num {
    margin-right: 5px;
  }
}
</style>
