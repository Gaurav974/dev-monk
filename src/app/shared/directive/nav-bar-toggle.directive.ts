import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavBarToggle]'
})
export class NavBarToggleDirective {
  constructor() {}
  ngOnInit(): void {}

  @HostListener('click', ['$event']) onNavBarToggle(e: HTMLAnchorElement) {
    const barToggle = e.target as unknown as HTMLButtonElement;
    barToggle.nextElementSibling?.classList.toggle('show');
  }
}
