export declare class UserResponseDto {
    id: number;
    email: string;
    username: string;
    createdAt: Date;
    updateAt: Date;
    password: string;
    constructor(partial: Partial<UserResponseDto>);
}
