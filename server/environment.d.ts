declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: 'development' | 'production';
        PORT: number;
        DB_PASSWORD: string;
        DB_USERNAME: string,
        HOST: string;
        DB_NAME: string;
      }
    }
  }
  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  export {}