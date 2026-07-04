import winston from "winston";
import path from "path";
const options: winston.LoggerOptions = {
  transports: [
    new winston.transports.Console({
      level: process.env.ENVIRONMENT === "prod" ? "error" : "debug"
    }),
    new winston.transports.File({ filename: path.join(__dirname, './debug.log'), level: "debug" })
  ]
};

const logger = winston.createLogger(options);

if (process.env.NODE_ENV !== "prod") {
  logger.debug("Logging initialized at debug level");
}

export default logger;