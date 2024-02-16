import React from 'react';
import CompanyCard from '../CompanyCard';
import { useNavigate } from "react-router-dom";

function SearchList({ filteredCompany }) {

  const navigate = useNavigate()


  const filtered = filteredCompany.map((company, id) => (

    <div key={id} 
    className="column custom-card"
    onClick={() => { navigate("/details/" + company._id)}}
    >
      <CompanyCard {...company} />
    </div>
  ));
  return (
    <div className="columns container custom-container">
      {filtered}
    </div>
  );
}

export default SearchList;