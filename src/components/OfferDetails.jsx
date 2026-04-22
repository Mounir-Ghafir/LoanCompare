import './OfferDetails.css';

function OfferDetails({ offer , monthlyPayment , totalCost }) {
  if (!offer) return null

  return (
    <div className='offer-details'>
      <h2>Offer Details</h2>
      <div className='detail-row'>
        <span className='label'>Term:</span>
        <span className='value'>{offer.term} years</span>
      </div>
      <div className="detail-row">
         <span className="label">Monthly Payment:</span>
         <span className="value">${monthlyPayment.toLocaleString()}</span>
       </div>
       <div className="detail-row total">
         <span className="label">Total Cost:</span>
         <span className="value">${totalCost.toLocaleString()}</span>
      </div>
    </div>
  )

}

export default OfferDetails