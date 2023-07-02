// function traverse (currentTree, id, isFolder, name) {

//   if (id === currentTree.id){
//     currentTree.items.unshift({
//       id: new Date().getTime(),
//       name: name,
//       isFolder: isFolder,
//       items:[]
//     })

//     return currentTree
//   }

//   let newnode = [];
//   currentTree.items.map((n)=>{
//       newnode = traverse(n,id,isFolder,name);
//   })

//   return {...currentTree.items, newnode}

// }

// traverse(explorer, "3", true, "newfilename")

const explorer = {
  id: "1",
  name: "root",
  isFolder: true,
  items: [
    {
      id: "2",
      name: "public",
      isFolder: true,
      items: [
        {
          id: "3",
          name: "public nested 1",
          isFolder: true,
          items: [
            {
              id: "4",
              name: "index.html",
              isFolder: false,
              items: []
            },
            {
              id: "5",
              name: "hello.html",
              isFolder: false,
              items: []
            }
          ]
        },
        {
          id: "6",
          name: "public_nested_file",
          isFolder: false,
          items: []
        }
      ]
    },
    {
      id: "7",
      name: "src",
      isFolder: true,
      items: [
        {
          id: "8",
          name: "App.js",
          isFolder: false,
          items: []
        },
        {
          id: "9",
          name: "Index.js",
          isFolder: false,
          items: []
        },
        {
          id: "10",
          name: "styles.css",
          isFolder: false,
          items: []
        }
      ]
    },
    {
      id: "11",
      name: "package.json",
      isFolder: false,
      items: []
    }
  ]
};

export default explorer;
