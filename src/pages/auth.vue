<route lang="yaml">
meta:
  layout: auth-layout
redirect:
  name: auth-index
</route>

<script setup lang="ts"></script>

<template>
	<RouterView v-slot="{ Component, route }">
		<component :is="Component" :key="route" />
	</RouterView>
</template>
