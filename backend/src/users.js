const bcrypt = require("bcryptjs");

const users = [
  {
    id: 1,
    email: "mano@gmail.com",
    passwordHash: bcrypt.hashSync("mano123", 10),
  },
];

module.exports = users;
