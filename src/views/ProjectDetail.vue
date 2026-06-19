<script setup>
import { useRoute } from 'vue-router'
import { projects } from '@/data/projects.ts'

const route = useRoute()

const project = projects.find(
  p => p.id === Number(route.params.id)
)
</script>

<template>
  <div class="body-box">
    <div class="container">
    <div v-if="project">
      <h1>{{ project.title }}</h1>
      <p>
        <strong>ID:</strong>
        {{ project.id }}
      </p>

      <p>
        <strong>Description:</strong>
        {{ project.description }}
      </p>

      <p>
        <strong>Created By:</strong>
        {{ project.create }}
      </p>

      <p>
        <strong>Date:</strong>
        {{ project.date }}
      </p>
    </div>

    <div v-else>
      <h2>Project Not Found</h2>
    </div>


    <RouterLink to="/projects">Projects </RouterLink>
  </div>
  </div>
</template>

<style scoped>
.body-box{
    display: flex;
    justify-content: center;
}
.container {
  max-width: 800px;
  margin: 40px 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
}

h1 {
  margin-bottom: 20px;
color: #3498db;
}

p {
  margin: 10px 0;
}
</style>