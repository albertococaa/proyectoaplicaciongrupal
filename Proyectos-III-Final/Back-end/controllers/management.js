const { matchedData } = require("express-validator")
const {handleHttpError} = require("../utils/handleError")
const { forumModel, forbiddenModel, usersModel } = require("../models")



const getItems = async (req, res) => {
    try {
        req = matchedData(req)
        
        var messages = await forumModel.find({ createdBy: req.id, delete: true })

        res.status(200).send(messages)  
    }catch(err) {
        console.log(err)
        handleHttpError(res, "ERROR_GET_DELETE_MESSAGES")
    }
}

const getReports = async (req, res) => {
    try {
        req = matchedData(req)
        
        var messages = await forumModel.find({ reports: { $ne: [] } })
        messages.sort({ 'reports.length': -1 })

        res.status(200).send(messages)  
    }catch(err) {
        console.log(err)
        handleHttpError(res, "ERROR_GET_REPORT_MESSAGES")
    }
}

const uploadCSV = async (req, res) => {
    try {
        const { body, file } = req
        
        var csv = []

        fs.createReadStream("../storage/"+file.filename)
        .pipe(csv())
        .on('data', (row) => {
            csv.push(row);
        })

        var lines=csv.split("\n");

        var result = [];
        var headers=lines[0].split(",");
      
        for(var i=1;i<lines.length;i++){
      
            var obj = {};
            var currentline=lines[i].split(",");
      
            for(var j=0;j<headers.length;j++){
                obj[headers[j]] = currentline[j];
            }
      
            result.push(obj);
      
        }
    
        const data = JSON.stringify(result);

        for (const dato of data) {
            var email = dato.email
            await usersModel.findOneAndUpdate({ email }, { charge: dato.cargo });
        }

        res.status(200).send(messages)  
    }catch(err) {
        console.log(err)
        handleHttpError(res, "ERROR_UPLOAD_CSV")
    }
}

const addForbiden = async (req, res) => {
    try {
        req = matchedData(req)
        
        var words = await forbiddenModel.create(req.word)

        res.status(200).send(words)  
    }catch(err) {
        console.log(err)
        handleHttpError(res, "ERROR_ADD_FORBIDDEN_WORD")
    }
}

const lessForbiden = async (req, res) => {
    try {
        req = matchedData(req)
        
        var words = await forbiddenModel.deleteOne({ word: req.word })

        res.status(200).send()  
    }catch(err) {
        console.log(err)
        handleHttpError(res, "ERROR_DELETE_FORBIDDEN_WORD")
    }
}


module.exports = { getItems, getReports, addForbiden, lessForbiden, uploadCSV }
