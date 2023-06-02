import { Input, type FormControlProps, type FormLabelProps, type InputProps } from '$lib';
import type { PlaygroundComponentNode } from '../../types';
import FormControl from '$lib/components/FormControl.svelte';
import FormLabel from '$lib/components/FormLabel.svelte';
import FormHelperText from '$lib/components/FormHelperText.svelte';

export default function getInputTree() {
    return {
        Component: FormControl,
        name: 'Form Control',
        propDefinitions: [],
        children: [
            {
                Component: FormLabel,
                name: 'Form Label',
                content: 'Form Label',
                propDefinitions: []
            } as PlaygroundComponentNode<FormLabelProps>,
            {
                Component: Input,
                name: 'Input',
                propDefinitions: [
                    {
                        name: 'type',
                        description: 'The type of the input',
                        default: 'outlined',
                        control: {
                            type: 'select',
                            props: {
                                name: 'type',
                                value: 'outlined',
                                options: [
                                    'outlined',
                                    'filled'
                                ]
                            }
                        }
                    }
                ]
            } as PlaygroundComponentNode<InputProps>,
            {
                Component: FormHelperText,
                name: 'Form Helper Text',
                content: 'Form Helper Text',
                propDefinitions: []
            } as PlaygroundComponentNode<FormLabelProps>
        ]
    } as PlaygroundComponentNode<FormControlProps>;
}
