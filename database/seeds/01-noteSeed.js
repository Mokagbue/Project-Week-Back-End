
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {notes_title: 'example note title 1', notes_content: 'example note content 1', notes_date_made: 'today', users_id: '1'},
        {notes_title: 'example note title 2', notes_content: 'example note content 2', notes_date_made: 'today', users_id: '2'},
        {notes_title: 'example note title 3', notes_content: 'example note content 3', notes_date_made: 'today', users_id: '3'}
      ]);
    });
};
