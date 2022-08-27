const Pool = require("pg").Pool;

const pool = new Pool({
	connectionString:
		process.env.DATABASE_URL ||
		"postgres://jmmiosmb:LfI30URgYren9tqdGiX71eM6WpJs6u-B@kashin.db.elephantsql.com/jmmiosmb",
        // ssl: {
	// 	rejectUnauthorized: false,
	// },
});
module.exports = pool;
