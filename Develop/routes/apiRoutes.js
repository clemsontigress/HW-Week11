
 //* GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

 //* POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, 
 //and then return the new note to the client.

 //* DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll
 //need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all 
 //notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.



var notesData = require("../db/db");

module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
  
    app.get("/api/notes", function(req, res) {
      res.send(notesData);
      
    });
  
  
    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------
  
    app.post("/api/notes", function(req, res) {

        notesData.push(req.body);
        console.log(req.body);
        res.json({
            success: true,
            data: notesData,
            message: "Successfully added note"});
      
    });
  
    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!
  
   /* app.post("/api/clear", function(req, res) {
      // Empty out the arrays of data
      tableData.length = 0;
      waitListData.length = 0;
  
      res.json({ ok: true });
    });*/
    
  };
  