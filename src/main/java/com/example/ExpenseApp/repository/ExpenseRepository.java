package com.example.ExpenseApp.repository;
import com.example.ExpenseApp.entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ExpenseRepository extends JpaRepository<Expense, Long>{}