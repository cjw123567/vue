<template>
  <div class="navbar">
    <el-row class="tac">
      <el-col :span="24" class="navbar-height">
        <!-- default-active="2" 默認選中的菜單 -->
        <el-menu
          :router="true"
          class="el-menu-vertical-demo navbar-height"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          :unique-opened="true"
          active-text-color="#ffd04b"
        >
          <el-submenu v-for="(menu,index) in menus" :key="index" :index="menu.menuid">
            <template slot="title">
              <i :class="[menu.icon==='el-icon-menu' ? 'el-icon-menu' : '']"></i>
              <span class="Color">{{menu.menuname}}</span>
            </template>
            <el-menu-item-group>
              <!-- <router-link
                class="fontColor"
                v-for="(list,index) in menu.menus"
                :key="index"
                :index="list.index"
                tag="el-menu-item"
                :to="list.url"
              >{{list.menuname}}</router-link>-->
              <el-menu-item
                class="fontColor"
                v-for="(list,index) in menu.menus"
                :key="index"
                :index="list.url"
              >{{list.menuname}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import navbar from "@/utils/navbar";

export default {
  data() {
    return {
      menus: navbar.menus
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.el-menu{
  border-right: none
}

.Color {
  color: #fff;
}

.fontColor {
  color: #ececec81;
}

.active {
  color: #3f3e3d;
}
</style>