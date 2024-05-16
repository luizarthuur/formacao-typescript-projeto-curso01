"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formatter_js_1 = require("../utils/formatter.js");
var formatodata_js_1 = require("../types/formatodata.js");
var conta_js_1 = require("../types/conta.js");
var elementoSaldo = document.querySelector('.saldo-valor .valor');
var elementoDataAcesso = document.querySelector('.block-saldo time');
if (elementoDataAcesso) {
    var dataAcesso = new Date();
    elementoDataAcesso.textContent = (0, formatter_js_1.formatarData)(conta_js_1.default.getDataAcesso(), formatodata_js_1.FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
function renderizarSaldo() {
    if (elementoSaldo) {
        ;
        elementoSaldo.textContent = (0, formatter_js_1.formatarMoeda)(conta_js_1.default.getSaldo());
    }
}
var SaldoComponent = {
    atualizar: function () {
        renderizarSaldo();
    }
};
exports.default = SaldoComponent;
