<script setup lang="ts">
import { useHead } from '@vueuse/head'

const isOpenRegisterModal = ref(false)

useHead({
	title: "It's what's happening / Twitter",
})
</script>

<template>
	<div class="flex h-screen w-full flex-col-reverse lg:flex-row">
		<div class="relative w-full lg:w-1/2">
			<img
				src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
				alt="Twitter Image"
				draggable="false"
				class="h-72 w-full lg:min-h-full"
			/>
			<div class="absolute top-0 left-0 h-full w-full">
				<div class="flex h-full w-full items-center justify-center">
					<TwitterLogo class="w-52 lg:w-96" color="#fff" />
				</div>
			</div>
		</div>

		<div
			class="flex w-full flex-col items-center gap-12 self-center p-8 lg:w-1/2 lg:items-start"
		>
			<div>
				<TwitterLogo class="w-10" color="#3b82f6" />
			</div>

			<h1 class="text-4xl font-semibold text-slate-900 sm:text-5xl md:text-6xl">
				Happening Now
			</h1>

			<h2 class="text-3xl font-extrabold text-slate-900">
				Join Twitter today.
			</h2>

			<div class="flex w-2/3 flex-col justify-start gap-4 lg:w-1/2">
				<div class="relative w-full">
					<div
						class="flex w-full items-center justify-center gap-1 rounded-full border border-gray-300 py-2 text-sm hover:cursor-pointer hover:bg-slate-200"
						@click=""
					>
						<GoogleLogo />
						<div>Sign up with Google</div>
					</div>
				</div>

				<!-- <div class="relative w-full">
					<button
						class="
							border border-gray-300
							text-sm
							hover:bg-slate-200
							rounded-full
							py-2
							w-full
							font-semibold
						"
					>
						Sign up with Apple
					</button>
				</div> -->

				<div class="w-full">
					<div class="flex items-center justify-between">
						<div class="h-px w-full bg-gray-300"></div>
						<div class="w-1/4 text-center">or</div>
						<div class="h-px w-full bg-gray-300"></div>
					</div>
				</div>

				<div class="relative w-full">
					<button
						class="w-full rounded-full bg-blue-500 py-2 text-sm font-semibold text-white hover:bg-blue-600"
						@click="isOpenRegisterModal = !isOpenRegisterModal"
					>
						Sign up with email
					</button>
				</div>
			</div>

			<div class="flex w-2/3 flex-col items-start gap-4 lg:w-1/2">
				<div class="font-semibold text-slate-900">Already have an account?</div>

				<div class="relative w-full">
					<button
						class="inline-block w-full rounded-full border border-gray-300 py-2 text-center text-sm font-bold text-blue-500 hover:bg-slate-200"
					>
						Sign in
					</button>
				</div>
			</div>
		</div>
	</div>

	<div class="flex w-full justify-center p-4 text-sm text-slate-600">
		<div>&copy; {{ new Date().getFullYear() }} Twitter Clone, Inc</div>
	</div>
</template>
