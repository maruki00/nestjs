import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateSubjectDto {
  id: Number;
  @ApiPropertyOptional()
  title: string;
  @ApiPropertyOptional()
  description: string;
  @ApiPropertyOptional()
  status: string;
}
