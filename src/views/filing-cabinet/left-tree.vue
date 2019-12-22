<template>
  <div class="box">
    <div class="box-header">
      <h3 class="header-title"> <span class="num">01</span> 选择你要查看的产品</h3>
    </div>
    <div class="box-body">
      <elTree2
        :data="treeData"
        show-checkbox
        node-key="id"
        ref="tree"
        accordion
        :props="defaultProps"
        @node-click="handelNodeClick"
      >
      <span class="custom-tree-node" slot-scope="{ node, data}">
        <span>{{ node.label }}</span>
        <template v-if="data.nodeType==='pf'">
          <span class="el-icon-plus">新增产品代</span>
        </template>
        <template v-if="data.nodeType==='pg'">
          <span class="el-icon-circle-plus"></span>
        </template>
        <template v-if="data.nodeType==='pv'">
          <span class="fa fa-download">全部下载</span>
        </template>
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
  /**
     *nodeType :
        pf: 产品族
        pg: 产品代
        pv: 产品版本
        pk: 程序包
        pkd: 程序包文档说明
        pt: 补丁包
        ptd: 补丁包文档说明
  */
  data () {
    return {
      treeData: [{
        id: 1,
        showCheckbox: false,
        label: '反洗钱',
        nodeType: 'pf',
        hasChild: true
      }, {
        id: 2,
        showCheckbox: false,
        label: '监管报送系统',
        hasChild: false,
        nodeType: 'pf',
        children: [{
          id: 21,
          showCheckbox: false,
          label: '监管报送1.0',
          nodeType: 'pg',
          children: [{
            id: 211,
            showCheckbox: false,
            label: '监管报送ARP_V1.0.12017',
            nodeType: 'pv',
            children: [{
              id: 2111,
              showCheckbox: true,
              label: 'ARP_V1.0.1_20170931',
              nodeType: 'pk',
              nodeName: '程序包',
              children: [{
                id: 21111,
                showCheckbox: true,
                label: '补丁：PATCH_V0.0.1_20171001',
                nodeType: 'pt'
              }, {
                id: 21112,
                showCheckbox: true,
                label: '补丁：PATCH_V0.0.1_20171002',
                nodeType: 'pt'
              }]
            }, {
              id: 2112,
              showCheckbox: true,
              label: '监管报送3.0.1文档说明',
              nodeType: 'pkd',
              nodeName: '文档',
              children: [{
                id: 21121,
                showCheckbox: true,
                label: '需求规格说明书',
                nodeType: 'ptd'
              }, {
                id: 21122,
                showCheckbox: true,
                label: '概要设计',
                nodeType: 'ptd'
              }]
            }]
          }, {
            id: 212,
            showCheckbox: false,
            label: '监管报送ARP_V1.0.12018',
            nodeType: 'pv'
          }]
        }, {
          id: 22,
          label: '监管报送2.0',
          showCheckbox: false,
          nodeType: 'pg'
        }, {
          id: 23,
          label: '监管报送3.0',
          showCheckbox: false,
          nodeType: 'pg'
        }]
      }, {
        id: 3,
        showCheckbox: false,
        label: '个人征信系统',
        hasChild: false,
        nodeType: 'pf'
      }, {
        id: 4,
        showCheckbox: false,
        label: '金融统计标准化',
        hasChild: false,
        nodeType: 'pf'
      }
      ],
      defaultProps: {
        children: 'children',
        label: 'label',
        isLeaf: 'isLeaf'
      }
    }
  },
  methods: {
    loadNode (node, resolve) {
      if (node.level === 0) {
        return resolve([{
          id: 1,
          showCheckbox: false,
          label: '反洗钱',
          nodeType: 'pf',
          hasChild: true

        }, {
          id: 2,
          showCheckbox: false,
          label: '监管报送系统',
          hasChild: false,
          nodeType: 'pf'
        }, {
          id: 3,
          showCheckbox: false,
          label: '个人征信系统',
          hasChild: false,
          nodeType: 'pf'
        }, {
          id: 4,
          showCheckbox: false,
          label: '金融统计标准化',
          hasChild: false,
          nodeType: 'pf'
        }
        ])
      }
      if (!node.data.hasChild) return resolve([])
      setTimeout(() => {
        const data = [{
          label: 'leaf',
          hasChild: true,
          showCheckbox: true,
          children: [{
            id: 11,
            showCheckbox: true,
            label: '一级 11'
          }]
        }, {
          label: 'zone',
          hasChild: false,
          showCheckbox: true
        }]
        resolve(data)
      }, 500)
    },
    handelNodeClick (obj, node, el) {
      if (obj.nodeType === 'pf') {
        this.$router.push({name: 'formFamily', params: {a: 123}})
      } else if (obj.nodeType === 'pg') {
        // this.$router.push({name: 'formGeneration', params: {a: 123}})
      }
    }

  },

  activated () {}
}
</script>
<style  lang="scss">
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
// tree
.el-tree {
  padding-top:10px;
}
.el-tree-node__label {
  font-size:12px;
}
.pf .el-icon-plus {
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  right:20px;
  color:#5d70ea;
  font-size:12px;
}
.pg .el-icon-circle-plus {
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  right:20px;
  color:#5d70ea;
}
.pv .fa-download {
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  right:20px;
  color:#5d70ea;
}
.node-name {
  font-size:12px;
  display: inline-block;
  width:46px;
  text-align: center;
  margin-right:4px;
  border-radius: 9px;
  background-color:#f5c65a;
}
.el-icon-arrow-right {
  color:#5D70EA;
  font-weight: bold;
}
.pf > .el-icon-arrow-right  {
  visibility:hidden;
}
.el-tree  .pf {
  height:36px;
  position: relative;
  &:hover {
    background-color:#f4f6ff;
    &:after {
    position:absolute;
    content:'';
    left:0;
    width:3px;
    top:0;
    bottom:0;
    background-color:#5d70ea;
  }
  }
}
.el-tree .el-tree-node__content {
  // height:34px;
  position: relative;
  border-bottom:1px solid #E0E0E0;

}
.el-tree .el-tree-node__content.pf {
  border-bottom:none;
}
.el-tree   .el-tree-node.is-expanded>.pf {
  background-color:#5D70EA;
  color:#fff;
  position: relative;
  &:after {
    content:'';
    position:absolute;
    left:0;
    width:3px;
    top:0;
    bottom:0;
    background-color:#5D70EA;
  }
}
.el-tree .pg {
  color:#72643F
}
.pf + .el-tree-node__children .is-expanded .pg {
  color:#3B489B;
}
.el-tree-node__content.pv {
  color:#72643F
}
.is-expanded>.pf .el-icon-plus {
  color:#fff;
}
.el-tree  .is-expanded>.pf + .el-tree-node__children {
  border-left:3px solid #5D70EA;
  background-color:rgba(249,249,249,1);
}
.el-tree--highlight-current  .el-tree-node.is-current>.el-tree-node__content {
    // background-color: transparent;
}
.el-tree .pg + .el-tree-node__children .is-expanded .el-tree-node__content.pv {
  background-color:#FFF8E8 !important;
}
.el-tree .pg + .el-tree-node__children .is-expanded .el-tree-node__content.pv + .el-tree-node__children {
  background-color:#FFF8E8 !important;
}
.el-tree .pg + .el-tree-node__children .is-expanded .el-tree-node__content.pv {
  border-left:10px solid #F9F9F9;
  position: relative;
  &:before {
    content:'';
    position: absolute;
    width:3px;
    left:0px;
    height:100%;
    background-color:#F5C65A;
  }
}
.el-tree .pg + .el-tree-node__children .is-expanded .el-tree-node__content.pv + .el-tree-node__children {
  border-left:10px solid #F9F9F9;
  position: relative;
  &:before {
    content:'';
    position: absolute;
    width:3px;
    left:0px;
    height:100%;
    background-color:#F5C65A;
  }
}
.el-tree-node__content.pk {
  color:#857a5e
}
.el-tree-node__content.pk + .el-tree-node__children {
  color:#857a5e;
}
.el-tree-node__content.pkd {
  color:#857a5e
}
.el-tree-node__content.pkd + .el-tree-node__children {
  color:#857a5e;
}
.el-tree-node__content.pt {
  position: relative;
  &:before {
    content:'';
    position: absolute;
    width:1px;
    top:-5px;
    bottom:0;
    left:110px;
    background-color:#b9ae94;
  }
}
.el-tree-node__content.ptd {
  position: relative;
  &:before {
    content:'';
    position: absolute;
    width:1px;
    top:-5px;
    bottom:0;
    left:110px;
    background-color:#b9ae94;
  }
}
.pt > .el-tree-node__expand-icon {
  position:relative;
  &:after {
    content:'';
    position: absolute;
    left:50%;
    top:50%;
    right:0;
    height:1px;
    background-color:#b9ae94;
  }
}
.ptd > .el-tree-node__expand-icon {
  position:relative;
  &:after {
    content:'';
    position: absolute;
    left:50%;
    right:0;
    top:50%;
    height:1px;
    background-color:#b9ae94;
  }
}
</style>
