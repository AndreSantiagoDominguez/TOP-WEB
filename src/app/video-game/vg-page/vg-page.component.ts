import { Component } from '@angular/core';
import { VgService } from '../service/vg.service';
import { VideoGame } from '../video-game';

@Component({
  selector: 'app-vg-page',
  templateUrl: './vg-page.component.html',
  styleUrls: ['./vg-page.component.css'],
})
export class VgPageComponent {
  videoGames: VideoGame[] = [];
  selectedGame: VideoGame | null = null;

  constructor(private vgService: VgService) {
    this.loadVideoGames();
  }

  loadVideoGames() {
    this.videoGames = this.vgService.getVideoGames();
  }

  editGame(game: VideoGame) {
    this.selectedGame = game;
  }

  deleteGame(id: number) {
    this.vgService.deleteVideoGame(id);
    this.loadVideoGames(); 
  }

  onGameSaved() {
    this.loadVideoGames();
    this.selectedGame = null; 
  }
}
