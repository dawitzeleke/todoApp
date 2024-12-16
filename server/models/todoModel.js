import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
    todoTitle:{
        type:String,
        required:true
    },
   todoDescription: {
    type:String,
    required:true
},
status:{
    type: Boolean
}
}, {timestamps:true});

export const Todo = mongoose.model("Todo", todoSchema);