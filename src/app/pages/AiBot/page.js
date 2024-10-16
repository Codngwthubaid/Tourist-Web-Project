import React from 'react';

const page = () => {
  return (
    <div>
      <div className='flex justify-center items-center'>
        <iframe 
          height="430" 
          width="350" 
          src={`https://console.dialogflow.com/api-client/demo/embedded/df8cbbe5-e8a4-4d73-b3eb-56542e4b4ed6`}
        />
      </div>
    </div>
  )
}

export default page;