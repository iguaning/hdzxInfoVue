<template>
  <div class="top">
    <div class="content">
      <div class="logo-details">
        <img src="@/assets/img/footer-logo/hdzx.png" alt="hdzx" class="logo__name">
      </div>
      <ul>
        <li>
          <a href="#">
            <i class="ri-home-smile-fill icon__box"></i>
            <span>学校主页</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="ri-mail-fill icon__box"></i>
            <span>校园信箱</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="ri-weibo-fill icon__box"></i>
            <span>学校微博</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="ri-road-map-fill icon__box"></i>
            <span>校园地图</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="bottom-details">
    <div class="bottom_text">
      <span class="copyright_text">Copyright &#169; 2022 <router-link to="/">SchoolInfo. </router-link>All Rights
        Reserved</span>
      <span class="policy_terms">
        <a href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备2022003299号-2</a>
        <a href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral" target="_blank">又拍云</a>提供CDN加速服务
      </span>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  background: var(--color-primary);
  box-shadow: -2px 0 4px rgba(0, 0, 0, 0.6);
}

.content {
  max-width: 78.125rem;
  margin: 0 auto;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    a {
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    span {
      display: block;
      color: var(--color-font-white-1);
    }

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }
  }
}

.logo-details {
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon__box {
  text-align: center;
  height: 35px;
  width: 35px;
  margin: 0 25px;
  line-height: 35px;
  color: var(--color-font-white-1);
  font-size: 25px;
}

.bottom-details {
  width: 100%;
  background: var(--color-bg-black-footer);
  //box-shadow: -2px 0 4px rgba(0, 0, 0, 0.6);
}

.bottom_text {
  max-width: 1250px;
  margin: auto;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;

  .policy_terms a:first-child {
    margin-right: 10px;
  }

  a:hover {
    opacity: 1;
    text-decoration: underline;
  }

  span,
  a {
    font-size: 14px;
    font-weight: 300;
    color: var(--color-font-white-1);
    opacity: 0.8;
    text-decoration: none;
    z-index: 1;
    text-align: center;
  }
}

@media (max-width: 806px) {
  .content {
    display: flex;
    flex-direction: column;
  }

  .top {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    ul {
      margin-top: 20px;
      transition: all 0.3s ease;
    }
  }
}

@media (max-width: 600px) {
  .bottom_text {
    flex-direction: column;
  }
}
</style>