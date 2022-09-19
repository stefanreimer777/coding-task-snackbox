// Decorators
import { Controller, Get, Post, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateSnackDto } from './dtos/create.snack.dto';
import { SnacksService } from './snacks.service';

@Controller('snacks')
export class SnacksController {

  constructor(public snacksService: SnacksService ) {}

    @Get()
    listSnacks() {
        return this.snacksService.findAll();
    }

    @Post()
    createSnack(@Body() body: CreateSnackDto) {
       return this.snacksService.create(body.brand)
       console.log()
    }

    @Get('/:id')
    async getSnack(@Param('id') id: string) {
       const snack =  await this.snacksService.findOne(id)

        if ( !snack ) {
            throw new NotFoundException('snack not found')
        }

        return snack;
    }

    @Delete('/:id')
    removeSnack(@Param('id') id: string) {
       return this.snacksService.remove((id))
    }




}
