import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurbankComponent } from './cities/burbank/burbank.component';
import { ChicagoComponent } from './cities/chicago/chicago.component';
import { DallasComponent } from './cities/dallas/dallas.component';
import { SanJoseComponent } from './cities/san-jose/san-jose.component';
import { SeattleComponent} from './cities/seattle/seattle.component';
import { WashingtonComponent } from './cities/washington/washington.component';

const routes: Routes = [
  { path: 'seattle', component: SeattleComponent },
  { path: 'sanjose', component: SanJoseComponent },
  { path: 'burbank', component: BurbankComponent },
  { path: 'dallas', component: DallasComponent },
  { path: 'washington', component: WashingtonComponent },
  { path: 'chicago', component: ChicagoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
