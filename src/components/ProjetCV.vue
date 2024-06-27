<script setup></script>
<template>
    <Div class="imgcv">
        <img src="../assets/images/CVSC.jpg" alt="CV">
    </Div>
    <div class="Comcv">
        <h3>Projet du CV</h3>
        <p>Date de création: Mars 2024</p>
        <p>Ce projet consistait à réaliser un CV selon différents critères imposés comme une maquette, une palette de couleur, des polices à uttiliser... Il devait être original sous forme de site internet dit statique. les technologies uttilisées sont Html et CSS.</p>
        <a href="https://github.com/Saxum-0/CV.git" target="_blank">Lien Github</a>

    </div>
</template>
<style scoped>
.imgcv {
    display: block;
    flex-direction: column;
    align-items: center;
    margin-left: 5%;
    margin-top: 2%;
}
.imgcv img {
    width: 85%;
    border-radius: 10%;
    border: 5px solid black;
    filter: drop-shadow(0 0 0.75rem black);
}
.Comcv {
    margin: 5%;
}
.Comcv a {
    margin-top: 5px;
    margin-left: 40%;
    font-size: large;
}
.Comcv a:hover{
    text-decoration: underline;
}
.Comcv p {
    margin-bottom: 5px;
}
</style>