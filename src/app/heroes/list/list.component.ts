import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[]=['spiderman','Ironman','Hulk','She Hulk','Thor'];
  public deleteHero?: String;

  removeLastHero():void{
    this.deleteHero=this.heroNames.pop();
  }
}
