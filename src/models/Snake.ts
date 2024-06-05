import { Reptile } from './AnimalCategories';

class Snake extends Reptile {
  constructor(name: string, yearOfBirth: number, specialNeeds: string, enclosureId: number) {
    super('🐍', name, yearOfBirth, 'Asia', specialNeeds, enclosureId);
  }
}

export default Snake;
