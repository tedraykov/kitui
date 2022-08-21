<script lang="ts">
	import type { ColumnDef, TableOptions } from '@tanstack/svelte-table';
	import { createSvelteTable, flexRender, getCoreRowModel } from '@tanstack/svelte-table';
	import { writable } from 'svelte/store';
	import type { ComponentProp } from '../types';
	import { onMount } from 'svelte';

	export let data: ComponentProp[];

	const defaultColumns: ColumnDef<ComponentProp>[] = [
		{
			accessorKey: 'name',
			cell: (info) => info.getValue(),
			header: () => 'Prop Name'
		},
		{
			accessorKey: 'description',
			cell: (info) => {
				console.log(info.getValue());
				return info.cell.getValue()
			},
			header: () => 'Description'
		},
		{
			accessorKey: 'default',
			header: () => 'Default Value',
			cell: (info) => info.getValue()
		},
		{
			accessorKey: 'control',
			header: () => 'Control',
		}
	];

	const options = writable<TableOptions<ComponentProp>>({
		data,
		columns: defaultColumns,
		getCoreRowModel: getCoreRowModel()
	});

	const table = createSvelteTable(options);
</script>

<table>
	<thead>
		{#each $table.getHeaderGroups() as headerGroup}
			<tr>
				{#each headerGroup.headers as header}
					<th>
						{#if !header.isPlaceholder}
							<svelte:component
								this={flexRender(header.column.columnDef.header, header.getContext())}
							/>
						{/if}
					</th>
				{/each}
			</tr>
		{/each}
	</thead>
	<tbody>
		{#each $table.getRowModel().rows as row}
			<tr>
				{#each row.getVisibleCells() as cell}}
					<td>
<!--						<svelte:component this={} />-->
<!--						{console.log(cell.column.columnDef.cell)}-->
						{flexRender(cell.column.columnDef.cell, cell.getContext())}
					</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
