const webpack = require('webpack') // referência para o webpack

module.exports = { // Exporta a configuração
    entry: './ex/index.js', // Ponto de entrada
    output: { // Arquivo de saída
        path: __dirname + '/public', // Diretório atual + /public
        filename: './bundle.js' // Nome do arquivo de saída
    },
    devServer: { // Configuração do Serv de dev.
        port: 8080, // Porta do Serv
        contentBase: './public', // Aponta para ./public
    },
    module: {
        loaders: [{
            test: /.jsx?$/, // Carrega os arquivos .jsx
            loader: 'babel-loader',
            exclude: /node_modules/, // Exclui o node_modules
            query: { // Presets que vamos utilizar no código
                presets: ['es2015', 'react']
            }
        }]
    }
}