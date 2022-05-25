import React, {useState, useEffect} from 'react';
import { BodyWraper , StyledButton, StyledForm, StyledInput, StyledButtonForm, StyledTableWraper, StyledListItem} from './styles';

function App() {

  // const [content,setContent] = useState<boolean>(false);

  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [watering, setWatering] = useState<string>('')
  const [preferences, setPreferences] = useState<string>('')

  interface PlantProps {
    index?: number;
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



  useEffect(()=> {
   const data = JSON.parse(localStorage.getItem('plantList') || '')
   if(data){
     setPlantList(data);
   }
  },[])

  useEffect(() => {
    if(plantList.length > 0 ){
      localStorage.setItem('plantList', JSON.stringify(plantList));
      console.log('added data')
    }
  },[plantList])


  const removeItems = (index: number) => {
      const newArray = [...plantList];
      newArray.splice(index, 1);
      setPlantList(newArray);
  }



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
                <StyledListItem key={index}>
                    <div>
                      <div>
                          <p>ID</p>
                          <p>Name</p>
                          <p>Description</p>
                          <p>Category</p>
                          <p>Watering</p>
                          <p>Prefferences</p>
                        </div>
                    </div>
                    <div>
                      <div>
                        <p>{index}</p>
                        <p>{plant.name}</p>
                        <p>{plant.description}</p>
                        <p>{plant.category}</p>
                        <p>{plant.watering}</p>
                        <p>{plant.preferences}</p>
                      </div> 
                    </div>
                    <StyledButtonForm onClick={() => removeItems(index)}>x</StyledButtonForm>
                </StyledListItem>
                
                )
            }
      </StyledTableWraper>
    </BodyWraper>

  );
}

export default App;
