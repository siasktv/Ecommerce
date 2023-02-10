import path from "path";
import dotenv from "dotenv";

// Parsing the env file.
dotenv.config({ path: path.resolve(__dirname, "./.env") });

// Interface to load env variables
// Note these variables can possibly be undefined
// as someone could skip these varibales or not setup a .env file at all

interface ENV {
  APIKEY: string | undefined;
  AUTHDOMAIN: string | undefined;
  PROJECTID: string | undefined;
  STORAGEBUCKET: string | undefined;
  MESSAGINGSENDERID: string | undefined;
  APPID: string | undefined;
  MEASUREMENTID: string | undefined;
}

interface Config {
  APIKEY: string;
  AUTHDOMAIN: string;
  PROJECTID: string;
  STORAGEBUCKET: string;
  MESSAGINGSENDERID: string;
  APPID: string;
  MEASUREMENTID: string;
}

// Loading process.env as ENV interface

const getConfig = (): ENV => {
  return {
    APIKEY: process.env.APIKEY,
    AUTHDOMAIN: process.env.AUTHDOMAIN,
    PROJECTID: process.env.PROJECTID,
    STORAGEBUCKET: process.env.STORAGEBUCKET,
    MESSAGINGSENDERID: process.env.MESSAGINGSENDERID,
    APPID: process.env.APPID,
    MEASUREMENTID: process.env.MEASUREMENTID,
  };
};

// Throwing an Error if any field was undefined we don't
// want our app to run if it can't connect to DB and ensure
// that these fields are accessible. If all is good return
// it as Config which just removes the undefined from our type
// definition.

const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;