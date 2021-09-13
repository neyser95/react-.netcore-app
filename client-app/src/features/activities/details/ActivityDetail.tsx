import React from 'react';
import { Button } from 'semantic-ui-react';
import {Card, Image} from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface ActivityDetailProps {
    activity: Activity;
    openForm: (id?: string) => void;
    cancelSelectedActivity: () => void;
}

export const ActivityDetail = ({activity, openForm, cancelSelectedActivity}: ActivityDetailProps) => {
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`}/>
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button basic color='blue' content='Edit' onClick={() => openForm(activity.id)} />
                    <Button basic color='grey' content='Cancel' onClick={cancelSelectedActivity}/>
                </Button.Group>
            </Card.Content>
        </Card>

    );
}