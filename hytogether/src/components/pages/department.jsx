import React from 'react';
import '../../App.scss';
function Department({deparment}) {
    return (
        <div>
            <img src="https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="" />
            {deparment}
        </div>
    );
}

export default Department;