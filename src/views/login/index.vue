<template>
  <div class="login-container">
    <el-form ref="form" :rules="rules" :model="form" label-width="80px" class="login-form">
      <h2 class="login-title">實時工時管理系統</h2>
      <el-form-item label="账号" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">登录</el-button>
        <el-button type="danger" @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login, getUserInfo } from "@/api/login";

export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "账号不能为空", trigger: "blur" }
        ],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //提交表单到后台验证是否正确
          login(this.form.username, this.form.password).then(response => {
            const resp = response.data;
            if (resp.flag) {
              //验证成功
              getUserInfo(resp.data.token).then(response => {
                const respUser = response.data;
                if (respUser.flag) {
                  //获取到了用户的数据
                  console.log("userInfo", respUser);
                  //保存token，用户信息到浏览器
                  localStorage.setItem(
                    "cjw-msm-user",
                    JSON.stringify(respUser.data)
                  );
                  localStorage.setItem("cjw-msm-token", resp.data.token);
                  //前往首页
                  this.$router.push("/");
                } else {
                  this.$message({
                    message: respUser.message,
                    type: "warning"
                  });
                }
              });
            } else {
              //未通过
              this.$message({
                message: resp.message,
                type: "error"
              });
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    onReset() {
      this.form.username = "";
      this.form.password = "";
    }
  }
};
</script>


<style>
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../../assets/loginb.png");
}
.login-title {
  text-align: center;
}
.login-form {
  width: 350px;
  margin: 160px auto;
  background-color: rgba(210, 210, 210, 0.8);
  padding: 30px 80px 30px 0px;
  border-radius: 20px;
}
</style>