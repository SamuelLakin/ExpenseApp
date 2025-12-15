package com.example.ExpenseApp.controller;

import com.example.ExpenseApp.entity.Expense;
import com.example.ExpenseApp.service.ExpenseService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/api/expenses")
@CrossOrigin(origins = "*")

public class ExpenseController{

    private final ExpenseService service;

    public ExpenseController(ExpenseService service){

        this.service = service;
    }

    @GetMapping
    public List<Expense> getAll(){
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Expense getById(@PathVariable Long id){
        return service.getById(id);
    }

    @PostMapping
    public Expense create(@RequestBody Expense expence){
        return service.create(expence);
    }

    @PutMapping("/{id}")
    public Expense update(@PathVariable Long id, @RequestBody Expense expense){
        return service.update(id, expense);
    }

    @GetMapping("/total")
    public double getMethodName() {
        return service.getTotalExpense();
    }
    

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        service.delete(id);
    }
}
