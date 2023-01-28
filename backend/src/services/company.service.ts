import Company from "../models/company.model.js";

const getAllCompanies = async () => await Company.find({});

//@ts-ignore
const getCompanyById = async (id) => await Company.findById(id);

//@ts-ignore
const createCompany = async (company) => await Company.create(company);

//@ts-ignore
const deleteCompany = async (id) => await Company.findByIdAndDelete(id);

//@ts-ignore
const editCompany = async (company) =>
  await Company.findByIdAndUpdate(company.id, company);

export {
  getAllCompanies,
  getCompanyById,
  createCompany,
  deleteCompany,
  editCompany,
};
