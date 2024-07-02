import {
    type FeatureProvider,
    SlashMenuOption,
} from '@payloadcms/richtext-lexical'

import { ElementTransformer } from '@lexical/markdown'

import {
    HorizontalRuleNode,
    $isHorizontalRuleNode,
    $createHorizontalRuleNode,
    INSERT_HORIZONTAL_RULE_COMMAND,
} from '@lexical/react/LexicalHorizontalRuleNode'

const HR: ElementTransformer = {
    dependencies: [HorizontalRuleNode],
    export: (node) => {
        return $isHorizontalRuleNode(node) ? '***' : null
    },
    regExp: /^(---|\*\*\*|___)\s?$/,
    replace: (parentNode) => {
        const line = $createHorizontalRuleNode()

        if (parentNode.getNextSibling() != null) {
            parentNode.replace(line)
        } else {
            parentNode.insertBefore(line)
        }

        line.selectNext()
    },
    type: 'element',
}

export function DividerFeature(): FeatureProvider {
    return {
        feature() {
            return {
                props: null,
                nodes: [
                    {
                        node: HorizontalRuleNode,
                        type: HorizontalRuleNode.getType(),
                    },
                ],
                plugins: [
                    {
                        Component: () =>
                            import('./plugin').then(
                                (module) => module.DividerPlugin,
                            ),
                        position: 'normal',
                    },
                ],
                markdownTransformers: [HR],
                slashMenu: {
                    options: [
                        {
                            key: 'basic',
                            options: [
                                new SlashMenuOption('divider', {
                                    displayName: 'Divider',
                                    Icon: null,
                                    onSelect({ editor }) {
                                        editor.dispatchCommand(
                                            INSERT_HORIZONTAL_RULE_COMMAND,
                                            null,
                                        )
                                    },
                                }),
                            ],
                        },
                    ],
                },
                // floatingSelectToolbar: [],
            }
        },
        key: 'divider',
    }
}
