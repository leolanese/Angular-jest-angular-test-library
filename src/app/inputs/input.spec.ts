// title.component.spec.ts
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TitleComponent } from './input.component';

describe('TitleComponent', () => { // 1
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(async(() => { // 2
    TestBed.configureTestingModule({
      declarations: [ TitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => { // 3
    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { // 4
    expect(component).toBeTruthy();
  });
});