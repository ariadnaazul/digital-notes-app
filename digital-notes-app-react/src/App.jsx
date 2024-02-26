import React, { useState } from 'react'

import {nanoid} from 'nanoid';

import Board from './components/Board'
import Header from './components/Header'
import NewGroupModal from './components/NewGroupModal'
import BoardContent from './components/BoardContent';





function App() {

  //Modal Visibility
  const [modalVisibility, setModalVisibility] = useState("block");

  const changeModalVisibility = () => {
    setModalVisibility((modalVisibility) => (modalVisibility === "block" ? "none" : "block"));
  }

  
  //Add Groups
  const [groups, setGroups] = useState([]);

  const addGroup = (groupName, groupCaption, groupParent) => {
    const newGrouop = { id: `group-${nanoid()}`, groupName: groupName, groupCaption: groupCaption, groupParent: groupParent}
    setGroups([...groups, newGrouop]);
  }

 /* console.log(groups);*/


  const [currentGroup, setCurrentGroup] = useState("") 


  return (
    <>
      <Board />
      <Header 
          changeModalVisibility={changeModalVisibility}
      />
      <BoardContent
        groups={groups}
        currentGroup={currentGroup}
      />
      <NewGroupModal 
        modalVisibility={modalVisibility} 
        changeModalVisibility={changeModalVisibility}
        addGroup={addGroup}
        groups={groups}
      />
    </>
  )
}

export default App