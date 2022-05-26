import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { SpinnerComponent } from './spinner/spinner.component';

@Directive({
  selector: '[appHighlight]'
})
export class AppSpinnerDirective  {

  constructor(private el: ElementRef) { }

  @Input() defaultColor: string;

  @Input('appHighlight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    console.log('height---' + this.el.nativeElement.offsetHeight);
    this.el.nativeElement.style.backgroundColor = color;
  }
}
