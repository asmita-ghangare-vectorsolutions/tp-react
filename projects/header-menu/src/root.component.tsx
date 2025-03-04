import HeaderComponent from "./header/header.component";

export default function Root(props) {
  return(
  <>
  <section>{props.name} is mounted!</section>
  <HeaderComponent />
  </>
  );
}
