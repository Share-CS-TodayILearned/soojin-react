import React from 'react';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
    const notify = () => {
        toast.success("This is a test success", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
            hideProgressBar: true
        });

    };
    return (
        <div>
            <button onClick={notify}>Notify! - click me</button>
            <ToastContainer />
        </div>
    );
};

export default Toast;