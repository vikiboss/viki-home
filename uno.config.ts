import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'
import { defineConfig, presetAttributify, presetTypography, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno({ dark: 'class' }),
    presetIcons({
      collections: {
        mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
        ri: () => import('@iconify-json/ri/icons.json').then(i => i.default),
      },
    }),
    presetAttributify(),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Inter:400,500,600,700',
      },
    }),
  ],
})
