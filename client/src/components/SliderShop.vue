<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/e2489a153544611.6331e2e899591.jpg",
        "https://www.kickgame.co.uk/cdn/shop/files/Best_Sellers_Desktop_Banner_1920_x_650.jpg?v=1698660074&width=1920",
        "https://www.ncrsport.com/berita/wp-content/uploads/2018/05/931581-download-free-basketball-shoes-wallpapers-1920x1080-for-pc.jpg",
        "https://cdn.lesitedelasneaker.com/wp-content/images/2021/02/nike-basketball-cosmic-unity-banner.jpg",
        "https://sneakernews.com/wp-content/uploads/2020/08/nike-lebron-soldier-14-kay-yow-DC2394-001-6.jpg?w=1140",
        "https://giaybongrochinhhang.com/wp-content/uploads/2023/06/Giay-bong-ro-nam-Puma-MB-02-Rick-And-Morty-377411-02-7.jpg",
        "https://i.ytimg.com/vi/kzLijXaQkQE/maxresdefault.jpg",
        "https://sneakernews.com/wp-content/uploads/2021/12/Nike-Kyrie-8-DC9134-100-4.jpg"
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>

<template>
<div class="slider">
    <transition-group>
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#10094; Previous</a>
    <a class="next" @click="next" href="#">&#10095; Next</a>
  </div>
</template>
<style scoped>

.slider{
  background-color: black;
}

img {
  margin: 0 auto;
  height:650px;
  width:100%;
  align-self: center;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 4px 4px 4px 4px;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}
</style>