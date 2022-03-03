import { useState, KeyboardEvent } from 'react'
import * as C from './styles'


type Props = { //CRIANDO PROPS
    onEnter: ( nomeTarefa:string ) => void // DECLARA QUE ONENTERÉ UMA FUNÇÃO QUE RETORNA NADA
}

export const AddArea = ( {onEnter}:Props ) => {
    const [ inputText, setInputText ] = useState('');
    let [ tese, setTese ] = useState( localStorage.getItem( 'tarefas' ) )


    // const pegaTecla = (e: KeyboardEvent) => {

    //     if(e.code === 'Enter' && inputText !== ''){
    //         onEnter( inputText );
    //         setInputText('');
            
    //         // console.log( tese )
    //     }
    // }

    const teste = () => {
        onEnter( inputText );
    }

    return(
        <C.Container>
            <div className='image'> ➕ </div>
            <input
                type="text"
                placeholder='Adicione uma tarefa'
                value={ inputText }
                onChange={ e => setInputText( e.target.value ) }
                // onKeyUp={ pegaTecla } // QUANDO DIGITA E SOLTA A TECLA ELE EXECUTA A FUNÇÃO
                
            />

            <button onClick={teste}>
                Salvar
            </button>
        </C.Container>
    )
}