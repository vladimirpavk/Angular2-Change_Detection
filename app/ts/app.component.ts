/// <reference path="../../node_modules/@angular/common/index.d.ts" />
import { Component, OnInit } from '@angular/core';
import { NumberService } from './number.service';
import { HowMany } from './how-many.component';
@Component({
  selector: 'my-app',
  template:`<div><how-many [i_counter]="counter"></how-many></div>
            <h1>Counter :{{counter}}</h1>
          `,  
  providers: [ NumberService ]
})
export class AppComponent{

  public counter: number = 0;

  constructor(private numberGeneratorService: NumberService){
  }

  ngOnInit(){    
      this.numberGeneratorService.numberGenerated.subscribe((val)=>{
        this.counter=val;
      });
      this.numberGeneratorService.generateNumbers();   
  }

}