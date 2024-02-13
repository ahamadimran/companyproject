import company from "../model/companyModel.js";


export const create = async(req, res) => {
    try {
        const companyData = new company(req.body);
        const {name} = companyData;
        const companyExist = await company.findOne({name});
        if(companyExist) {
            return res.status(400).json({message: "Company Already Exist"});
        }

        const saveCompany = await companyData.save();
        res.status(200).json(saveCompany);

    } catch (error) {
        res.status(500).json({error: "Internal Server Error"});
    }
}


export const fetch = async(req, res) => {
    try {
        const companies = await company.find();
        if(companies.length === 0) {
            return res.status(404).json({message: "Data Not Found"});
        }
        res.status(200).json(companies);

    } catch (error) {
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const update = async(req, res) => {
    try {
        const id = req.params.id;
        const companyExist = await company.findOne({_id: id})
        if (!companyExist) {
            return res.status(404).json({message: "Data not found"});
        }

        const updateCompany = await company.findByIdAndUpdate(id, req.body, {new:true})
        res.status(201).json(updateCompany);
        
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"});
    }
}