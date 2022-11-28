<script lang='ts'>
	import { Table, TableCell, TableHeaderCell } from '$lib';
	import TabGroup from '$lib/components/TabGroup.svelte';
	import Tab from '$lib/components/Tab.svelte';
	import TabList from '$lib/components/TabList.svelte';
	import TabPanels from '$lib/components/TabPanels.svelte';
	import TabPanel from '$lib/components/TabPanel.svelte';
	import type { ColumnDef, TableOptions } from '@tanstack/svelte-table';
	import { createSvelteTable, flexRender, getCoreRowModel, renderComponent } from '@tanstack/svelte-table';
	import type { PropDefinition, PropDefinitionsMap } from '../../types';
	import HtmlCell from './cells/HtmlCell.svelte';
	import CodeCell from './cells/CodeCell.svelte';
	import { get, writable } from 'svelte/store';
	import ControlSelect from './ControlSelect.svelte';
	import ControlSwitch from './ControlSwitch.svelte';

	export let propDefinitionsMap: PropDefinitionsMap = {};

	function deriveControlComponent(controlType: string) {
		if (controlType === 'select') return ControlSelect;
		if (controlType === 'switch') return ControlSwitch;
		return null;
	}

	const defaultColumns: ColumnDef<PropDefinition>[] = [
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
		{
			accessorKey: 'control',
			header: () => 'Control',
			cell: (info) => {
				if (!info?.getValue()) return '';
				const { type, props } = info?.getValue();
				const Component = deriveControlComponent(type);
				return Component ? renderComponent(Component, props) : '';
			}
		}
	];

	function getTableOptionsMap() {
		const optionsMap = {};
		for (const componentName in propDefinitionsMap) {
			optionsMap[componentName] = writable<TableOptions<PropDefinition>>({
				data: propDefinitionsMap[componentName].map(propDefinition => {
					propDefinition.control.props.componentName = componentName;
					return propDefinition;
				}),
				columns: defaultColumns,
				getCoreRowModel: getCoreRowModel()
			});
		}
		return optionsMap;
	}

	const optionsMap = getTableOptionsMap();

	function getPropsTableMap(optionsMap) {
		const tableMap = {};
		for (const componentName in optionsMap) {
			tableMap[componentName] = createSvelteTable(optionsMap[componentName]);
		}
		return tableMap;
	}

	const tableMap = getPropsTableMap(optionsMap);
</script>

{#if Object.keys(tableMap).length > 1}
	<TabGroup class='pt-2'>
		<TabList>
			{#each Object.keys(tableMap) as componentName}
				<Tab>{componentName}</Tab>
			{/each}
		</TabList>
		<TabPanels>
			{#each Object.values(tableMap) as table}
				<TabPanel>
					<Table>
						<thead>
						{#each get(table).getHeaderGroups() as headerGroup}
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
						{#each get(table).getRowModel().rows as row}
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
				</TabPanel>
			{/each}
		</TabPanels>
	</TabGroup>
{:else}
	<Table>
		<thead>
		{#each get(tableMap[Object.keys(tableMap)[0]]).getHeaderGroups() as headerGroup}
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
		{#each get(tableMap[Object.keys(tableMap)[0]]).getRowModel().rows as row}
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
{/if}
