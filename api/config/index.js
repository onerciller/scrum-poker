module.exports = {
  development: {
    username: 'root',
    password: '',
    logging: false,
    database: 'trendyol-api',
    host: 'localhost',
    dialect: 'mysql',
    timezone: '+00:00',
    define: {
      paranoid: true,
      timestamps: true,
      freezeTableName: true,
      underscored: true
    },
    server: {
      port: process.env.port || 4000
    }
  },

  test: {
    username: 'root',
    password: '',
    logging: false,
    database: 'trendyol-api',
    host: 'localhost',
    dialect: 'mysql',
    timezone: '+00:00',
    define: {
      paranoid: true,
      timestamps: true,
      freezeTableName: true,
      underscored: true
    },
    server: {
      port: process.env.port || 4000
    },
    auth: {
      jwtSecret: 'secretKey'
    }
  },

  docker: {
    username: 'testuser',
    password: 'secret',
    logging: false,
    database: 'scrum',
    host: process.env.DB_HOST,
    dialect: 'mysql',
    timezone: '+00:00',
    define: {
      paranoid: true,
      timestamps: true,
      freezeTableName: true,
      underscored: true
    },
    server: {
      port: process.env.port || 4000
    }
  }
};
