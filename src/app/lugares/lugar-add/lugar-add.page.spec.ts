import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LugarAddPage } from './lugar-add.page';

describe('LugarAddPage', () => {
  let component: LugarAddPage;
  let fixture: ComponentFixture<LugarAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LugarAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LugarAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
