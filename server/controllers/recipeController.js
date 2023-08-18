require('../models/database');

/**
 * Renders the homepage.
 * 
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
exports.homepage = async (req, res) => {
  try {
    res.render('index');
  } catch (error) {
    console.log(error);
  }
};


