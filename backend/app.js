// import express module
const express = require('express');
// import body-parser module
const bodyParser = require('body-parser');
// import mongoose module
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/sportDB');
// // import bcrypt module
const bcrypt = require('bcrypt');
const jwd = require('jsonwebtoken');
const session = require('express-session');
const multer = require("multer")
const path = require("path")
// creates express  application (app)
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Security configuration

app.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader(

        "Access-Control-Allow-Headers",

        "Origin, Accept, Content-Type, X-Requested-with, Authorization"

    );

    res.setHeader(

        "Access-Control-Allow-Methods",

        "GET, POST, DELETE, OPTIONS, PATCH, PUT"

    );

    next();

});
const secretKey = 'wael-project-sport24YT';
app.use(session({
    secret: secretKey,
}));

app.use('/images', express.static(path.join('backend/images')))
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
};
const storageConfig = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        if (isValid) {
            cb(null, 'backend/images')
        }
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = Date.now() + name + '-' + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});





//  Model Importation
const Match = require("./models/match")
const Player = require("./models/player")
const Team = require("./models/team");
const User = require("./models/user")

// Tabl
let matchesTab = [
    { id: 1, teamOne: "FCB", teamTwo: "RMD", scoreOne: 1, scoreTwo: 2 },
    { id: 2, teamOne: "EST", teamTwo: "CA", scoreOne: 4, scoreTwo: 2 },
    { id: 3, teamOne: "ESS", teamTwo: "RMD", scoreOne: 2, scoreTwo: 2 },
    { id: 4, teamOne: "JUV", teamTwo: "ROM", scoreOne: 3, scoreTwo: 2 },
    { id: 5, teamOne: "JUV", teamTwo: "ROM", scoreOne: 4, scoreTwo: 2 },
];
let playersTab = [
    { id: 1, name: "wael", number: 10, position: "atk", age: 22 },
    { id: 2, name: "majdi", number: 12, position: "atk", age: 32 },
    { id: 3, name: "riadh", number: 2, position: "atk", age: 24 },
    { id: 4, name: "Brahim", number: 7, position: "atk", age: 26 },

];
let teamsTab = [
    { id: 1, name: "FCB", owner: "wael", foundation: 8 },
    { id: 2, name: "Est", owner: "RMD", foundation: 1 },
    { id: 3, name: "Ca", owner: "Brahim", foundation: 6 },
    { id: 4, name: "RMD", owner: "RMD", foundation: 4 },

];

// Toute Business Logic

// business Logic : Get All  Match

app.get("/matches", (req, res) => {
    console.log("Here into BL: Get All Matches");
    Match.find().then(
        (docs) => {
            console.log("Here All Matches from Collection", docs);
            res.json({ T: docs });
        }
    )
});
// business Logic : Get  Match By Id

app.get("/matches/:id", (req, res) => {
    console.log("Here into BL: Get Matche By Id", req.params.id);
    Match.findById(req.params.id).then(
        (doc) => {
            res.json({ match: doc })
        }
    )

    // let match = matchesTab.find((elt) => elt.id == matchId);
    // console.log("Here founded match", match)
    // res.json({ match: match });
});
// business Logic : Delet Match

app.delete("/matches/:id", (req, res) => {
    console.log("Here into BL: Delete  Matche By Id", req.params.id);
    let matchId = req.params.id;
    Match.deleteOne({ _id: req.params.id }).then(
        (result) => {
            console.log("Here result After Delet", result);

            if (result.deletedCount == 1) {
                res.json({ isDelet: true });
            } else {
                res.json({ isDelet: false });
            }
        }
    )
    // let pos = matchesTab.findIndex((elt) => elt.id == matchId);
    // console.log("Here Position", pos);
    // matchesTab.splice(pos, 1);
    // res.json({ isDeleted: true })
});
// business Logic : Add Match

app.post("/matches", (req, res) => {
    console.log("Here into BL: Add Matches", req.body);
    let match = new Match(req.body);
    //    save match into
    match.save();
    res.json({ isAdded: true });
});
// business Logic : Edit Match

app.put("/matches", (req, res) => {
    console.log("Here into BL: Edit Matches");
    let newMatch = req.body;
    let pos = matchesTab.findIndex((elt) => elt.id == newMatch.id);
    matchesTab[pos] = newMatch;

    res.json({ msg: "OK" })


});
// business Logic : Serch  Match

app.post("/matches/search", (req, res) => {
    console.log("Here score", req.body);
    let matchS = req.body;
    console.log("Here founded match", matchS)
    let match = matchesTab.filter((elt) => elt.scoreOne == matchS.one && elt.scoreTwo == matchS.two);
    console.log("Here fou", match)
    res.json({ match: match });
});

// business Logic : Get All  Players
// business Logic : Get All  Players
// business Logic : Get All  Players
// business Logic : Get All  Players

app.get("/players", (req, res) => {
    console.log("Here into BL: Get All players");
    Player.find().then(
        (docs) => {
            console.log("Here All Players from Collection", docs);
            res.json({ T: docs });
        }
    )
});
// business Logic : Get  Player By Id

app.get("/players/:id", (req, res) => {
    console.log("Here into BL: Get players By Id")
    Player.findById(req.params.id).then(
        (doc) => {
            res.json({ player: doc })
        }
    )


    // let player = playersTab.find((elt) => elt.id == playerId);
    // console.log("Here founded player", player)
    // res.json({ player: player });
});
// business Logic : Delet Player

