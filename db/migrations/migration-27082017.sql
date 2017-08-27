-- Connect to the correct database to run command.
\c express_todo_app;

-- Create a table to store todos
CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  completion VARCHAR(20),
  category VARCHAR(255),
  description TEXT
);
