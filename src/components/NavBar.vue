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
      <a href="" class="nav">
        <fa-icon class="text-xl" :icon="['fas', 'home']" />
        <span class="block text-xs">Home</span>
      </a>
      <a href="" class="nav">
        <fa-icon class="text-xl" :icon="['fas', 'book']" />
        <span class="block text-xs">Logbook</span>
      </a>
      <a href="" class="nav">
        <fa-icon class="text-xl" :icon="['fas', 'camera']" />
        <span class="block text-xs">Absensi</span>
      </a>
      <a href="" class="nav">
        <fa-icon class="text-xl" :icon="['fas', 'tasks']" />
        <span class="block text-xs">Assesment</span>
      </a>
      <a href="" class="nav">
        <fa-icon class="text-xl" :icon="['fas', 'edit']" />
        <span class="block text-xs">Tugas</span>
      </a>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
