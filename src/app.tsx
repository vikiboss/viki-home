import { Component } from 'solid-js'
import { Router, Route } from '@solidjs/router'

import { Profile } from './components/profile'
import { SettingsPanel } from './components/setting-panel'
import { I18nContext, createI18n } from './i18n'

const App: Component = () => {
  const i18n = createI18n()
  return (
    <I18nContext.Provider value={i18n}>
      <Router>
        <Route path='/' component={Profile} />
      </Router>
      <SettingsPanel />
    </I18nContext.Provider>
  )
}

export default App
