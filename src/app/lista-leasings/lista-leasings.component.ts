import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-leasings',
  templateUrl: './lista-leasings.component.html',
  styleUrls: ['./lista-leasings.component.scss']
})
export class ListaLeasingsComponent implements OnInit {
  lstLeasing : string[];
  constructor() {
    this.lstLeasing = ['L201', 'L205', 'L305'];
   }

  ngOnInit() {
  }

}
