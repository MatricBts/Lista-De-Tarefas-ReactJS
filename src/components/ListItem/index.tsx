import * as C from './style';
import { Item } from '../../types/item';
import { useState } from 'react';

type Props={
    item: Item;
}

export const ListItem = ({ item }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done) // A STATE ISCHECKED RECEBE O DONE DO OBJETO ITEM
    
const editarTarefa = () => {
    console.log( item.name )
}

const apagarTarefa = () => {
    console.log( '')
}

    return(
        <C.Container done ={isChecked}>
            <input type="checkbox"
            checked={isChecked} 
            onChange= { e => setIsChecked( e.target.checked )} // PASSA COMO TRUE SE TIVER CHECK O CAMPO, E FALSE SE N TIVER
            />
            <label>{item.name}</label>
            <button onClick={editarTarefa}>Editar</button>
            <button onClick={apagarTarefa}>Apagar</button>
        </C.Container>       
    );
}