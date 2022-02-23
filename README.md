# {NOTIFICATION SERRVICE} #

**{Add short overview description of service here}**

## Prerequiste Before Usage

Each one of these steps must be followed for the service to securely start.

1. Go to the `package.json` and replace the following:
    - EXAMPLE_SERVICE => service name (ex: risk-assessment)
    - EXAMPLE_DESCRIPTION => service description (ex: Verifies customer KYC information)
    - Set the version to `0.0.1`
2. Create a [Service Account](https://cloud.google.com/iam/docs/service-accounts) specifically for this service.
3. Give the service account the following permissions:
    - Artifact Registry Reader
    - Cloud KMS CryptoKey Decrypter
    - Firebase Admin
    - Pub/Sub Publisher
    - Secret Manager Secret Accessor
4. Generate keys for the Service Account in JSON format
5. Create a `service-account.json` under the `/config` directory
6. Copy and Paste the keys JSON in the `service-account.json` file
7. From your terminal run the following command:
```
export GOOGLE_APPLICATION_CREDENTIALS={path to service-account.json}
```
8. Set up the NPM configuration file by running the following command:
```
npm run artifactregistry-login .npmrc
```
9. [Create secrets](https://cloud.google.com/secret-manager) for the service. **Make sure the secret name is the same as the service name**


## Usage
* Installing dependencies
```
npm i
```

* Running tests
To run our unit tests you can run:

```
npm run test
```

* Running lint
To lint the code run:

```
npm run lint
```

* Start Locally
```
npm run dev
```

* Start Locally Using Make (Container)
```
make start
```
* Start Locally with bash (Container)
```
./start.sh
```

## Example
```
import NodeService from '@payhippo/node-service-template';
import * as dotenv from 'dotenv';

import * as pack from '../package.json';

try {
	const apps = NodeService({
		description: pack.description,
		config: {
			env: 'DEVELOPMENT',
			secretVersion: '1',
		},
		name: pack.name,
		routers: { api },
		version: pack.version,
	});

	apps.start();
} catch (error) {
	console.error(`Error occured: ${error.message}`);
}
```

## Importpant Important
- You will need to reauthenticate with `npm run artifactregistry-login .npmrc` whenever you want to pull the latest version of `@payhippo/node-service-base`.

- Ensure when your creating pub-sub topics to use the service name as topic name
 example: `risk-assessment-service`, `payment-service`.

- Also ensure your data in the publisher has a type in its object:
```{
  messageId: '123',
  data: {
    type: 'UPDATE_BANK_STATEMENT',
  }
}```
