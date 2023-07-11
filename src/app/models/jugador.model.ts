/* Author: Felipe reyes  => { Nekosor } Github*/
import { Equipo } from "./equipo.model";

import { Torneo } from "./torneo.model";

export enum Medalla {
    HERALDO,
    GUARDIAN,
    CRUSADO,
    ARCHONTE,
    LEYENDA,
    ANCESTRAL,
    DIVINO,
    IMMORTAL,
    UNRANKED
}

export enum Pais {
    Perú,
    Chile,
    Argentina,
    Bolivia,
    Venezuela,
    USA,
    Canadá,
    México,
    Ucrania,
    Rusia,
    Estonia,
    Alemania,
    Francia,
    Brasil,
    Filipinas,
    Malasia,
    Singapur,
    China,
    Indonesia,
    Tailandia,
    Korea,
    EmiratosArabes,
    Jordania,
    Polonia,
    Suecia
}

export class Jugador {
    id!: number;
    firstName!: string;
    dniDotero!: number;
    medallaRank!: Medalla;
    mmr!: number;
    edad!: number;
    nacionalidad!: Pais;
    telefono!: string;
    correo!: string;
    equipo!: Equipo;
    torneo!: Torneo;
 
}
