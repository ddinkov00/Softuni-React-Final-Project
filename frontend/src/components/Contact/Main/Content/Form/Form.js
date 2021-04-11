import { useHistory } from 'react-router-dom'

import * as contactService from '../../../../../services/contactService'

const Form = () => {
    let history = useHistory();

    const sendMessageHandler = async (e) => {
        e.preventDefault();

        const data = {
            name: e.target.name.value,
            phone: e.target.phone.value,
            title: e.target.title.value,
            message: e.target.message.value,
        }
        
        const res = await contactService.sendMessage(data);

        if (res.ok) {
            history.push('/');
        }
    }

    return (
        <div className="col-md-7">
            <form onSubmit={ sendMessageHandler }>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className="form-group">
                            <input type="text" name="name" className="form-control form-control-lg form-control-a" placeholder="Name" />
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="form-group">
                            <input type="text" name="phone" className="form-control form-control-lg form-control-a" placeholder="Phone" />
                        </div>
                    </div>
                    <div className="col-md-12 mb-3">
                        <div className="form-group">
                            <input type="text" name="title" className="form-control form-control-lg form-control-a" placeholder="Title" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <textarea className="form-control" name="message" cols="45" rows="8" placeholder="Message"></textarea>
                        </div>
                    </div>

                    <div className="col-md-12 text-center">
                        <button type="submit" className="btn btn-primary mt-3">Send message</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form;