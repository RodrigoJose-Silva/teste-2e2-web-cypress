const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
  },
  fixturesFolder: false,  // funcionalidade para não recriar a pasta "fixtures" ao reexecutar o projeto
  video: false, // funcionalidade para não gerar videos em execução handless, otimzando o processo
})
