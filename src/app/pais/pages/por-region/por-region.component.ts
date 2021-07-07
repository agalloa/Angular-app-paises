import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right:5px;
    }
  `]
})
export class PorRegionComponent {

  paises  : Country[] = [];


  regiones: string[] = ['africa', 'americas', 'asia', 'europe','oceania'];

  regionActiva: string = '';

  constructor( private paisService: PaisService) { }

  getClaseCss( region: string){

    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }


  activarRegion( region: string){
    this.regionActiva = region;

    this.paisService.buscarRegion( region ).subscribe( paises =>{
      console.log(paises);
      this.paises = paises;

    })
  }

}
