import { Mammal } from './AnimalCategories';

class Elephant extends Mammal {
  constructor(name: string, yearOfBirth: number, specialNeeds: string, enclosureId: number) {
    super('🐘', name, yearOfBirth, 'Africa', specialNeeds, enclosureId);
  }
}

export default Elephant;
