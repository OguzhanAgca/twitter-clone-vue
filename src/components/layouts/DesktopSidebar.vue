<script setup lang="ts"></script>

<template>
	<div
		class="hidden h-full w-full overflow-y-auto pt-1 pb-3 sm:flex sm:flex-col sm:justify-between"
	>
		<div class="pl-6 pr-4 md:pr-10">
			<div class="flex flex-col items-end gap-1 md:items-start">
				<!-- Twitter Logo -->
				<RouterLink
					class="flex w-fit items-center rounded-full p-2.5 hover:cursor-pointer hover:bg-blue-100"
					:to="{ name: 'index-home' }"
				>
					<i
						class="iconify text-2xl text-blue-500 md:text-3xl"
						data-icon="akar-icons:twitter-fill"
						aria-hidden="true"
					></i>
				</RouterLink>

				<SidebarLinks />

				<CreateTweetLink class="md:w-full md:py-2.5 md:px-3" />
			</div>
		</div>

		<!-- User -->
		<div
			class="ml-6 mr-2 flex w-fit cursor-pointer items-center justify-between self-end rounded-full p-2.5 hover:bg-slate-200 md:mr-4 md:w-auto md:self-auto"
		>
			<div class="flex gap-3">
				<div class="rounded-full bg-blue-400 p-2 text-white">OA</div>

				<div class="hidden flex-col text-sm md:flex">
					<span class="font-medium">Oguzhan</span>
					<span class="text-gray-500">@Mocha_</span>
				</div>
			</div>

			<div class="hidden md:block">
				<i
					class="iconify text-lg"
					data-icon="bx:dots-horizontal-rounded"
					aria-hidden="true"
				></i>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.link-active {
	span {
		font-weight: 600;
	}
}
</style>
