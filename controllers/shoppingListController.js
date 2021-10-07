let toDoList = [];

exports.getShoppingPage = (req, res) => {
 // let today = date.getTodayDateLong();
  //let today = date.getTodayDateShort();
  res.render("shoppingList.ejs", { myToDo: toDoList });
};

exports.postNewItem = (req, res) => {
  let userTask = req.body.newTask;
  toDoList.push(userTask);
  console.log(toDoList);
  res.redirect("/shoppingList");
};

exports.deleteItem = (req, res) => {
  let itemToDelete = req.body.checkbox;
  //console.log(req.body.checkbox);
  for (let i = 0; i < toDoList.length; i++) {
    if (toDoList[i] === itemToDelete) {
      //kontrollime nii tüüpi kui ka sisu
      toDoList.splice(i, 1);
    }
  }
  res.redirect("/shoppingList");
};
