import React, {useState} from 'react';

const Page1 = (props) => {

  const {username, password, setUsername, setPassword, pageStyle} = props;

  return (
      <div style={pageStyle}>
        <div>
          <p>username: </p>
          <input value={username}
                 onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div>
          <p>password: </p>
          <input value={password}
                 onChange={(e) => setPassword(e.target.value)}/>
        </div>
      </div>
  )
}

const Page2 = (props) => {

  const {country, city, setCountry, setCity, pageStyle} = props;

  return (
      <div style={pageStyle}>
        <div>
          <p>country: </p>
          <input value={country} onChange={(e) => setCountry(e.target.value)}/>
        </div>
        <div>
          <p>city: </p>
          <input value={city} onChange={(e) => setCity(e.target.value)}/>
        </div>
      </div>
  )
}

const Summary = (props) => {

  const {username, password, country, city, pageStyle} = props;

  return (
      <div style={pageStyle}>
        <div style={{'font-size': 'xx-large'}}>Summary</div>
        <p>username: {username}</p>
        <p>password: {password}</p>
        <p>country: {country}</p>
        <p>city: {city}</p>
      </div>
  )
}

export default function Form(props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [page, setPage] = useState(1);

  const pageStyle = {
    height: '200px'
  }

  return (
      <div>
        {page === 1 && <Page1 username={username} setUsername={setUsername}
                              password={password} setPassword={setPassword}
                              pageStyle={pageStyle}/>}
        {page === 2 && <Page2 country={country} setCountry={setCountry}
                              city={city} setCity={setCity}
                              pageStyle={pageStyle}/>}
        {page === 3 && <Summary username={username} password={password}
                                country={country} city={city}
                                pageStyle={pageStyle}/>}
        <br/><br/>
        <button onClick={(e) => setPage(page => Math.max(page - 1, 1))}
                style={{'margin-right': '10px'}}>Previous
        </button>
        <button onClick={(e) => setPage(page => Math.min(page + 1, 3))}>Next
        </button>
      </div>
  )
}