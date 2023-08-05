import logo from './logo.svg';
import './App.css';

import image from './fs.png';

function App() {
  return (
  <div>
   
 
    <p id="intro"></p>
    
    <button type="button" onclick="h1()">red</button>
    <button type="button" onclick="h2()">blue</button>
    <button type="button" onclick="h3()">pink</button>
    <button type="button" onclick="h4()">lavender</button>
    
    <h1><b>HEY THERE !!!</b></h1>
        <p><em>THIS IS KARISHMA</em></p>
            
    <h2>EDUCATION</h2>
        <p>completed my schooling at <b><u>VELAMMAL MATRIC HR SEC SCHOOL MADURAI</u></b></p>
        <p> currently pursuing my ug degree in B Tech <b><u>ARTIFICAL INTELLIGENCE AND DATA SCIENCE</u></b></p>
        <img src={image} alt="introimage" width="300" height="150" />
        
     <h2>MARKS</h2>
    <ul type="1" start="1">
        <li>10th - 93%</li>
        <li>12th - 91%</li>
    </ul>
    <div>
        <h2>PROGRAMMING LANGUAGES</h2>
        <ol type="A" start="1" >
            <li>python</li>
            <li>html</li>
            <li>css</li>
        </ol>
        <h2>DOMAINS</h2>
        <ol type="a" start="1">
            <li>AI</li>
            <li>ML</li>
            <li>data science</li>
        </ol>
        <h2>SPOKEN LANGUAGES</h2>
        <ol type="I" start="1">
            <li>tamil</li>
            <li>english</li>
            <li>french</li>
            <li>hindi</li>
            <li>korean</li>
        </ol>
        <h2>HOBBIES</h2>
        <ol type="i" start="1">
            <li>like singing</li>
            <li>like to learn diffrent languages</li>
            <li>like to travel around</li>
            <li>like to read books</li>
            
        </ol>
     </div>
     <div class="grid-container">
        <div class="grid-item">hey !!</div>
        <div class="grid-item">you are</div>
        <div class="grid-item">amazing</div>
    </div>
    <br /><br/><br/>
     <div class="flex-container" >
        <div class="flex-item">have a</div>
        <div class="flex-item">great</div>
        <div class="flex-item">day</div>
    </div>
    
</div>
  );
}

export default App;
