import { Mammal } from './AnimalCategories';

class Dolphin extends Mammal {
  constructor(name: string, yearOfBirth: number, specialNeeds: string, enclosureId: number) {
    super('🐬', name, yearOfBirth, 'Oceans', specialNeeds, enclosureId);
  }
}

export default Dolphin;
