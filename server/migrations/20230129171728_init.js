/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = (knex) => {
  return knex.schema
    .createTable("languages", (table) => {
      table.string("name").primary().notNullable().unique();
      table.text("description");
      table.date("appeared");
    })
    .createTable("purposes", (table) => {
      table.string("name").primary().notNullable().unique();
      table.string("description");
    })
    .createTable("languageOriginalPurposes", (table) => {
      table.string("languageName").notNullable();
      table.string("purposeName").notNullable();
      table.primary(["languageName", "purposeName"]);
      table.foreign("languageName").references("languages.name");
      table.foreign("purposeName").references("purposes.name");
    })
    .createTable("paradigms", (table) => {
      table.string("name").primary().notNullable().unique();
      table.text("description");
    })
    .createTable("languageParadigms", (table) => {
      table.string("languageName").notNullable();
      table.string("paradigmName").notNullable();
      table.primary(["languageName", "paradigmName"]);
      table.foreign("languageName").references("languages.name");
      table.foreign("paradigmName").references("paradigms.name");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = (knex) => {
  return knex.schema
    .dropTable("languageParadigms")
    .dropTable("paradigms")
    .dropTable("languageOriginalPurposes")
    .dropTable("purposes")
    .dropTable("languages");
};
