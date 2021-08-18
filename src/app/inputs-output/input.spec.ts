import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitleComponent } from './input.component';

describe('Validate TitleComponent ', () => { // 1
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach((() => { // 2
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

  it('should correctly render the passed @Input value', () => {
    component.message = 'Enter a new title';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('p').textContent).toBe('Enter a new title');
  });

  it('should correctly @Output value of text input in component', () => {
    jest.spyOn(component.changeTitleEvent, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    fixture.nativeElement.querySelector('input').value = 'A new title';
    const inputText = fixture.nativeElement.querySelector('input').value;

    button.click();
    fixture.detectChanges();

    expect(component.changeTitleEvent.emit).toHaveBeenCalledWith(inputText);
  });
});