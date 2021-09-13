import { useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface ActivityFormProps {
    selectedActivity?: Activity;
    createOrEdit: (activity: Activity) => void;
    closeForm: () => void;
}

export const ActivityForm = ({selectedActivity, closeForm, createOrEdit}: ActivityFormProps) => {
    const initState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const [activity, setActivity] = useState(initState);

    const handleActivityChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        const updatedActivity = {
            ...activity, 
            [name]: value
        }
        setActivity(updatedActivity);
    }

    const handleSubmit = () => createOrEdit(activity);

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input name='title' placeholder='title' value={activity.title} onChange={handleActivityChange}/>
                <Form.TextArea name='description' placeholder='Description' value={activity.description} onChange={handleActivityChange}/>
                <Form.Input name='category' placeholder='Category' value={activity.category} onChange={handleActivityChange}/>
                <Form.Input name='date' placeholder='Date' value={activity.date} onChange={handleActivityChange}/>
                <Form.Input name='city' placeholder='City' value={activity.city} onChange={handleActivityChange}/>
                <Form.Input name='venue' placeholder='Venue' value={activity.venue} onChange={handleActivityChange}/>
                <Button floated='right' positive type='submit' content='Submit' onClick={handleSubmit}/>
                <Button floated='right' type='button' content='Cancel' onClick={closeForm}/>
            </Form>
        </Segment>
    );
}