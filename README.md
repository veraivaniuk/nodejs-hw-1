# nodejs-hw-1

<a align="center" href="https://monosnap.com/file/Wy5TRL6CLgH7e1Z9RJICwM38OfQuvr">![GitHub](https://img.shields.io/badge/-action_list-05122A?style=flat&logo=github)</a>

https://monosnap.com/file/Wy5TRL6CLgH7e1Z9RJICwM38OfQuvr action_list

https://monosnap.com/file/HuxXGqwt3AzKltRR6UJZsMbk08S8lG action_get_id=5

https://monosnap.com/file/4rKHlJPBG5Q5ah8v9gCHcKjCdYgamz action_add_contact

https://monosnap.com/file/vj7J6b9ZU4oNh7zyXll3qYez6Kw9V9 action_remove_id=3

Получаем и выводим весь список контактов в виде таблицы (console.table)
node index.js --action list https://monosnap.com/file/Wy5TRL6CLgH7e1Z9RJICwM38OfQuvr

Получаем контакт по id
node index.js --action get --id 5 https://monosnap.com/file/HuxXGqwt3AzKltRR6UJZsMbk08S8lG

Добавялем контакт
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22 https://monosnap.com/file/4rKHlJPBG5Q5ah8v9gCHcKjCdYgamz

Удаляем контакт
node index.js --action remove --id 3 https://monosnap.com/file/vj7J6b9ZU4oNh7zyXll3qYez6Kw9V9
