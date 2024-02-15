import mongoose, { mongo } from "mongoose";

const companySchema = new mongoose.Schema({
    // fileName : {
    //     type: String,
    //     require: true,
    // },

    // filePath : {
    //     type: String,
    //     require: true,
    // },

    // fileSize : {
    //     type: String,
    //     require: true,
    // },

    name: {
        type: String,
        require: true,
    },

    description: {
        type: String,
        require: true,
    },

    // socialicon : {
    //     type: String,
    // },

    category: {
        type: Array,
        require: true,
    },

    location: {
        type: String,
        require: true,
    },

    // basicInformation : {
    //     type: String,
    //     require: true,
    // },

    // targetMarket : {
    //     type: String,
    //     require: true,
    // },

    // tags : {
    //     type: String, 
    // }
})

export default mongoose.model("company", companySchema);