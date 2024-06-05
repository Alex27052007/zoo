import './style.css';
import Animal from './models/Animal';
import Dolphin from './models/Dolphin';
import Elephant from './models/Elephant';
import Enclosure from './models/Enclosure';
import Lion from './models/Lion';
import Parrot from './models/Parrot';
import Snake from './models/Snake';
import Trout from './models/Trout';
import EnclosureType from './models/EnclosureType';

let allAnimals: Animal[] = [];
let allEnclosures: Enclosure[] = [];

document.getElementById('animalForm')?.addEventListener('submit', addAnimal);

function displayEnclosures() {
  const enclosuresDiv = document.getElementById('enclosures');

  if (!enclosuresDiv) {
    return;
  }
  enclosuresDiv.innerHTML = '';

  allEnclosures.forEach((enclosure: Enclosure) => {
    const enclosureDiv = document.createElement('div');
    enclosureDiv.className = 'enclosure';
    enclosureDiv.innerHTML = `<h3>${enclosure.name} (Built in ${enclosure.builtInYear})</h3>`;

    const animalsInEnclosure = allAnimals.filter((animal) => animal.enclosureId === enclosure.id);
    animalsInEnclosure.forEach((animal) => {
      const animalDiv = document.createElement('div');

      animalDiv.innerHTML = `${animal.emoji} ${animal.name}, Age: ${animal.age}, ${animal.specialNeeds}`;
      enclosureDiv.appendChild(animalDiv);
    });

    enclosuresDiv.appendChild(enclosureDiv);
  });
}

function addAnimal(event: Event) {
  event.preventDefault();

  const animalType = (document.getElementById('animalType') as HTMLSelectElement).value;
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const yearOfBirth = parseInt((document.getElementById('yearOfBirth') as HTMLInputElement).value);
  const specialNeeds = (document.getElementById('specialNeeds') as HTMLInputElement).value;
  const enclosureId = parseInt((document.getElementById('enclosureId') as HTMLSelectElement).value);

  let newAnimal: Animal;

  switch (animalType) {
    case 'Lion':
      newAnimal = new Lion(name, yearOfBirth, specialNeeds, enclosureId);
      break;
    case 'Elephant':
      newAnimal = new Elephant(name, yearOfBirth, specialNeeds, enclosureId);
      break;
    case 'Dolphin':
      newAnimal = new Dolphin(name, yearOfBirth, specialNeeds, enclosureId);
      break;
    case 'Snake':
      newAnimal = new Snake(name, yearOfBirth, specialNeeds, enclosureId);
      break;
    case 'Parrot':
      newAnimal = new Parrot(name, yearOfBirth, specialNeeds, enclosureId);
      break;
    case 'Trout':
      newAnimal = new Trout(name, yearOfBirth, specialNeeds, enclosureId);
      break;
    default:
      alert('Unknown animal type');
      return;
  }

  allAnimals.push(newAnimal);
  displayEnclosures();
}

function initializeEnclosures(): void {
  allEnclosures = [
    new Enclosure(EnclosureType.SavannahHabitat, 'Savannah Habitat', 1995),
    new Enclosure(EnclosureType.JungleHabitat, 'Jungle Habitat', 2000),
    new Enclosure(EnclosureType.AquaticHabitat, 'Aquatic Habitat', 2010),
    new Enclosure(EnclosureType.ReptileHouse, 'Reptile House', 2005)
  ];
}

function initializeAnimals(): void {
  allAnimals = [
    new Lion('Simba', 2010, 'Requires a large space', EnclosureType.SavannahHabitat),
    new Elephant('Dumbo', 2008, 'Sensitive to cold', EnclosureType.SavannahHabitat),
    new Dolphin('Flipper', 2015, 'Needs clean water', EnclosureType.AquaticHabitat),
    new Snake('Kaa', 2012, 'Requires heated enclosure', EnclosureType.ReptileHouse),
    new Parrot('Polly', 2013, 'Talkative', EnclosureType.JungleHabitat),
    new Trout('Bubbles', 2016, 'Needs fresh water', EnclosureType.AquaticHabitat)
  ];
}

initializeEnclosures();
initializeAnimals();
displayEnclosures();
