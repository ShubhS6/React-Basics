import './App.css'

function App() {
  const name="john";
  const profession="full stack developer";
  const Projects=[
    {
    title:"project 1",
    description:"A web Application",
    link:"#"
  },
  {
    title:"project 2",
    description:"A web Application",
    link:"#"
  },
  {
    title:"project 3",
    description:"A web Application",
    link:"#"
  }
]
  return (
    <div className="App">
      <header className='header'>
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
        </nav>
      </header>

      {/* About section */}

      <section id='about' className='about-section'>
        <h2>About me</h2>
        <p>Hello I am {name}, a passionate {profession}</p>
      </section>


      {/* project Section */}
      <section id='projects' className='projects-section'>
        <h2>Projects</h2>
        <div className='projects-list'>
          {Projects.map((project,index)=>(
            <div key={index} className='project-item'>
                <h3>{project.title}</h3>
                <h3>{project.description}</h3>
              </div>
          ))}
        </div>
      </section>


     </div>
      )
}

export default App
