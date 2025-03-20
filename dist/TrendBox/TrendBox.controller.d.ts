import { TrendBoxService } from './TrendBox.service';
import { CreateTrendBoxDto } from './dto/create-TrendBox.dto';
import { UpdateTrendBoxDto } from './dto/update-TrendBox';
export declare class TrendBoxController {
    private readonly TrendBoxService;
    constructor(TrendBoxService: TrendBoxService);
    create(createTrendBoxDto: CreateTrendBoxDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTrendBoxDto: UpdateTrendBoxDto): string;
    remove(id: string): string;
}
