import { Component } from 'solid-js'
import { ThemeSwitch } from './theme-switch'
import { LangSwitch } from './lang-switch'

export const SettingsPanel: Component = () => {
  return (
    <div class='fixed bottom-6 w-full flex justify-center'>
      <div class='flex justify-between justify-between w-800px md:w-92vw px-4'>
        <div class='left-panel'>
          <ThemeSwitch />
        </div>
        <div class='right-panel'>
          <LangSwitch />
        </div>
      </div>
    </div>
  )
}
