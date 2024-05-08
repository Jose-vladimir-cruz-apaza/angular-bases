import { Component, OnInit, NgModule } from '@angular/core';



@Component({
    selector: 'app-counter',
    template:   `  
        {{coun}}      
        <button (click)="increasyBy( coun )" >+1</button>
        <button (click)="resetBy()" >Reset</button>
        <button (click)="discrasyBy( coun )">-1</button>`
})

export class CounterComponent {
    constructor() { }
    public coun: number = 10;
    increasyBy(value:number): void{
        this.coun =value+1;
      }
    
      discrasyBy(value:number): void{
        this.coun =value-1;
      }
    
      resetBy():void {
        this.coun=0;
      }
}
