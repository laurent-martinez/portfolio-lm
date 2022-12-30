import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from 'next-themes'
import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import HttpBackend,{ HttpBackendOptions } from 'i18next-http-backend';

i18next.use(initReactI18next)
.use(HttpBackend)
.init<HttpBackendOptions>({
  backend: {
      loadPath: '/translations/{{lng}}/translations.json',
    },
    lng: 'en',
    fallbackLng: 'en',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider attribute="class">
    <Component {...pageProps} />
  </ThemeProvider>
  )
}
