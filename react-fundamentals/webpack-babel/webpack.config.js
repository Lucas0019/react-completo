module.exports = {
  // Nos módulos
  module: {
    // Aplique as seguintes regras
    rules: [
      {
        // Nos arquivos que terminam ($) com .js
        test: /\.js$/,
        // Não procure nada em node_modules
        exclude: /node_modules/,
        // Use o seguinte:
        use: {
          // Babel
          loader: 'babel-loader',
          // Com as opções padrões para o React
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
    ],
  },
};
