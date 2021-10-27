//react single page app
//componentes con mayuscula
//importacion
//para corttar un error ctrl+c en la terminal, por destructuring se importa por separado componentes especificos
/* eslint no-eval: 0 */
import React, {useState} from 'react'
import words from 'lodash.words'
import Result from './components/Result'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import MathOperations from './components/MathOperations'
// hooks useState manipula estado inicial y funion para modificarlo

import './App.css'
//generacion de la funcion del componenete en ES6
//funcion flecha o arrow function =>
const App = () => {
    
    //forma convencional
    /*
     const arrayTextoFuncionModificaTexto = useState("")
     //1ra posicion valor inicial, valor por defecto
     const textoInicial = arrayTextoFuncionModificaTexto[0]
     //2da porisicion valor que va a permitir modificar el valor por defecto
     const funcionModificaText = arrayTextoFuncionModificaTexto[1]
    */

    //array destructuring, el nombre no tiene importancia solo la posicion incial y funcion de cambio
    //eventos burbujean hacia capas superiores
    const [textoStack, setTextoStack] = useState("")
    const [operationStack, setOperationStack] = useState("")

    //regexr.com prueba de expresiones regulares
    //Lodash, librerìa para trabajar arrays, objetos y numeros. usaremos funcion countby (incorporamos solo esa funcion)
    //Lodash.com
    const items = words(textoStack, /[^-^+^*^/]+/g)

    //la propiedad puede ser entre parentesis o sin parentesis solo si es una propeidad
    const clickHandlerFunction = text=>{
        console.log("Button.clickHandler", text)
    }       

    const value = items.length > 0 ? items[items.length-1] : "0"
    //cuerpo funcion, lo que ejecuta la funcion
    console.log('render app', value)

    return (
        <main className='react-calculator'>
            <Result value={value}></Result>
            <div className="operation">{operationStack.toString()}</div>
            <Numbers onClickNumber={number=>{
                    console.log("click number", number)  
                    setTextoStack(`${textoStack}${number}`)                    
                    setOperationStack(`${textoStack}${number}`)
                }             
            }>

            </Numbers>
            <Functions onContentClear={() => {
                console.log("content clear")
                setTextoStack('')
                setOperationStack('')
            }
            }
            onDelete={() => {
                if(textoStack.length > 0){
                    console.log("onDelte")
                    const newStack = textoStack.substring(0,textoStack.length -1)
                    setTextoStack(newStack)
                    setOperationStack(newStack)
                    }
                }
            }
            />            
            <MathOperations onClickOperation={operation => {
                    console.log("Operation:", operation)
                    setTextoStack(`${textoStack}${operation}`) 
                    setOperationStack(`${textoStack}${operation}`)                     
                }
            }
                onClickEqual={equal =>{
                    console.log("Equal:", equal)                    
                    setTextoStack(eval(textoStack).toString()) 
                    setOperationStack(operationStack)
                }
            }
            >                
            </MathOperations>
        </main>)
}
//exportacion (disponibilizar en la importacion)
export default App

