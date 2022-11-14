<script setup>
import ContentWrapper from '@/components/content-wrapper/index.vue'
import { reactive, ref } from 'vue';
import { isInViewPort } from '@/utils/utils'

const navList = reactive(['About', 'Skills', 'EXPERIENCE', 'CONTACT'])

const skills = reactive([
  [{ name: 'HTML', level: '90%' }, { name: 'CSS', level: '90%' }],
  [{ name: 'JAVASCRIPT', level: '90%' }, { name: 'MINI-PROGRAM  ', level: '80%' }],
  [{ name: 'VUE', level: '80%' }, { name: 'REACT', level: '80%' }],
])

const navBgVisible = ref(false)

const header = ref(null)

const onPageScroll = (event) => {
  event.srcElement.scrollTop >= parseInt(getComputedStyle(header.value).height)
    ? (navBgVisible.value = true)
    : (navBgVisible.value = false)
}

const scrollToView = (id) => {
  const el = document.getElementById(id)
  console.log(id, el)
  el.scrollIntoView()
}

</script>

<template>
  <div id="app" @scroll="onPageScroll">
    <header ref="header">
      <nav :class="{ 'nav-bg': navBgVisible }">
        <div>
          <a class="logo active" href="#">CAI 'S CV</a>
          <input class="hide" type="checkbox" id="toggler" />
          <label class="toggler" for="toggler">
            <div ref="Toggler" class="navbar-toggler" @click="toggleNavbar">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </label>
          <div class="justify-end navbar-collapse">
            <ul>
              <li v-for="(name, key) in navList" :key="key">
                <a @click="scrollToView(`${name.toLowerCase()}`)">{{ name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="contain">
        <div class="p-h">
          <div class="round">
            <img class="portrait" src="@/assets/1.jpg" />
          </div>
          <h1 class="animate__animated animate__fadeInDown">Cai huancheng</h1>
          <h1 class="animate-slow animate__animated animate__slideInUp">蔡焕城</h1>
          <p>欢迎您，祝你生活愉快！</p>
        </div>
        <div class="downloads">
          <button class="download"><a href="src/assets/cv/cv.docx" download="前端工程师_蔡焕城.docx">Download CV</a></button>
        </div>
      </div>
    </header>
    <main>
      <section id="about">
        <ContentWrapper class="shadow">
          <div class="wrap">
            <div>
              <h3>About Me(关于我)</h3>
              <p class="info"> 你好！我是蔡焕城，是2023年应届毕业生。</p>
              <p class="info">
                本人性格开朗，为人诚信、正直，工作积极认真，做事有耐性，责任心强;<br />做事有上进心，头脑灵活，接受能力强。
              </p>
              <p class="info">
                通过系统的学习，我已经熟练掌握HTML5、 CSS3、Javascript(ES6 +)，能够独立完成项目。
              </p>
            </div>
            <div>
              <h3>Basic Information(基本信息)</h3>
              <div>
                <span class="field">AGE:</span>
                <span>19</span>
              </div>
              <div>
                <span class="field">Address:</span>
                <span>深圳市罗湖区黄贝岭</span>
              </div>
              <div>
                <span class="field">Phone:</span>
                <span>+86 136-1294-8446</span>
              </div>
              <div>
                <span class="field">Email:</span>
                <span>caihuancheng923@qq.com</span>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </section>
      <section v-appear="'animate__animated animate__slideInUp'" id="skills">
        <ContentWrapper class="shadow" title="Professional Skills(专业技能)">
          <div class="row" v-for="(skill, key) in skills" :key="key">
            <div class="col" v-for="item in skill">
              <div class="cell">
                <div class="cell-title">{{ item.name }}</div>
                <div class="cell-number">{{ item.level }}</div>
              </div>
              <div class="bg-progress">
                <div v-appear="{ type: 'style', width: item.level }" class="progress"></div>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </section>
      <section id="experience">
        <ContentWrapper title="Work Experience(工作经历)">
          <div class="experience shadow" v-appear="'animate__animated animate__slideInUp'">
            <div class="left flex-all-center">
              <div v-appear="'animate__animated animate__fadeInLeft'">
                <p class="work_time">2021.10 - 2022.7</p>
                <p class="company_name">深圳市德特科技有限公司</p>
              </div>
            </div>
            <div v-appear="'animate__animated animate__fadeInRight'" class="right">
              <p class="professional">前端开发</p>
              <p class="info">
                应用技术：Vue、Vue-router、Vuex、Axios、Echarts、Vue-i18n、Element UI......
              </p>
              <p class="info">负责开发PC端管理系统，包括客户端登录注册、各类申请、审核、表格导入导出、打印等等。</p>
            </div>
          </div>
          <div class="experience shadow" v-appear="'animate__animated animate__slideInUp'">
            <div class="left flex-all-center">
              <div v-appear="'animate__animated animate__fadeInLeft'">
                <p class="work_time">2022.8 - Now</p>
                <p class="company_name">深圳市小河狸科技有限公司</p>
              </div>
            </div>
            <div v-appear="'animate__animated animate__fadeInRight'" class="right">
              <p class="professional">前端开发</p>
              <p>应用技术：Vue、React Native、Vue-router、Element UI...</p>
              <p class="info">负责小河狸产品的开发、维护。包括小程序、App、PC端</p>
              <p class="info">已上线：河狸建筑(小程序)、<a href="https://xm.helii.cn">PC前台</a></p>
            </div>
          </div>
        </ContentWrapper>
      </section>
      <section id="contact">
        <ContentWrapper v-appear="'animate__animated animate__zoomIn'" title="Contact Me（联系我）">
          <div class="row">
            <div class="flex-1">
              <h4>Feel free to contact me</h4>
              <form action="https://formspree.io/f/xvoylpdl" method="POST">
                <div class="form-item">
                  <label class="flex-all-center">
                    Email
                    <input type="email" name="email" value="caihuancheng923@qq.com">
                  </label>
                </div>
                <div class="form-item">
                  <label>
                    Message:
                    <textarea name="message"></textarea>
                  </label>
                </div>
                <!-- your other form fields go here -->
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </ContentWrapper>
      </section>
    </main>
    <footer>
      <p>CAI'CV</p>
      <p>&copy;CAI'CV.All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
#app {
  height: 100vh;
  overflow: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

h1 {
  color: #fff;
}

header {
  height: 60vh;
  background: url('@/assets/cover.jpg');
  background-size: cover;
}

nav {
  position: fixed;
  top: 0;
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 1.5em;
  z-index: 999;
}

nav.nav-bg {
  background-color: #009688;
}

nav>div {
  max-width: 992px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a {
  display: inline-block;
  line-height: 40px;
}

nav a:not(.active) {
  font-size: 16px;
  margin-left: 2em;
  color: #fff;
}

nav a:hover {
  border-bottom: 1px solid #fff;
  /* background-color: rgba(0, 0, 0, .1); */
}
footer {
  font-size: 12px;
  text-align: center;
  padding: 2em;
}
#toggler:checked~.navbar-collapse {
  transform: translateX(0);
}

#toggler:checked~label {
  transform: translateX(-280px);
}

.toggler {
  transition: transform .5s ease-out;
}

#toggler~label span {
  transition: all .5s ease-out;
}

#toggler:checked~label div span:nth-child(1) {
  transform: rotate(45deg);
  margin-top: 15px;
  margin-left: 2px;
}

#toggler:checked~label>div span:nth-child(2) {
  display: none;
}

#toggler:checked~label>div span:nth-child(3) {
  transform: rotate(-45deg);
  margin-top: -3px;
  margin-left: 0px;
}

.navbar-toggler {
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 999;
}

.navbar-toggler span {
  display: block;
  width: 100%;
  height: 5px;
  border-bottom: 1px solid #fff;
}

.logo {
  font-size: 18px;
}

.wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
}

.contain {
  width: 100vw;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, .2);
  background: radial-gradient(rgba(0, 0, 0, .15) 30%, rgba(0, 0, 0, .2) 50%);
  text-align: center;
}

.portrait::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
}

.portrait {
  width: 180px;
  height: 180px;
  border-radius: 50%;
}

.p-h {
  max-width: 960px;
  margin: -1em auto 0;
  /* margin-top: -1em; */
  color: #fff;
}

.p-h p {
  font-size: 14px;
  margin-top: 1em;
}

.navbar-collapse {
  display: flex;
  transition: transform .5s ease-out;
}

.download {
  padding: 1em;
  margin: 1.5em 0;
  background-color: rgba(255, 188, 5, 0.8);
  border: none;
  color: #fff;
}

