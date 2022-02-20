import Filho from "./Filho";

export default function Pai(props) {
  return (
    <div>
    <h1>Familia {props.familia}</h1>
      <Filho nome="Crhistian" familia={props.familia} />
      <Filho nome="Rafael" familia={props.familia} />
      <Filho {...props} nome="Melius"/>
    </div>
  );
}
