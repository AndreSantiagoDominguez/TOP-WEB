import { Component, Output, EventEmitter } from '@angular/core';
import { ObjectModel } from '../../object-model';

@Component({
  selector: 'object-form',
  templateUrl: './object-form.component.html'
})
export class ObjectFormComponent {
  object: ObjectModel = {
    id: 0,
    name: '', 
    description: '',
    rarity: '',
    value: 0,
    videoGameId: 0,
    userId: 0
  };

  @Output() newObject = new EventEmitter<ObjectModel>();

  onSubmit() {
    this.newObject.emit(this.object); // Emitir el nuevo objeto al componente padre
    this.object = {  
      id: 0,
      name: '', 
      description: '',
      rarity: '',
      value: 0,
      videoGameId: 0,
      userId: 0};
  }
}
