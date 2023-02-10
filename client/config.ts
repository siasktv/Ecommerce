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

const getConfig = (): ENV => {
  return {
    APIKEY: import.meta.env.VITE_APIKEY,
    AUTHDOMAIN: import.meta.env.VITE_AUTHDOMAIN,
    PROJECTID: import.meta.env.VITE_PROJECTID,
    STORAGEBUCKET: import.meta.env.VITE_STORAGEBUCKET,
    MESSAGINGSENDERID: import.meta.env.VITE_MESSAGINGSENDERID,
    APPID: import.meta.env.VITE_APPID,
    MEASUREMENTID: import.meta.env.VITE_MEASUREMENTID,
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
