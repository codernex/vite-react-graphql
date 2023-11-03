import { IResolver } from "@/utils/types";

export const userResolver: IResolver = {
  Query: {
    users: async function () {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      return users;
    },
    user: function (_: any, { id }) {
      return {
        email: "",
        id,
        username: "",
        name: "",
        password: "",
      };
    },
  },
  Mutation: {
    createUser: function (_: any, { userData }) {
      return userData;
    },
  },
};
