const express = require("express"); 
const router = express.Router(); 
const User = require("../models/users");
const multer = require("multer");
const fs = require("fs");

// image upload
var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname+"_"+Date.now()+file.originalname);
    }
});

var upload = multer({
    storage: storage,
}).single('image');

// Insert an user into database route
router.post('/add', upload, async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email, 
            phone: req.body.phone, 
            image: req.file.filename, 
        });

        await user.save();

        req.session.message = {
            type: 'success',
            message: 'User added successfully!'
        };

        res.redirect('/');
    } catch (err) {
        res.json({ message: err.message, type: 'danger' });
    }
});

// Get all users route
router.get("/", async (req, res) => {
    try {
        const users = await User.find().exec();
        res.render('index', {
            title: 'Home Page',
            users: users,
        });
    } catch (err) {
        res.json({ message: err.message });
    }
});

router.get("/", (req, res) => { 
    res.render("index", { title: "Home Page" });
}); 

router.get("/add", (req, res) => { 
    res.render("add_users", { title: "Add Users" });
});

// Edit an user route
router.get("/edit/:id", async (req, res) => {
    try {
        let user = await User.findById(req.params.id).exec();
        if (!user) {
            return res.redirect("/");
        }
        res.render("edit_users", {
            title: "Edit User",
            user: user,
        });
    } catch (err) {
        console.error(err);
        res.redirect("/");
    }
});

// Update user route
router.post("/update/:id", upload, async (req, res) => {
    try {
        let id = req.params.id;
        let user = await User.findById(id).exec();

        if (!user) {
            return res.redirect("/");
        }

        let new_image = user.image;
        if (req.file) {
            new_image = req.file.filename;
        }

        await User.findByIdAndUpdate(id, {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            image: new_image,
        }).exec();

        req.session.message = {
            type: 'success',
            message: 'User updated successfully!',
        };

        res.redirect('/');
    } catch (err) {
        console.error("Update error:", err);
        res.json({ message: err.message, type: 'danger' });
    }
});

// Delete user route
router.get("/delete/:id", async (req, res) => {
    try {
        let user = await User.findById(req.params.id).exec();
        if (!user) {
            return res.redirect("/");
        }

        if (user.image && user.image !== "") {
            try {
                fs.unlinkSync("./uploads/" + user.image);
            } catch (err) {
                console.log("Error deleting file:", err);
            }
        }

        await User.findByIdAndDelete(req.params.id).exec();

        req.session.message = {
            type: "info",
            message: "User deleted successfully!",
        };

        res.redirect("/");
    } catch (err) {
        console.error("Delete error:", err);
        res.json({ message: err.message, type: "danger" });
    }
});

module.exports = router;