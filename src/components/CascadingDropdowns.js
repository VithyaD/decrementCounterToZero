import React from "react";
import { useState } from "react";
import "./CascadingDropdowns.css";

const CascadingDropdowns = () => {
  const [country, setCountry] = useState("--Country--");
  const [state, setState] = useState("--State--");
  const [city, setCity] = useState("--City--");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [flag, setFlag] = useState(false);

  const datas = [
    {
      country: "India",
      states: [
        { name: "Chandigarh", cities: ["Mani Majra", "Behlana", "Daria"] },
        { name: "TamilNadu", cities: ["Chennai", "Coimbatore", "Thoothukudi"] },
        {
          name: "Kerala",
          cities: ["Thiruvananthapuram", "Kozhikode", "Kollam"],
        },
      ],
    },
    {
      country: "Brazil",
      states: [
        { name: "Alagoas", cities: ["Maragogi", "Coruripe", "Atalaia"] },
        { name: "Amazonas", cities: ["Manaus", "Parintins", "Carauari"] },
        {
          name: "Rio de Janeiro",
          cities: ["Volta Redonda", "Barra Mansa", "Barra do Pirai"],
        },
      ],
    },
    {
      country: "America",
      states: [
        {
          name: "California",
          cities: ["Los Angeles", "San Diego", "San Jose"],
        },
        { name: "Texas", cities: ["Houston", "San Antonio", "Dallas"] },
        { name: "Florida", cities: ["Jacksonville", "Miami", "Tampa"] },
      ],
    },
  ];

  return (
    <div className="ui container">
      <select
        className="form-control"
        name="country"
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
          setStates(datas.find((ctr) => ctr.country === e.target.value).states);
        }}
      >
        <option disabled>--Country--</option>
        {datas.map((data) => {
          return <option value={data.country}> {data.country}</option>;
        })}
      </select>
      <br></br>
      <select
        className="form-control"
        name="state"
        value={state}
        onChange={(e) => {
          setState(e.target.value);
          setCities(states.find((ctr) => ctr.name === e.target.value).cities);
        }}
      >
        <option disabled>--State--</option>
        {states.map((data) => {
          return <option value={data.name}> {data.name}</option>;
        })}
      </select>
      <br></br>
      <select
        className="form-control"
        name="city"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
          setFlag(true);
        }}
      >
        <option disabled>--City--</option>
        {cities.map((data) => {
          return <option value={data}> {data}</option>;
        })}
      </select>
      <br></br>
      <div className="display-text">
        {flag && `You have selected ${city} in ${state} from ${country} `}
      </div>
    </div>
  );
};

export default CascadingDropdowns;
