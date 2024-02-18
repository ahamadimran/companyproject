import React, { useState } from 'react';
import SearchList from './SearchList';
import axios from "axios";

export default function Search({ details }) {

  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  var bodySearchData = new FormData();

  const handleSearch = async (e) => {

    bodySearchData.append('query', e);

    axios({
      method: "post",
      url: "http://localhost:5000/api/company/search/",
      data: bodySearchData,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        setSearchResults(response.data);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });


  }



  const handleChange = async (e) => {
    setSearchField(e.target.value);

    if (e.target.value === "") {
      setSearchShow(false);
    }
    else {
      await handleSearch(searchField);
      setSearchShow(true);
    }
  };

  function searchList() {

    console.log(searchResults);
    if (searchShow) {
      return (
        <div className='container is-widescreen'>

          <SearchList filteredCompany={searchResults} />


        </div>
      );
    }
  }

  return (
    <div>
      <div className="control has-icons-left has-icons-right">
        <input
          className="input is-large"
          type="search"
          placeholder="Search Companies"
          onChange={handleChange}
        />
        <span className="icon is-medium is-left">
          <i className="fa fa-search"></i>
        </span>
      </div>
      {searchList()}
    </div>
  )
}
