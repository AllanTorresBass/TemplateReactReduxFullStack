import { Response, Request, Router } from "express";
import { User } from "../models/User";
import { sequelize } from "../db";
const { Sequelize, QueryTypes } = require("sequelize");
const router = Router();

router.get("/test", async (req: Request, res: Response) => {
  let refrigeration;
  let HVAC;
  try {
    await sequelize.authenticate();
    refrigeration = await sequelize.query(
      "SELECT equipment_id,site,site_id,sf_equipment_id,equipment_name FROM buildingfax.report_equipment where site = 'TPS Las Vegas Henderson' and refrigeration = true LIMIT 3",
      {
        type: QueryTypes.SELECT,
      }
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  try {
    await sequelize.authenticate();
    HVAC = await sequelize.query(
      "SELECT equipment_id,site,site_id,sf_equipment_id,equipment_name FROM buildingfax.report_equipment where site = 'TPS Las Vegas Henderson' and hvac = true LIMIT 3",
      {
        type: QueryTypes.SELECT,
      }
    );

    sequelize.close();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  res.send({ refrigeration, HVAC });
});

export default router;
