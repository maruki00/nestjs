import { ApiBearerAuth, ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateTaskDto {
  @ApiProperty()
  id: Number;
  
  @ApiPropertyOptional()
  title: string;

  @ApiPropertyOptional()
  description: string;

  @ApiPropertyOptional()
  status: string;
}
