import mongoose, { mongo } from "mongoose";

const companySchema = new mongoose.Schema({
    logo : {
        type: String,
        require: true,
    },

    name : {
        type: String,
        require: true,
    },

    description : {
        type: String,
        require: true,
    },

    socialicon : {
        type: String,
    },

    category : {
        type: String,
        require: true,
    },

    location : {
        type: String,
        require: true,
    }
})

export default mongoose.model("company", companySchema);