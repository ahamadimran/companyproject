import React, { useEffect, useState } from "react";
import axios from "axios";
import CompanyCard from "../atoms/CompanyCard";
import { useNavigate } from "react-router-dom";


const Company = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/company/fetch/").then((res) => {
            setCompanies(res.data);
        });
    }, []);

    const navigate = useNavigate()

    return (
        <div>
            <div className="columns container grid custom-container">
                {companies &&
                    companies.map((company, id) => (
                        <div key={id}
                            className="column is-one-third custom-card"
                            onClick={() => { navigate("/details/" + company._id)}}
                        >
                            <CompanyCard {...company} />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Company;