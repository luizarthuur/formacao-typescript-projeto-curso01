"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var conta_js_1 = require("../types/conta.js");
var saldo_components_js_1 = require("./saldo-components.js");
var extrato_component_js_1 = require("./extrato-component.js");
var elementoFormulario = document.querySelector('.block-nova-transacao form');
elementoFormulario.addEventListener('submit', function (e) {
    try {
        e.preventDefault();
        if (!elementoFormulario.checkValidity()) {
            alert('Por favor, preencha todos campos da transação!');
            return;
        }
        var inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao');
        var inputValor = elementoFormulario.querySelector('#valor');
        var inputData = elementoFormulario.querySelector('#data');
        var tipoTransacao = inputTipoTransacao.value;
        var valor = inputValor.valueAsNumber;
        var data = new Date(inputData.value + '00:00:00');
        var novaTransacao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data
        };
        conta_js_1.default.registrarTransacao(novaTransacao);
        saldo_components_js_1.default.atualizar();
        extrato_component_js_1.default.atualizar();
        elementoFormulario.reset();
    }
    catch (error) {
        alert(error.message);
    }
});
