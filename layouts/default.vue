<template>
  <div>
    <div class="header">
      <div class="header-content">
        <div class="header-logo">
        阳光沙滩-券场
        </div>
        <ul class="header-nav">
          <li class="active">券场</li>
          <li>发现</li>
          <li>特惠</li>
        </ul>
        <div class="header-search-box">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <div class="header-search-btn">
          <el-button type="danger" size="middle">搜索</el-button>
        </div>
      </div>
    </div>
    <Nuxt />
    <div class="footer">
      <div class="footer-content">
        <ul class="footer-contact">
          <li>联系我们</li>
          <li>人才招聘</li>
          <li>广告投放</li>
          <li>网店加盟</li>
          <li>常见问题</li>
          <li>友情链接</li>
        </ul>
        <div class="footer-info">
          <p>@2019 taobaounion.cn 粤IPC备 1209832号-11 code by TrillGates</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
ul{
  list-style: none;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.header{
  width: 100%;
  border-bottom: 1px solid #eaeaea;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.header-content{
  width:70%;
  margin: 0 auto;
  min-width: 1080px;
  height: 76px;
  display: flex;
  display: -webkit-flex;
  justify-content: flex-start;
  align-items: center;
  line-height: 76px;
}
.header-logo{
  color: #fa0000;
  font-size:28px;
  font-weight: 400;
}
.header-nav{
  list-style: none;
  display: flex;
  display: -webkit-flex;
  justify-content: flex-start;
  align-items: center;
}
.header-nav li{
  padding: 0 15px;
  cursor: pointer;
}
.header-nav li.active{
  background: #ECECEC;
}
.header-search-btn{
  margin-left: 15px;
}
.footer{
  width: 100%;
  height: 100px;
  background: #a33f3f;
}
.footer-content{
  width: 70%;
  margin: 0 auto;
  min-width: 1080px;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
}
.footer-content ul{
  padding: 0;
  height: 50px;
  line-height: 50px;
  display: flex;
  display: -webkit-flex;
  justify-content: flex-start;
  align-items: center;
}
.footer-content ul li{
  margin-right: 10px;
  cursor: pointer;
}
</style>
