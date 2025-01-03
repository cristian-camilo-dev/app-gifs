import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { SearchTagComponent } from './components/search-tag/search-tag.component';

@NgModule({
  declarations: [HomePageComponent, SearchBoxComponent, CardListComponent, SearchTagComponent],
  imports: [CommonModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
