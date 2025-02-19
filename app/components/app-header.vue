<template>
    <header class="flex justify-between items-center mt-10 p-1 border-b-2 border-[#FF9000]">
        <NuxtLink to="/">
            <NuxtImg src="/BBU_logo_klein.jpg" width="51" height="51">Bowling Bayern</NuxtImg>
        </NuxtLink>
        <div class="text-white" v-if="!showNav">Willkommen auf der BBU Statistikseite</div>
        <nav v-if="showNav">
            <NuxtLink to='/' :class="['menu-link', { active: isActive('index') }]">Startseite</NuxtLink>
            <NuxtLink to='/player' :class="['menu-link', { active: isActive('player') }]">Spieler</NuxtLink>            
            <NuxtLink to='/league' :class="['menu-link', { active: isActive('league') }]">Liga</NuxtLink>            
            <NuxtLink to='/team' :class="['menu-link', { active: isActive('team') }]">Team</NuxtLink>            
        </nav>
        <div v-if="showNav">
            <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text selected-text '}, width: 'w-64'}">
                <UAvatar icon="i-heroicons-bars-3" size="sm" :ui="{
                    background: 'bg-white',
                    text: 'bg-[#015092]'
                }"/>

                <template #account="{ item }">
                    <div class="text-left">
                        <p>Eingeloggt als:</p>
                        <p class="font-medium text-gray-900 dark:text-white">{{ user.email }}</p>
                    </div>
                </template>
            </UDropdown>
        </div>
    </header>
</template>

<script setup lang="ts">
    import { useRoute } from 'vue-router';
    const route = useRoute();

    const version = useRuntimeConfig().public.version;
    const supabase = useSupabaseClient();
    const user = useSupabaseUser();
    const showNav = ref(false);    

    const items = [
        [
            {
                slot: 'account',
                disabled: true
            },
            {
                label: `Version: ${version}`,
                disabled: true
            }
        ],
        [
            {
                label: 'Logout',
                icon: 'i-heroicons-arrow-left-on-rectangle',
                click: async () => {
                    await supabase.auth.signOut();
                    return navigateTo('/login');
                }
            }
        ]
    ]

    const url = '';

    const isActive = (name) => {
        return route.name === name;
    };

    watch(user, ()=>{
        user.value ? showNav.value = true : showNav.value = false;
    }, {immediate: true})
</script>

<style scoped lang="css">
    header{
        @apply bg-[#015092];
        margin-top: 0px;
    }
    .menu-link {
        text-decoration: none;
        padding-left: 5px;
        padding-right: 5px;
        color: white;
        margin-right: 2.5rem;
        transition: all 0.3s ease;
    }
    .menu-link:hover {
        cursor: pointer;
        border-bottom: 1px solid #FF9000;
    }
    .active {
        color: #FF9000;         
    }
</style>