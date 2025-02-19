<template>
    <div class="headline">
        {{ name }}
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true
            }
        },
    };
</script>

<style scoped>
    .headline {
        @apply text-center text-[18px] font-bold transition-all duration-300 ease-in-out pb-1 border-b-4 border-[#E9F3FF] text-[#2f393f] dark:text-white leading-[2rem] mb-4 tracking-tight
    }
</style>