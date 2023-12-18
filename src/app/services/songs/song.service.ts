import { Injectable } from '@angular/core';
import { songArray1, songArray2 } from 'src/app/data';
import { Isong } from 'src/app/interfaces/isong';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  songs1: string[] = songArray1;
  songs2: Isong[] = songArray2;

  constructor() { }

  getAllSongs1():string[] {
    return this.songs1;
  }
  
  getAllSongs2():Isong[] {
    return this.songs2;
  }
}
