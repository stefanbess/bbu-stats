<template>
    <div class="container mx-auto max-w-6xl">
        <AppHeader />
        <main>
            <slot />
        </main>
    </div>
</template>

<script setup lang="ts">
    useHead({
      link: [
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
            crossorigin: ''
        }
      ]
    });

    definePageMeta({
        colorMode: 'light',
    })
</script>

<style lang="css">
    body {
        font-family: 'Roboto';
        /*@apply bg-[#E9F3FF]*/
    }
    main{
        height: 100vh;
        @apply bg-white
    }
</style>