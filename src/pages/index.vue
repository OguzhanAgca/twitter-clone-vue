<route lang="yaml">
redirect:
  name: index-home
</route>

<script setup lang="ts"></script>

<template>
	<RouterView v-slot="{ Component, route }">
		<component :is="Component" :key="route" />
	</RouterView>
</template>
