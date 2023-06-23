export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();
  if (user.value === null) {
    return navigateTo('/signin')
  }
})