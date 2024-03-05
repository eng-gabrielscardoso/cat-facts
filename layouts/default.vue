<template>
  <div class="flex h-screen w-full min-h-full flex-col">
    <TheHeader class="h-fit w-full" />

    <main class="flex-grow h-full w-full">
      <slot />
    </main>
  </div>
</template>