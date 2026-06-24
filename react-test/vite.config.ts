import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import viteCompression from "vite-plugin-compression"
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/an',
  plugins: [
    react(), viteCompression(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
