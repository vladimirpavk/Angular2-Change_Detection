import { Component, Input } from '@angular/core';

@Component({
    selector: 'how-many',
    template: `How many : {{i_counter}}`    
})
export class HowMany{
    @Input() i_counter:number=0;  
}