import React, { useEffect, useState} from 'react';
import axios from "axios";

const Landing = () => {

  const [test, changetest] = useState("fdsfs")

  useEffect(() => {
   async function test() {
      try {
        const response = await axios.get("http://localhost:5000/api/test")
        changetest(response.data.test)
        } catch(err) {
          console.log(err)
        }
        
      }
      test()
    }, [])
    

  return (
    <div>
      Landing
      <p>{test}</p>
    </div>
  )
}

export default Landing
