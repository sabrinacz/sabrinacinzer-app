/* ARRAY OF DATA */

const pets = [
    {
        "id": 1,
        "name": "Terry",
        "type": "dog",
        "age": 2,
        "time": "años",
        "description": "Cuando quiero mimos me encanta venir a pedírtelos, me llevo bien con todo. Me adapto a cualquier espacio. Soy juguetón y me encanta pasear.",
        "pictureUrl": `${process.env.PUBLIC_URL}/assets/Terry.jpeg`
    },
    {
        "id": 2,
        "name": "Magma",
        "type": "cat",
        "age": 1.5,
        "time": "años",
        "description": "Soy super juguetona y mimosa. Me encanta dormir en la cama y estar acompañada. Me llevo bien con gatos.",
        "pictureUrl": `${process.env.PUBLIC_URL}/assets/Magma.jpeg`
    },
    {
        "id": 3,
        "name": "Diggle",
        "type": "dog",
        "age": 1,
        "time": "años",
        "description": "Soy muy amoroso y cariñoso, me encanta la compañía y jugar. Disfruto mucho de pasear y me gustaría que mi casita tenga otros perritos.",
        "pictureUrl": `${process.env.PUBLIC_URL}/assets/Diggle.jpeg`
    },
    {
        "id": 4,
        "name": "Lorcan",
        "type": "dog",
        "age": 1,
        "time": "meses",
        "description": "Soy muy cariñoso, me gusta jugar con peluches y que me hagan muchos mimos.",
        "pictureUrl": `${process.env.PUBLIC_URL}/assets/Lorcan.jpeg`
    }

    

]

const getData = new Promise((resolve, reject) => {
    let afterPromises = true;
    // let afterPromises = false;
    setTimeout(() => {
      if (afterPromises) {
        resolve(pets);
      } else {
        reject("Failed to get data");
      }
    }, 4000);
  });
  
  export default getData;
  