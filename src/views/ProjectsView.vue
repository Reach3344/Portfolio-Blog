<script setup>
import { projects } from '@/data/projects.ts'
</script>

<template>
    <div class="card-project">
        <h1>Welcome to ProjectsView Page.</h1>

        <div class="box">
            <div class="card" v-for="project in projects" :key="project.id">
                <h2 class="view-h2">{{ project.title }}</h2>
                <p>{{ project.description }}</p>



                <div class="buton">
                    <RouterLink :to="{
                        name: 'projectdetail',
                        params: { id: project.id }
                    }">
                        View Details
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-project {
    padding: 30px;
    min-height: 100vh;
    background: #f4f7fc;
}

h1 {
    text-align: center;
    margin-bottom: 30px;
    color: #2c3e50;
    font-size: 32px;
}

.box {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;
}

.card {
    width: 300px;
    background: white;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: 0.3s ease;
    text-align: center;
}

.view-h2 {
    color: #3498db;
    margin-bottom: 15px;
}

p {
    color: #555;
    line-height: 1.6;
    margin-bottom: 20px;
}

.buton {
    display: flex;
    justify-content: center;
}

.buton a {
    text-decoration: none;
    background-color: #3498db;
    color: white;
    padding: 10px 18px;
    border-radius: 8px;
    transition: 0.3s;
    font-weight: bold;
}


</style>
