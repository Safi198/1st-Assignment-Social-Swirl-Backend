const express = require("express");
const app = express();
const port = 3000;

// I used this for json
app.use(express.json());

//Array for users
let users = [];

//Just to check server
app.get("/", (req, res) => {
    try {
        res.send("Server is running fine");
    } catch (error) {
        res.status(500).json({
            error: "Internal Server Error",
        });
    }
});

//Get all the user details when i add them into an array
app.get("/users", (req, res) => {
    try {
        res.json(users).status(200);
    } catch (error) {
        res.status(500).json({
            error: "Internal Server Error",
        });
    }
});

//Create new user and push that user detail to users array and every user having unique id
app.post("/users", (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res
                .json({ error: "Name, Email, and Passwords are required" })
                .status(400);
        }
        const newUser = {
            id: users.length + 1,
            name: name,
            email: email,
            password: password,
        };
        users.push(newUser);
        res.json({ success: "New User added", newUser });
    } catch (error) {
        res.status(500).json({
            error: "Internal Server Error",
        });
    }
});

//display user through their by finding them on their id
app.get("/users/:id", (req, res) => {
    try {
        const findUser = users.find(
            (user) => user.id === parseInt(req.params.id)
        );
        if (findUser) {
            res.json({
                success: `User associated with id: ${req.params.id} is:`,
                findUser,
            }).status(201);
        } else {
            res.json({ error: `User not Found` }).status(404);
        }
    } catch (error) {
        res.status(500).json({
            error: "Internal Server Error",
        });
    }
});

//find user by id and then update his details
app.put("/users/:id", (req, res) => {
    try {
      const updateUser = users.find(
        (user) => user.id === parseInt(req.params.id)
      );
      if (!updateUser) {
        return res.json({ error: "User not found" }).status(404);
      }
  
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        return res
          .json({ error: "Name, Email, and Passwords are required" })
          .status(400);
      }
  
      // Update existing properties of the user
      updateUser.name = name;
      updateUser.email = email;
      updateUser.password = password;
  
      res.json({
        success: `User data has been updated associated with id: ${req.params.id}`,
        updateUser,
      }).status(200);
    } catch (error) {
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  });

  
//find user by id and then delete
app.delete("/users/:id", (req, res) => {
    try {
        const userIndex = users.findIndex(
            (user) => user.id === parseInt(req.params.id)
        );
        if (userIndex === -1) {
            return res.json({ error: "User not found" }).status(404);
        }

        users.splice(userIndex, 1);
        res.json({
            success: `Deleted User associated with id: ${req.params.id}`,
        }).status(204);
    } catch (error) {
        res.status(500).json({
            error: "Internal Server Error",
        });
    }
});

//server running port
app.listen(port, (err) => {
    if (err) {
        console.log("Error: ", err);
    }
    console.log(`Server is running on: localhost:${port}`);
});
