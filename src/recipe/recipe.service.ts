/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecipeService {

  constructor(private readonly prismaService: PrismaService) {}

  create(createRecipeDto: CreateRecipeDto) {
    return this.prismaService.recipe.create({
        data: createRecipeDto
    });
  }

  findAll() {
    return this.prismaService.recipe.findMany();
  }

  findOne(id: number) {
    return this.prismaService.recipe.findUnique({ where: { id } });
  }

  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return this.prismaService.recipe.update({
      where: { id },
      data: updateRecipeDto
    });
  }

  remove(id: number) {
    return `This action removes a #${id} recipe`;
  }
}
