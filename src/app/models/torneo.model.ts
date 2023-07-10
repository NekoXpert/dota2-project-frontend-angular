
import { Jugador } from "./jugador.model";

export class Torneo {
    id!: number;
    name!: string;
    premio!: number;

    jugadores!: Jugador[];
}
