<template>
  <div>
    <a :href="data.href">
      <div class="thebox">
        <img
          :src="require(`~/assets/img/${data.img_src}`)"
          :style="{
            filter: `drop-shadow(14px 14px 80px ${data.bg_color}) blur(3px)`,
          }"
        />
        <div class="thebox-text-content">
          <h4>{{ data.title }}</h4>
          <h6 v-html="data.description"></h6>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'TheBox',
  props: ['data'],
}
</script>
<style lang="scss">
.thebox {
  display: flex;
  align-items: center;
  height: 300px;
  margin: 30px 0;
  width: 100%;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  border-radius: 50px;

  .thebox-text-content {
    padding: 40px;
  }

  img {
    height: 100%;
    border-radius: 50%;
    aspect-ratio: 1/1;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    height: auto;

    .thebox-text-content {
      padding: 20px;
    }
    img {
      width: 100%;
      aspect-ratio: auto;
      height: auto;
    }
  }
}
</style>
