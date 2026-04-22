import './OfferCard.css';

function OfferCard({ offer, isSelected , onClick , isRecommended }) {
  return (
    <div className={`offer-card ${isSelected ? 'selected' : ''}`} onClick={() => onClick(offer)}>
      {isRecommended && <span className='badge recommended'>Recommended</span>}
      <h3>{offer.provider}</h3>
      <p className='amount'>${offer.amount.toLocaleString()}</p>
      <p className='rate'>${offer.interestRate}% APR </p>
    </div>
  )
}

export default OfferCard