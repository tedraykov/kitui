import { Divider, type DividerProps } from '$lib';
import type { PlaygroundComponentNode } from '../../types';

export default function getDividerTree(defaultProps: DividerProps): PlaygroundComponentNode<DividerProps> {
    return {
        Component: Divider,
        name: 'Divider',
        propDefinitions: [
            {
                name: 'direction',
                description: 'The direction of the divider',
                default: defaultProps.direction,
                control: {
                    type: 'select',
                    props: {
                        name: 'direction',
                        value: defaultProps.direction,
                        options: [
                            'horizontal',
                            'vertical'
                        ]
                    }
                }
            }
        ]
    };
}
