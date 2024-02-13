import React, { useEffect, useState } from "react";
import axios from "axios";
import CompanyCard from "./CompanyCard";


const Company = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        axios.get("/company.json").then((res) => {
            setCompanies(res.data.companies);
        });
    }, []);

    return (
        <div>
            <div class="columns grid-container container">
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