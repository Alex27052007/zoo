import EnclosureType from './EnclosureType';

class Enclosure {
  constructor(public id: EnclosureType, public name: string, public builtInYear: number) {}
}

export default Enclosure;
