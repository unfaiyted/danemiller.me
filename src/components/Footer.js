import React, { Component } from 'react';
import '../styles/Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className='half-section footer'>


        <p>Thank you</p>

          <div>
              <a href="mailto:miller.l.dane@gmail.com">miller.l.dane@gmail.com</a>
          </div>

          <div>
            <a href="http://github.com/unfaiyted">
                <i className="fab fa-git-square fa-2x"></i>
            </a>
             <a href="http://linkedin.com/in/danelmiller">
               <i className="fab fa-linkedin fa-2x"></i>
             </a>

           <a href="https://www.reddit.com/user/unfaiyted">
             <i className="fab fa-reddit-square fa-2x"></i>
           </a>
          <div>

           <span>&copy; Dane L Miller. All rights reserved.</span>
          </div>
        </div>

      </footer>
    );
  }
}

export default Footer;
