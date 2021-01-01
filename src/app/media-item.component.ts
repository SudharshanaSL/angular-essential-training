import { Component, Input } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {

  // by default property name is referred for input binding name while instantiating component
  @Input() mediaItem;
  // bad practice to have mismatching names
  @Input('mediaItemToWatch') toWatch;

  onDelete() {
    console.log('deleted');
  }
}
