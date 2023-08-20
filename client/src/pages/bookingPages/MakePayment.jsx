import React, { useState } from 'react';
import '../../styles/MakePayment.css';

const PaymentCard = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [expiration, setExpiration] = useState('');
    const [cvv, setCvv] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [saveCardDetails, setSaveCardDetails] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(cvv);
        console.log(expiration);
        console.log(cardHolder);
        console.log(cardNumber);
    };

    return (
        <div className="back-ground">
            <h1 className="heading">Payment Card</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="card-number">
                        <label htmlFor="cardNumber">Card Number</label>
                        <input
                            required={true}
                            type="text"
                            id="cardNumber"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                        />
                    </div>
                    <div className="card-holder">
                        <label htmlFor="cardHolder">Card Holder</label>
                        <input
                            required={true}
                            type="text"
                            id="cardHolder"
                            value={cardHolder}
                            onChange={(e) => setCardHolder(e.target.value)}
                        />
                    </div>
                    <div className="expiration">
                        <label htmlFor="expiration">Expiration Date</label>
                        <input
                            required={true}
                            type="text"
                            id="expiration"
                            value={expiration}
                            onChange={(e) => setExpiration(e.target.value)}
                        />
                    </div>
                    <div className="cvv">
                        <label htmlFor="cvv">CVV</label>
                        <input
                            required={true}
                            type="text"
                            id="cvv"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                        />
                    </div>

                    <div className="checkboxes">
                            <input
                                type="checkbox"
                                checked={agreeTerms}
                                onChange={() => setAgreeTerms(!agreeTerms)}
                            />
                            I agree to the <span className={"terms-and-condition"}>Terms and Conditions</span>
                    </div>

                    <div className="checkboxes">
                            <input
                                type="checkbox"
                                checked={saveCardDetails}
                                onChange={() => setSaveCardDetails(!saveCardDetails)}
                            />
                            Save card details
                    </div>
                    <br/>
                    <button type="submit" className={"submit-button"}>PAY NOW</button>
                </form>
            </div>
        </div>
    );
};

export default PaymentCard;
