const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');


const UserSchema = new Schema({ 
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true,'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a valid password'],
        minlength: [6, 'Minimum password length must be 6 characters']
    },
    admin: {
        type: Boolean,
        required: true,
        default: false
    },
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        }
    ], 
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    register_date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true,
})

// UserSchema.pre("save", async (next) => {
//     if(!UserSchema.isModified("password")) {
//         next();
//     }

//     const salt = await bcrypt.genSalt(10)
//     this.password = await bcrypt.hash(this.password, salt)
// })

module.exports = model("User", UserSchema)