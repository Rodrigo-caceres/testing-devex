import { DOCUMENT } from '@angular/common';
import { Component, Renderer2, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { I18n, IconService } from 'carbon-components-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  theme = 'white';

  private document = inject(DOCUMENT);
  private renderer = inject(Renderer2);

  ngOnInit() {
    // Apply default class to body
    this.iconService.registerAll([I18n]);
    this.renderer.addClass(this.document.body, this.theme);
  }

  onThemeChange({ value }: { value: string }) {
    // Remove current assigned class then add updated class
    this.renderer.removeClass(this.document.body, this.theme);
    this.theme = value;
    this.renderer.addClass(this.document.body, this.theme);
  }

  navigateToBuilder() {
    window.open('https://builder.carbondesignsystem.com/', '_blank');
  }
  title = 'team-menu';
  /*constructor(
    private router: Router,
    private aRoute: ActivatedRoute
    ){
    }
  navegacion(ruta:string) {
    this.router
    .navigate([ruta], {
        relativeTo: this.aRoute,
    })
  }*/
  constructor(protected iconService: IconService) {}
}
