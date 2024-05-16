import { TipoTransacao } from "./Tipo-transacao.js";

export type Transacao = {
    tipoTransacao: TipoTransacao;
    valor: number;
    data: Date;
}