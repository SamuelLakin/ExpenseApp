package com.example.ExpenseApp.service;

import com.example.ExpenseApp.entity.Expense;
import com.example.ExpenseApp.repository.ExpenseRepository;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class ExpenseService {
    
    private final ExpenseRepository repo;

    public ExpenseService(ExpenseRepository repo){

        this.repo = repo;
    }

    public List<Expense> getAll(){

        return repo.findAll();
    }   

    public Expense getById(Long id){

        return repo.findById(id).orElse(null);
    }

    public Expense create(Expense e){
        return repo.save(e);
    }

    public double getTotalExpense(){
        return repo.findAll().stream().mapToDouble(Expense::getAmount).sum();
    }

    public Expense update(Long id, Expense newExpense) {
        return repo.findById(id).map(e -> {
            e.setDescription(newExpense.getDescription());
            e.setCategory(newExpense.getCategory());
            e.setAmount(newExpense.getAmount());
            e.setDate(newExpense.getDate());
            return repo.save(e);
        }).orElse(null);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}