package com.captainparlik.percentcalculator.calculator.controller;

import com.captainparlik.percentcalculator.calculator.model.Calculator;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin
public class CalculatorController {

    private final Calculator calculator;

    @GetMapping("/percent")
    public float getPercent(@RequestParam("buy") float buyPrice) {
        return calculator.calculatePercent(buyPrice);
    }
}
