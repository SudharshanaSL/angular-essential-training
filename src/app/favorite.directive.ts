import { Directive, HostBinding } from "@angular/core";

@Directive({
    // recommended to use domain prefix on selectors
    // even if angular prefixes by ng
    selector: '[mwFavorite]'
})
export class FavoriteDirective {
    // binds host element property to a directive property
    @HostBinding('class.is-favorite') isFavorite = true;
}