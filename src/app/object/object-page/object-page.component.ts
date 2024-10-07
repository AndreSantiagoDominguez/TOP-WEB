import { Component, OnInit } from '@angular/core';
import { ObjectService } from '../services/object.service';
import { ObjectModel } from '../object-model';

@Component({
  selector: 'app-object-page', 
  templateUrl: './object-page.component.html',
  styleUrls: ['./object-page.component.css']
})
export class ObjectPageComponent implements OnInit {
  objects: ObjectModel[] = [];

  constructor(private objectService: ObjectService) {}

  ngOnInit(): void {
    // Suscribirse al observable
    this.objectService.objects$.subscribe(objects => {
      this.objects = objects;
    });
  }

  handleNewObject(newObject: ObjectModel): void {
    this.objectService.addObject(newObject);
  }

  handleUpdateObject(updatedObject: ObjectModel): void {
    this.objectService.updateObject(updatedObject);
  }

  handleDeleteObject(id: number): void {
    this.objectService.deleteObject(id);
  }
}
