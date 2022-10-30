<script setup lang="ts"></script>

<template>
	<RouterView v-slot="{ Component, route }">
		<Transition name="slide-x">
			<component :is="Component" :key="route" />
		</Transition>
	</RouterView>
</template>
