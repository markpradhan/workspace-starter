import devServer from '@workspace-starter/tools/devServer'
import path from 'path'
import config from './webpack.config'

const indexHTML = path.join(__dirname + '/index.html')

devServer(config, indexHTML, 4000)
