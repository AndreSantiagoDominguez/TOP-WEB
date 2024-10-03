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
    this.objects = this.objectService.getObjects();
  }

  handleNewObject(newObject: ObjectModel): void {
    this.objectService.addObject(newObject);
    this.objects = this.objectService.getObjects(); // Refrescar la lista
  }

  handleDeleteObject(id: number): void {
    this.objectService.deleteObject(id);
    this.objects = this.objectService.getObjects(); // Refrescar la lista cuando se elimina
  }
}
