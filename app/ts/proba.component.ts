import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'proba',
    template:`
        <h1>{{firstName}}, {{lastName}}</h1>
        <button (click)="onClick()">Gurni me</button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProbaComponent{

    @Input() count:number;

    private firstName: string ="Vladimir";
    private lastName: string="Pavkovic";

    private onClick(){
        this.firstName="Natasa";
    }
}