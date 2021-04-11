import { useEffect, useState } from 'react'

import * as identityService from '../../../services/identityService'

const Messages = () => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        identityService.GetAll()
            .then(res => setMessages(res));
    }, []);

    const messageItems = messages.map((c) =>
        <tr>
            <td>{c.name}</td>
            <td>{c.pone}</td>
            <td>{c.message}</td>
        </tr>
    );

    return (
        <div className="col-md-7 mt-md-0 mt-sm-5">
            <h3>Contact messages</h3>
            <table className="table table-striped mt-4">
                <thead className="bg-primary">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Message</th>
                    </tr>
                </thead>
                <tbody>
                    { messageItems }
                </tbody>
            </table>
        </div>
    )
}

export default Messages;