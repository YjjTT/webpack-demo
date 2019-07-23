const path = require('path')
module.exports = {
	entry: './src/index.js', //打包入口文件
	output: { // 打包输出配置
		filename: 'bundle.js', // 输出文件名
		path: path.resolve(__dirname, 'dist'), // 输出路径
	}
}