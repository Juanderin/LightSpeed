class Links {
    constructor () {


        this.bottom = document.getElementById('bottom')
        this.myStuff = document.getElementById('my-stuff')
        
        
        this.makeButton('google.com', 'git-button.png')
        
        this.makeButton('google.com', 'link-button.png')
        
        
        
    }
    
    makeButton(link, img) {
        
        this.button = document.createElement('button')
        this.button.setAttribute('id', 'links')
        this.a = document.createElement('a')
        this.a.setAttribute('href', link)
        this.img = document.createElement('img')
        this.button.appendChild(this.img)
        this.img.setAttribute('src', img)
        this.myStuff.appendChild(this.button)
        this.myStuff.appendChild(this.a)
        this.a.appendChild(this.button)

    }




}

export default Links;