import mongoose from 'mongoose';
import dotenv from 'dotenv';
import data from './data.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';

dotenv.config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');

    // Clear existing data (optional)
    await User.deleteMany();
    await Product.deleteMany();

    // Insert users
    const createdUsers = await User.insertMany(data.users);
    const adminUser = createdUsers[0]._id;

    // Assign admin user to all products (optional logic)
    const sampleProducts = data.products.map((product) => ({
      ...product,
      user: adminUser,
    }));

    // Insert products
    await Product.insertMany(sampleProducts);

    console.log('Data seeded successfully!');
    process.exit();
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedDatabase();
