import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-chart',
  templateUrl: './form-chart.component.html',
  styleUrls: ['./form-chart.component.css']
})

export class FormChartComponent implements OnInit{
  passValue : any;
  formChart : any;
  degree : any;
  giv1 : any;
  giv2 : any;

  ngOnInit(): void {
    this.formChart = new FormGroup({
      value1 : new FormControl('',[Validators.required,Validators.min(1),Validators.max(100)]),
      value2 : new FormControl('',[Validators.required,Validators.min(1),Validators.max(100)]),
    })
  }
  CreateChart(val : any){
    this.degree = Math.round(val / 100 * 360)
    console.log(this.degree)
    this.passValue = `conic-gradient(blue `+ this.degree +`deg, red  0)`;
  }
  checkValue1(fval : any){
    let total = 100;
    if(fval < 101){
      this.giv2 = 100 - fval;
      console.log(this.giv2)
    }
  }
  checkValue2(sval : any){
    let total = 100;
    if(sval <101){
      this.giv1 = 100-sval;
      console.log(this.giv1)
    }
  }
}