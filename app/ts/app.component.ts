/// <reference path="../../node_modules/@angular/common/index.d.ts" />

import { Component, OnInit, OnChanges, NgZone, Input } from '@angular/core';
import { NumberService } from './number.service';
import { HowMany } from './how-many.component';
import { WebWorkerService } from './webworker.service';

@Component({
  selector: 'my-app',
  template:`<div><how-many [i_counter]="counter"></how-many></div>
            <h1>Counter :{{counter}}</h1>
            <input id="proba"/>
          `,  
  providers: [ NumberService, WebWorkerService ]
})
export class AppComponent implements OnInit, OnChanges{

  private counter: number = 0;  

  constructor(private numberGeneratorService: NumberService,               
              private webWorkerService: WebWorkerService,
              private ngZone: NgZone)      
  {
      
  }

  private _webWorker: Worker;

  ngOnInit(){  

   /* this.webWorkerService.numberGenerated.subscribe((value)=>{  
      this.ngZone.run(()=>this.counter=value);
      console.log("Counter value :"+this.counter);
    });
    this.webWorkerService.getRandomNumbers(100000);

    this.numberGeneratorService.numberGenerated.subscribe((val)=>{
        this.counter=val;
    });
    //this.numberGeneratorService.generateNumbers();*/

    this._webWorker=new Worker('./app/js/jscript.js');        
    this._webWorker.addEventListener('message', (val)=>{
      console.log(val.data);
      this.ngZone.run(()=>this.counter=val.data);
    });

    this._webWorker.postMessage(103300);
  
  }
  

  ngOnChanges(){
    console.log("View changed");
  }

}