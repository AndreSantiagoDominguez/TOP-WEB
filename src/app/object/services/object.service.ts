import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ObjectModel } from '../object-model';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {
  private storageKey = 'objects';
  private objectsSubject = new BehaviorSubject<ObjectModel[]>(this.getObjects());
  objects$ = this.objectsSubject.asObservable();

  constructor() { }

  getObjects(): ObjectModel[] {
    const objects = localStorage.getItem(this.storageKey);
    return objects ? JSON.parse(objects) as ObjectModel[] : [];
  }

  addObject(object: ObjectModel): void {
    const objects = this.getObjects();
    object.id = this.generateId(objects); // Generar un ID único
    objects.push(object);
    localStorage.setItem(this.storageKey, JSON.stringify(objects));
    this.objectsSubject.next(objects); // Emitir el nuevo estado
  }

  updateObject(updatedObject: ObjectModel): void {
    let objects = this.getObjects();
    objects = objects.map(obj => obj.id === updatedObject.id ? updatedObject : obj);
    localStorage.setItem(this.storageKey, JSON.stringify(objects));
    this.objectsSubject.next(objects); // Emitir el estado actualizado
  }

  deleteObject(id: number): void {
    let objects = this.getObjects();
    objects = objects.filter(obj => obj.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(objects));
    this.objectsSubject.next(objects); // Emitir el estado después de la eliminación
  }

  private generateId(objects: ObjectModel[]): number {
    return objects.length > 0 ? Math.max(...objects.map(obj => obj.id)) + 1 : 1;
  }
}
