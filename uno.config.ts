import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'
import { defineConfig, presetTypography } from 'unocss'

export default defineConfig({
  presets: [presetUno({ dark: 'class' }), presetIcons(), presetTypography()],
})
