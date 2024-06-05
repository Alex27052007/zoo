import { differenceInYears } from 'date-fns';

class Animal {
  get age(): number {
    return differenceInYears(new Date().getFullYear(), this.yearOfBirth);
  }
  constructor(
    public emoji: string,
    public name: string,
    public yearOfBirth: number,
    public continent: string,
    public specialNeeds: string,
    public enclosureId: number
  ) {}
}
export default Animal;
