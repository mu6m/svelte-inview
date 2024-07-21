<script lang="ts">
	import viewport from '$lib/Components/useView';
	export let load_more;
	export let posts;

	let loading = false;
	let has_more = true;
</script>

{#if posts.length == 0}
	<h1 class="text-xl text-center font-bold">there are no posts!</h1>
{/if}
<div class="px-3 my-4 max-w-2xl w-full flex flex-col gap-6">
	{#each posts as post}
		<div
			class="w-full flex flex-col-reverse md:flex-row mx-auto hover:underline hover:cursor-pointer gap-4"
		>
			{post}
		</div>
	{/each}
</div>
{#if loading}
	<h1 class="text-md font-bold text-center">Loading ...</h1>
{/if}
{#if posts.length > 0}
	{#if !has_more}
		<h1 class="text-md font-bold text-center">there are no more posts!</h1>
	{:else}
		<div
			use:viewport
			class="w-0"
			on:enterViewport={async () => {
				loading = true;
				if (loading && has_more) {
					has_more = await load_more();
				}
				loading = false;
			}}
		></div>
	{/if}
{/if}
