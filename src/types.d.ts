export interface Rates {
  [name: string]: number
}

export interface ResponseRatesObject {
  base: string;
  rates: Rates;
}

interface Product {
  price: number
}

export type Card = Array<Product>

export interface TotalCartPrice {
  [currencyLabel: string]: number
}
