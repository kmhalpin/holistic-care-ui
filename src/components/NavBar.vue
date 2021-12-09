<template>
  <nav class="h-16
    z-50
    md:grid
    md:grid-cols-3
    bg-primary
    fixed
    md:static
    bottom-0
    inset-x-0
    overflow-clip
    overflow-hidden"
  >
    <div class="hidden md:col-span-2 md:flex items-center justify-start">
      <img width="70" class="pl-4" src="https://holisticareindonesia.com/wp-content/uploads/2021/10/logo-square.png" alt="logo">
    </div>
    <div class="md:col-span-1 flex items-center justify-around">
      <a href="" class="nav nav-inactive">
        <fa-icon :icon="['fas', 'book']" />
        <span class="block text-xs">logbook</span>
      </a>
      <a href="" class="nav nav-active">
        <fa-icon :icon="['fas', 'tasks']" />
        <span class="block text-xs">tugas</span>
      </a>
      <a href="" class="nav nav-inactive">
        <fa-icon :icon="['fas', 'qrcode']" />
        <span class="block text-xs">absensi</span>
      </a>
      <a href="" class="nav nav-inactive">
        <fa-icon :icon="['fas', 'table']" />
        <span class="block text-xs">chart</span>
      </a>
      <a href="" class="nav nav-inactive">
        <fa-icon :icon="['fas', 'sign-out-alt']" />
        <span class="block text-xs">logout</span>
      </a>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>
