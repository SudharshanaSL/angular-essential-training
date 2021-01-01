import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem;
  // output also allows custom naming of output properties, but it is a bad practice
  @Output() delete= new EventEmitter();

  onDelete() {
    console.log('deleted');
    this.delete.emit(this.mediaItem);
  }
}
