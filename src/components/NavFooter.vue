<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="javascript">aloe_web</a><span>|</span>
      <a href="javascript">HTML5</a><span>|</span>
      <a href="javascript">javaScript</a><span>|</span>
      <a href="javascript">css</a><span>|</span>
      <a href="javascript">vue</a>
    </div>
    <div class="copyright">Copyright©<span class="domian">mi.com  京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号</span></div>
  </div>
</template>

<script>
export default {
  name: 'nav-footer'
}
</script>

<style lang="scss">
.footer{
  height: 234px;
  border-top: 4px solid #FF6600;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .footer-logo{
    margin-top: 46px;
    margin-bottom: 31px;
    img{
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link{
    margin-bottom: 13px;
    a{
      color: #999999;
      display: inline-block;
    }
    span{
      margin: 0 10px;
    }
  }
  .copyright{
    .domain{
      color: #FF6600;
    }
  }
}
</style>