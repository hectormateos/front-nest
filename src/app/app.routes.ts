import {RouterModule, Routes} from '@angular/router';

import {CatsComponent} from './components/cats/cats.component';
import {DogsComponent} from './components/dogs/dogs.component';
import {MonkeysComponent} from './components/monkeys/monkeys.component';
import {HomeComponent} from './components/home/home.component';

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'cats', component: CatsComponent},
    {path: 'dogs', component: DogsComponent},
    {path: 'monkeys', component: MonkeysComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
