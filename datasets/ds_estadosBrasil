function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();

    dataset.addColumn("estado");
    dataset.addColumn("sigla");

    var estados = [
        ["Acre", "AC"],
        ["Alagoas", "AL"],
        ["Amapá", "AP"],
        ["Amazonas", "AM"],
        ["Bahia", "BA"],
        ["Ceará", "CE"],
        ["Distrito Federal", "DF"],
        ["Espírito Santo", "ES"],
        ["Goiás", "GO"],
        ["Maranhão", "MA"],
        ["Mato Grosso", "MT"],
        ["Mato Grosso do Sul", "MS"],
        ["Minas Gerais", "MG"],
        ["Pará", "PA"],
        ["Paraíba", "PB"],
        ["Paraná", "PR"],
        ["Pernambuco", "PE"],
        ["Piauí", "PI"],
        ["Rio de Janeiro", "RJ"],
        ["Rio Grande do Norte", "RN"],
        ["Rio Grande do Sul", "RS"],
        ["Rondônia", "RO"],
        ["Roraima", "RR"],
        ["Santa Catarina", "SC"],
        ["São Paulo", "SP"],
        ["Sergipe", "SE"],
        ["Tocantins", "TO"]
    ];

    for (var i = 0; i < estados.length; i++) {
        dataset.addRow([estados[i][0], estados[i][1]]);
    }

    return dataset;
}
