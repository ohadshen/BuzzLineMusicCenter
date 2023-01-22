import Company from "../models/company.model.js";

const getAllCompanies = async () => await Company.find({});

const getCompanyById = async (id) => await Company.findById(id);

const createCompany = async (company) => await Company.create(company);

const deleteCompany = async (id) => await Company.findByIdAndDelete(id);

const editCompany = async (company) => await Company.findByIdAndUpdate(company.id, company);

export { getAllCompanies, getCompanyById, createCompany, deleteCompany, editCompany };
