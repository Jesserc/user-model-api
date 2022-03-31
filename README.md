# SIMPLE USER API

    This is a simple user API that allows you to create, read, update, and delete users. It is not intended to be a robust API.

- FORMAT:

      {

      "name": "",
      "email": "",
      "password": "",
      "location": ""
      }

- POST A SINGLE USER

  localhost:8000/api/v1/auth/registerUser

      	{

      	"name": "Jesse Raymond",
      	"email": "1234@gmail.com",
      	"password": "yasukeMoriarty",
      	"location": "Port Harcourt"

      	}

- GET ALL USERS

      localhost:8000/api/v1/auth/users

- UPDATE A SINGLE USER

  localhost:8000/api/v1/auth/updateUser/624497ab44c0deff387a1196

      {

      "name": "Jesse Raymond",
      "email": "node@gmail.com",
      "lastName": "lastName",
      "location": "Port Harcourt"

      }

- DELETE A SINGLE USER

  localhost:8000/api/v1/auth/deleteUser/id-here

      {

      }
