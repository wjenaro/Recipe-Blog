/**
 * GET/
 * homepage
 * Renders the index view for the homepage
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
exports.homepage = async (req, res) => {
  try {
    res.render('index');
  } catch (error) {
    console.log(error);
  }
};


