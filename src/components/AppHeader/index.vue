<template>
  <div class="header">
    <a href="#/">
      <img class="logo" src="@/assets/icon.png" alt />
      <span class="company">實時工時系統</span>
    </a>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        {{username}}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a" icon="el-icon-circle-close">退出系統</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-dialog
      title="是否退出賬號"
      :visible.sync="dialogVisible"
      width="30%"
      center
      :before-close="handleClose"
    >
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="exit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: JSON.parse(localStorage.getItem("cjw-msm-user")).name,
      dialogVisible: false
    };
  },

  components: {},

  methods: {
    handleCommand(command) {
      //   this.$message("click on item " + command);
      console.log(123);
      this.dialogVisible = true;
    },
    handleClose(done) {
      this.dialogVisible = false;
    },
    exit() {
      localStorage.clear();
      this.dialogVisible = false;
      this.$message({
        message: '退出登錄成功',
        type: "success"
      });
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.logo {
  vertical-align: center;
  padding: 0px 10px 0px 40px;
}
.company {
  color: white;
}

/* 下拉菜單 */
.el-dropdown {
  float: right;
  margin-right: 40px;
}
.el-dropdown-link {
  color: white;
  cursor: pointer;
}
</style>