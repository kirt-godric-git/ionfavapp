import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonReorder, ItemReorderEventDetail, IonReorderGroup, IonItemDivider, IonItemGroup, IonRow, IonCol, IonGrid, IonListHeader, IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { SongService } from '../services/songs/song.service';
import { CommonModule } from '@angular/common';
import { Isong } from '../interfaces/isong';
import { add, airplane, heart, musicalNotes, skull, snow, walk } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,
    CommonModule, IonList, IonItem, IonLabel, IonReorder, IonReorderGroup, IonItemDivider, IonItemGroup,
    IonGrid, IonRow, IonCol, IonListHeader, IonIcon]
})
export class Tab2Page {
  songs1: string[];
  songs2: Isong[] | undefined;

  constructor(private songService: SongService) {
    this.songs1 = this.songService.getAllSongs1();
    this.songs2 = this.songService.getAllSongs2();

    addIcons({heart, skull, walk, add, musicalNotes, snow, airplane})
  }

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }
}
