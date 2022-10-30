import { defineConfig } from 'vite'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import PurgeIcons from 'vite-plugin-purge-icons'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import vue from '@vitejs/plugin-vue'

function pathResolve(dir: string) {
	return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			include: [
				/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
				/\.vue$/,
				/\.vue\?vue/, // .vue
				/\.md$/, // .md
			],
			imports: ['vue', 'vue-router'],
			dts: './types/auto-imports.d.ts',
		}),
		Components({
			dts: true,
			dirs: ['src/components'],
			types: [
				{
					from: 'vue-router',
					names: ['RouterLink', 'RouterView'],
				},
			],
		}),
		Pages({
			dirs: 'src/pages',
			importMode: 'async',
			// onRoutesGenerated: (routes) => generateSitemap({ routes }),
		}),
		PurgeIcons(),
		Layouts({
			layoutsDirs: 'src/layouts',
			defaultLayout: 'default-layout',
		}),
	],
	resolve: {
		alias: [
			// /@/xxxx => src/xxxx
			{
				find: /\/@\//,
				replacement: pathResolve('src') + '/',
			},
			// /#/xxxx => types/xxxx
			{
				find: /\/#\//,
				replacement: pathResolve('types') + '/',
			},
		],
	},
	server: {
		hmr: true,
		port: 3000,
		watch: {
			usePolling: true,
		},
	},
})
