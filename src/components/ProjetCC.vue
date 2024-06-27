<script setup></script>
<template>
    <Div class="imgcc">
        <img src="../assets/images/socks.jpg" alt="Socketterie">
        <img src="../assets/images/maquette.jpg" alt="Maquette">
    </Div>
    <div class="Comcc">
        <h3>Projet du Cahier des charges</h3>
        <p>Date de création: Avril 2024</p>
        <p>Ce projet consistait à réaliser le cahier des charges de l'entreprise fictive La socketterie répondant aux besoins d'une entreprise physique basée à Nice, souhaitant avoir un site de vente pour développer sa clientèle. Le cahiert des charges a été réalisé sur PowerPoint et Excel</p>
        <a href="https://github.com/Saxum-0/CahierDesCharges.git" target="_blank">Lien Github</a>

    </div>
</template>
<style scoped>
.imgcc {
    display: block;
    flex-direction: column;
    align-items: center;
    margin-left: 5%;
    margin-top: 2%;
}
.imgcc img {
    width: 85%;
    border-radius: 10%;
    border: 5px solid black;
    filter: drop-shadow(0 0 0.75rem black);
    margin-top: 2%;
    margin-bottom: 2%;
}
.Comcc {
    margin: 5%;
    display: block;
}
.Comcc a {
    margin-top: 5px;
    margin-left: 40%;
    font-size: large;
}
.Comcc a:hover{
    text-decoration: underline;
}
.Comcc p {
    margin-bottom: 5px;
}
</style>
