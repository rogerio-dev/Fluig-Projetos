function enableFields(form){
    var atividadeInicio      = 4;
    var aprovDiretoria       = 5;
    var inclusaoPratrimonio  = 15;

    var CURRENT_STATE = getValue("WKNumState");

    if(CURRENT_STATE != atividadeInicio){
        form.setEnabled('marcaVeiculo', false);
        form.setEnabled('corVeiculo', false);
        form.setEnabled('anoVeiculo', false);
        form.setEnabled('valorVeiculo', false);
        form.setEnabled('dataCompraVeiculo', false);
        form.setEnabled('zoom_estados', false);
        form.setEnabled('chassiVeiculo', false);
        form.setEnabled('renavanVeiculo', false);       
    };
 }