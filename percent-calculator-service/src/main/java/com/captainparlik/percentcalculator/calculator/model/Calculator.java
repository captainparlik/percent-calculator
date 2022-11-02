package com.captainparlik.percentcalculator.calculator.model;

import lombok.Data;
import org.springframework.stereotype.Component;

@Data
@Component
public class Calculator {

    private float buyPrice;

    public float calculatePercent(float buyPrice) {
        return buyPrice + buyPrice/100;
    }
}
