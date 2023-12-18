import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonGrid, IonRow, IonCol, IonItem, IonItemGroup, IonLabel, IonItemDivider } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { BookService } from '../services/books/book.service';
import { Ibook } from '../interfaces/ibook';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonGrid, IonRow, IonCol, IonItem,
    CommonModule, IonItemGroup, IonLabel, IonItemDivider, IonItemGroup],
})
export class Tab1Page {
  books: Ibook[] | undefined;

  constructor(private bookService: BookService) {
    this.books = this.bookService.getAllBooks();
  }

  trackBooks(index: number, bookObject: any) {
    return bookObject.id;
  }
}
