import React from 'react';
import { Button } from 'semantic-ui-react';
import {Card, Image} from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface ActivityDetailProps {
    activity: Activity;
}

export const ActivityDetail = ({activity}: ActivityDetailProps) => {
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
                    <Button basic color='blue' content='Edit' />
                    <Button basic color='grey' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>

    );
}