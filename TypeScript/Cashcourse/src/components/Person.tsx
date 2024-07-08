interface PersonProps {
    Fullname: string;
    age: number;
    married: boolean;
    }

const Person = (props:PersonProps) => {
  return (
    <>
    <p>Name={props.Fullname}</p>
    <p>Age={props.age}</p>
    <p>The Person is {props.married? "is married": "is single"}</p>
    </>
  )
}

export default Person