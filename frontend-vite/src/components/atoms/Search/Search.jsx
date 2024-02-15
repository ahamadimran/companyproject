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
        <SearchList filteredPersons={searchResults} />
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



//https://medium.com/geekculture/create-a-simple-search-component-in-react-js-using-react-hooks-710c1dfe8b58

// import React, { useState } from 'react';
// import Scroll from './Scroll';
// import SearchList from './SearchList';

// function Search({ details }) {

//   const [searchField, setSearchField] = useState("");
//   const [searchShow, setSearchShow] = useState(false); 

//   const filteredPersons = details.filter(
//     person => {
//       return (
//         person
//         .name
//         .toLowerCase()
//         .includes(searchField.toLowerCase()) ||
//         person
//         .email
//         .toLowerCase()
//         .includes(searchField.toLowerCase())
//       );
//     }
//   );

//   const handleChange = e => {
//     setSearchField(e.target.value);
//     if(e.target.value===""){
//       setSearchShow(false);
//     }
//     else {
//       setSearchShow(true);
//     }
//   };

//   function searchList() {
//     if (searchShow) {
//       return (
//         <Scroll>
//           <SearchList filteredPersons={filteredPersons} />
//         </Scroll>
//       );
//     }
//   }

//   return (
//     <section className="garamond">
//       <div className="navy georgia ma0 grow">
//         <h2 className="f2">Search your course</h2>
//       </div>
//       <div className="pa2">
//         <input 
//           className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
//           type = "search" 
//           placeholder = "Search People" 
//           onChange = {handleChange}
//         />
//       </div>
//       {searchList()}
//     </section>
//   );
// }

// export default Search;