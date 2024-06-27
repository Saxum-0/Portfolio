<script setup></script>

<template>
    <div class="error">
        <h3>404</h3>
        <P>La Page que vous recherchez n'existe pas</P>
        <img src="https://img.icons8.com/?size=100&id=10741&format=png&color=000000" alt="sens interdit">
    </div>
</template>
<style scoped>
    .error {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 600px;
        margin-top: 5%;
    }
    .error p {
        font-size: xx-large;
        margin-bottom: 20px;
    }
    .error h3 {
        font-size: 90px;
    }
    .error img {
        width: 10%;
    }

</style>
