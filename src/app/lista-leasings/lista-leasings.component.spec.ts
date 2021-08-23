import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLeasingsComponent } from './lista-leasings.component';

describe('ListaLeasingsComponent', () => {
  let component: ListaLeasingsComponent;
  let fixture: ComponentFixture<ListaLeasingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaLeasingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLeasingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
