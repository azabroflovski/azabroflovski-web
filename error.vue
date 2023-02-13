<template>
  <div>
    <div class="container mx-auto">
      <div class="h-screen flex justify-center items-center">
        <div class="error">
          <div class="text-gray">// error.json</div>
          <pre style="white-space: break-spaces;">{{ error }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  error: {
    type: Object
  }
})
</script>
