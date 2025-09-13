console.log("Hello, World!");

const app = documentElementById ("posts");

function mostrarPost (posts) {
    posts.forEach ( post => {
        const card = documentcreateElement ("div");
        card.classList.add ("post");


    // imagen 
    const img = document.createElement ("img");
    img.src = https//picsum.photos/200/200?random=id 

    //nombre 
    const user = document.createElement ("h2");
    nombre.textContent = user.nombre;
    card.appendChild(user);

    //descripcion

    const descripcion = document.createElement ("p");
    descripcion.textContent = producto.descripcion;
    card.appendChild(descripcion);

    //button like
    const buttonLike =document.createElement ("button");
    button.textContent ="like"
    button.classList = 

    // Button like
    const btnLike = document.createElement("button");
    btnLike.textContent = "like";
    btnLike.classList.add("like");
    btnLike.addEventListener("click", () => {
      btnLike.textContent = "like";
      btnLike.disabled = true;
    });
    card.appendChild(btnLike);

    //comentarios 

    async function loadPosts() {
  try {
    const response = await fetch("posts.json");
    if (!response.ok) throw new Error("No se pudo cargar el JSON externo");
    posts = await response.json();
  } catch (error) {
    console.warn("Usando datos de respaldo:", error.message);
    posts = fallbackPosts;

  }


  // Texto
    const text = document.createElement("p");
    text.className = "post-text";
    text.textContent = post.text;

    // Imagen
    const image = document.createElement("img");
    image.src = post.image;

    // Likes y botones
    const actions = document.createElement("div");
    actions.className = "post-actions";

    const likeBtn = document.createElement("button");
    likeBtn.className = "like-btn";
    likeBtn.textContent = "Like";
    likeBtn.addEventListener("click", () => {
      post.likes++;
      localStorage.setItem(`likes_${post.id}`, post.likes);
      renderPosts(); 
    });











    }


    )
}
