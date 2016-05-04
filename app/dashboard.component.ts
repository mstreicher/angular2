/*
 *
 *  Siehe app.compponent.ts für fehlende Kommentare
 *  02.05.2016
 *  Markus Streicher
 *
 * */

import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  ngOnInit() {
    this._heroService.getHeroes()
        .then(heroes => this.heroes = heroes.slice(0,4));
  }

  constructor(
      private _router: Router,
      private _heroService: HeroService) {
  }

  gotoDetail(hero: Hero) {
    let link = ['HeroDetail', { id: hero.id }];
    this._router.navigate(link);
  }

}