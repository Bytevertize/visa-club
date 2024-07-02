import React, { useEffect, useState, useRef } from 'react'
import { useFieldType } from 'payload/components/forms'
import { usePreferences } from 'payload/components/preferences'
import { Button } from 'payload/components'
import { Props as PayloadFieldProps } from 'payload/components/fields/Text'

import './styles.scss'
import ColorPicker from 'react-best-gradient-color-picker'

const baseClass = 'custom-color-picker'

const preferenceKey = 'color-picker-colors'
export default function InputField({
    path,
}: // label,
// required,
PayloadFieldProps) {
    const [presets, setPresets] = useState<string[]>([])
    const [color, setColor] = useState('')
    const containerRef = useRef(null)
    const [width, setWidth] = useState(300)

    const { getPreference, setPreference } = usePreferences()
    const { value, setValue: setFieldValue } = useFieldType<string>({
        path,
    })
    useEffect(() => {
        if (containerRef.current) {
            setWidth(containerRef.current.clientWidth)
        }
    }, [])

    useEffect(() => {
        async function setColorAndPresets() {
            const colorPreferences =
                await getPreference<string[]>(preferenceKey)

            if (colorPreferences) {
                setPresets(colorPreferences)
                setColor(value || colorPreferences[0])
            }
        }
        setColorAndPresets()
    }, [])

    function saveColor() {
        setColor(color)
        setFieldValue(color)
        setPreference(preferenceKey, [...presets, color])
        setPresets((prevState) => [...prevState, color])
    }

    return (
        <div
            ref={containerRef}
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                alignItems: 'center',
            }}
        >
            <ul className={`${baseClass}__colors`}>
                {presets.map((_color) => (
                    <li key={_color}>
                        <button
                            type="button"
                            className={`chip chip--clickable`}
                            style={{ background: _color }}
                            aria-label={_color}
                            onClick={() => {
                                setColor(_color)
                                setFieldValue(_color)
                            }}
                        />
                    </li>
                ))}
            </ul>
            <div style={{ display: 'flex', gap: '10px', flexDirection: 'row' }}>
                <Button
                    icon="plus"
                    iconStyle="with-border"
                    buttonStyle="transparent"
                    iconPosition="left"
                    onClick={saveColor}
                >
                    Add Color
                </Button>
            </div>
            <div
                style={{
                    background: color,
                    width: '100%',
                    height: 200,
                    borderRadius: 15,
                }}
            />
            <ColorPicker
                width={width}
                hidePresets
                value={color}
                onChange={setColor}
            />
        </div>
    )
}
