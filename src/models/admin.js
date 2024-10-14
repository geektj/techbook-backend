const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const adminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters long"],
    },
  },
  {
    timestamps: true,
  }
);

adminSchema.statics.createDefaultAdmin = async function () {
  try {
    const adminExists = await this.findOne({ email: "admin@gmail.com" });
    if (adminExists) {
      console.log("Default admin already exists");
      return;
    }

    const admin = new this({
      email: "admin@example.com",
      password: "adminpassword123", // This will be hashed before saving
    });

    await admin.save();
    console.log("Default admin created successfully");
  } catch (error) {
    console.error("Error creating default admin:", error);
  }
};

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
// module.exports = mongoose.model("Admin", adminSchema);
// const User = mongoose.model("Admin", adminSchema);

// async function storeUser(email, password) {
//   // Hash the password
//   const hashedPassword = await bcrypt.hash(password, 10);
  
//   const user = new Admin({ email, password: hashedPassword });
//   try {
//       await user.save();
//       console.log('User saved successfully');
//   } catch (error) {
//       console.error('Error saving user:', error.message);
//   } finally {
//       mongoose.connection.close();
//   }
// }

// storeUser('test@example.com', 'adminpassword123')
