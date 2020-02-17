<template>
  <div>
    <!-- 搜索功能 -->
    <!-- :inline="true" 表单一行显示 -->
    <el-form ref="searchForm" :inline="true" :model="searchMap" style="margin-top:20px">
      <!-- 重置会看 el-form-item 组件元素的prop 是否指定了字段名 指定了才能重置 -->
      <el-form-item prop="name">
        <el-input v-model="searchMap.name" placeholder="供应商名称"></el-input>
      </el-form-item>
      <el-form-item prop="linkman">
        <el-input v-model="searchMap.linkman" placeholder="联系人"></el-input>
      </el-form-item>
      <el-form-item prop="mobile">
        <el-input v-model="searchMap.mobile" placeholder="联系电话"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="fetchData">查询</el-button>
        <el-button type="primary" @click="handleAdd">新增</el-button>
        <el-button @click="resetForm('searchForm')">重置</el-button>
      </el-form-item>
    </el-form>


    <!-- 供应商数据 -->
    <el-table :data="list" height="600" border style="width: 100%">
      <!-- type="index" 获取索引值 -->
      <el-table-column type="index" label="序号"></el-table-column>
      <el-table-column prop="name" label="工商名称" ></el-table-column>
      <el-table-column prop="linkman" label="联系人" ></el-table-column>
      <el-table-column prop="mobile" label="联系电话"></el-table-column>
      <el-table-column prop="remark" label="备注" ></el-table-column>
      <el-table-column label="操作" >
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row.id)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--
      分页组件
      -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>

    <!-- 弹出新增对话框 -->
      <el-dialog title="工商编辑" :visible.sync="dialogFormVisible" width="500px">
        <el-form 
        :rules="rules"
        ref="pojoForm"
        label-width="100px"
        label-postion="right"
        style="width:400px"
        :model="pojo">
          <el-form-item label="供应商名称" prop="name">
            <el-input v-model="pojo.name" ></el-input>
          </el-form-item>
          <el-form-item label="联系人" prop="linkman">
            <el-input v-model="pojo.linkman" ></el-input>
          </el-form-item>
          <el-form-item label="联系电话" prop="mobile">
            <el-input v-model="pojo.mobile" ></el-input>
          </el-form-item>
          <el-form-item label="备注" prop="remark">
            <el-input type="textarea" v-model="pojo.remark" ></el-input>
          </el-form-item>
          
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <!-- @click="pojo.id === null ? addData('pojoForm'):updateData('pojoForm')" -->
          <el-button type="primary" @click="pojo.id === null ? addData('pojoForm'):updateData('pojoForm')">确 定</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
import supplierApi from '@/api/supplier'

export default {
  data() {
    return {
      list:[],
      total:0,//总记录数
      currentPage:1,//当前页码 默认为1
      pageSize:10,//每页显示10条数据
      searchMap:{//条件查询绑定的条件值
        name:'',
        linkman:'',
        mobile:''
      },
      dialogFormVisible:false,
      pojo:{
        id:null,
        name:'',
        linkman:'',
        mobile:'',
        remark:''
      },
      rules:{
        name:[
          {required:true,message:'供应商名称不能为空',trigger:'blur'}
        ],
        linkman:[
          {required:true,message:'联系人不能为空',trigger:'blur'}
        ]
      }
    };
  },
  created(){
    this.fetchData()
  },
  methods:{
    fetchData(){
      //supplierApi.getList().then(response => {
      supplierApi.search(this.currentPage,this.pageSize,this.searchMap).then(response => {
        const resp = response.data.data
        console.log(resp)
        this.list = resp.rows
        this.total = resp.total
      })
    },
    handleEdit(id){
      this.handleAdd()   
      supplierApi.getById(id).then(response => {
        const resp = response.data
        if(resp.flag){
          this.pojo = resp.data
        }else{
          this.$message({
            message:resp.message,
            type:'warning'
          })
        }
      })
    },
    handleDelete(id){
      this.$confirm('确认删除这条记录吗?','提示',{
        confirmButtonText:'确认',
        cancelButtonText:'取消',
        type: 'warning'
      }).then(()=>{
        supplierApi.deleteById(id).then(response => {
          const resp = response.data
          this.$message({
            message:resp.message,
              type:resp.flag==true?'success':'error'
          })
          if(resp.flag){
            this.fetchData()
          }
        })
      }).catch(()=>{
        //取消删除
        this.$message({
            type: 'info',
            message: '已取消删除'
        });  
      })
      
    },
    //当每页条数改变时 触发 val显示最新的每页条数
    handleSizeChange(val){
      this.pageSize=val
      this.fetchData()
    },
    //当页码改变时 触发 val显示最新的页码
    handleCurrentChange(val){
      this.currentPage=val
      this.fetchData()
    },
    resetForm(formName){
      // 重置会看 el-form-item 组件元素的prop 是否指定了字段名
      this.$refs[formName].resetFields()
    },
    handleAdd(){
      this.dialogFormVisible=true
      this.$nextTick(()=>{
        this.$refs['pojoForm'].resetFields()
      })
    },
    addData(formName){
      this.$refs[formName].validate(valid => {
        if(valid){
          //提交表单
          supplierApi.add(this.pojo).then(response => {
            const resp = response.data
            if(resp.flag){
              this.fetchData()
              this.dialogFormVisible = false
              this.$message({
                message:resp.message,
                type:'success'
              })
            }else{
              this.$message({
                message:resp.message,
                type:'warning'
              })
            }
          })
        }else{
          return false
        }
      })
    },
    updateData(formName){
      this.$refs[formName].validate(valid => {
        if(valid){
          supplierApi.update(this.pojo).then(response => {
            const resp = response.data
            if(resp.flag){
              this.fetchData()
              this.dialogFormVisible=false
            }else{
              this.$message({
                message:resp.message,
                type:'warning'
              })
            }
          })
        }
      })
    }
  }
};
</script>

<style scoped>
</style>