import React from 'react'
import PropType from "prop-types"
import Button from "./Button"

// componete funcional
const Functions = ({onContentClear, onDelete}) => {
    return(
    <section className="functions">
        <Button type="button-long-text" text="clear" clickHandler={onContentClear}></Button>
        <Button text="&larr;" clickHandler={onDelete}></Button>
    </section>)
}

Functions.propTypes = {
    onContentClear: PropType.func.isRequired,
    onDelete: PropType.func.isRequired
}



export default Functions