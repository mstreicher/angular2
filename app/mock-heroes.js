/*
 *
 *  Siehe app.compponent.ts für fehlende Kommentare
 *  02.05.2016
 *  Markus Streicher
 *
 *  Angular Guide
 *  https://angular.io/docs/ts/latest/guide/architecture.html
 *
 * */
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HEROES;
    return {
        setters:[],
        execute: function() {
            // Definieren der Daten in einem Array
            exports_1("HEROES", HEROES = [
                { "id": 11, "name": "Mr. Nice" },
                { "id": 12, "name": "Narco" },
                { "id": 13, "name": "Bombasto" },
                { "id": 14, "name": "Celeritas" },
                { "id": 15, "name": "Magneta" },
                { "id": 16, "name": "RubberMan" },
                { "id": 17, "name": "Dynama" },
                { "id": 18, "name": "Dr IQ" },
                { "id": 19, "name": "Magma" },
                { "id": 20, "name": "Tornado" }
            ]);
        }
    }
});
//# sourceMappingURL=mock-heroes.js.map