<script setup>
import { ref } from 'vue';

defineProps(['title', 'animation'])

const currentObj = ref(null)

</script>

<template>
  <div class="container">
    <h2>{{ title || '' }}</h2>
    <slot>

    </slot>
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
  font-weight: bold;
}

.container {
  max-width: 990px;
  height: 100%;
  margin: 0 auto;
  border: 1px solid #efefef;
  border-radius: 3px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, .2);
  padding: 8px 10px 30px;
}
</style>
<style>
@media screen and (min-width: 992px) {
  .wrap>div {
    flex: 1;
  }
}
</style>