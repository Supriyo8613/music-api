import React from 'react'

const AddSongs = () => {
  return (
   <form className='container'>
       <label > Song name </label>
       <input type='text'></input> <br></br>
       <label >Date Released </label>
       <input type='text'></input><br></br>
       <label >Artist </label>
       <label for="artist">Choose an artists:</label>

<select name="cars" id="cars">
  <option value="KK">KK</option>
  <option value="MOHIT">MOHIT</option>
  <option value="arijit">arijit</option>
  <option value="mod irfan">mod irfan</option>
   
</select><br>
</br>
<button>submit </button>      
   </form> 
  )
}

export default AddSongs 