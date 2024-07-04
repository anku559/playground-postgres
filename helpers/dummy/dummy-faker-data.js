import { faker } from '@faker-js/faker';

export class DummyCustomers {
  #TABLE = 'movies.customers';
  #COLUMNS = ['first_name', 'last_name', 'email', 'age'];
  #count = 2;

  fakeData() {
    const output = Array.from({ length: this.#count }, () => [
      faker.person.firstName(),
      faker.person.lastName(),
      faker.internet.email(),
      faker.number.int({ min: 5, max: 95 }),
    ]);

    return output;
  }

  get TABLE() {
    return this.#TABLE;
  }

  get COLUMNS() {
    return this.#COLUMNS;
  }
}
