import { Card} from '@vector-web-components/core';
import React, { useEffect } from 'react';
export default function SnackbarComponent() {
 

export default function MyComponent() {
    useEffect(() => {
        // Code to run on component initialization
        console.log('Component initialized');


        // Optional cleanup function (runs when the component unmounts)
        return () => {
            console.log('Component unmounted');
        };
    }, 
  }
  return (
    <>
    {/* <Snackbar id="example-snackbar" timeout={5000} onShown={console.log}>
      <p slot="message">Example Snackbar</p>

    </Snackbar> */}
    <h5>Card Component</h5>
    <Card theme='padded elevated'>
    <div slot="header">Shiba Inu</div>
    <div slot="content">The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.</div>
    </Card>
    {/* <h5>Paginator</h5>
    <Paginator page={1} pageSize={25}></Paginator> */}
  </>
  );
}