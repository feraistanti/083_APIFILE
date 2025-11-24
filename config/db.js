const db = require('../models');

async function connectDatabase() {
    try {
        await db.Sequelize.authenticate();
        console.log(' ✅Database connected successfully');

        awaitdb.Sequelize.sync({ alter: true });
        console.log(' ✅Databasee synchronized');

    } catch (err) {
        console.error(' Database connection failed:', err.message);
        process.exit(1);
    }
}

module.exports = connectDatabase;