import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { TopPageModel } from './top-page.model';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { ConfigService } from '@nestjs/config';

@Controller('top-page')
export class TopPageController {
    constructor(private readonly configService: ConfigService) { }

    @Post('create')
    async create(@Body() body: Omit<TopPageModel, '_id'>) {

    }

    @Get(':id')
    async get(@Param('id') id: string) {
        return this.configService.get('PORT')
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() body: TopPageModel) {

    }

    @Delete(':id')
    async delete(@Param('id') id: string) {

    }

    @HttpCode(200)
    @Post()
    async find(@Body() body: FindTopPageDto) {

    }
}
