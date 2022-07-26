-- put in seed information here that has all employee data like first/last name, id, role, salary, department, manager 
-- and anything else i might be missing - will need to double check the video.....

INSERT INTO department (name)
VALUES  ("Sales"),
        ("Marketing"),
        ("Operations");

INSERT INTO role (title, salary, department_id)
VALUES  ("Sales Director", "150000", "1"),
        ("Marketing Director", "150000", "2"),
        ("Operations Manager", "175000", "3"),
        ("Social Media Rep", "115000", "2");


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Bob", "Smith", "03", "05"),
       ("Sarah", "Jordan", "04", "06"),
       ("Gary", "Archer", "07", "09"),
       ("Lisa", "Barto", "08", "10");
