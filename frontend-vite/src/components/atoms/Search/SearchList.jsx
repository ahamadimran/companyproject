import React from 'react';
import Card from './Card';
import CompanyCard from '../CompanyCard';

function SearchList({ filteredPersons }) {

  const filtered = filteredPersons.map((company, id) => (
    <div key={id} className="column  is-one-third custom-card m-1">
      <CompanyCard {...company} />
    </div>
  ));
  return (
    <div className="columns container grid custom-container">
      {filtered}
    </div>
  );
}

export default SearchList;