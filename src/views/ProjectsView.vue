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
                <button>ViewDetail</button>
            </div>
        </div>
    </div>
</template>

<style>
button{
    margin-top: 15PX;
    padding: 5px;
    background-color: rgb(107, 169, 107);
    border-radius: 10px;
    color: white;
}
button:hover{
    color: red;
}

h1{
    margin-top: 30px;
}
.card {
    width: 25%;
    height: 170px;
    border: 1px solid black;
    border-radius: 10px;
    text-align: center;
    background-color: aqua;
}
.box{
    margin-top: 20px;
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.view-h2{
    color: rgb(48, 12, 193);
    margin-top: 20px;
}
p{
    margin-top: 40px;
}
</style>
