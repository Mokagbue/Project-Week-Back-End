exports.up = function(knex, Promise) {
    return knex.schema.createTable('notes', function(notes) {
        notes.increments();
        notes.string('notes_title').notNullable();
        notes.text('notes_content').notNullable();
        notes.dateTime('notes_date_made').notNullable();
        notes.integer('users_id').notNullable().unsigned().references('id').inTable('users');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('notes');
};