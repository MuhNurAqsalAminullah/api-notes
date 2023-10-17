const dbConnection = require("../config/database");

// READ - Get All Data
const findAllNotes = (req, res) => {
  const querySQL = "SELECT * FROM list_notes";

  dbConnection.query(querySQL, (err, results, field) => {
    if (err) {
      res.status(500).json({
        message: "Server Error",
        serverMessage: err,
      });
    } else {
      res.status(200).json({
        message: "Get all notes success",
        success: true,
        data: results,
      });
    }
  });
};

// READ - Get One Data
const findOneNotes = (req, res) => {
  let { id } = req.params;
  const querySQL = `SELECT * FROM list_notes WHERE id = ${id}`;

  dbConnection.query(querySQL, (err, results, fields) => {
    if (err) {
      res.status(500).json({
        message: "Server Error",
        serverMessage: err,
      });
    } else {
      res.status(200).json({
        message: "Get one notes success",
        success: true,
        data: results[0],
      });
    }
  });
};

// CREATE - Create Data
const createNotes = (req, res) => {
  const { body } = req;
  const querySQL = `INSERT INTO list_notes (name, deskripsi) VALUES ('${body.name}','${body.deskripsi}')`;

  dbConnection.query(querySQL, (err, results, fields) => {
    if (err) {
      res.status(500).json({
        message: "Server Error",
        serverMessage: err,
      });
    } else {
      res.status(201).json({
        message: "Create data notes success",
        success: true,
        data: body,
      });
    }
  });
};

// UPDATE - Update Data
const updateNotes = (req, res) => {
  let { id } = req.params;
  const { body } = req;
  const querySQL = `UPDATE list_notes SET name='${body.name}', deskripsi='${body.deskripsi}' WHERE id='${id}'`;

  dbConnection.query(querySQL, (err, results, fields) => {
    if (err) {
      res.status(500).json({
        message: "Server Error",
        serverMessage: err,
      });
    } else {
      res.status(201).json({
        message: "Update data notes success",
        success: true,
        data: body,
      });
    }
  });
};

// DELETE - Delete Data
const deleteNotes = (req, res) => {
  let { id } = req.params;
  const querySQL = `DELETE FROM list_notes WHERE id='${id}'`;

  dbConnection.query(querySQL, (err, results, fields) => {
    if (err) {
      res.status(500).json({
        message: "Server Error",
        serverMessage: err,
      });
    } else {
      res.json({
        message: "Delete data notes success",
        success: true,
        data: null,
      });
    }
  });
};

module.exports = {
  findAllNotes,
  findOneNotes,
  createNotes,
  updateNotes,
  deleteNotes,
};
