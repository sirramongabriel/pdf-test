<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <PDF/> -->
    <chicken></chicken>
  </div>
</template>

<script>
// @ is an alias to /src
import chicken from '@/components/chicken';

export default {
  name: 'Home',
  components: {
    chicken
  }
}
</script>
