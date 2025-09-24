
function customRender(reactElements,element){
    
    const domElement= document.createElement(reactElements.type);
    domElement.innerHTML= reactElement.props.children;
    for(const prop in reactElements.props){
        if(prop === "children") continue;
        domElement.setAttribute(prop, reactElements.props[prop])
    }
    element.appendChild(domElement);
}


const reactElement= {
    type:"a",
    props:{
        href: "www.google.com",
        target: "_blank",
        children: "Click me"
    }
}

const container = document.getElementById("root");
const element = document.createElement("h3");
element.innerText = "Hello, Custom React!";
container.appendChild(element); 

customRender(reactElement, container);


Aditi@12