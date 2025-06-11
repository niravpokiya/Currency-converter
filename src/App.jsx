import {useEffect, useState } from 'react'
import './App.css'
import CurrencyConverterBox from './Components/InputBox'
import useConvert from './CustomHooks/convertAPI'
// Currency rate api
// https://2024-03-06.currency-api.pages.dev/v1/currencies/${currency}.json

function App() {
  let [currency, setCurrency] = useState("USD")
  let [convertedCurrency, setConvertedCurrency] = useState("INR")
  let [amount, setAmount] = useState(0)
  let [input, setInput] = useState(0)
  const Data = useConvert(currency)

  const calculate = () => {
    setAmount(Data[currency.toLowerCase()][convertedCurrency.toLowerCase()] * input)
  }

  const swap = () => {
    setConvertedCurrency(currency)
    setCurrency(convertedCurrency)
  }

  return (
   <>
      <div className="h-max rounded-2xl flex items-center justify-center bg-gradient-to-br from-cyan-500 to-teal-400 p-4">
        <div className="bg-white rounded-3xl shadow-xl border border-cyan-300 w-full max-w-xl p-6 flex flex-col justify-between h-[90vh] max-h-[600px] overflow-hidden">
          <h1 className="text-2xl font-bold text-center text-teal-800">Currency Converter</h1>

          <div className="flex-grow flex flex-col justify-evenly">
            <CurrencyConverterBox
              label="From"
              amountDisabled={false}
              setCurrency={setCurrency}
              amount={input}
              onAmountChange={setInput}
              currency={currency}
            />

            <div className="flex justify-center">
              <button
                onClick={swap}
                className="bg-teal-500 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-teal-600 transition"
              >
                ⇄ Swap
              </button>
            </div>

            <CurrencyConverterBox
              label="To"
              amountDisabled={true}
              setCurrency={setConvertedCurrency}
              amount={amount}
              currency={convertedCurrency}
            />

            <div className="text-center mt-2">
              <button
                onClick={calculate}
                className="bg-cyan-500 text-white px-6 py-2 rounded-xl font-bold hover:bg-cyan-600 transition"
              >
                Convert {currency} to {convertedCurrency}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
