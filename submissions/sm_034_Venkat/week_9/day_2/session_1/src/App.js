import React from 'react';
import './App.css';
import axios from 'axios'

// const axios = require('axios'); 
// This is an alternative to import statements, don't worry about it!
// or
// import axios from 'axios'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			userSearchSelected: true,
			repoName: '',
			userName: '',
			topicName: '',
			data: [],
			reposData: [],
			showUserTable: false,
			showRepo_TopicTable: false,
			person: '',
			profileOnly: false,
			profileData: []
		}
		this.repoSearchApiRequest = this.repoSearchApiRequest.bind(this)
		this.userSearchApiRequest = this.userSearchApiRequest.bind(this)
		this.showProfileInfo = this.showProfileInfo.bind(this)
	}

	userSearchApiRequest = (user) => {
		user = this.state.userName
		console.log("userSearch will be done..! " + this.state.userName)
		const userConfig = {
			method: 'get',
			url: 'https://api.github.com/search/users?q=' + this.state.userName

			// baseURL: 'https://api.github.com/search/users?q=',
			// url: this.state.userName // this is not working .,
		}
		axios(userConfig)
			.then(result => {
				console.log(result)
				alert("User data obtaind.Click -Show Table- to see")
				// let info= result.data.items
				this.setState({
					data: result.data.items
				})
			})
		document.getElementById("userSearch").value = ""
	}

	repoSearchApiRequest = (repo, topic) => {
		repo = this.state.repoName
		topic = this.state.topicName
		console.log("repoSearch will be done..! " + repo + " " + topic)
		const repoConfig = {
			method: 'get',
			url: 'https://api.github.com/search/repositories?q=' + repo + '+language:' + topic + '&sort=stars&order=desc',
		}
		axios(repoConfig)
			.then(result => {
				console.log(result)
				alert("Click on -Show table- to see repo details by topic")
				this.setState({
					reposData: result.data.items
				})
			})
		document.getElementById("repoSearch").value = ""
		document.getElementById("topicSearch").value = ""
	}

	showProfileInfo = (url) => {
		console.log("repos url is : " + url)
		this.setState({
			profileOnly: true,
			// profileReposUrl: url
		})
		const urlConfig = {
			method: 'get',
			url: url,
		}
		axios(urlConfig)
			.then(result => {
				console.log(result)
				this.setState({
					person: result.data[0].owner.login,
					profileData: result.data
				})
			})
	}

	render() {
		console.log(this.state.profileOnly, " profile only status")
		return (<div>
			<div className="d-flex justify-content-around m-auto bg-secondary p-2 align-items-end">
				<img src={"https://webstockreview.net/images/github-icon-png-17.png"}
					 alt="github.jpg" height="60px" className="rounded-circle p-1 border border-dark" />
				<p className="h2">github Search</p>
			</div>
			{(this.state.profileOnly) ? (
				<div id="profileDiv" className="bg-secondary m-2">
					<div className="d-flex justify-content-around bg-info p-3">
						<p className="h3 text-danger">{this.state.person}</p>
						<button
							onClick={() => this.setState({ profileOnly: false })}
							className="text-danger px-4">Back</button>
					</div>
					<div className="text-white mx-5">
						{this.state.profileData.map(each =>
							<div className="m-2 border border-dark p-2" key={each.id}>
								<p className="h4 text-info">Repositority Name is : {each.full_name}</p>
								<p>Privacy Status : {each.private ? "Yes,It is Prive" : "Not private"}</p>
								<p>This repo url is : {each.url}</p>
								<p>Created At : {each.created_at}</p>
								<p>Last Updated At : {each.updated_at}</p>
								<p>For cloning Use this : {each.clone_url}</p>
								<p>Number of Visitors are : {each.watchers_count}</p>
								<p>Open issues count is : {each.open_issues_count}</p>
							</div>
						)}
					</div>
				</div>
			) :
				(<div className="m-1 text-center text-monospace">
					<select className="p-1 mt-3"
						onChange={() =>
							this.setState({
								userSearchSelected: !this.state.userSearchSelected
							})}>
						<option value="userName">
							User Name
							</option>
						<option value="repoAndTopic">
							repo & Topic Name
							</option>
					</select>
					<p><small className="text-muted">( Select search option )</small></p>

					<div className="m-2 p-2 border d-flex flex-wrap justify-content-around">
						<div>
							{this.state.userSearchSelected ? (
								<div>
									<label>
										Search for User :
										<input type="text" id="userSearch" placeholder=" Enter name here"
											value={this.state.userName}
											onChange={(e) => this.setState({ userName: e.target.value })} />
									</label>
									<div className="d-flex justify-content-around">
										<button id="searchBtn" onClick={this.userSearchApiRequest}>Search</button>
										<button id="showUserTableBtn"
											onClick={() => this.setState({
												showUserTable: !this.state.showUserTable,
												showRepo_TopicTable: false
											})}>
											Show Table
									</button>
									</div>
								</div>
							) : (<div>
								<label>
									Search By repo name & Topic :
									<input type="text" id="repoSearch" value={this.state.repoName}
										onChange={(e) => this.setState({ repoName: e.target.value })} 
										placeholder="enter repo name" className="m-2" />
									<input type="text" id="topicSearch" value={this.state.topicName}
										onChange={(e) => this.setState({ topicName: e.target.value })}
										placeholder="Enter Topic name"  className="m-2" />
								</label>
								<div className="d-flex justify-content-around">
									<button id="searchBtn" onClick={this.repoSearchApiRequest}>
										Search
									</button>
									<button id="showRepo_TopicTableBtn"
										onClick={() => this.setState({
											showUserTable: false,
											showRepo_TopicTable: !this.state.showRepo_TopicTable
										})}>
										Show Table
									</button>
								</div>
							</div>)}
						</div>
					</div>

					{(this.state.showUserTable) ? (
						<div id="UserTableDiv">
							<table className="table text-justify">
								<thead>
									<tr>
										<th scope="col">Profie Picture"</th>
										<th scope="col">Name</th>
										<th scope="col">More</th>
									</tr>
								</thead>
								<tbody id="tableBody">
									{this.state.data.map(each =>
										<tr key={each.id}>
											<td><img src={each.avatar_url} alt="user.jpg" className="h-25" /></td>
											<td>{each.login}</td>
											<td>
												<button onClick={() => this.showProfileInfo(each.repos_url)}>
													Show Profie
												</button>
											</td>
										</tr>
									)}
								</tbody>
							</table>
						</div>) : console.log("UsersTable is hided")
					}

					{(this.state.showRepo_TopicTable) ? (
						<div id="Repo_TopicTableDiv">
							<div>
								<p>Selected REPO name is : {this.state.repoName}</p>
								<p>Selected TOPIC name is : {this.state.topicName}</p>
							</div>
							<table className="table text-justify">
								<thead>
									<tr>
										<th scope="col">Repo Name</th>
										<th scope="col">Language</th>
										<th scope="col">Owner Name</th>
										<th scope="col">Watchers</th>
										<th scope="col">More</th>
									</tr>
								</thead>
								<tbody id="tableBody">
									{this.state.reposData.map(each =>
										<tr key={each.id}>
											<td>{each.name}</td>
											<td>{each.language}</td>
											<td>{each.owner.login}</td>
											<td>{each.watchers}</td>
											<td>
												<button onClick={() => this.showProfileInfo(each.owner.repos_url)}>
													Show Profie
												</button>
											</td>
										</tr>
									)}
								</tbody>
							</table>
						</div>) : console.log("Repo & Topic Based Table is hided")
					}
				</div>
				)}
		</div>
		)
	}
}

export default App;
