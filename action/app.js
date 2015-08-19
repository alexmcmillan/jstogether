import AppDispatcher from '../dispatcher/app';
import Constant from '../constant/app';
import ServerActions from './server';

import UserApi from '../api/user';
import ProjectApi from '../api/project';

export default {
	/**
	 *
	 */
	dumpStore (store) {
		AppDispatcher.dispatch({
			actionType: Constant.DUMP_STORE,
			store
		});
	},

	/**
	 *
	 */
	echo (message) {
		AppDispatcher.dispatch({
			actionType: Constant.ECHO,
			message
		});
	},

	/**
	 *
	 */
	navigate (page) {
		AppDispatcher.dispatch({
			actionType: Constant.NAVIGATE,
			page
		});
	},
	
	/**
	 *
	 */
	login (credentials) {
		AppDispatcher.dispatch({
			actionType: Constant.LOGIN_ATTEMPT
		});

		UserApi.login(credentials)
		.done(ServerActions.loginSuccess)
		.fail(ServerActions.loginFail);
	},

	/**
	 *
	 */
	logout () {
		AppDispatcher.dispatch({
			actionType: Constant.LOGOUT_ATTEMPT
		});

		UserApi.logout()
		.done(ServerActions.logoutSuccess);
	},

	/**
	 *
	 */
	register (credentials) {
		AppDispatcher.dispatch({
			actionType: Constant.REGISTER_ATTEMPT
		});

		UserApi.register(credentials)
		.done(ServerActions.registerSuccess)
		.fail(ServerActions.registerFail);
	},

	/**
	 *
	 */
	fetchProjects () {
		AppDispatcher.dispatch({
			actionType: Constant.FETCH_PROJECTS_ATTEMPT
		});

		ProjectApi.fetchProjects()
		.done(ServerActions.fetchProjectsSuccess);
	},

	/**
	 *
	 */
	selectProject (project) {
		AppDispatcher.dispatch({
			actionType: Constant.SELECT_PROJECT,
			project
		});
	},

	/**
	 *
	 */
	createProject (project) {
		AppDispatcher.dispatch({
			actionType: Constant.CREATE_PROJECT_ATTEMPT,
			project
		});

		ProjectApi.createProject(project)
		.done(ServerActions.createProjectSuccess)
		.fail(ServerActions.createProjectFail);
	},

	/**
	 *
	 */
	deleteProject (projectId) {
		AppDispatcher.dispatch({
			actionType: Constant.DELETE_PROJECT_ATTEMPT,
			projectId
		});

		ProjectApi.deleteProject(projectId)
		.done(ServerActions.deleteProjectSuccess)
		.fail(ServerActions.deleteProjectFail);
	}
};