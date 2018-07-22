import React from "react";
import List from "./List";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./App.css";

let itemsOffset = 0;

class App extends React.Component {
  constructor() {
    super();
    const listsOrder = ["items", "selected", "liran"];
    const sections = listsOrder.reduce(
      (accumulator, currentList) => {
        accumulator[currentList] = getSections(2, accumulator.offest);
        accumulator.offest += 2;
        return accumulator;
      },
      { offest: 0 }
    );
    this.state = {
      listsOrder,
      ...sections
    };
  }

  onDragStart = () => {
    console.log("start drag");
  };
  onDragUpdate = () => {
    console.log("dragging ... ");
  };
  onDragEnd = result => {
    // const nextState = { ...this.state };
    // const { destination, source } = result;
    console.log(result);
    // const sourceList = [...this.state[source.droppableId]];
    // const destinationList = [...this.state[destination.droppableId]];
    // const [removed] = sourceList.splice(source.index, 1);
    // if (destination.droppableId === source.droppableId) {
    //   sourceList.splice(destination.index, 0, removed);
    // } else {
    //   destinationList.splice(destination.index, 0, removed);
    //   nextState[destination.droppableId] = destinationList;
    // }
    // nextState[source.droppableId] = sourceList;
    // this.setState(nextState);
  };

  render() {
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}
      >
        <Droppable droppableId={"lists-Droppable"} type="LIST">
          {(provided, snapshot) => {
            return (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {this.state.listsOrder.map((listId, index) => {
                  return (
                    <List
                      id={listId}
                      listSections={this.state[listId]}
                      index={index}
                    />
                  );
                })}
              </div>
            );
          }}
        </Droppable>
        {/* <Lists lists={this.state} / */}
      </DragDropContext>
    );
  }
}

export default App;

const getItems = (count = 0) => {
  itemsOffset += 10;
  console.log(itemsOffset);
  return Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${itemsOffset + k}`,
    content: `item ${itemsOffset + k}`
  }));
};
const getSections = (count, offset = 0, type) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `section-${k + offset}`,
    content: `section ${k + offset}`,
    items: getItems(2)
  }));
