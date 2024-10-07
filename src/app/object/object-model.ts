export interface ObjectModel {
   
        id: number; 
        name: string; 
        description: string; 
        rarity: string; // Rareza (común, raro, épico, legendario)
        value: number; // Valor en créditos para intercambiar
        videoGameId: number; // ID del videojuego al que pertenece
        idUser: number; // ID del usuario propietario
      
}
