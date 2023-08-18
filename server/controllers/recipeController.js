require('../models/database');
const Category=require('../models/Category');
const User=require('../models/User');
const Blog=require('../models/Blog');

/**
 * Renders the homepage.
 * 
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
//fetch data
async function fetchAuthorByUsername(username) {
  try {
    const author = await User.findOne({ username });
    return author;
  } catch (error) {
    console.error("Error fetching author:", error);
    return null;
  }
}

exports.homepage = async (req, res) => {
  try {
    const categoriesData = await Category.find().sort({ _id: -1 }).limit(6);
    const latestBlog = await Blog.findOne().sort({ createdAt: -1 }).populate('author');
    // Fetch the three latest blog posts along with their authors
    const latestBlogs = await Blog.find().sort({ createdAt: -1 }).limit(3);
    //fetch the author
    const author = await fetchAuthorByUsername(latestBlog.author.username);
    res.render('index', { categories: categoriesData, posts: latestBlog, sidebarposts: latestBlogs, author: author });
    
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred.");
  }
};
//data object



/* const postObject = {
  title: "Delicious Chocolate Cake Recipe",
  content: "Indulge in the art of creating a delectable masterpiece with our guide on making a mouthwatering chocolate cake. This timeless dessert, celebrated for its rich flavor and irresistible charm, holds the promise of pure delight.",
  author: "64dfe5213b912317886e0150", // Assuming this is the ObjectId of the author in the User collection
  tags: ["Chocolate", "Dessert", "Cake"],
  comments: [
    {
      text: "This cake looks amazing! I can't wait to try it.",
      user: "64dfe5213b912317886e0150", // Assuming this is the ObjectId of a commenter in the User collection
    },
    {
      text: "I made this cake yesterday and it turned out fantastic!",
      user: "64dfe5213b912317886e0150", // Assuming this is the ObjectId of another commenter in the User collection
    },
  ],
};

async function insertPost() {
  try {
    // Assuming you have a User model defined
    // const User = mongoose.model('User', userSchema);

    const newPost = new Blog(postObject);
    await newPost.save();
    console.log(`User ${newPost.title} inserted successfully`);
  } catch (error) {
    console.error("Error inserting user:", error);
  }
}
insertPost(); */
/* const userData = {
  username: "john_doe",
  email: "john@example.com",
  // Other user-related fields (e.g., name, profile picture, etc.)
};

async function insertUsers() {
  try {
    // Assuming you have a User model defined
    // const User = mongoose.model('User', userSchema);

    const newUser = new User(userData);
    await newUser.save();
    console.log(`User ${newUser.username} inserted successfully`);
  } catch (error) {
    console.error("Error inserting user:", error);
  }
}

// Call the function to insert user data
insertUsers(); */

/* 
const categoryData = [
  {
    name: "Breakfast",
    description: "Start your day with a delicious breakfast!",
    image: "breakfast.jpg"
  },
  {
    name: "Lunch",
    description: "Enjoy a satisfying lunch to refuel your energy.",
    image: "lunch.jpg"
  },
  {
    name: "Dinner",
    description: "Indulge in a hearty dinner with family and friends.",
    image: "dinner.jpg"
  },
  {
    name: "Dessert",
    description: "Satisfy your sweet tooth with delightful desserts.",
    image: "dessert.jpg"
  },
  {
    name: "Snacks",
    description: "Tasty and quick snacks for your on-the-go cravings.",
    image: "snacks.jpg"
  },
  {
    name: "Vegetarian",
    description: "Delicious and healthy vegetarian recipes.",
    image: "vegetarian.jpg"
  },
  {
    name: "Vegan",
    description: "Plant-based recipes for a cruelty-free diet.",
    image: "vegan.jpg"
  }
];

// Function to insert category data into the database
async function insertCategories() {
  try {
    await Category.insertMany(categoryData);
    console.log("Category data inserted successfully");
  } catch (error) {
    console.error("Error inserting category data:", error);
  }
}

// Call the function to insert category data
insertCategories(); */

