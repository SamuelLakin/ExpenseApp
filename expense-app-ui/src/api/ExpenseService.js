import axios from "axios";

// File for API calls

const API_URL = "http://localhost:8080/api/expenses";

export const getExpense = () => axios.get(API_URL);

export const getDate = () => axios.get(API_URL);

export const addExpense = (expense) => axios.post(API_URL, expense);

export const deleteExpense = (id) => axios.delete(`${API_URL}/${id}`);

export const getTotalExpense = () => axios.get(`${API_URL}/total`);

export const updateExpense = (id, expense) => axios.put(`${API_URL}/${id}`, expense);