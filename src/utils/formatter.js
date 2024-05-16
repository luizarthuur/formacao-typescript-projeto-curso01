"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatarData = exports.formatarMoeda = void 0;
var formatodata_js_1 = require("../types/formatodata.js");
function formatarMoeda(valor) {
    return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}
exports.formatarMoeda = formatarMoeda;
function formatarData(data, formato) {
    if (formato === void 0) { formato = formatodata_js_1.FormatoData.PADRAO; }
    if (formato === formatodata_js_1.FormatoData.DIA_SEMANA_DIA_MES_ANO) {
        return data.toLocaleString('pt-br', {
            weekday: 'long',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }
    else if (formato === formatodata_js_1.FormatoData.DIA_MES) {
        return data.toLocaleString('pt-br', { day: '2-digit', month: '2-digit' });
    }
    else {
        return data.toLocaleString('pt-br');
    }
}
exports.formatarData = formatarData;
