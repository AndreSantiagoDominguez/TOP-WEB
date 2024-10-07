import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { VideoGame } from '../../video-game';
import { VgService } from '../../service/vg.service';

@Component({
  selector: 'app-vg-form',
  templateUrl: './vgform.component.html',
  styleUrls: ['./vgform.component.css'],
})
export class VgFormComponent implements OnChanges {
  @Input() videoGame: VideoGame | null = null; 
  @Output() gameSaved = new EventEmitter<void>(); 

  name: string = '';
  gender: string = '';
  platform: string = '';
  releaseYear: string = '';
  developer: string = '';

  isEditMode: boolean = false; 

  constructor(private vgService: VgService) {}

  ngOnChanges() {
    if (this.videoGame) {
      this.isEditMode = true; 
      this.name = this.videoGame.name || '';
      this.gender = this.videoGame.gender || '';
      this.platform = this.videoGame.plata_form || '';
      this.releaseYear = this.videoGame.release_year || '';
      this.developer = this.videoGame.developer || '';
    } else {
      this.isEditMode = false; 
      this.clearForm();
    }
  }

  onSubmit() {
    if (this.isEditMode && this.videoGame) {
      const updatedGame: VideoGame = {
        ...this.videoGame,
        name: this.name,
        gender: this.gender,
        plata_form: this.platform,
        release_year: this.releaseYear,
        developer: this.developer,
      };
      this.vgService.updateVideoGame(updatedGame);
    } else {
      const newGame: VideoGame = {
        id: Date.now(),
        name: this.name,
        gender: this.gender,
        plata_form: this.platform,
        release_year: this.releaseYear,
        developer: this.developer,
      };
      this.vgService.createVideoGame(newGame);
    }

    this.gameSaved.emit(); 
    this.clearForm();      
  }

  clearForm() {
    this.name = '';
    this.gender = '';
    this.platform = '';
    this.releaseYear = '';
    this.developer = '';
  }
}
