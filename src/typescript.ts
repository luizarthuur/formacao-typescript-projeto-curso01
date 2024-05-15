// Tipos primitivos:

let valor: number = 3000;
let texto: string = 'Texto1';
let booleano: boolean = false;
let qualquer: any = '';

//arrays

const lista: number[] = []

lista.push(15,26,32,3,4)

// Tipos Personalizados (Type Alias)

type Transacao = {
    tipoTransacao: tipoTransacao;
    data: Date;
    valor: number;
}

// Enum

enum tipoTransacao {
    DEPOSITO = 'Depósito',
    TRANSFERENCIA = 'Transferência',
    PAGAMENTO_BOLETO = 'Pagamento de Boleto'
}

const novaTransacao: Transacao = {
    tipoTransacao: tipoTransacao.PAGAMENTO_BOLETO,
    data: new Date(),
    valor:0
}

