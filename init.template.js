print("INITIALIZING DB >>>>>")
const dbName = "${MONGO_INITDB_DATABASE}";
const user = "${MONGO_INITDB_ROOT_USERNAME}";
const pass = "${MONGO_INITDB_ROOT_PASSWORD}";

const statDbName = "${MONGO_INITDB_DATABASE}_stat";

db.getSiblingDB(dbName)
  .createUser({
    user: user,
    pwd: pass,
    roles: [
      { role: "dbOwner", db: dbName },
      { role: "dbOwner", db: statDbName }
    ]
  });