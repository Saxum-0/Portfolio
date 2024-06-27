<script setup></script>
<template>
    <div class="pierre">
        <div class="image">

            <img src="../assets/images/IMG_58.jpeg" alt="photo de profil">

        </div>
        <div class="presentation">
            <h1>Pierre FAIVRE</h1>

            <h2>Développeur Web</h2>

            <p>Je suis Pierre, développeur web
            fullstack situé en France. Ayant un parcourt atypiaue, j'ai travaillé dans le domaine de la comptabilité avant de développer un amour particulier pour la programmation et la sécurité informatique. j'ai commencé comme autodidacte et ensuite diplomé via le centre
            européen de formation.</p>
        </div>
    </div>    

    <div class="skill">

    <h3>Compétences uttilisées</h3>

        <div>
            <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="HTML">
            <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000" alt="CSS">
            <img src="https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000" alt="JS">
            <img src="https://img.icons8.com/?size=100&id=BUnExfsRs3CW&format=png&color=000000" alt="VUE">
        </div>
        <div>
            <img src="https://img.icons8.com/?size=100&id=117563&format=png&color=000000" alt="Word">
            <img src="https://img.icons8.com/?size=100&id=81726&format=png&color=000000" alt="PP">
            <img src="https://img.icons8.com/?size=100&id=UECmBSgBOvPT&format=png&color=000000" alt="Excel">
            <img src="https://img.icons8.com/?size=100&id=13677&format=png&color=000000" alt="Photoshop">
        </div>
    </div>

</template>
<style>
.pierre {
    display: flex;
    flex-direction: row;
}
.presentation {
width: 45%;
margin-top: 25%;
margin-right: 5%;
color: black;

}
.image {
width: 50%;
margin-top: 5%;

}
.image img {
  border-radius: 10%;
  width: 500px;
  height: 400px;
  margin-left: 10%;
}
@media (max-width: 800px){
    .pierre {
        flex-direction: column;
    }
    .presentation {
        margin-top: 2%;
        margin-bottom: 5%;
    }
}

h1 {
    font-size: 45px;
}
h2 {
    font-size: 35px;
}
h3 {
    font-size: 30px;
    margin-bottom: 3%;
    text-decoration: underline;
}
.skill {
    border-top: 2px solid black;
    border-bottom: 2px solid whitesmoke;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 5%;
    justify-content: space-between;
}
.skill div {
    margin-bottom: 3%;
}


</style>