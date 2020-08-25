import React, { Component , Fragment} from 'react';
import Form from './Form';
import Leads from './Leads';

export default class Dashboard extends Component {
    render() {
        return (
           
           <Fragment>
               <Form />
               <Leads />
           </Fragment>
        )
    }
}
