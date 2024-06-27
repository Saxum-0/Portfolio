<script>
    import { RouterLink, RouterView} from 'vue-router'
</script>
<template>
    <header>
        <div class="menuname">
            <RouterLink to="/"><img src="https://img.icons8.com/?size=100&id=63063&format=png&color=000000" alt="P"></RouterLink>
        </div>
        <div class="nav">
            <nav>
                <RouterLink to="/">Accueil</Routerlink>
                <RouterLink to="/contact">Contact</Routerlink>
                <a href="/#projet">Créations</a>
            </nav>
        </div>
    </header>
        <RouterView />
</template>

<style scoped>
header {
    display: flex;
    flex-direction: row;
}

.menuname {
    color: whitesmoke;
    width: 75%;
    border-bottom: 2px solid black;


}
.menuname img {
    height: 40px;
    margin-top: 2px;
}
.nav {
    color: whitesmoke;
    border-bottom: 2px solid black;
    width: auto;
    margin-top: 4px;
}

@media (hover: hover) {
  a:hover {
    text-decoration: underline;
  }
}
</style>