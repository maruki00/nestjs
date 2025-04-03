import { Injectable, NotFoundException } from '@nestjs/common';
import { Subject } from '../entities/subject.entity';
import { CreateSubjectDto } from '../dtos/create-subject.dto';
import { UpdateSubjectDto } from '../dtos/update-subject.dto';

@Injectable()
export class SubjectService {
  private subjects: Subject[] = [];
  private nextId = 1;

  create(createSubjectDto: CreateSubjectDto): Subject {
    const subject: Subject = {
      id: this.nextId++,
      ...createSubjectDto,
      status: 'open',
    };
    this.subjects.push(subject);
    return subject;
  }

  findAll(): Subject[] {
    return this.subjects;
  }

  findOne(id: number): Subject {
    const subject = this.subjects.find((subject) => subject.id === id);
    if (!subject) {
      throw new NotFoundException(`Subject with ID ${id} not found`);
    }
    return subject;
  }

  update(id: number, updateSubjectDto: UpdateSubjectDto): Subject {
    const subjectIndex = this.subjects.findIndex((subject) => subject.id === id);
    if (subjectIndex === -1) {
      throw new NotFoundException(`Subject with ID ${id} not found`);
    }
    
    const updatedSubject = {
        ...this.subjects[subjectIndex],
        ...updateSubjectDto,
        id: this.subjects[subjectIndex].id,
      };
  
      this.subjects[subjectIndex] = updatedSubject;
      return updatedSubject;
  }

  remove(id: number): void {
    const subjectIndex = this.subjects.findIndex((subject) => subject.id === id);
    if (subjectIndex === -1) {
      throw new NotFoundException(`Subject with ID ${id} not found`);
    }
    this.subjects.splice(subjectIndex, 1);
  }

}