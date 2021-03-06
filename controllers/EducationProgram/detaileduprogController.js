const detaileduprogram = require('../../service/EducationProgram/detaileduprogService');

exports.getDetailEduProg = (req, res) => {
    let params = req.query;
    let request = {};
    let response = {};
    if(isNaN(params.ideduprog)){
        response.code = -1;
        response.message = "fail";
        res.send(JSON.stringify(response));
    }
    request.IdEduProgram = Number(params.ideduprog);
    detaileduprogram.getDetailEduProgram(request)
        .then(data => {
            if (data) {
                response.code = 1;
                response.message = "success";
                response.data = data;
                res.send(JSON.stringify(response));
            } else {
                response.code = -1;
                response.message = "fail";
                response.data = data;
                res.send(JSON.stringify(response));
            }
        })
}

exports.addDetailEduProg = (req, res) => {
    let body = JSON.parse(req.body.data);
    let request = {};
    request.IdEduProgram = Number(body.ideduprogram);
    request.EnrollmentTarget = body.enrollmenttarget;
    request.DateCreated = body.datecreated;
    request.EduProcess = body.eduprocess;
    request.GraduatedCon = body.graduatedcon;
    request.OSUsedNode = boyd.osusednode;
    request.IdOutcome = Number(body.idoutcome);

    detaileduprogram.addDetailEduProg(request)
        .then(data => {
            let response = {};
            if (data === 1) {
                response.code = 1;
                response.message = "success";
                res.send(JSON.stringify(response));
            } else {
                response.code = -1;
                response.message = "fail";
                res.send(JSON.stringify(response));
            }
        })
        .catch(err => {
            throw err;
        })
}
exports.updateDetailEduProg = (req, res) => {
    let params = req.query;
    let body = JSON.parse(req.body.data);
    let request = {};
    request.IdEduProgram = Number(params.ideduprogram);
    request.EnrollmentTarget = body.enrollmenttarget;
    request.DateCreated = body.datecreated;
    request.EduProcess = body.eduprocess;
    request.GraduatedCon = body.graduatedcon;
    request.DateEdited = body.dateedited;
    request.IdOutcome = Number(body.idoutcome);

    detaileduprogram.updateDetailEduProg(request)
        .then(data => {
            let response = {};
            if (data === 1) {
                response.code = 1;
                response.message = "update success";
                res.send(JSON.stringify(response));
            } else if (data === 2) {
                response.code = 2;
                response.message = "create success";
                res.send(JSON.stringify(response));
            } else {
                response.code = -1;
                response.message = "fail";
                res.send(JSON.stringify(response));
            }
        })
        .catch(err => {
            throw err;
        })
}