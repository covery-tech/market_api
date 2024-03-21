export class CustomError extends Error {

    constructor(
        public readonly statusCode: number,
        public readonly message: string,
        public readonly url: string,
    ) {
        super(message)
    }

    static badRequest(message:string, url:string) {
        return new CustomError(400, message, url)
    }

    static unauthorized(message:string, url:string) {
        return new CustomError(401, message, url)
    }

    static forbidden(message:string, url:string) {
        return new CustomError(403, message, url)
    }

    static notFound(message:string, url:string) {
        return new CustomError(404, message, url)
    }

    static internalServer(url:string, message:string = 'Internal Server Error') {
        return new CustomError(500, message, url)
    }
}