// ReactElement(Object) => HTML(Browser Understands)

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child-1" }, [
    React.createElement("h1", {}, "H1 tag of child-1"),
    React.createElement("h2", {}, "H2 tag of child-1"),
  ]),
  React.createElement("div", { id: "child-2" }, [
    React.createElement("h1", {}, "H1 tag of child-2"),
    React.createElement("h2", {}, "H2 tag of child-2"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//     xyz: "abc",
//   },
//   "Hello World"
// );

// console.log(heading); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
