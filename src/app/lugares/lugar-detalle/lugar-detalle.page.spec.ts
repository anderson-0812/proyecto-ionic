import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LugarDetallePage } from './lugar-detalle.page';

describe('LugarDetallePage', () => {
  let component: LugarDetallePage;
  let fixture: ComponentFixture<LugarDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LugarDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LugarDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
