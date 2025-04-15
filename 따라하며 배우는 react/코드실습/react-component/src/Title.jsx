function Title (props) {
    return (
      <>
        <h1
            style={{color: props.H1color}}>
            Title1
        </h1>

        <h2>Title2</h2>
        
        <h2 
            style={{color: props.H2color}}>
            Title3
        </h2>
        <h6
            style={{color: props.H2color}}>
            Title6
        </h6>
      </>
    );
  }
  export default Title;