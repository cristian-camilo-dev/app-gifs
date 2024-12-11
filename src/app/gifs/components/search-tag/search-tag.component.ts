import { Component } from '@angular/core';

@Component({
  selector: 'app-search-tag',
  standalone: false,
  template: `
    <a class="codepen-button"
      ><span>{{ tag }}</span></a
    >
  `,
  styleUrl: './search-tag.component.css',
})
export class SearchTagComponent {
  tag = 'angular';
  constructor() {}
}
