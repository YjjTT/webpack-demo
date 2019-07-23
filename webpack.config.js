const path = require('path')
module.exports = {
	mode: 'production', // development 不被压缩, production 被压缩
	entry: './src/index.js', //打包入口文件
	module: {
		rules: [
			{
				test: /\.(jpeg|jpg|png|gif)$/,
				use: { 
					loader: 'file-loader',
					options: {
						// placeholder 占位符
						name: '[name].[ext]',
						outputPath: 'images/'
					}
				}
			}
		]
	},
	output: { // 打包输出配置
		filename: 'bundle.js', // 输出文件名
		path: path.resolve(__dirname, 'dist'), // 输出路径
	}
}