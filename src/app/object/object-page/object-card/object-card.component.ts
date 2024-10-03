import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ObjectModel } from '../../object-model';

@Component({
  selector: 'object-card',
  templateUrl: './object-card.component.html'
})
export class ObjectCardComponent {
  @Input()
  object!: ObjectModel;
  @Output() delete = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.object.id); // Emitir el evento de eliminación con el ID del objeto
  }
}
