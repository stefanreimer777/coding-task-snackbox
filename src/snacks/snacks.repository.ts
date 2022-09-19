import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class SnacksRepository {
   async findOne(id: string) {
        const contents = await readFile('snacks.json', 'utf8');
        const snacks = JSON.parse(contents);

        return snacks[id];
    }

    async findAll() {
        const contents = await readFile('snacks.json', 'utf8');
        const snacks = JSON.parse(contents);

        return snacks
    }

    async create(content: string) {
        const contents = await readFile('snacks.json', 'utf8');
        const snacks = JSON.parse(contents);

        const id = Math.floor(Math.random() * 999)

        snacks[id] = { id, content };

        await writeFile('snacks.json', JSON.stringify(snacks));
    }

    async remove(id: number) {
        const contents = await readFile('snacks.json', 'utf8');
        const snacks = JSON.parse(contents);

        
    }
}