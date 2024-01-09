function customRender(reactElement,mainContainer){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target);
    // mainContainer.appendChild(domElement);
    // if we have more attribute then we have to write too many times so we are using loops
    for(props in reactElement.props){
        domElement.setAttribute(props,reactElement.props[props])
    }
    mainContainer.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:'Click me to visit Google'
}

const mainContainer=document.getElementById("root");

customRender(reactElement,mainContainer);