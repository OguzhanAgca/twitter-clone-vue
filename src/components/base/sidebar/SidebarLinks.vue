<script setup lang="ts"></script>

<template>
	<!-- Home -->
	<RouterLink
		class="flex w-full items-center gap-4 py-2.5 pr-2.5 pl-4 hover:cursor-pointer hover:bg-slate-200 sm:w-fit sm:rounded-full sm:pl-2.5 md:py-2.5 md:px-3"
		exact-active-class="link-active"
		:to="{ name: 'index-home' }"
	>
		<HomeLogo class="w-7" color="#000" />

		<span class="block text-xl sm:hidden md:block">Home</span>
	</RouterLink>

	<!-- Explore -->
	<RouterLink
		class="flex w-full items-center gap-4 py-2.5 pr-2.5 pl-4 hover:cursor-pointer hover:bg-slate-200 sm:w-fit sm:rounded-full sm:pl-2.5 md:py-2.5 md:px-3"
		exact-active-class="link-active"
		:to="{ name: 'index-explore' }"
	>
		<ExploreLogo class="w-7" color="#000" />

		<span class="block text-xl sm:hidden md:block">Explore</span>
	</RouterLink>

	<!-- Notifications -->
	<RouterLink
		class="flex w-full items-center gap-4 py-2.5 pr-2.5 pl-4 hover:cursor-pointer hover:bg-slate-200 sm:w-fit sm:rounded-full sm:pl-2.5 md:py-2.5 md:px-3"
		exact-active-class="link-active"
		:to="{ name: 'index-notifications' }"
	>
		<NotificationsLogo class="w-7" color="#000" />

		<span class="block text-xl sm:hidden md:block">Notifications</span>
	</RouterLink>

	<!-- Messages -->
	<RouterLink
		class="flex w-full items-center gap-4 py-2.5 pr-2.5 pl-4 hover:cursor-pointer hover:bg-slate-200 sm:w-fit sm:rounded-full sm:pl-2.5 md:py-2.5 md:px-3"
		exact-active-class="link-active"
		:to="{ name: 'index-messages' }"
	>
		<MessagesLogo class="w-7" color="#000" />

		<span class="block text-xl sm:hidden md:block">Messages</span>
	</RouterLink>

	<!-- Bookmarks -->
	<RouterLink
		class="flex w-full items-center gap-4 py-2.5 pr-2.5 pl-4 hover:cursor-pointer hover:bg-slate-200 sm:w-fit sm:rounded-full sm:pl-2.5 md:py-2.5 md:px-3"
		exact-active-class="link-active"
		:to="{ name: 'index-bookmarks' }"
	>
		<i
			class="iconify text-2xl md:text-3xl"
			data-icon="bi:bookmark"
			aria-hidden="true"
		></i>

		<span class="block text-xl sm:hidden md:block">Bookmarks</span>
	</RouterLink>

	<!-- Profile -->
	<RouterLink
		class="flex w-full items-center gap-4 py-2.5 pr-2.5 pl-4 hover:cursor-pointer hover:bg-slate-200 sm:w-fit sm:rounded-full sm:pl-2.5 md:py-2.5 md:px-3"
		exact-active-class="link-active"
		:to="{ name: 'index-profile' }"
	>
		<ProfileLogo class="w-7" color="#000" />

		<span class="block text-xl sm:hidden md:block">Profile</span>
	</RouterLink>
</template>
