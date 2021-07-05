import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public setObject(key:string, object:any) {
    localStorage.setItem(key, JSON.stringify(object));
  }

  public getObject(key:string) {
    let theObject = localStorage.getItem(key);
    if(!theObject || (typeof theObject === undefined) || theObject === 'undefined') {
      return null;
    } else {
      return JSON.parse(theObject);
    }
  }

  public delete(key:string) {
    return localStorage.removeItem(key);
  }

  public clear() {
    return localStorage.clear();
  }

  public setValue(key:string, value:any) {
    localStorage.setItem(key, value);
  }

  public getValue(key:string) {
    return localStorage.getItem(key);
  }
}
