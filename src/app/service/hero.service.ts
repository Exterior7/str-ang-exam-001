import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../model/hero';



@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private list: Hero[] = [
    {id: 1, name:'Amerika Kapitány', superPower:'Vezető', address:'NY city'},
    {id: 2, name:'Vasember', superPower:'Repülés', address:'NY city'},
    {id: 3, name:'Hangya', superPower:'Zsugorodás', address:'Los Angeles'},
    {id: 4, name:'Dr. Strange', superPower:'Varázslás', address:'London'},
    {id: 5, name:'Feketeözvegy', superPower:'Beszivárgás', address:'NY city'},
  ]

  list$: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>([]);

  constructor() { }

  getAll(): void {
    this.list$.next(this.list);
  }
}
