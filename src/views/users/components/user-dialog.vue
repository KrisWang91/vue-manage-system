<template>
  <el-dialog :title="title" :visible.sync="visible" :before-close="cancelVisible" :close-on-click-modal="false" destroy-on-close width="500px">
    <el-form :model="formData" ref="form" :rules="rules" size="small" label-position="right" label-width="60px">
      <el-form-item label="用户名：" prop="username">
        <el-input v-model="formData.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input v-model="formData.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱：" prop="email">
        <el-input v-model="formData.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机哈：" prop="mobile">
        <el-input v-model="formData.mobile" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button size="small" @click="cancelVisible">取 消</el-button>
      <el-button size="small" type="primary" @click="subForm">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'UserDialog',
  props: {
    title: {
      type: String,
      default: '新增用户'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    // 邮箱正则验证
    const validateEmail = (rule, value, callback) => {
      const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if (!reg.test(value)) callback(new Error('请输入正确的邮箱'))
    }
    // 手机号正则验证
    const validateMobile = (rule, value, callback) => {
      const reg = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
      if (!reg.test(value)) callback(new Error('请输入正确的手机号'))
    }
    return {
      formData: {
        username: '',
        password: '',
        email: '',
        mobile: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, trigger: 'blur' }
        ],
        email: [
          { validator: validateEmail, message: '请输入正确的邮箱', trigger: 'blur' }
        ],
        mobile: [
          { validator: validateMobile, message: '请输入正确的手机号', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 关闭 取消弹框
    cancelVisible () {
      this.$emit('update:visible', false)
      this.$refs.form.resetFields()
    },
    // 提交表单
    subForm () {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
