import React, { useState } from "react";
import "./main.css";
import foldeIcon from "../../assets/images/folder-icon.png";
import listIcon from "../../assets/images/list-icon.png";
import allIcon from "../../assets/images/all-icon.png";
import trashIcon from "../../assets/images/trash-icon.png";
import { RightOutlined } from "@ant-design/icons";
import Tippy from "@tippyjs/react";
import { Modal, Tree, Typography, Input, Button } from "antd";
const { Title, Paragraph } = Typography;
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd"



const ProspectsSidebar = () => {
  const [isListModalOpen, setIsListModalOpen] = useState(false);
  const [isFolderModalOpen, setIsFolderModalOpen] = useState(false);

  const [listName, setlistName] = useState("New Prospects List");
  const [folderName, setfolderName] = useState("New Folder")

  const handleListChange = (e) => {
    setlistName(e.target.value);
  };

  const handleFolderChange = (e) => {
    setfolderName(e.target.value)
  }

  const showListModal = () => {
    setIsListModalOpen(true);
  };
  const handleListOk = () => {
    setIsListModalOpen(false);
  };
  const handleListCancel = () => {
    setIsListModalOpen(false);
  };

  const showFolderModal = () => {
    setIsFolderModalOpen(true);
  };
  const handleFolderOk = () => {
    setIsFolderModalOpen(false);
  };
  const handleFolderCancel = () => {
    setIsFolderModalOpen(false);
  };






  return (
    <div className="prospetcus-sidebar">
      <div className="upper">
        <div className="create">
          <Tippy content="Create new list">
            <img
              src={listIcon}
              alt="icon"
              className="list"
              onClick={showListModal}
            />
          </Tippy>
          <Tippy content="Create a new folder">
            <img src={foldeIcon} alt="icon" onClick={showFolderModal} />
          </Tippy>
        </div>

        <Modal
          title="Create a new prospects list"
          open={isListModalOpen}
          onOk={handleListOk}
          onCancel={handleListCancel}
          cancelButtonProps={{ style: { display: "none" } }}
          okButtonProps={{ style: { display: "none" } }}
        >
          <label>List name</label>
          <Input
            value={listName}
            onChange={handleListChange}
            className="list-create-input"
            placeholder="New Prospects List"
            maxLength={50}
          />
            <span className="helper-text">The name of the list can't contain more than 50 symbols</span>
          <Button className="modal-btn">Create</Button>
        </Modal>

        <Modal
          title="Create a new folder"
          open={isFolderModalOpen}
          onOk={handleFolderOk}
          onCancel={handleFolderCancel}
          cancelButtonProps={{ style: { display: "none" } }}
          okButtonProps={{ style: { display: "none" } }}
        >
          <label>Folder name</label>
          <Input className="list-create-input" value={folderName} onChange={handleFolderChange}  />
          <Button className="modal-btn">Create</Button>
        </Modal>

        <DragDropContext>
          
        </DragDropContext>

        <div className="folder">
          <div className="sub">
            <RightOutlined />
            <img src={foldeIcon} alt="icon" />
            <span>New Folder</span>
          </div>
        </div>

        <div className="folder">
          <div className="sub">
            <RightOutlined />
            <img src={foldeIcon} alt="icon" />
            <span>New Folder 1</span>
          </div>
        </div>

        <div className="new-list cursor-pointer">
          <span className="name">New Prospects List</span>
          <span className="number">0</span>
        </div>
      </div>

      <div className="bottom">
        <div className="item">
          <img src={allIcon} alt="all" />
          <span>0</span>
        </div>

        <div className="item">
          <img src={trashIcon} alt="trash" />
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default ProspectsSidebar;
