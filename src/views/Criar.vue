<script setup>
import CriarAsyncComponent from '@/components/CriarAsyncComponent.vue';
</script>

<template>
  <div>
    <Suspense>
    <CriarAsyncComponent/>
  </Suspense>
  </div>
</template>