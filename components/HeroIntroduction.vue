<template>
  <article class="hero">
    <section>
      <h1>azabroflovski</h1>

      <p>
        I am a software developer, currently working at <strong>Insane Group Co.</strong> I have a lot of experience in developing web user interfaces,
        server applications, as well as wrote some desktop applications.
      </p>
      <p>
        Most of my work is open source and publicly available on GitHub.
      </p>

      <p>
        Outside of programming and trying to find a life partner, I enjoy doing photography, playing Dota 2, love plov and sushi.
      </p>
    </section>

    <section>
      <h3>Find me on</h3>

      <div v-for="item in socialList" :key="item.text">
        - {{ item.text }} <a :href="item.url" target="_blank">{{ item.url }}</a>
      </div>

      <div class="mt-5">Mail me at <a href="mailto:hi@azabroflovski.uz">hi@azabroflovski.uz</a></div>
    </section>

    <footer>
      &copy; azabroflovski, 2016-present
    </footer>
  </article>
</template>

<script lang="ts" setup>
const socialList = [
  {
    text: "GitHub",
    url: "https://github.com/azabroflovski"
  },
  {
    text: "Linkedin",
    url: "https://www.linkedin.com/in/azabroflovski"
  },
  {
    text: "Instagram",
    url: "https://instagram.com/azabroflovski"
  },
  {
    text: "Telegram",
    url: "https://azabroflovski.t.me"
  },
  {
    text: "Steam",
    url: "https://steamcommunity.com/id/azabroflovski"
  }
]
</script>

<style lang="scss">
.hero {
  max-width: 600px;
  line-height: 1.6;

  @media (min-width: 1024px) {
    margin-top: 10vh;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1;
  }

  h1 {
    font-size: 32px;
  }

  footer {
    border-top: 1px solid #333;
    margin-top: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 16px;
  }
}
</style>
