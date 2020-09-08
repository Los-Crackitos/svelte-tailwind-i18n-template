<script>
  import { t } from 'svelte-i18n';

	export let name;
</script>

<main class="p-1 max-w-lg my-0 mx-auto text-center md:max-w-none">
	<h1 class="text-orange-600 uppercase text-6xl font-hairline my-10">{$t('hello')} {name}!</h1>
	<p class="text-gray-800">
    Visit the <a href="https://svelte.dev/tutorial" class="text-blue-700 hover:underline">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
</main>
