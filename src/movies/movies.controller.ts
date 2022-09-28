import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }
  @Get('search')
  search(@Query('name') byName: string) {
    return `Searching movies with name ${byName}`;
  }
  @Get(':id')
  getMovie(@Param('id') movieId: string) {
    return `This will return a movie (id: ${movieId})`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete(':id')
  delete(@Param('id') movieId: string) {
    return `This will delete a movie (id: ${movieId})`;
  }

  @Patch(':id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}
