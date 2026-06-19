<template>
    <div class="not">
        <div class="notfound">
            <h2 class="h2">
                404 Page NotFound.
            </h2>
        </div>
    </div>
    <div class="home">
          <RouterLink to="/" class="navbar"> Back Home</RouterLink> 
    </div>
</template>
<style>
.notfound {
    width: 30%;
    height: 40px;
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
}



.h2:hover {
    color: green;
}
.not{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    text-align: center;
}
.home{
    text-align: center;
}
</style>