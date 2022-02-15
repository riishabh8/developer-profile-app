const router = require("express").Router();
const Profile = require("../models/profiles");
const axios = require("axios");
const { type } = require("express/lib/response");

//Add Profile
router.post("/api/developers", async (req, res) => {
  const username = String(req.body.username);
  // username = "rishverse"
  console.log("In post route");
  // console.log(req.body)

  var config = {
    method: "get",
    url: `https://api.github.com/users/${username}`,
    headers: {},
  };
  axios(config).then(function (response) {
    val = JSON.parse(JSON.stringify(response.data));
    const newProfile = new Profile({
      _id: val.login,
      avatar_url: val.avatar_url,
      name: val.name,
      company: val.company,
      blog: val.blog,
      location: val.location,
      email: val.email,
      bio: val.bio,
      github_id: val.html_url,
      linkedin_id: "",
      codechef_id: "",
      hackerrank_id: "",
      twitter_id: "",
      medium_id: "",
      repoUrl: val.repos_url,
    });

    try {
      newProfile.save();
      res.status(200).json(newProfile);
    } catch (err) {
      res.status(500).json(err);
    }
  });
});

//DELETE Profile

//GET Profile

//GET ALL ProfileS

module.exports = router;
