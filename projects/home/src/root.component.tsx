 import CardWrapperComponent from "./components/card.component";
import SnackbarComponent from "./components/snackbar.component";

export default function Root(props) {
  const center:any = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "200px",
  //  marginLeft: "300px",
   // position: "absolute"
}
  return (
  <>
  <div style={center}>
    <h2>Welcome Back, User (MFE Home Page)!!!!</h2>

  </div>
  <CardWrapperComponent /> 
  </>
  );
}
