<template>
    <SpeedInsights />
    <div class="container mx-auto max-w-6xl">
        <AppHeader />
        <main>
            <slot />
        </main>
    </div>
</template>

<script setup lang="ts">
    import { SpeedInsights } from "@vercel/speed-insights/nuxt";

    const reqUrl = useRequestURL();
    const content = reqUrl.href;
    useHead({
        titleTemplate: 'BBU Statistiken - %s',
        link: [
            { rel: 'icon', type: 'image/png', href: '/BBU_logo_klein.jpg' },
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

    useSeoMeta({
        description: 'Seite für Spielstatistiken der BBU',
        ogTitle: 'BBU Statistiken',
        ogDescription: 'Seite für Spielstatistiken der BBU',
        ogImage: '/BBU_logo_klein.jpg',
        ogUrl: content,
        twitterTitle: 'BBU Statistiken',
        twitterDescription: 'Seite für Spielstatistiken der BBU',
        twitterImage: '/BBU_logo_klein.jpg',
        twitterCard: 'summary'
    });    

    definePageMeta({
        colorMode: 'light',
    })
</script>

<style lang="css">
    body {
        font-family: 'Roboto';
    }
    main{
        @apply bg-white;
    }
</style>