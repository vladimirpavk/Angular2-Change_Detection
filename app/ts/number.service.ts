import { Component,Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class NumberService{
    public numberGenerated: EventEmitter<number>;

    constructor(){
        this.numberGenerated=new EventEmitter();
    }

    public generateNumbers(): void{
        setInterval(()=>{
            let num=Math.random();
            console.log(num);
            this.numberGenerated.emit(num);
        }
        ,1000);        
    }
}
