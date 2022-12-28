import React from 'react'
import styled from 'styled-components'

export const TEXTAREA_MAX_LENGTH = 2200;
const Textarea = ({value, placeholder='문구 입력 ...', onChange}) => {

const onChangeHandler = (e)=>{
  onChange(e)
}

  return (
    <StTextarea onChange={onChangeHandler} placeholder={placeholder} />
  )
}

export default Textarea
const StTextarea = styled.textarea.attrs({ maxLength: TEXTAREA_MAX_LENGTH })`
    background-color: var(--ig-elevated-background);
    border: none;
    width: 100%;
    min-height: 15rem;
    resize: none;
    font-size: 1.5rem;
    color: var(--ig-primary-text);
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: var(--ig-third-text);
    }

`
