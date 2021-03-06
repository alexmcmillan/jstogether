import React from 'react'
import Component from './component';

import AppActions from '../action/app';

export default class UserProfile extends Component {
	/**
	 *
	 */
	render () {
		const content = [];
		const user = this.props.user;

		if (!user) {
			return this.renderGlobalOverview();
		}

		return (
			<div className='userProfile'>
				<h1>{user.username}</h1>
			</div>
		);
	}

	/**
	 *
	 */
	renderGlobalOverview () {
		return (
			<div className='userProfile'>
				<h1 >{'Users'}</h1>
			</div>
		);
	}
}
