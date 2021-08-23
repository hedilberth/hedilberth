import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  nombre : string = "Hedilberth"
  direcciones : Direccion[] = [{ Calle : "Santa Elena", Numero : 1380, Ciudad : "Santiago", Pais : "Chile", Comuna : "Santiago "},
                           { Calle : "Santa Domingo", Numero : 1243, Ciudad : "Santiago", Pais : "Chile", Comuna : "Santiago "}];
}

interface Direccion {
  Calle : string,
  Numero? : number,
  Ciudad: string,
  Pais : string,
  Comuna : string
}