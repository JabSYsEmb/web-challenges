class RandomImage extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
          <h1>Hello World!</h1>
          <img src="https://picsum.photos/800" alt="random image">
      `;
  }
}

customElements.define("random-image", RandomImage);
