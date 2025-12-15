package com.example.ExpenseApp.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Expense {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String description;
    private String catergory;
    private double amount;
    private LocalDate date;

    public Expense() {}

    public Expense(String description, String catergory, double amount, LocalDate date){
        this.description = description;
        this.catergory = catergory;
        this.amount = amount;
        this.date = date;
    }

    public Long getId(){
        return id;
    }

    public String getDescription(){
        return description;
    }

    public String getCategory(){
        return catergory;
    }

    public double getAmount(){
        return amount;
    }

    public LocalDate getDate(){
        return date;
    }

    public void setDescription(String description){
        this.description = description;
    }

    public void setCategory(String catergory){
        this.catergory = catergory;
    }

    public void setAmount(double amount){
        this.amount = amount;
    }

    public void setDate(LocalDate date){
        this.date = date;
    }
}

