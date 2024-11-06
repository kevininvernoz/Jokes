<template>
  <main>
    <div class="mt-6 p-6 border rounded-lg shadow ">
      <ListJokes :maxJokes="10"></ListJokes>
    </div>
  </main>
</template>


<script setup>
import ListJokes from "@/components/ListJokes.vue";

</script>
<style></style>
