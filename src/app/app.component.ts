import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Hola Mundo';
  public counter: number = 10;

  increasyBy(value:number): void{
    this.counter =value+1;
  }

  discrasyBy(value:number): void{
    this.counter =value-1;
  }

  resetBy():void {
    this.counter=0;
  }
}
