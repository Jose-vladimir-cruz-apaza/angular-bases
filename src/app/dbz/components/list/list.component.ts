import { Component,EventEmitter, Input,Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[]=[{
    id:'',
    name: 'Trunks',
    power: 10
  }];

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();  

  onDeletCharacter(id?:string):void{
    if(!id) return;
    console.log({id});
    this.onDelete.emit(id);
  }
}
