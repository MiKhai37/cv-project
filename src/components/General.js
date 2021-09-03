import "../styles/General.css";

const General = (props) => {
  const { general } = props;

    return ( 
      <div>
        <section>
          <div>
            {general.first} {general.last}
          </div>
          <div>
            {general.address}
          </div>
          <div>
            {general.mail}
          </div>
          <div>
            {general.phone}
          </div>
        </section>
      </div>
    );
}

export default General;