import { Router } from "express";
import userRoutes from "./user";
import LoginRoutes from "./login";
import ProfileRoutes from "./profiles";
import review from "./review";
import TravelRoutes from "./travel";
import UploadDataFake from "./uploadDataFake";
import changePassword from "./changePassword";
import history from "./historyTravel";
import reporting from "./reporting";
import payments from "./payments";
import { Response, Request } from "express";
const router = Router();

router.use("/", reporting);
// router.use("/", userRoutes);
// router.use("/", LoginRoutes);
// router.use("/", ProfileRoutes);
// router.use("/", TravelRoutes);
// router.use("/", UploadDataFake);
// router.use("/", review);
// router.use("/", payments);
// router.use("/", review);
// router.use("/", changePassword);
// router.use("/", history);
// router.use("/", UploadDataFake);

export default router;
