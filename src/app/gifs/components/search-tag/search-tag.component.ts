import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-tag',
  standalone: false,
  template: `
    <div class="history-container">
      <button
        *ngFor="let tags of tag"
        class="codepen-button"
        (click)="searchTag(tags)"
      >
        <span>{{ tags | titlecase }}</span>
      </button>
    </div>
  `,
  styleUrl: './search-tag.component.css',
})
export class SearchTagComponent {
  constructor(private gifsService: GifsService) {}

  get tag() {
    return this.gifsService.tagsHistory;
  }

  searchTag(tag: string) {
    this.gifsService.searchTag(tag);
  }
}
