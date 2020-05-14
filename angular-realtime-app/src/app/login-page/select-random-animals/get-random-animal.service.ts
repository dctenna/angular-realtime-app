import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GenerateRandomAnimalsService {
  getRandomList(list: string[]) {
    const iterator = this.getRandomListIterator(list);
    const randomAnimalList = [];

    while (!iterator.next().done) {
      const randomAnimal = iterator.next().value;
      randomAnimalList.push(randomAnimal);
    }

    if (!randomAnimalList.length) {
      const randomNumber = Math.floor(Math.random() * list.length);
      randomAnimalList.push(list[randomNumber]);
    }

    return randomAnimalList;
  }

  private *getRandomListIterator(list: string[]) {
    while (true) {
      const enoughAnimals = Math.random() > 0.8;
      const randomNumber = Math.floor(Math.random() * list.length);

      if (enoughAnimals) {
        return list[randomNumber];
      }

      yield list[randomNumber];
    }
  }
}
