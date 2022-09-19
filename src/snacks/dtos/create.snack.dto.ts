// DataTransferObject
import { IsString, IsNumber } from 'class-validator';

export class CreateSnackDto {
    @IsString()
    brand: string;

    @IsNumber()
    price: number
}