import React, { useState } from 'react'

export default function AddressForm() {
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

  const onCityChange = (event) => setCity(event.target.value)
  const onCountryChange = (event) => setCountry(event.target.value)

  return (
    <form>
      <div>
        <input type="text" placeholder="City" value={city} onChange={onCityChange} />
        <input type="text" placeholder="Country" value={country} onChange={onCountryChange} />
      </div>

      <div>
        You live in { `${city} ${country}` }
      </div>
    </form>
  )
}
