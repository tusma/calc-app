import React from 'react'
import PropType from "prop-types"
import Button from './Button'

const MathOperations = ({onClickOperation, onClickEqual}) =>{
    return(
        <section className="math-operations">
            <Button text="+" clickHandler={onClickOperation}></Button>
            <Button text="-" clickHandler={onClickOperation}></Button>
            <Button text="*" clickHandler={onClickOperation}></Button>
            <Button text="/" clickHandler={onClickOperation}></Button>
            <Button text="=" clickHandler={onClickEqual}></Button>
        </section>
    )
    
}

MathOperations.propTypes = {
    onClickOperation: PropType.func.isRequired,
    onClickEqual: PropType.func.isRequired
}

export default MathOperations