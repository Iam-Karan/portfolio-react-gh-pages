import React from "react";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <section id="ContactMe">
      <div class="container">
        <div class="content">
          <div class="left-side">
            <div class="address details">
              <i class="fas fa-map-marker-alt"></i>
              <div class="topic">Address</div>
              <div class="text-one">AB, Canada</div>
            </div>
            <div class="phone details">
              <i class="fas fa-phone-alt"></i>
              <div class="topic">Phone</div>
              <div class="text-one">+1 514 804 6697</div>
            </div>
            <div class="email details">
              <i class="fas fa-envelope"></i>
              <div class="topic">Email</div>
              <div class="text-one">Patelkaran.0606@gmail.com</div>
            </div>
          </div>
          <div class="right-side">
            <div class="topic-text">Send Me a message</div>
            <p>
              If you are an employer with a job or if you have work for me,
              please feel free to reach out to me using my contact info. It's my
              pleasure to help you.
            </p>
            <form action="#">
              <div class="input-box">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div class="input-box">
                <input type="text" placeholder="Enter your email" />
              </div>
              <div class="input-box message-box">
                <input type="text" placeholder="Enter your message" />
              </div>
              <div class="button">
                <input type="button" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
