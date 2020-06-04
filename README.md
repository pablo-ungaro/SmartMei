# SmartMei

Desenvolver um serviço GraphQL que disponibilize a seguinte funcionalidade:

		. fazer um crawler para buscar o valor atual de uma Transferência do Plano Profissional no site da SmartMei (https://www.smartmei.com.br)

		. chamar uma API aberta que converta esse preço para USD (dolar americano) e EUR (Euro)

		. retornar as seguintes informacoes:

			. data da consulta

			. descricao da tarifa (como está no site da smartmei)

			. valor em R$

			. valor em USD

			. valor em EUR

		. como parâmetro de entrada, receber o endereço do site da SmartMei (obrigatório)

		. uma sugestão de API de cotação de moedas é https://exchangeratesapi.io (o candidato pode usar essa ou outra se preferir)

		. o candidato pode usar qualquer lib em NodeJS ou Golang que implemente o GraphQL

		. o projeto final precisa ter o Playground habilitado

		. Fazer ao menos um cenário de teste unitário (o framework é livre)

		. O projeto deve ser feito em NodeJS (js ou typescript) ou Golang. A escolha é do candidato

## How to run

```bash
docker-compose up
```

