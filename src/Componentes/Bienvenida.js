export default function Bienvenida(props){
      return(
        <div id="InfoPrincipal">
          <section id="Info1">
            <span id="Detalles">
              <div>
                  <h2>Hola, Yo soy<br></br>
                  <span>{props.valor}</span> <span>{props.valor2}</span></h2>
                  <p>Estudio actualmente la carrera de Ingenieria en ciencias de la computacion, ya que
                  me fascina todo lo que se puede realizar mediante un programa informatico.
                  </p>
              </div>
            </span>
          </section>
          <section id="Skills">
            <div>
              Skills en Programacion
            </div>
            <div>
              <section className="MySkills">
                <span className="Porcentaje">
                  {props.pr1}
                </span>
              </section>
              <section className="MySkills">
              <span className="Porcentaje">
                {props.pr2}
                </span>
              </section>
              <section className="MySkills">
              <span className="Porcentaje">
                {props.pr3}
                </span>
              </section>
              <section className="MySkills">
              <span className="Porcentaje">
                {props.pr4}
                </span>  
              </section>
            </div>
          </section>
        </div>
      )
  }