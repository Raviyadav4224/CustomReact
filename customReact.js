const mainContainer = document.getElementById("root");

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit",
  // variables which we pass in HTML
};

const reactElementDiv = {
    type: "div",
    props: {
    },
    children: "This is Div",
    // variables which we pass in HTML
  };

  
//Custom React render function to add own created element into the root div

function customReactRender(reactElement, mainContainer) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  for (const key in reactElement.props) {
    domElement.setAttribute(key, reactElement.props[key]);
  }

  mainContainer.appendChild(domElement);
}

// Under the hood react is rendering the created components using its own render function
//here we have created our own function to render the element
customReactRender(reactElement,mainContainer)
customReactRender(reactElementDiv,mainContainer)