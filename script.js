
window.addEventListener("load", () => {
    console.log("loaded");
    // display_all();
  
    (async function listFetch() {
      let fetched = await fetch(
        "https://books-backend.p.goit.global/books/top-books"
      );
      data = await fetched.json();
      console.log(data);
      
    //   list.innerHTML += `
    //     <p class="list_item" onclick="display_all()">All Categories</p>
    //   `;
    //   data.forEach((element) => {
    //     let elementJSON = JSON.stringify(element).replace(/"/g, '&quot;');
    //     list.innerHTML += `
    //       <p class="list_item" onclick="display('${elementJSON}')">${element.list_name}</p>
    //     `;
    //   });
    })();
  });
    
    