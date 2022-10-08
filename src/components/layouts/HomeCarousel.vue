<template>
  <el-carousel :interval="5000" arrow="hover" height="300px">
    <el-carousel-item>
      <img src="../../assets/img/carousel/01.jpg" alt="01">
    </el-carousel-item>
    <el-carousel-item>
      <img src="../../assets/img/carousel/02.jpg" alt="02">
    </el-carousel-item>
    <el-carousel-item>
      <img src="../../assets/img/carousel/03.jpg" alt="03">
    </el-carousel-item>
    <el-carousel-item>
      <img src="../../assets/img/carousel/04.jpg" alt="04">
    </el-carousel-item>
  </el-carousel>
</template>

<script setup>

</script>

<style scoped>
.el-carousel {
  border-radius: 8px;
  width: 900px;
}

img {
  max-width: 200%;
  max-height: 200%;
}

/* .el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
</style>