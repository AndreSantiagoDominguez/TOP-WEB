import { Injectable } from '@angular/core';
import { ObjectModel } from '../object-model';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {
  private storageKey = 'objects';

  constructor() { }

  // Obtener todos los objetos
  getObjects(): ObjectModel[] {
    const objects = localStorage.getItem(this.storageKey);
    return objects ? JSON.parse(objects) : [];
  }

  // Agregar un nuevo objeto
  addObject(object: ObjectModel): void {
    const objects = this.getObjects();
    objects.push(object);
    localStorage.setItem(this.storageKey, JSON.stringify(objects));
  }

  // Actualizar un objeto
  updateObject(updatedObject: ObjectModel): void {
    let objects = this.getObjects();
    objects = objects.map(obj => obj.id === updatedObject.id ? updatedObject : obj);
    localStorage.setItem(this.storageKey, JSON.stringify(objects));
  }

  // Eliminar un objeto
  deleteObject(id: number): void {
    let objects = this.getObjects();
    objects = objects.filter(obj => obj.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(objects));
  }
}
