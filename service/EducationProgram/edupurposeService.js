const db = require('../../models/index');

exports.getEduPurpose = (request) => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                db.detaileduprog.findOne({
                    where: {
                        Id: request.IdDetailEduProg
                    }
                })
                    .then(data => {
                        if (data) {
                            db.edupurpose.findAll({
                                where: {
                                    IdDetail: request.IdDetailEduProg
                                }
                            })
                                .then(data => {
                                    resolve(data);
                                })
                                .catch(err => {
                                    reject(err);
                                })
                        }
                    })
                    .catch(err => {
                        reject(err);
                    })

            })
            .catch(err => {
                reject(err);
            })
    })
}

exports.addEduPurpose = (request) => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                db.edupurpose.bulkCreate(request.data)
                    .then(() => {
                        let code = 1;
                        resolve(code);
                    })
                    .catch(err => {
                        reject(err);
                    })
            })
            .catch(err => {
                reject(err);
            })
    })
}
exports.updateEduPurpose = (request) => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                db.edupurpose.findOne({
                    where:{
                        IdDetail: request.IdDetail
                    }
                })
                    .then(data => {
                        if (data) {
                            db.edupurpose.update({
                                KeyRow: request.KeyRow,
                                NameRow: request.NameRow
                            },
                                {
                                    where: { IdDetail: request.IdDetail }
                                })
                                .then(effectRows => {
                                    console.log("Effected rows of EduPurpose: "+ effectRows);
                                    let code = 1;
                                    resolve(code);
                                })
                                .catch(err => {
                                    reject(err);
                                })
                        } else {
                            let code = -1;
                            resolve(code);
                        }
                    })
                    .catch(err => {
                        reject(err);
                    })
            })
            .catch(err => {
                reject(err);
            })
    })
}