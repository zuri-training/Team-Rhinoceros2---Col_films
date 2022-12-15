
const mongoose = require("mongoose");
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    first_name: { type: String,
                  required: [true, 'Please enter your first name'],
                  lowercase: true
                },
    last_name: { type: String,
                required: [true, 'Please enter your last name'],
                lowercase: true
                },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    phone_number: {
      type: String,
      required: [true, 'Please enter your number'],
      unique: true,
      lowercase: true,
     
  },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length is 6 characters'],
    }

});

const movieSchema = new mongoose.Schema({
  upload_date: { type: Date,
                required: [true],
                lowercase: true
              },
  movie_length: { type: Int32Array,
              required: [true],
              lowercase: true
              },
  user: {
      type: userSchema,
      required: [true],
      unique: true,
      
  },
  description: { type: string,
    required: [true],
    lowercase: true
    },

    movie_name: { type: string,
      required: [true],
      lowercase: true
      },


});

const commentSchema = new mongoose.Schema({
  date: { type: Date,
                required: [true],
                lowercase: true
              },
  user: {
      type: userSchema,
      required: [true],
      unique: true,
      
  }

});

const likeSchema = new mongoose.Schema({
  date: { type: Date,
                required: [true],
                lowercase: true
              },
  user: {
      type: userSchema,
      required: [true],
      unique: true,
      
  }

});

const view = new mongoose.Schema({
  date: { type: Date,
                required: [true],
                lowercase: true
              },
  user: {
      type: userSchema,
      required: [true],
      unique: true,
      
  },

  ip: {
    type: string,
    required: [true],
    unique: true,
    
}

});

// fire a function after doc saved to db
userSchema.post('save', function (doc, next) {
    console.log('new user was created & saved', doc);
    next();
  });
  
  
  
  // fire a function before doc saved to db
  userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
module.exports = mongoose.model("user", userSchema);