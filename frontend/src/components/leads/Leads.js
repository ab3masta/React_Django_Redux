import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { getLeads, deleteLead} from '../../actions/leads';

export class Leads extends Component {
    static propTyp = {
        leads: propTypes.array.isRequired,
        getLeads: propTypes.func.isRequired,
        deleteLead: propTypes.func.isRequired
    };
    componentDidMount() {
        this.props.getLeads();
    }
    render() {
        return (
            <div>
                <Fragment>
                    <h2>Leads</h2>
                    <div className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Message</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.leads.map(lead => {
                                return (
                                    <tr key={lead.id}>
                                    <td>{lead.id}</td>
                                    <td>{lead.name}</td>
                                    <td>{lead.email}</td>
                                    <td>{lead.message}</td>
                                    <td>
                                        <button onClick={this.props.deleteLead.bind(this, lead.id)} className="btn btn-danger btn-sm">Delete</button>
                                    </td>
                                </tr>
                                );
                            })}
                        </tbody>
                    </div>
                </Fragment>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    leads: state.leads.leads
});

export default connect(mapStateToProps, { getLeads , deleteLead })(Leads);
