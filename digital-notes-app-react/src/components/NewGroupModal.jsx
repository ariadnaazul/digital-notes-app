import React, { useState } from "react";



function NewGroupModal({ addGroup, changeModalVisibility, modalVisibility, groups }) {

    const [groupName, setGroupName] = useState("");
    const [groupCaption, setGroupCaption] = useState("");
    const [groupParent, setGroupParent] = useState("");


    const formFields = [
        { state: groupName, setState: setGroupName },
        { state: groupCaption, setState: setGroupCaption },
        { state: groupParent, setState: setGroupParent },
    ];


    const handleChange = (e, setFunction) => {
        setFunction(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addGroup(groupName, groupCaption, groupParent);
        formFields.forEach(({ setState }) => setState(""));
        changeModalVisibility();
    }

    return (
        <div id="new-group-modal" className='modal' style={{ display: modalVisibility }}>
            <div className='modal-content'>
                <span className="close" id="closeFormButton" onClick={changeModalVisibility}><b>&times;</b></span>
                <form id="new-group-form">
                    <div className="form-block">
                        <label htmlFor="groupName">Group Name:</label>
                        <input
                            type="text"
                            id='goupName'
                            name='goupName'
                            autoComplete='off'
                            value={groupName}
                            onChange={(e) => handleChange(e, setGroupName)}
                        />
                    </div>
                    <div className="form-block">
                        <label htmlFor="groupCaption">Caption:</label>
                        <textarea
                            className="no-resize caption"
                            id='groupCaption'
                            name='groupCaption'
                            cols="45"
                            rows="1"
                            value={groupCaption}
                            onChange={(e) => handleChange(e, setGroupCaption)} 
                        />
                    </div>
                    <div className="formBlock">
                        <label htmlFor="groupParent">Parent</label>
                        <select
                            id="groupParent"
                            name="groupParent"
                            autoComplete="on"
                            value={groupParent}
                            onChange={(e) => handleChange(e, setGroupParent)}
                        >
                            <option value="main">Main</option>
                           {groups.map(group => (
                                <option key={group.id} value={group.id}>{group.groupName}</option>
                                //As value is used the group id instead of the name because its used to count the group amount of children in BoardContent component and must don´t change even if the user edits the group name
                            ))}
                           
                        </select>
                    </div>
                    <div className="form-submit">
                        <button onClick={(e) => handleSubmit(e)}>Guardar</button>
                        <button onClick={changeModalVisibility}>Cancelar</button>
                    </div>
                </form>



            </div>
        </div>
    )
}

export default NewGroupModal