import React from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface ActivityListProps {
    activities: Activity[];
}

export const ActivityList = ({ activities }: ActivityListProps) => {
    return (
        <Segment>
            <Item.Group>
                {activities.map(a => (
                    <Item key={a.id}>
                        <Item.Content>
                            <Item.Header as='a'>{a.title}</Item.Header>
                            <Item.Meta>{a.date}</Item.Meta>
                            <Item.Description>
                                <div>{a.description}</div>
                                <div>{a.city}, {a.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button floated='right' content='View' color='blue' />
                                <Label basic content={a.category}/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    );
}