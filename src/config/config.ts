export const config = () => ({
    NODE_ENV: process.env.NODE_ENV,
    API_DOC_PATH: process.env.API_DOC_PATH,
    PORT: parseInt(process.env.PORT || '', 10),
    DB_CONNECTION_URL: process.env.DB_CONNECTION_URL,
    SECURITY_JWT_SECRET: process.env.SECURITY_JWT_SECRET,
    SECURITY_PASSWORD_SALT_ROUND: process.env.SECURITY_PASSWORD_SALT_ROUND,
    SECURITY_ACCESS_TOKEN_EXPIRED: 60 * 60 * 24,
    SWAGGER_USR: process.env.SWAGGER_USR,
    SWAGGER_PASSWORD: process.env.SWAGGER_PASSWORD,
});