import { Transacao } from "../types/Transacao.js";
import { TipoTransacao } from "../types/Tipo-transacao.js";
import Conta from "../types/conta.js";
import SaldoComponent from "./saldo-components.js";
import extratoComponent from "./extrato-component.js";

const elementoFormulario = document.querySelector('.block-nova-transacao form') as HTMLFormElement;
elementoFormulario.addEventListener('submit', function (e) {
    try {
    e.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert('Por favor, preencha todos campos da transação!')
        return
    }


    const inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao') as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector('#valor') as HTMLInputElement;
    const inputData = elementoFormulario.querySelector('#data') as HTMLInputElement;

    let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value + '00:00:00');

    const novaTransacao: Transacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    }

    Conta.registrarTransacao(novaTransacao);
    SaldoComponent.atualizar();
    extratoComponent.atualizar();
    elementoFormulario.reset();
    }
    catch (error){
        alert(error.message)
    }   
})