.download:hover {
  background-color: rgba(255, 188, 5, 0.9);
}

.round {
  position: relative;
}

section {
  width: 100vw;
  padding: 70px 0 0;
  /* background-color: blue; */
}

section p {
  font-size: 13.5px;
  line-height: 1.6em;
}

h4 {
  font-weight: bold;
}

.info {
  margin-top: 2em;
}


.field {
  display: inline-block;
  width: 150px;
  margin-top: 1.5em;
  font-size: 14px;
  font-weight: bold;
}

.row {
  gap: 1em;
}

.col {
  width: 100%;
  padding: .5em;
}

.cell {
  display: flex;
  justify-content: space-between;
  margin: 0 1em 0 0;
  line-height: 2em;
}

.cell-title {
  line-height: 1.6em;
  font-size: 16px;
  font-weight: 400;
}

.cell-number {
  text-align: right;
}

.bg-progress {
  position: relative;
  background-color: #00968820;
}

.progress {
  width: 0;
  position: relative;
  height: 10px;
  background-color: #009688;
  transition: width .5s ease-out;
}

.progress::before {
  content: attr(num);
  position: absolute;
  left: 0;
  top: 0;
  width: attr(num);
  height: 10px;
  background-color: #009688;
}

.round::before {
  content: "";
  position: absolute;
  width: 180px;
  height: 180px;
  background-color: #fff;
  border-radius: 50%;
  border: 5px solid rgba(76, 255, 174, 0.2);
  z-index: 999;
  background: none;
  animation: pulsate 1.6s ease-in infinite;
}

.experience {
  margin: 1em 0 2em;
}

.company_name {
  font-size: 20px;
}

.work_time {
  font-size: 18px;
}

.experience .left {
  background-color: #fff;
  text-align: center;
  background-color: #009688;
  color: #fff;
  padding: 1em;
}

.experience .right {
  padding: 0 1em 1em;
}

.professional {
  font-size: 16.5px;
  font-weight: 400;
  line-height: 1.6em;
  margin-top: .3em;
}

.info a {
  color: #0700c5;
  text-decoration: underline;
}

input,
textarea {
  width: 100%;
}

#contact {
  background: url('@/assets/cover-2.jpg') no-repeat center center;
  padding-bottom: 70px;
}

.form-item input {
  outline: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-left: .8rem;
  padding: 5px;
  border-bottom: 1px solid #eee;
}

.form-item label {
  width: 100%;
  font-size: 13px;
}

.form-item textarea {
  outline: none;
  display: block;
  min-height: 100px;
  margin-top: .5rem;
  border-radius: 5px;
}

button[type=submit] {
  display: block;
  margin: 1em auto 0;
  padding: 1em 5em;
  background-color: #009688;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 15px;
}

@keyframes pulsate {
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}

@media screen and (min-width:990px) {
  .navbar-toggler {
    display: none;
  }

  .navbar-collapse ul {
    display: flex;
  }

  .row {
    display: flex;
  }

  .experience {
    display: flex;
  }

  .experience .left {
    width: 35%;
    min-height: 150px;
  }
}

@media screen and (max-width: 990px) {
  .navbar-collapse {
    width: 280px;
    height: 100vh;
    background-color: #009688;
    position: fixed;
    right: 0;
    top: 0;
    transform: translateX(100%);
    display: block;
  }

  .container {
    margin: 0 1em;
  }

  section {
    padding-top: 2em;
  }

  #contact {
    padding-bottom: 2em;
  }
}
</style>
