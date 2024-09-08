

exports.sendReqParam = (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
};

// // exports.respondWithName = (req, res) => {
// //   let paramsName = req.params.myName;
// //   res.render("index", { name: paramsName });
// // };

// exports.respondWithName = (req, res) => {
//  res.render("index", { firstName: req.params.myName });
// };


// // Inside index.ejs use <% let name = firstName; %>
// // OR <h1> Hello,
// //   <%= firstName %>
// //   </h1

exports.sendPost = (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.render("POST successful");
   };

   exports.respondWithName = (req, res) => {
    let paramsName = req.params.myName;
    res.render("index", { firstName: paramsName });
   };



