import React, { useState } from 'react'
import "./style.css"
const FileExplorer = ({ explorer }) => {

    const [expanded, setExpanded] = useState(false)
    const [isOpen , setIsOpen] = useState(true)

    if (explorer.isFolder) {

        return (

            


            <div style={{ margin: "5px" }}>
                <div onClick={() => setExpanded(!expanded)}>

                    <span style={{marginLeft:"5px"}}> 📁 {explorer.name} </span>
                    <button>Add Folder</button>
                    <button>Add File</button>
                    { isOpen && <input style={{display:"block"}} type='text'  /> }
                </div>


                <div style={{ display: expanded ? 'block' : "none" }}>

                    {explorer.items.map((exp) => {
                        return <FileExplorer explorer={exp} /> 
                    })}

                </div>

            </div>
        )
    }
    else {
        return <span className='file'> 📄 {explorer.name} </span>
    }
}

export default FileExplorer