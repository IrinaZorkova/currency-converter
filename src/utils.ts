import { Card, Rates, TotalCartPrice } from './types'
import { Currency } from './models'
import { requestRates } from './api'
import { currencyPresentation } from './config'

export const calculateCardPriceInAbsoluteUnits = (card: Card): number =>
  card.reduce((accumulator: number, item) => accumulator + item.price, 0)

export const convertToCurrencies = (rates: Rates, priceInAbsoluteUnits: number) =>
  Object.keys(Currency).reduce((result: TotalCartPrice, cur: Currency) => {
      result[currencyPresentation[cur]] = rates[cur] * priceInAbsoluteUnits

      return result
    }, {}
  )

export const abort = (error: Error) => {
  throw error
}

export const generateTotalCardPrice = async (selectedCart: Card) => {
  const cartPriceInAbsoluteUnits = calculateCardPriceInAbsoluteUnits(selectedCart)

  const rates = await requestRates()

  return convertToCurrencies(rates, cartPriceInAbsoluteUnits)
}
