import { Injectable } from '@angular/core';
import { Deal } from '../models/deal';
import { faker } from '@faker-js/faker';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private deals: Deal[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.deals.push({
        name: faker.company.companyName(),
        adress: faker.address.cityName(),
        price: parseInt(faker.finance.amount()),
        noi: faker.finance.amount(),
        rate: faker.finance.amount(5, 10, 0),
      });
    }
  }

  getDeals() {
    return this.deals;
  }
}
