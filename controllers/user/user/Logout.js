const Logout = async (req, res) => {
  try {
    res.clearCookie("jwt");
    res.status(200).json({ message: "Logged out Successfully" });
  } catch (error) {
    const errMessage = error.message;
    res.status(500).json({ errMessage });
  }
};

module.exports = Logout;
