import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { SpinnerComponent } from './spinner/spinner.component';

@Directive({
  selector: '[appSpinner]'
})
export class AppSpinnerDirective {

  loadingFactory: ComponentFactory<SpinnerComponent>;
  loadingComponent!: ComponentRef<SpinnerComponent>;
  
  @Input()
  set message(message: string) {
    this.message = message;
  }

  @Input()
  set appSpinner(loading: boolean) {
    this.vcRef.clear();

    if (loading) {
      // create and embed an instance of the loading component
      this.loadingComponent = this.vcRef.createComponent(this.loadingFactory);
    }
    else {
      // embed the contents of the host template
      this.vcRef.createEmbeddedView(this.templateRef);
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) {
    // Create resolver for loading component
    this.loadingFactory = this.componentFactoryResolver.resolveComponentFactory(SpinnerComponent);
  }
}
