// cms/config/database.js - Production-ready configuration
const path = require('path');

module.exports = ({ env }) => {
  // Production configuration
  if (env('NODE_ENV') === 'production') {
    return {
      connection: {
        client: 'postgres',
        connection: {
          connectionString: env('DATABASE_URL'),
          ssl: env.bool('DATABASE_SSL', false) ? {
            rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true)
          } : false,
        },
        acquireConnectionTimeout: 60000,
        pool: {
          min: 0,
          max: 10,
          create