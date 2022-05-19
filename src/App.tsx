import React, {useState} from 'react';
import './App.css';

function App() {

  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [watering, setWatering] = useState<string>('')
  const [prefferences, setPreferences] = useState<string>('')

  interface PlantProps {
    name: string;
    description: string;
    category: string;
    watering: string;
    prefferences: string;
  }



  const [plantList, setPlantList] = useState <Array<PlantProps>>([])

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

  const handleChangePrefferences = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    const value = (e.target as HTMLInputElement).value;
    setPreferences(value)
  }


  const handleSubmit = (e: React.FormEvent) => {
    setPlantList([...plantList, {name:name, description:description, category:category, watering:watering, prefferences:prefferences}]);
    e.preventDefault();
    console.log(plantList);
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
          <input type="text" onChange={handleChangeName} placeholder='name' value={name}/>
          <input type="text" onChange={handleChangeDescription} placeholder='description' value={description}/>
          <input type="text" onChange={handleChangeCategory} placeholder='category' value={category}/>
          <input type="text" onChange={handleChangeWatering} placeholder='watering'value={watering}/>
          <input type="text" onChange={handleChangePrefferences} placeholder='prefferences' value={prefferences}/>
          <button  type="submit">Click</button>
        </div>
      </form>
      <div>
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
                        <td>{plant.prefferences}</td>
                      </tr> 
                    </tbody>

                </table>
)
            }
      </div>
    </div>

  );
}

export default App;
