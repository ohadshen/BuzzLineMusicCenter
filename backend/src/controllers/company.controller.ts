import {
  getAllCompanies,
  getCompanyById,
  createCompany,
  deleteCompany,
  editCompany,
} from "../services/company.service.js";
import { sendError } from "../shared/errorHandler.js";

//@ts-ignore
const getAllCompaniesController = async (req, res) => {
  try {
    res.json(await getAllCompanies());
  } catch (err) {
    sendError("error get all Companies", err, res);
  }
};

//@ts-ignore
const getCompanyByIdController = async (req, res) => {
  try {
    res.json(await getCompanyById(req.params.id));
  } catch (err) {
    sendError("error get Company by ID", err, res);
  }
};

//@ts-ignore
const createCompanyController = async (req, res) => {
  try {
    res.json(await createCompany(req.body));
  } catch (err) {
    sendError("error creating Company", err, res);
  }
};

//@ts-ignore
const deleteCompanyController = async (req, res) => {
  try {
    res.json(await deleteCompany(req.params.id));
  } catch (err) {
    sendError("error deleting Company", err, res);
  }
};

//@ts-ignore
const editCompanyController = async (req, res) => {
  try {
    res.json(await editCompany(req.body));
  } catch (err) {
    sendError("error editing Company", err, res);
  }
};

export {
  getAllCompaniesController,
  getCompanyByIdController,
  createCompanyController,
  deleteCompanyController,
  editCompanyController,
};
