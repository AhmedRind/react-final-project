import React, { useState } from 'react'
import Header from './Header'
import Button from './Button'
import axios from 'axios'
import './Random_Quotes.css'


function Random_Quotes() {
  const [text, setText] = useState('Press the button above to get a quote.')

  const fetchQuote = async () => {
    const cashedData = JSON.parse(localStorage.getItem('apiQuotes'))
    if (cashedData) {
      const randomQuote = cashedData[Math.floor(Math.random() * cashedData.length)];
      setText(randomQuote.text)
      console.log("Loading data from local storage ")
      return;
    }
    try {
      const response = await axios.get('https://type.fit/api/quotes');
      const quotes = response.data;
      localStorage.setItem('apiQuotes', JSON.stringify(quotes))
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setText(randomQuote.text)
      console.log(randomQuote.text)
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }
  return (
    <div className='random_quotes'>
      <Header text={"Random Quotes"} />
      <div className='Body_Items'>
        <Button className="Get_Quotes" text={"Get Quotes"} onClick={fetchQuote} />
        <h1>{text}</h1>
      </div>

    </div>
  )
}

export default Random_Quotes