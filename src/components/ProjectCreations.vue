<script></script>
<template>
    <div  id="projet" class="ContainerProjects">
        <H3>Projet : Curriculum Vitae</H3>
        <div class="cv">
            <RouterLink to="/projectViewCV"><img src="../assets/images/CVSC.jpg" alt="CV" title="Projet CV"></RouterLink>
        </div>
        <H3>Projet : Cahier des charges</H3>
        <div class="cc">    
            <RouterLink to="/projectViewCC"><img src="../assets/images/socks.jpg" alt="CC" title="Projet Cahier des charges"></RouterLink>
        </div>
        <H3>Projet : Espace Commentaire</H3>
        <div class="fc">    
            <RouterLink to="/projectViewFC"><img src="../assets/images/ComJS.jpg" alt="FC" title="Projet Commentaire automatisé"></RouterLink>
        </div>    
    </div>
</template>
<style>
    .ContainerProjects {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .containerProjects div {
        margin: 2%;
    }
    .ContainerProjects img {
        width: 1000px;
        height: auto;
        margin: 5%;
        border-radius: 5%;
        border: 5px solid grey;
        overflow: hidden;
        transition: transform .1s;
        filter: brightness(25%);
    }
    .ContainerProjects img:hover {
        -ms-transform: scale(1.2);
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
        filter: brightness(75%);
        box-shadow: 8px 8px 10px 0 black;
    }

    .ContainerProjects H3 {
        color: black;
        margin-top: 1%;
    }
    @media (max-width: 1000px){
        .ContainerProjects img {
        width: 400px;
        height: auto;
        margin: 2%;
    }
    
}
</style>