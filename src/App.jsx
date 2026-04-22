import { useState } from 'react';
import { offers } from './data/offers';
import { calculateMonthlyPayment, calculateTotalCost } from './utils/calculations';
import './App.css';

function App() {
  const [selected, setSelected] = useState(null);
  const [payment, setPayment] = useState(0);
  const [total, setTotal] = useState(0);

  function handleSelect(offer) {
    setSelected(offer);
    const p = calculateMonthlyPayment(offer.amount, offer.interestRate, offer.term);
    const t = calculateTotalCost(p, offer.term);
    setPayment(p);
    setTotal(t);
  }

  return (
    <div>
      <h1>LoanCompare</h1>
      
      <div className="offers">
        {offers.map(offer => (
          <div 
            key={offer.id} 
            className={selected?.id === offer.id ? 'card selected' : 'card'}
            onClick={() => handleSelect(offer)}
          >
            <h3>{offer.provider}</h3>
            <p>${offer.amount}</p>
            <p>{offer.interestRate}% rate</p>
          </div>
        ))}
      </div>

      {selected && (
        <div className="details">
          <h2>Details</h2>
          <p>Years: {selected.years}</p>
          <p>Monthly: ${payment}</p>
          <p>Total: ${total}</p>
        </div>
      )}
    </div>
  );
}

export default App;