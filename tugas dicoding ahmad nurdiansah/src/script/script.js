class MyProject extends HTMLElement {
 
    connectedCallback() {
      const name = "nrdn movie";
      this.innerHTML = `
      <h1>${name}</h1>
      `;
    }
}
    
   customElements.define("my-project", MyProject);