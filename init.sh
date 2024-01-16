# Source the .env file to set up the environment variables
export $(grep -v '^#' .env | xargs)

envsubst < init.template.js > init.js