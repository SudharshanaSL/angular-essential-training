import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mwFavorite]'
})
export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true;
  @HostBinding('class.is-favorite-hovering') hovering = true;
  // directives can also be made to listen to host events
  // angular works with native events without "on" prefix
  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }

  @Input() set mwFavorite(value) {
    this.isFavorite = value;
  }
}
