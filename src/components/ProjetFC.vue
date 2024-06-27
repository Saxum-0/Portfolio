<script setup></script>
<template>
    <Div class="imgfc">
        <img src="../assets/images/commentaire.jpg" alt="Com">
        <img src="../assets/images/ComJS.jpg" alt="comcode">
    </Div>
    <div class="Comfc">
        <h3>Projet du Commentaire automatisé</h3>
        <p>Date de création: Mai 2024</p>
        <p>Ce projet consistait à reprendre un formulaire de commentaire existant et de le rendre dynamique. Grace à Javascript il etait possible de laisser des commentaires et de gérer les erreurs de saisies</p>
        <a href="https://github.com/Saxum-0/EspaceCommentaire.git" target="_blank">Lien Github</a>
    </div>
</template>
<style scoped>
.imgfc {
    display: block;
    flex-direction: column;
    align-items: center;
    margin-left: 5%;
    margin-top: 2%;
}
.imgfc img {
    width: 85%;
    border-radius: 10%;
    border: 5px solid black;
    filter: drop-shadow(0 0 0.75rem black);
    margin-top: 2%;
    margin-bottom: 2%;
}
.Comfc {
    margin: 5%;
}
.Comfc a {
    margin-top: 5px;
    margin-left: 40%;
    font-size: large;
}
.Comfc a:hover{
    text-decoration: underline;
}
.Comfc p {
    margin-bottom: 5px;
}
</style>