<script lang="ts">
	import { setContext } from 'svelte';
	import ApiTable from './ApiTable.svelte';
	import RenderView from './RenderView.svelte';
	import type {
		ComponentPropsMap,
		PlaygroundComponentNode,
		PropDefinitionsMap,
		Props
	} from '../../types';
	import { writable } from 'svelte/store';
	import { Card, Stack, Typography } from '$lib';

	export let componentTree: PlaygroundComponentNode<Props>;

	function getPropDefinitionsMap(componentTree: PlaygroundComponentNode) {
		const propDefinitionsMap: PropDefinitionsMap = {};
		const queue = [componentTree];
		while (queue.length) {
			const currentNode = queue.pop();
			if (!currentNode) continue;

			propDefinitionsMap[currentNode.name] = currentNode.propDefinitions;
			if (!currentNode.children) continue;

			queue.push(...currentNode.children);
		}
		return propDefinitionsMap;
	}

	const propDefinitionsMap = getPropDefinitionsMap(componentTree);

	const componentPropsMap = (componentTree?: PlaygroundComponentNode) => {
		if (!componentTree) return {};

		const initialPropsMap: ComponentPropsMap = {};
		Object.keys(propDefinitionsMap).forEach((componentName) => {
			initialPropsMap[componentName] = propDefinitionsMap[componentName].reduce(
				(props, propDefinition) => ({
					...props,
					[propDefinition.name]: propDefinition.default
				}),
				{}
			);
		});
		return initialPropsMap;
	};

	setContext('playgroundProps', writable<ComponentPropsMap>(componentPropsMap(componentTree)));
</script>

<Stack element="section" gap={4}>
	<Stack element="header">
		<Typography style="headline">Playground</Typography>
		<Typography size="large">
			Play around with the component props and see them dynamically apply. The playground serves as
			a API documentation of the component.
		</Typography>
	</Stack>
	<Card type="outlined">
		<RenderView {componentTree} />
		<ApiTable {propDefinitionsMap} />
	</Card>
</Stack>
