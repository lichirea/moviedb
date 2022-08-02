import { AdDirective } from './ad.directive';
import {
  Component,
  ComponentFactory, ComponentRef, Directive,
  EmbeddedViewRef,
  EnvironmentInjector,
  Injector,
  NgModuleRef,
  TemplateRef,
  Type,
  ViewContainerRef, ViewRef
} from "@angular/core";


describe('AdDirective', () => {
  it('should create an instance', () => {
    const directive = new AdDirective(new TestViewContainerRef());
    expect(directive).toBeTruthy();
  });

  it('should allow access to the ViewContainerRef', () => {
    const directive = new AdDirective(new TestViewContainerRef());
    expect(directive.viewContainerRef).toBeTruthy();
    expect(directive.viewContainerRef).toBeInstanceOf(ViewContainerRef);
  });

});


export class TestViewContainerRef extends ViewContainerRef {

  createEmbeddedView<C>(templateRef: TemplateRef<C>, context?: C | undefined, options?: { index?: number | undefined; injector?: Injector | undefined; } | undefined): EmbeddedViewRef<C>;

  createEmbeddedView<C>(templateRef: TemplateRef<C>, context?: C | undefined, index?: number | undefined): EmbeddedViewRef<C>;

  createEmbeddedView<C>(templateRef: unknown, context?: unknown, index?: unknown): import("@angular/core").EmbeddedViewRef<C> | import("@angular/core").EmbeddedViewRef<C> {
    throw new Error('Method not implemented.');
  }

  createComponent<C>(componentType: Type<C>, options?: { index?: number | undefined; injector?: Injector | undefined; ngModuleRef?: NgModuleRef<unknown> | undefined; environmentInjector?: EnvironmentInjector | NgModuleRef<unknown> | undefined; projectableNodes?: Node[][] | undefined; } | undefined): ComponentRef<C>;

  createComponent<C>(componentFactory: ComponentFactory<C>, index?: number | undefined, injector?: Injector | undefined, projectableNodes?: any[][] | undefined, environmentInjector?: EnvironmentInjector | NgModuleRef<any> | undefined): ComponentRef<C>;

  createComponent<C>(componentFactory: unknown, index?: unknown, injector?: unknown, projectableNodes?: unknown, environmentInjector?: unknown): import("@angular/core").ComponentRef<C> | import("@angular/core").ComponentRef<C> {
    throw new Error('Method not implemented.');
  }

  get element(): import("@angular/core").ElementRef<any> {
    throw new Error("Method not implemented.");
  }
  get injector(): import("@angular/core").Injector {
    throw new Error("Method not implemented.");
  }
  get parentInjector(): import("@angular/core").Injector {
    throw new Error("Method not implemented.");
  }
  clear(): void {
    throw new Error("Method not implemented.");
  }
  get(index: number): import("@angular/core").ViewRef {
    throw new Error("Method not implemented.");
  }
  get length(): number {
    throw new Error("Method not implemented.");
  }


  insert(viewRef: import("@angular/core").ViewRef, index?: number): import("@angular/core").ViewRef {
    throw new Error("Method not implemented.");
  }
  move(viewRef: import("@angular/core").ViewRef, currentIndex: number): import("@angular/core").ViewRef {
    throw new Error("Method not implemented.");
  }
  indexOf(viewRef: import("@angular/core").ViewRef): number {
    throw new Error("Method not implemented.");
  }
  remove(index?: number): void {
    throw new Error("Method not implemented.");
  }
  detach(index?: number): import("@angular/core").ViewRef {
    throw new Error("Method not implemented.");
  }

}
