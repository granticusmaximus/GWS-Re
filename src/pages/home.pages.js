import { Row, Col, Container, Card } from 'react-bootstrap'
import pdf from '../../assets/pdf/gwresume.pdf'
import ux from '../../assets/img/ux.jpeg'
import webdev from '../../assets/img/webdev.jpeg'
import webhost from '../../assets/img/webhost.jpeg'
import softwareDev from '../../assets/img/SoftwareDeveloper.jpeg'
import GitHubCalendar from 'react-github-calendar';
import Image from "react-bootstrap/Image"
import ImageGrid from '../components/progimggid.component'
import logo from '../../assets/img/logo.png'

export const HOMEPAGE_ROUTE = '/';

const randomUnsplash = () => {
  const splashes = [
      "https://images.unsplash.com/photo-1431512284068-4c4002298068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
      "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
      "https://images.unsplash.com/photo-1562839492-20a189fafbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1422564030440-1ecae6e21f67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80",
      "https://images.unsplash.com/photo-1543096757-a42d5d384910?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80"
  ]

  return splashes[Math.floor(Math.random() * splashes.length)];
}

function Home({ blogs, toggleSidebar }) {
  return (
    <div className="HomePage">
      <div className="my-5 text-center">
                        <input
                            className="blog-search rounded border px-4 py-2 focus:outline-none"
                            placeholder="Search blogs..."
                            value={query} onChange={event => setQuery(event.target.value)} />
      </div>
      <Image src={logo} width={175} roundedCircle />
        <h3>Welcome to my website!</h3>
        <h1>
          If you have not guessed it, my name is Grant Watson and I am a freelance software engineer for hire. To see my resume: 
        </h1>
        <a href={pdf} rel="noreferrer" target="_blank" className="btn btn-primary">Click Here</a>
        <hr/>
        <p>
        I am on Upwork as well! If you have a project that you wish for me to start working on through UpWork, <a href='https://www.upwork.com/freelancers/~017cb997c760da76e7' rel="noreferrer" target="_blank">hire me</a> there!
        </p>
        <hr />
        <br/>
        <h1>
          Services offered:
        </h1>
        <br/>
        <center>
          <Row>
              <Col>
                <Card className="home" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={ux} />
                  <Card.Body>
                    <Card.Title>Web Design</Card.Title>
                    <Card.Text>
                    As a business, you need to get online. Maybe you have a website right now, but it does not meet your expectations or desires.
                    I work with most frameworks and technologies: Wordpress, ReactJS, C#, Blazor, VueJS, KnockoutJS and will love to work with you to design a beautiful website.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={webdev} />
                  <Card.Body>
                    <Card.Title>Web Development</Card.Title>
                    <Card.Text>
                      It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.
                      Or maybe you have a creative project to share with the world. Whatever your dream may be, if you want to start from the ground up and have
                      something developed that you can access anywhere with an internet connection, contact me today!
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={webhost} />
                  <Card.Body>
                    <Card.Title>Web Hosting and Transcriptions</Card.Title>
                    <Card.Text>
                      I do not own any servers to host your site, but I will get you set up and running on the best plan for
                      your budget for your web site or application. I also offer my services as a transcriptionist to those
                      who have a podcast, audio file, video, Twitch stream, what have you that needs a transcription of the audio,
                      I will be glad to offer my services to you!
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
        </center>
        <br/>
        <hr/>
        <div className="blog-card-holder">
                        {
                            blogs.length === 0 ?
                                <div className="text-center py-5">Nothing here!</div> :
                                (query.trim().length === 0 ? blogs.filter(b => b.isPublished) : blogs.filter(b => b.isPublished && b.title.toLowerCase().includes(query.trim().toLowerCase()))) // filtering blogs if filter not empty
                                    .map((blog, i) => {
                                        const image = blog.image || randomUnsplash();
                                        return (
                                            <Link className="blog-card" key={i} to={blog.url}>
                                                <div className="blurred-bg" style={{ backgroundImage: 'url(' + image + ')' }}></div>
                                                <div className="blog-image">
                                                    <img
                                                        src={image}
                                                        alt={blog.title} />
                                                </div>
                                                <div className="blog-title">
                                                    {blog.title}
                                                </div>
                                            </Link>
                                        )
                                    })
                        }
          </div>
        <hr />
        <br/>
        <hr/>
        <p>This section will show latest merch/code to purchase</p> 
        <hr />
        <br/>
        <hr/>
        <h1>My Github Contributions</h1>
        <p>To view projects, click <a href='https://github.com/granticusmaximus' rel="noreferrer" target="_blank">here</a>.</p>
        <center>
          <GitHubCalendar username="granticusmaximus"  hideTotalCount hideColorLegend/>
        </center>
        <hr/>
        <Row>
          <Col>
            <img src={softwareDev} height={400} width={500} />
          </Col>
          <Col>
            <p>
              It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference. I am passionate about building better technology.
            </p>
            <p>
              My job is to get you the web app, desktop app, or mobile app of your dreams so that you can start building your business. I am here to listen to you, hear your dreams and ideas, and build them into your dynasty. 
            </p>
            <a href='/contact' className='btn btn-outline-warning'>Get Online Today!</a>
          </Col>
        </Row>
        <hr/>
        <div className='jumbotron jumbotron-fluid'>
          <h3
            style={{ color: 'white' }}
          >
            Languages I have worked with section
          </h3>
        </div> 
        <ImageGrid />
        <hr />
        

     
    </div>
  );
}

export default Home;
