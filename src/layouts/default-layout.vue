<script setup lang="ts">
import {
	onClickOutside,
	useBreakpoints,
	breakpointsTailwind,
} from '@vueuse/core'
import { useRoute } from 'vue-router'

const isOpenSidebar = ref(false)
const sideBarRef = ref(null)

const route = useRoute()

const breakpoints = useBreakpoints(breakpointsTailwind)
const largerThanSm = breakpoints.greater('sm')

onClickOutside(sideBarRef, () => (isOpenSidebar.value = false))

const onResizeWindow = () => {
	largerThanSm.value && (isOpenSidebar.value = false)
}
onMounted(() => {
	addEventListener('resize', onResizeWindow)
})
</script>

<template>
	<div class="relative flex divide-x">
		<div class="min-h-screen bg-slate-50 sm:w-1/4">
			<div class="fixed h-screen sm:w-1/4">
				<Transition name="slide-x">
					<div
						v-if="isOpenSidebar"
						ref="sideBarRef"
						class="h-full min-w-[280px] overflow-y-auto bg-slate-50 sm:hidden"
					>
						<div class="flex items-center justify-between px-6 py-3">
							<h4 class="text-lg font-medium">Account info</h4>

							<span @click="isOpenSidebar = false">
								<i
									class="iconify text-lg"
									data-icon="humbleicons:times"
									aria-hidden="true"
								></i>
							</span>
						</div>

						<div class="flex w-full flex-col p-5">
							<div class="flex flex-col gap-y-2">
								<div class="w-fit rounded-full bg-blue-400 p-2 text-white">
									OA
								</div>

								<div class="flex flex-col">
									<span class="font-medium">Oguzhan</span>
									<span class="text-gray-500">@Mocha</span>
								</div>

								<div class="flex gap-x-6 text-sm">
									<div class="flex items-center gap-1">
										<span class="font-medium">12</span>
										<span class="font-light text-gray-600">Following</span>
									</div>

									<div class="flex items-center gap-1">
										<span class="font-medium">23</span>
										<span class="font-light text-gray-600">Followers</span>
									</div>
								</div>
							</div>
						</div>

						<div class="flex flex-col items-end gap-1 md:items-start">
							<SidebarLinks />
						</div>
					</div>
				</Transition>

				<DesktopSidebar />
			</div>
		</div>

		<div
			class="w-full bg-slate-50 transition-colors sm:w-3/4"
			:class="[isOpenSidebar && 'bg-black/50']"
		>
			<div v-if="route.fullPath === '/home'">
				<div class="flex w-full items-center justify-between px-4 py-2">
					<div class="flex items-center gap-x-3">
						<div
							class="block w-fit rounded-full bg-blue-400 p-2 text-sm text-white sm:hidden"
							@click="isOpenSidebar = !isOpenSidebar"
						>
							OA
						</div>

						<div class="font-medium">Home</div>
					</div>

					<div>
						<i
							class="iconify"
							data-icon="clarity:star-line"
							aria-hidden="true"
						></i>
					</div>
				</div>

				<hr class="border-black/10" />
			</div>

			<RouterView />
		</div>
	</div>
</template>
