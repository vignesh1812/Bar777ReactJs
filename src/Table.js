import React from 'react'
import './table.css';
import table from './images/table.jpg';


const Table = () => {
  return (
    <div className='table'>
      <section className='table-content'> 
        <div className="backcol">
        </div>
        <img src={table} alt="tableinbar" className='img-fluid' />
        <form className='text-white'>
            <h1>Make a Reservation!</h1>
            <p>To help us find the best table for you, select the preferred party size, date, and time of your reservation.</p>
            <label htmlFor="partysize">party size</label>
            <select name="Guest" id="partysize" className='select d-block'>
                <option value="">1 Guest</option>
                <option value="">2 Guests</option>
                <option value="">3 Guests</option>
                <option value="">4 Guests</option>
                <option value="">6 Guests</option>
                <option value="">5 Guests</option>
                <option value="">7 Guests</option>
                <option value="">8 Guests</option>
            </select>
            <label htmlFor="date">Date</label>
            <input type="date" name="date" className='d-block' id="date" />
            <label htmlFor="time">Time</label>
            <input type="time" name="time" id="time" className='d-block' />
             <button type='submit' className='btn btn-outline-warning'>Reserve !</button>
        </form>
      </section>
     
    </div>
  )
}

export default Table