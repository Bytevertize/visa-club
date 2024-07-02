import { useEffect } from 'react'

import { COMMAND_PRIORITY_EDITOR } from 'lexical'
import { mergeRegister, $insertNodeToNearestRoot } from '@lexical/utils'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import {
    HorizontalRuleNode,
    $createHorizontalRuleNode,
    INSERT_HORIZONTAL_RULE_COMMAND,
} from '@lexical/react/LexicalHorizontalRuleNode'

export function DividerPlugin() {
    const [editor] = useLexicalComposerContext()

    useEffect(() => {
        if (!editor.hasNodes([HorizontalRuleNode])) {
            throw new Error(
                'HorizontalRuleNode: HorizontalRuleNode not registered on editor',
            )
        }

        return mergeRegister(
            editor.registerCommand(
                INSERT_HORIZONTAL_RULE_COMMAND,
                () => {
                    editor.update(() => {
                        $insertNodeToNearestRoot($createHorizontalRuleNode())
                    })
                    return false
                },
                COMMAND_PRIORITY_EDITOR,
            ),
        )
    }, [])

    return null
}
