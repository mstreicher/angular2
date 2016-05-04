import { Component } from 'angular2/core'; // Angular importieren
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router'; // Das Routing erst nach dem Angular Import
import { HeroService } from './hero.service'; // Services die gebraucht werden importieren
import {HeroesComponent} from "./heroes.component"; // Komponenten die gebraucht werden importieren
import {DashboardComponent} from "./dashboard.component"; // ""
import {HeroDetailComponent} from "./hero-detail.component"; // ""

@Component({
  selector: 'my-app', //Selektor der Komponente als HTML-Tag
  template: ` <!-- Inline HTML in der Komponente --> 
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'], // Eigener Style für die Komponente

  directives: [ROUTER_DIRECTIVES], // Komponenten bekannt machen
  providers: [ // Services bekannt machen
    ROUTER_PROVIDERS,
    HeroService
  ]

})

@RouteConfig([ // Routing Konfiguration hinzufügen
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  }
])

export class AppComponent {
  title = 'Angular 2 Routing';
}

