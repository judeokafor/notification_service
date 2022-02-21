type ServiceFailure = {
	serviceName: string;
	failedMethod: string;
	errorMessage: string;
	errorTitle: string;
};

const serviceFailure = (messageProps: ServiceFailure): string => {
	const { serviceName, failedMethod, errorMessage, errorTitle } = messageProps;

	return ` 
    Service: ${serviceName},
    Title: ${errorTitle}
    Failed Method: ${failedMethod},
    Error Message: ${errorMessage},
    `;
};

export default serviceFailure;
