
const geth = function(config){

  return `` +
    `docker run ` +
    `-i ` +
    `-p ${config.port}:${config.port} ` +
    `-p ${config.wsport}:${config.wsport} ` +
    `-p 30303:30303 ` +
    `--name 'geth-client' ` +
    `--rm ` +
    `${config.repo}:${config.tag} ` +
    `--nousb ` +
    `--http ` +
    `--http.addr '0.0.0.0' ` +
    `--http.port ${config.port} ` +
    `--http.corsdomain '*' ` +
    `--ws ` +
    `--ws.port ${config.wsport} ` +
    `--ws.addr '0.0.0.0' ` +
    `--ws.origins '*' ` +
    `--http.api personal,web3,eth,admin,debug,miner,txpool,net ` +
    `--ws.api personal,web3,eth,admin,debug,miner,txpool,net ` +
    `--nodiscover ` +
    `--allow-insecure-unlock ` +
    `--dev ` +
    `--dev.period ${config.period} ` +
    `--miner.gaslimit ${config.gasLimit} `
}

module.exports = geth;