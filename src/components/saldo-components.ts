import { formatarData, formatarMoeda } from "../utils/formatter.js";
import { FormatoData } from "../types/formatodata.js";
import Conta from "../types/conta.js";


const elementoSaldo = document.querySelector('.saldo-valor .valor') as HTMLElement;
const elementoDataAcesso = document.querySelector('.block-saldo time') as HTMLElement;



if (elementoDataAcesso) {
    const dataAcesso: Date = new Date()
    elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO)
}

function renderizarSaldo() : void {
    if (elementoSaldo) {;
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }
}

const SaldoComponent = {
    atualizar() {
        renderizarSaldo()
    }
}

export default SaldoComponent;