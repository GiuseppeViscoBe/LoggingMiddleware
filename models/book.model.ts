import {Schema, model} from 'mongoose'

interface IBook {
    name : string,
    author : string
}

const BookSchema = new Schema<IBook>({
    name : {type : String , required : true},
    author : {type : String}
})

const Book = model<IBook>('Book', BookSchema)

export default Book