/// <reference path="../../node_modules/@angular/common/index.d.ts" />
import { Component, OnInit, OnChanges, NgZone, Input } from '@angular/core';
import { NumberService } from './number.service';
import { HowMany } from './how-many.component';
import { WebWorkerService } from './webworker.service';
import { Observable } from 'rxjs/Observable';

/*@Component({
  selector: 'my-app',
  template:`<div><how-many [i_counter]="counter"></how-many></div>
            <h1>Counter :{{counter}}</h1>
            <input id="proba"/>
          `,  
  providers: [ NumberService, WebWorkerService ]
})*/

@Component({
  selector: 'my-app',
  template:`
        <proba></proba>
          `,  
  providers: [ NumberService, WebWorkerService ]
})
export class AppComponent implements OnInit, OnChanges{

  private counter: number;
  
  constructor(private numberGeneratorService: NumberService, 
              private ngZone: NgZone,
              private webWorkerService: WebWorkerService)      
  {
   
  }

  ngOnInit(){    
      this.numberGeneratorService.numberGenerated.subscribe((val)=>{
        this.counter=val;
      });
      //this.numberGeneratorService.generateNumbers();

      this.webWorkerService.numberGenerated.subscribe((val)=>{          
          this.ngZone.run(()=>this.counter=val); 
          console.log(this.counter);
        });

        //this.webWorkerService.numberGeneratedObservable.subscribe((val)=>console.log("From observable :"+ val));

        this.webWorkerService.getRandomNumbers(50000);                   
  }
  ngOnChanges(){
    console.log("View changed");
  }

}