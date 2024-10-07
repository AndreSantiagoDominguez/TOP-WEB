import { Component, Input, Output, EventEmitter } from '@angular/core';
import { VideoGame } from '../../video-game';

@Component({
  selector: 'app-vg-card-categoria',
  templateUrl: './vg-card-categoria.component.html',
  styleUrls: ['./vg-card-categoria.component.css'],
})
export class VgCardCategoriaComponent {
  @Input() videoGame!: VideoGame; 
  @Output() editGame = new EventEmitter<VideoGame>(); 
  @Output() deleteGame = new EventEmitter<number>();

  onEdit() {
    this.editGame.emit(this.videoGame); 
  }

  onDelete() {
    this.deleteGame.emit(this.videoGame.id); 
  }
}
