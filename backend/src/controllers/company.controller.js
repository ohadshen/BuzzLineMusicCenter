import { getAllCompanies,
         getCompanyById,
         createCompany,
         deleteCompany,
         editCompany } from "../services/company.service.js"

const getAllCompaniesController = async (req, res) => await getAllCompanies();

const getCompanyByIdController = async (req, res) => await getCompanyById(req.params.id);

const createCompanyController = async (req, res) => await createCompany(req.body);

const deleteCompanyController = async (req, res) => await deleteCompany(req.params.id);

const editCompanyController = async (req, res) => await editCompany(req.body);

export { getAllCompaniesController,
        getCompanyByIdController,
        createCompanyController,
        deleteCompanyController,
        editCompanyController };
