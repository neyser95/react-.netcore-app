import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import { ActivityDetail } from '../details/ActivityDetail';
import { ActivityForm } from '../form/ActivityForm';
import { ActivityList } from './ActivityList';

interface ActivityDashboardProps {
    activities: Activity[];
    editMode: boolean;
    selectedActivity?: Activity;
    openForm: (id?: string) => void;
    closeForm: () => void;
    selectActivity: (id: string) => void;
    cancelSelectedActivity: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
}

export const ActivityDashboard = ({ 
    activities,
    editMode,
    selectedActivity,
    openForm,
    closeForm,
    selectActivity,
    createOrEdit,
    cancelSelectedActivity,
    deleteActivity
}: ActivityDashboardProps) => {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities} selectActivity={selectActivity} deleteActivity={deleteActivity}/>
            </Grid.Column>
            <Grid.Column width='6'>
                {
                    !editMode && selectedActivity && 
                    <ActivityDetail
                        activity={selectedActivity}
                        openForm={openForm}
                        cancelSelectedActivity={cancelSelectedActivity} 
                    />
                }
                {editMode && <ActivityForm selectedActivity={selectedActivity} closeForm={closeForm} createOrEdit={createOrEdit}/>}
            </Grid.Column>
        </Grid >
    )
}