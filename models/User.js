import mongoose, {Schema, models} from "mongoose";

const userSchema = new Schema({
    firstname: {type: String, required: true, trim: true},
    lastname: {type: String, required: true, trim: true},
    password: {type: String, required: true, trim: true},
    email: {type: String, required: true, unique: true, trim: true},
},{timestamps: true})

// checks if models.user exist, if it doesnt create a new model
const User = models.User || mongoose.model('User', userSchema)

export default User;


// const User = models.User || mongoose.model('User', userSchema);:
//     - This line checks if a model named "User" already exists in the models object.
//     - If it does, it assigns it to the User variable.
//     - If not, it creates a new model using the mongoose.model() method, passing the name "User" and the userSchema as arguments.
//     - The resulting model is stored in the User variable.

