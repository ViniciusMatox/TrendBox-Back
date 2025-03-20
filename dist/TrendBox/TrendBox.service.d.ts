import { CreateTrendBoxDto } from './dto/create-TrendBox.dto';
import { UpdateTrendBoxDto } from './dto/update-TrendBox';
export declare class TrendBoxService {
    create(createTrendBoxDto: CreateTrendBoxDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTrendBoxDto: UpdateTrendBoxDto): string;
    remove(id: number): string;
}
