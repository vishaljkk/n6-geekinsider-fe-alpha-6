import React, { FC } from 'react';

const ApplicationManager: <FC> = (props: any) => {
  useEffect(() => {
    
  }, [])
  return (
    <>
        {props.map(e => <div key={e._id}>{e._name}</div>)}
    </>
  )
}
