export const jwtConstants = {
    secret: process.env.JWT_SECRET || 'DO_NOT_USE_THIS_IN_PRODUCTION_SECRET_KEY',
    refreshSecret: process.env.JWT_REFRESH_SECRET || 'DO_NOT_USE_THIS_IN_PRODUCTION_REFRESH_SECRET_KEY',
};
