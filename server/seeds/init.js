/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async (knex) => {
  // Deletes ALL existing entries
  await knex("messages").del();
  await knex("messages").insert([
    { id: 0, name: "greeting", message: "Hello world!" },
  ]);
};
