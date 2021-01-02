import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[mwFavorite]'
})
export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite;

  // @Input binding can be added to setter funcion with same name as directive selector 
  @Input() set mwFavorite(value) {
    this.isFavorite = value;
  }
}
