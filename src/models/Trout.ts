import { Fish } from './AnimalCategories';

class Trout extends Fish {
  constructor(name: string, yearOfBirth: number, specialNeeds: string, enclosureId: number) {
    super('🐟', name, yearOfBirth, 'Rivers', specialNeeds, enclosureId);
  }
}

export default Trout;
