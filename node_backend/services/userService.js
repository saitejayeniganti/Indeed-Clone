const _ = require("lodash");
const dotenv = require("dotenv");

dotenv.config();
const userSchema = require("../db/schema/user").createModel();
const operations = require("../db/operations");
const { request } = require("express");

// save or update user details
exports.saveUserDetails = async (request) => {
  try {
    let response = {};
    if (!request.body.id)
      response = await operations.saveDocuments(userSchema, request.body, {
        runValidators: false,
      });
    else
      response = await operations.updateField(
        userSchema,
        { id: request.body.id },
        request.body
      );
    return { status: 200, body: response };
  } catch (err) {
    const message = err.message ? err.message : "Error while saving details";
    const code = err.statusCode ? err.statusCode : 500;
    return { status: code, body: { message } };
  }
};

// get user details
exports.getUserDetails = async (request) => {
  try {
    if (request.query.id) {
      const response = await operations.getDocument(userSchema, {
        _id: request.query.id,
      });
      console.log(response);
      return { status: 200, body: response };
    }
    if (request.query.emailId) {
      const response = await operations.getUserDocumentByDetails(userSchema, {
        emailId: request.query.emailId,
        password: request.query.password,
      });
      return { status: 200, body: response };
    }
  } catch (err) {
    const message = err.message ? err.message : "Error while fetching details";
    const code = err.statusCode ? err.statusCode : 500;
    return { status: code, body: { message } };
  }
};

// update user details
exports.updateUserDetails = async (request) => {
  try {
    const response = await userSchema.findOneAndUpdate(
      { emailId: request.body.details.emailId },
      {
        $set: {
          firstname: request.body.details.firstname,
          lastname: request.body.details.lastname,
          emailId: request.body.details.emailId,
          contact: request.body.details.contact,
        },
      }
    );
    return { status: 200, body: response };
  } catch (err) {
    const message = err.message ? err.message : "Error while fetching details";
    const code = err.statusCode ? err.statusCode : 500;
    return { status: code, body: { message } };
  }
};

// update resume
exports.updateresume = async (request,res) => {
  try {
    console.log(request.body);
    await userSchema.findOneAndUpdate(
      {
        _id: request.body.id,
      },
      { $set: { resumeLink: request.body.resumeLink } }
    ).then((response)=>{
    console.log("resume", response);
    res.send(response);
    }
    );
    // return { status: 200, body: response };
  } catch (err) {
    const message = err.message ? err.message : "Error while fetching details";
    const code = err.statusCode ? err.statusCode : 500;
    return { status: code, body: { message } };
  }
};
