import { PetEvent } from './pet_event.model';
import { Pet } from './pet.model';

export interface Dashboard {
    
    mainPet: Pet;
    events: PetEvent[];
}