import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../styles/BookTicket.css';


const BookTickets = (props) => {
    const { currentPage, setCurrentPage } = props;
    const [selectedOption, setSelectedOption] = useState('Rocket');
    const [selectedDate, setSelectedDate] = useState(null);
    const [ticketCount1, setTicketCount1] = useState(0);
    const [ticketCount2, setTicketCount2] = useState(0);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    }

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    }

    const incrementTickets1 = () => {
        setTicketCount1(ticketCount1 + 1);
    }


    const decrementTickets1 = () => {
        if (ticketCount1 > 0) {
            setTicketCount1(ticketCount1 - 1);
        }
    }

    const incrementTickets2 = () => {
        setTicketCount2(ticketCount2 + 1);
    }


    const decrementTickets2 = () => {
        if (ticketCount2 > 0) {
            setTicketCount2(ticketCount2 - 1);
        }

        
    }

    // const Booking = () =>{
    //     console.log(selectedDate,selectedOption,ticketCount1,ticketCount2);

    // }


    return (
        <>
        
            <div>
            
                <div className='Back'>
                    <svg onClick={() => setCurrentPage(currentPage - 1)} xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.9788 0.960717H9.60729C4.83199 0.960717 0.960838 4.83187 0.960838 9.60717V24.9786C0.960838 29.7539 4.83199 33.6251 9.60729 33.6251H24.9788C29.7541 33.6251 33.6252 29.7539 33.6252 24.9786V9.60717C33.6252 4.83187 29.7541 0.960717 24.9788 0.960717ZM34.5859 9.60717C34.5859 4.30128 30.2847 0 24.9788 0H9.60729C4.3014 0 0.00012207 4.30128 0.00012207 9.60717V24.9786C0.00012207 30.2845 4.3014 34.5858 9.60729 34.5858H24.9788C30.2847 34.5858 34.5859 30.2845 34.5859 24.9786V9.60717ZM20.7962 8.30679C20.9838 8.1192 21.288 8.1192 21.4756 8.30679C21.6632 8.49438 21.6632 8.79853 21.4756 8.98612L13.1688 17.2929L21.4756 25.5997C21.6632 25.7873 21.6632 26.0914 21.4756 26.279C21.288 26.4666 20.9838 26.4666 20.7962 26.279L12.1498 17.6326C11.9622 17.445 11.9622 17.1408 12.1498 16.9532L20.7962 8.30679Z" fill="#B34416" />
                    </svg>

                </div>
                <div>
                    <h1 className='BookTicket'>Book Tickets</h1>
                </div>
      
                <div className='Date'>
                    <p className='Date'>Date</p>
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat="MM/dd/yyyy"
                        placeholderText="Select a date"

                    />

                    {selectedDate && <p>Selected date: {selectedDate.toLocaleDateString()}</p>}

                </div>

                <div className='Travelmode'>
                    <p className='travel'>Travel Mode</p>
                    <label>
                        <input className='lable'
                            type="radio"
                            value="Rocket"
                            checked={selectedOption === 'Rocket'}
                            onChange={handleOptionChange}
                        />
                        Rocket
                    </label>

                    <br />

                    <label>
                        <input
                            type="radio"
                            value="Black hole"
                            checked={selectedOption === 'Black hole'}
                            onChange={handleOptionChange}
                        />
                        Black hole
                    </label>

                    <br />

                    <label>
                        <input
                            type="radio"
                            value="Teleport"
                            checked={selectedOption === 'Teleport'}
                            onChange={handleOptionChange}
                        />
                        Teleport
                    </label>

                    <br />

                    <label>
                        <input
                            type="radio"
                            value="Bifrost Bridge"
                            checked={selectedOption === 'Bifrost Bridge'}
                            onChange={handleOptionChange}
                        />
                        Bifrost Bridge
                    </label>

                    <br />

                    <p>Selected option: {selectedOption}</p>
                </div>

                <div className='Ticketcounter'>

                    <h3>Number of Tickets</h3>
                    <div className='child'>

                        Children:
                        <div className='children'>
                            <button onClick={incrementTickets1}>+</button>
                            <p className='count'>{ticketCount1}</p>
                            <button onClick={decrementTickets1}>-</button>
                        </div>
                        <br />    <br />
                    </div>

                    < div className='child'>
                        Adult:
                        <div className='children'>
                            <button onClick={incrementTickets2}>+</button>
                            <p className='counts'> {ticketCount2} </p>
                            <button onClick={decrementTickets2}>-</button>
                        </div>
                    </div>

                    <br />    <br />
                    <div className='continue'>
                        <button  onClick={() => setCurrentPage(currentPage + 1)}
                            className='custom-button'>Continue</button>
                    </div>


                </div>
                
            </div>

           
        </>
    )
}

export default BookTickets;