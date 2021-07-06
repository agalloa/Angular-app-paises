import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PorCapitalComponent } from "./pais/pages/por-capital/por-capital.component";
import { PorPaisComponent } from "./pais/pages/por-pais/por-pais.component";
import { PorRegionComponent } from "./pais/pages/por-region/por-region.component";
import { VerPaisComponent } from "./pais/pages/ver-pais/ver-pais.component";


const routes: Routes = [
  {
    //ruta principal
    path:'',
    component: PorPaisComponent,
    pathMatch: 'full',
  },
  //ruta para mostrar la region
  {
    path: 'region',
    component: PorRegionComponent
  },
  //ruta para mostrar la capital
  {
    path: 'capital',
    component: PorCapitalComponent
  },
  {
    path: 'pais/:id',
    component: VerPaisComponent
  },
  //cuando la ruta no existe
  {
    path:'**',
    redirectTo:''
  }
]


@NgModule({
  imports: [
      RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{

}
