import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '12345678910',
      name: 'Item 1',
      description: 'Best item 1',
      qty: 100,
    },
    {
      id: '12345678910',
      name: 'Item 2',
      description: 'Best item 2',
      qty: 50,
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }
}
