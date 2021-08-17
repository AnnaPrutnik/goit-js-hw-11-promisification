const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map((user) =>
    user.name === userName ? { ...user, active: !user.active } : user
  );
  return Promise.resolve(updatedUsers);
};

const loggerSecond = (updatedUsers) => console.table(updatedUsers);

/*
 * Должно работать так
 */
toggleUserState(users, "Mango").then(loggerSecond);
toggleUserState(users, "Lux").then(loggerSecond);
