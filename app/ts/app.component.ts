/// <reference path="../../node_modules/@angular/common/index.d.ts" />

import { Component, OnInit, OnChanges, NgZone, Input } from '@angular/core';
import { NumberService } from './number.service';
import { HowMany } from './how-many.component';
//import { WebWorkerService } from './webworker.service'; --old web-worker
import { WebWorkerService } from './web-worker/web-worker.service';
import { Observable } from 'rxjs/Observable';

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

  ngOnInit(){  
        const input = 100;
        const promise = this.webWorkerService.run(input2=>input2*100, input);
        promise.then(
          result=>{
            console.log(result);
            this.counter=result;
          }
        ).catch(result=>{               
            console.log(result);           
          });                
  }
  

  ngOnChanges(){
    console.log("View changed");
  }

}