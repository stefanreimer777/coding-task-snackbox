import { Injectable } from '@nestjs/common';
import { SnacksRepository } from './snacks.repository';

@Injectable()
export class SnacksService {
    constructor(public snacksRepo: SnacksRepository) {
        
    }

    findOne(id: string) {
        return this.snacksRepo.findOne(id);
    }

    findAll() {
        return this.snacksRepo.findAll();
    }

    create(content: string) {
        return this.snacksRepo.create(content);
    }

    async remove(id: string) {
        const snack = await this.findOne(id);
        if(!snack) {
            throw new Error('snack not found')
        }
        return this.snacksRepo.remove(snack)
    }
}