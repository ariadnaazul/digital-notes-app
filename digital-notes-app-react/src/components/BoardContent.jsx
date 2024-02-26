import React from 'react'
import GroupCard from './GroupCard'

function BoardContent({groups, currentGroup}) {


  const showGroups = groups.filter(group => group.groupParent === currentGroup);
  
  console.log(groups)

  //counts the amount of children of a each group
  const countChildren = (groupId) => {
    return groups.filter(group => group.groupParent === groupId).length;
};


  return (
    <div id="board-content">
        {showGroups.map(group => (
          <GroupCard 
            key={group.id} 
            groupName={group.groupName}  
            groupLength={countChildren(group.id)} //it´s important to use the id instead of the name because the user is enabled to edit the name 
          />
      ))}
      
    </div>
  )
}

export default BoardContent