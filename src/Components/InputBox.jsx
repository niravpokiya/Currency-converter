import React, { useId } from 'react';
import currencyCodes from './CurrenciesList';

function CurrencyConverterBox({amount = 0, label, amountDisabled = false, setCurrency, onAmountChange, currency}) {
  let idd = useId()
  let id2 = useId()
  return (
  <section className="bg-gradient-to-br from-cyan-200 to-cyan-200 rounded-2xl shadow-lg p-6 border border-cyan-300">
  <h2 className="text-xl font-bold text-teal-900 mb-6 text-center drop-shadow-sm">{label}</h2>
  <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0">
    
    <div className="flex flex-col flex-1">
      <label htmlFor={idd} className="mb-1 text-teal-800 text-sm font-medium tracking-wide">Amount</label>
      <input
        id={idd}
        type="number"
        value={amount}
        className="border border-cyan-300 rounded-lg px-4 py-2 text-base font-medium text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
        min="0"
        disabled={amountDisabled}
        onChange={(e) => onAmountChange(e.target.value)}
      />
    </div>

    <div className="flex flex-col flex-1">
      <label htmlFor={id2} className="mb-1 text-teal-800 text-sm font-medium tracking-wide">Currency</label>
      <select
        id={id2}
        className="border border-cyan-300 rounded-lg px-4 py-2 text-base font-medium text-gray-800 bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
        onChange={(e) => { setCurrency(e.target.value) }}
        value={currency}
      >
        {currencyCodes.map((currency) => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
    </div>
  </div>
</section>

  );

}

export default CurrencyConverterBox;

