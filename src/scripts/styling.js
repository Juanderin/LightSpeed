
class titleStyling {
    constructor() {
        

this.title = document.getElementById('title')

this.el1 = document.createElement('span');
this.el1l = document.createTextNode('L');
this.el1.appendChild(this.el1l);
this.el1.setAttribute('style','--i:1')

this.el2 = document.createElement('span');
this.el2i = document.createTextNode('I');
this.el2.appendChild(this.el2i);
this.el2.setAttribute('style','--i:2')

this.el3 = document.createElement('span');
this.el3g = document.createTextNode('G');
this.el3.appendChild(this.el3g);
this.el3.setAttribute('style','--i:3')

this.el4 = document.createElement('span');
this.el4h = document.createTextNode('H');
this.el4.appendChild(this.el4h);
this.el4.setAttribute('style','--i:4')

this.el5 = document.createElement('span');
this.el5t = document.createTextNode('T');
this.el5.appendChild(this.el5t);
this.el5.setAttribute('style','--i:5')

this.el6 = document.createElement('span');
this.el6s = document.createTextNode('S');
this.el6.appendChild(this.el6s)
this.el6.setAttribute('style','--i:6')

this.el7 = document.createElement('span');
this.el7p = document.createTextNode('P');
this.el7.appendChild(this.el7p)
this.el7.setAttribute('style','--i:7')

this.el8 = document.createElement('span');
this.el8e = document.createTextNode('E');
this.el8.appendChild(this.el8e)
this.el8.setAttribute('style','--i:8')

this.el9 = document.createElement('span');
this.el9e = document.createTextNode('E');
this.el9.appendChild(this.el9e)
this.el9.setAttribute('style','--i:9')


this.el10 = document.createElement('span');
this.el10d = document.createTextNode('D');
this.el10.appendChild(this.el10d)
this.el10.setAttribute('style','--i:10')

this.title.appendChild(this.el1)
this.title.appendChild(this.el2)
this.title.appendChild(this.el3)
this.title.appendChild(this.el4)
this.title.appendChild(this.el5)
this.title.appendChild(this.el6)
this.title.appendChild(this.el7)
this.title.appendChild(this.el8)
this.title.appendChild(this.el9)
this.title.appendChild(this.el10)


    }
}

export default titleStyling;