import { Injectable } from '@angular/core';
import { ObjectModel } from '../object-model';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {
  private storageKey = 'objects';

  constructor() { }

  getObjects(): ObjectModel[] {
    const objects = localStorage.getItem(this.storageKey);
    return objects ? JSON.parse(objects) as ObjectModel[] : [];
  }

  addObject(object: ObjectModel): void {
    const objects = this.getObjects();

    // Generar un ID único 
    object.id = this.generateId(objects);

    objects.push(object);
    localStorage.setItem(this.storageKey, JSON.stringify(objects));
  }


  updateObject(updatedObject: ObjectModel): void {
    let objects = this.getObjects();
    objects = objects.map(obj => obj.id === updatedObject.id ? updatedObject : obj);
    localStorage.setItem(this.storageKey, JSON.stringify(objects));
  }

  deleteObject(id: number): void {
    let objects = this.getObjects();
    objects = objects.filter(obj => obj.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(objects));
  }

  private generateId(objects: ObjectModel[]): number {
    return objects.length > 0 ? Math.max(...objects.map(obj => obj.id)) + 1 : 1;
  }
}
