/*
*
*  Siehe app.compponent.ts für fehlende Kommentare
*  02.05.2016
*  Markus Streicher
*
*  Angular Guide
*  https://angular.io/docs/ts/latest/guide/architecture.html
* */

import {Component, OnInit} from 'angular2/core';
import {Hero} from "./hero"; 
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from "./hero.service";
import {Router} from "angular2/router";


@Component({ // Erstellung der Komponenten
    selector: 'my-heroes', // Der Selektor in der index.html

    templateUrl: 'app/heroes.component.html', // Das Template für diese Komponente

    directives: [HeroDetailComponent] // Angular die Komponente "HeroDetailComponent" bekannt machen
})

export class HeroesComponent implements OnInit { // OnInit Lebenszyklus Klasse. Damit ruf Angular diese Klasse auf wenn die Zeit dafür gekommen ist. Bei OnInit wenn die Komponente initialisiert wird.
    heroes: Hero[];

    selectedHero: Hero;

    constructor( // Das Routing und die Services hinzufügen
        private _router: Router,
        private _heroService: HeroService) { }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }

    gotoDetail() {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
}
