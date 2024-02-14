import React, { useEffect, useState } from "react";
import axios from "axios";
import CompanyCard from "../atoms/CompanyCard";


const Company = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/company/fetch/").then((res) => {
            setCompanies(res.data);
        });
    }, []);

    return (
        <div>
            <div class="columns container grid custom-container">
                {companies &&
                    companies.map((company, id) => (
                        <div class="column  is-one-third custom-card cell" >
                            <CompanyCard {...company} />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Company;