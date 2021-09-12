import React from 'react';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
import { Activity } from './../models/activity';
const {useState, useEffect} = React;

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  
  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => setActivities(response.data));
  }, []);

  return (
    <div>
      <Header as='h2' icon='users' content={'Reactivites'}/>
        <List>
          {activities.map(a => (
            <List.Item key={a.id}> 
              {a.title}
            </List.Item>
          ))}
        </List>
    </div>
  );
}

export default App;
