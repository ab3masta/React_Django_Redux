import axios from 'axios';
import { GET_LEADS, DELETE_LEADS, ADD_LEAD } from './types';
import { createMessage , returnErrors} from './messages';
import { tokenConfig } from './auth';
//GET LEAds

export const getLeads = () => (dispatch , getState) => {
    axios.get('/api/leads/',tokenConfig(getState)).then(res => {
        dispatch({
            type: GET_LEADS,
            payload: res.data
        });
    }).catch(error => {
        dispatch(returnErrors(error.response.data, error.response.status));
    });
}

// DELETE LEAD
export const deleteLead = id => (dispatch , getState) => {
    axios.delete(`/api/leads/${id}/`,tokenConfig(getState)).then(res => {
        dispatch(createMessage({deleteLead : "Lead Deleted"}));
        dispatch({
            type: DELETE_LEADS,
            payload: id
        });
    }).catch(error => console.log(error));
}
// Add Lead
export const addLead = (lead) => (dispatch , getState) => {
    axios.post(`/api/leads/`, lead , tokenConfig(getState)).then(res => {
        dispatch(createMessage({addLead : "Lead Added"}));
        dispatch({
            type: ADD_LEAD,
            payload: res.data
        });
    }).catch(error => dispatch(returnErrors(error.response.data, error.response.status)));
}
    