import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
@Output() calculate = new EventEmitter<InvestmentInput>();


  initialInvestments = '0';
  annualInvestments ='0';
  ExpectedInvestments = '5';
  duration ='10';


  onSubmit(){
    this.calculate.emit({
      initialInvestment: +this.initialInvestments,
      duration : +this.duration,
      expectedReturn: +this.ExpectedInvestments,
      annualInvestment: +this.annualInvestments
    })
  }
}
