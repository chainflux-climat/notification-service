import express, { Response as ExResponse, Request as ExRequest } from "express";
import bodyParser from "body-parser";
import onFinished from "on-finished";
import swaggerUi from "swagger-ui-express";
import dotenv from "dotenv";
import path from "path";
import logger from './logger/logger';
import * as client from 'prom-client';
const cors = require('cors');

// Create Express server
const router = express();
router.disable("x-powered-by");
dotenv.config({
  path: path.resolve(__dirname, `../env/${process.env.ENVIRONMENT}.env`)
});

// Express configuration
router.set("port", process.env.PORT || 4001);

router.use(cors({
  origin: ["https://shine-uat.nseindia.com", "https://nse-dev.shinetrace.space", "http://localhost:3000"]
}));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Create a Registry which registers the metrics
const register = new client.Registry()

// Add a default label which is added to all metrics
register.setDefaultLabels({
  app: 'auth-service'
})

// Enable the collection of default metrics
client.collectDefaultMetrics({ register })


router.get("/", function (req, res, next) {
  logger.debug("route, new request path " + req.path);
  return res.status(200).json({ status: "notification service is Working!" });
});

router.get("/notification", function (req, res, next) {
  logger.debug("route, new request path " + req.path);
  return res.status(200).json({ status: "notification service is Working!" });
});

router.get("/healthz", function (req, res, next) {
  logger.debug("route, new request path " + req.path);
  return res.status(200).json({ status: "notification service is health is good Working!" });
});

router.get("/livez", function (req, res, next) {
  logger.debug("route, new request path " + req.path);
  return res.status(200).json({ status: "notification service livez!" });
});

router.get("/readyz", function (req, res, next) {
  logger.debug("route, new request path " + req.path);
  return res.status(200).json({ status: "notification service readyz!" });
});

router.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(
    swaggerUi.generateHTML(await import("../../api/dist/swagger.json"))
  );
});

router.use(async function (req, res, next) {
  onFinished(req, function () {
    // Default logger level is 'debug'
    var level = 'debug';

    // If response status is 40X, logger level becomes 'warn'
    if (res.statusCode >= 400 && res.statusCode < 500) {
      level = 'warn';
    }

    // If response status is 50X, logger level becomes 'error'
    if (res.statusCode >= 500) {
      level = 'error';
    }

    // TODO log the request
  });

  next();
});

export default router;
