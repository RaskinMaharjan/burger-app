import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const errorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error : null
        }

        componentWillMount() {
            this.requestInceptior = axios.interceptors.request.use(request => {
                this.setState({error : null});
                return request;
            })

            this.responseInceptior = axios.interceptors.response.use(response => response,
                 error => {
                this.setState({error : error});
            })
        }

        errorConfirmedHandler = () => {
            this.setState({error : null});
        }

        componentWillUpdate() {
            axios.interceptors.request.eject(this.requestInceptior);
            axios.interceptors.response.eject(this.responseInceptior);
        }

        render(){
            return (<Aux>
                <Modal show = {this.state.error}
                       modalClicked = {this.errorConfirmedHandler}> 
                       {this.state.error ? this.state.error.message : null}
                 </Modal>
                <WrappedComponent {...this.props} />
            </Aux>
            
            )
        }
    }
        
}

export default  errorHandler;