import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from 'src/app/model/hero';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  phrase: string = '';
  key: string = 'name';
  column: string = '';

  // heroList$: BehaviorSubject<Hero[]> = this.heroService.list$;
  heroList: Hero[] = this.heroService.getAll();

  onChangeInput(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  onChangeSort(key: string): void {
    this.column = key;
  }

  constructor(
    private heroService: HeroService,
  ) { }

  ngOnInit(): void {
    // this.heroService.getAll();
  }

}
