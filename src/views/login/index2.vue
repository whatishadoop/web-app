<template>
  <div class="login">
    <form ref="loginForm" :model="loginForm">
      <h3 class="title">OceanMobile 移动端平台</h3>
      <div>
        账号: <input v-model="loginForm.username" type="checkbox" name="checkbox"/>
      </div>
      <div>
        密码: <input v-model="loginForm.password" type="password" name="password"/>
      </div>
      <div>
        记住密码: <input v-model="loginForm.rememberMe" type="checkbox" name="checkbox"/>
      </div>
      <div>
        <input type="button" name="checkbox" value="提交"/><span v-if="!loading">登 录</span><span v-else>登 录 中...</span>
      </div>
      <p class="login-tip">系统默认用户名：test，密码：123456</p>
    </form>
  </div>
</template>

<script>
  import Config from '@/config'
  import Cookies from 'js-cookie'

  export default {
    name: 'Login',
    data() {
      return {
        loginForm: {
          username: 'test',
          password: '123456',
          rememberMe: false
        },
        loginRules: {
          username: [{ required: true, trigger: 'blur', message: '用户名不能为空' }],
          password: [{ required: true, trigger: 'blur', message: '密码不能为空' }]
        },
        loading: false,
        redirect: undefined
      }
    },
    watch: {
      $route: {
        handler: function(route) {
          this.redirect = route.query && route.query.redirect
        },
        immediate: true
      }
    },
    created() {
      this.getCookie()
    },
    methods: {
      getCookie() {
        const username = Cookies.get('username')
        let password = Cookies.get('password')
        const rememberMe = Cookies.get('rememberMe')
        password = password === undefined ? this.loginForm.password : password
        this.loginForm = {
          username: username === undefined ? this.loginForm.username : username,
          password: password,
          rememberMe: rememberMe === undefined ? false : Boolean(rememberMe)
        }
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          const user = this.loginForm
          if (valid) {
            this.loading = true
            if (user.rememberMe) {
              Cookies.set('username', user.username, { expires: Config.passCookieExpires })
              Cookies.set('password', user.password, { expires: Config.passCookieExpires })
              Cookies.set('rememberMe', user.rememberMe, { expires: Config.passCookieExpires })
            } else {
              Cookies.remove('username')
              Cookies.remove('password')
              Cookies.remove('rememberMe')
            }
            this.$store.dispatch('Login', user).then(() => {
              this.loading = false
              this.$router.push({ path: this.redirect || '/' })
            }).catch(() => {
              this.loading = false
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss">

</style>
