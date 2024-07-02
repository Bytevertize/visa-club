import {
    type FeatureProvider,
    SlashMenuOption,
} from '@payloadcms/richtext-lexical'
import { LayoutContainerNode, LayoutItemNode } from './nodes'
import { INSERT_LAYOUT_COMMAND } from './plugin'

export function LayoutFeature(): FeatureProvider {
    return {
        feature() {
            return {
                props: null,
                slashMenu: {
                    options: [
                        {
                            displayName: 'Layout',
                            key: 'layout',
                            options: [
                                new SlashMenuOption(
                                    'layout-two-columns-equal',
                                    {
                                        displayName: '2 Columns Equal',
                                        Icon: null,
                                        keywords: ['layout', 'grid'],
                                        onSelect({ editor }) {
                                            editor.dispatchCommand(
                                                INSERT_LAYOUT_COMMAND,
                                                '1fr 1fr',
                                            )
                                        },
                                    },
                                ),
                                new SlashMenuOption(
                                    'layout-two-columns-25-75',
                                    {
                                        displayName: '2 Columns 25%-75%',
                                        Icon: null,
                                        keywords: ['layout', 'grid'],
                                        onSelect({ editor }) {
                                            editor.dispatchCommand(
                                                INSERT_LAYOUT_COMMAND,
                                                '1fr 3fr',
                                            )
                                        },
                                    },
                                ),
                                new SlashMenuOption(
                                    'layout-two-columns-75-25',
                                    {
                                        displayName: '2 Columns 75%-25%',
                                        Icon: null,
                                        keywords: ['layout', 'grid'],
                                        onSelect({ editor }) {
                                            editor.dispatchCommand(
                                                INSERT_LAYOUT_COMMAND,
                                                '3fr 1fr',
                                            )
                                        },
                                    },
                                ),
                                new SlashMenuOption(
                                    'layout-three-columns-equal',
                                    {
                                        displayName: '3 Columns Equal',
                                        Icon: null,
                                        keywords: ['layout', 'grid'],
                                        onSelect({ editor }) {
                                            editor.dispatchCommand(
                                                INSERT_LAYOUT_COMMAND,
                                                '1fr 1fr 1fr',
                                            )
                                        },
                                    },
                                ),
                                new SlashMenuOption(
                                    'layout-three-columns-25-50-25',
                                    {
                                        displayName: '3 Columns 25%-50%-25%',
                                        Icon: null,
                                        keywords: ['layout', 'grid'],
                                        onSelect({ editor }) {
                                            editor.dispatchCommand(
                                                INSERT_LAYOUT_COMMAND,
                                                '1fr 2fr 1fr',
                                            )
                                        },
                                    },
                                ),
                                new SlashMenuOption('layout-4-columns-equal', {
                                    displayName: '4 Columns Equal',
                                    Icon: null,
                                    keywords: ['layout', 'grid'],
                                    onSelect({ editor }) {
                                        editor.dispatchCommand(
                                            INSERT_LAYOUT_COMMAND,
                                            '1fr 1fr 1fr 1fr',
                                        )
                                    },
                                }),
                            ],
                            value: 'layout',
                        },
                    ],
                },
                nodes: [
                    {
                        node: LayoutContainerNode,
                        type: LayoutContainerNode.getType(),
                    },
                    {
                        node: LayoutItemNode,
                        type: LayoutItemNode.getType(),
                    },
                ],
                plugins: [
                    {
                        Component: () =>
                            import('./plugin').then(
                                (module) => module.LayoutPlugin,
                            ),
                        position: 'normal',
                    },
                ],
            }
        },
        key: 'layout',
    }
}
