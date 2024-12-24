import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { GifData } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-home-page',
  standalone: false,

  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  constructor(private gifsService: GifsService) {}

  get gifs(): GifData[] {
    return this.gifsService.gifList;
  }
}
