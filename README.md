# challenge
Proposed challenge to create a database-free reservation system

How create
```
npm init
```

*fill in your details*
```
npm install --save lowdb
```
```
npm install --save express
```
```
npm install --save body-parser
```

# To use this project
```
npm install 
```
*or*
```
yarn add
```
__Add User__

URL: http://127.0.0.1:3000/api/user/add

__BODY Json__
```
{
	"id":"41",
	"name":"leandro",
	"date":"09-08-90",
	"time":"14:10"
}
```

__Add Rule__

URL: http://127.0.0.1:3000/api/rules/add

__BODY Json__
```
{
	"id":"2",
	"date":"10-08-90",
	"start":"05:10",
	"end":"11:20"
}
```

For more examples, see __Insomnia_2019-10-13__
