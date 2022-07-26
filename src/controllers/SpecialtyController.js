import SpecialtyService from '../services/SpecialtyService';

let createSpecialty = async (req, res) => {
    try {
        let info = await SpecialtyService.createSpecialty(req.body);
        return res.status(200).json(info);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'error from server',
        });
    }
};
let getAllSpecialty = async (req, res) => {
    try {
        let info = await SpecialtyService.getAllSpecialty();
        return res.status(200).json(info);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'error from server',
        });
    }
};
let getDetailSpecialtyById = async (req, res) => {
    try {
        let info = await SpecialtyService.getDetailSpecialtyById(req.query.id, req.query.location);
        return res.status(200).json(info);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'error from server',
        });
    }
};
module.exports = {
    createSpecialty: createSpecialty,
    getAllSpecialty: getAllSpecialty,
    getDetailSpecialtyById: getDetailSpecialtyById,
};
