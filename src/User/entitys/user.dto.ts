import { Exclude } from 'class-transformer';

export class UserResponseDto {
  id!: number;
  email!: string;
  username!: string;
  createdAt!: Date;
  updateAt!: Date;
  @Exclude() // Это поле будет полностью удалено из ответа
  password!: string;

  constructor(partial: Partial<UserResponseDto>) {
    Object.assign(this, partial);
  }
}
