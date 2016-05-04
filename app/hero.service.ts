/*
 *
 *  Siehe app.compponent.ts für fehlende Kommentare
 *  02.05.2016
 *  Markus Streicher
 *
 * */

import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';
import {Hero} from "./hero";

@Injectable()
export class HeroService {

    getHeroes() { // Daten holen
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly() { // Simulation wenn Daten langsam laden
        return new Promise<Hero[]>(resolve =>
            setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
        );
    }

    getHero(id: number) { // ID des Datensatzes holen
        return Promise.resolve(HEROES).then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }

}
