import { useState } from 'react'
import InputBox from './component/InputBox'
import useCurrencyInfo from './hooks/currency'
function App() {
  const [amount,setAmount] = useState(0)
  const [from,setFrom] = useState("usd");
  const [to,setTo] = useState("inr");
  const [convertedAmount,setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  const swap= ()=>{
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }
  const convert = ()=>{
    setConvertedAmount(amount*currencyInfo[to]);
  }
  return (
    <>
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
      backgroundImage:`url('https://images.pexels.com/photos/19861151/pexels-photo-19861151/free-photo-of-a-mountain-stream-is-flowing-through-a-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`
    }}>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form action="" onSubmit={(e)=>{
            e.preventDefault();
            convert();
          }}>
            <div className="w-full mb-1">
              <InputBox label="From"
               amount={amount}
               currencyOption={options}
               onCurrencyChange={(currency) =>setFrom(currency)}
               selectCurrency={from}
               onAmountChange={(amount)=>setAmount(amount)}
               ></InputBox>
            </div>
            <div className='relative w-full h-0.5'>
              <button onClick={swap} type='button' className='font-semibold
               bg-blue-600 rounded-lg p-2 absolute 
               left-1/2 -translate-x-1/2 -translate-y-1/2
               '>Swap</button>
            </div>
            <div className="w-full mb-1">
              <InputBox label="To"
               amount={convertedAmount}
               currencyOption={options}
               onCurrencyChange={(currency) =>setTo(currency)}
               selectCurrency={to}
               amountDisabled
               ></InputBox>
            </div>
            <button className='bg-blue-400 p-2 text-lg font-bold w-full rounded-lg' type="submit" >Covert {from.toUpperCase()} To {to.toUpperCase()}</button>
          </form>
        </div>
      </div>
    </div>
    </>

  )
}

export default App
