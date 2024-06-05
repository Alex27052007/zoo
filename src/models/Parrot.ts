import { Bird } from './AnimalCategories';

class Parrot extends Bird {
  constructor(name: string, yearOfBirth: number, specialNeeds: string, enclosureId: number) {
    super('🦜', name, yearOfBirth, 'South America', specialNeeds, enclosureId);
  }
}
export default Parrot;
