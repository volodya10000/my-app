import { Directive, TemplateRef, ViewContainerRef,Input} from '@angular/core';

@Directive({
  selector: '[appInfo]'
})
export class InfoDirective {                      //Структурна директива  де код можемо зробити самі.
  

  constructor(private templaRef: TemplateRef<any>,         
    private viewConteiner: ViewContainerRef) { }  
  
  @Input() set appInfo(condition: boolean)  {
    if (!condition) {
      this.viewConteiner.createEmbeddedView(this.templaRef)
    } else {
      this.viewConteiner.clear()
    }
  }

  
}
