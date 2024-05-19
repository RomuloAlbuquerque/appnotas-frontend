<script setup>
import AtualizarAsyncComponent from '@/components/AtualizarAsyncComponent.vue';
</script>

<template>
  <div>
    <Suspense>
      <AtualizarAsyncComponent/>
    </Suspense>
  </div>
</template>