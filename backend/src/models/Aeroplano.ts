import { Motor } from "./composicion/Motor";
import { Ala } from "./composicion/Ala";

import { Piloto } from "./agregacion/Piloto";
import { Aeropuerto } from "./agregacion/Aeropuerto";
import { CompaniaAerea } from "./agregacion/CompaniaAerea";

export class Aeroplano {
    constructor(
        public id: number,
        public modelo: string,

        public motor: Motor,
        public ala: Ala,

        public piloto: Piloto,
        public aeropuerto: Aeropuerto,
        public compania: CompaniaAerea
    ) {}
}