import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ObjectModel } from '../../object-model';

@Component({
  selector: 'object-card',
  templateUrl: './object-card.component.html',
  styleUrls: ['./object-card.component.css']
})
export class ObjectCardComponent {
  @Input() object!: ObjectModel;
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<ObjectModel>();

  isEditing = false;
  updatedObject: ObjectModel = { ...this.object }; 

  onEdit() {
    this.isEditing = true;
    this.updatedObject = { ...this.object }; 
  }

  onSubmitEdit() {
    console.log('Submitting edit:', this.updatedObject);
    this.edit.emit(this.updatedObject);
    this.isEditing = false; 
  }

  cancelEdit() {
    this.isEditing = false;
    this.updatedObject = { ...this.object }; 
  }

  onDelete() {
    this.delete.emit(this.object.id);
  }
}
