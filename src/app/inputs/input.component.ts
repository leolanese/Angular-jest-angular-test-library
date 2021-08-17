import { Component, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'title',
  template: `
    <p>{{ message }}</p>
    <input #titleField type="text" />
    <button (click)="handleButtonClick(titleField.value)">Change Title</button>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class TitleComponent  {
  @Input() message: string|undefined; //1

  @Output() changeTitleEvent:EventEmitter<string> = new EventEmitter(); //2

  @ViewChild('titleField')
  titleField!: ElementRef;

  handleButtonClick(newTitle: string|undefined) {
    if(newTitle) {
      this.changeTitleEvent.emit(newTitle);
      this.titleField.nativeElement.value = '';
    }
  }
}