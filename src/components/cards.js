const CountryCard  = ({country}) => {
    return (
      <div className="card">
          <div className='title'>
              {country.name}
          </div>
          <img src={country.flag} className='flags' alt='country flag'></img>
          <div>
              capital : {country.capital}<br />
              region : {country.region}<br />
              country code: {country.alpha3Code}<br />
              latitude : {country.latlng[0]}<br />
              longitude : {country.latlng[1]}
          </div>
      </div>
    );
}

export default CountryCard;