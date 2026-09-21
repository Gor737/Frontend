import { readFile, writeFile } from "fs/promises";
import path from "path";
import { User } from "./types";

export const getUsers = async (): Promise<User[]> => {
  const usersPath = path.join(process.cwd(), "data", "users.json");
  const users = await readFile(usersPath, "utf-8");
  console.log(users);
  return JSON.parse(users);
};

export const addUser = async (user: Omit<User, "id">): Promise<User> => {
  const users = await getUsers();
  let id:number = 1;
  if(users.length){
    users.forEach(u => id = Math.max(id, u.id));
    ++id;
  }
  const newUser = { ...user, id };
  users.push(newUser);

  const usersPath = path.join(process.cwd(), "data", "users.json");
  await writeFile(usersPath, JSON.stringify(users, null, 2));
  return newUser;
};

export const deleteUser = async (id:number):Promise<User> => {
  let users = await getUsers();
  const user = users.find(u => u.id === id);
  if(!user) throw new Error('User not found');
  users = users.filter(u => u.id !== id);
  const usersPath = path.join(process.cwd(), "data", "users.json");
  await writeFile(usersPath, JSON.stringify(users, null,2));

  return user;
}

export const updateUser = async (id:number, user:Omit<User, "id">):Promise<User> => {
  const users = await getUsers();
  const userIdx = users.findIndex(u => u.id === id);
  if(userIdx === -1) throw new Error('User not found');
  const updatedUser = {id: users[userIdx].id, ...user};
  users[userIdx] = updatedUser;

  const usersPath = path.join(process.cwd(), "data", "users.json");
  await writeFile(usersPath, JSON.stringify(users, null, 2));

  return updatedUser;
}
