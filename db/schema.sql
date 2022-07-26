-- will need to put in the SQL schema set up to create, read, update, and delete table values on
-- this file
DROP DATABASE IF EXISTS employee_tracker_db

CREATE DATABASE employee_tracker_db

USE employee_tracker_db

CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
   -- INDEX dep_ind (department_id),
   -- CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department (id)
   -- ON DELETE CASCADE
);

CREATE TABLE employees (
   id INT AUTO_INCREMENT PRIMARY KEY,
   first_name VARCHAR(255) NOT NULL,
   last_name VARCHAR(255) NOT NULL,
   role_id INT NOT NULL,
   manager_id INT NOT NULL
  -- INDEX role_ind (role_id),
  -- CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
  -- INDEX man_ind (manager_id),
  -- CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);
