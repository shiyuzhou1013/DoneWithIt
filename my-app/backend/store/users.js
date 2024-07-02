const users = [
  {
    id: 1,
    name: "Sherry",
    email: "sherry@domain.com",
    password: "12345",
  },
  {
    id: 2,
    name: "Ian",
    email: "ian@domain.com",
    password: "12345",
  },
];

const getUsers = () => users;

const getUserById = (id) => users.find((user) => user.id === id);

const getUserByEmail = (email) => users.find((user) => user.email === email);

const addUser = (user) => {
  user.id = users.length + 1;
  users.push(user);
};

module.exports = {
  getUsers,
  getUserByEmail,
  getUserById,
  addUser,
};
