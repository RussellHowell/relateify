import * as React from 'react';

export interface SpotAuthContext {
  accessToken?: string
}

const defaultValue: SpotAuthContext = { accessToken: undefined }

const SpotAuthContext = React.createContext(defaultValue);

export default SpotAuthContext; 