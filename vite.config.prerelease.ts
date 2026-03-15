import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import { risuPluginHeader } from './vite-plugin-risu-header';
import type { Plugin } from 'vite';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Vite plugin to rename the output file to .ts after build
 */
function copyToTsPlugin(): Plugin {
  return {
    name: 'vite-plugin-copy-to-ts',
    apply: 'build',
    closeBundle() {
      const srcPath = path.resolve(__dirname, 'dist/pomollu-gca.prerelease.js');
      const destPath = path.resolve(__dirname, 'dist/pomollu-gca.ts');
      if (fs.existsSync(srcPath)) {
        fs.renameSync(srcPath, destPath);
      }
    }
  };
}

export default defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
      emitCss: true,
    }),
    cssInjectedByJsPlugin(), // CSS injection
    risuPluginHeader(), // RisuAI Plugin header injection
    copyToTsPlugin(), // Rename .prerelease.js → .ts
  ],
  build: {
    lib: {
      entry: 'src/main.ts', // Plugin entry file
      name: 'pomollu-gca', // Plugin name
      fileName: () => 'pomollu-gca.prerelease.js', // Temp name (renamed to .ts post-build)
      formats: ['umd']
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true
      }
    },
    cssCodeSplit: false,
    minify: false, // No minification for pre-release readability
    sourcemap: false,
    emptyOutDir: false // Preserve existing dist/ contents
  }
});
