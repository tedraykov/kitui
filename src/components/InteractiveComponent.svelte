<script lang='ts'>
	import type { ColumnDef, TableOptions } from '@tanstack/svelte-table';
	import { createSvelteTable, flexRender, getCoreRowModel, renderComponent } from '@tanstack/svelte-table';
	import { writable } from 'svelte/store';
	import type { ComponentProp } from '../types';
	import { Button, Card, Table, TableCell, TableHeaderCell } from '../lib/index.js';
	import CodeCell from './cells/CodeCell.svelte';
	import HtmlCell from './cells/HtmlCell.svelte';

	export let data: ComponentProp[];
	const defaultColumns: ColumnDef<ComponentProp>[] = [
		{
			accessorKey: 'name',
			header: () => 'Prop Name'
		},
		{
			accessorKey: 'description',
			cell: (info) => renderComponent(HtmlCell, { html: info.getValue() }),
			header: () => 'Description'
		},
		{
			accessorKey: 'default',
			header: () => 'Default Value',
			cell: (info) => renderComponent(CodeCell, { text: info.getValue() })
		},
		// {
		// 	accessorKey: 'control',
		// 	header: () => 'Control',
		// 	cell: (info) => renderComponent(info.getValue(), {})
		// }
	];

	const options = writable<TableOptions<ComponentProp>>({
		data,
		columns: defaultColumns,
		getCoreRowModel: getCoreRowModel()
	});

	const table = createSvelteTable(options);
</script>

<Card outlined>
	<div
		class={`flex justify-center py-10 bg-accent-50 bg-[url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23f1f5f9'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")]`}>
		<Button>Button</Button>
	</div>
	<Table>
		<thead>
		{#each $table.getHeaderGroups() as headerGroup}
			<tr>
				{#each headerGroup.headers as header}
					<TableHeaderCell>
						{#if !header.isPlaceholder}
							<svelte:component
								this={flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
							/>
						{/if}
					</TableHeaderCell>
				{/each}
			</tr>
		{/each}
		</thead>
		<tbody>
		{#each $table.getRowModel().rows as row}
			<tr>
				{#each row.getVisibleCells() as cell}
					<TableCell>
						<svelte:component
							this={flexRender(cell.column.columnDef.cell, cell.getContext())}
						/>
					</TableCell>
				{/each}
			</tr>
		{/each}
		</tbody>
	</Table>
</Card>

<style>
    Table {
        @apply bg-red;
    }
</style>
