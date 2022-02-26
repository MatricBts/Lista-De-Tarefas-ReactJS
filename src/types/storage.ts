import { Item } from "./item";



// AÇÃO DE BUSCAR OS CLIENTES SALVOS NO SOTRAGE
export const buscaStorage = () =>{
    // BUSCA NO STORAGE, E CASO NÃO TENHA NADA CRIADO ELE RETORNA UM ARRAY VAZIO
    if ( !localStorage.getItem( 'tarefas' ) ){
        return []; // NOSSO ARRAY VAZIO
    }
    else{ // SE TIVER ALGO ELE RETORNA AS INFORMAÇÕES QUE ESTÃO LÁ 
    
        return JSON.parse(localStorage.getItem( 'tarefas' ) || ''); // pegando o que esta salbo no storage
        // NO STORAGE É SALVO COMO STRING, A GENTE TRAZ COMO ARRAY DE OBJETO PARA A GENTE PODER TRABALHAR
        // POR ISSO O JSON.PARSE
    }     
}

// AÇÃO DE MANDAR UM CLIENTE NOVO PRO STORAGE
export const salvaStorage = ( info: object[] ) =>{
    localStorage.setItem('tarefas', JSON.stringify( info ))
}
