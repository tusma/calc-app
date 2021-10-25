//importar react
import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const arrNumbers = [7,8,9,4,5,6,1,2,3,0]
// DRY: dont repeat yourself
//ecma map transforma array origen a un array destino, sin modificar el origen
// KEY, propiedad
// la propiedad key se utiliza cuando se generan de forma dinamica componentes
// react lo utiliza para identficar elemntos con cambios, deben ser estable y unico entre mismos elementos
// en elementos largos se notan problemas de performance
const renderButtons = onClickNumber =>{
    //var number = 0
    //iterar del 1 al 0 (while, for, foreach) no utiliza ninguna, no es lo mas optimo (en estructura de codigo)     
    //se resuleve por medio de ecma script
    //<Button text={number.toString()} clickHandler={onClickNumber}></Button>
    
    const renderButton = number => {
        return (<Button key={"btn" + number.toString()} text={number.toString()} clickHandler={onClickNumber}></Button>)
    }

    return arrNumbers.map(renderButton)

    
}

// componente Numbers
// las llaves se utilizan por la tecnica de destructing sobre las "props" que le llegan al componente
//ECMA propagacion
//section.numbers>Button*10
const Numbers = ({onClickNumber})=>{
        
    return(
    <section className="numbers">        
        {
            renderButtons(onClickNumber) 
        }
    </section>
    )
}




Numbers.propType = {    
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers