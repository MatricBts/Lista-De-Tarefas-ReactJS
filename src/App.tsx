import { useState } from 'react';
import * as C from './App.styles'
import { Item } from './types/item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/addArea';
import { buscaStorage, salvaStorage  } from './types/storage';

const App = () => {

  const[ list, setList ] = useState<Item[]>(buscaStorage());

  console.log( 'lista ' , list )
  const adicionaTarefa = ( nomeTarefa: string) => {
    let listaReserva = [...list];
    listaReserva.unshift({
      id: list.length +1,
      name: nomeTarefa,
      done:false
    })

    salvaStorage(listaReserva);
    console.log(listaReserva);
    setList(listaReserva);
  }

  return(
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={ adicionaTarefa } />

        {list.map( ( item, index ) =>(
          <ListItem key={index} item={item} />
          
        ))}
        

      </C.Area>
    </C.Container>
  );
}

export default App;
