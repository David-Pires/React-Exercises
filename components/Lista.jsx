export default function Lista(props) {
  return (
    <div>
      <h1>
        <ul style={{
          listStyle: "none",
          padding: 0,
        }}>
        {props.children}
        </ul>
      </h1>
    </div>
  );
}
