const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function signup(req, res) {
  // get email, psw off req body
  const { email, password } = req.body;
  // encrypting psw
  const hashedPassword = bcrypt.hashSync(password, 8);
  // saving in db
  await User.create({ email, password: hashedPassword });
  // responding
  res.sendStatus(200);
}

async function login(req, res) {
  // get email, psw off rq body
  const { email, password } = req.body;

  // Find the user with requested email
  const user = await User.findOne({ email });

  // checking email existance in db
  if (!user) return res.sendStatus(401);

  // compare user psw with psw in db
  const passwordMatch = bcrypt.compareSync(password, user.password);

  // checking psw
  if (!passwordMatch) return res.sendStatus(401);

  // if found then create jwt token
  const exp = Date.now() + 1000 * 3600 * 24 * 30; // expire date
  const token = jwt.sign({ sub: user._id, exp }, process.env.SECRET);

  // setting cookie
  res.cookie("Authorization", token, {
    expires: new Date(exp),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  res.sendStatus(200);
}

function logout(req, res) {
  // clear cookie
  res.clearCookie("Authorization");
  res.sendStatus(200);
}

function checkAuth(req, res) {
  console.log(req.user); // console user's login info.
  res.sendStatus(200);
}

async function fetchUsers (req,res) {
  try {
    const users = await User.find();
    res.json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Error fetching users' });
  }
}

module.exports = {
  signup,
  login,
  logout,
  checkAuth,
  fetchUsers
};
