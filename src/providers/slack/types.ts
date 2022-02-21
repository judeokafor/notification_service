export type SlackProviderConstructor = {
	env: {
		_SLACK_TEAM_ID: string;
		_SLACK_CHANNEL_ID: string;
		_SLACK_TOKEN: string;
	};
};
