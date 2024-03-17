import React, { useState } from 'react'

const Accor = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    if (Array.isArray(data)) {

        return (

            <div>

                {Array.isArray(data) &&

                    data.map((acc) => {
                        return (
                            <>

                                <div onClick={handleClick} style={{ border: "2px solid gray" }}>
                                    {acc.title}
                                </div>
                                <div style={{ marginLeft: "15px" }}>
                                    return <Accor data={acc.list} />
                                </div>
                            </>
                        )

                    })

                }

            </div>
        )
    }

    return (
        <div>

            <div onClick={handleClick} style={{ border: "2px solid gray" }}>
                {data.title || data}
            </div>

            {data.list &&

                data.list.map((acco) => {
                    if (isOpen) {
                        return <div style={{ marginLeft: "15px" }}>

                            <Accor data={acco} />
                        </div>
                    }

                })
            }
        </div>
    )
}

export default Accor