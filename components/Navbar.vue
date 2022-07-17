<!-- Please remove this file from your project -->
<template>
  <div>
    <div :class="`hidden md:block fixed ml-0 min-h-screen w-24 rounded-r-2xl bg-${$store.state.theme.templateMode}-complementary`">
      <!-- top left icon logo -->
      <NuxtLink to="/">
        <div :class="`h-24 w-24 rounded-r-2xl bg-${$store.state.theme.templateMode}-cta-btn relative`">
          <Logo/>
          <div :class="`z-10 bottom-0 absolute h-12 w-24 rounded-br-2xl rounded-tl-2xl bg-${$store.state.theme.templateMode}-cta-btn-shadow`">
          </div>
        </div>
      </NuxtLink>
      <!-- bottom left section -->
      <div class="bottom-0 absolute">
        <div class="template-color-toggle ml-9 mb-8">
          <div v-if="$store.state.theme.templateMode == 'dark'" :class="`text-${$store.state.theme.templateMode}-unhover-text hover:text-${$store.state.theme.templateMode}-text cursor-pointer transition`" @click="toggleMode">
            <font-awesome-icon :icon="['far', 'sun']" size="lg"/>
          </div>
          <div v-else :class="`text-${$store.state.theme.templateMode}-unhover-text hover:text-${$store.state.theme.templateMode}-text cursor-pointer transition`" @click="toggleMode">
            <font-awesome-icon :icon="['fas', 'moon']" size="lg"/>
          </div>
        </div>
        <div :class="`w-24 h-24 pt-7 pl-7 border-t-2 border-col border-${$store.state.theme.templateMode}-unhover-text`">
          <div class="h-10 w-10">
            <img src="~/assets/img/user-thumbnail.jpg" class="rounded-full"/>
          </div>
        </div>
      </div>
    </div>
    <div :class="`md:hidden fixed flex justify-between ml-0 h-16 min-w-full bg-${$store.state.theme.templateMode}-complementary`">
      <!-- top left icon logo -->
      <NuxtLink to="/">
        <div :class="`h-16 w-16 rounded-r-2xl bg-${$store.state.theme.templateMode}-cta-btn relative`">
          <Logo/>
          <div :class="`z-10 bottom-0 absolute h-8 w-16 rounded-br-2xl rounded-tl-2xl bg-${$store.state.theme.templateMode}-cta-btn-shadow`">
          </div>
        </div>
      </NuxtLink>
      <!-- bottom left section -->
      <div class="flex align-center">
        <div class="template-color-toggle mr-5 my-auto">
          <div v-if="$store.state.theme.templateMode == 'dark'" :class="`text-${$store.state.theme.templateMode}-unhover-text hover:text-${$store.state.theme.templateMode}-text cursor-pointer transition`" @click="toggleMode">
            <font-awesome-icon :icon="['far', 'sun']" size="lg"/>
          </div>
          <div v-else :class="`text-${$store.state.theme.templateMode}-unhover-text hover:text-${$store.state.theme.templateMode}-text cursor-pointer transition`" @click="toggleMode">
            <font-awesome-icon :icon="['fas', 'moon']" size="lg"/>
          </div>
        </div>
        <div :class="`w-20 h-16 pt-4 pl-5 border-l-2 border-col border-${$store.state.theme.templateMode}-unhover-text`">
          <div class="h-8 w-8">
            <img src="~/assets/img/user-thumbnail.jpg" class="rounded-full"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleMode(){
      this.$store.commit('theme/handleThemeToggle')
    }
  }
}
</script>
