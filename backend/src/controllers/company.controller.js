import { getAllCompanies,
         getCompanyById,
         createCompany,
         deleteCompany,
         editCompany } from "../services/company.service.js"
import { sendError } from "../shared/errorHandler.js";

const getAllCompaniesController = async (req, res) => {
    try {
        res.json(await getAllCompanies());
    } catch(err) {
        sendError('error get all Companies', err, res);
    }
}

const getCompanyByIdController = async (req, res) => {
    try {
        res.json(await getCompanyById(req.params.id));
    } catch(err) {
        sendError('error get Company by ID', err, res);
    }
}

const createCompanyController = async (req, res) => {
    try {
        res.json(await createCompany(req.body));
    } catch(err) {
        sendError('error creating Company', err, res);
    }
}

const deleteCompanyController = async (req, res) => {
    try {
        res.json(await deleteCompany(req.params.id));
    } catch(err) {
        sendError('error deleting Company', err, res);
    }
}

const editCompanyController = async (req, res) => {
    try {
        res.json(await editCompany(req.body));
    } catch(err) {
        sendError('error editing Company', err, res);
    }
}

export { getAllCompaniesController,
        getCompanyByIdController,
        createCompanyController,
        deleteCompanyController,
        editCompanyController };
