import { Button, VectorTopnavComponent  } from "@vector-web-components/core";
import { DOMAttributes, useEffect, useRef } from "react";

declare global {
    namespace JSX {
      interface IntrinsicElements {
        'vwc-topnav' : any;  // Use 'any' for custom element types
      }
    }
  }
export default function HeaderComponent(){
    const header = useRef(null);
    useEffect(()=>{
      initNavigation();
    }, [])
    function initNavigation() {
        const t = header.current;
        console.log(header.current);
       header.current.setAttribute('user' , JSON.stringify({
            firstName: "Jane",
            lastName: "Doe",
            email: "jack@example.com"
          }))
    header.current.setAttribute('products', JSON.stringify([
        {
          "id": "EVALUATIONS",
          "text": "Evaluations+",
          "link": "javascript:void(0)",
          "imageSrc": "/vwc/@vector-web-components/assets/latest/icons/ep-dark-icon.svg"
        },
        {
          "id": "SCHEDULING",
          "text": "Scheduling",
          "link": "javascript:void(0)",
          "imageSrc": "/vwc/@vector-web-components/assets/latest/icons/sched-dark-icon.svg"
        },
        {
          "id": "CHECK_IT",
          "text": "Check It",
          "link": "javascript:void(0)",
          "imageSrc": "/vwc/@vector-web-components/assets/latest/icons/ci-dark-icon.svg"
        },
        {
          "id": "GUARDIAN_TRACKING",
          "text": "Guardian Tracking",
          "link": "javascript:void(0)",
          "imageSrc": "/vwc/@vector-web-components/assets/latest/icons/gt-dark-icon.svg"
        },
        {
          "id": "NO_IMG",
          "text": "Imageless Product",
          "link": "",
          "imageSrc": ""
        }
      ]))
    }

// initNavigation();
return(
    <>
    <Button onClick={initNavigation}>Load Header</Button>
    <vwc-topnav ref={header} id="topnav" ></vwc-topnav>
     </>
    
)
}