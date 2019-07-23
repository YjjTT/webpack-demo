function Header (){
	var dom = document.getElementById('root')
	var content = document.createElement('div')
	content.innerText = 'Hello World'
	dom.append(content)
}
module.export = Header