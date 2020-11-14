import { Router, Request, Response } from 'express';  

const route = Router();

route.get('/', (request: Request, response: Response) => {
    response.json({
        name: "Api Pandora",
        version: "2020.11-001",
        message: "Api works"
    });
});

export { route };