import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PlanoService } from './plano.service';

@Controller('planos')
export class PlanoController {
  constructor(private readonly planoService: PlanoService) {}

  @Get()
    findAll() {
      return this.planoService.findAll();
    }

  @Get(':id')    
      findOne(@Param('id', ParseIntPipe) id: number) {
      return this.planoService.findOne(id);
    }
}
