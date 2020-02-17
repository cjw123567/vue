<template>
     <el-breadcrumb v-show="$route.path !=='/home'" class="breadcrumb-container" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item class="line" v-for="item in levelList" :key="item.path" >{{item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script>
export default {
    data() {
            return {
                levelList: []
            }
        },
    watch: {
         $route() {
            this.getBreadcrumb()
        }
    },
    created(){
        this.getBreadcrumb()
    },
    methods:{
        getBreadcrumb() {
            //console.log("abc:",this.$route.matched)
            let matched = this.$route.matched.filter(item => item.meta.title)
               
            this.levelList = matched
        }
    }
}
</script>
<style scoped>
.el-breadcrumb{
    height: 10px;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
 .el-breadcrumb .line:nth-child(1){
    border-left: 3px solid #31c17b;
    padding-left: 10px;
}
</style>