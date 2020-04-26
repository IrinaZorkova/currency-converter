import { Currency } from './models'

export const currencyPresentation = {
  [Currency.RUB]: 'rubles',
  [Currency.USD]: 'US dollars',
  [Currency.EUR]: 'euros',
  [Currency.JPY]: 'pounds',
  [Currency.GBP]: 'yens'
}

export const BASE_CURRENCY = Currency.USD
