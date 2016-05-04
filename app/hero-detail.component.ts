/*
 *
 *  Siehe app.compponent.ts für fehlende Kommentare
 *  02.05.2016
 *  Markus Streicher
 *
 * */

import {Component, OnInit} from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { HeroService } from './hero.service';
import {Hero} from "./hero";

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  styleUrls: ['app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  hero: Hero;

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._heroService.getHero(id)
        .then(hero => this.hero = hero);
  }

  constructor(
      private _heroService: HeroService,
      private _routeParams: RouteParams) {
  }

  goBack() {
    window.history.back();
  }

}
