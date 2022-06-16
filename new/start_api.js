const express = require("express");
const router = express.Router();
const sql_command = require("../../api/utils/sql_command");
const {
  jsonFormatSuccess,
//   jsonFormatError,
} = require("../../api/utils/format_json");

  router.get("/get-namepeople", async (req, res, next) => {
    
    try {
      let results = await sql_command.query(`SELECT * FROM PEOPLE WHERE ID_LOGIN=0659856589`);
      res.json(jsonFormatSuccess(results));
    } catch (error) {
      next(error);
    }
  });

  router.get("/get-datacar", async (req, res, next) => {
    
    try {
      let results = await sql_command.query(`SELECT * FROM TRUCK WHERE ID_LOGIN=0654654654`);
      res.json(jsonFormatSuccess(results));
    } catch (error) {
      next(error);
    }
  });

  router.get("/get-datalocation", async (req, res, next) => {
    
    try {
      let results = await sql_command.query(`SELECT * FROM DISPOSAL_SITE WHERE ID_LOGIN=0989879874`);
      res.json(jsonFormatSuccess(results));
    } catch (error) {
      next(error);
    }
  });

  router.get("/get-driver", async (req, res, next) => {
    
    try {
      let results = await sql_command.query(`SELECT * FROM DRIVER WHERE ID_TRUCK=1`);
      res.json(jsonFormatSuccess(results));
    } catch (error) {
      next(error);
    }
  });

  router.get("/get-porter", async (req, res, next) => {
    
    try {
      let results = await sql_command.query(`SELECT * FROM porter WHERE ID_TRUCK=1`);
      res.json(jsonFormatSuccess(results));
    } catch (error) {
      next(error);
    }
  });

  router.get("/get-truckworking", async (req, res, next) => {
    
    try {
      let results = await sql_command.query(`SELECT * FROM licenceplate WHERE ID_TRUCK=1`);
      res.json(jsonFormatSuccess(results));
    } catch (error) {
      next(error);
    }
  });

  router.get("/get-rqpeople", async (req, res, next) => {
    
    try {
      let results = await sql_command.query(`SELECT * FROM DISPOSAL_SITE `);
      res.json(jsonFormatSuccess(results));
    } catch (error) {
      next(error);
    }
  });
  
  router.get("/get-addpeople", async (req, res, next) => {
    
    try {
      let results = await sql_command.query(`SELECT * FROM ADD_PEOPLE WHERE ID_PEOPLE=1`);
      res.json(jsonFormatSuccess(results));
    } catch (error) {
      next(error);
    }
  });

  router.get("/get-addpfpeople", async (req, res, next) => {
    
    try {
      let results = await sql_command.query(`SELECT * FROM ADD_PEOPLE WHERE ID_PEOPLE=1`);
      res.json(jsonFormatSuccess(results));
    } catch (error) {
      next(error);
    }
  });

  router.get("/get-people/:idedit", async (req, res, next) => {
    console.log(req.params.idedit)
    try {
      let results = await sql_command.query(`SELECT * FROM PEOPLE WHERE ID_LOGIN=${req.params.idedit};`);
      return res.json(jsonFormatSuccess(results));
    } catch (error) {
      next(error);
    }
  });


  router.post("/insert-foodname",  async (req, res, next) => {
    // console.log(req)
    const body = req.body
    console.log(body)
    try {
      let results = await sql_command.query(`INSERT INTO LISTFOOD(NFOOD,NFOODEN)
      VALUES('${body.nfood}','${body.nfooden}')`);
      res.json(jsonFormatSuccess(results));
    } catch (error) {
      next(error);
    }
  });



  
  module.exports = router;




// const express = require("express");
// const router = express.Router();
// const sql_command = require("../../api/utils/sql_command");
// const {
//   jsonFormatSuccess,
// //   jsonFormatError,
// } = require("../../api/utils/format_json");

//   router.get("/test-get-start", async (req, res, next) => {
//     req.params
//     try {
//       let results = await sql_command.query(`SELECT * FROM add_people`);
//       res.json(jsonFormatSuccess(results));
//     } catch (error) {
//       next(error);
//     }
//   });

//   router.get("/test-get/:idedit", async (req, res, next) => {
//     console.log(req.params.idedit)
//     try {
//       let results = await sql_command.query(`SELECT * FROM add_people WHERE id_people=${req.params.idedit};`);
//       return res.json(jsonFormatSuccess(results));
//     } catch (error) {
//       next(error);
//     }
//   });
  
//   router.post("/insert-get-start",  async (req, res, next) => {
//     // console.log(req)
//     const body = req.body
//     console.log(body)
//     try {
//       let results = await sql_command.query(`INSERT INTO add_people(building_type,	add_people,subarea_people,area_people,province_people,postalcode_people)
//       VALUES('${body.building_type}','${body.add_people}','${body.subarea_people}','${body.area_people}','${body.province_people}','${body.postalcode_people}')`);
//       res.json(jsonFormatSuccess(results));
//     } catch (error) {
//       next(error);
//     }
//   });
  
//   router.put("/test-put/fe",  async (req, res, next) => {
//     // const body = req.body
//     // console.log(body)
//     try {
//       let results = await sql_command.query(`UPDATE add_people
//       SET building_type = 'บ้านเดี่ยว]' 
//       WHERE id_people = 2;`);
//       res.json(jsonFormatSuccess(results));
//     } catch (error) {
//       next(error);
//     }
//   });
//   router.put("/test-put",  async (req, res, next) => {
//     const body = req.body
//     console.log(body)
//     try {
//       let results = await sql_command.query(`UPDATE add_people
//       SET building_type = '${body.building_type}' ,	add_people = '${body.	add_people}',subarea_people = '${body.subarea_people}' ,area_people = '${body.area_people}',province_people = '${body.province_people}',postalcode_people = '${body.postalcode_people}'
//       WHERE id_people = ${body.id_people};`);
//       res.json(jsonFormatSuccess(results));
//     } catch (error) {
//       next(error);
//     }
//   });
  
//   router.delete("/test-delete/:id",  async (req, res, next) => {
//     // req.params
//     console.log(req.params.id)
//     try {
//       let results = await sql_command.query(`DELETE FROM add_people WHERE ID = ${req.params.id};` );
//       res.json(jsonFormatSuccess(results));
//     } catch (error) {
//       next(error);
//     }
//   });
  
//   module.exports = router;