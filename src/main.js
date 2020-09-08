import { init, getLocaleFromNavigator } from "svelte-i18n";
import App from "./App.svelte";
import "./Tailwind.svelte";
import "./i18n";

const fallbackLocale = "en-US";
const navigatorLocale = getLocaleFromNavigator();

init({
  fallbackLocale,
  initialLocale: ["en-US", "fr-FR"].includes(navigatorLocale)
    ? navigatorLocale
    : fallbackLocale,
});

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

export default app;