app.delete("/players/:id", (req, res) => {
    console.log("Here into BL: Delete  Player By Id")
    let playerId = req.params.id;
    let pos = playersTab.findIndex((elt) => elt.id == playerId);
    console.log("Here Position", pos);
    playersTab.splice(pos, 1);
    res.json({ isDeleted: true })
});
// business Logic : Add Player

app.post("/players", (req, res) => {
    console.log("Here into BL: Add Playrs", req.body);
    Team.findById(req.body.teamsId).then(
        (team) => {
            if (!team) {
                res.json({ msg: "Team Not Found" });
            } else {
                const playerObj = new Player({
                    name: req.body.name,
                    age: req.body.age,
                    position: req.body.position,
                    nbr: req.body.nbr,
                    tId: team._id,
                });
                console.log("Here playerObj", playerObj);

                playerObj.save(
                    (err, savedPlayer) => {
                        if (err) {
                            res.json({ msg: "Player Not Save" });
                        } else {
                            team.players.push(savedPlayer._id);
                            team.save();
                            res.json({ msg: "Player Added" })
                        }
                    }
                );
            }
        }
    )
    // let player = new Player(req.body);
    // //    save match into
    // player.save();
    // res.json({ isAdded: true });
});
// business Logic : Edit Player

app.put("/players", (req, res) => {
    console.log("Here into BL: Edit Player");
    let newPlayer = req.body;
    let pos = playersTab.findIndex((elt) => elt.id == newPlayer.id);
    playersTab[pos] = newPlayer;

    res.json({ msg: "OK" })
});
// business Logic : Get All  Teams
// business Logic : Get All  Teams
// business Logic : Get All  Teams
// business Logic : Get All  Teams

app.get("/teams", (req, res) => {
    console.log("Here into BL: Get All Teams");
    Team.find().populate().then(
        (docs) => {
            console.log("Here All Teams from Collection", docs);
            res.json({ T: docs });
        }
    )
});
// business Logic : Get  Teams By Id

app.get("/teams/:id", (req, res) => {
    console.log("Here into BL: Get teams By Id");
    Team.findById(req.params.id).then(
        (doc) => {
            res.json({ team: doc })
        }
    )


    // let team = teamsTab.find((elt) => elt.id == teamId);
    // console.log("Here founded team", team)
    // res.json({ team: team });
});
// business Logic : Delet Teams

app.delete("/teams/:id", (req, res) => {
    console.log("Here into BL: Delete  Teams By Id", req.params.id);
    let teamId = req.params.id;
    let pos = teamsTab.findIndex((elt) => elt.id == teamId);
    console.log("Here Position", pos);
    teamsTab.splice(pos, 1);
    res.json({ isDeleted: true })
});
// business Logic : Add Teams

app.post("/teams", (req, res) => {
    console.log("Here into BL: Add Teams", req.body);
    let team = new Team(req.body);
    //    save match into
    team.save();
    res.json({ isAdded: true });
});
// business Logic : Edit Teams

app.put("/teams", (req, res) => {
    console.log("Here into BL: Edit Teams");
    let newTeam = req.body;
    let pos = teamsTab.findIndex((elt) => elt.id == newTeam.id);
    teamsTab[pos] = newTeam;

    res.json({ msg: "OK" })
});
// business Logic : signup

app.post("/users/signup", multer({ storage: storageConfig }).single('img'), (req, res) => {
    User.findOne({ email: req.body.email }).then(
        (doc) => {
            if (doc) {
                res.json({ msg: "Email is invalid" })

            } else {
                bcrypt.hash(req.body.pwd, 10).then(
                    (crytedPwd) => {
                        // console.log("Here Crypted PWD", crytedPwd);
                        req.body.pwd = crytedPwd;
                        // if (req.file) {
                        //     req.body.avatar = `http://localhost:3000/images/${req.file.filename}`;
                        // } else {
                        //     req.body.avatar = `http://localhost:3000/images/avatar.png`;
                        // }
                        (req.file)?
                         req.body.avatar = `http://localhost:3000/images/${req.file.filename}`:

                         req.body.avatar = `http://localhost:3000/images/avatar.png`;
                        let user = new User(req.body);
                        user.save();
                        res.json({ isAdded: true })
                    }
                )
            }
        }
    )

    //    save match into

});
// business Logic : Login

app.post("/users/login", (req, res) => {
    console.log("Here into BL: Add Matches", req.body);
    User.findOne({ email: req.body.email }).then(
        (doc) => {
            if (!doc) {
                res.json({ msg: "Email does not exist" })

            } else {
                bcrypt.compare(req.body.pwd, doc.pwd).then(
                    (result) => {
                        if (result) {
                            let userToSend = {
                                id: doc._id,
                                fName: doc.firstName,
                                lName: doc.lastName,
                                role: doc.role,
                                img:doc.avatar
                            }
                            // console.log("wael",userToSend);
                            let token = jwd.sign(userToSend, secretKey, { expiresIn: '1h' });


                            res.json({ msg: "Welcom", user: token })
                        } else {
                            res.json({ msg: "Check PWD" })
                        }
                    }
                )
            }
        }
    )

    //    save match into

});


module.exports = app;