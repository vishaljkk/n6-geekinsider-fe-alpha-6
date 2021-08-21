import React from 'react';

const ApplicationManager: React.FC = (props: any) => {
  return (
    <>
        {props.map((e: any) => <div key={e._id}>{e._name}</div>)}
    </>
  )
}

export default ApplicationManager;