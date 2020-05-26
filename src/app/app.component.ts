import { Component, ViewChild, ViewContainerRef, TemplateRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  condition: string = null;

  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  @ViewChild(TemplateRef) template: TemplateRef<any>;

  ngOnInit(): void {
    setTimeout(() => {
      this.condition = 'Resolved!!';
    }, 3000);
  }

  ngAfterViewInit(): void {
    this.container.createEmbeddedView(this.template);
  }
}
