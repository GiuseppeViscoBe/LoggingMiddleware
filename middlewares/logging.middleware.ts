import { Request, Response, NextFunction } from "express";

export const loggingMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const log = {
    method: req.method,
    url: req.originalUrl,
    host: req.hostname,
    time: new Date().toISOString(),
    requestBody: req.body, 
  };

  console.log(JSON.stringify(log, null, 2)); 
  next(); 
};
