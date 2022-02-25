import { useState } from 'react';
import * as C from './App.styles'
import { Item } from './types/item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/addArea';
import { buscaStorage, salvaStorage  } from './types/storage';

const App = () => {

  let teste = localStorage.getItem( 'tarefas' );

  const[ list, setList ] = useState<Item[]>([ // O STATE RECEBE ITEM COMO CLASS, PODENDO MODELAROS OBJETOS
    { id: 1, name: 'Comprar Pão', done: false},
    { id: 2, name: 'Comprar Cuzcuz', done: false}
  ]);

  const adicionaTarefa = ( nomeTarefa: string) => {
    let listaReserva = [...list];
    listaReserva.push({
      id: list.length +1,
      name: nomeTarefa,
      done:false
    })
    console.log(teste)
    salvaStorage(listaReserva);
    setList(listaReserva)
  }

  return(
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        

        <AddArea onEnter={adicionaTarefa} />

        {list.map( ( item, index ) =>(
          <ListItem key={index} item={item} />
          
        ))}
        

      </C.Area>
    </C.Container>
  );
}

export default App;
