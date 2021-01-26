import { Component, OnInit } from '@angular/core';
import { MediaItemService } from './media-item.service';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {
  mediaItems;

  constructor(private mediaItemService: MediaItemService) { }

  ngOnInit() {
    // get returns observable so need to subscribe to get the data
    this.mediaItemService.get()
      .subscribe((mediaItems => {
        this.mediaItems = mediaItems;
      }));
    // subscribe takes in 3 function callbacks
    // - next, error, complete based on event types
  }

  onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem);
  }
}
