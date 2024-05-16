"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var conta_js_1 = require("../types/conta.js");
var formatodata_js_1 = require("../types/formatodata.js");
var formatter_js_1 = require("../utils/formatter.js");
var elementoRegistroTransacoesExtrato = document.querySelector('.extrato .registro-transacoes');
renderizarExtrato();
function renderizarExtrato() {
    var gruposTransacoes = conta_js_1.default.getGruposTransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = '';
    var htmlRegistroTransacoes = '';
    for (var _i = 0, gruposTransacoes_1 = gruposTransacoes; _i < gruposTransacoes_1.length; _i++) {
        var grupoTransacao = gruposTransacoes_1[_i];
        var htmlTransacaoItem = '';
        for (var _a = 0, _b = grupoTransacao.transacoes; _a < _b.length; _a++) {
            var transacao = _b[_a];
            htmlTransacaoItem += "\n            <div class=\"transacao-item\">\n                    <div class=\"transacao-info\">\n                        <span class=\"tipo\">".concat(transacao.tipoTransacao, "</span>\n                        <strong class=\"valor\">").concat((0, formatter_js_1.formatarMoeda)(transacao.valor), "</strong>\n                    </div>\n                    <time class=\"data\">").concat((0, formatter_js_1.formatarData)(transacao.data, formatodata_js_1.FormatoData.DIA_MES), "</time>\n            </div>\n            ");
        }
        htmlRegistroTransacoes += "\n        <div class=\"transacoes-group\">\n            <strong class=\"mes-group\">".concat(grupoTransacao.label, "</strong>\n            ").concat(htmlTransacaoItem, "\n        </div>\n    ");
        if (htmlRegistroTransacoes == '') {
            htmlRegistroTransacoes = '<div> Não há transações registradas. </div>';
        }
        elementoRegistroTransacoesExtrato.innerHTML = htmlRegistroTransacoes;
    }
}
var extratoComponent = {
    atualizar: function () {
        renderizarExtrato();
    }
};
exports.default = extratoComponent;
