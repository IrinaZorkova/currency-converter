import { Rates, ResponseRatesObject } from './types'
import { BASE_CURRENCY } from './config'
import { abort } from './utils'

export const requestRates = (): Promise<Rates> =>
  fetch(`https://api.exchangeratesapi.io/latest?base=${BASE_CURRENCY}`)
    .then((res) => res.json())
    .then((json: ResponseRatesObject) => json.rates)
    .catch(error => abort(error))
