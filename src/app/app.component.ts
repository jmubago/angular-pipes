import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public nombre: string = 'Jose';
  public nombre2: string = 'tExto SIn NinGUn sentiDO';
  public numeros: number[] = [1,2,3,4,5,6,7,8,9,10];
  public pi: number = Math.PI;
  public a:number = 0.2345;
  public dinero:number = 1152.1567;
  public heroe: any = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: '19'
    }
  }

  public promesa: any = new Promise((resolve,reject) => {
    setTimeout(() => resolve('los datos han llegado'),3500);
  })

  public fecha: Date = new Date();

  public video = 'MHTXEACrjFM';

  public buttonText: string = 'Desactivado'
  public activar: boolean = false;

  public changeTexto(): void {  
    if(this.buttonText === 'Activado'){
      this.buttonText = 'Desactivado';
      this.activar = false;
    }else{
      this.buttonText = 'Activado';
      this.activar = true;
    }
  }
}
