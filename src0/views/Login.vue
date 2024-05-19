<script setup>
import LoginAsyncComponent from '@/components/LoginAsyncComponent.vue';


</script>
<template>
  <div>
    <Suspense>
    <LoginAsyncComponent/>
  </Suspense>
  </div>
</template>