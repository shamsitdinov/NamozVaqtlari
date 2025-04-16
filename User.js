import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    id: {type:Number,required:true},
    first_name: { type: String, required:true},
    username: { type: String, required: false },
    created_at: { type: Date, default: Date.now },
});

export const UserModel = mongoose.model('Users', UserSchema);
 