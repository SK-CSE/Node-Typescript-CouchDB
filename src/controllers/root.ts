import { Request, Response } from 'express';

export let root = (req: Request, res: Response) => {
    res.status(200).jsonp({
        message: 'Hello World from Type Script!'
      });
};

export let about = (req: Request, res: Response) => {
    res.status(200).jsonp({
        message: 'about Hello World from Type Script!'
    });
};
