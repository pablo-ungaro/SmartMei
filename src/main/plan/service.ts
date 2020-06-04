import axios from 'axios'
import {parse} from "node-html-parser";

export const getPlan = async (url: string) => {
    const {description, price} = await parseHTML(url)
    const {BRL,USD,EUR} = await getExchangeRates(process.env.URL_EXCHANGE_RATES!)

    return {
        date: new Date(),
        description,
        BRL: BRL * price,
        USD: USD * price,
        EUR: EUR * price
    }
}

const parseHTML = async (url: string) => {
    const result = await axios.get(url)
    const page = parse(result.data)
    const htmlDescriptionElement = page.querySelectorAll('#tarifas-2 .row.row-eq-height .col-sm-4.cell-small-title')[1]
    const description = htmlDescriptionElement.rawText.trim()
    const htmlPriceElement = page.querySelector('#tarifas-2 .row.row-eq-height .text-center.col-sm-4.col-xs-6.tarifas-2-2-2')
    const sanitizedPrice = htmlPriceElement.rawText.trim().replace("R$", "").replace(",", ".")
    const price = parseFloat(sanitizedPrice)
    return { description, price }
}

const getExchangeRates = async (url: string) => {
    const result = await axios.get(url)
    const {USD, EUR, BRL} = result.data.rates
    return {USD, EUR, BRL}
}