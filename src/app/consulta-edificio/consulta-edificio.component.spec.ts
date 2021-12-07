import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaEdificioComponent } from './consulta-edificio.component';

describe('ConsultaEdificioComponent', () => {
  let component: ConsultaEdificioComponent;
  let fixture: ComponentFixture<ConsultaEdificioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaEdificioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaEdificioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
