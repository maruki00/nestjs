import { ApiProperty } from '@nestjs/swagger';

export class Subject {
    @ApiProperty()
    id: number;
  
    @ApiProperty()
    title: string;
  
    @ApiProperty()
    description: string;
  
    @ApiProperty()
    status: string;
} 