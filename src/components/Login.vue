<template>
  <div class="login-container">
    <div class="login-box">
      <!-- logo -->
      <div class="avatar-box">
        <img src="../assets/imgs/logo.png" alt="logo">
      </div>
      <!-- 登录表单 -->
      <el-form class="login-form" :model="formData" :rules="rules" ref="formRef">
        <el-form-item prop="username">
          <el-input v-model="formData.username" prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="formData.password" type="password" prefix-icon="iconfont icon-3702mima"></el-input>
        </el-form-item>
         <el-form-item class="btns">
          <el-button type="primary" @click="submitForm('formRef')">登录</el-button>
          <!-- <el-button @click="resetForm('formRef')">重置</el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from '../api/user'
import { setSession } from '@/utils/auth'

export default {
  name: 'Login',
  data () {
    return {
      formData: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '登录名称不能为空', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在3到10之间', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // resetForm (formName) {
    //   this.$refs[formName].resetFields()
    // }
    submitForm (formName) {
      this.$refs[formName].validate(async valid => {
        if (!valid) return
        // 解构返回结果
        const { data: ret, meta: msg } = await login(this.formData)
        if (msg.status !== 200) return this.$message({ type: 'error', message: msg.msg })
        this.$message({ type: 'success', message: '登录成功' })
        setSession(ret.token)
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container{
  background-color: #2b4b6b;
  height: 100%;
  position: relative;

  .login-box{
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    .avatar-box{
        height: 120px;
        width: 120px;
        border: solid 1px #eee;
        border-radius: 50%;
        padding:10px;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left: 50%;
        top: 10px;
        transform: translate(-50%, -50%);
        background-color: #fff;

        img{
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: #eee;
        }
    }

    .login-form{
      margin-top: 100px;

      ::v-deep .el-form-item__content{
        text-align: left;
        margin: 0px 20px;

        .el-input__inner{
          height: 36px;
          line-height: 36px;
        }
      }

      .btns{
        ::v-deep .el-form-item__content{
          text-align: right;
          margin-top: 10px;

          .el-button{
            width: 100%;
          }
        }
      }

    }

  }
}

</style>
