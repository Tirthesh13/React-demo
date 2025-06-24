import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { InputBox } from './components/index.js'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const currencyOptions = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className='w-full h-screen flex justify-center items-center bg-cover'
    style={{backgroundImage:'url(https://i.pinimg.com/736x/e8/0d/cd/e80dcdfcaf4896244cf213e54ec8db0a.jpg)'}}>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
              <InputBox
                label="From"
                amount={amount}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setFrom(currency)}
                currencyOptions={["usd", "inr", "eur",...currencyOptions]}
                selectedCurrency={from}
              />
            </div>
            <div>
              <button
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white bg-blue-500 text-white px-2 py-0.5 rounded-md hover:bg-blue-600'
              onClick={swap}
              >Swap</button>
            </div>
            <div className='w-full mb-1'>
              <InputBox
                label="to"
                currencyOptions={["usd", "inr", "eur",...currencyOptions]}
                amount={convertedAmount}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDisabled
              />
            </div>
            <button
            type='submit'
            className='w-full bg-blue-500 text-white px-2 py-2 rounded-md hover:bg-blue-600'
            >Convert {from} to {to}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
