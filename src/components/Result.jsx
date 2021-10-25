import React from 'react'
import PropTypes from 'prop-types'

const Result = ({ value }) => {
    //destructuring
    //const { value } = props
    //debugger detiene codigo
    //debugger
    console.log('render result')
    return (
        <div className="result">
            { value }
        
        
        </div>
    )
}

//valida tipo de dato necesario para el componente, si no esta explicito el navegador tira un warning
//para requerir la propiedad se hace mediante isRequired
Result.propTypes = {
    value: PropTypes.string.isRequired
}

//valor por defecto si no va implicito, con la palabra undefined tambien se puede manipular el valor
Result.defaultProps = {
    value: "0"
}

//unico componente Result se usa la palabra reservada default
export default Result