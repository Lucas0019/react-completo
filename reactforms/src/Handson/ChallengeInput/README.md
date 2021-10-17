## Hands on Hook - Formulários | Input 🔥

Faça um fetch (POST) para a API abaixo

- Para a criação ser aceita é necessário enviar dodos de:
```JSON 
  nome, email, senha, cep, rua, numero, bairro, cidade e estado
```

- Essa é a função utilizado para realizar o POST
```js
  fetch('https://ranekapi.origamid.dev/json/api/usuario', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // form é o objeto com os dados do formulário
    body: JSON.stringify(form),
  });
```

Mostre uma mensagem na tela, caso a resposta da API seja positiva
