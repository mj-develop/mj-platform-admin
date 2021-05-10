import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Container }  from './styles';

interface Props {
    name: string
    label?: string
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

export default function Input({ name, label, ...rest }: InputProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField]);

    return (
        <Container>
            <div>
                <input ref={inputRef} defaultValue={defaultValue}/>

                { error && <span style={{ color: '#f0D' }}> {error} </span> }
            </div>
        </Container>
    )
}