import React, { useState, useEffect } from 'react'
import * as solidIcons from '@heroicons/react/16/solid'
import * as outlineIcons from '@heroicons/react/24/outline'
import { SelectInput, useField } from 'payload/components/forms'
import { Props } from 'payload/components/fields/Text'

function toSpacedString(str: string) {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2')
}

export function Field({ path }: Props) {
    const { value: iconValue, setValue: setIconValue } = useField<string>({
        path,
    })
    const { value: iconTypeValue } = useField<string>({
        path: path.replace('icon', 'iconType'),
    })

    const [options, setOptions] = useState([])

    useEffect(() => {
        setOptions(
            Object.keys(
                iconTypeValue === 'solid' ? solidIcons : outlineIcons,
            ).map((name) => ({
                label: toSpacedString(name),
                value: name,
            })),
        )
    }, [iconTypeValue])

    return (
        <div>
            <label className="field-label">Select Icon</label>
            <SelectInput
                path={path}
                name={path}
                options={options}
                value={iconValue}
                onChange={(e) => setIconValue(e.value)}
            />
        </div>
    )
}
