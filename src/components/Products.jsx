import React, { useState } from 'react'

const Products = ({ data }) => {
    const [page, setPage] = useState(1);
    const [ searchQuery , setSearchQuery] = useState("");

    console.log(data)

    const handleBack=()=>{
       page>=1 && setPage(page-1)
    }
    const handleNext=()=>{

        page<=9 && setPage(page+1)
    }

    const handlePage= (selectedPage)=>{

        setPage(selectedPage)
    }
    return (
        <div>

            <input type='text' value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)} />

            {
                data.length > 0 &&
                <div>


                    {data.filter((prod)=>prod.title.toLowerCase().includes(searchQuery.toLowerCase()))
                    .slice(page * 10 - 10, page * 10).map((prod, index) => {
                        return (

                            <div>
                                <p>{prod.title}</p>
                                <img src={prod.images[0]} height={"100px"} width={"100px"} />
                            </div>
                        )
                    })}

                </div>
            }


            <div style={{ margin: "40px 20px" }}>

               {page > 1 && <span onClick={handleBack}>Back</span> } 


                {
                    [...Array(data.length / 10)].map((_, i) => {
                        return <span onClick={()=>handlePage(i+1)} style={{margin:"5px "}}>{i+1}</span>
                    })
                }


              { page < 10 && <span onClick={handleNext}>Next</span> }  
            </div>


        </div>
    )
}

export default Products