import { BASE_CURRENCY, currencyPresentation } from './config'

export const renderInput = (input: object) => {
  document.getElementById('input').innerHTML = `
    <h2>Input in ${currencyPresentation[BASE_CURRENCY]}</h2>
    <pre>${JSON.stringify(input, null, 2)}</pre>
  `
}

export const renderOutput = (output: object) => {
  document.getElementById('output').innerHTML = `
    <h2>Output</h2>
    <pre>${JSON.stringify(output, null, 2)}</pre>
  `
}

export const renderError = (error: Error) => {
  document.getElementById('output').innerHTML = `
    <h2>Output</h2>
    <p>${error.message}</p>
    <code>${error.stack}</code>
  `
}
