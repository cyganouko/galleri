var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://cygan:Cygan20762@cluster0.huylzre.mongodb.net/darkroom?retryWrites=true&w=majority&appName=Cluster0',
    development: 'mongodb+srv://cygan:Cygan20762@cluster0.huylzre.mongodb.net/darkroom-dev?retryWrites=true&w=majority&appName=Cluster0',
    test: 'mongodb+srv://cygan:Cygan20762@cluster0.huylzre.mongodb.net/darkroom-test?retryWrites=true&w=majority&appName=Cluster0',
}
module.exports = config;
