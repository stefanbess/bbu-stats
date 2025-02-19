<template>
    <UCard v-if="!success"> 
      <form @submit.prevent="handleLogin">
        <UFormGroup label="E-Mail" name="email" class="mb-4" :required="true">
          <UInput type="email" placeholder="E-Mail" required v-model="email" />
        </UFormGroup>
        <UFormGroup label="Passwort" name="password" class="mb-4" :required="true">
          <UInput type="password" placeholder="Passwort" required v-model="password" />
        </UFormGroup>
  
        <UButton type="submit" variant="solid" color="black" :loading="pending" :disabled="pending">Login</UButton>
      </form>
    </UCard>
  </template>

<script setup>
    const success = ref(false);
    const email = ref('');
    const password = ref('');
    const pending = ref(false);
    const { toastError } = useAppToast();
    const supabase = useSupabaseClient()
    const redirectUrl = useRuntimeConfig().public.baseUrl

    useRedirectIfAuthenticated();
    const handleLogin = async () => {
        pending.value = true;

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email: email.value,
                password: password.value
            });

            if (error.message) {
                toastError({
                    title: 'Fehler beim Authentifizieren',
                    description: error.message
                });
            } 
            else {
                success.value = true;
            }
        } 
        finally {
            pending.value = false;
        }
    }
</script>