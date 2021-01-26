import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MediaItemService {
  constructor(private http: HttpClient) { }

  get(medium) {
    const getOptions = {
      params: { medium }
    };
    return this.http.get<MediaItemsResponse>('mediaitems', getOptions)
      .pipe(
        map((response: MediaItemsResponse) => {
          return response.mediaItems;
        })
      );
  }

  add(mediaItem) {
    // underlying http module code will detect an object is passed and automatically set the application/json header
    return this.http.post('mediaitems', mediaItem);
  }

  delete(mediaItem) {
    // back ticks offer string interpolation abilities
    return this.http.delete(`mediaitems/${mediaItem.id}`);
  }
}

interface MediaItemsResponse {
  mediaItems: MediaItem[];
}

export interface MediaItem {
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}
