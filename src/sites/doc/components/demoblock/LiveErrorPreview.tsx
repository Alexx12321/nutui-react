import React from 'react';
import { LiveError, LivePreview } from 'react-live';

const LiveErrorPreview: React.FC = ({code}) => {
  return (
    <>
      <LiveError />
      <LivePreview />
    </>
  );
};

export default LiveErrorPreview;
