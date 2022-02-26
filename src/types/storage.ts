import { Item } from "./item";
export { clientesStorage,  buscaStorage };



// AÇÃO DE BUSCAR OS CLIENTES SALVOS NO SOTRAGE
const buscaStorage = () =>{
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


 // SALVANDO OS CLIENTES DO STORAGE EM UM ARRAY
 const clientesStorage = () => {
    const clientes = buscaStorage(); // UTILIZAMOS A FUNCAO PARA PEGAR OS DADOS NO STORAGE E SALVAMOS EM CLIENTES
    return clientes; // RETORNAMOS CLIENTES
}


// // SALVANDO UM CLIENTE NOVO E JUNTANDO COM OS CLIENTES JÁ CADASTRADOS
// const salvaCliente = ( tarefa: string, arrayClientes:string[]) => { // PEGA COMO PARAMETRO O CLIENTE NOVO E O ARRAY COM OS CLIENTES CADASTRADOS
//     arrayClientes.push ( tarefa ); // ELE ADICIONA AS INFORMÇÕES DO NOVO CLIENTE NO ARRAY DE CLIENTES EXISTENTES
//     salvaStorage( arrayClientes ); // ELE MANDA O ARRAY DE CLIENTES SALVOS PARA O STORAGE

//     alert( ` Parabéns ${ arrayClientes[ arrayClientes.length-1].nome }, seu cadastro foi efetuado com sucesso com o plano: ${ arrayClientes[ arrayClientes.length-1 ].plano }` );
//     window.location.href = 'index.html'
// }