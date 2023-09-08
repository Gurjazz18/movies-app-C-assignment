import React from 'react'
import { useSelector } from 'react-redux'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

const Favorites = () => {
    const data=useSelector((store)=>store.favarites)
    console.log(data)

  return (

    <>
        <h1>FavratesMovies</h1>

   
      <Table border="1px solid" >
    
	<Thead>
		<Tr>
			<Th>NO</Th>
			<Th>Title</Th>
			<Th>ID</Th>
			<Th>Releasing Date</Th>
			
		</Tr>
	</Thead>


	 <Tbody>
		{
            data.map((elem,i)=>(
        <Tr key={elem.id}>
                <Td>{i+1}</Td>
                <Td>{elem.title}</Td>
                <Td>{elem.id}</Td>
                <Td>{elem.release_date}</Td>
		
		</Tr>
            ))
        }
     </Tbody> 

     </Table> 


    </>   
  )
}

export default Favorites
