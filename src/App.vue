<template>
      <nav>
            <RouterLink to="/" class="navbar">Home</RouterLink> |
            <RouterLink to="/about">About</RouterLink>|
            <RouterLink to="/projects">Projects </RouterLink>
      </nav>
      <RouterView></RouterView>

</template>

<style>
nav{
      display: flex;
      width: 100%;
      height: 50px;
      justify-content: center;
      align-items: center;
      gap: 20px;
      background-color: #3498db;
      font-size: 20px;
      border-radius: 5px;
}

</style>