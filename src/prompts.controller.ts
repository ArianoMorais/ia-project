import { Controller, Get } from '@nestjs/common';

@Controller('prompt')
export class PromptController {
  @Get()
  PostPrompt(): string {
    return 'This action returns all cats';
  }
}