import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipService {

  calculateTip(totalAmount: number, tipPercentage: number, numberOfPeople: number): number {
    const tipAmount = (totalAmount * tipPercentage) / 100;
    const totalWithTip = totalAmount + tipAmount;
    return totalWithTip / numberOfPeople;
  }
  
}
