import { generateTotalCardPrice } from './utils'
import { renderError, renderInput, renderOutput } from './render'
import { selectedCart } from './mocks'

renderInput(selectedCart)

generateTotalCardPrice(selectedCart)
  .then(result => renderOutput(result))
  .catch(e => renderError(e))
