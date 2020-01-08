import React from 'react'

function MoreUserInfo(props) {
    console.log(props.data)
    return (
        <div className="modal-body border" id="exampleModal">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4"><img className='rounded mb-3' style={{width: '160px'}} src={props.data.avatar_url} alt='User avatar'/></div>
                    <div class="col-md-4 ml-auto">
                        <h4 className='text-primary'><small>User ID:</small> {props.data.id}</h4>
                        <h4 className='text-primary'><small>Username:</small> {props.data.login}</h4>
                    </div>
                </div>
            </div>
            <table className="table table-bordered table-secondary table-striped text-center ">
                <thead>
                    <tr>
                        <th scope="col">Score</th>
                        <th>{props.data.score}</th>
                    </tr>
                    <tr>
                        <th scope="col">Visit User Profile</th>
                        <th><a href={props.data.html_url}>{props.data.html_url}</a></th>
                    </tr>
                    <tr>
                        <th scope="col">Type</th>
                        <th>{props.data.type}</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}
export default  MoreUserInfo