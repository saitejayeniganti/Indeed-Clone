"use strict";

const Jobs= require("../db/schema/job").createModel();

const handle_request= async(msg, callback)=>{

    const res = {};
            var newJob= new Jobs({
              companyId: msg.companyId,
                jobTitle: msg.jobTitle,
                role:msg.role,
                street:msg.street,
                location:{
                  city:msg.city,
                  state:msg.state,
                  zip:msg.zip,
                },
                industry:msg.industry,
                work:msg.jobType,
                type:msg.type,
                salary: msg.salaryDetails,
                what:msg.what,
                why:msg.why,
                need:msg.need,


              });


              newJob.save ((error,data)=>{
              console.log("registered");
              if(error){
                console.log('Cannot insert user details into db');
               res.status = 400; res.data = "Cannot insert user details into db";
                callback(null, error);
              }else{
                console.log('Inserted sucessfully');
                res.status = 200; 
                res.data = data;
                callback(null, res);
              }
            });
          }
   

exports.handle_request = handle_request;
