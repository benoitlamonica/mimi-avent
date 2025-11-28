import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import electron from 'vite-plugin-electron/simple'

// https://vite.dev/config/
export default defineConfig(() => {
  const useElectron = process.env.ELECTRON === 'true'
  
  return {
    plugins: [
      react(),
      ...(useElectron ? [
        electron({
          main: {entry: 'electron/main.ts',},
          preload: {input: 'electron/preload.ts',},
        }),
      ] : []),
    ],
    resolve: {alias: {'@': fileURLToPath(new URL('./src', import.meta.url)),},},
  }
})
