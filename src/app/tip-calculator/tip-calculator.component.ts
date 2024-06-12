import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TipService } from '../tip.service';

@Component({
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html',
  styleUrls: ['./tip-calculator.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
  providers: [TipService]
})
export class TipCalculatorComponent {
  totalAmount: number | null = null;
  tipPercentage: number | null = null;
  numberOfPeople: number | null = null;
  amountPerPerson: number = 0;

  constructor(private tipService: TipService) {}

  calculate() {
    if (this.totalAmount !== null && this.tipPercentage !== null && this.numberOfPeople !== null) {
      this.amountPerPerson = this.tipService.calculateTip(
        this.totalAmount,
        this.tipPercentage,
        this.numberOfPeople
      );
    }
  }
}
