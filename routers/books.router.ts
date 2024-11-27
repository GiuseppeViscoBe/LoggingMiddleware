import express, { Request, Response } from "express";
import Book from "../models/book.model";

const bookRouter = express.Router();

bookRouter.get("/books", async (req: Request, res: Response) => {
  try {
    const response = await Book.find({});
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
});

bookRouter.post('/books', async (req : Request, res : Response) => {

    try {
        const body = req.body

        const response = Book.create(body)

        res.status(200).json(body)
    } catch (error) {
        console.log(error)
    }
})

export default bookRouter;
