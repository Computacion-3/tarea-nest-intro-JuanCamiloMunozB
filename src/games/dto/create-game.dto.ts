export class CreateGameDto {
  name: string;
  description: string;
  min_players: number;
  max_players: number;
  category: string;
  createdById: number;
}
