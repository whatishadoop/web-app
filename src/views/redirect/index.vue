<script>
export default {
  beforeCreate() {
    const { params, query } = this.$route
    const { path } = params
    console.log('=====================')
    console.log(path)
    console.log(query)
    console.log('=====================')
    this.$router.replace({ path: '/' + path, query })
  },
  render: function(h) {
    return h() // avoid warning message
  }
}
</script>
