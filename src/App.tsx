import React, {useState} from 'react';
import { BodyWraper , StyledButton, StyledForm, StyledInput, StyledButtonForm, StyledTableWraper} from './styles';

function App() {

  // const [content,setContent] = useState<boolean>(false);

  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [watering, setWatering] = useState<string>('')
  const [preferences, setPreferences] = useState<string>('')

  interface PlantProps {
    name: string;
    description: string;
    category: string;
    watering: string;
    preferences: string;
  }



  const [plantList, setPlantList] = useState <Array<PlantProps>>([])


  // const toogleContent = () => {
  //   setContent(prev => !prev)
  //   console.log('content');
  // }

  const handleChangeName = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    const value = (e.target as HTMLInputElement).value;
    setName(value)
  }
  const handleChangeDescription = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    const value = (e.target as HTMLInputElement).value;
    setDescription(value)
  }
  const handleChangeCategory = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    const value = (e.target as HTMLInputElement).value;
    setCategory(value)
  }
  const handleChangeWatering = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    const value = (e.target as HTMLInputElement).value;
    setWatering(value)
  }

  const handleChangePreferences = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    const value = (e.target as HTMLInputElement).value;
    setPreferences(value)
  }


  const handleSubmit = (e: React.FormEvent) => {
    setPlantList([...plantList, {name, description, category, watering, preferences}]);
    e.preventDefault();
    setName('');
    setDescription('');
    setCategory('');
    setWatering('');
    setPreferences('');
  }

  return (
    <BodyWraper >  
        <form onSubmit={handleSubmit} >
        <StyledForm>
          <StyledInput type="text" onChange={handleChangeName} placeholder='name' value={name}/>
          <StyledInput type="text" onChange={handleChangeDescription} placeholder='description' value={description}/>
          <StyledInput type="text" onChange={handleChangeCategory} placeholder='category' value={category}/>
          <StyledInput type="text" onChange={handleChangeWatering} placeholder='watering'value={watering}/>
          <StyledInput type="text" onChange={handleChangePreferences} placeholder='preferences' value={preferences}/>
        </StyledForm>
          <StyledButtonForm  type="submit">ADD</StyledButtonForm>
      </form>
      <StyledButton >ADD PLANT</StyledButton>
      <StyledTableWraper>
            {
              plantList.map((plant, index) =>
                <table key={index}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Watering</th>
                        <th>Prefferences</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{index}</td>
                        <td>{plant.name}</td>
                        <td>{plant.description}</td>
                        <td>{plant.category}</td>
                        <td>{plant.watering}</td>
                        <td>{plant.preferences}</td>
                      </tr> 
                    </tbody>

                </table>
                )
            }
      </StyledTableWraper>
    </BodyWraper>

  );
}

export default App;
