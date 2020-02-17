<template>
  <div>
    <!-- :inline="true" 表单一行显示 -->
    <el-form ref="searchForm" :inline="true" :model="searchMap" style="margin-top:20px">
      <!-- 重置会看 el-form-item 组件元素的prop 是否指定了字段名 指定了才能重置 -->
      <el-form-item prop="cardNum">
        <el-input v-model="searchMap.cardNum" placeholder="会员卡号"></el-input>
      </el-form-item>
      <el-form-item prop="name">
        <el-input v-model="searchMap.name" placeholder="会员名称"></el-input>
      </el-form-item>
      <el-form-item prop="payType">
        <el-select v-model="searchMap.payType" placeholder="支付类型" style="width:110px">
          <el-option v-for="option in payTypeOptions" 
          :key="option.type"
          :label="option.name"
          :value="option.type"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="birthday">
        <el-date-picker
          value-format="yyyy-MM-dd"
          v-model="searchMap.birthday"
          type="date"
          placeholder="生日日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="fetchData">查询</el-button>
        <el-button type="primary" @click="handleAdd">新增</el-button>
        <el-button @click="resetForm('searchForm')">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- 
      :data 绑定渲染的数据
      border 表格边框
     -->
      <el-table
        :data="list"
        height="600"
        border
        style="width: 100%">
        <!-- type="index" 获取索引值 -->
        <el-table-column type="index" label="序号" width="50%"></el-table-column>
        <el-table-column prop="cardNum" label="会员卡号"></el-table-column>
        <el-table-column prop="name" label="会员姓名" width="100%" ></el-table-column>
        <el-table-column prop="birthday" label="会员生日" width="100%"></el-table-column>
        <el-table-column prop="phone" label="手机号码" width="150%"></el-table-column>
        <el-table-column prop="integral" label="可用积分" width="100%"></el-table-column>
        <el-table-column prop="money" label="开卡金额" width="100%"></el-table-column>
        <el-table-column prop="payType" label="支付类型" width="100%">
          <template slot-scope="scope">
            <span>{{scope.row.payType | payTypeFilter}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="会员地址" width="400%"></el-table-column>
        <el-table-column label="操作" width="200%">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.row.id)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row.id)">删除</el-button>
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
      <el-dialog title="会员编辑" :visible.sync="dialogFormVisible" width="500px">
        <el-form 
        :rules="rules"
        ref="pojoForm"
        label-width="100px"
        label-postion="right"
        style="width:400px"
        :model="pojo">
          <el-form-item label="会员卡号" prop="cardNum">
            <el-input v-model="pojo.cardNum" ></el-input>
          </el-form-item>
          <el-form-item label="会员姓名" prop="name">
            <el-input v-model="pojo.name" ></el-input>
          </el-form-item>
          <el-form-item label="会员生日" prop="birthday">
            <el-date-picker
              value-format="yyyy-MM-dd"
              v-model="pojo.birthday"
              type="date"
              placeholder="会员生日">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="手机号码" prop="phone">
            <el-input v-model="pojo.phone" ></el-input>
          </el-form-item>
          <el-form-item label="开卡金额" prop="money">
            <el-input v-model="pojo.money" ></el-input>
          </el-form-item>
          <el-form-item label="可用积分" prop="integral">
            <el-input v-model="pojo.integral" ></el-input>
          </el-form-item>
          <el-form-item label="支付类型" prop="payType">
            <el-select v-model="pojo.payType" placeholder="支付类型" >
              <el-option v-for="option in payTypeOptions" 
              :key="option.type"
              :label="option.name"
              :value="option.type"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="会员地址" prop="address">
            <el-input type="textarea" v-model="pojo.address" ></el-input>
          </el-form-item>
          
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="pojo.id === null ? addData('pojoForm'):updateData('pojoForm')">确 定</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
import memberApi from '@/api/member'

const payTypeOptions=[
  {type:'1',name:'现金'},
  {type:'2',name:'微信'},
  {type:'3',name:'支付宝'},
  {type:'4',name:'银行卡'}
]

export default {
  data() {
    return {
      list:[],
      total:0,//总记录数
      currentPage:1,//当前页码 默认为1
      pageSize:10,//每页显示10条数据
      searchMap:{//条件查询绑定的条件值
        cardNum:'',
        name:'',
        payType:'',
        birthday:'',
      },
      payTypeOptions,//payTypeOptions:payTypeOptions
      dialogFormVisible:false,
      pojo:{
        id:null,
        cardNum:'',
        name:'',
        birthday:'',
        phone:'',
        money:'',
        integral:'',
        payType:'',
        address:''
      },//提交数据
      rules:{//校验规则
        cardNum:[
          {required:true,message:'卡号不能为空',trigger:'blur'}
        ],
        name:[
          {required:true,message:'姓名不能为空',trigger:'blur'}
        ],
        payType:[
          {required:true,message:'支付类型不能为空',trigger:'change'}
        ],
      } 
    };
  },
  created(){
    //初始化获取列表数据
    this.fetchData()
  },
  methods:{
    fetchData(){
      //memberApi.getList().then(response =>  {
      memberApi.search(this.currentPage,this.pageSize,this.searchMap).then(response =>  {
        const resp = response.data.data
        this.list = resp.rows
        this.total = resp.total
        //console.log(resp)
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
    //提交新增数据
    addData(formName){
      this.$refs[formName].validate(valid => {
        if(valid){
          memberApi.add(this.pojo).then(response =>{
            const resp = response.data
            if(resp.flag){
              //新增成功，刷新列表数据
              this.fetchData()
              this.dialogFormVisible=false//关闭窗口
              this.$message({
                message:resp.message,
                type:'success'
              })
            }else{
              //失败，提示信息
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
    //弹出新增窗口
    handleAdd(){
      //this.pojo={}
      this.dialogFormVisible=true
      this.$nextTick(()=>{
        //this.$nextTick()异步事件 当渲染结束之后，它的回调才会执行
        //弹出窗口打开之后，需要加载Dom，就需要花费一点时间，我们就应该等待它
        //加载完成后，再执行resetFields方法，重置和清除表单样式
        this.$refs['pojoForm'].resetFields()
      })
    },
    //打开编辑窗口
    handleEdit(id) {
      //console.log(id);
      this.handleAdd()
      memberApi.getById(id).then(response => {
        const resp = response.data
        if(resp.flag){
          this.pojo=resp.data
        }else{
          this.$message({
            message:resp.message,
            type:'warning'
          })
        }
      })
    },
    updateData(formName){
      this.$refs[formName].validate(valid => {
        if(valid){
          //提交更新
          memberApi.update(this.pojo).then(response => {
            const resp =response.data
            if(resp.flag){
              //刷新列表
              this.fetchData()
              this.dialogFormVisible=false
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
    handleDelete(id) {
        this.$confirm('是否删除该信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          memberApi.deleteById(id).then(response => {
            const resp = response.data
            if(resp.flag){
               this.$message({
                type: 'success',
                message: resp.message
              });
              this.fetchData()
            }else{
               this.$message({
                type: 'error',
                message: resp.message
              })
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
  },
  filters:{
    //在过滤器中 不能引用当前实例 this
    payTypeFilter(type){
      const payObj = payTypeOptions.find(obj => {
        return obj.type === type
      })
      return payObj ? payObj.name : null
    }
  }
};
</script>

<style scoped>
</style>