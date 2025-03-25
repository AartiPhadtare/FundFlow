import { Component, EventEmitter, Output, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone:false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  
/** without signals  */
// @Output() calculate = new EventEmitter<InvestmentInput>();

  // initialInvestments = '0';
  // annualInvestments ='0';
  // ExpectedInvestments = '5';
  // duration ='10';


  //with signals


  initialInvestments = signal('0');
  annualInvestments = signal('0');
  ExpectedInvestments = signal('5');
  duration = signal('10');

  constructor(private investmentService: InvestmentService){}

  onSubmit(){
    this.investmentService.CalculateInvestmentResults({
      initialInvestment: +this.initialInvestments(),
      duration : +this.duration(),
      expectedReturn: +this.ExpectedInvestments(),
      annualInvestment: +this.annualInvestments()
    });
    this.initialInvestments.set('0');
    this.annualInvestments.set('0');
    this.ExpectedInvestments.set('10');
    this.duration.set('10');
  }
}
