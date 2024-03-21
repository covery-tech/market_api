export class UserEntity {
    constructor(
        public id: string,
        public email: string,
        public name: string,
        public lastName: string,
        public phoneNumber:string,
        public type: string,
        public img?: string
    ) {}
}