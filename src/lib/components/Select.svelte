<script lang="ts">
	export let value;
	export let name;
</script>

<select {name} on:change bind:value={value}>
	<slot/>
</select>
