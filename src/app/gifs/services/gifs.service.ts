import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponse, GifData } from '../interfaces/gifs.interfaces';

@Injectable({ providedIn: 'root' })
export class GifsService {
  public gifList: GifData[] = [];
  private readonly MAX_HISTORY_LENGTH = 12;
  private _tagsHistory: string[] = [];
  private apiKey: string = 'dmvS1dm5W1hItHuc2202bXa3bBGVZXeu';
  private apiUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {}

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase().trim();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, this.MAX_HISTORY_LENGTH);
  }

  searchTag(tag: string): void {
    if (!tag.length) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', this.MAX_HISTORY_LENGTH.toString())
      .set('q', tag);

    this.http
      .get<SearchResponse>(`${this.apiUrl}/search?`, { params })
      .subscribe((response) => {
        this.gifList = response.data;
      });
  }
}
