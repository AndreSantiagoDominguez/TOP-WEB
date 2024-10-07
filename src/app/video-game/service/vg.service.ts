import { Injectable } from '@angular/core';
import { VideoGame } from '../video-game';

@Injectable({
  providedIn: 'root',
})
export class VgService {
  private storageKey = 'videoGames';

  getVideoGames(): VideoGame[] {
    const games = localStorage.getItem(this.storageKey);
    return games ? JSON.parse(games) : [];
  }

  createVideoGame(newGame: VideoGame) {
    const games = this.getVideoGames();
    newGame.id = Date.now(); 
    games.push(newGame);
    localStorage.setItem(this.storageKey, JSON.stringify(games));
  }

  updateVideoGame(updatedGame: VideoGame) {
    const games = this.getVideoGames();
    const index = games.findIndex((game) => game.id === updatedGame.id);
    if (index !== -1) {
      games[index] = updatedGame;
      localStorage.setItem(this.storageKey, JSON.stringify(games));
    }
  }

  deleteVideoGame(id: number) {
    const games = this.getVideoGames();
    const filteredGames = games.filter((game) => game.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(filteredGames));
  }
}

