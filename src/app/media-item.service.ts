import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MediaItemService {
  mediaItems = [];

  constructor(private http: HttpClient) { }

  get() {
    // since we do not want to return http response objects returned by backend
    // we need to pipe and map the response using arrow function
    // we also need to declare what kind of object we are returning to avoid error in editor
    return this.http.get<MediaItemResponse>('mediaitems')
      .pipe(map(response => {
        return response.mediaItems;
      }));
  }

  add(mediaItem) {
    this.mediaItems.push(mediaItem);
  }

  delete(mediaItem) {
    const index = this.mediaItems.indexOf(mediaItem);
    if (index >= 0) {
      this.mediaItems.splice(index, 1);
    }
  }
}

interface MediaItem {
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}

interface MediaItemResponse {
  mediaItems: MediaItem[];
}