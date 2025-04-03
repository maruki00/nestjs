
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SubjectService } from '../services/subject.service';
import { CreateSubjectDto } from '../dtos/create-subject.dto';
import { UpdateSubjectDto } from '../dtos/update-subject.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Subject } from '../entities/subject.entity';

@ApiTags('subjects') 
@Controller('subjects')
export class SubjectController {
  constructor(private readonly subjectsService: SubjectService) {}

  @Post()
  @ApiCreatedResponse({ description: 'The record has been successfully created.', type: Subject })
  create(@Body() createSubjectDto: CreateSubjectDto) {
    return this.subjectsService.create(createSubjectDto);
  }

  @Get()
  @ApiOkResponse({ description: 'List of all subjects', type: [Subject] })
  findAll() {
    return this.subjectsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'The found record', type: Subject})
  findOne(@Param('id') id: string) {
    return this.subjectsService.findOne(+id);
  }

  @Put(':id')
  @ApiOkResponse({ description: 'The record has been successfully updated.', type: Subject })
  update(@Param('id') id: string, @Body() updateSubjectDto: UpdateSubjectDto) {
    return this.subjectsService.update(+id, updateSubjectDto);
  }

  @Delete(':id')
  @ApiOkResponse({description: 'The record has been successfully deleted.'})
  remove(@Param('id') id: string) {
    return this.subjectsService.remove(+id);
  }
}