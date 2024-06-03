// import '../App.css';
function Introduction(props) {
    // console.log("parameter kiriman : ", props.name);
  return (
    <div>
        <h1>
            INTRODUCTION
        </h1>
        <p>
            nama saya : {props.name}
        </p>
    </div>
  );
}

export default Introduction;
