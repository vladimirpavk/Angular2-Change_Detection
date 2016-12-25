/// <reference path="../../node_modules/@angular/common/index.d.ts" />

import { Component, OnInit, OnChanges, NgZone, Input,ChangeDetectorRef } from '@angular/core';
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
              private ngZone: NgZone,
              private cd: ChangeDetectorRef)      
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
    var blobURL = URL.createObjectURL(new Blob([
        "onmessage = function (val) { for (var x = 0; x < val.data; x++) { (function(i) { setTimeout(function() { postMessage( Math.random() ); }, i*1); })(x) } };"                             
      ], { type: 'application/javascript' }));
    console.log(blobURL);

    this._webWorker=new Worker(blobURL); 

    this._webWorker.addEventListener('message', (val)=>{
      console.log("Returned form webworker..."+val.data);
      this.counter=val.data;
      this.cd.markForCheck();
    });

    this._webWorker.postMessage(10000);
  
  }
  

  ngOnChanges(){
    console.log("View changed");
  }

}