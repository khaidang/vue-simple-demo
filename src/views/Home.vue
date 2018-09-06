<template>
  <div class="home page">
    <Slider />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Slider from '@/components/Slider.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Slider
  }
}
</script>
