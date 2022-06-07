import React,{useEffect,useState} from 'react';
import './App.css';
import { Quote } from './componentes/Quote';


function App() {
  let API_URL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
  const [quotes, setquotes] = useState();
  const [author, setauthor] = useState()
  
  const getQuotes = (url)=>{
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let random = Math.round(Math.random()*data.quotes.length)
        setquotes(data.quotes[random].quote)
        setauthor(data.quotes[random].author)
      })
      .catch(e => console.log(e))
  }

  useEffect(() => {
    getQuotes(API_URL);
  }, [])

  return (
    <div className="App">
      <div id="quote-box">
        <Quote text={quotes} author={author}/>
      </div>
    </div>
  );
}

export default App;
