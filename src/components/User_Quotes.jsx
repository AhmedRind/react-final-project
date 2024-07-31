import React, { useContext, useState, useEffect } from 'react';
import './User_Quotes.css';
import Header from './Header';
import Form from './Form';
import Button from './Button';
import { Link } from 'react-router-dom';
import { EmailContext } from './Quote_Context';



function User_Quotes() {
  const [findQuoteInput, setFindQuoteInput] = useState([{ type: 'text', placeholder: 'Search your quotes', value: '' }]);
  const [quoteInput, setQuoteInput] = useState([{ type: 'text', placeholder: 'Save your quotes', value: '' }]);
  const [userQuotes, setUserQuotes] = useState([]);
  const [filterQuotes, setFilteredQuotes] = useState([]);
  
  const { email } = useContext(EmailContext);
  const searchQuote = (e) => {
    e.preventDefault();
    const filtered = userQuotes.filter((q) => q.quote.toLowerCase().includes(findQuoteInput[0].value.toLowerCase()));
    setFilteredQuotes(filtered);
  };

  const saveQuote = (e) => {
    e.preventDefault();
    if(quoteInput[0].value!=="")
      {const newQuote = { quote: quoteInput[0].value };
    const existingQuotes = JSON.parse(localStorage.getItem(`user_quotes${email}`)) || [];
    existingQuotes.push(newQuote);
    localStorage.setItem(`user_quotes${email}`, JSON.stringify(existingQuotes));
    setUserQuotes(existingQuotes);
    setFilteredQuotes(existingQuotes);
    setQuoteInput([{ ...quoteInput[0], value: '' }]);}
  };

  useEffect(() => {
    const storedQuotes = JSON.parse(localStorage.getItem(`user_quotes${email}`)) || [];
    setUserQuotes(storedQuotes);
    setFilteredQuotes(storedQuotes);
  }, []);

  return (
    <div className='User_Quotes'>
      <Header text={"User's Quotes"} />
      <div className="User_QuotesMain">
        <div className='Search_Quote'>
          <Form inputs={findQuoteInput} onChange={(index, value) => setFindQuoteInput([{ ...findQuoteInput[0], value }])} />
          <Button text={"Search"} className={"Search_Btn"} onClick={searchQuote} />
        </div>
        <div className='User_RandomQuotes'>
          {filterQuotes.length > 0 ? (
            <ul>
              {filterQuotes.map((quote, index) => (
                <li key={index}><h1>{quote.quote}</h1></li>
              ))}
            </ul>
          ) : (
            <h1>Save Your Quotes</h1>
          )}
        </div>
        <div className='Save_Quote'>
          <Form inputs={quoteInput} onChange={(index, value) => setQuoteInput([{ ...quoteInput[0], value }])} />
          <Button text={"Save"} className={"Save_Btn"} onClick={saveQuote} />
        </div>
        <Link to="/">Log Out</Link>
      </div>
    </div>
  );
}

export default User_Quotes;
