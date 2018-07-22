import React from "react";
import Section from "./Sections";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

class List extends React.Component {
  getListClasses(snapshot) {
    const draggingClass = snapshot.isDragging ? "list-dragging" : "";
    return `list-body ${draggingClass}`;
  }
  getDragHandleClasses(snapshot) {
    const draggingClass = snapshot.isDragging ? "list-draghandle-dragging" : "";
    return `list-draghandle ${draggingClass}`;
  }

  render() {
    return (
      <Draggable
        draggableId={`draggable-${this.props.id}`}
        index={this.props.index}
        key={this.props.id}
        type={"LIST"}
      >
        {(draggableprovided, draggableSnapshot) => {
          return (
            <div
              {...draggableprovided.draggableProps}
              ref={draggableprovided.innerRef}
              className="list"
            >
              <div
                className={this.getDragHandleClasses(draggableSnapshot)}
                {...draggableprovided.dragHandleProps}
              >
                LIST NAME: {this.props.id}
              </div>
              <Droppable
                droppableId={this.props.id}
                key={this.props.id}
                key={this.props.id}
                type="SECTION"
              >
                {(provided, snapshot) => {
                  return (
                    <div
                      ref={provided.innerRef}
                      className={this.getListClasses(draggableSnapshot)}
                      {...provided.droppableProps}
                    >
                      {this.props.listSections.map((section, index) => {
                        return (
                          <Section
                            id={section.id}
                            content={section.content}
                            index={index}
                            items={section.items}
                          />
                        );
                      })}

                      {provided.placeholder}
                    </div>
                  );
                }}
              </Droppable>
            </div>
          );
        }}
      </Draggable>
    );
  }
}
export default List;
