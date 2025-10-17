import React from 'react'
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import Html from './Html'
import Css from './Css'
import JavaScript from './JavaScript'
import Java from './Java'
import Php from './Php'
import C from './C'
import CPulsPuls from './CPulsPuls'
import Python from './Python'
import Swift from './Swift'
import Go from './Go'
import Sql from './Sql'
import JsReact from './JsReact'
import DropDown from './DropDown'
import List from './List'
import Card from './Card'
import WebIntro from './WebIntro'
import Footer from '../Footer/Footer'


function Navbar() {
  let Navigate = useNavigate();
  return (
    <>
                  {/* <NavLink className="btn btn-outline-info d-flex me-2" to="/html">HTML</NavLink> */}

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className=" navbar-collapse">
            <div className="navbar-nav me-auto">
              <button className='btn d-flex me-2 text-dark' onClick={() => Navigate(-1)}><h1>&#8592;</h1></button>
              <button className='btn d-flex me-2 text-dark' onClick={() => Navigate(+1)}><h1>&#x2192;</h1></button>
              <NavLink className="navbar-brand btn btn-outline-light d-flex me-2" to="/"><h1>HOME</h1></NavLink>
              <NavLink className="btn btn-outline-info d-flex me-2" to="/html">HTML</NavLink>
              <NavLink className="btn btn-outline-info d-flex me-2" to="/css">CSS</NavLink>
              <NavLink className="btn btn-outline-info d-flex me-2" to="/js">JavaScript</NavLink>
              <NavLink className="btn btn-outline-info d-flex me-2" to="/react">JS React</NavLink>
              <NavLink className="btn btn-outline-info d-flex me-2" to="/java">Java</NavLink>
              <NavLink className="btn btn-outline-info d-flex me-2" to="/php">PHP</NavLink>
              <NavLink className="btn btn-outline-info d-flex me-2" to="/c">C Language</NavLink>
              <NavLink className="btn btn-outline-info d-flex me-2" to="/c++">C++</NavLink>
              <NavLink className="btn btn-outline-info d-flex me-2" to="/python">Python</NavLink>
              <NavLink className="btn btn-outline-info d-flex me-2" to="/swift">Swift</NavLink>
              <NavLink className="btn btn-outline-info d-flex me-2" to="/go">Go</NavLink>
              <NavLink className="btn btn-outline-info d-flex me-2" to="/sql">SQL</NavLink>

              <DropDown />
            </div>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <hr />

      <div>

        <Routes>
          <Route path='/' element={<>


            <h1 className='text-center text-danger bg-info container'>Welcome Programming language Intro Web</h1>

            <hr />






            <div className='container carousel carousel-dark slide'>
              <div className='row '>
                <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-9 ">
                  <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner ">
                      <div className="carousel-item active ">
                        <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100 " alt="..." />
                        <div className="carousel-caption d-none d-md-block text-dark  text-dark">
                          <h5>First slide label</h5>
                          <p>Some representative placeholder content for the first slide.</p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block  text-dark">
                          <h5>Second slide label</h5>
                          <p>Some representative placeholder content for the second slide.</p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block  text-dark">
                          <h5>Third slide label</h5>
                          <p>Some representative placeholder content for the third slide.</p>
                        </div>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>

                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                  <DropDown />
                  <List />
                </div>

              </div>
            </div>



            <hr />
            <Card />
            <WebIntro />
            <Footer />

          </>}></Route>

          <Route path='/html' element={<Html/>}>
            <Route path='html1' element={<>
              <p>HTML stands for Hyper Text Markup Language</p>
              <p>HTML is the standard markup language for creating Web pages</p>
              <p>HTML describes the structure of a Web page</p>
              <p>HTML consists of a series of elements</p>
              <p>HTML elements tell the browser how to display the content</p>
              <p>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</p>
            </>}></Route>
            <Route path='html2' element={<>
              <p></p> An HTML element is defined by a start tag, some content, and an end tag:
              <p></p> Content goes here...
              <p></p> The HTML element is everything from the start tag to the end tag:
              <p></p> My First Heading
              <p></p> My first paragraph.
            </>}></Route>
            <Route path='html3' element={<>
              <p></p>Year	Version
              <p></p>1989	Tim Berners-Lee invented www
              <p></p>1991	Tim Berners-Lee invented HTML
              <p></p>1993	Dave Raggett drafted HTML+
              <p></p>1995	HTML Working Group defined HTML 2.0
              <p></p>1997	W3C Recommendation: HTML 3.2
              <p></p>1999	W3C Recommendation: HTML 4.01
              <p></p>2000	W3C Recommendation: XHTML 1.0
              <p></p>2008	WHATWG HTML5 First Public Draft
              <p></p>2012	WHATWG HTML5 Living Standard
              <p></p>2014	W3C Recommendation: HTML5
              <p></p>2016	W3C Candidate Recommendation: HTML 5.1
              <p></p>2017	W3C Recommendation: HTML5.1 2nd Edition
              <p></p>2017	W3C Recommendation: HTML5.2
            </>}></Route>
            <Route path='html4' element={<>
              <p>All HTML documents must start with a document type declaration:.</p>
              <p></p>The HTML document<b> itself begins with  and ends with</b>
              <p></p>The visible part of the HTML document is between .
            </>}></Route>
          </Route>



          <Route path='/css' element={<Css />}>

            <Route path='css1' element={<>
              <p></p>CSS stands for Cascading Style Sheets
              <p></p>CSS describes how HTML elements are to be displayed on screen, paper, or in other media
              <p></p>CSS saves a lot of work. It can control the layout of multiple web pages all at once
              <p></p>External stylesheets are stored in CSS files
            </>}></Route>
            <Route path='css2' element={<>
              <p></p>CSS is used to define styles for your web pages,
              <p></p>including the design,layout and variations in display for
              <p></p>different devices and screen sizes.
            </>}></Route>
            <Route path='css3' element={<>
              <p></p>There are three ways of inserting a style sheet:
              <p></p>  . External CSS
              <p></p>  . Internal CSS
              <p></p>  . Inline CSS

            </>}></Route>
            <Route path='css4' element={<>
              <p></p>In CSS, colors can also be specified using
              <p></p>. RGB values,
              <p></p>. HEX values,
              <p></p>. HSL values,
              <p></p>. RGBA values,
              <p></p>. HSLA values:
            </>}></Route>
          </Route>


          <Route path='/js' element={<JavaScript />}>
            <Route path='javascript1' element={<>
              <p></p>JavaScript is a scripting or programming language that
              <p></p> allows you to implement complex features on web pages
            </>}></Route>
            <Route path='javascript2' element={<>
              <p></p>One of many JavaScript HTML methods is getElementById().
              <p></p>The example below "finds" an HTML element (with id="demo"),
              <p></p>and changes the element content (innerHTML) to "Hello JavaScript":
            </>}></Route>
            <Route path='javascript3' element={<>
              <p></p>JavaScript is one of the 3 languages all web developers must learn:
              <p></p>1. HTML to define the content of web pages
              <p></p>2. CSS to specify the layout of web pages
              <p></p>3. JavaScript to program the behavior of web pages
            </>}></Route>
            <Route path='javascript4' element={<>
              <h2>.How do I get JavaScript?</h2>
              <h2>.Where can I download JavaScript?</h2>
              <h2>.Is JavaScript Free?</h2>
              <p></p> You don't have to get or download JavaScript.
              <p></p> JavaScript is already running in your browser on your computer, on your tablet, and on your smart-phone.
              <p></p> JavaScript is free to use for everyone.
            </>}></Route>
          </Route>



          <Route path='/react' element={<JsReact />}>
            <Route path='react1' element={<p>
              <p></p>React, sometimes referred to as a frontend JavaScript framework,
              <p></p>is a JavaScript library created by Facebook.
              <p></p>React is a tool for building UI components.
            </p>}></Route>
            <Route path='react2' element={<p>
              <p></p>React creates a VIRTUAL DOM in memory.
              <p></p>
              <p></p>Instead of manipulating the browser's DOM directly, React creates
              <p></p>a virtual DOM in memory, where it does all the necessary manipulating,
              <p></p>before making the changes in the browser DOM.
              <p></p>
              <p></p>React only changes what needs to be changed!
              <p></p>
              <p></p>React finds out what changes have been made, and changes only what needs to be changed.
              <p></p>You will learn the various aspects of how React does this in the rest of this tutorial.
            </p>}></Route>
            <Route path='react3' element={<p>
              <p></p>Current version of React.JS is V18.0.0 (April 2022).
              <p></p>
              <p></p>Initial Release to the Public (V0.3.0) was in July 2013.
              <p></p>
              <p></p>React.JS was first used in 2011 for Facebook's Newsfeed feature.
              <p></p>
              <p></p>Facebook Software Engineer, Jordan Walke, created it.
              <p></p>
              <p></p>Current version of create-react-app is v5.0.1 (April 2022).
            </p>}></Route>
            <Route path='react4' element={<p>
              Now you are ready to run your first real React application!
              <p></p>
              Run this command to move to the my-react-app directory:
            </p>}></Route>
          </Route>




          <Route path='/java' element={<Java />}>
            <Route path='java1' element={<>
              <br></br>Java is a popular programming language, created in 1995.<br></br>
              It is owned by Oracle, and more than <b>3 billion </b> devices run Java.<br></br>
              It is used for:<br></br>
              . Mobile applications (specially Android apps)<br></br>
              . Desktop applications<br></br>
              . Web applications<br></br>
              . Web servers and application servers<br></br>
              . Games<br></br>
              . Database connection<br></br>
              . And much, much more!<br></br>

            </>}></Route>
            <Route path='java2' element={<p>
              . Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)<br></br>
              . It is one of the most popular programming language in the world<br></br>
              . It has a large demand in the current job market<br></br>
              . It is easy to learn and simple to use<br></br>
              . It is open-source and free<br></br>
              . It is secure, fast and powerful<br></br>
              . It has a huge community support (tens of millions of developers)<br></br>
              . Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs<br></br>
              . As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa<br></br>
            </p>}></Route>
            <Route path='java3' element={<p>
              <p></p>In the previous chapter, we used the term "variable"
              <p></p>for x in the example (as shown below). It is actually
              <p></p>an attribute of the class. Or you could say that class
              <p></p>attributes are variables within a class:
            </p>}></Route>
            <Route path='java4' element={<p>
              <p></p>A constructor in Java is a special method that is used to
              <p></p>initialize objects. The constructor is called when an object
              <p></p>of a class is created.
              <p></p>It can be used to set initial values for object attributes:
            </p>}></Route>
          </Route>


          <Route path='/php' element={<Php />}>
            <Route path='php1' element={<p>
              <p></p>. PHP is an acronym for "PHP: Hypertext Preprocessor"
              <p></p>. PHP is a widely-used, open source scripting language
              <p></p>. PHP scripts are executed on the server
              <p></p>. PHP is free to download and use
            </p>}></Route>
            <Route path='php2' element={<p>
              <p></p>Before you continue you should have a basic understanding of the following:

              <p></p>. HTML
              <p></p>. CSS
              <p></p>. JavaScript
              <p></p>If you want to study these subjects first, find the tutorials on our Home page.
            </p>}></Route>
            <Route path='php3' element={<p>
              <p></p>. PHP files can contain text, HTML, CSS, JavaScript, and PHP code
              <p></p>. PHP code is executed on the server, and the result is returned to the browser as plain HTML
              <p></p>. PHP files have extension ".php"
            </p>}></Route>
            <Route path='php4' element={<p>
              <p></p><b>.</b> PHP can generate dynamic page content
              <p></p><b>.</b> PHP can create, open, read, write, delete, and close files on the server
              <p></p><b>.</b> PHP can collect form data
              <p></p><b>.</b> PHP can send and receive cookies
              <p></p><b>.</b> PHP can add, delete, modify data in your database
              <p></p><b>.</b> PHP can be used to control user-access
              <p></p><b>.</b> PHP can encrypt data
              <p></p><b>.</b> With PHP you are not limited to output HTML. You can output images or PDF files.
              <p></p>You can also output any text, such as XHTML and XML.
            </p>}></Route>
          </Route>

          <Route path='/c' element={<C />}>
            <Route path='c1' element={<p>
              C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972.
              <p></p>
              It is a very popular language, despite being old. The main reason for its popularity is because it is a fundamental language in the field of computer science.
              <p></p>
              C is strongly associated with UNIX, as it was developed to write the UNIX operating system.
            </p>}></Route>
            <Route path='c2' element={<p>
              <p></p> <b>.</b> It is one of the most popular programming language in the world
              <p></p> <b>.</b> If you know C, you will have no problem learning other popular programming languages
              <p></p> such as Java, Python, C++, C#, etc, as the syntax is similar
              <p></p> <b>.</b> C is very fast, compared to other programming languages, like Java and Python
              <p></p> <b>.</b> C is very versatile; it can be used in both applications and technologies
            </p>}></Route>
            <Route path='c3' element={<p>
              <p></p> <b>.</b>C++ was developed as an extension of C,
              <p></p> and both languages have almost the same syntax
              <p></p> <b>.</b>The main difference between C and C++ is that
              <p></p> C++ support classes and objects, while C does not
            </p>}></Route>
            <Route path='c4' element={<p>
              This tutorial will teach you the basics of C.
              <p></p>
              It is not necessary to have any prior programming experience.
            </p>}></Route>
          </Route>

          <Route path='/C++' element={<CPulsPuls />}>
            <Route path='c++1' element={<p>
              <p></p>    C++ is a cross-platform language that can be used to create high-performance applications.
              <p></p>
              C++ was developed by Bjarne Stroustrup, as an extension to the C language.
              <p></p>
              C++ gives programmers a high level of control over system resources and memory.
              <p></p>
              The language was updated 4 major times in 2011, 2014, 2017, and 2020 to C++11, C++14, C++17, C++20.
            </p>}></Route>
            <Route path='c++2' element={<p>
              <p></p>    C++ is one of the world's most popular programming languages.

              C++ can be found in today's operating systems, Graphical User Interfaces, and embedded systems.
              <p></p>
              C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs.
              <p></p>
              C++ is portable and can be used to develop applications that can be adapted to multiple platforms.
              <p></p>
              C++ is fun and easy to learn!
              <p></p>
              As C++ is close to C, C# and Java, it makes it easy for programmers to switch to C++ or vice versa.
            </p>}></Route>
            <Route path='c++3' element={<p>
              <p></p>      C++ was developed as an extension of C, and both languages have almost the same syntax.
              <p></p>
              <p></p>The main difference between C and C++ is that C++ support classes and objects, while C does not.
            </p>}></Route>
            <Route path='c++4' element={<p>
              This tutorial will teach you the basics of C++.
              <p></p>
              It is not necessary to have any prior programming experience.
            </p>}></Route>
          </Route>

          <Route path='/python' element={<Python />}>
            <Route path='python1' element={<p>
              <p></p>Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.
              <p></p>It is used for
              <p></p>. web development (server-side),
              <p></p>. software development,
              <p></p>. mathematics,
              <p></p>. system scripting.
            </p>}></Route>
            <Route path='python2' element={<p>
              <p></p>. Python can be used on a server to create web applications.
              <p></p>. Python can be used alongside software to create workflows.
              <p></p>. Python can connect to database systems. It can also read and modify files.
              <p></p>. Python can be used to handle big data and perform complex mathematics.
              <p></p>. Python can be used for rapid prototyping, or for production-ready software
            </p>}></Route>
            <Route path='python3' element={<p>
              <p></p>. Python works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc).
              <p></p>. Python has a simple syntax similar to the English language.
              <p></p>. Python has syntax that allows developers to write programs with fewer lines than some other programming languages.
              <p></p>. Python runs on an interpreter system, meaning that code can be executed as soon as it is written. This means that prototyping can be very quick.
              <p></p>. Python can be treated in a procedural way, an object-oriented way or a functional way.
            </p>}></Route>
            <Route path='python4' element={<p>
              <p></p> . The most recent major version of Python is Python 3,
              <p></p> which we shall be using in this tutorial. However, Python 2,
              <p></p> although not being updated with anything other than security updates,
              <p></p>  is still quite popular.
              <p></p> . In this tutorial Python will be written in a text editor.
              <p></p> It is possible to write Python in an Integrated Development '
              <p></p> Environment, such as Thonny, Pycharm, Netbeans or Eclipse which
              <p></p> are particularly useful when managing larger collections of Python files.
            </p>}></Route>
          </Route>

          <Route path='/swift' element={<Swift />}>
            <Route path='swift1' element={<p>
              <p></p>Swift is a general purpose, multi-paradigm, compiled programmin
              <p></p>g language for developing iOS and OS X tvOS, watchOS applications. It
              <p></p> is developed by Apple Inc. It is powerful and intutive language which is easy to learn. Swift code is safe, precise and runs very fast.
              <p></p>Swift follows Objective-C runtime library which allows C, Objec
              <p></p>tive-C, C++ and Swift code to run within one program. Swift is built
              <p></p>with open source LLVM compiler and included in Xcode since version 6.
            </p>}></Route>
            <Route path='swift2' element={<p>
              <p></p>Swift 4 adopts the features of C and Objective-C without having the
              <p></p>complexity of C language.
              <p></p>
              <p></p>. Swift 4 uses a safe programming approach. It is very easy to laern and precise to use.
              <p></p>. Swift 4 provides a enhanced set of modern programming features.
              <p></p>. Swift 4 follows the Objective-C like syntax.
              <p></p>. Swift 4 provides an easy way to write iOS and OS X apps.
              <p></p>. Swift 4 provides seamless access to existing Cocoa frameworks.
              <p></p>. Swift 4 unifies the procedural and object-oriented portions of the language.
              <p></p>. Swift 4 does not need a separate library import to support functionalities like input/output or string handling.
            </p>}></Route>
            <Route path='swift3' element={<p>
              <p></p>Version	Released Date
              <p></p>Swift 1.0 ----2014-09-09
              <p></p>Swift 1.1 ----2014-10-22
              <p></p>Swift 1.2 ----2015-04-08
              <p></p>Swift 2.0 ----2015-09-21
              <p></p>Swift 3.0 ----2016-09-13
              <p></p>Swift 4.0 ----2017-09-19
              <p></p>Swift 4.1 ----2018-03-29
              <p></p>Swift 4.2 ----2018-09-17
            </p>}></Route>
            <Route path='swift4' element={<p>
              <p></p>In Swift 4, you don't need to type a semicolon (;) in your
              <p></p>code as a closing statement. Though, it is optional, you can
              <p></p> use it without any problem. If you are using multiple statements
              <p></p>in the same line, then you have to use a semicolon as a delimiter,
              <p></p>otherwise the compiler will raise a syntax error.
            </p>}></Route>
          </Route>

          <Route path='/go' element={<Go />}>
            <Route path='go1' element={<p>
              <p></p>. Go is a cross-platform, open source programming language
              <p></p>. Go can be used to create high-performance applications
              <p></p>. Go is a fast, statically typed, compiled language that feels like a dynamically typed, interpreted language
              <p></p>. Go was developed at Google by Robert Griesemer, Rob Pike, and Ken Thompson in 2007
              <p></p>. Go's syntax is similar to C++
            </p>}></Route>
            <Route path='go2' element={<p>
              <p></p>. Web development (server-side)
              <p></p>. Developing network-based programs
              <p></p>. Developing cross-platform enterprise applications
              <p></p>. Cloud-native development
            </p>}></Route>
            <Route path='go3' element={<p>
              <p></p>. Go is fun and easy to learn
              <p></p>. Go has fast run time and compilation time
              <p></p>. Go supports concurrency
              <p></p>. Go has memory management
              <p></p>. Go works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)

            </p>}></Route>
            <Route path='go4' element={<p>
              This tutorial will teach you the basics of Go.
              <p></p>
              It is not necessary to have any prior programming experience.
            </p>}></Route>
          </Route>

          <Route path='/sql' element={<Sql />}>
            <Route path='sql1' element={<p>
              <p></p>. SQL stands for Structured Query Language
              <p></p>. SQL lets you access and manipulate databases
              <p></p>. SQL became a standard of the American National Standards Institute
              <p></p> (ANSI) in 1986, and of the International Organization for Standardization (ISO) in 1987
            </p>}></Route>
            <Route path='sql2' element={<p>
              <p></p>. SQL can execute queries against a database
              <p></p>. SQL can retrieve data from a database
              <p></p>. SQL can insert records in a database
              <p></p>. SQL can update records in a database
              <p></p>. SQL can delete records from a database
              <p></p>. SQL can create new databases
              <p></p>. SQL can create new tables in a database
              <p></p>. SQL can create stored procedures in a database
              <p></p>. SQL can create views in a database
              <p></p>. SQL can set permissions on tables, procedures, and views

            </p>}></Route>
            <Route path='sql3' element={<p>
              Although SQL is an ANSI/ISO standard, there are different versions of the SQL language.
              <p></p>
              <p></p>However, to be compliant with the ANSI standard, they all support at least the major commands
              <p></p>(such as SELECT, UPDATE, DELETE, INSERT, WHERE) in a similar manner.
            </p>}></Route>
            <Route path='sql4' element={<p>
              To build a web site that shows data from a database, you will need:
              <p></p>
              <p></p>. An RDBMS database program (i.e. MS Access, SQL Server, MySQL)
              <p></p>. To use a server-side scripting language, like PHP or ASP
              <p></p>. To use SQL to get the data you want
              <p></p>. To use HTML / CSS to style the page
            </p>}></Route>
          </Route>

        </Routes>



      </div>











    </>
  )
}

export default Navbar